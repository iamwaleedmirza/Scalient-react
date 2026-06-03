import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <a
                href="/"
                aria-current="page"
                className="brand-logo w-nav-brand w--current"
              >
                <img
                  src="/images/69732fad892a22a329d5a891_Logo.svg"
                  loading="lazy"
                  alt="Brand Image"
                  className="brand-image"
                />
              </a>
              <nav
                role="navigation"
                className={`nav-menu w-nav-menu${menuOpen ? " w--nav-menu-open" : ""}`}
              >
                <div className="nav-menu-wrap">
                  <a
                    href="/about"
                    className="nav-link w-variant-c5798750-7241-4f6f-faff-cef0f4063bf0 w-inline-block"
                  >
                    <div link-top="" className="nav-link-text">Company</div>
                    <div link-bottom="" className="nav-link-text">Company</div>
                  </a>
                  <div
                    data-delay="400"
                    data-hover="true"
                    data-w-id="344009cb-36dc-6424-e23a-fb6f8c9bf580"
                    className="dropdown w-dropdown"
                  >
                    <div className="dropdown-toggle light-gray w-dropdown-toggle">
                      <div>All Pages</div>
                      <div className="dropdown-arrow-wrap">
                        <img
                          loading="lazy"
                          src="/images/6944e262f651c0f49bc3b229_fc22811791c4f12dde5370b3cca75273_Dropdown%20Arrow.svg"
                          alt="Dropdown Arrow"
                          className="dropdown-arrow"
                        />
                      </div>
                    </div>
                    <nav className="dd-navigation w-dropdown-list">
                      <div className="dd-menu-wrap">
                        <div className="dd-flex-wrap">
                          <div className="dd-single-wrap">
                            <div className="dd-single-title">Main pages</div>
                            <div className="dd-all-link-wrap">
                              <a
                                href="/"
                                aria-current="page"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block w--current"
                              >
                                <div link-top="" className="nav-link-text">Home</div>
                                <div link-bottom="" className="nav-link-text">Home</div>
                              </a>
                              <a
                                href="/about"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Company</div>
                                <div link-bottom="" className="nav-link-text">Company</div>
                              </a>
                              <a
                                href="/service"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Service</div>
                                <div link-bottom="" className="nav-link-text">Service</div>
                              </a>
                              <a
                                href="/work"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Work</div>
                                <div link-bottom="" className="nav-link-text">Work</div>
                              </a>
                              <a
                                href="/pricing"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Pricing</div>
                                <div link-bottom="" className="nav-link-text">Pricing</div>
                              </a>
                              <a
                                href="/blog"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Blog</div>
                                <div link-bottom="" className="nav-link-text">Blog</div>
                              </a>
                              <a
                                href="/career"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Career</div>
                                <div link-bottom="" className="nav-link-text">Career</div>
                              </a>
                              <a
                                href="/contact"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Contact</div>
                                <div link-bottom="" className="nav-link-text">Contact</div>
                              </a>
                            </div>
                          </div>
                          <div className="dd-single-wrap">
                            <div className="dd-single-title">Inner Pages</div>
                            <div className="dd-all-link-wrap">
                              <a
                                href="https://scalient.webflow.io/blog/the-death-of-the-cold-call-why-thought-that-leadership-wins-leads"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Blog Single</div>
                                <div link-bottom="" className="nav-link-text">Blog Single</div>
                              </a>
                              <a
                                href="https://scalient.webflow.io/service/marketing-automation"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Service Single</div>
                                <div link-bottom="" className="nav-link-text">Service Single</div>
                              </a>
                              <a
                                href="https://scalient.webflow.io/work"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Work Single</div>
                                <div link-bottom="" className="nav-link-text">Work Single</div>
                              </a>
                              <a
                                href="https://scalient.webflow.io/product/professional"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Pricing Single</div>
                                <div link-bottom="" className="nav-link-text">Pricing Single</div>
                              </a>
                              <a
                                href="https://scalient.webflow.io/career/seo-specialist"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Career Single</div>
                                <div link-bottom="" className="nav-link-text">Career Single</div>
                              </a>
                              <a
                                href="/terms-condition"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Terms &amp; Condition</div>
                                <div link-bottom="" className="nav-link-text">Terms &amp; Condition</div>
                              </a>
                              <a
                                href="/terms-condition"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Privacy Policy</div>
                                <div link-bottom="" className="nav-link-text">Privacy Policy</div>
                              </a>
                            </div>
                          </div>
                          <div className="dd-single-wrap">
                            <div className="dd-single-title">Utility Pages</div>
                            <div className="dd-all-link-wrap">
                              <a
                                href="/style-guide"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Style Guide</div>
                                <div link-bottom="" className="nav-link-text">Style Guide</div>
                              </a>
                              <a
                                href="/license"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">License</div>
                                <div link-bottom="" className="nav-link-text">License</div>
                              </a>
                              <a
                                href="/changelog"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Change log</div>
                                <div link-bottom="" className="nav-link-text">Change log</div>
                              </a>
                              <a
                                href="/401"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Password</div>
                                <div link-bottom="" className="nav-link-text">Password</div>
                              </a>
                              <a
                                href="/404"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">404</div>
                                <div link-bottom="" className="nav-link-text">404</div>
                              </a>
                              <a
                                href="/request-a-demo"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Request a Demo</div>
                                <div link-bottom="" className="nav-link-text">Request a Demo</div>
                              </a>
                              <a
                                href="/coming-soon"
                                className="nav-link w-variant-5109024e-9645-330a-5c75-696cb1d82e78 w-inline-block"
                              >
                                <div link-top="" className="nav-link-text">Coming soon</div>
                                <div link-bottom="" className="nav-link-text">Coming soon</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <a
                    href="/work"
                    className="nav-link w-variant-c5798750-7241-4f6f-faff-cef0f4063bf0 w-inline-block"
                  >
                    <div link-top="" className="nav-link-text">Works</div>
                    <div link-bottom="" className="nav-link-text">Works</div>
                  </a>
                  <a
                    href="/pricing"
                    className="nav-link w-variant-c5798750-7241-4f6f-faff-cef0f4063bf0 w-inline-block"
                  >
                    <div link-top="" className="nav-link-text">Pricing</div>
                    <div link-bottom="" className="nav-link-text">Pricing</div>
                  </a>
                  <a
                    href="/blog"
                    className="nav-link w-variant-c5798750-7241-4f6f-faff-cef0f4063bf0 w-inline-block"
                  >
                    <div link-top="" className="nav-link-text">Resources</div>
                    <div link-bottom="" className="nav-link-text">Resources</div>
                  </a>
                </div>
              </nav>
            </div>
            <div className="nav-buttton-wrap">
              <div
                data-open-product=""
                data-wf-cart-type="leftSidebar"
                data-wf-page-link-href-prefix=""
                className="w-commerce-commercecartwrapper"
                data-node-type="commerce-cart-wrapper"
              >
                <a
                  className="w-commerce-commercecartopenlink cart-button w-inline-block"
                  role="button"
                  aria-haspopup="dialog"
                  aria-label="Open cart"
                  data-node-type="commerce-cart-open-link"
                  href="#"
                >
                  <img
                    src="/images/694390f91732a877f91502f6_Cart%20Icon.svg"
                    loading="lazy"
                    alt="Cart Icon"
                    className="cart-icon white"
                  />
                  <div className="w-commerce-commercecartopenlinkcount cart-quantity">
                    0
                  </div>
                </a>
                <div
                  style={{ display: "none" }}
                  className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-leftSidebar"
                  data-node-type="commerce-cart-container-wrapper"
                >
                  <div
                    data-node-type="commerce-cart-container"
                    role="dialog"
                    className="w-commerce-commercecartcontainer"
                  >
                    <div className="w-commerce-commercecartheader">
                      <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                      <a
                        className="w-commerce-commercecartcloselink close-button w-inline-block"
                        role="button"
                        aria-label="Close cart"
                        data-node-type="commerce-cart-close-link"
                      >
                        <svg width="16px" height="16px" viewBox="0 0 16 16">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g fillRule="nonzero" fill="#333333">
                              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                    <div className="w-commerce-commercecartformwrapper">
                      <form
                        style={{ display: "none" }}
                        className="w-commerce-commercecartform"
                        data-node-type="commerce-cart-form"
                      >
                        <div
                          className="w-commerce-commercecartlist"
                          data-wf-collection="database.commerceOrder.userItems"
                          data-wf-template-id="wf-template-344009cb-36dc-6424-e23a-fb6f8c9bf5d5"
                        >
                          <div className="w-commerce-commercecartitem">
                            <img
                              src=""
                              alt=""
                              className="w-commerce-commercecartitemimage order-icon w-dyn-bind-empty"
                            />
                            <div className="w-commerce-commercecartiteminfo">
                              <div className="cart-flex-wrap">
                                <div className="w-commerce-commercecartproductname plan-name w-dyn-bind-empty"></div>
                                <div className="total-text">
                                  $ 0.00 USD
                                </div>
                              </div>
                              <ul
                                className="w-commerce-commercecartoptionlist"
                                data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
                                data-wf-template-id="wf-template-344009cb-36dc-6424-e23a-fb6f8c9bf5dc"
                              >
                                <li className="option">
                                  <span className="w-dyn-bind-empty"></span>
                                  <span>: </span>
                                  <span className="w-dyn-bind-empty"></span>
                                </li>
                              </ul>
                              <a
                                href="#"
                                role="button"
                                className="w-inline-block"
                                data-wf-cart-action="remove-item"
                                data-commerce-sku-id=""
                                aria-label="Remove item from cart"
                              >
                                <div>Remove</div>
                              </a>
                            </div>
                            <input
                              aria-label="Update quantity"
                              className="w-commerce-commercecartquantity display-none"
                              required
                              pattern="^[0-9]+$"
                              inputMode="numeric"
                              type="number"
                              name="quantity"
                              autoComplete="off"
                              data-wf-cart-action="update-item-quantity"
                              data-commerce-sku-id=""
                              defaultValue={1}
                            />
                          </div>
                        </div>
                        <div className="w-commerce-commercecartfooter">
                          <div
                            aria-atomic="true"
                            aria-live="polite"
                            className="w-commerce-commercecartlineitem"
                          >
                            <div className="total-text">Subtotal</div>
                            <div className="w-commerce-commercecartordervalue total-text"></div>
                          </div>
                          <div>
                            <div
                              data-node-type="commerce-cart-quick-checkout-actions"
                              style={{ display: "none" }}
                            >
                              <a
                                data-node-type="commerce-cart-apple-pay-button"
                                role="button"
                                aria-label="Apple Pay"
                                aria-haspopup="dialog"
                                style={{
                                  backgroundImage: "-webkit-named-image(apple-pay-logo-white)",
                                  backgroundSize: "100% 50%",
                                  backgroundPosition: "50% 50%",
                                  backgroundRepeat: "no-repeat",
                                }}
                                className="w-commerce-commercecartapplepaybutton"
                                tabIndex={0}
                              >
                                <div></div>
                              </a>
                              <a
                                data-node-type="commerce-cart-quick-checkout-button"
                                role="button"
                                tabIndex={0}
                                aria-haspopup="dialog"
                                style={{ display: "none" }}
                                className="w-commerce-commercecartquickcheckoutbutton"
                              >
                                <svg
                                  className="w-commerce-commercequickcheckoutgoogleicon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                >
                                  <defs>
                                    <polygon
                                      id="google-mark-a"
                                      points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                    ></polygon>
                                    <polygon
                                      id="google-mark-c"
                                      points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                    ></polygon>
                                  </defs>
                                  <g fill="none" fillRule="evenodd">
                                    <path
                                      fill="#4285F4"
                                      d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                    ></path>
                                    <path
                                      fill="#34A853"
                                      d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                    ></path>
                                    <g transform="translate(0 4)">
                                      <mask id="google-mark-b" fill="#fff">
                                        <use xlinkHref="#google-mark-a"></use>
                                      </mask>
                                      <path
                                        fill="#FBBC04"
                                        d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                        mask="url(#google-mark-b)"
                                      ></path>
                                    </g>
                                    <mask id="google-mark-d" fill="#fff">
                                      <use xlinkHref="#google-mark-c"></use>
                                    </mask>
                                    <path
                                      fill="#EA4335"
                                      d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                      mask="url(#google-mark-d)"
                                    ></path>
                                  </g>
                                </svg>
                                <svg
                                  className="w-commerce-commercequickcheckoutmicrosofticon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                >
                                  <g fill="none" fillRule="evenodd">
                                    <polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon>
                                    <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon>
                                    <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon>
                                    <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon>
                                  </g>
                                </svg>
                                <div>Pay with browser.</div>
                              </a>
                            </div>
                            <a
                              href="/checkout"
                              className="w-commerce-commercecartcheckoutbutton checkout-submit-button"
                              data-loading-text="Hang Tight..."
                              data-node-type="cart-checkout-button"
                            >
                              Continue to Checkout
                            </a>
                          </div>
                        </div>
                      </form>
                      <div className="w-commerce-commercecartemptystate">
                        <div aria-label="This cart is empty" aria-live="polite">
                          No items found.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-btn-wrap">
                <a
                  data-w-id="f75274b3-e538-710b-a363-f36512a31121"
                  href="/contact"
                  className="primary-button w-inline-block"
                >
                  <div className="primary-btn-wrap w-variant-ac852afd-ced8-4533-039b-422ef828c549">
                    <div className="primary-btn-text-wrap _01">
                      <div>Contact Now</div>
                      <img
                        src="/images/placeholder.60f9b1840c.svg"
                        loading="lazy"
                        alt=""
                        className="primary-icon"
                      />
                    </div>
                    <div className="primary-btn-text-wrap _02">
                      <div>Contact Now</div>
                      <img
                        src="/images/placeholder.60f9b1840c.svg"
                        loading="lazy"
                        alt=""
                        className="primary-icon"
                      />
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
                <div
                  data-is-ix2-target="1"
                  className="hamburger"
                  data-w-id="344009cb-36dc-6424-e23a-fb6f8c9bf5fe"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/6931c78c49b52e3167d8bae8/696527192e62224380258ca1_Hamburger%20menu.lottie"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="0"
                  data-duration="4.083333333333333"
                  data-loading="eager"
                  data-ix2-initial-state="0"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
