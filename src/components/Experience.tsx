import { translations } from './translations';

type Props = { t: (typeof translations)['tr'] };

function Experience({ t }: Props) {
  return (
    <section className="section">
      <div className="section-label">{t.expLabel}</div>
      <div className="exp-list">
        {t.experience.map((exp, i) => (
          <div className="card" key={i}>
            <div className="exp-head">
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
              </div>
              <div className="exp-date">{exp.date}</div>
            </div>
            <p className="exp-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;