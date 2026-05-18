import { useLoaderData, useParams } from 'react-router';
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const FriendsDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { id } = useParams();
    console.log(id);
    const user = data.find(item => item.id === parseInt(id))
    console.log(user);
    const {name, picture, days_since_contact, status, tags, bio, goal, next_due_date} = user;

    

    const formattedDate = new Date(next_due_date).toLocaleDateString("en-US", {
        month: 'short', 
        day: "numeric",
        year: "numeric",
    });

    // "id": 7,
    // "name": "John Doe",
    // "picture": "https://randomuser.me/api/portraits/men/11.jpg",
    // "email": "john.doe@example.com",
    // "days_since_contact": 12,
    // "status": "On-Track",
    // "tags": ["college", "close friend"],
    // "bio": "Met in university. Love hiking together.",
    // "goal": 14,
    // "next_due_date": "2025-07-20"

    const getStatusClass = (status) => {
      switch (status) {
        case "Overdue":
          return "bg-[#ef4444]";
        case "Almost Due":
          return "bg-[#efad44]";
        case "On-Track":
          return "bg-[#244d3f]";
        default:
          return "bg-gray-100";
      }
    };

    return (
      <div className="max-w-[1110px] mx-auto grid grid-cols-12 gap-6 py-20">
        <div className="col-span-4">
          <div className="bg-white text-center space-y-3 py-6 rounded-lg mb-3">
            <img
              src={picture}
              alt={name}
              className="w-20 h-20 rounded-full mx-auto "
            />
            <h2 className="font-semibold text-xl text-[#1f2937]">{name}</h2>
            <button
              className={`text-xs font-semibold rounded-full px-3 py-1 text-white ${getStatusClass(status)}`}
            >
              {status}
            </button>
            <div className="flex justify-center flex-wrap gap-2">
              {tags.map((tag, ind) => (
                <button
                  key={ind}
                  className="bg-[#cbfadb] text-[#244d3f] rounded-full text-xs px-3 py-1 "
                >
                  {tag.toUpperCase()}
                </button>
              ))}
            </div>
            <em className="text-[#64748b]">"{bio}"</em>
            <p className="text-[#64748b] text-sm">Preferred: email</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center bg-white rounded-lg">
              <HiOutlineBellSnooze /> &nbsp;
              <p className="font-medium py-2 ">Snooze 2 weeks</p>
            </div>
            <div className="flex justify-center items-center bg-white rounded-lg">
              <FiArchive /> &nbsp;
              <p className="font-medium py-2 rounded-lg">Archive</p>
            </div>
            <div className="flex justify-center items-center bg-white text-[#EF4444] rounded-lg">
              <FaRegTrashAlt className="text-[#EF4444]" /> &nbsp;
              <p className="font-medium py-2 rounded-lg">Delete</p>
            </div>
          </div>
        </div>
        <div className="col-span-8 space-y-4">
          <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg bg-white py-8 px-4 text-center">
              <h2 className="font-semibold text-3xl text-[#244d3f]">
                {days_since_contact}
              </h2>
              <p className="text-lg text-[#64748b] ">Days Since Contact</p>
            </div>
            <div className="rounded-lg bg-white py-8 px-4 text-center">
              <h2 className="font-semibold text-3xl text-[#244d3f]">{goal}</h2>
              <p className="text-lg text-[#64748b]">Goal (Days)</p>
            </div>
            <div className="rounded-lg bg-white py-8 px-4 text-center">
              <h2 className="font-semibold text-3xl text-[#244d3f]">
                {formattedDate}
              </h2>
              <p className="text-lg text-[#64748b]">Next Due</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-[#244d3f] text-xl">
                Relationship Goal
              </h2>
              <button className="btn btn-sm">Edit</button>
            </div>
            <h2>
              Connect every <span className="font-bold">30 days</span>
            </h2>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-[#244d3f] text-xl font-medium mb-4">
              Quick Check-In
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-1 p-4 bg-[#F8FAFC] shadow rounded-lg">
                <MdOutlineWifiCalling3 size={28} />
                Call
              </button>
              <button className="flex flex-col items-center gap-1 p-4 bg-[#F8FAFC] shadow rounded-lg">
                <MdOutlineTextsms size={28} className="text-3xl text-black" />
                Text
              </button>
              <button className="flex flex-col items-center gap-1 p-4 bg-[#F8FAFC] shadow rounded-lg">
                <IoVideocamOutline size={28} className="text-3xl text-black" />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FriendsDetails;