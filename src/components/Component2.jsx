import { useTheme } from '../context/ThemeContext';
import Component3 from './Component3';

export default function Component2() {
  const { theme } = useTheme();

  return (
    <section className="layer layer-two">
      <div className="layer-heading">
        <span className="layer-number">02</span>
        <div>
          <p className="eyebrow">Component 2</p>
          <h2>Nested, but still connected</h2>
        </div>
      </div>
      <div className="status-line">
        <span className="status-dot" />
        <span>useContext sees {theme} mode</span>
      </div>
      <Component3 />
    </section>
  );
}
