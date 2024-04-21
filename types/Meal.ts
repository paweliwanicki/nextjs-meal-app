export type Meal = {
  id?: number | string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
  mealImage: File;
};
