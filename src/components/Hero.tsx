import React, { useRef, useEffect } from "react";
import { useContent } from "../context/ContentContext";

// Parses "1200+" → { digits: [1,2,0,0], suffix: "+" }
function parseCounter(str: string = "200+") {
  const m = str.match(/^(\d+)(.*)$/);
  if (!m) return { digits: [0], suffix: str };
  return { digits: m[1].split("").map(Number), suffix: m[2] };
}

// 10-element scroll array. Last element is what shows after animation.
// _01: straight roll 0→digit; _02: overshoots mid=(digit+5)%10 then lands
function makeScrollArray(digit: number, style: "_01" | "_02"): number[] {
  if (style === "_01") return [0, 0, 0, 0, 0, 0, 0, 0, 0, digit];
  const mid = (digit + 5) % 10;
  return [0, mid, mid, mid, mid, mid, mid, mid, mid, digit];
}

function CounterDigits({ numStr }: { numStr: string }) {
  const { digits, suffix } = parseCounter(numStr);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Reset to top (no transition) so re-animation works when numStr changes
    colRefs.current.forEach(el => {
      if (!el) return;
      el.style.transition = "none";
      el.style.transform = "translateY(0)";
    });

    // Double-RAF ensures browser paints the reset state before we animate
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        colRefs.current.forEach(el => {
          if (!el) return;
          // translateY(-90%) of each column's own height moves it up by 9 item-heights,
          // revealing the 10th (last) item which holds the target digit.
          el.style.transition = "transform 1.4s cubic-bezier(0.23, 1, 0.32, 1)";
          el.style.transform = "translateY(-90%)";
        });
      });
      return () => cancelAnimationFrame(raf2);
    });

    return () => cancelAnimationFrame(raf1);
  }, [numStr]);

  return (
    <div className="future-v3-number-wrap">
      <div className="future-v3-number-overflow _01">
        <div className="future-v3-all-number">
          {digits.map((d, i) => {
            const cls: "_01" | "_02" = i % 2 === 0 ? "_01" : "_02";
            return (
              <div
                key={i}
                ref={el => { colRefs.current[i] = el; }}
                className={`future-v3-single-number ${cls}`}
              >
                {makeScrollArray(d, cls).map((n, j) => (
                  <h3 key={j} className="future-v3-number">{n}</h3>
                ))}
              </div>
            );
          })}
          {suffix && <h3 className="future-v3-number">{suffix}</h3>}
        </div>
      </div>
    </div>
  );
}

const Hero: React.FC = () => {
  const { content } = useContent();
  const h = content?.hero;

  const HeroCard = () => (
    <>
      <div className="hero-item-wap">
        <img
          src={h?.heroImage ?? "/images/69363a38ca18208550a6d873_Hero%20Image.webp"}
          loading="lazy"
          sizes="(max-width: 650px) 100vw, 650px"
          srcSet={`${h?.heroImage ?? "/images/69363a38ca18208550a6d873_Hero%20Image-p-500.webp"} 500w, ${h?.heroImage ?? "/images/69363a38ca18208550a6d873_Hero%20Image.webp"} 650w`}
          alt="Hero Item Img"
          className="hero-item-img"
        />
      </div>
      <div className="hero-partner-wrap">
        <CounterDigits numStr={h?.partnerNumber ?? "200+"} />
        <div className="hero-partner-text">{h?.partnerText ?? "Our Esteemed Clients and Partners"}</div>
      </div>
      <div className="hero-trust-wrap">
        <div className="hero-trust-text">{h?.trustText ?? "Trusted & Transparent Growth"}</div>
      </div>
      <div className="marketing-wrap">
        <div className="hero-trust-text">{h?.trustText ?? "Trusted & Transparent Growth"}</div>
        <img src="/images/6955e2eb80b79215389abcd2_Marketing%20Image.svg" loading="lazy" alt="Marketing Wrap" className="marketing-image" />
      </div>
      <div className="hero-location-wrap">
        <CounterDigits numStr={h?.locationNumber ?? "200+"} />
        <div className="hero-local-text">{h?.locationText ?? "Global Enterprise drives innovation"}</div>
        <div className="hero-map-wrap">
          {(h?.locations ?? ["Mexico", "Australia"]).map((loc, i) => (
            <div key={i} className="hero-map-text">{loc}</div>
          ))}
        </div>
      </div>
      <div className="hero-marketing-wrap">
        <div className="hero-marketing-dot"></div>
        <div className="marketing-text">{h?.marketingLabel ?? "Marketing Team"}</div>
      </div>
    </>
  );

  return (
    <section className="section hero">
      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-wrapper">
          <div className="inner-top-wrap">
            <div data-w-id="3efabc45-bcfe-0fb1-fef2-70c026944e60" className="sub-title-wrap">
              <div className="new-text">{h?.badgeNew ?? "New"}</div>
              <div className="inner-sub-title">{h?.badgeText ?? "No Hidden Pricing"}</div>
              <img src="/images/693639cd18e0727241ca34be_arrow-right.svg" loading="lazy" alt="Inner Icon" className="inner-icon" />
            </div>
            <h2 data-w-id="3efabc45-bcfe-0fb1-fef2-70c026944e65" className="inner-title">
              {h?.title ?? "Fueling the Next Generation of Brands"}
            </h2>
            <p data-w-id="3efabc45-bcfe-0fb1-fef2-70c026944e67" className="inner-details">
              {h?.description ?? "Powering bold ideas with strategy, creativity, and growth."}
            </p>
            <div data-w-id="3efabc45-bcfe-0fb1-fef2-70c026944e69" className="inner-button-wrap">
              <a href={h?.ctaLink ?? "/contact"} className="primary-button w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492 w-inline-block">
                <div className="primary-btn-wrap w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492">
                  <div className="primary-btn-text-wrap _01">
                    <div>{h?.ctaText ?? "Get Started"}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-text-wrap _02">
                    <div>{h?.ctaText ?? "Get Started"}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-bg w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492"></div>
                </div>
              </a>
              <a href={h?.watchDemoUrl ?? "#"} data-w-id="568be2e5-fc53-a100-7441-52800816be20" className="watch-button w-inline-block">
                <div className="watch-btn-wrap">
                  <img src="/images/694021bc397831d6c6ef7059_Play%20Icon.svg" loading="lazy" alt="Play" className="watch-icon" />
                  <div className="watch-btn-text">Watch Demo</div>
                </div>
                <div style={{ width: "0%" }} className="watch-btn-bg"></div>
              </a>
            </div>
          </div>
          {/* Desktop layout */}
          <div className="hero-wrap">
            <div className="hero-single-wrap desktop">
              <HeroCard />
            </div>
            {/* Tablet layouts */}
            <div className="hero-tab-wrap">
              <div className="hero-flex-wrap">
                <div className="hero-single-wrap tab"><HeroCard /></div>
                <div className="hero-single-wrap tab"><HeroCard /></div>
                <div className="hero-single-wrap tab"><HeroCard /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
