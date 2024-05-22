export const Payment3 = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex justify-between w-full md:text-[23px] text-[14px] font-semibold text-[#bdbdbd] pt-[50px]"></div>
      <div className="w-full h-[350px] bg-white rounded-xl shadow-lg ">
        <div className="bg-blue-500 w-full h-[70px] flex px-[64px] py-8  items-center justify-between rounded-t-xl">
          <p className="text-white text-[19px] font-[600] ">Item Name</p>
          <p className="text-white text-[19px] font-[600] ">$ Price</p>
        </div>
        <div className="bg-white w-full  flex justify-center flex-col items-center">
          <div className="w-full h-[70px] flex p-8  items-center justify-between mt-9 font-[600] text-[18px] ">
            <p>Data science and usability</p>
            <p>50,000.00</p>
          </div>
          <div className="w-full h-[70px] flex p-8  items-center justify-between  font-[600] text-[18px]">
            <p>Shipping</p>
            <p>0.00</p>
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[96%] h-[1px] bg-black  " />
          </div>
          <div className="w-[90%] h-[30px] border border-black rounded-md flex px-8 py-7 mt-4  items-center justify-between  font-[600] text-[18px] ">
            <p>Total</p>
            <p>50,000.00</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-11 space-y-6 md:space-y-0 mt-8 ">
        <button
          className="px-[90px] py-3 text-white text-[19px] rounded-md "
          style={{
            backgroundColor: "rgb(242,191,76)",
            background: `linear-gradient(180deg, rgba(242,191,76,1) 0%, rgba(242,161,75,1) 58%, rgba(242,161,75,1) 100%)`,
          }}
          type="submit"
        >
          Pay
        </button>
        <button className="text-[#4e598c] text-[19px] font-semibold md:border-none border-[2px] border-[#4e598c] py-3 rounded-md">
          Cancel Payment
        </button>
      </div>
    </div>
  );
};
