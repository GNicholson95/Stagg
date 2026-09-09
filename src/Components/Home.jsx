import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiCamera,
  FiCheck,
  FiDatabase,
  FiMapPin,
  FiMonitor,
  FiRadio,
} from 'react-icons/fi';
import commercialCctvImage from '../assets/commercial-cctv-640.jpg';
import commercialCctvMediumImage from '../assets/commercial-cctv-960.jpg';
import commercialCctvLargeImage from '../assets/commercial-cctv-1600.jpg';
import hikvisionCertImage from '../assets/hikvision-cert-preview.png';
import hikvisionCertPdf from '../assets/hikvision.pdf';

const capabilities = [
  {
    number: '01',
    icon: FiMonitor,
    title: 'Audio visual',
    copy: 'Displays, TV distribution, digital signage and integrated AV built around how the space is actually used.',
    tags: ['Displays', 'Distribution', 'Signage'],
  },
  {
    number: '02',
    icon: FiDatabase,
    title: 'Data & networks',
    copy: 'Structured data cabling, Wi-Fi infrastructure and tidy network upgrades for dependable connectivity.',
    tags: ['Structured data', 'Wi-Fi', 'Networking'],
  },
  {
    number: '03',
    icon: FiRadio,
    title: 'Telecommunications',
    copy: 'Signal distribution, satellite and communications infrastructure installed, upgraded and fault-found.',
    tags: ['Satellite', 'Signal', 'Fault finding'],
  },
  {
    number: '04',
    icon: FiCamera,
    title: 'CCTV & security',
    copy: 'Clear camera coverage, recording and remote viewing systems for residential and commercial properties.',
    tags: ['CCTV', 'Recording', 'Remote access'],
  },
];

const process = [
  ['01', 'Understand the site', 'We start with the space, the existing infrastructure and what the system needs to achieve.'],
  ['02', 'Specify the right setup', 'A practical scope with compatible equipment—without adding complexity that the job does not need.'],
  ['03', 'Install it cleanly', 'Neat cable paths, considered placement and a clear handover so the system is easy to use.'],
];

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="page-width hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">AV · Data · Telecoms · CCTV</p>
            <h1>
              Connected systems.
              <span>Built to work.</span>
            </h1>
            <p className="hero-intro">
              Integrated technology for homes and businesses across the Gold Coast—from the cable
              behind the wall to the system you use every day.
            </p>
            <div className="button-row">
              <a
                className="button button-primary"
                href="mailto:ga.nicholson@outlook.com?subject=STAG%20Systems%20project%20enquiry"
              >
                Discuss a project <FiArrowRight aria-hidden="true" />
              </a>
              <Link className="button button-secondary" to="/services/">
                View capabilities
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src={commercialCctvImage}
              srcSet={`${commercialCctvImage} 640w, ${commercialCctvMediumImage} 960w, ${commercialCctvLargeImage} 1600w`}
              sizes="(max-width: 960px) calc(100vw - 2.5rem), (max-width: 1400px) 40vw, 34rem"
              alt="Commercial CCTV cameras mounted on a modern building"
              width="1600"
              height="1063"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-visual-label">
              <span><FiMapPin aria-hidden="true" /> Gold Coast, QLD</span>
              <strong>Residential + commercial</strong>
            </div>
          </div>
        </div>

        <ul className="page-width hero-trust" aria-label="Service highlights">
          <li>One point of contact</li>
          <li>Clean, considered installs</li>
          <li>Hikvision certified</li>
        </ul>
      </section>

      <section className="section services-overview" id="capabilities">
        <div className="page-width">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2>One system partner.<br />Four connected disciplines.</h2>
            </div>
            <p>
              Technology works better when every part is considered together. STAG brings the
              signal, network, display and security layers into one clean scope.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map(({ number, icon: Icon, title, copy, tags }) => (
              <article className="capability-card" key={title}>
                <div className="card-topline">
                  <span>{number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ul aria-label={`${title} examples`}>
                  {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="section-link-row">
            <Link className="text-link" to="/services/">
              Explore every capability <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="page-width approach-layout">
          <div className="approach-copy">
            <p className="eyebrow">How we work</p>
            <h2>Less complexity.<br />A better finished system.</h2>
            <p className="body-large">
              No product dump and no disconnected trades. The job is planned as one system, with
              practical recommendations and a finish that respects the property.
            </p>
          </div>

          <ol className="process-list">
            {process.map(([number, title, copy]) => (
              <li key={number}>
                <span className="process-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section proof-section">
        <div className="page-width proof-layout">
          <div className="proof-card">
            <div className="proof-badge-wrap">
              <img
                src={hikvisionCertImage}
                alt="Hikvision certification"
                width="1866"
                height="1322"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="proof-copy">
              <p className="eyebrow">Product training</p>
              <h2>Hikvision certified.</h2>
              <p>
                Recognised product knowledge supports better camera selection, cleaner setup and a
                more confident handover for your CCTV system.
              </p>
              <a
                className="text-link"
                href={hikvisionCertPdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Hikvision certification PDF (opens in a new tab)"
              >
                View certification <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="fit-card">
            <p className="eyebrow">A good fit for</p>
            <h2>Homes, businesses and connected spaces.</h2>
            <ul>
              {[
                'New installations and system upgrades',
                'Fault finding and unreliable infrastructure',
                'Projects spanning more than one technology',
                'Clean handovers for owners and operators',
              ].map((item) => (
                <li key={item}><FiCheck aria-hidden="true" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="page-width final-cta-inner">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Tell us what needs to connect.</h2>
          </div>
          <div className="final-cta-action">
            <p>Share the site, the problem or the outcome you need. We’ll help define the next step.</p>
            <a
              className="button button-primary"
              href="mailto:ga.nicholson@outlook.com?subject=STAG%20Systems%20project%20enquiry"
            >
              Start your project <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
