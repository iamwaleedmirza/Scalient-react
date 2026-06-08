import React from 'react';
import { useContent } from '../context/ContentContext';

const Blog: React.FC = () => {
  const { content } = useContent();
  const b = content?.blog;
  const posts = b?.posts ?? [];

  return (
    <section className="section blog-v1">
      <div className="w-layout-blockcontainer container w-container">
        <div className="blog-v1-wrapper">
          <div className="future-top-wrap">
            <div data-w-id="14f187c2-2d07-306b-09e9-df1528c8849d" className="feature-top-left-wrap">
              <h2 className="future-title _01">{b?.title}</h2>
            </div>
            <div className="feature-top-right-wrap">
              <p className="future-details">{b?.description}</p>
              <a href={b?.ctaLink ?? '/blog'} className="primary-button w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492 w-inline-block">
                <div className="primary-btn-wrap w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492">
                  <div className="primary-btn-text-wrap _01">
                    <div>{b?.ctaText ?? 'View Blogs'}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-text-wrap _02">
                    <div>{b?.ctaText ?? 'View Blogs'}</div>
                    <img src="/images/6934effbe4f3f00cfba4e6ba_Icon.svg" loading="lazy" alt="Icon" className="primary-icon w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492" />
                  </div>
                  <div className="primary-btn-bg w-variant-0a3f9beb-5f52-53a0-e1a7-59f8ae06e492"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="blog-v1-wrap">
            <div className="blog-cl-wrapper w-dyn-list">
              <div role="list" className="blog-v1-grid-wrap w-dyn-items">
                {posts.map((post, i) => (
                  <div key={i} role="listitem" className="blog-cl-item w-dyn-item">
                    <div className="blog-v1-card-wrap">
                      <a href={post.link} className="blog-v1-image-wrap w-inline-block">
                        <img src={post.image} loading="lazy" alt={post.title} className="blog-v1-image" />
                      </a>
                      <div className="blog-v1-card-ctg">{post.category}</div>
                      <a href={post.link} className="blog-v1-card-link">{post.title}</a>
                      <p className="blog-v1-card-details">{post.description}</p>
                      <div className="blog-v1-author-wrap">
                        <img src={post.authorImage} loading="lazy" alt={post.author} className="blog-v1-author" />
                        <div className="blog-v1-auhor-details-wrap">
                          <div className="blog-v1-author-name">{post.author}</div>
                          <div className="blog-v1-author-pst">{post.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
