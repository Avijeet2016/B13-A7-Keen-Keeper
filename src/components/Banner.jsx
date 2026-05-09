
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
      <div className="max-w-[1110px] mx-auto pt-20 text-center ">
        <div>
          <h2 className="text-[#1f2937] font-bold text-5xl mb-4">
            Friends to keep close in your life
          </h2>
          <p className="text-[#64748b] mb-8">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the
            <br /> relationships that matter most.
          </p>
          <div>
            <button className="btn bg-[#244d3f] text-white mb-10 rounded-sm">
              <FaPlus />
              Add a Friend
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex-col items-center bg-[#ffffff] p-8 shadow-sm rounded-lg">
            <h2 className="font-semibold text-2xl text-[#244d3f]">10</h2>
            <p className="text-[#64748b] text-lg">Total Friends</p>
          </div>
          <div className="flex-col items-center bg-[#ffffff] p-8 shadow-sm rounded-lg">
            <h2 className="font-semibold text-2xl text-[#244d3f]">3</h2>
            <p className="text-[#64748b] text-lg">On Track</p>
          </div>
          <div className="flex-col items-center bg-[#ffffff] p-8 shadow-sm rounded-lg">
            <h2 className="font-semibold text-2xl text-[#244d3f]">6</h2>
            <p className="text-[#64748b] text-lg">Need Attention</p>
          </div>
          <div className="flex-col items-center bg-[#ffffff] p-8 shadow-sm rounded-lg">
            <h2 className="font-semibold text-2xl text-[#244d3f]">12</h2>
            <p className="text-[#64748b] text-lg">Interactions This Month</p>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-10" />
      </div>
    );
};

export default Banner;