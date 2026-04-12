'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'DIFC Services', link: '#', isActive: true },
      { name: 'Commercial & Corporate', link: '/family-violence', isActive: false },
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
    mainImage: '/assets/img/service/service-details-img5.jpg',
    serviceTitle: 'DIFC Services',
    serviceDescription1: 'The Dubai International Financial Centre (DIFC) operates as an independent jurisdiction with its own civil and commercial laws based on English common law. Our team provides specialized guidance for entities operating within the DIFC, including company formation, regulatory compliance, and dispute resolution through the DIFC Courts.',
    serviceDescription2: 'Advocate Bindu S. Chettur holds audience rights in DIFC Courts and is a registered DIFC Wills Draftsman. We assist clients with DIFC entity setup, governance advisory, employment matters within DIFC, and representation in DIFC Courts and DIFC-LCIA arbitration proceedings.',
    benefitTitle: 'Benefits of our DIFC Services',
    benefitDescription: 'Our deep understanding of the DIFC legal framework, combined with cross-border expertise, enables us to provide comprehensive solutions for businesses and individuals operating within this jurisdiction.',
    benefits: [
      { icon: 'icon-icon-9', title: 'DIFC Court representation' },
      { icon: 'icon-icon-10', title: 'Entity setup & compliance' },
      { icon: 'icon-icon-11', title: 'Wills & Probate drafting' },
      { icon: 'icon-icon-12', title: 'Regulatory advisory' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Expert DIFC Legal Solutions',
    justiceText1: 'With extensive experience in DIFC matters, we provide practical, results-oriented advice for businesses navigating the unique legal landscape of this international financial centre.',
    justiceList: ['DIFC entity formation and structuring', 'DIFC Courts litigation and arbitration', 'DIFC Wills and estate planning'],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Find answers to the most common questions about our DIFC legal services and how we can assist businesses and individuals operating within this jurisdiction.',
    faqs: [
      { question: 'What is the DIFC and why does it have its own legal system?', answer: 'The Dubai International Financial Centre is a special economic zone in Dubai with its own independent legal system based on English common law. It operates its own courts, the DIFC Courts, which handle civil and commercial disputes within the Centre, providing international businesses with a familiar and trusted legal framework.' },
      { question: 'Can you represent clients in the DIFC Courts?', answer: 'Yes. Advocate Bindu S. Chettur holds full audience rights in the DIFC Courts and can represent clients in all proceedings, including trials, appeal hearings, and enforcement matters. We handle both claimant and respondent representation across all divisions of the DIFC Courts.' },
      { question: 'What is a DIFC Will and who should have one?', answer: 'A DIFC Will allows non-Muslim expatriates in the UAE to distribute their assets in accordance with their own wishes rather than under UAE inheritance law. Any non-Muslim resident or property owner in the UAE should consider a DIFC Will to protect their estate and ensure their intended beneficiaries are provided for. Advocate Bindu S. Chettur is a registered DIFC Wills Draftsman.' },
    ],
  };

  return (
    <Layout breadcrumbTitle="DIFC Services">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
