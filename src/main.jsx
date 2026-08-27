import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Component1 from './components/Component1';
import './index.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="app-shell" data-theme={theme}>
      <header className="topbar">
        <a className="brand" href="/" aria-label="Context Lab home">
          <span className="brand-mark">C</span>
          <span>Context Lab</span>
        </a>
        <span className="task-label">REACT / TASK 08</span>
      </header>

      <div className="content-grid">
        <section className="intro">
          <p className="kicker"><span /> React hook</p>
          <h1>useContext<br /><em>Theme App</em></h1>
          <p className="intro-copy">Share one piece of state between nested components without passing it through every level.</p>
          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            <span className="toggle-symbol">{theme === 'light' ? '☾' : '☼'}</span>
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
          <div className="context-note">
            <span className="note-line" />
            <p><strong>ThemeContext</strong><br />Provider → Component 1 → Component 2 → Component 3</p>
          </div>
        </section>

        <section className="tree-panel" aria-label="Nested component demonstration">
          <div className="theme-strip"><span>Current theme</span><strong>{theme.toUpperCase()}</strong></div>
          <h2 className="tree-title">Nested Component Structure</h2>
          <div className="tree-map" aria-label="App contains Component 1, Component 2, and Component 3">
            <span>App</span><b>↓</b><span>Component 1</span><b>↓</b><span>Component 2</span><b>↓</b><span>Component 3</span>
          </div>
          <Component1 />
        </section>
      </div>

      <footer className="footer">
        <span>State travels through context, not props.</span>
        <span>createContext + useContext + useState</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
