"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  tech: string;
  index: number;
}

interface Timeline3DProps {
  items: TimelineItem[];
}

export default function Timeline3D({ items }: Timeline3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);

    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const nodes: THREE.Mesh[] = [];
    const colors = [0x60a5fa, 0x2563eb, 0x1e40af];

    items.forEach((item, index) => {
      const geometry = new THREE.SphereGeometry(0.3, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        color: colors[index % colors.length],
        metalness: 0.5,
        roughness: 0.2,
      });
      const sphere = new THREE.Mesh(geometry, material);

      const angle = (index / items.length) * Math.PI * 2;
      const radius = 3;
      sphere.position.set(
        Math.cos(angle) * radius,
        (index - 1) * 2,
        Math.sin(angle) * radius
      );
      sphere.userData = { index, angle, radius };
      nodes.push(sphere);
      scene.add(sphere);

      const ringGeometry = new THREE.TorusGeometry(0.4, 0.05, 16, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: colors[index % colors.length],
        transparent: true,
        opacity: 0.3,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(sphere.position);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);
    });

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.3,
    });
    for (let i = 0; i < nodes.length - 1; i++) {
      const points = [nodes[i].position, nodes[i + 1].position];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      scene.add(new THREE.Line(lineGeometry, lineMaterial));
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    containerRef.current.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const time = clock.getElapsedTime();

      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      nodes.forEach((node) => {
        node.rotation.y += 0.01;
        node.position.y += Math.sin(time + node.userData.index) * 0.001;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
        if (renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      nodes.forEach((node) => {
        node.geometry.dispose();
        (node.material as THREE.Material).dispose();
      });
    };
  }, [items]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: 320, borderRadius: 8 }}
    />
  );
}
