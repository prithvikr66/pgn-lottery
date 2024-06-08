import { useRecoilState } from "recoil";
import { walletAddress } from "../../atoms/WalletAddress";
import { ethers } from "ethers";

const WalletConnect = () => {
  const [wallet, setWallet] = useRecoilState(walletAddress);

  const handleWalletConnect = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
      } else {
        console.error("Ethereum provider not found.");
      }
    } catch (error) {
      console.error("Error in web3Handler:", error);
    }
  };

  return (
    <button
      className={` ${
        wallet ? "bg-[#ffffff]" : "bg-[#3D3D3D]"
      }  text-[#5DF7A4] p-4 rounded-[20px] `}
      onClick={handleWalletConnect}
    >
      {wallet ? (
        <div className=" flex items-center justify-center gap-2">
          <div className=" rounded-full bg-[#5DF7A4] h-[10px] w-[10px]" />
          <p className=" uppercase text-[#3A80FE]">
            {wallet.slice(0, 3)}...
            {wallet.slice(wallet.length - 4, wallet.length)}
          </p>
        </div>
      ) : (
        <p className=" uppercase">connect wallet</p>
      )}
    </button>
  );
};

export default WalletConnect;
