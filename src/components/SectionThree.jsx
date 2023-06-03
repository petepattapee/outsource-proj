import secthreeicon from "../assets/secthreeicon.png";
import engineericon from "../assets/engineericon.png";
function SectionThree() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-[472px] h-[294px]">
        <div className="w-[224px] h-[40px] flex justify-center items-center text-sm border border-[##722ED1] text-[#722ED1] rounded-full bg-[#F7F1FF]">
          <img src={engineericon} alt="" className="pr-2" />
          For Engineering Teams
        </div>
        <div className="mt-7 font-bold text-3xl">
          Data-driven pipelines in minutes
        </div>
        <div className="mt-4 text-gray-500">
          Maintenance-free data pipelines with quick set-up and straight-forward
          deployments that are powered by a modern & scalable platform.
        </div>
      </div>
      <div>
        <img className="w-[684px] h-[414px]" src={secthreeicon} alt="" />
      </div>
    </div>
  );
}
export default SectionThree;
