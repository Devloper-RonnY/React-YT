import RightCardContent from "./RightCardContent";

const RightCard = ({person}) => {
  return (
    <div className="h-full flex overflow-x-auto shrink-0 relative w-50 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={person.image}
        alt="working_professional"
      />
      <RightCardContent person={person}/>
    </div>
  );
};

export default RightCard;
