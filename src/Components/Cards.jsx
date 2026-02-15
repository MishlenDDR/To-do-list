import SelectedCard from "./SelectedCard.jsx";

const Cards = ({
  selectedCard,
  allCards,
  currentMonth,
  openModyle,
  setSelectedCard,
  buttonSave,
  buttonDelite,
  readyCards,
  title,
  setTitle,
}) => {
  return (
    <div
      className={`flex mt-[18px] gap-[8px] ${currentMonth > 28 ? "grid grid-cols-8" : "grid grid-cols-7"}`}
    >
      {allCards.map((card) => (
        <div
          key={card.id}
          onClick={() => openModyle(card)}
          className={`cards w-[130px] h-[150px] bg-cover bg-center bg-[#c9b6d2] rounded-[5px]
        relative gap-[2px]  transition-transform duration-600 ease-in-out ${card.itPast ? "opacity-60" : ""} ${card.itsToday ? "shadow-[0_8px_10px_-4px_rgba(0,0,0,0.8)]" : ""} ${selectedCard && selectedCard.id === card.id ? "z-[101] relative pointer-events-none" : "hover:scale-110 hover:shadow-[0_0_20px_rgba(166,54,179,0.3)] hover:z-[52]"}`}
        >
          <div
            className={`
                          main-font-black 
                          flex justify-center items-center
                          absolute rotate-45 top-[30%] left-[18%]
                          ${card.done ? "text-green-700 text-[35px]" : ""}
                          `}
          >
            {card.done ? "Done" : ""}
          </div>

          <SelectedCard
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            buttonSave={buttonSave}
            card={card}
            buttonDelite={buttonDelite}
            readyCards={readyCards}
            title={title}
            setTitle={setTitle}
          />

          <div className="w-[130px] h-[20px] bg-[#f1642f] rounded-tr-[5px] rounded-tl-[5px] flex justify-center items-center text-#0b2037 main-font-black">
            {card.time}
          </div>
          {card.title ? (
            <div className="w-[120px] h-auto min-h-[50px] bg-[#f3f1e8] shadow-[0_8px_10px_-4px_rgba(0,0,0,0.8)] rounded-[10px] text-#0b2037 mt-[10px] ml-[5px] pl-[5px] text-[12px] main-font-black ">
              <div className="ml-[3px] cursor-hover whitespace-pre-wrap break-words ">
                {card.title}
              </div>
            </div>
          ) : (
            <div
              className="
                          main-font-black 
                          flex justify-center items-center 
                          mt-[20px]
                          "
            >
              No plans
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Cards;
