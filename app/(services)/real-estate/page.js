'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'DIFC Services', link: '/criminal-case', isActive: false },
      { name: 'Commercial & Corporate', link: '/family-violence', isActive: false },
      { name: 'Arbitration', link: '/business-law', isActive: false },
      { name: 'Employment & Labor', link: '/health-care', isActive: false },
      { name: 'Drafting & Agreements', link: '/insurance-law', isActive: false },
      { name: 'Legal Advisory', link: '#', isActive: true },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Comprehensive Legal Support',
    contactLink: '/contact',
    contactButtonText: 'Contact Us',
    downloadTitle: 'Download File',
    downloads: [
      { text: 'Our Presentation', link: '/presentation' },
      { text: 'Monthly Report', link: '/monthly-report' },
    ],
    mainImage: '/assets/img/service/service-details-img9.jpg',
    serviceTitle: 'Legal Advisory & Opinions',
    serviceDescription1: 'We provide practical legal guidance and in-depth analysis across all areas of UAE and Indian law. Our advisory services cover regulatory compliance, risk assessment, and strategic legal planning for individuals and businesses.',
    serviceDescription2: 'Our advisory practice extends to succession and wealth planning, wills and probate, real estate matters, intellectual property, and construction law, ensuring comprehensive coverage of our clients\' diverse legal needs.',
    benefitTitle: 'Benefits of our Advisory Services',
    benefitDescription: 'Sound legal advice is the foundation of every successful business decision. Our advisory team provides clear, actionable guidance that helps clients navigate complex legal landscapes with confidence.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Legal opinions' },
      { icon: 'icon-icon-10', title: 'Risk assessment' },
      { icon: 'icon-icon-11', title: 'Wealth planning' },
      { icon: 'icon-icon-12', title: 'Regulatory compliance' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Informed Decisions Through Expert Legal Guidance',
    justiceText1: 'Our advisory team delivers comprehensive legal opinions and strategic guidance across UAE and Indian law, helping clients make informed decisions and manage legal risk effectively.',
    justiceList: ['Formal legal opinions for transactions and regulatory matters', 'Succession planning, wills, and probate advisory', 'Intellectual property, real estate, and construction law guidance'],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Find out how our legal advisory services can help you navigate complex legal questions and protect your interests across multiple practice areas.',
    faqs: [
      { question: 'What is a legal opinion and when do I need one?', answer: 'A legal opinion is a formal written analysis prepared by a qualified lawyer setting out the legal position on a specific matter. They are commonly required by banks and financial institutions, in cross-border transactions, for regulatory applications, and when entering into significant commercial agreements. Our legal opinions are thorough, clearly reasoned, and tailored to the specific question at hand.' },
      { question: 'How can you assist with succession and wealth planning in the UAE?', answer: 'For expatriates in the UAE, succession planning is particularly important as UAE inheritance law differs significantly from most home country laws. We advise on DIFC Wills, offshore trust structures, and cross-border estate planning to ensure that your assets are distributed according to your wishes. We also advise on UAE mainland succession procedures and probate applications.' },
      { question: 'Do you advise on real estate and construction law matters?', answer: 'Yes. Our advisory practice covers a wide range of real estate and construction law matters including property purchase and sale transactions, off-plan purchases, landlord and tenant disputes, construction contract advisory, and RERA-related matters. We also advise on real estate investment structures and title due diligence for property acquisitions.' },
    ],
  };

  return (
    <Layout breadcrumbTitle="Legal Advisory">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
