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
      { name: 'Employment & Labor', link: '#', isActive: true },
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
    mainImage: '/assets/img/service/service-details-img7.jpg',
    serviceTitle: 'Employment & Labor',
    serviceDescription1: 'Our employment and labor practice provides comprehensive advisory services for employers and employees across UAE mainland and free zones. We handle the full spectrum of employment matters including contract drafting, compliance advisory, termination disputes, and workplace investigations.',
    serviceDescription2: 'We assist businesses in navigating UAE labor law requirements, including end-of-service benefits, work permit regulations, and Wages Protection System compliance, while also advising employees on their rights and entitlements.',
    benefitTitle: 'Benefits of our Employment Services',
    benefitDescription: 'Whether you are an employer building compliant HR frameworks or an employee protecting your rights, our employment law specialists provide clear, practical guidance tailored to your situation.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Employment contracts' },
      { icon: 'icon-icon-10', title: 'Labor compliance' },
      { icon: 'icon-icon-11', title: 'Dispute resolution' },
      { icon: 'icon-icon-12', title: 'Free zone employment' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Protecting Rights in the Workplace',
    justiceText1: 'We provide balanced, practical employment law advice that helps businesses maintain compliant workplaces and helps employees understand and enforce their rights under UAE labor law.',
    justiceList: ['Employment contract drafting and review', 'Termination disputes and end-of-service benefit claims', 'UAE mainland and free zone labor compliance advisory'],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Get answers to common questions about employment and labor law in the UAE and how we can assist both employers and employees.',
    faqs: [
      { question: 'What are an employee\'s rights upon termination in the UAE?', answer: 'Upon termination, employees in the UAE are entitled to end-of-service gratuity calculated based on their basic salary and years of service, payment of any accrued leave balance, and return flight tickets if applicable. Employees terminated without valid cause may also be entitled to compensation. The specific entitlements vary depending on whether the employment is governed by UAE Federal Labor Law or a free zone authority\'s regulations.' },
      { question: 'Can an employer include a non-compete clause in an employment contract?', answer: 'Yes, non-compete clauses are permitted under UAE labor law provided they are reasonable in terms of duration, geographic scope, and the nature of activities restricted. A clause that is overly broad may not be enforceable. We advise employers on drafting enforceable non-compete provisions and advise employees on challenging unreasonable restrictions.' },
      { question: 'How are employment disputes resolved in the UAE?', answer: 'Employment disputes in the UAE mainland are typically first referred to the Ministry of Human Resources and Emiratisation (MOHRE) for mediation. If unresolved, the matter proceeds to the labor courts. Free zone employment disputes are handled by the relevant free zone authority or the civil courts, depending on the jurisdiction. We represent both employers and employees throughout this process.' },
    ],
  };

  return (
    <Layout breadcrumbTitle="Employment & Labor">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
