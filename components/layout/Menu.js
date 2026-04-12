import Link from "next/link";

export default function Menu() {
    return (
        <ul className="main-menu__list">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li className="dropdown menu-item-has-children">
                <Link href="#">Services</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/service">All Services</Link>
                    </li>
                    <li>
                        <Link href="/criminal-case">DIFC Services</Link>
                    </li>
                    <li>
                        <Link href="/family-violence">Commercial & Corporate</Link>
                    </li>
                    <li>
                        <Link href="/business-law">Arbitration</Link>
                    </li>
                    <li>
                        <Link href="/health-care">Employment & Labor</Link>
                    </li>
                    <li>
                        <Link href="/insurance-law">Drafting & Agreements</Link>
                    </li>
                    <li>
                        <Link href="/real-estate">Legal Advisory</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown menu-item-has-children">
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/case">Press & Media</Link>
                    </li>
                    <li>
                        <Link href="/team">Our Team</Link>
                    </li>
                    <li>
                        <Link href="/faq">FAQ</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}
