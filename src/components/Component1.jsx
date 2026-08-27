import { useTheme } from '../context/ThemeContext';
import Component2 from './Component2';

export default function Component1() {
  const { theme } = useTheme();

  return (
    <section className="layer layer-one">
      <div className="layer-heading">
        <span className="layer-number">01</span>
        <div>
          <p className="eyebrow">Component 1</p>
          <h2>First layer, same context</h2>
        </div>
      </div>
      <p className="layer-copy">This component reads the shared theme directly. No theme prop was passed down.</p>
      <div className="connector" aria-hidden="true" />
      <Component2 />
    </section>
  );
}
