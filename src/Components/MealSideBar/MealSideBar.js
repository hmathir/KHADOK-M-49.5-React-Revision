import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddedMeal from "../AddedMeal/AddedMeal";

const MealSideBar = (props) => {
    const meals = props.singleMeal
    return (

        <div className="col-span-1 bg-secondary h-screen sticky top-0 rounded-xl border border-black">
            <div>
                <h1 className="text-white text-3xl text-center my-10 font-bold">Ordered Meals</h1>

                <div className="w-11/12 mx-auto">
                    {
                        meals.map(meal => <AddedMeal meal={meal}></AddedMeal>)
                    }
                </div>
                <button onClick={()=> props.clearMeal()} className="mt-10 block w-3/4 mx-auto border border-white hover:bg-black text-white h-12 rounded-md">
                    Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>


        </div>
    );
};

export default MealSideBar;