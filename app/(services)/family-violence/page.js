'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'DIFC Services', link: '/criminal-case', isActive: false },
      { name: 'Commercial & Corporate', link: '#', isActive: true },
      { name: 'Arbitration', link: '/business-law', isActive: false },
      { name: 'Employment & Labor', link: '/health-care', isActive: false },
      { name: 'Drafting & Agreements', link: '/insurance-law', isActive: false },
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
    mainImage: '/assets/img/service/service-details-img1.jpg',
    serviceTitle: 'Commercial & Corporate',
    serviceDescription1: 'Our commercial and corporate practice covers the full spectrum of business law matters across mainland UAE, free zones, and offshore entities. We advise on company establishment, corporate governance, mergers and acquisitions, and cross-border commercial transactions.',
    serviceDescription2: 'With operations in both UAE and India through Chanakyatse Consultancy, we are uniquely positioned to facilitate cross-border business transactions, ensuring compliance with local regulations while maximizing commercial opportunities.',
    benefitTitle: 'Benefits of our Corporate Services',
    benefitDescription: 'Our cross-border expertise and deep knowledge of UAE and Indian commercial law provides clients with seamless legal support for their business operations across jurisdictions.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Company establishment' },
      { icon: 'icon-icon-10', title: 'M&A advisory' },
      { icon: 'icon-icon-11', title: 'Corporate governance' },
      { icon: 'icon-icon-12', title: 'Cross-border transactions' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Strategic Corporate Legal Counsel',
    justiceText1: 'We work closely with founders, executives, and boards to provide strategic legal support at every stage of the business lifecycle, from incorporation through to exit.',
    justiceList: ['Company formation across UAE mainland and free zones', 'Mergers, acquisitions, and restructuring advisory', 'Shareholder agreements and corporate governance frameworks'],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Get clarity on common questions about commercial and corporate legal services in the UAE and how we can support your business objectives.',
    faqs: [
      { question: 'What types of companies can be set up in the UAE?', answer: 'The UAE offers several business structures including mainland limited liability companies, free zone companies, and offshore entities. Each has distinct advantages in terms of ownership, activities permitted, and tax implications. We advise clients on the most suitable structure based on their specific business activities, target markets, and ownership preferences.' },
      { question: 'Do foreign investors need a local sponsor to set up a business in UAE?', answer: 'Recent amendments to UAE commercial company law now allow 100% foreign ownership in many sectors on the mainland, removing the previous requirement for a local sponsor in most cases. Free zones have always permitted full foreign ownership. We assess your specific activity and advise on the most efficient structure for your business goals.' },
      { question: 'How can you assist with cross-border UAE-India transactions?', answer: 'Through our dual presence in UAE and India via Chanakyatse Consultancy, we provide end-to-end legal support for bilateral transactions, including structuring, due diligence, regulatory approvals, and documentation. Our team is familiar with both Indian corporate law and UAE commercial law, enabling seamless cross-border deal execution.' },
    ],
  };

  return (
    <Layout breadcrumbTitle="Commercial & Corporate">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
