import { MoveRight } from "lucide-react";

const RightCard = () => {
  return (
    <div className="h-full overflow-hidden relative w-50 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
        alt="working_professional"
      />
      <div className="absolute flex justify-between flex-col top-0 left-0 h-full w-full p-6">
        <h2 className="bg-white rounded-full text-xl font-bold h-7 w-7 flex justify-center items-center">1</h2>
        <div>
          <p className="text-white mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit
            exercitationem doloribus sunt ex pariatur.
          </p>
          <div className="flex items-center justify-between">
            <button className="bg-blue-700 px-4 py-1 text-white font-medium rounded-full">Satisfied</button>
            <button className="bg-blue-700 px-2 py-1 text-white font-medium rounded-full">
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
