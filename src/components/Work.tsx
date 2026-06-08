import React from 'react';
import { useContent } from '../context/ContentContext';

const wrapperClasses = ['_01', '_02', '_03', '_04', '_05'];

const Work: React.FC = () => {
  const { content } = useContent();
  const w = content?.work;
  const items = w?.items ?? [];

  return (
    <section className="section work">
      <div className="w-layout-blockcontainer container w-container">
        <div className="work-wrapper">
          <div className="work-top-wrap">
            <h1 data-w-id="255381c8-3ee0-44ab-3620-2b63f9867e10" className="work-title">{w?.titleLine1 ?? 'OUR BEST'}</h1>
            <div data-w-id="934fce3c-56ce-5ad5-ee14-89a8341f730d" className="work-btm-title-wrap">
              <h1 className="work-title">{w?.titleLine2Start ?? 'WOR'}</h1>
              <div data-w-id="5608d639-737f-1b84-3cf7-c66560b47cd7" style={{ width: '0px' }} className="work-title-img-wrap">
                <div className="work-animated-img-wrap">
                  <img src="/images/6936fcc1f64c3680e0a47e98_Work%20Animated%20Img%2001.webp" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcSet="/images/6936fcc1f64c3680e0a47e98_Work%20Animated%20Img%2001-p-500.webp 500w, /images/6936fcc1f64c3680e0a47e98_Work%20Animated%20Img%2001.webp 720w" alt="Work Animated Img" className="work-animated-img _01" />
                  <img src="/images/6936fcc1900708c8af53a859_Work%20Animated%20Img%2002.webp" loading="lazy" alt="Work Animated Img" className="work-animated-img _02" />
                  <img src="/images/6936fcc2c0da99b5ea0d80a8_Work%20Animated%20Img%2003.webp" loading="lazy" alt="Work Animated Img" className="work-animated-img _03" />
                  <img src="/images/6936fcc2a2f71668a164504e_Work%20Animated%20Img%2004.webp" loading="lazy" alt="Work Animated Img" className="work-animated-img _04" />
                </div>
              </div>
              <h1 className="work-title">{w?.titleLine2End ?? 'KS'}</h1>
            </div>
          </div>
          <div className="work-wrap">
            <div data-w-id="36794bac-bf16-c451-a5eb-d909ee9d2b3e" className="work-v1-wrap">
              {items.map((item, i) => (
                <div key={i} className={`work-cl-wrapper ${wrapperClasses[i] ?? ''} w-dyn-list`}>
                  <div role="list" className="work-flex-wrap w-dyn-items">
                    <div role="listitem" className="work-cl-item w-dyn-item">
                      <div className="work-card-wrap">
                        <a href={item.link} className="work-card-img-wrap w-inline-block">
                          <img src={item.image} loading="lazy" alt={item.title} className="work-card-img" />
                          <div className="work-view-btn">
                            <div className="work-btn-text">View Project</div>
                          </div>
                        </a>
                        <div className="work-card-btm-wrap">
                          <div className="work-card-left-wrap">
                            <a href={item.link} className="work-card-title">{item.title}</a>
                            <div className="work-card-date">{item.date}</div>
                          </div>
                          <div className="work-card-btn-wrap">
                            <a href={item.link} className="idea-button w-inline-block">
                              <div className="idea-btn-wrap">
                                <div className="idea-btn-text">View Project</div>
                                <img loading="lazy" src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" alt="Idea Btn Icon" className="idea-btn-icon" />
                              </div>
                              <div className="idea-btn-line"></div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div data-w-id="31fca4d3-f3d8-5cdc-1204-72e7bb0b30e9" className="work-btm-wrap">
            <a href={w?.ctaLink ?? '/work'} className="primary-button w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492 w-inline-block">
              <div className="primary-btn-wrap w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492">
                <div className="primary-btn-text-wrap _01">
                  <div>{w?.ctaText ?? 'View Works'}</div>
                  <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                </div>
                <div className="primary-btn-text-wrap _02">
                  <div>{w?.ctaText ?? 'View Works'}</div>
                  <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                </div>
                <div className="primary-btn-bg w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
