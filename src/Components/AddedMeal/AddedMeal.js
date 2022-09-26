
const AddedMeal = (props) => {
    const { strMeal, strMealThumb } = props.meal;
    return (
        <div>
            <div className="flex justify-between items-center px-4 mb-2 border border-white bg-black">
                <div>
                    <img className="w-12 h-12" src={strMealThumb} alt="" />
                </div>
                <h1 className="text-white text-xl">{strMeal}</h1>
                <input type="text" value='1' className="w-5 text-center" readOnly />

            </div>
        </div>
    );
};

export default AddedMeal;