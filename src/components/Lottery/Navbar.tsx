import WalletConnect from "./WalletConnect";

const Navbar = () => {
  return (
    <div className="flex uppercase justify-end text-[20px] text-zinc-50 z-10  ">
      <div className=" flex w-1/2  justify-between items-center mt-10">
        <p>Lottery</p>
        <p>How to play</p>
        <p>Get $pigeon</p>
        <WalletConnect />
      </div>
    </div>
  );
};

export default Navbar;
