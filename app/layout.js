import "react-modal-video/css/modal-video.css";
import "../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { DM_Sans, Marcellus } from "@/lib/font";

export const metadata = {
  title: "Bindu S. Chettur Law Chambers | Cross Border Legal Expertise",
  description: "Advocate Bindu S. Chettur - Founder & MD of Chanakyatse Consultancy. Over 32 years of legal experience across Asia-Pacific and Middle East. Senior Associate at Mohamed Salman Advocate & Legal Consultants, Dubai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${DM_Sans.variable} ${Marcellus.variable}`}>
      <body>{children}</body>
    </html>
  );
}
