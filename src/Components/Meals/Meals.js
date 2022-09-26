import { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import MealSideBar from "../MealSideBar/MealSideBar";

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [singleMeal, setSingleMeal] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        const fetchMeals = async () => {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const data = await res.json();
            setMeals(data.meals);
        }
        fetchMeals();
    }, []);

    const handleMeal = (meal) => {
        let newMeals = [];
        newMeals = [...singleMeal, meal];
        setSingleMeal(newMeals);
    }

    const clearMeal = () => {
        let newMeals = [];
        newMeals = [];
        setSingleMeal(newMeals);
    }
    return (
        <div>
            <div className="form-control w-6/12 mx-auto my-5 sticky top-0 z-[2000]">
                <input type="text" placeholder="Search By Name..." className="input input-bordered" onChange={(e) => setSearchText(e.target.value)} />
            </div>
            <div className="grid grid-cols-5">
                <div className="grid grid-cols-3 col-span-4 w-11/12 mx-auto gap-6 mt-10">
                    {
                        meals
                            .filter((meal) => {
                                if (meal === "") {
                                    return meal;
                                } else if (meal.strMeal.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                                    return meal;
                                }
                                return 0;
                            }).map(meal => <Meal key={meal.idMeal} meal={meal} handleMeal={handleMeal}></Meal>)
                    }
                </div>
                <MealSideBar clearMeal={clearMeal} singleMeal={singleMeal}></MealSideBar>

            </div>
        </div>


    );
};

export default Meals;