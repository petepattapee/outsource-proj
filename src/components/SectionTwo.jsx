import sectwoicon from "../assets/sectwoicon.png";
import usb from "../assets/usb.png";
function SectionTwo() {
  return (
      <div className="flex justify-center items-center mt-20 gap-[5rem]">
        <div>
          <img className="w-[400px] h-[400px]" src={sectwoicon} alt="" />
        </div>
        <div className="w-[472px] h-[294px]">
          <div className="w-[224px] h-[40px] flex justify-center items-center text-sm border border-[##722ED1] text-[#722ED1] rounded-full bg-[#F7F1FF]">
            <img src={usb} alt="" className="pr-2" />
            For Product Teams
          </div>
          <div className="mt-7 font-bold text-3xl">
            Launch with the best stack
          </div>
          <div className="mt-4 text-gray-500">
            A centralized platform that integrates zillions of data sources
            using Big Data ELT (Extract, Load & Transform) that leaves no data
            behind
          </div>
        </div>
      </div>
  );
}

export default SectionTwo;
