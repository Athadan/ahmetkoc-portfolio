import { translations } from './translations';

type Props = { t: (typeof translations)['tr'] };

function Contact({ t }: Props) {
  return (
    <section className="section">
      <div className="section-label">{t.contactLabel}</div>
      <p className="section-text">{t.contactText}</p>
      <div className="contact-links">
        <a className="contact-btn" href="mailto:koc-ahmet@outlook.com">E-posta</a>
        <a className="contact-btn" href="https://github.com/Athadan" target="_blank" rel="noreferrer">GitHub</a>
        <a className="contact-btn" href="https://www.linkedin.com/in/ahmet-ko%C3%A7/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;