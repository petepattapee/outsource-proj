import Logo from "../assets/Logo.png";
import SocialMediaicons from "../assets/SocialMediaicons.png";
import Copyright from "../assets/Copyright.png";

function Footer() {
  return (
    <footer>
      <div className="flex justify-center min-h-[300px] min-w-[1440px] mt-[12rem] gap-10">
        <div className="flex flex-col">
          <img className="w-[48px] h-[48px]" src={Logo} alt="" />
          <h1 className="w-[209px] text-xs mt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat ut wisi enim ad minim
          </h1>
          <img
            className="w-[76px] h-[16px] mt-3"
            src={SocialMediaicons}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold mt-4">Product</h1>
          <ul className="text-sm">
            <li className="mb-2 mt-2">Connections</li>
            <li className="mb-2">Protocols</li>
            <li className="mb-2">Personas</li>
            <li className="mb-2">Integrations</li>
            <li className="mb-2">Catalog</li>
            <li className="mb-2">Pricing</li>
            <li className="mb-2">Security</li>
            <li className="mb-2">GDPR</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold mt-4">For Developers</h1>
          <ul className="text-sm">
            <li className="mb-2 mt-2">Docs</li>
            <li className="mb-2">API </li>
            <li className="mb-2">Open Source</li>
            <li className="mb-2">Engineering Team</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold mt-4">Company</h1>
          <ul className="text-sm">
            <li className="mb-2 mt-2">Careers</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2">Press</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold mt-4">Support</h1>
          <ul className="text-sm">
            <li className="mb-2 mt-2">Help Center</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Security</li>
            <li className="mb-2">Bulletins</li>
            <li className="mb-2">Documentation</li>
            <li className="mb-2">Partner</li>
            <li className="mb-2">Portal</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold mt-4">Newsletter</h1>
          <input className="mt-2" type="text" placeholder="Email" />
        </div>
      </div>
      <div className="flex items-center justify-center mb-5 gap-2">
        <h1 className="font-bold">Rahul Rao</h1>
        <img src={Copyright} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
