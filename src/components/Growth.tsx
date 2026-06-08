import React from 'react';
import { useContent } from '../context/ContentContext';

const Growth: React.FC = () => {
  const { content } = useContent();
  const g = content?.growth;

  return (
    <section className="section growth">
      <div className="w-layout-blockcontainer container w-container">
        <div className="growth-wrapper">
          <div className="growth-top-wrap sticky">
            <div data-w-id="47b71f08-e712-af07-6cfd-1d319d400e9a" className="growth-left-wrap">
              <h2 className="growth-title">{g?.title ?? 'Solutions Tailored for Your Growth'}</h2>
            </div>
            <div data-w-id="c534b1f5-cf3a-a7be-4ddc-d2c4a70f82f9" className="growth-right-wrap">
              <p className="growth-details">{g?.description}</p>
              <a href={g?.ctaLink ?? '/contact'} className="primary-button w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492 w-inline-block">
                <div className="primary-btn-wrap w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492">
                  <div className="primary-btn-text-wrap _01">
                    <div>{g?.ctaText ?? 'Get Started'}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-text-wrap _02">
                    <div>{g?.ctaText ?? 'Get Started'}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-bg w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="growth-wrap">
            <div className="growth-grid-wrap">
              {(g?.cards ?? []).map((card, i) => (
                <div key={i} className="growth-card-wrapper">
                  <div className="growth-card-wrap">
                    <div className="growth-card-all-wrap">
                      <div className="growth-card-icon-wrap">
                        <img src="/images/69378f87dae28dedd27d493a_Growth%20Card%20Icon.svg" loading="lazy" alt="Growth Card Icon" className="growth-card-icon" />
                        <img src="/images/69378fa56c4fb1dca7521333_Growth%20Card%20Icon%2002.svg" loading="lazy" alt="Growth Card Icon" className="growth-card-icon" />
                      </div>
                      <div className="growth-card-title">{card.title}</div>
                      <p className="growth-card-details">{card.description}</p>
                    </div>
                    <div className="growth-card-bg"></div>
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

export default Growth;
