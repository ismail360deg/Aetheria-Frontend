import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  // const today = new Date();
  // const year = today.getFullYear();

  return (
    <footer>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-white text-center">
          <div className="bg-[#1F2937] py-10 flex flex-col gap-2">
            <h1 className="text-xl">CONTACT US</h1>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00 </p>
          </div>
          <div className="bg-[#111827] py-10">
            <h1 className="text-xl">Follow US</h1>
            <p className="my-3">Join us on social media</p>
            <div className="flex justify-center items-center gap-5">
              <FaFacebookF className="w-[25px] h-[25px]" />
              <BsInstagram className="w-[25px] h-[25px]" />
              <BsTwitter className="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
        <p className="bg-[#151515] text-white text-center font-semibold py-2">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
