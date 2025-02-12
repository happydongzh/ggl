import { Outlet } from "react-router-dom";
import NewFooter from "./NewFooter";
import { IS_MOBILE } from "@/constants";
import "./index.less";
import { useState } from "react";
import { useRef } from "react";
const HomeLayout = () => {

  return (
    <div className="bg-black  text-white max-w-[1920px]  mx-auto">
      {/* {!IS_MOBILE && <NewNavbar></NewNavbar>} */}
      <div
        // style={{ minHeight: !IS_MOBILE ? "calc(100vh - 210.5px)" : "1600px" }}
        className={`${!IS_MOBILE ? "pb-20  overflow-x-hidden" : "pb-[50px]"} `}
      >
        <Outlet />
      </div>
      <NewFooter></NewFooter>
      <ChatButton></ChatButton>
    </div>
  );
};

function ChatButton() {
  const dialog = useRef(null);
  const [showMsg, setShowMsg] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    msgContent: "",
  });

  const chatBtnClick = () => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(message);
    setShowMsg(true);
  };

  return <>
    <button onClick={chatBtnClick} className="fixed bottom-5 right-5 w-16 h-16 bg-gradient-to-tr from-green-300 to-blue-600 rounded-full flex justify-center items-center hover:bg-gradient-to-bl transition-all duration-300 ease-in-out">
      <span className="text-3xl text-white">
        💬
      </span>
    </button>
    <dialog className="chat" ref={dialog}>
      <h3 className="text-2xl py-8 px-3 bg-gray-900 text-gray-300 ">
        GADGETS LAB
        <span className="float-right cursor-pointer" onClick={() => dialog.current.close()}>
          X
        </span>
      </h3>
      <div style={{ transform: "translateY(-2rem)" }} className="p-[2rem] pt-[1rem]">
        <p className="p-4 text-gray-300 rounded-4 bg-gray-600">Hi! Let us know how we can help and we’ll respond shortly.</p>
        <svg style={{ transform: "translateY(-2px)" }} fill="#4b5563" data-ux="Element" width="33px" height="16px" viewBox="0 0 33 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"></path></svg>
      </div>

      {
        showMsg && <div className="flex flex-col justify-center items-center gap-y-[1rem]">
          <div className="text-3xl text-green-400">✓</div>
          <p className="px-10 text-center bg-clip-text text-transparent bg-gradient-to-l from-green-300 to-blue-600">
            Thanks for the message. We'll get back to you as soon as we can.
          </p>
          <button onClick={() => {
            dialog.current.close();
            setShowMsg(false)
          }} className="btn mt-[2rem]">Close</button>
        </div>
      }
      {
        !showMsg && <form style={{ transform: "translateY(-2rem)" }} className="flex flex-col gap-[1rem] px-[1rem] " action="" method="post" onSubmit={onFormSubmit}>
          <input type="text" placeholder="Name" className="input" required />
          <input type="email" placeholder="Email" className="input" required />
          <textarea
            required
            placeholder="Message"
            className="resize-none">
          </textarea>
          <button type="submit" className="btn mt-4">Send</button>
        </form>
      }
    </dialog>
  </>;
}
export default HomeLayout;
