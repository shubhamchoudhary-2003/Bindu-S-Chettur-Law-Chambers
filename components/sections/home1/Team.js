import TeamOne from "@/components/common/TeamOne"
export default function Team() {

  return (
      <div>
          <TeamOne
            className="team-one"
            sectionTitle="Our Legal Team"
            subTitle="Meet Our Experts"
            teamData={[
                {
                name: 'Adv. Bindu S. Chettur',
                position: 'Founder & Managing Director',
                image: '/assets/img/team/team-v1-img1.png',
                social: [
                    { url: 'https://www.facebook.com/p/Advocate-Bindu-S-Chettur-Associates-100080249942973/', iconClass: 'icon-icon-4' },
                    { url: 'https://www.instagram.com/advocate_binduschettur/', iconClass: 'icon-icon-3' },
                    { url: 'https://www.linkedin.com/in/adv-bindu-s-chettur-473b4384/', iconClass: 'icon-icon-2' },
                ]
                },
                {
                name: 'Ashwin Chaturvedi',
                position: 'Lawyer & Head of Business Strategy',
                image: '/assets/img/team/team-v1-img2.png',
                social: [
                    { url: '#', iconClass: 'icon-icon-4' },
                    { url: '#', iconClass: 'icon-icon-3' },
                    { url: '#', iconClass: 'icon-icon-2' },
                ]
                },
                {
                name: 'Adv. Amjith M Anandhan',
                position: 'Senior Legal Associate',
                image: '/assets/img/team/team-v1-img3.png',
                social: [
                    { url: '#', iconClass: 'icon-icon-4' },
                    { url: '#', iconClass: 'icon-icon-3' },
                    { url: '#', iconClass: 'icon-icon-2' },
                ]
                }
            ]}
        />
      </div>
  );
}
