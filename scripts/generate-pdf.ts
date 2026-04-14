/**
 * 経歴書ページ（/resume）をPDFに変換するスクリプト
 *
 * 使い方:
 *   1. npm run dev (別ターミナルでdevサーバーを起動)
 *   2. npm run generate-pdf
 */

import { chromium } from "playwright";
import path from "path";

const OUTPUT_PATH = path.resolve(__dirname, "../public/業務経歴書_松井慶太.pdf");
const RESUME_URL = process.argv[2] || "http://localhost:3000/resume";

async function main() {
  console.log(`Fetching: ${RESUME_URL}`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(RESUME_URL, { waitUntil: "networkidle" });

  // Wait for fonts
  await page.waitForTimeout(2000);

  // Expand collapsed project list
  await page.evaluate(() => {
    // Click the "全 N 件を表示 ▼" button if present
    const buttons = Array.from(document.querySelectorAll("button"));
    const expandBtn = buttons.find((b) => b.textContent?.includes("件を表示"));
    if (expandBtn) expandBtn.click();
  });
  await page.waitForTimeout(300);

  // Hide elements not needed in PDF
  await page.addStyleTag({
    content: `
      /* Hide nav, back/download buttons, chatbot, no-print elements */
      nav { display: none !important; }
      .no-print { display: none !important; }
      button[style*="position: fixed"] { display: none !important; }
      div[style*="position: fixed"] { display: none !important; }
      /* White background */
      body { background: #fff !important; }
      /* Ensure collapsible content is fully visible */
      .collapsible-content { max-height: none !important; overflow: visible !important; }
    `,
  });

  // Reduce top padding for print
  await page.evaluate(() => {
    const container = document.querySelector(".resume-page") as HTMLElement;
    if (container) {
      container.style.paddingTop = "24px";
    }
  });

  await page.pdf({
    path: OUTPUT_PATH,
    format: "A4",
    margin: { top: "16mm", bottom: "16mm", left: "12mm", right: "12mm" },
    printBackground: true,
    displayHeaderFooter: false,
  });

  await browser.close();
  console.log(`PDF generated: ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
