function Categories() {
  const categories = [
    { name: "Women", emoji: "👗" },
    { name: "Men", emoji: "👕" },
    { name: "Shoes", emoji: "👟" },
    { name: "Bags", emoji: "👜" },
  ];

  return (
    <section className="py-16 px-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition cursor-pointer"
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;