import CaseThree from "@/components/common/CaseThree";
import TeamOne from "@/components/common/TeamOne";
import CtaOne from "@/components/common/CtaOne";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const caseStudies = [
    {
      category: "DIFC / Corporate",
      title: "DIFC Services",
      image: "/assets/img/resource/case-v3-img7.jpg",
      link: "/criminal-case",
    },
    {
      category: "Commercial / Corporate",
      title: "Cross-Border Transactions",
      image: "/assets/img/resource/case-v3-img8.jpg",
      link: "/family-violence",
    },
    {
      category: "Dispute / Arbitration",
      title: "Commercial Arbitration",
      image: "/assets/img/resource/case-v3-img9.jpg",
      link: "/business-law",
    },
  ];

  return (
    <>
      <Layout breadcrumbTitle="Our Legal Team">
        <>
          {/* Team Page Start */}
          <TeamOne
            className="team-one team-one--team"
            sectionTitle="Our Legal Team"
            subTitle="Meet Our Experts"
            teamData={[
              {
                name: "Adv. Bindu S. Chettur",
                position: "Founder & Managing Director",
                image: "/assets/img/team/team-v1-img1.png",
                social: [
                  { url: "https://www.facebook.com/p/Advocate-Bindu-S-Chettur-Associates-100080249942973/", iconClass: "icon-icon-4" },
                  { url: "https://www.instagram.com/advocate_binduschettur/", iconClass: "icon-icon-3" },
                  { url: "https://www.linkedin.com/in/adv-bindu-s-chettur-473b4384/", iconClass: "icon-icon-2" },
                ],
              },
              {
                name: "Adv. Ashwin Chaturvedi",
                position: "Lawyer & Head of Business Strategy",
                image: "/client/Ashwin Professional Photo.jpg",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                ],
              },
              {
                name: "Adv. Amjith M Anandhan",
                position: "Senior Legal Associate",
                image: "/assets/img/team/team-v1-img3.png",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                ],
              },
              {
                name: "Adv. Shaffi Mather",
                position: "Public Policy Analyst",
                image: "/assets/img/team/team-v1-img4.png",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                ],
              },
              {
                name: "Adv. Ashok GV",
                position: "Senior Legal Associate",
                image: "/assets/img/team/team-v1-img5.png",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                ],
              },
              {
                name: "Adv. Jinesh",
                position: "Senior Finance Expert",
                image: "/assets/img/team/team-v1-img6.png",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                ],
              },
            ]}
          />
          {/* Team Page End */}

          {/* CTA One Start */}
          <CtaOne
            ctaTitle="Schedule a consultation today!"
            queryText="Get In Touch"
          />
          {/* CTA One End */}

          {/* Case Studies Start */}
          <CaseThree caseStudies={caseStudies} />
          {/* Case Studies End */}
        </>
      </Layout>
    </>
  );
}
