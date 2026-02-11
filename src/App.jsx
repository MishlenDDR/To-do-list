
import {useState, useEffect} from "react";
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [currentId, setCurrentId] = useState(1);
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [allCards, setAllCards] = useState(() => {
  const saved = localStorage.getItem('allCards');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error('Ошибка', error);
    }
  }
  return Array.from({length: daysInMonth}, (_, i) => {
    const day = i + 1;
    return {
      id: day,
      time: day + " February",
      title: "",
      deadline: "",
      done: false,
      itPast: day < currentDate,
      itsToday: day === currentDate,
    };
  });
});
useEffect(() => {
  localStorage.setItem('allCards', JSON.stringify(allCards));
}, [allCards]);

    const openModyle = (card) => {
      setOpen(true)
      setSelectedCard(card);
      setTitle(card.title || ""); 
      setDeadline(card.deadline || "");
    }
    const buttonSave = (id, newTitle, newDeadLine) => {
      setAllCards(prevCards => 
        prevCards.map(card => 
          card.id === id ? {...card, title: newTitle, deadline: newDeadLine} : card
        )
      )
    }
    const buttonDelite = (id) => {
      setAllCards(prevCards => 
        prevCards.map(card => 
          card.id === id ? {...card, title: "", deadline: ""} : card
        )
      )
    }
    const readyCards = (cardId) => {
      setAllCards(prev => 
        prev.map(card => 
          card.id === cardId ? { ...card, done: !card.done } : card
        )
      );
    };
    const addPlan =() => {
      const newPlan ={
        id: currentId,
        title: "",
      }
      setPlans([...plans, newPlan])
      setCurrentId(currentId + 1);
    };
     const DelitePlan =() => {
      const newPlans = plans.slice(0, plans.length - 1);
      setPlans(newPlans);
      setCurrentId(
       currentId > 1 ? currentId - 1 : currentId);
    };
    const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem('plans');
    return saved ? JSON.parse(saved) : [];
    });
    const planTitleAdd = (id, newTitle) => {
      setPlans(prevPlans => {
    const updated = prevPlans.map(plan => 
      plan.id === id ? {...plan, title: newTitle} : plan
    );
    return updated;
        });
      };
    useEffect(() => {
  localStorage.setItem('plans', JSON.stringify(plans));
}, [plans]);
    const DelitePlanInput = (id) => {
        setPlans(prevPlan => 
        prevPlan.map(plan => 
          plan.id === id ? {...plan, title: ""} : plan
        )
      )
    }
    

  return (
    <>
    <div className="w-full h-[870px] bg-[#f3f1e8] bg-[url('/public/2.jpg')] bg-cover relative z-[1]">
      <div className="w-full h-[200px] bg-[#ffcc99] relative z-[1]">
        <div className="bg-[url('/public/Header2.png')] absolute inset-0 bg-cover relative z-[3] w-full h-[136px] ">
        <div className="bg-[url('/public/Header2.png')] bg-cover  relative z-[2] w-full h-[136px] transition-all duration-2000 ease-in-out hover:scale-y-110 hover:translate-y-1">
        </div>
         <div className="absolute top-[15%] main-font-black text-#0b2037 z-[0] text-[200px] font-normal font-[400] leading-none tracking-tighter whitespace-nowrap">
          To-do-list
        </div>
        </div>
      </div>

      <div className="group">
      <div className="bg-[url('/public/Valic.png')] w-[70px] h-[70px] absolute bg-cover z-[3]  left-[40px] top-[870px] transition-transform duration-2000 ease-in-out group-hover:translate-y-[45px]"></div>
      <div className="bg-[url('/public/Paint.png')] bg-cover w-[70px] h-[10px] absolute z-[2]  left-[34px] top-[868px] will-change-height transition-all duration-2000 ease-in-out group-hover:h-[60px]"></div>
    </div>

      <div className="bg-[url('/public/BackPrint2.png')] z-[0] absolute bg-cover w-[1200px] h-[600px] top-50 right-0"></div>
      
        <div className="flex items-start">
          <div className="w-[400px] h-[200px] bg-[#ffcc99] rounded-br-[20px] relative z-[1]">
            <div className="flex mt-[220px]">
          <div className="w-[400px] h-[430px] bg-[#ffcc99] rounded-br-[20px] rounded-tr-[20px]">
           <div className="m-[10px] text-#0b2037 text-[25px] main-font-black">
            Add general plans
           </div>
           {plans?.map((plan) => (
            <div className="">
              <div key={plan.id} className="m-[20px] w-[360px] h-[50px] rounded-[20px] bg-[#f3f1e8] flex flex-row justify-center items-center gap-[20px] transition-transform duration-600 ease-in-out hover:scale-105">
                <div className="main-font-black text-[15px] ml-[20px]">{plan.id}</div>
                <div className="mb-[7px]">|</div>
                <input type="text" className="w-[360px] h-[50px] main-font-black
                                                   !pl-[5px] !text-[#f1642f] rounded-[10px] !text-[16px]
                                                    border-none focus:outline-none focus:ring-0"
                                                    value={plan.title}
                                                    onChange={(e) => planTitleAdd(plan.id, e.target.value)}/>
                                                    
                                                      <button className="" onClick={() => DelitePlanInput(plan.id)}>
                                                        <div className="w-[40px] h-[40px] bg-[#f1642f] flex justify-center items-center rounded-[10px] text-[10px] transition-transform duration-600 ease-in-out hover:scale-110">
                                                          <div className="bg-[url('/public/AddButton.png')] w-[10px] h-[10px] bg-contain rotate-45 bg-no-repeat bg-center transition-transform duration-600 ease-in-out hover:rotate-180"></div>
                                                        </div>
                                                      </button>
                                                    
                                                    </div>
                                                    </div>

           ))}
           <div className="ml-[20px]">
           <button className="w-[40px] h-[40px] z-[2]" onClick={addPlan}>
              <div className="w-[40px] h-[40px] rounded-[10px] bg-[#f3f1e8] flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110">
                <div className="bg-[url('/public/AddButton.png')] w-[10px] h-[10px] bg-contain bg-no-repeat bg-center transition-transform duration-600 ease-in-out hover:rotate-180"></div>
              </div>
           </button>
           <button className="w-[40px] h-[40px] z-[2]" onClick={DelitePlan}>
              <div className="w-[40px] h-[40px] ml-[10px] rounded-[10px] bg-[#f3f1e8] flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110">
                <div className="bg-[url('/public/DeliteButton.png')] w-[10px] h-[10px] bg-contain bg-no-repeat bg-center transition-transform duration-600 ease-in-out hover:rotate-180"></div>
              </div>
           </button>
           </div>

          </div>

          </div>
          </div>
          <div className="w-[10px] h-[10px] bg-[radial-gradient(circle_at_100%_100%,transparent_20px,#ffcc99_0)] w-[20px] h-[20px]"></div>
          <div className="flex mt-[18px] grid grid-cols-7 gap-[10px]">
            
            {allCards.map((card) => (
                
                  <div key={card.id} onClick={() => openModyle(card)} className={`cards w-[130px] h-[150px] bg-cover bg-center bg-[#c9b6d2] rounded-[5px] cursor-grab
        relative gap-[2px]  transition-transform duration-600 ease-in-out ${card.itPast ? 'opacity-60' : ''} ${card.itsToday ? 'shadow-[0_8px_10px_-4px_rgba(0,0,0,0.8)]' : ''} ${selectedCard?.id === card.id ? 'z-[101] relative pointer-events-none' : 'hover:scale-110 hover:shadow-[0_0_20px_rgba(166,54,179,0.3)] hover:z-[52]'}`}>
                    <div className={`
                          main-font-black 
                          flex justify-center items-center
                          absolute rotate-45 top-[30%] left-[18%]
                          ${card.done ? 'text-green-700 text-[35px]' : ''}
                          `}>
                          {card.done ? 'Done' : ''}
                        </div>
                    {selectedCard?.id === card.id && (
              <div  className={`${card.id === 7 || card.id === 14 || card.id === 21 || card.id === 28 ? '  absolute z-[100] pointer-events-auto main-font-black bottom-[1%] right-[100%]' : 'absolute z-[100] pointer-events-auto main-font-black bottom-[1%] left-[100%]'}`} onClick={(e) => e.stopPropagation()}>
                <div className="w-[200px] h-[240px] bg-[#ffcc99]
  backdrop-blur-sm rounded-[20px] border-[1.5px]
                                border-white shadow-[0_0_20px_rgba(255,215,0,0.3),inset_0_0_10px_rgba(255,215,0,0.3)]">
                                  <div className="flex justify-between items-center">
                <div className="text-#0b2037 text-[17px] transform translate-x-[10px]">{card.time}</div>
                  
                  <button className="h-[30px] w-[30px] z-[110] relative " onClick={() => setSelectedCard(null)}>
                        <div className="h-[30px] w-[30px] rounded-bl-[10px] rounded-tr-[10px] bg-[#f1642f] flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none">
                          <div className="bg-[url('/public/AddButton.png')] w-[10px] h-[10px] bg-contain rotate-45 bg-no-repeat bg-center transition-transform duration-600 ease-in-out hover:rotate-180"></div>
                        </div>
                  </button>
                  </div>
                 
                  <div className="ml-[10px] mt-[10px]">

                  <div className="flex transition-all duration-500 ease-in-out hover:scale-102">
                      <textarea className="w-[180px] h-[100px] bg-[#c9b6d2] main-font-black overflow-auto scrollbar-hide overflow-wrap-break-word whitespace-pre-wrap break-words
                                                   !pl-[5px] !text-#0b2037 rounded-[10px]  !text-[13px]
                                                    border-none focus:outline-none focus:ring-0 
                                                     [&::-webkit-resizer]:hidden"
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    placeholder="Add ivent"
                                                    value={title}
                                                    
                                                    >{title}</textarea>
                                                    
             
                            </div>
                            </div>
                      <div className="flex mt-[18px] flex-row gap-[4px] ml-[7.7px]">
                      <button className="h-[30px] w-[90px] z-[110] relative" onClick={() => {buttonSave(card.id, title, deadline); setSelectedCard(null)}}>
                        <div className="h-[30px] w-[90px] rounded-bl-[10px] will-change-transform rounded-tr-[10px] bg-[#c5cc24] text-#0b2037 flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none hover:scale-102">Save</div>
                  </button> 
                  
                  <div className="">
                    <button className="h-[30px] w-[90px] z-[110] relative" onClick={() => {buttonDelite(card.id); setSelectedCard(null)}}>
                        <div className="h-[30px] w-[90px] rounded-bl-[10px] will-change-transform rounded-tr-[10px] bg-[#f1642f] text-#0b2037 flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none hover:scale-102">Delite</div>
                  </button> 
                  </div>
                  
                  </div>
                    {!card.done ? (
                      <div className="mt-[10px] flex justify-center items-center">
                    <button className="h-[30px] w-[90px] z-[110] relative" onClick={() => readyCards(card.id)}>
                        <div className={`h-[30px] w-[90px]  will-change-transform bg-[#f3f1e8] rounded-tr-[10px] rounded-bl-[10px] text-#0b2037 flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none hover:scale-102
                        ${!card.done ? '[transform:rotateX(1080deg)]' : '[transform:rotateX(0deg)]'}
    [transform-style:preserve-3d] hover:scale-102`}>Done</div>
                  </button> 
                  </div>
                    ) : (
                      <div className="mt-[10px] flex justify-center items-center">
                    <button className="h-[30px] w-[90px] z-[110] relative " onClick={() => readyCards(card.id)}>
                        <div className="h-[30px] w-[90px]  will-change-transform bg-[#c9b6d2] rounded-tr-[10px] rounded-bl-[10px] text-#0b2037 flex justify-center items-center transition-all duration-600 ease-in-out hover:rounded-br-[10px] hover:rounded-bl-none hover:rounded-tl-[10px] hover:rounded-tr-none hover:scale-102">Not done</div>
                  </button>
                  </div>
                    )}
                </div>
                  </div>
                )}
                  <div className="w-[130px] h-[20px] bg-[#f1642f] rounded-tr-[5px] rounded-tl-[5px] flex justify-center items-center text-#0b2037 main-font-black">
                    {card.time}
                  </div>
                  {card.title ? (
                    <div className="w-[120px] h-auto min-h-[50px] bg-[#f3f1e8] shadow-[0_8px_10px_-4px_rgba(0,0,0,0.8)] rounded-[10px] text-#0b2037 mt-[10px] ml-[5px] pl-[5px] text-[12px] main-font-black ">
                      <div className="ml-[3px] whitespace-pre-wrap break-words ">
                    {card.title}
                        </div>
                        
                        </div>
                      ) : (
                       <div className="
                          main-font-black 
                          flex justify-center items-center 
                          mt-[20px]
                          ">
                          No plans
                        </div>
                      )}
                  
                </div>
                
                
            ))}
          </div>
          </div>
          </div>
          <div className="w-full h-[117px] bg-[#f1642f] pt-[25px] gap-[300px] text-#0b2037 main-font-black text-[30px] flex  justify-center ">
            <ul className="transition-all duration-600 ease-in-out hover:scale-105">@mihajuli</ul>
            <ul className="transition-all duration-600 ease-in-out hover:scale-105">
              <a href="https://github.com/MishlenDDR" className="">
              <span className="text-[25px]">GitHub-</span>MishlenDDR</a>
            </ul>
            <ul className="transition-all duration-600 ease-in-out hover:scale-105">Aim at the roller</ul>

          </div>
     
    </>
  )
}

export default App
