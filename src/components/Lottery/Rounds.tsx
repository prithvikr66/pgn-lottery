const Rounds = () => {
  const progress = 82;
  return (
    <div className=" text-white uppercase text-[24px]">
      <div className=" flex justify-between">
        <p>Round 16</p>
        <p>82/100 Tickets</p>
      </div>
      <div className=" w-full h-[30px] bg-white rounded-[200px] mt-3 shadow-xl">
        <div
          className={`bg-[#5DF7A4] rounded-[200px]  h-[100%] `}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Rounds;
