import { translations } from './translations';

type Props = { t: (typeof translations)['tr'] };

const skills = ['Java', 'Spring Boot', 'React', 'TypeScript', 'Microservices', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'Oracle', 'COBOL'];

function Skills({ t }: Props) {
  return (
    <section className="section">
      <div className="section-label">{t.skillsLabel}</div>
      <div className="tags">
        {skills.map((skill) => (
          <span className="tag" key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;