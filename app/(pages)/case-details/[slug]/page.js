import Layout from "@/components/layout/Layout";
import { successStories, getStoryBySlug } from "@/data/successStories";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return successStories.map((story) => ({ slug: story.slug }));
}

export default function CaseDetailsSlug({ params }) {
  const story = getStoryBySlug(params.slug);
  if (!story) notFound();

  return (
    <>
      <Layout breadcrumbTitle={story.shortTitle || story.title}>
        <section className="case-details">
          <div className="container">
            <div className="row">
              {/* Sidebar */}
              <div className="col-xl-4">
                <div className="case-details__sidebar">
                  <div className="case-details__sidebar-text">
                    <h2>{story.category}</h2>
                    <p>{story.overview}</p>
                  </div>

                  <div className="case-details__sidebar-project">
                    <div className="title-box">
                      <div className="shape-box">
                        <div className="line"></div>
                        <div className="round"></div>
                      </div>
                      <div className="text">
                        <h3>Project info</h3>
                      </div>
                    </div>

                    <div className="case-details__sidebar-project-list">
                      <ul>
                        {story.projectInfo.map((item, index) => (
                          <li key={index}>
                            <div className="text-box">
                              <p>{item.label}</p>
                              <h3>{item.value}</h3>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="col-xl-8">
                <div className="case-details__content">
                  <div className="case-details__content-img1">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="case-details__content-img1-single">
                          <img src={story.image} alt={story.title} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="case-details__content-text1">
                    <h2>{story.title}</h2>
                    <p>{story.overview}</p>
                  </div>

                  <div className="case-details__content-text2">
                    <h2>Key Legal Dimensions</h2>
                    <div className="case-details__content-text2-list">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <ul>
                            {story.keyIssues.map((item, idx) => (
                              <li key={idx}>
                                <h3>
                                  <span className="icon-icon-16"></span> {item}
                                </h3>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="case-details__content-text3">
                    <h2>Outcome</h2>
                    <p>{story.outcome}</p>
                  </div>

                  <div className="case-details__content-text1" style={{ marginTop: "40px" }}>
                    <Link className="thm-btn" href="/about">
                      Back to Success Stories
                      <span className="thm-btn__icon">
                        <i className="icon-icon-8"></i>
                      </span>
                      <span className="thm-btn__hover-group">
                        <span className="thm-btn__hover thm-btn__hover--1"></span>
                        <span className="thm-btn__hover thm-btn__hover--2"></span>
                        <span className="thm-btn__hover thm-btn__hover--3"></span>
                        <span className="thm-btn__hover thm-btn__hover--4"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
