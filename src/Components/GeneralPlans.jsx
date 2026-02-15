import {useState, useEffect} from "react";

const GeneralPlans = () => {
    const [currentId, setCurrentId] = useState(1);
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
          setCurrentId(prev => 
            prev > 1 ? prev - 1 : prev
          );
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
    <div className="flex mt-[66px]">
      <div className="w-[400px] h-[425px] bg-[#ffcc99] rounded-br-[20px] rounded-tr-[20px]">
        <div className="m-[10px] text-#0b2037 text-[25px] main-font-black">
          Add general plans
        </div>
        {plans?.map((plan) => (
          <div className="">
            <div
              key={plan.id}
              className="m-[20px] w-[360px] h-[50px] rounded-[20px] bg-[#f3f1e8] flex flex-row justify-center items-center gap-[20px] transition-transform duration-600 ease-in-out hover:scale-105"
            >
              <div className="main-font-black text-[15px] ml-[20px]">
                {plan.id}
              </div>
              <div className="mb-[7px]">|</div>
              <input
                type="text"
                className="w-[360px] h-[50px] main-font-black cursor-hover
                                                   !pl-[5px] !text-[#f1642f] rounded-[10px] !text-[16px]
                                                    border-none focus:outline-none focus:ring-0"
                value={plan.title}
                onChange={(e) => planTitleAdd(plan.id, e.target.value)}
              />

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
  );
};
export default GeneralPlans;
