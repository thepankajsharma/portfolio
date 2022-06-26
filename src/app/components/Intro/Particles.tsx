import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesDiv() {
  const particlesInit = async (main: any) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  //   const particlesLoaded = (container) => {
  //     console.log(container);
  // };

  return (
    <Particles
      id="tsparticles"
      width="100%"
      height="100vh"
      options={{
        background: {
          color: {
            value: "#111",
          },
        },
        fpsLimit: 120,
        fullScreen: {
          enable: false,
        },
        interactivity: {
          events: {
            onClick: {
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 90,
                smooth: 100,
              },
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 120,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
            animation: {
              h: {
                enable: true,
                speed: 20,
              },
            },
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      init={particlesInit}
    />
  );
}
