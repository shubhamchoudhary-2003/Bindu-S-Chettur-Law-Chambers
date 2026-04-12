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
      { name: 'Drafting & Agreements', link: '#', isActive: true },
      { name: 'Legal Advisory', link: '/real-estate', isActive: false },
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
    mainImage: '/assets/img/service/service-details-img8.jpg',
    serviceTitle: 'Drafting & Agreements',
    serviceDescription1: 'Our legal drafting services ensure that your contracts and agreements are precise, enforceable, and aligned with applicable laws across UAE and India. We draft, review, and vet all forms of commercial agreements, employment contracts, partnership deeds, and licensing agreements.',
    serviceDescription2: 'With cross-border expertise, we ensure that agreements involving multiple jurisdictions are properly structured to protect our clients\' interests while maintaining compliance with local regulatory requirements.',
    benefitTitle: 'Benefits of our Drafting Services',
    benefitDescription: 'Poorly drafted contracts are one of the most common sources of commercial disputes. Our meticulous approach to drafting and reviewing agreements helps clients avoid costly misunderstandings and litigation.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Contract drafting' },
      { icon: 'icon-icon-10', title: 'Agreement review' },
      { icon: 'icon-icon-11', title: 'Legal vetting' },
      { icon: 'icon-icon-12', title: 'Cross-border compliance' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Precision Drafting for Stronger Agreements',
    justiceText1: 'Every contract we draft is carefully tailored to reflect your specific commercial intentions, protect your interests, and stand up to scrutiny under the applicable legal framework.',
    justiceList: ['Commercial agreements and MoUs', 'Partnership deeds and shareholder agreements', 'Cross-border contracts with multi-jurisdictional compliance'],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Understand the importance of professional legal drafting and how our team can help you create agreements that protect your interests.',
    faqs: [
      { question: 'Why should I use a lawyer to draft my contracts rather than using a template?', answer: 'Generic templates cannot account for the specific circumstances of your transaction, the applicable jurisdiction\'s requirements, or the particular risks you face. A lawyer-drafted contract is tailored to your needs, enforceable under local law, and structured to protect your interests in the event of a dispute. The cost of professional drafting is typically far less than the cost of resolving a dispute arising from a poorly drafted agreement.' },
      { question: 'What types of agreements do you draft and review?', answer: 'We draft and review a broad range of commercial documents including sale and purchase agreements, service agreements, distribution and agency agreements, employment contracts, partnership and shareholder agreements, licensing and franchise agreements, joint venture agreements, NDAs, and memoranda of understanding. We also handle construction contracts, real estate agreements, and cross-border transaction documents.' },
      { question: 'Can you review a contract that was prepared by the other party before I sign it?', answer: 'Absolutely. Having an experienced lawyer review a contract before you sign is one of the most important steps you can take to protect yourself. We will identify unfavorable terms, flag missing protections, assess the risks you would be taking on, and negotiate amendments where possible. We provide clear, practical feedback rather than simply listing issues.' },
    ],
  };

  return (
    <Layout breadcrumbTitle="Drafting & Agreements">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
