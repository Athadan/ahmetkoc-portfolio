import { translations } from './translations';

type Props = { t: (typeof translations)['tr'] };

function Projects({ t }: Props) {
  const projects = [
    {
      title: 'Flutter OCR Smart Basket',
      desc: t.ocrDesc,
      link: 'https://github.com/Athadan/Flutter-OCR-Smart-Basket',
      linkLabel: 'kod',
    },
  ];

  return (
    <section className="section">
      <div className="section-label">{t.projectsLabel}</div>
      <div className="projects">
        {projects.map((project) => (
          <div className="card project-card" key={project.title}>
            <div className="card-head">
              <span className="card-title">{project.title}</span>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} ↗</a>
            </div>
            <p className="card-body">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;