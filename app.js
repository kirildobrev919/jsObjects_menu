let menu = {
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[],    
  },
  get appetizers(){
    return this._courses.apetizers;
  },
  set appetizers(appetizerIn){
    this._courses.appetizers = appetizerIn;
  },
  get mains(){
    return this._courses.main;
  },
  set mains(mainIn){
    this._courses.manis = maniIn;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set desserts(dessertIn){
    this._courses.desserts = dessertIN;
  },
  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    //!!! problem no array;
    return this.courseName.push(dish);
  },
  
  getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
  const randNum = Math.floor(Math.random()*dishes.length);
    return diches[randNum];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizer');
    const main = this.getRandomDishFromCourse('main');
    const dessert = this.getRandomDishFromCourse('dessert');
    let totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} for the price of $${totalPrice}.`;    
  }
}
menu.addDishToCourse('appetizers', 'Shopska Salad', 1.00);
menu.addDishToCourse('appetizers', 'Shepherd Salad', 2.00);
menu.addDishToCourse('appetizers', 'Cesar Salad', 3.00);
menu.addDishToCourse('mains', 'Chicken', 5.00);
menu.addDishToCourse('mains', 'Lamb', 10.00);
menu.addDishToCourse('mains', 'Pork', 15.00);
menu.addDishToCourse('desserts', 'Cheese cake', 5.00);
menu.addDishToCourse('desserts', 'Caramel cream', 5.00);
menu.addDishToCourse('desserts', 'Watermelon', 5.00);

let meal = this.generateRandomMeal();
console.log(meal);
