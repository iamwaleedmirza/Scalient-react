import React from 'react';
import { useContent } from '../context/ContentContext';

const iconSrcs = [
  '/images/693f70b0c2d2d06d8e26b44b_Feedback%20Icon.svg',
  '/images/693f70b00ac6507639385715_Feedback%20Icon%2002.svg',
  '/images/693f70b0c2d2d06d8e26b44b_Feedback%20Icon.svg',
  '/images/693f70b00ac6507639385715_Feedback%20Icon%2002.svg',
  '/images/693f70b00ac6507639385715_Feedback%20Icon%2002.svg',
];

const Feedback: React.FC = () => {
  const { content } = useContent();
  const f = content?.feedback;
  const testimonials = f?.testimonials ?? [];

  return (
    <section className="section feedback">
      <div className="w-layout-blockcontainer container w-container">
        <div className="feedback-wrapper">
          <div className="service-top-wrap">
            <h2 data-w-id="5086c48e-2e67-24a3-007a-e6878dcce73f" className="service-title">{f?.title}</h2>
            <p data-w-id="5086c48e-2e67-24a3-007a-e6878dcce741" className="service-details">{f?.description}</p>
          </div>
          <div className="feedback-wrap">
            <div data-w-id="b4cdb1b0-6ad7-6c58-e991-b9fc4bd95f1e" className="feedback-flex-wrap">
              {testimonials.map((t, i) => (
                <div key={i} className={`feedback-card-wrap _0${i + 1}`}>
                  <img src={iconSrcs[i] ?? iconSrcs[0]} loading="lazy" alt="Feedback Icon" className="feedback-icon" />
                  <div className="feedback-detiails">{t.text}</div>
                  <div className="blog-v1-author-wrap">
                    <img src={t.image} loading="lazy" alt={t.name} className="feedback-author-image" />
                    <div className="blog-v1-auhor-details-wrap">
                      <div className="feedback-auhtor-name">{t.name}</div>
                      <div className={`blog-v1-author-pst${i > 1 ? ` _0${i + 1}` : ''}`}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
