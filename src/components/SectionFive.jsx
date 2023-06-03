import Formimg from "../assets/Formimg.png";
import Trustedby from "../assets/Trustedby.png";
import Clientlogotwo from "../assets/Clientlogotwo.png";

function SectionFive() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-[472px] h-[294px]">
        <div className="mt-7 font-bold text-3xl w-[431px] h-[120px]">
          See why the world’s best companies use Qubly to become truly
          data-driven.
        </div>
        <img className="w-[424px] h-[24px] mt-3" src={Trustedby} alt="" />
        <img className="w-[301] h-[156] mt-10" src={Clientlogotwo} alt="" />
      </div>
      <div>
        <img src={Formimg} alt="" />
      </div>
    </div>
  );
}

export default SectionFive;
