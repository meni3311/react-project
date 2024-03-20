
function Search(props) {

  const filterFruits = (freeChoice) => {
    let newArray = props.fruits.filter(item => {
      if (props.choise === "name") {
        return item.name.toLowerCase() === freeChoice.toLowerCase();
      }
      if (props.choise === "calories") {
        return item.calories <= Number(freeChoice);
      }
      if (props.choise === "price") {
        return item.price <= Number(freeChoice);
      }
      if (props.choise === "ingredients") {
        return item.ingredients.includes(freeChoice.toLowerCase());
      }
      if (props.choise === "sugar_teaspoons") {
        return item.sugar_teaspoons <= Number(freeChoice);
      }
      return null;
    });
    return newArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterArr = filterFruits(props.freeChoice);
    if (filterArr.length > 0) {
      props.setFruits_ar(filterArr);
    } else {
      alert("Try again");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="text-center pt-4 d-flex align-items-center col-6">
        <input onChange={(e) => props.setFreeChoice(e.target.value)} type="text" className="form-control me-2 w-50 border-danger text-danger" placeholder="Please enter value" />
        <select onChange={(e) => props.setChoise(e.target.value)} className="form-control me-2 w-25 border-danger text-danger">
          <option value="name">Name</option>
          <option value="calories">Calories</option>
          <option value="price">Price</option>
          <option value="ingredients">Ingredients</option>
          <option value="sugar_teaspoons">Sugar Teaspoons</option>
        </select>
        <button className="btn btn-danger">Search</button>
      </form>

    </>
  );
}

export default Search;