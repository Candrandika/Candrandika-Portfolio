import { useCallback, useState, useEffect } from 'react'
import Particles, {initParticlesEngine} from '@tsparticles/react'
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
  const [ init, setInit ] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  const options = {
    background: {
      color: {
        value: ''
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push'
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 5
        },
        repulse: {
          distance: 150,
          duration: 1
        }
      }
    },
    particles: {
      color: {
        value: '#F13024',
      },
      links: {
        color: '#F13024',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 75
      },
      opacity: {
        value: 1
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 2, max: 7}
      },
    },
    detectRetina: true
  }
  
  return (
    init && <Particles 
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesContainer;
