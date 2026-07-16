// function Shop() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <h1 className="text-5xl font-bold">Shop Page</h1>
//     </div>
//   );
// }

// export default Shop;
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-8">
          Shop
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-4 rounded-xl border mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Shop;