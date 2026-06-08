import React from 'react';
import { useContent } from '../context/ContentContext';

const Number: React.FC = () => {
  const { content } = useContent();
  const n = content?.number;
  const stats = n?.stats ?? [];
  const tags = n?.tags ?? [];

  return (
    <section className="section number">
      <div className="w-layout-blockcontainer container w-container">
        <div className="plan-wrapper">
          <div className="growth-top-wrap">
            <div data-w-id="09f96932-cda1-c6c7-d6b5-0e973f11b800" className="growth-left-wrap">
              <h2 className="growth-title">{n?.title ?? 'The Numbers Behind Success'}</h2>
            </div>
            <div data-w-id="09f96932-cda1-c6c7-d6b5-0e973f11b803" className="growth-right-wrap">
              <p className="growth-details">{n?.description}</p>
              <a href={n?.ctaLink ?? '/contact'} className="primary-button w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492 w-inline-block">
                <div className="primary-btn-wrap w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492">
                  <div className="primary-btn-text-wrap _01">
                    <div>{n?.ctaText ?? 'Get Started'}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-text-wrap _02">
                    <div>{n?.ctaText ?? 'Get Started'}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-bg w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492"></div>
                </div>
              </a>
            </div>
          </div>
          <div data-w-id="155c1c87-ed78-2f53-ad24-05bc810c7bdd" className="plan-wrap">
            <div className="plan-flex-wrap">
              {stats.map((stat, i) => (
                <div key={i} className={i === 0 ? 'plan-single-card-wrap' : 'plan-single-item-wrap'}>
                  <div className={`plan-single-card${i > 0 ? ` _0${i + 1}` : ''}`}>
                    <div className="number-top-wrap">
                      <div className="future-v3-number-wrap">
                        <div className="number-value" style={{ fontSize: '2.5rem', fontWeight: 700 }}>{stat.value}</div>
                      </div>
                      {stat.label && <div className="number-details">{stat.label}</div>}
                    </div>
                    <p className={`plan-card-details${i === 0 ? ' light' : i === 2 ? ' dark' : ''}`}>{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="plan-btn-all-wrap">
            <div data-w-id="25f411fd-3350-7134-1580-4392098e3eee" className="plan-buttom-wrap">
              {tags.map((tag, i) => (
                <div key={i} className={`plan-btm-text-wrap _0${i + 1}`}>
                  <div className={`plan-btm-text _0${i + 1}`}>{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Number;
