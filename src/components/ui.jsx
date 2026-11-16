import { useInView } from '../hooks.js';

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionTitle({ index, kicker, children }) {
  return (
    <Reveal className="section-head">
      <div className="section-meta">
        {index && <span className="section-index">{index}</span>}
        {kicker && <span className="section-kicker">{kicker}</span>}
      </div>
      <h2 className="section-title">{children}</h2>
    </Reveal>
  );
}

export function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
