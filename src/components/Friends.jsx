import { use } from "react";

const dataPromise = fetch('/data.json').then(res => res.json());

const Friends = () => {
    const data = use(dataPromise);
    console.log(data);

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
    }

    return (
      <div className="max-w-[1110px] mx-auto mb-20">
        <h2 className="text-[#1f2937] font-semibold text-2xl mb-4">
          Your Friends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#ffffff] rounded-lg shadow-sm space-y-2"
            >
              <img
                src={item.picture}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-xs text-[#64748b]">
                {item.days_since_contact}d ago
              </p>
              <div className="flex justify-center flex-wrap gap-2">
                {item.tags.map((tag, ind) => (
                  <button
                    key={ind}
                    className="bg-[#cbfadb] text-[#244d3f] rounded-full text-xs px-3 py-1 "
                  >
                    {tag.toUpperCase()}
                  </button>
                ))}
              </div>
              <div>
                <button
                  className={`text-xs font-semibold rounded-full px-3 py-1 text-white ${getStatusClass(item.status)}`}
                >
                  {item.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Friends;