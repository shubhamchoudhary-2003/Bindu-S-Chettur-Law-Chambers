"use client"
// src/pages/index.js
import Layout from "@/components/layout/Layout";
import BlogSidebar from "@/components/common/BlogSidebar";
import Link from "next/link";
// src/data/blogData.js
export const blogData = [
    {
      id: 1,
      date: { day: '15', month: 'Mar' },
      image: '/assets/img/blog/blog-page-img1.jpg',
      category: 'corporate law',
      comments: 3,
      title: 'Navigating DIFC regulations for cross-border businesses',
      excerpt: 'Understanding the regulatory framework of the Dubai International Financial Centre is essential for businesses operating across borders. Our guide covers key compliance requirements and best practices.',
      detailsLink: '/blog-details'
    },
    {
      id: 2,
      date: { day: '22', month: 'Feb' },
      image: '/assets/img/blog/blog-page-img2.jpg',
      category: 'employment',
      comments: 2,
      title: 'Key changes in UAE labor law every employer should know',
      excerpt: 'Recent amendments to UAE labor regulations have introduced significant changes for employers and employees. Learn about the new provisions and how they affect your business operations.',
      detailsLink: '/blog-details'
    },
    {
      id: 3,
      date: { day: '10', month: 'Jan' },
      image: '/assets/img/blog/blog-page-img3.jpg',
      category: 'arbitration',
      comments: 4,
      title: 'Understanding commercial arbitration in DIAC and DIFC-LCIA',
      excerpt: 'Commercial arbitration has become the preferred method of dispute resolution in the UAE. This article explores the procedures and advantages of arbitration through DIAC and DIFC-LCIA.',
      detailsLink: '/blog-details'
    },
    {
      id: 4,
      date: { day: '05', month: 'Dec' },
      image: '/assets/img/blog/blog-page-img4.jpg',
      category: 'real estate',
      comments: 2,
      title: 'Real estate investment advisory for expats in UAE',
      excerpt: 'Investing in UAE real estate as an expatriate involves understanding unique legal frameworks. We break down the key considerations for property investment, lease agreements, and ownership rights.',
      detailsLink: '/blog-details'
    },
    {
      id: 5,
      date: { day: '18', month: 'Nov' },
      image: '/assets/img/blog/blog-page-img5.jpg',
      category: 'corporate',
      comments: 3,
      title: 'Business setup guide: mainland vs free zone in UAE',
      excerpt: 'Choosing between mainland and free zone company formation in the UAE depends on your business goals. We compare the advantages, limitations, and compliance requirements of each option.',
      detailsLink: '/blog-details'
    },
  ];

  const latestPosts = [
    { image: "/assets/img/blog/latest-post-img1.jpg", date: "15 Mar, 2026", title: "Navigating DIFC regulations for businesses", url: "/blog-details" },
    { image: "/assets/img/blog/latest-post-img2.jpg", date: "22 Feb, 2026", title: "Key changes in UAE labor law", url: "/blog-details" },
    { image: "/assets/img/blog/latest-post-img3.jpg", date: "10 Jan, 2026", title: "Commercial arbitration in DIAC", url: "/blog-details" }
];

const categories = [
    { name: "DIFC Services", count: 5, url: "#" },
    { name: "Commercial & Corporate", count: 8, url: "#" },
    { name: "Arbitration", count: 12, url: "#" },
    { name: "Employment & Labor", count: 7, url: "#" },
    { name: "Drafting & Agreements", count: 10, url: "#" },
    { name: "Legal Advisory", count: 5, url: "#" }
];

const tags = ["DIFC", "corporate", "arbitration", "employment", "UAE"];
  

export default function Home() {
    return (
        <Layout breadcrumbTitle="Blog standard">
            <div>
                {/* Start Blog Page */}
                <section className="blog-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Blog Page Content */}
                            <div className="col-xl-8">
                                <div className="blog-page__content">
                                    {blogData.map((blog) => (
                                        <div key={blog.id} className="blog-one__single">
                                            <div className="blog-one__single-img">
                                                <img src={blog.image} alt={blog.title} />
                                                <div className="date-box">
                                                    <h2>{blog.date.day}</h2>
                                                    <span>{blog.date.month}</span>
                                                </div>
                                                <div className="blog-one__single-img-hover-group">
                                                    {Array(8).fill(null).map((_, index) => (
                                                        <span key={index} className="blog-one__single-img-hover"></span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="blog-one__single-content">
                                                <div className="meta-box">
                                                    <ul>
                                                        <li><a href="#"><span className="icon-icon-23"></span> {blog.category}</a></li>
                                                        <li><a href="#"><span className="icon-icon-19"></span> ({blog.comments}) Comment</a></li>
                                                    </ul>
                                                </div>
                                                <h2>
                                                    <Link href={blog.detailsLink}>
                                                        {blog.title}
                                                    </Link>
                                                </h2>
                                                <div className="text-box">
                                                    <p>{blog.excerpt}</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href={blog.detailsLink}>
                                                        read More <span className="icon-icon-22"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* End Blog Page Content Single */}

                                    {/* Start Pagination */}
                                    <ul className="styled-pagination clearfix">
                                        <li className="arrow previous">
                                            <a href="#"><span className="icon-icon-52"></span></a>
                                        </li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li className="arrow next">
                                            <a href="#"><span className="icon-icon-22"></span></a>
                                        </li>
                                    </ul>
                                    {/* End Pagination */}
                                </div>
                            </div>
                            {/* End Blog Page Content */}

                            {/* Start Sidebar */}
                                <div className="col-xl-4">
                                    <BlogSidebar latestPosts={latestPosts} categories={categories} tags={tags} />
                                </div>
                            {/* End Sidebar */}
                        </div>
                    </div>
                </section>
                {/* End Blog Page */}
            </div>
        </Layout>
    );
}
