'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';
import { Meal } from '@/types/Meal';

const isInvalidText = (text: string) => {
  return !text || text.trim() === '';
};

const validateMealDto = (meal: Meal) => {
  const { title, summary, instructions, creator, creator_email, mealImage } =
    meal;

  if (isInvalidText(title)) {
    return 'Invalid title!';
  }
  if (isInvalidText(summary)) {
    return 'Invalid summary!';
  }
  if (isInvalidText(instructions)) {
    return 'Invalid instructions!';
  }
  if (isInvalidText(creator)) {
    return 'Invalid creator!';
  }
  if (!creator_email.includes('@')) {
    return 'Invalid email!';
  }
  if (!mealImage || !mealImage.size) {
    return 'Invalid image!';
  }
};

export const shareMeal = async (
  prevState: { message: string },
  formData: FormData
) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    mealImage: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  } as Meal;
  const error = validateMealDto(meal);
  if (error) {
    return { message: error };
  }
  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
};
