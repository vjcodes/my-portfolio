/* eslint-disable react/no-unescaped-entities */
import blob from "./../assets/bgBlob.png";

const Banner = () => {
  return (
    <div className="flex h-[70%] w-full border  box-border bg-[#F3F3F3]">
      {/* Name Section */}
      <div className="h-full flex flex-col justify-center mx-auto w-[30%]">
        <h3 className="font-bold text-xl text-gray-20 mb-2">Hello</h3>
        <h1 className="font-bold text-6xl mb-2 tracking-wider">I'm Vinayak</h1>
        <h2 className="text-gray-50 text-4xl mb-2">Software Engineer</h2>
        <h2 className="text-gray-50 text-2xl mb-2">Frontend Developer</h2>
      </div>
      {/* MY IMAGE SECTION */}
      <div className="h-full w-[55%]">
        <img src={blob} alt="blob" className="h-[100%]" />
      </div>
    </div>
  );
};

export default Banner;
