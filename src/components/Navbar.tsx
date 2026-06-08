import React, { useState } from "react";
import { useContent } from "../context/ContentContext";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { content } = useContent();
  const nav = content?.navbar;

  return (
    <div className="pages-wrapper">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar gray w-nav"
      >
        <div className="container w-container">
          <div className="nav-wrapper dark">
            <div className="navbar-left-wrap">
              <a href="/" aria-current="page" className="brand-logo w-nav-brand w--current">
                <img src="/images/69732fad892a22a329d5a891_Logo.svg" loading="lazy" alt="Brand Image" className="brand-image" />
              </a>
              <nav role="navigation" className={`nav-menu w-nav-menu${menuOpen ? " w--nav-menu-open" : ""}`}>
                <div className="nav-menu-wrap">
                  <a href="/about" className="nav-link w-variant-c5798750-7241-4f6f-faff-cef0f4063bf0 w-inline-block">
                    <div link-top="" className="nav-link-text">Company</div>
                    <div link-bottom="" className="nav-link-text">Company</div>
                  </a>
                  <div data-delay="400" data-hover="true" data-w-id="344009cb-36dc-6424-e23a-fb6f8c9bf580" className="dropdown w-dropdown">
                    <div className="dropdown-toggle light-gray w-dropdown-toggle">
                      <div>All Pages</div>
                      <div className="dropdown-arrow-wrap">
                        <img loading="lazy" src="/images/6944e262f651c0f49bc3b229_fc22811791c4f12dde5370b3cca75273_Dropdown%20Arrow.svg" alt="Dropdown Arrow" className="dropdown-arrow" />
                      </div>
                    </div>
                    <nav className="dd-navigation w-dropdown-list">
                      <div className="dd-menu-wrap">
                        <div className="dd-flex-wrap">
                          <div className="dd-single-wrap">
                            <div className="dd-single-title">Main pages</div>
                            <div className="dd-all-link-wrap">
                              {[
                                { href: '/', label: 'Home' }, { href: '/about', label: 'Company' },
                                { href: '/service', label: 'Service' }, { href: '/work', label: 'Work' },
                                { href: '/pricing', label: 'Pricing' }, { href: '/blog', label: 'Blog' },
                                { href: '/career', label: 'Career' }, { href: '/contact', label: 'Contact' },
                              ].map(({ href, label }) => (
                                <a key={label} href={href} className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block">
                                  <div link-top="" className="nav-link-text">{label}</div>
                                  <div link-bottom="" className="nav-link-text">{label}</div>
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="dd-single-wrap">
                            <div className="dd-single-title">Inner Pages</div>
                            <div className="dd-all-link-wrap">
                              {[
                                { href: 'https://scalient.webflow.io/blog/the-death-of-the-cold-call-why-thought-that-leadership-wins-leads', label: 'Blog Single' },
                                { href: 'https://scalient.webflow.io/service/marketing-automation', label: 'Service Single' },
                                { href: 'https://scalient.webflow.io/work', label: 'Work Single' },
                                { href: 'https://scalient.webflow.io/product/professional', label: 'Pricing Single' },
                                { href: 'https://scalient.webflow.io/career/seo-specialist', label: 'Career Single' },
                                { href: '/terms-condition', label: 'Terms & Condition' },
                                { href: '/terms-condition', label: 'Privacy Policy' },
                              ].map(({ href, label }) => (
                                <a key={label} href={href} className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block">
                                  <div link-top="" className="nav-link-text">{label}</div>
                                  <div link-bottom="" className="nav-link-text">{label}</div>
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="dd-single-wrap">
                            <div className="dd-single-title">Utility Pages</div>
                            <div className="dd-all-link-wrap">
                              {[
                                { href: '/style-guide', label: 'Style Guide' }, { href: '/license', label: 'License' },
                                { href: '/changelog', label: 'Change log' }, { href: '/401', label: 'Password' },
                                { href: '/404', label: '404' }, { href: '/request-a-demo', label: 'Request a Demo' },
                                { href: '/coming-soon', label: 'Coming soon' },
                              ].map(({ href, label }) => (
                                <a key={label} href={href} className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block">
                                  <div link-top="" className="nav-link-text">{label}</div>
                                  <div link-bottom="" className="nav-link-text">{label}</div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <a href="/work" className="nav-link w-variant-c5798750-7241-4f6f-faff-cef0f4063bf0 w-inline-block">
                    <div link-top="" className="nav-link-text">Works</div>
                    <div link-bottom="" className="nav-link-text">Works</div>
                  </a>
                  <a href="/pricing" className="nav-link w-variant-c5798750-7241-4f6f-faff-cef0f4063bf0 w-inline-block">
                    <div link-top="" className="nav-link-text">Pricing</div>
                    <div link-bottom="" className="nav-link-text">Pricing</div>
                  </a>
                  <a href="/blog" className="nav-link w-variant-c5798750-7241-4f6f-faff-cef0f4063bf0 w-inline-block">
                    <div link-top="" className="nav-link-text">Resources</div>
                    <div link-bottom="" className="nav-link-text">Resources</div>
                  </a>
                </div>
              </nav>
            </div>
            <div className="nav-buttton-wrap">
              <div className="nav-btn-wrap">
                <a href={nav?.ctaLink ?? '/contact'} className="primary-button w-inline-block">
                  <div className="primary-btn-wrap w-variant-ac852afd-ced8-4533-039b-422ef828c549">
                    <div className="primary-btn-text-wrap _01">
                      <div>{nav?.ctaText ?? 'Contact Now'}</div>
                      <img src="/images/placeholder.60f9b1840c.svg" loading="lazy" alt="" className="primary-icon" />
                    </div>
                    <div className="primary-btn-text-wrap _02">
                      <div>{nav?.ctaText ?? 'Contact Now'}</div>
                      <img src="/images/placeholder.60f9b1840c.svg" loading="lazy" alt="" className="primary-icon" />
                    </div>
                    <div className="primary-btn-bg w-variant-ac852afd-ced8-4533-039b-422ef828c549"></div>
                  </div>
                </a>
              </div>
              <div
                data-w-id="344009cb-36dc-6424-e23a-fb6f8c9bf5fd"
                className="menu-button w-nav-button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="hamburger" data-is-ix2-target="1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
