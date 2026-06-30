import { translations } from './translations';

type Props = { t: (typeof translations)['tr'] };

function Footer({ t }: Props) {
  return (
    <footer className="footer">
      © 2026 Ahmet Koç · {t.footer}
    </footer>
  );
}

export default Footer;