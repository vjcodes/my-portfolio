import chatSvg from "./../assets/chat.svg";
import { HiMailOpen } from "react-icons/hi";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaTwitter,
} from "react-icons/fa";
import {
  CONTACT_SECTION_CONSTANTS,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "../utils/constants";
import { MessageForm } from "./MessageForm";
import { handleNavigateToNewTab } from "../utils/utilFunctions";

const handleMailClick = () => {
  window.location = `mailto:${CONTACT_SECTION_CONSTANTS.MY_EMAIL}`;
};

const socialAccountsClassName =
  "h-8 w-8 cursor-pointer transition duration-500 hover:opacity-50";

const contacts = [
  {
    id: 1,
    title: "MAIL ME",
    description: CONTACT_SECTION_CONSTANTS.MY_EMAIL,
    icon: (
      <HiMailOpen className="h-[2em] w-[2rem] text-[#fac014]" color="#FACC14" />
    ),
    onClick: () => handleMailClick(),
  },
  {
    id: 2,
    title: "CALL ME",
    icon: (
      <FaPhoneSquareAlt
        className="h-[2em] w-[2rem] text-[#fac014]"
        color="#FACC14"
      />
    ),
    description: CONTACT_SECTION_CONSTANTS.MY_CONTACT_NUMBER,
  },
];

const ContactSection = () => {
  return (
    <div id="contact" className="w-full p-2 py-12 box-border">
      <div className="m-auto w-full text-center py-4 text-5xl font-[1000] tracking-wider mb-6">
        Get In <span className="text-[#ee8738]">Touch</span>
      </div>

      <div className="w-full sm:flex-row flex flex-col items-center justify-center p-8 sm:p-10">

        {/* FIRST SECTION */}
        <div className="w-full sm:w-3/12 flex flex-col">
          <div className="p-2">
            <div className="font-bold text-xl mb-4 tracking-wide text-[#ee5638]">
              {CONTACT_SECTION_CONSTANTS.SALUTATION_HEADING}
            </div>
            {CONTACT_SECTION_CONSTANTS.SALUTATION_TEXT_ONE}
            <p className="mt-2">
              {CONTACT_SECTION_CONSTANTS.SALUTATION_TEXT_TWO}
            </p>
          </div>
          <div className="flex flex-col mt-4 w-fit">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => contact.onClick()}
                className="flex items-center gap-4 my-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
              >
                {contact.icon}
                <div>
                  <h2 className="text-sm text-gray-500 font-bold tracking-wide">
                    {contact.title}
                  </h2>
                  <h3 className="tracking-wider">{contact.description}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* SOCIALS SECTION */}
          <div className="flex gap-4 p-2">
            <FaGithub
              className={socialAccountsClassName}
              onClick={() => handleNavigateToNewTab(GITHUB_URL)}
            />
            <FaLinkedin
              className={socialAccountsClassName}
              onClick={() => handleNavigateToNewTab(LINKEDIN_URL)}
            />
            <FaTwitter
              className={socialAccountsClassName}
              onClick={() => handleNavigateToNewTab(TWITTER_URL)}
            />
            <FaInstagram
              className={socialAccountsClassName}
              onClick={() => handleNavigateToNewTab(INSTAGRAM_URL)}
            />
          </div>
        </div>

        {/* MESSAGE FORM */}
        <div className="w-full mt-4 sm:mt-0 sm:w-6/12 p-4">
          <MessageForm />
        </div>

        {/* SIDE SECTION */}
        <div className="w-full mt-4 sm:mt-0 sm:w-3/12 sm:mb-0 mb-4 flex items-center">
          <img src={chatSvg} alt="chat" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
