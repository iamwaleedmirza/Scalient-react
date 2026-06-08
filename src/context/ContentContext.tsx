import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchContent, updateSection as apiUpdateSection } from '../api/client';

export interface GrowthCard { title: string; description: string; }
export interface WorkItem { title: string; date: string; image: string; link: string; }
export interface Stat { value: string; label: string; description: string; }
export interface PricingPlan { price: string; name: string; description: string; features: string[]; link: string; highlighted: boolean; }
export interface Testimonial { text: string; name: string; role: string; image: string; }
export interface BlogPost { image: string; category: string; title: string; description: string; author: string; authorImage: string; date: string; link: string; }

export interface SiteContent {
  navbar: { ctaText: string; ctaLink: string };
  hero: {
    badgeNew: string; badgeText: string; title: string; description: string;
    ctaText: string; ctaLink: string; watchDemoUrl: string;
    partnerText: string; partnerNumber: string;
    trustText: string; locationText: string; locationNumber: string;
    locations: string[]; marketingLabel: string; heroImage: string;
  };
  about: { sectionLabel: string; description: string; bottomText: string; ctaText: string; ctaLink: string; image1: string; image2: string };
  growth: { title: string; description: string; ctaText: string; ctaLink: string; cards: GrowthCard[] };
  work: { titleLine1: string; titleLine2Start: string; titleLine2End: string; ctaText: string; ctaLink: string; items: WorkItem[] };
  number: { title: string; description: string; ctaText: string; ctaLink: string; stats: Stat[]; tags: string[] };
  trusted: { title: string; logos: string[] };
  plan: { subtitle: string; title: string; description: string; monthly: PricingPlan[]; yearly: PricingPlan[] };
  feedback: { title: string; description: string; testimonials: Testimonial[] };
  blog: { title: string; description: string; ctaText: string; ctaLink: string; posts: BlogPost[] };
  cta: { text: string };
  footer: { newsletterTitle: string; emailNote: string; socialLinks: { facebook: string; twitter: string; instagram: string }; copyright: string };
}

interface ContentContextValue {
  content: SiteContent | null;
  loading: boolean;
  updateSection: <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => Promise<void>;
  reload: () => void;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchContent();
      setContent(data);
    } catch (e) {
      console.error('Failed to load content:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const updateSection = useCallback(async <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => {
    await apiUpdateSection(section as string, data);
    setContent(prev => prev ? { ...prev, [section]: data } : prev);
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, updateSection, reload: load }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within ContentProvider');
  return ctx;
}
