import React from 'react';
import { useContent } from '../context/ContentContext';

const CTA: React.FC = () => {
  const { content } = useContent();
  const text = content?.cta?.text ?? "Let's Get Started";
  const icon1 = '/images/69331227c71415034b444590_Cta%20Item%20Icon.svg';
  const icon2 = '/images/693458d81fcb162a092e2c20_Icon.svg';

  const renderRow = (iconSrc: string, variant: string) =>
    [0, 1, 2].map(j => (
      <div key={j} className={`cta-item-wrap ${variant}`}>
        {[0, 1, 2].map(k => (
          <React.Fragment key={k}>
            <div className="cta-item-title">{text}</div>
            <img src={iconSrc} loading="lazy" alt="Cta Item Icon" className="cta-item-icon" />
          </React.Fragment>
        ))}
        <div className="cta-item-title">{text}</div>
      </div>
    ));

  return (
    <section data-w-id="9f041fe8-301e-250a-81d0-934e68d5e264" className="section cta">
      <div data-w-id="9f041fe8-301e-250a-81d0-934e68d5e265" className="cta-wrapper">
        <div className="cta-single-wrap _01">
          <div className="cta-flex-wrap">{renderRow(icon1, '_01')}</div>
        </div>
        <div className="cta-single-wrap _02">
          <div className="cta-flex-wrap">{renderRow(icon2, '_02')}</div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
