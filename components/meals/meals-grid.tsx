import { Meal } from '@/types/Meal';
import MealItem from './meal-item';
import classes from './meals-grid.module.css';

type MealsGridProps = {
  meals: Meal[];
};

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={`meal-${meal.id}`}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
