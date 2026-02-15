const SelectedCard = ({
  selectedCard,
  setSelectedCard,
  buttonSave,
  card,
  buttonDelite,
  readyCards,
  title,
  setTitle,
}) => {
  return (
    <div>
      {selectedCard && selectedCard.id === card.id && (
        <div
          className={`${card.id === 7 || card.id === 14 || card.id === 21 || card.id === 28 ? "  absolute z-[100] pointer-events-auto main-font-black bottom-[1%] right-[100%]" : "absolute z-[100] pointer-events-auto main-font-black bottom-[1%] left-[100%]"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="w-[200px] h-[240px] bg-[#ffcc99]
  backdrop-blur-sm rounded-[20px] border-[1.5px]
                                border-white shadow-[0_0_20px_rgba(255,215,0,0.3),inset_0_0_10px_rgba(255,215,0,0.3)]"
          >
            <div className="flex justify-between items-center">
              <div className="text-#0b2037 text-[17px] transform translate-x-[10px]">
                {card.time}
              </div>

              <button
                className="h-[30px] w-[30px] z-[110] relative "
                onClick={() => setSelectedCard(null)}
              >
                <div className="h-[30px] w-[30px] rounded-bl-[10px] rounded-tr-[10px] bg-[#f1642f] flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none">
                  <div className="bg-[url('/public/AddButton.png')] w-[10px] h-[10px] bg-contain rotate-45 bg-no-repeat bg-center transition-transform duration-600 ease-in-out hover:rotate-180"></div>
                </div>
              </button>
            </div>

            <div className="ml-[10px] mt-[10px]">
              <div className="flex transition-all duration-500 ease-in-out hover:scale-102">
                <textarea
                  className="w-[180px] h-[100px] bg-[#c9b6d2] main-font-black overflow-auto scrollbar-hide overflow-wrap-break-word whitespace-pre-wrap break-words
                                                   !pl-[5px] !text-#0b2037 rounded-[10px]  !text-[13px]
                                                    border-none focus:outline-none focus:ring-0 
                                                     [&::-webkit-resizer]:hidden"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Add ivent"
                  value={title}
                >
                  {title}
                </textarea>
              </div>
            </div>
            <div className="flex mt-[18px] flex-row gap-[4px] ml-[7.7px]">
              <button
                className="h-[30px] w-[90px] z-[110] relative"
                onClick={() => {
                  buttonSave(card.id, title);
                  setSelectedCard(null);
                }}
              >
                <div className="h-[30px] w-[90px] rounded-bl-[10px] will-change-transform rounded-tr-[10px] bg-[#c5cc24] text-#0b2037 flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none hover:scale-102">
                  Save
                </div>
              </button>

              <div className="">
                <button
                  className="h-[30px] w-[90px] z-[110] relative"
                  onClick={() => {
                    buttonDelite(card.id);
                    setSelectedCard(null);
                  }}
                >
                  <div className="h-[30px] w-[90px] rounded-bl-[10px] will-change-transform rounded-tr-[10px] bg-[#f1642f] text-#0b2037 flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none hover:scale-102">
                    Delite
                  </div>
                </button>
              </div>
            </div>
            {!card.done ? (
              <div className="mt-[10px] flex justify-center items-center">
                <button
                  className="h-[30px] w-[90px] z-[110] relative"
                  onClick={() => readyCards(card.id)}
                >
                  <div
                    className={`h-[30px] w-[90px]  will-change-transform bg-[#f3f1e8] rounded-tr-[10px] rounded-bl-[10px] text-#0b2037 flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none hover:scale-102
                        ${!card.done ? "[transform:rotateX(1080deg)]" : "[transform:rotateX(0deg)]"}
    [transform-style:preserve-3d] hover:scale-102`}
                  >
                    Done
                  </div>
                </button>
              </div>
            ) : (
              <div className="mt-[10px] flex justify-center items-center">
                <button
                  className="h-[30px] w-[90px] z-[110] relative "
                  onClick={() => readyCards(card.id)}
                >
                  <div className="h-[30px] w-[90px]  will-change-transform bg-[#c9b6d2] rounded-tr-[10px] rounded-bl-[10px] text-#0b2037 flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none hover:scale-102">
                    Not done
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default SelectedCard;
