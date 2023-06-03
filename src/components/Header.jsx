import Nav from "./Nav";
import heading from "../assets/heading.png";
import brightness from "../assets/brightness.png";

function Header() {
  return (
    <header className="min-h-[696px] min-w-[1440px]">
      <Nav />
      <div className="flex justify-center items-center mt-20">
        <div className="w-[472px] h-[294px]">
          <div className="w-[258px] h-[40px] flex justify-center items-center border border-[##722ED1] text-[#722ED1] rounded-full bg-[#F7F1FF]">
            <img src={brightness} alt="" className="pr-2" />
            v3.1 released, Learn more
          </div>
          <div className="mt-7 font-bold text-5xl">Your data with</div>
          <div className=" font-bold text-5xl">real-time analytics</div>
          <div className="mt-4 text-gray-500">
            Harness the potential of Big Data Analytics & Cloud Services and
            become a data-driven organization with Needle tail
          </div>
          <div className="flex mt-4">
            <button className="w-[142px] h-[38px] bg-white rounded-full hover:bg-[#722ED1]  hover:text-white mr-3 text-[#722ED1] ease-in-out transition">
              Start free trial
            </button>
            <button className="w-[142px] h-[38px] bg-white hover:bg-[#722ED1] rounded-full hover:text-white mr-3 text-[#722ED1] ease-in-out transition">
              Learn more
            </button>
          </div>
        </div>
        <div className="">
          <img src={heading} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
