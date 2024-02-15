import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 250.65,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 999,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 150,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 66,
    },
  ];
  
  const AvailableMeals=()=>{
    
    return(
        <section className={classes.meals}>
            <Card>
            <ul>
                {DUMMY_MEALS.map((meals) =>
                 <MealItem
                 id={meals.id}
                 key={meals.id}
                 name={meals.name}
                 description={meals.description}
                 price={meals.price}
                 />
                )}
            </ul>
            </Card>
        </section>
    );
};
export default AvailableMeals;