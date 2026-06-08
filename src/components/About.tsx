import React from 'react';
import { useContent } from '../context/ContentContext';

const About: React.FC = () => {
  const { content } = useContent();
  const a = content?.about;

  return (
    <section className="section about-v1">
      <div className="w-layout-blockcontainer container w-container">
        <div className="about-v1-wrapper">
          <div className="about-flex-wrap">
            <div data-w-id="c396d031-ddfd-b4da-13ac-7b0889f6254d" className="about-v1-left-wrap">
              <div className="about-v1-left-title">{a?.sectionLabel ?? 'About Scalient'}</div>
            </div>
            <div data-w-id="15261c29-c5ad-38eb-51ee-36231d959ab2" className="about-v1-right-wrap">
              <h3 className="about-v1-right-title">{a?.description}</h3>
            </div>
          </div>
          <div className="about-wrap">
            <div className="about-img-wrap">
              <img
                className="about-img one"
                src={a?.image1 ?? '/images/6936f8d3c7ba8c97c0e13d32_About%20Image%2001.webp'}
                alt="About Img"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 880px"
                data-w-id="e42aa35a-9733-e51b-a0f3-eb5c8eab9694"
                loading="lazy"
              />
              <img
                className="about-img"
                src={a?.image2 ?? '/images/6936f8d7c7a9722fffc5a74e_About%20Image%2002.webp'}
                alt="About Img"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 880px"
                data-w-id="a1b58a36-d302-56a8-fdeb-521559b00643"
                loading="lazy"
              />
            </div>
            <div data-w-id="177299cc-9b7f-6068-dacd-2caf9487ef96" className="about-btm-details-wrap">
              <p className="about-btm-details">{a?.bottomText ?? 'Our Bold and Brilliant Thinkers'}</p>
              <a href={a?.ctaLink ?? '/about'} className="primary-button w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492 w-inline-block">
                <div className="primary-btn-wrap w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492">
                  <div className="primary-btn-text-wrap _01">
                    <div>{a?.ctaText ?? 'Learn More'}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-text-wrap _02">
                    <div>{a?.ctaText ?? 'Learn More'}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-bg w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
