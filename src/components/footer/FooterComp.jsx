import React from "react";
import { Button, Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../../assets/whitelogo.png";

function FooterComp() {
  return (
    <div className="w-full bg-[#1A1A2E] py-6">
      <Footer container className="w-full bg-[#1A1A2E] text-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img src={logo} alt="logo" className="h-12" />
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
              <Button color="light" className="focus:ring-0 bg-[#FFD700] text-black hover:bg-[#FFC107]" size="xs">
                Schedule 1-on-1 Call Now
              </Button>
              <p className="text-xs mt-2 text-gray-400">Speak with our Learning Advisor</p>
            </div>
          </div>
          <Footer.Divider className="my-6 border-gray-600" />
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Footer.Title title="Programs" className="text-white" />
              <Footer.LinkGroup col>
                {[
                  "Data Science & AI",
                  "Product Management",
                  "Business Analytics",
                  "Digital Transformation",
                  "Business Management",
                  "Project Management",
                  "Strategy & Leadership",
                  "Senior Management",
                  "Fintech",
                ].map((program, index) => (
                  <Footer.Link
                    key={index}
                    href="#"
                    className="flex justify-between items-center text-gray-300 hover:text-[#FFD700]"
                  >
                    {program} <span className="text-xl font-bold">+</span>
                  </Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact Us" className="text-white" />
              <div className="text-xs flex flex-col gap-2 text-gray-400">
                {[
                  "Email us (For Data Science Queries): admissions@accredian.com",
                  "Email us (For Product Management Queries): pm@accredian.com",
                  "Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)",
                  "Product Management Admission Helpline: +91 9625811095",
                  "Enrolled Student Helpline: +91 7969322507",
                  "Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015",
                ].map((contact, index) => (
                  <span key={index}>{contact}</span>
                ))}
              </div>
              <h2 className="mt-4 font-semibold text-white">Follow Us</h2>
              <div className="flex gap-4 mt-2">
                {[BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble].map((Icon, index) => (
                  <Footer.Icon key={index} href="#" icon={Icon} className="text-gray-300 hover:text-[#FFD700]" />
                ))}
              </div>
            </div>
            <div>
              <Footer.Title title="Accredian" className="text-white" />
              <Footer.LinkGroup col>
                {[
                  "About",
                  "Career",
                  "Blog",
                  "Admission Policy",
                  "Referral Policy",
                  "Privacy Policy",
                  "Terms Of Service",
                  "Master FAQs",
                ].map((link, index) => (
                  <Footer.Link key={index} href="#" className="text-gray-300 hover:text-[#FFD700]">
                    {link}
                  </Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full flex justify-center mt-6">
            <Footer.Copyright
              href="/"
              by="Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved™"
              year={new Date().getFullYear()}
              className="text-gray-400"
            />
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default FooterComp;
