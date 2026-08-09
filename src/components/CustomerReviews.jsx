import { FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Nethra",
    review:
      "Amazing quality! The delivery was fast and the dress looked exactly like the pictures.",
    rating: 5,
    date: "12 July 2026",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Saravanan",
    review:
      "The AI recommendations helped me find the perfect sneakers. Great experience!",
    rating: 5,
    date: "18 July 2026",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "sanjana",
    review:
      "Beautiful collection and premium quality. I'll definitely shop again.",
    rating: 4,
    date: "25 July 2026",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function CustomerReviews() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          ❤️ What Our Customers Say
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Trusted by thousands of happy customers.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* Customer */}
              <div className="flex items-center gap-4">

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    {review.name}

                    <FaCheckCircle className="text-blue-500" />
                  </h3>

                  <p className="text-sm text-gray-500">
                    Verified Buyer
                  </p>
                </div>

              </div>

              {/* Rating */}
              <div className="flex text-yellow-500 mt-5">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 mt-5 leading-7">
                "{review.review}"
              </p>

              {/* Date */}
              <p className="text-gray-400 text-sm mt-6">
                {review.date}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CustomerReviews;