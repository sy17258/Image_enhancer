import { useEffect } from 'react';
import Home from './components/Home';
import logo from './assets/logo.png'; // Import the logo

function App() {
  // Create floating particles effect
  useEffect(() => {
    const createParticles = () => {
      const particleCount = 20;
      const container = document.querySelector('body');
      
      // Remove any existing particles
      document.querySelectorAll('.particle').forEach(el => el.remove());
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Random color - blue/cyan tones for futuristic look
        const hue = 180 + Math.random() * 60;
        particle.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
        
        // Random animation duration
        const duration = Math.random() * 30 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        container.appendChild(particle);
      }
    };
    
    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(0) translateX(20px); }
        75% { transform: translateY(20px) translateX(10px); }
        100% { transform: translateY(0) translateX(0); }
      }
    `;
    document.head.appendChild(style);
    
    createParticles();
    
    // Recreate particles on resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
      document.querySelectorAll('.particle').forEach(el => el.remove());
      style.remove();
    };
  }, []);

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <div className="text-center w-full mb-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img src={logo} alt="AI Image Enhancer Logo" className="h-24 w-auto mb-4 md:mb-0 md:mr-4" />
            <h1 className="title">AI Image Enhancer </h1>
          </div>
        </div>

        <Home />
        
        <div className="flex flex-col md:flex-row justify-between w-full text-sm text-white mt-4 mb-4 backdrop-blur-sm bg-black/10 p-3 rounded-lg border border-white/10">
          <p className="text-center md:text-left mb-2 md:mb-0">
          © 2025 AI Image Enhancer. All rights reserved.
          </p>
          <p className="text-center md:text-right">
          Developed by <a href="https://www.linkedin.com/in/shivamyadav-sy/" target="_blank" rel="noopener noreferrer" style={{color: 'rgb(0, 255, 208)'}} className="hover:underline">Shivam Yadav</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
