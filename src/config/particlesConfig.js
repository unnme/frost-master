export const particlesOptions = {
  background: {
    color: {
      value: "#ffffff",
    },
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#94a3b8",
    },
    shape: {
      type: "square",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.35,
      random: true,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: true,
      animation: {
        enable: false,
        speed: 40,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "bottom-right",
      random: false,
      straight: false,
      outModes: {
        default: "out",
      },
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      onClick: {
        enable: false,
        mode: "repulse",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
};
