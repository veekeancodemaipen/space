"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sphere } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh, Group } from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Glowing planet with a soft emissive look. */
function Planet() {
  const ref = useRef<Mesh>(null);
  const reduced = useReducedMotion();
  useFrame((_, delta) => {
    if (ref.current && !reduced) ref.current.rotation.y += delta * 0.08;
  });
  return (
    <Sphere ref={ref} args={[1.4, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#1b2a6b"
        emissive="#3b82f6"
        emissiveIntensity={0.35}
        roughness={0.55}
        metalness={0.3}
      />
    </Sphere>
  );
}

/** A thin glowing orbit ring tilted in 3D. */
function OrbitRing({ radius = 2.4 }: { radius?: number }) {
  return (
    <mesh rotation={[Math.PI / 2.6, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 160]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
    </mesh>
  );
}

/** A tiny spacecraft orbiting the planet. */
function Spacecraft({ radius = 2.4 }: { radius?: number }) {
  const ref = useRef<Group>(null);
  const reduced = useReducedMotion();
  useFrame((state) => {
    if (!ref.current) return;
    const t = reduced ? 0.6 : state.clock.elapsedTime * 0.5;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius * 0.38,
      Math.sin(t) * radius,
    );
    ref.current.rotation.z = t;
  });
  return (
    <group ref={ref}>
      <mesh>
        <coneGeometry args={[0.06, 0.22, 12]} />
        <meshStandardMaterial
          color="#eaf2ff"
          emissive="#8b5cf6"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

export default function HeroPlanet() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      camera={{ position: [0, 0.6, 6], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 3, 5]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[-5, -2, -3]} intensity={0.8} color="#22d3ee" />
        <Stars
          radius={60}
          depth={40}
          count={reduced ? 800 : 2200}
          factor={3}
          saturation={0}
          fade
          speed={reduced ? 0 : 0.6}
        />
        <Float
          speed={reduced ? 0 : 1.4}
          rotationIntensity={reduced ? 0 : 0.4}
          floatIntensity={reduced ? 0 : 0.6}
        >
          <Planet />
        </Float>
        <OrbitRing radius={2.4} />
        <OrbitRing radius={3.1} />
        <Spacecraft radius={2.4} />
      </Suspense>
    </Canvas>
  );
}
