'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'DIFC Services', link: '/criminal-case', isActive: false },
      { name: 'Commercial & Corporate', link: '/family-violence', isActive: false },
      { name: 'Arbitration', link: '#', isActive: true },
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
    mainImage: '/assets/img/service/service-details-img6.jpg',
    serviceTitle: 'Arbitration',
    serviceDescription1: 'We provide comprehensive arbitration services, acting as counsel and appointed arbitrators in commercial disputes. Our expertise covers institutional arbitration under DIAC, DIFC-LCIA, and LCIA rules, as well as ad hoc arbitration proceedings.',
    serviceDescription2: 'Advocate Bindu S. Chettur is an appointed arbitrator with DIAC, DIFC-LCIA, and LCIA, bringing extensive firsthand experience in managing complex multi-jurisdictional disputes to every engagement.',
    benefitTitle: 'Benefits of our Arbitration Services',
    benefitDescription: 'Our dual role as both arbitration counsel and appointed arbitrators gives us a unique perspective that enables us to develop stronger strategies and deliver more effective representation for our clients.',
    benefits: [
      { icon: 'icon-icon-9', title: 'DIAC arbitration' },
      { icon: 'icon-icon-10', title: 'DIFC-LCIA proceedings' },
      { icon: 'icon-icon-11', title: 'Dispute resolution' },
      { icon: 'icon-icon-12', title: 'Enforcement support' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Resolving Disputes Through Expert Arbitration',
    justiceText1: 'Our experience on both sides of the arbitral process — as counsel and as appointed arbitrators — gives us an unmatched ability to anticipate procedural dynamics and craft winning strategies for our clients.',
    justiceList: ['Institutional arbitration under DIAC, DIFC-LCIA, and LCIA rules', 'Ad hoc arbitration and emergency arbitration proceedings', 'Enforcement of domestic and international arbitral awards'],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Understand the arbitration process and how our team can guide you through resolving commercial disputes efficiently and effectively.',
    faqs: [
      { question: 'What is arbitration and how does it differ from litigation?', answer: 'Arbitration is a private dispute resolution process where parties agree to have their dispute decided by an appointed arbitrator or panel, rather than a court. It offers key advantages including confidentiality, flexibility in procedure, choice of arbitrator expertise, and generally faster resolution. Awards are typically final and binding with limited grounds for appeal.' },
      { question: 'Which arbitration institutions do you work with?', answer: 'We regularly handle matters under the rules of the Dubai International Arbitration Centre (DIAC), DIFC-LCIA, London Court of International Arbitration (LCIA), and ad hoc proceedings under UNCITRAL rules. Advocate Bindu S. Chettur is an appointed arbitrator on the panels of DIAC, DIFC-LCIA, and LCIA.' },
      { question: 'Can arbitration awards be enforced internationally?', answer: 'Yes. The UAE is a signatory to the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards, which means awards issued in arbitration proceedings can be enforced in over 170 countries. We advise on and assist with the enforcement process both within the UAE and across jurisdictions.' },
    ],
  };

  return (
    <Layout breadcrumbTitle="Arbitration">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
