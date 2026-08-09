// // // import ProductCard from "./ProductCard";

// // // const products = [
// // //   {
// // //     id: 1,
// // //     name: "Luxury Watch",
// // //     price: 1000,
// // //     image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Sneakers",
// // //     price: 2499,
// // //     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Handbag",
// // //     price: 1999,
// // //     image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Watch",
// // //     price: 2999,
// // //     image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
// // //   },
// // // ];

// // // function FeaturedProducts() {
// // //   return (
// // //     <section className="py-16 px-10 bg-gray-50">
// // //       <h2 className="text-4xl font-bold text-center mb-10">
// // //         Featured Products
// // //       </h2>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //         {products.map((product) => (
// // //           <ProductCard key={product.id} product={product} />
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default FeaturedProducts;



// // import { FiHeart, FiShoppingCart } from "react-icons/fi";
// // import { FaStar } from "react-icons/fa";

// // function ProductCard({ product }) {
// //   return (
// //     <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">

// //       {/* Image Section */}
// //       <div className="relative overflow-hidden">
// //         <img
// //           src={product.image}
// //           alt={product.name}
// //           className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
// //         />

// //         {/* Wishlist */}
// //         <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
// //           <FiHeart size={20} />
// //         </button>

// //         {/* Discount Badge */}
// //         <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
// //           {product.discount}
// //         </span>
// //       </div>

// //       {/* Product Details */}
// //       <div className="p-5">

// //         {/* Rating */}
// //         <div className="flex items-center gap-1 text-yellow-500 mb-2">
// //           <FaStar />
// //           <span className="text-gray-700 font-medium">
// //             {product.rating}
// //           </span>
// //         </div>

// //         {/* Product Name */}
// //         <h3 className="text-xl font-bold text-gray-800">
// //           {product.name}
// //         </h3>

// //         {/* Price */}
// //         <div className="flex items-center gap-3 mt-3">
// //           <span className="text-2xl font-bold text-black">
// //             ₹{product.price}
// //           </span>

// //           <span className="line-through text-gray-400">
// //             ₹{product.oldPrice}
// //           </span>
// //         </div>

// //         {/* Button */}
// //         <button className="mt-5 w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-black transition duration-300">
// //           <FiShoppingCart />
// //           Add to Cart
// //         </button>

// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductCard;
// import ProductCard from "./ProductCard";

// const products = [
//   {
//     id: 1,
//     name: "Luxury Watch",
//     price: 1000,
//     oldPrice: 1800,
//     rating: 4.9,
//     discount: "44% OFF",
//     image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
//   },
//   {
//     id: 2,
//     name: "Nike Sneakers",
//     price: 2499,
//     oldPrice: 3499,
//     rating: 4.8,
//     discount: "29% OFF",
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
//   },
//   {
//     id: 3,
//     name: "Leather Handbag",
//     price: 1999,
//     oldPrice: 2799,
//     rating: 4.7,
//     discount: "30% OFF",
//     image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
//   },
//   {
//     id: 4,
//     name: "Women's Dress",
//     price: 1599,
//     oldPrice: 2499,
//     rating: 4.9,
//     discount: "36% OFF",
//     image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
//   },
//   {
//     id: 5,
//     name: "Men's Jacket",
//     price: 2299,
//     oldPrice: 3299,
//     rating: 4.8,
//     discount: "30% OFF",
//     image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
//   },
//   {
//     id: 6,
//     name: "Premium Sunglasses",
//     price: 899,
//     oldPrice: 1499,
//     rating: 4.6,
//     discount: "40% OFF",
//     image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
//   },
//   {
//     id: 7,
//     name: "Luxury Backpack",
//     price: 1799,
//     oldPrice: 2599,
//     rating: 4.8,
//     discount: "31% OFF",
//     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
//   },
//   {
//     id: 8,
//     name: "Gold Bracelet",
//     price: 1299,
//     oldPrice: 1999,
//     rating: 4.9,
//     discount: "35% OFF",
//     image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600",
//   },
// ];

// function FeaturedProducts() {
//   return (
//     <section className="py-16 px-10 bg-gray-50">
//       <h2 className="text-4xl font-bold text-center mb-2">
//         Featured Collection
//       </h2>

//       <p className="text-center text-gray-500 mb-10">
//         Discover our latest premium fashion collection.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;


import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section className="py-16 px-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-2">
        Featured Collection
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Discover our latest premium fashion collection.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;