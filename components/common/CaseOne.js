"use client";

import { useEffect } from "react";
import Link from "next/link";
import { successStories } from "@/data/successStories";

export default function CaseOne() {
  const cases = successStories.map((story, index) => ({
    delay: `.${(index % 4) + 1}s`,
    subTitleImg: index === 0 ? "/assets/img/icon/sec-title-img1.png" : undefined,
    subTitleText: index === 0 ? "success stories" : undefined,
    title:
      index === 0
        ? "landmark victories across jurisdictions"
        : undefined,
    imgSrc: story.image,
    category: story.category,
    caseTitle: story.title,
    caseLink: `/case-details/${story.slug}`,
  }));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Isotope = require("isotope-layout");

      const masonryLayout = document.querySelector(".masonary-layout");
      const postFilter = document.querySelector(".post-filter");

      if (masonryLayout) {
        new Isotope(masonryLayout, {
          layoutMode: "masonry",
        });
      }

      if (postFilter) {
        postFilter.querySelectorAll("li .filter-text").forEach((filterText) => {
          filterText.addEventListener("click", (event) => {
            event.preventDefault();
            const Self = event.currentTarget;
            const selector = Self.parentElement.getAttribute("data-filter");
            postFilter.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
            Self.parentElement.classList.add("active");

            new Isotope(masonryLayout, {
              filter: selector,
              animationOptions: {
                duration: 500,
                easing: "linear",
                queue: false,
              },
            });
          });
        });

        const activeFilterItem = postFilter.querySelectorAll("li");
        activeFilterItem.forEach((item) => {
          const filterElement = item.getAttribute("data-filter");
          const count = masonryLayout.querySelectorAll(filterElement).length;
          item.querySelector(".filter-text").innerHTML += `<span class="count">${count}</span>`;
        });
      }
    }
  }, []);

  return (
    <>
      {/* Start Case One */}
      <section className="case-one">
        <div className="container">
          <div className="row filter-layout masonary-layout">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className={`col-xl-6 col-lg-6 wow fadeInUp`}
                data-wow-delay={caseItem.delay}
              >
                <div className={`case-one__single ${caseItem.style || ""}`}>
                  {caseItem.subTitleImg && (
                    <div className="sec-title">
                      <div className="sub-title">
                        <div className="icon">
                          <img src={caseItem.subTitleImg} alt="Section Title Icon" />
                        </div>
                        <div className="text">
                          <p>{caseItem.subTitleText}</p>
                        </div>
                      </div>
                      <h2 className="">
                        {caseItem.title.split(" <br>").map((text, i) => (
                          <span key={i}>
                            {text}
                            <br />
                          </span>
                        ))}
                      </h2>
                    </div>
                  )}
                  <div className="case-one__single-content">
                    <p>{caseItem.category}</p>
                    <h2>
                      <Link href={caseItem.caseLink}>{caseItem.caseTitle}</Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Case One */}
    </>
  );
}
