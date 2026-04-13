"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * キャリアセクション用アニメーション背景
 * ノード間を繋ぐ青いネットワーク線が静かに漂う
 */
export default function CareerBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const W = containerRef.current.clientWidth;
    const H = containerRef.current.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-W / 2, W / 2, H / 2, -H / 2, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0); // 透明
    containerRef.current.appendChild(renderer.domElement);

    // ノード数・最大接続距離
    const NODE_COUNT = 28;
    const MAX_DIST = 160;

    // ノードの初期位置・速度
    type Node = { x: number; y: number; vx: number; vy: number };
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: (Math.random() - 0.5) * W,
      y: (Math.random() - 0.5) * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    // ノードのドット
    const dotMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 3.5,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: false,
    });
    const dotPositions = new Float32Array(NODE_COUNT * 3);
    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    scene.add(new THREE.Points(dotGeometry, dotMaterial));

    // ライン（最大ノード数 × (ノード数-1) / 2 本分のバッファ）
    const MAX_LINES = (NODE_COUNT * (NODE_COUNT - 1)) / 2;
    const linePositions = new Float32Array(MAX_LINES * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.18 });
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    const handleResize = () => {
      if (!containerRef.current) return;
      const nW = containerRef.current.clientWidth;
      const nH = containerRef.current.clientHeight;
      camera.left = -nW / 2; camera.right = nW / 2;
      camera.top = nH / 2;   camera.bottom = -nH / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener("resize", handleResize);

    let animId: number;

    const animate = () => {
      // ノード移動 + 折り返し
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        const hw = (containerRef.current?.clientWidth  ?? W) / 2 + 20;
        const hh = (containerRef.current?.clientHeight ?? H) / 2 + 20;
        if (n.x >  hw || n.x < -hw) n.vx *= -1;
        if (n.y >  hh || n.y < -hh) n.vy *= -1;
      });

      // ドット座標更新
      nodes.forEach((n, i) => {
        dotPositions[i * 3]     = n.x;
        dotPositions[i * 3 + 1] = n.y;
        dotPositions[i * 3 + 2] = 0;
      });
      dotGeometry.attributes.position.needsUpdate = true;

      // ライン座標更新
      let lineIdx = 0;
      for (let a = 0; a < NODE_COUNT; a++) {
        for (let b = a + 1; b < NODE_COUNT; b++) {
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            linePositions[lineIdx * 6]     = nodes[a].x;
            linePositions[lineIdx * 6 + 1] = nodes[a].y;
            linePositions[lineIdx * 6 + 2] = 0;
            linePositions[lineIdx * 6 + 3] = nodes[b].x;
            linePositions[lineIdx * 6 + 4] = nodes[b].y;
            linePositions[lineIdx * 6 + 5] = 0;
            lineIdx++;
          }
        }
      }
      // 未使用分を原点に畳む
      for (let k = lineIdx; k < MAX_LINES; k++) {
        linePositions.fill(0, k * 6, k * 6 + 6);
      }
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIdx * 2);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      dotGeometry.dispose();
      lineGeometry.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
