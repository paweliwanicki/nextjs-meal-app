export default function MealPage({ params }: { params: { mealSlug: string } }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>{params.mealSlug}</h1>
    </main>
  );
}
