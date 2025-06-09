import './style.css'

// Enhanced application with better structure
class App {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    document.querySelector('#app').innerHTML = `
      <div class="container">
        <header class="header">
          <h1 class="title">Welcome to My AWS App</h1>
          <p class="subtitle">Built with Vite, deployed on AWS</p>
        </header>
        
        <main class="main-content">
          <div class="card">
            <h2>Features</h2>
            <ul class="feature-list">
              <li>⚡ Lightning fast with Vite</li>
              <li>☁️ Deployed on AWS</li>
              <li>📱 Responsive design</li>
              <li>🎨 Modern styling</li>
            </ul>
          </div>
          
          <div class="card">
            <h2>Interactive Demo</h2>
            <button id="demo-btn" class="demo-button">Click me!</button>
            <p id="demo-text" class="demo-text">Click the button above</p>
          </div>
        </main>
        
        <footer class="footer">
          <p>&copy; 2025 My Vite App. Deployed on AWS.</p>
        </footer>
      </div>
    `;
  }

  attachEventListeners() {
    const demoBtn = document.getElementById('demo-btn');
    const demoText = document.getElementById('demo-text');
    let clickCount = 0;

    demoBtn?.addEventListener('click', () => {
      clickCount++;
      demoText.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
      demoBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        demoBtn.style.transform = 'scale(1)';
      }, 150);
    });
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

// Initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new App());
} else {
  new App();
}