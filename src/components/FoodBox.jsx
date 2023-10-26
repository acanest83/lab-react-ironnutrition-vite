const FoodBox = ({ food, onDelete }) => {
    const { id,name, calories, image, servings } = food;
    const totalCalories = servings * calories;
  const handleDelete = () => {
    onDelete(id);
  };
    return (
      <div className="food-box">
        <p>{name}</p>
        <img src={image} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} kcal</b>
        </p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default FoodBox;