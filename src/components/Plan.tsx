import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import type { PricingPlan } from '../context/ContentContext';

const checkGray = '/images/694151eb872b88eb7d08ba38_Check%20Icon%20Gray.svg';
const checkWhite = '/images/694151eb8713c59faa6a32e3_Check%20Icon%20White.svg';
const iconNormal = '/images/69415435071b22e7b0b20d7d_Pricing%20Icon%2001.svg';
const iconHighlight = '/images/694154d9e46a02ae10470eee_Pricing%20Icon%2002.svg';

function PlanCard({ plan }: { plan: PricingPlan }) {
  const isCenter = plan.highlighted;
  return (
    <div className={`pricing-tab-card-wrap${isCenter ? ' center' : ''}`}>
      <div className="pricing-top-wrap">
        <div className="pricing-icon-wrap">
          <img loading="lazy" src={isCenter ? iconHighlight : iconNormal} alt="Pricing Card Icon" className="pricing-card-icon" />
        </div>
        <div className="pricin-price-wrap">
          <div className="pricing-price">{plan.price}</div>
          <div className="pricing-price-month">/per month</div>
        </div>
      </div>
      <div className="pricing-card-title">{plan.name}</div>
      <p className="pricing-card-details">{plan.description}</p>
      <div className="pricing-button-wrap">
        <a href={plan.link} className={`pricing-button${isCenter ? ' current' : ''} w-inline-block`}>
          <div className="pricing-btn-text">Get Started</div>
          <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Pricing Btn Icon" className="pricing-btn-icon" />
          <div style={isCenter ? {} : { height: '0%' }} className={`pricing-bg${isCenter ? ' current' : ''}`}></div>
        </a>
      </div>
      <div className="feature-title">Features</div>
      <div className="feature-list-wrapper">
        {plan.features.map((feat, i) => (
          <div key={i} className="feature-list-wrap">
            <img src={isCenter ? checkWhite : checkGray} loading="lazy" alt="Feature List Icon" className="feature-list-icon" />
            <div className={`feature-list-text${isCenter ? ' white' : ''}`}>{feat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanGrid({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="pricing-tab-grid-wrap sticky">
      {plans.map((plan, i) => (
        <div key={i} className="pricing-cl-wrapper sticky w-dyn-list">
          <div role="list" className="pricing-cl-list w-dyn-items">
            <div role="listitem" className="pricing-cl-item w-dyn-item">
              <PlanCard plan={plan} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Plan: React.FC = () => {
  const { content } = useContent();
  const p = content?.plan;
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="section plan">
      <div className="w-layout-blockcontainer container w-container">
        <div className="plan-wrapper">
          <div className="plan-top-wrap">
            <div data-w-id="96070df7-2718-82e8-6078-0fac6cb94259" className="plan-sub-title">{p?.subtitle ?? 'Our Plans'}</div>
            <h2 data-w-id="f7b6f696-0b9c-1a01-7c2e-68a2c1774624" className="plan-title">{p?.title}</h2>
            <div data-w-id="00fa11e1-93e4-959f-1e4f-c3793fa37292" className="plan-details">{p?.description}</div>
          </div>
          <div className="plan-wrap">
            {/*
              Both panes must stay in the DOM so Webflow's tab JS can find them
              by data-w-tab when it initialises. Only one gets w--tab-active.
            */}
            <div
              data-current={activeTab === 'monthly' ? 'Tab 1' : 'Tab 2'}
              data-easing="ease"
              data-duration-in="0"
              data-duration-out="0"
              className="pricing-inner-tabs w-tabs"
            >
              <div className="pricing-inner-tab-menu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  onClick={e => { e.preventDefault(); setActiveTab('monthly'); }}
                  className={`pricing-inner-tab-link w-inline-block w-tab-link${activeTab === 'monthly' ? ' w--current' : ''}`}
                  style={{ cursor: 'pointer' }}
                ><div>Monthly</div></a>
                <a
                  data-w-tab="Tab 2"
                  onClick={e => { e.preventDefault(); setActiveTab('yearly'); }}
                  className={`pricing-inner-tab-link w-inline-block w-tab-link${activeTab === 'yearly' ? ' w--current' : ''}`}
                  style={{ cursor: 'pointer' }}
                ><div>Yearly</div></a>
              </div>
              <div className="pricing-inner-tab-content w-tab-content">
                {/* Tab 1 — Monthly: always in DOM */}
                <div data-w-tab="Tab 1" className={`pricing-inner-tab-pane w-tab-pane${activeTab === 'monthly' ? ' w--tab-active' : ''}`}>
                  <PlanGrid plans={p?.monthly ?? []} />
                </div>
                {/* Tab 2 — Yearly: always in DOM */}
                <div data-w-tab="Tab 2" className={`pricing-inner-tab-pane w-tab-pane${activeTab === 'yearly' ? ' w--tab-active' : ''}`}>
                  <PlanGrid plans={p?.yearly ?? []} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
