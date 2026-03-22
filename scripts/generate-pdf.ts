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

  // Hide elements not needed in PDF
  await page.addStyleTag({
    content: `
      /* Hide nav, back link, download buttons, chatbot */
      nav { display: none !important; }
      a[href="/"] { display: none !important; }
      a[download] { display: none !important; }
      div:has(> a.cta-primary[download]) { display: none !important; }
      button[style*="position: fixed"] { display: none !important; }
      div[style*="position: fixed"] { display: none !important; }
      /* White background */
      body { background: #fff !important; }
    `,
  });

  // Reduce top padding (from 100px nav offset to 32px)
  await page.evaluate(() => {
    const container = document.querySelector('div[style*="100px 32px"]') as HTMLElement;
    if (container) {
      container.style.paddingTop = "32px";
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
