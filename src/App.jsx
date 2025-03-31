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
        <div className="text-center ">
          <div className="flex flex-nowrap items-center justify-between ">
          <img src={logo} alt="AI Image Enhancer Logo" className="h-34 w-44 mr-48 " />
            <h1 className="text-3xl font-bold mr-96 text-white">AI Image Enhancer</h1>
          </div>
        </div>

        <Home />
        
        <div className="flex justify-between w-full text-sm text-white mt-4 mb-4 backdrop-blur-sm bg-black/10 p-3 rounded-lg border border-white/10">
          <p>
          © 2025 AI Image Enhancer. All rights reserved.
          </p>
          <p>
          Developed by <a href="https://www.linkedin.com/in/shivamyadav-sy/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Shivam Yadav</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
