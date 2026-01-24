"use client";
import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { cn } from "@/lib/utils";

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  direction?: string;
  size?: number;
  density?: number;
};

export const Sparkles = ({
  id = "tsparticles",
  className,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  speed = 1,
  particleColor = "#ffffff",
  particleDensity = 100, // This is roughly particles per area
  direction = "none",
  size, // Handling the user's specific prop
  density, // Handling the user's specific prop
}: SparklesProps) => {
  const [init, setInit] = useState(false);
  
  // Map user props to internal variables
  const effectiveSize = size || maxSize;
  const effectiveDensity = density || particleDensity;
  const effectiveDirection = direction === 'top' ? MoveDirection.top : 
                             direction === 'bottom' ? MoveDirection.bottom :
                             direction === 'left' ? MoveDirection.left :
                             direction === 'right' ? MoveDirection.right :
                             MoveDirection.none;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: background,
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 150,
          enable: false, // Sparkles usually don't have links
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: effectiveDirection,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: speed,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            // area: 800, // verified default in new tsparticles?
          },
          value: effectiveDensity,
        },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: minSize, max: effectiveSize },
        },
      },
      detectRetina: true,
    }),
    [background, particleColor, speed, effectiveDirection, effectiveDensity, minSize, effectiveSize]
  );

  if (init) {
    return (
      <Particles
        id={id}
        className={cn("h-full w-full", className)}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
