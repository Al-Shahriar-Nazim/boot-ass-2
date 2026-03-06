import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav className="">
          <h6 className="footer-title">CS — Ticket System</h6>
          <a className="link link-hover w-[200px]">
            “CS — Ticket System” means a Customer Support (CS) based ticket
            management system, where a separate ticket is created for each
            customer issue and tracked until it is resolved. This system is used
            to make customer service more organized and efficient.
          </a>
          {/* <p className="text-xs">
            “CS — Ticket System” means a Customer Support (CS) based ticket
            management system, where a separate ticket is created for each
            customer issue and tracked until it is resolved. This system is used
            to make customer service more organized and efficient.
          </p> */}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product & services</a>
          <a className="link link-hover">Customer servies</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms and condition</a>
          <a className="link link-hover">Join us</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr />
<footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 text-center">
        <aside>
          <p className=""> © 2025 CS — Ticket System. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
