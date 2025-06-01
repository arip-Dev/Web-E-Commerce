import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-white text-black p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/Aboutus">About Us</Link>
        <Link to="/Contactpage">Contact</Link>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="email"
              placeholder="username@site.com"
              className="text-white input shadow-none input-bordered join-item border-none focus:outline-none"
            />
            <button className="btn shadow-none btn-neutral join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer;
