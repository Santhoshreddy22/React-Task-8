import { useTheme } from '../context/ThemeContext';

export default function Component3() {
  const { theme } = useTheme();

  return (
    <section className="layer layer-three">
      <div className="layer-heading">
        <span className="layer-number">03</span>
        <div>
          <p className="eyebrow">Component 3</p>
          <h2>Deep consumer</h2>
        </div>
      </div>
      <div className="deep-state">
        <span className="state-icon">{theme === 'light' ? '☼' : '☾'}</span>
        <div>
          <strong>Theme received</strong>
          <p>{theme === 'light' ? 'Bright and focused' : 'Calm and low light'}</p>
        </div>
      </div>
    </section>
  );
}
