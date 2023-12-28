'use client'

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css'

const Dust = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth + 250;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.fade = 0; // New property for fading
        this.appeared = false;
        this.opacity = 0;
        this.maxOpacity = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (!this.appeared) {
          this.fade += 0.01
          if (this.fade === 1) this.appeared = true;
        }
        if (this.appeared && this.fade < 0) this.fade = 0; // Ensure fade doesn't go negative
        if (this.appeared && this.fade < 1) this.fade -= 0.01; // Fade out
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 194, 174, ${this.fade})`; // Use fade for alpha
        ctx.fill();
      }

      isFadedOut() {
        return this.appeared && this.fade <= 0;
      }
    }

    let particles = [];
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    // Function to remove and add a particle
    const updateParticles = () => {
      // Start fading out a random particle
      const particleToFade = Math.floor(Math.random() * particles.length);
      particles[particleToFade].fade = 0.99; // Start fade-out process

      // Add a new particle
      if (particles.length < 150) {
        particles.push(new Particle());
      }

      // Remove fully faded particles
      particles = particles.filter(particle => !particle.isFadedOut());
    };

    // Set interval to update particles
    const interval = setInterval(updateParticles, 350); // Update every 2000ms (2 seconds)

    return () => {
      cancelAnimationFrame(animate);
      clearInterval(interval);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.dust} />;
};

export default Dust;