import { translations } from './translations';

type Props = { t: (typeof translations)['tr'] };

function About({ t }: Props) {
  return (
    <section className="section">
      <div className="section-label">{t.aboutLabel}</div>
      <p className="section-text">{t.aboutText}</p>
    </section>
  );
}

export default About;