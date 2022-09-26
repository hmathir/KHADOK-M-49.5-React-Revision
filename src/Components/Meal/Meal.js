import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = (props) => {
    const { meal, handleMeal } = props;
    const { strMeal, strTags, strMealThumb, strArea, strInstructions } = meal;
    return (

        <div>
            <div className="card bg-base-100 shadow-xl h-full border border-black">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {strMeal}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{strInstructions.slice(0, 150) + '...'}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{strTags ? strTags : 'No Data'}</div>
                        <div className="badge badge-outline">{strArea ? strArea : 'No Data'}</div>
                    </div>
                </div>
                <button onClick={() => handleMeal(meal)} className="w-11/12 mx-auto mb-5 btn btn-outline btn-secondary">Add Meal To List <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
            </div>
        </div>



    );
};

export default Meal;