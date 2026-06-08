import React from 'react';
import { useContent } from '../context/ContentContext';

const Trusted: React.FC = () => {
  const { content } = useContent();
  const t = content?.trusted;
  const logos = t?.logos ?? [];

  return (
    <section className="section trusted">
      <div className="w-layout-blockcontainer container w-container">
        <div className="trusted-wrapper">
          <div data-w-id="d21ba8bf-1603-fd8a-d89b-ec9b2d9cac9d" className="trusted-top-wrap">
            <div className="trusted-dots"></div>
            <div className="trusted-title">{t?.title ?? 'Trusted by Leading Brands'}</div>
          </div>
          <div data-w-id="84bfb4dc-6242-0481-1b3d-5c5e30ec3050" className="trusted-wrap">
            <div className="trusted-flex-wrap">
              {/* Repeat logos 3 times for the marquee animation */}
              {[0, 1, 2].map(row => (
                <div key={row} className="trusted-single-wrap">
                  {logos.map((src, i) => (
                    <img key={i} src={src} loading="lazy" alt="Trusted Brand Logo" className="trusted-single-img" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
