import { ImFacebook2, ImTwitter, ImPinterest2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="bg-darker-blue py-16 text-center text-white md:text-left">
      <div className="footer w-11/12 mx-auto flex flex-col items-center gap-10 md:w-3/4 md:flex-row md:items-start">
        <div className="logo">
          <img src="/images/logo.svg" className="brightness-0 invert" alt="" />
        </div>
        <div className="footer-links flex flex-col gap-10 md:flex-row md:ml-auto md:gap-16">
          <div className="features">
            <h3 className="footer-feature-title">Features</h3>
            <ul className="footer-features">
              <li>Link shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="resources">
            <h3 className="footer-feature-title">Resources</h3>
            <ul className="footer-features">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="features">
            <h3 className="footer-feature-title">Company</h3>
            <ul className="footer-features">
              <li>About</li>
              <li>Our Team</li>
              <li>Carrers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="socials flex items-center gap-6 text-2xl md:ml-16">
          <ImFacebook2 />
          <ImTwitter />
          <ImPinterest2 />
          <BsInstagram />
        </div>
      </div>
    </footer>
  );
}
