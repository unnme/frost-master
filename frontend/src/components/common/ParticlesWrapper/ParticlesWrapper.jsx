// @ts-nocheck

import { memo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesOptions } from "@config/particlesConfig";

const ParticlesWrapperComponent = ({
  className = "",
  options = particlesOptions,
  id = "tsparticles",
}) => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) setEngineReady(true);
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!engineReady) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-0 ${className}`}>
      <Particles id={id} options={options} className="absolute inset-0" />
    </div>
  );
};

export const ParticlesWrapper = memo(ParticlesWrapperComponent);

