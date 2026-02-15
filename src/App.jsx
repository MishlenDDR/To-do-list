import { useState, useEffect } from "react";
import CustomCursor from "./Components/CustomCursor.jsx";
import GeneralPlans from "./Components/GeneralPlans.jsx";
import Header from "./Components/Header.jsx";
import Cards from "./Components/Cards.jsx";
import Footer from "./Components/Footer.jsx";
import "./App.css";

function App() {
  const [, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [title, setTitle] = useState("");
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [allCards, setAllCards] = useState(() => {
    const saved = localStorage.getItem("allCards");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error("Ошибка", error);
      }
    }
    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      return {
        id: day,
        time: day + " February",
        title: "",
        done: false,
        itPast: day < currentDate,
        itsToday: day === currentDate,
      };
    });
  });
  useEffect(() => {
    localStorage.setItem("allCards", JSON.stringify(allCards));
  }, [allCards]);

  const openModyle = (card) => {
    setOpen(true);
    setSelectedCard(card);
    setTitle(card.title || "");
  };
  const buttonSave = (id, newTitle, newDeadLine) => {
    setAllCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, title: newTitle, deadline: newDeadLine }
          : card,
      ),
    );
  };
  const buttonDelite = (id) => {
    setAllCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, title: "", deadline: "" } : card,
      ),
    );
  };
  const readyCards = (cardId) => {
    setAllCards((prev) =>
      prev.map((card) =>
        card.id === cardId ? { ...card, done: !card.done } : card,
      ),
    );
  };

  return (
    <>
      <CustomCursor />
      <div
        className="w-full h-[864px] bg-cover relative z-[1]"
        style={{
          backgroundImage: `
             radial-gradient(#000 1px, transparent 1px),
             linear-gradient(to right, #e5e5e5 1px, transparent 1px),
             linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
         `,
          backgroundSize: "40px 40px, 100px 100px, 100px 100px",
        }}
      >
        <Header />

        <div className="bg-[url('/public/BackPrint2.png')] z-[0] absolute bg-cover w-[1200px] h-[600px] top-50 right-0"></div>

        <div className="flex items-start">
          <div className="w-[400px] h-[200px] bg-[#ffcc99] rounded-br-[20px] relative z-[1]">
            <div className="mt-[41px] ml-[45px] flex flex-column">
              <div className="main-font-black text-[25px]">
                <li className="  transition-all duration-600 ease-in-out hover:scale-105">
                  You can insert a table here
                </li>
                <li className="  transition-all duration-600 ease-in-out hover:scale-105">
                  Maybe some kind of icon
                </li>
                <li className="  transition-all duration-600 ease-in-out hover:scale-105">
                  Any data
                </li>
              </div>
            </div>
            <GeneralPlans />
          </div>
          <div className="w-[10px] h-[10px] bg-[radial-gradient(circle_at_100%_100%,transparent_20px,#ffcc99_0)] w-[20px] h-[20px]"></div>
          <Cards
            allCards={allCards}
            selectedCard={selectedCard}
            openModyle={openModyle}
            currentMonth={currentMonth}
            setSelectedCard={setSelectedCard}
            buttonSave={buttonSave}
            buttonDelite={buttonDelite}
            readyCards={readyCards}
            title={title}
            setTitle={setTitle}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
