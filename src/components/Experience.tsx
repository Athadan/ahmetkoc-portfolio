import { translations } from './translations';

type Props = { t: (typeof translations)['tr'] };

function Experience({ t }: Props) {
  return (
    <section className="section">
      <div className="section-label">{t.expLabel}</div>
      <div className="card">
        <div className="card-head">
          <span className="card-title">Garanti BBVA</span>
          <span className="card-sub">{t.expRole}</span>
        </div>
        <p className="card-body">{t.expDesc}</p>
      </div>
    </section>
  );
}

export default Experience;