import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "./CustomButton";
import { GrSend } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MessageForm = () => {
  const form = useRef();
  const [buttonText, setButtontext] = useState("SEND MESSAGE");
  const [submitDisabled, setSubmitDisbaled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtontext("SENDING...");
    setSubmitDisbaled(true);

    emailjs
      .sendForm(
        "service_2fw76sr",
        "template_k0pcby5",
        form.current,
        "yNJ6_QrH3x258ZkGx"
      )
      .then(
        (result) => {
          setButtontext("SEND MESSAGE");
          setSubmitDisbaled(false);
          console.log(result.text);
          toast.success("Message Sent !", {
            position: "top-right",
          });
        },
        (error) => {
          toast.error("Failed to send message !", {
            position: "top-right",
          });
          setButtontext("SEND MESSAGE");
          setSubmitDisbaled(false);
          console.log(error.text);
        }
      );
  };

  return (
    <form className="flex flex-wrap" ref={form} onSubmit={sendEmail}>
      <ToastContainer />
      <div className="w-full flex justify-between mb-4">
        <input
          type="text"
          className="w-[48%] rounded-lg h-10 p-2 bg-gray-100 shadow-md"
          placeholder="YOUR NAME"
          name="from_name"
        />
        <input
          type="email"
          className="w-[48%] rounded-lg h-10 p-2 bg-gray-100 shadow-md"
          placeholder="YOUR EMAIL"
          name="from_email"
        />
      </div>

      <textarea
        name="subject"
        className="w-full resize-none rounded-lg h-10 p-2 mb-4 bg-gray-100 shadow-md"
        placeholder="YOUR SUBJECT"
      />
      <textarea
        name="message"
        className="w-full resize-none rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl h-40 p-2 bg-gray-100 shadow-md"
        placeholder="YOUR MESSAGE"
        
      />

      <CustomButton
        type="submit"
        className={`${
          submitDisabled && "pointer-events-none cursor-not-allowed"
        } `}
        icon={<GrSend color="white" />}
        text={buttonText}
        handleClick={sendEmail}
      />
    </form>
  );
};
