import {
  DextoolsIcon,
  EtherScanIcon,
  TelegramIcon,
  TwitterIcon,
  UniswapIcon,
} from "./Icons";

const Socials = () => {
  return (
    <div className=" socials w-[100%] mx-auto mt-[20px] p-[10px]  flex justify-around items-center bg-white">
      <a href="" target="_blank">
        {" "}
        <UniswapIcon />
      </a>
      <a href="" target="_blank">
        <TwitterIcon />
      </a>
      <a href="" target="_blank">
        <TelegramIcon />
      </a>
      <a href="" target="_blank">
        <DextoolsIcon />
      </a>
      <a href="" target="_blank">
        <EtherScanIcon />
      </a>
    </div>
  );
};

export default Socials;
