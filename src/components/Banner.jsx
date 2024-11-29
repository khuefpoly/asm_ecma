const Banner = () => {
  return (
    <div className="relative mb-16 w-full">
      <img
        src="/img/banner.svg"
        alt="Banner"
        className="w-full h-[500px] object-cover"
      />
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-black text-4xl md:text-5xl font-medium">
          Trang chủ
        </h1>
        <p className="text-black text-2xl md:text-3xl mt-20">Home</p>
      </div> */}
    </div>
  );
};

export default Banner;