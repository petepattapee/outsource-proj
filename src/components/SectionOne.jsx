//Image
import eye from "../assets/Icon-awesome-eye.png";
import EllipseBlue from "../assets/Ellipse-blue.png";
import EllipseRed from "../assets/Ellipse-red.png";
import EllipseGreen from "../assets/Ellipse-green.png";


function SectionOne() {
  return (
    <div className="flex justify-center items-center mt-[130px]">
      <section className="flex flex-col justify-center items-center w-[963px] h-[368px]">
        <div className="w-[157px] h-[40px] flex justify-center items-center border border-[##722ED1] text-[#722ED1] rounded-full bg-[#F7F1FF] text-sm ">
          <img src={eye} alt="" className="pr-2" />
          Why Qubly
        </div>
        <h1 className="mt-5 text-3xl font-bold">
          Get actionable insights from Big Data in 3 steps
        </h1>
        <h3 className="text-center  px-[190px] mt-5 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </h3>
        <div className="flex flex-row mt-7 gap-8">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[40px] h-[40px]" src={EllipseBlue} alt="" />
            <h2 className="text-base font-bold mt-3">
              Valuable business insights
            </h2>
            <h3 className="w-[305px] h-[72px] mt-3 text-gray-500 text-center">
              Collect processed & cleansed data that is ready to be analyzed to
              gather valuable business insights.
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[40px] h-[40px]" src={EllipseRed} alt="" />
            <h2 className="text-base font-bold mt-3">Powerful Algorithms</h2>
            <h3 className="w-[305px] h-[72px] mt-3 text-gray-500 text-center">
              With the help of powerful algorithms, quality rules & techniques,
              obtain simplified & enriched data.
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[40px] h-[40px]" src={EllipseGreen} alt="" />
            <h2 className="text-base font-bold mt-3">Data in real-time</h2>
            <h3 className="w-[305px] h-[72px] mt-3 text-gray-500 text-center">
              Collect data in real-time from multiple channels and move it into
              a data lake, in its original format.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionOne;
