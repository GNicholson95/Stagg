import { FiArrowRight, FiCamera, FiCheck, FiDatabase, FiMonitor, FiRadio } from 'react-icons/fi';

const services = [
  {
    slug: 'audio-visual',
    number: '01',
    icon: FiMonitor,
    title: 'Audio visual',
    intro: 'Clear, reliable AV for the way people actually use the space.',
    copy: 'From a single professionally mounted display to multi-screen and signal-distribution systems, we focus on simple control, compatible equipment and a clean finish.',
    includes: ['TV and display installation', 'Digital signage', 'Video and signal distribution', 'Commercial and hospitality AV'],
  },
  {
    slug: 'data-networks',
    number: '02',
    icon: FiDatabase,
    title: 'Data & networks',
    intro: 'The physical foundation for fast, dependable connectivity.',
    copy: 'Structured cabling and network infrastructure are planned around coverage, capacity and serviceability—not just where the nearest cable can be run.',
    includes: ['Structured data cabling', 'Data outlets and patching', 'Wi-Fi access point infrastructure', 'Network upgrades and fault finding'],
  },
  {
    slug: 'telecommunications',
    number: '03',
    icon: FiRadio,
    title: 'Telecommunications',
    intro: 'Signal and communications systems that stay stable and easy to maintain.',
    copy: 'We install, upgrade and diagnose television, satellite and communications distribution for residential and commercial environments.',
    includes: ['Satellite and television systems', 'Signal distribution', 'Equipment replacement and upgrades', 'Diagnostics and fault finding'],
  },
  {
    slug: 'cctv-security',
    number: '04',
    icon: FiCamera,
    title: 'CCTV & security',
    intro: 'Useful coverage, clear footage and straightforward access.',
    copy: 'A good CCTV system starts with camera placement and the result you need. We specify and install systems for visibility, reliable recording and simple day-to-day use.',
    includes: ['IP and analogue CCTV', 'NVR and recording systems', 'Remote viewing setup', 'System additions and upgrades'],
  },
];

function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="page-width services-hero-layout">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h1>Technology that works as one system.</h1>
          </div>
          <div className="services-hero-copy">
            <p>
              STAG supports the infrastructure behind connected homes and businesses—from AV and
              data to telecommunications and CCTV.
            </p>
            <p>
              Bring us in for one part of the system or for a joined-up scope across several.
            </p>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="page-width service-detail-list">
          {services.map(({ slug, number, icon: Icon, title, intro, copy, includes }) => (
            <article className="service-detail" id={slug} key={title} aria-labelledby={`${slug}-title`}>
              <div className="service-detail-marker">
                <span>{number}</span>
                <Icon aria-hidden="true" />
              </div>
              <div className="service-detail-title">
                <h2 id={`${slug}-title`}>{title}</h2>
                <p>{intro}</p>
              </div>
              <div className="service-detail-body">
                <p>{copy}</p>
                <ul>
                  {includes.map((item) => (
                    <li key={item}><FiCheck aria-hidden="true" /> {item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-context-section">
        <div className="page-width context-grid">
          <div>
            <p className="eyebrow">Where we work</p>
            <h2>Residential and commercial projects across the Gold Coast.</h2>
          </div>
          <ul className="context-list" aria-label="Project environments">
            <li>Homes</li>
            <li>Offices</li>
            <li>Retail</li>
            <li>Hospitality</li>
          </ul>
        </div>
      </section>

      <section className="section final-cta">
        <div className="page-width final-cta-inner">
          <div>
            <p className="eyebrow">Plan the right scope</p>
            <h2>Not sure which service it falls under?</h2>
          </div>
          <div className="final-cta-action">
            <p>That is exactly where an integrated systems approach helps. Start with the outcome you need.</p>
            <a
              className="button button-primary"
              href="mailto:ga.nicholson@outlook.com?subject=STAG%20Systems%20service%20enquiry"
            >
              Discuss your project <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
