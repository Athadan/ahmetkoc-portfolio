import { translations } from './translations';

type Props = { t: (typeof translations)['tr'] };

function Hero({ t }: Props) {
  return (
    <section className="terminal">
      <div className="terminal-bar">
        <span className="dot" style={{ background: '#ff5f56' }} />
        <span className="dot" style={{ background: '#ffbd2e' }} />
        <span className="dot" style={{ background: '#27c93f' }} />
        <span style={{ marginLeft: 10, color: 'var(--text-muted)', fontSize: 12 }}>ahmetkoc.dev</span>
      </div>

      <div className="terminal-body">
        <div className="prompt">
          <span className="arrow">$</span> <span className="tilde">~</span> whoami
        </div>

        <h1 className="hero-name">Ahmet Koç</h1>
        <p className="hero-title">
          Senior Full-Stack Developer — Team Lead<span className="cursor">_</span>
        </p>

        <p className="hero-bio">{t.bio}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={t.cvFile} download>{t.cvButton}</a>
          <a className="btn" href="https://github.com/Athadan" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/ahmet-ko%C3%A7/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;