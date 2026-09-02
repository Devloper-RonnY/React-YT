import { MoveRight } from "lucide-react";

const RightCardContent = ({person}) => {
  return (
   <div className="absolute flex justify-between flex-col top-0 left-0 h-full w-full p-6">
        <h2 className="bg-white rounded-full text-xl font-bold h-7 w-7 flex justify-center items-center">{person.id}</h2>
        <div>
          <p className="text-white mb-2 shadow-xl">
            {person.description}
          </p>
          <div className="flex items-center justify-between">
            <button className="bg-blue-700 px-4 py-1 text-white font-medium rounded-full">{person.feedback}</button>
            <button className="bg-blue-700 px-2 py-1 text-white font-medium rounded-full">
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent