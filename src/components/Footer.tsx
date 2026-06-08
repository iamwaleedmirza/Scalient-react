import React from 'react';
import { useContent } from '../context/ContentContext';

const Footer: React.FC = () => {
  const { content } = useContent();
  const f = content?.footer;
  const social = f?.socialLinks;

  return (
    <section className="section footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-wrapper">
          <div className="footer-top-wrap">
            <div data-w-id="25e82028-e108-7ef6-3958-93eaac9fe7fe" className="footer-left-wrap">
              <h2 className="footer-left-title">{f?.newsletterTitle ?? 'Sign up for our newsletter today.'}</h2>
              <div className="footer-form-block w-form">
                <form id="email-form" name="email-form" method="get" className="footer-form">
                  <input className="footer-text-feild w-input" maxLength={256} name="email" placeholder="Your email" type="email" id="email" required />
                  <input type="submit" className="footer-submit-button w-button" value="Subscribe" />
                </form>
                <div className="success-message w-form-done"><div>Thank you! Your submission has been received!</div></div>
                <div className="error-message w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div>
              </div>
              <p className="footer-email-details">{f?.emailNote ?? 'No spam, Just valued update.'}</p>
            </div>
            <div className="footer-right-wrap">
              <div data-w-id="25e82028-e108-7ef6-3958-93eaac9fe80e" className="footer-single-wrap">
                <div className="footer-single-title">Main Pages</div>
                <div className="footer-all-link-wrap">
                  {[
                    { href: '/', label: 'Home' }, { href: '/about', label: 'Company' },
                    { href: '/work', label: 'Works' }, { href: '/service', label: 'Services' },
                    { href: '/pricing', label: 'Pricing' }, { href: '/career', label: 'Career' },
                    { href: '/contact', label: 'Contact' },
                  ].map(({ href, label }) => (
                    <a key={label} href={href} className="nav-link w-variant-d8723da9-b251-4cf7-2979-6ffee2799b94 w-inline-block">
                      <div link-top="" className="nav-link-text">{label}</div>
                      <div link-bottom="" className="nav-link-text">{label}</div>
                    </a>
                  ))}
                </div>
              </div>
              <div data-w-id="25e82028-e108-7ef6-3958-93eaac9fe820" className="footer-single-wrap">
                <div className="footer-single-title">Inner Pages</div>
                <div className="footer-all-link-wrap">
                  {[
                    { href: '/terms-condition', label: 'Terms & Condition' },
                    { href: '/privacy-policy', label: 'Privacy Policy' },
                    { href: '/license', label: 'License' },
                    { href: '/changelog', label: 'Change Log' },
                    { href: '/style-guide', label: 'Style Guide' },
                    { href: '/request-a-demo', label: 'Request a Demo' },
                  ].map(({ href, label }) => (
                    <a key={label} href={href} className="nav-link w-variant-d8723da9-b251-4cf7-2979-6ffee2799b94 w-inline-block">
                      <div link-top="" className="nav-link-text">{label}</div>
                      <div link-bottom="" className="nav-link-text">{label}</div>
                    </a>
                  ))}
                </div>
              </div>
              <div data-w-id="25e82028-e108-7ef6-3958-93eaac9fe848" className="footer-single-wrap">
                <div className="footer-single-title">Social Media</div>
                <div className="footer-social-wrap">
                  <a href={social?.facebook ?? '#'} target="_blank" rel="noreferrer" className="social-icon-wrap w-inline-block">
                    <img src="/images/693456e904aa9853b800bcff_Facebook%2001.svg" loading="lazy" alt="Facebook" className="social-icon" />
                    <img src="/images/693456e9f144d70cd6ad9aca_Facebook%2002.svg" loading="lazy" alt="Facebook" className="social-icon" />
                  </a>
                  <a href={social?.twitter ?? '#'} target="_blank" rel="noreferrer" className="social-icon-wrap w-inline-block">
                    <img src="/images/69345774df6ffa594a71d5f1_X%20Icon%2001.svg" loading="lazy" alt="Twitter/X" className="social-icon" />
                    <img src="/images/6934577418820fc925981674_X%20Icon%2002.svg" loading="lazy" alt="Twitter/X" className="social-icon" />
                  </a>
                  <a href={social?.instagram ?? '#'} target="_blank" rel="noreferrer" className="social-icon-wrap w-inline-block">
                    <img src="/images/693457747dc89fd15437da63_Insta%2001.svg" loading="lazy" alt="Instagram" className="social-icon" />
                    <img src="/images/693457743cfc5c7dc00ec9b1_Insta%2002.svg" loading="lazy" alt="Instagram" className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="25e82028-e108-7ef6-3958-93eaac9fe855" className="footer-line-wrap"></div>
          <div data-w-id="25e82028-e108-7ef6-3958-93eaac9fe856" className="copyright-wrap">
            <a href="/privacy-policy" className="copyright-link">Privacy policy</a>
            <div className="copyright-text">{f?.copyright}</div>
            <a href="/terms-condition" className="copyright-link">Terms of Use</a>
          </div>
        </div>
      </div>
      <div className="footer-logo-wrap">
        <img src="/images/6972df429ad082175d843b0b_Scalient.svg" loading="lazy" alt="Footer Logo" className="footer-logo" />
      </div>
    </section>
  );
};

export default Footer;
