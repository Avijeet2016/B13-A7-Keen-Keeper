
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
      <div className="pt-20 bg-[#244d3f]">
        <div className="max-w-[1110px] mx-auto">
          <div className="text-white text-center space-y-4 mb-10">
            <h1 className="text-6xl font-bold">Keen Keeper</h1>
            <p>
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <div>
              <h2 className="mb-4">Social Links</h2>
              <div className="flex justify-center items-center gap-3">
                <div className="p-2 rounded-full w-10 h-10 bg-white flex justify-center items-center">
                  <AiFillInstagram className="text-black text-xl" />
                </div>
                <div className="p-2 rounded-full w-10 h-10 bg-white flex justify-center items-center">
                  <FaFacebookSquare className="text-black text-xl" />
                </div>
                <div className="p-2 rounded-full w-10 h-10 bg-white flex justify-center items-center">
                  <FaXTwitter className="text-black text-xl" />
                </div>
              </div>
            </div>
          </div>{" "}
          <hr className="outline-0 text-gray-500" />
          <div className="flex flex-col md:flex-row justify-between items-center py-7 text-[#fafafa]">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div>
              <ul className="flex justify-center items-center gap-5">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;