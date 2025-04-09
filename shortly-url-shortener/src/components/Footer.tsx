import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <>
      <footer className="flex bg-[#232127] py-10 lg:py-20 tracking-wide">
        <div className="max-width flex flex-col md:flex-row justify-between gap-10 mx-auto px-4 md:px-0 text-center md:text-left md:gap-10 lg:gap-20">
          <div>
            <h1 className="text-white font-bold text-center text-3xl md:text-5xl lg:mr-[25rem]">
              Shortly
            </h1>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Analytics
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Support
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-[#2acfcf] cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex items-center">
              <li>
                <div className="w-6 h-6 cursor-pointer group">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-full h-full group-hover:hidden"
                  />
                </div>
              </li>
              <li className="ml-4">
                <div className="w-6 h-6 cursor-pointer group">
                  <img
                    src={twitter}
                    alt="Twitter"
                    className="w-full h-full group-hover:hidden"
                  />
                </div>
              </li>
              <li className="mx-5">
                <div className="w-6 h-6 cursor-pointer group">
                  <img
                    src={pinterest}
                    alt="Pinterest"
                    className="w-full h-full group-hover:hidden"
                  />
                </div>
              </li>
              <li>
                <div className="w-6 h-6 cursor-pointer group">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-full h-full group-hover:hidden"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
