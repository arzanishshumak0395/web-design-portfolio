"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface InteractiveSceneProps {
  accent: "cyan" | "emerald" | "violet";
}

const vertexShader = `
  uniform float uTime;
  uniform float uHover;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vWave;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;

    // Organic harmonic wave displacement along vertex normals
    float wave = sin(position.x * 3.2 + uTime * 2.0) *
                 cos(position.y * 3.2 + uTime * 1.6) *
                 sin(position.z * 3.2 + uTime * 1.8);
    vWave = wave;

    float amplitude = 0.14 + uHover * 0.12;
    vec3 displaced = position + normal * wave * amplitude;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vWave;

  void main() {
    // Fresnel rim glow calculation
    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
    float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.4);

    // Blend deep core tone with vibrant shader rim
    float mixFactor = clamp(fresnel + vWave * 0.45, 0.0, 1.0);
    vec3 finalColor = mix(uColorB, uColorA, mixFactor);

    gl_FragColor = vec4(finalColor, 0.92);
  }
`;

export default function InteractiveScene({ accent }: InteractiveSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const shaderMatRef = useRef<THREE.ShaderMaterial | null>(null);
  const cageMatRef = useRef<THREE.MeshBasicMaterial | null>(null);

  const palette = {
    cyan: { primary: 0x22d3ee, secondary: 0x083344 },
    emerald: { primary: 0x34d399, secondary: 0x064e3b },
    violet: { primary: 0xa78bfa, secondary: 0x2e1065 },
  };

  // Sync GLSL uniforms live when accent theme changes
  useEffect(() => {
    const colors = palette[accent];
    if (shaderMatRef.current) {
      shaderMatRef.current.uniforms.uColorA.value.setHex(colors.primary);
      shaderMatRef.current.uniforms.uColorB.value.setHex(colors.secondary);
    }
    if (cageMatRef.current) {
      cageMatRef.current.color.setHex(colors.primary);
    }
  }, [accent]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.0;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Custom GLSL Liquid Fresnel Core
    const coreGeo = new THREE.IcosahedronGeometry(1.35, 32);
    const shaderMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uHover: { value: 0 },
        uColorA: { value: new THREE.Color(palette[accent].primary) },
        uColorB: { value: new THREE.Color(palette[accent].secondary) },
      },
    });
    shaderMatRef.current = shaderMat;
    const coreMesh = new THREE.Mesh(coreGeo, shaderMat);
    scene.add(coreMesh);

    // Outer Geodesic Telemetry Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: palette[accent].primary,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    cageMatRef.current = cageMat;
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    scene.add(cageMesh);

    // Orbital Particle Field
    const count = 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2;
      const radius = 2.25 + (Math.random() - 0.5) * 0.5;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.75;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0xf8fafc,
      size: 0.028,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    particles.rotation.x = 0.32;
    scene.add(particles);

    // Pointer Interaction & Hover Energy Boost
    let targetRotX = 0;
    let targetRotY = 0;
    let targetHover = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotX = nx * 0.65;
      targetRotY = ny * 0.65;
    };

    const onEnter = () => {
      targetHover = 1.0;
    };
    const onLeave = () => {
      targetHover = 0.0;
    };

    window.addEventListener("mousemove", onPointerMove);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      shaderMat.uniforms.uTime.value = elapsed;
      shaderMat.uniforms.uHover.value +=
        (targetHover - shaderMat.uniforms.uHover.value) * 0.06;

      coreMesh.rotation.y = elapsed * 0.25;
      cageMesh.rotation.y = -elapsed * 0.18;
      cageMesh.rotation.x = elapsed * 0.12;
      particles.rotation.y = elapsed * 0.15;

      scene.rotation.y += (targetRotX - scene.rotation.y) * 0.05;
      scene.rotation.x += (targetRotY - scene.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onPointerMove);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      shaderMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative h-[350px] w-full overflow-hidden rounded-2xl border border-neutral-800/90 bg-neutral-950/70 sm:h-[410px]">
      <div ref={mountRef} className="h-full w-full cursor-crosshair" />
      <div className="pointer-events-none absolute bottom-3 left-4 flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-cyan-400" />
        Custom GLSL Shader • Hover & Move Cursor
      </div>
    </div>
  );
}