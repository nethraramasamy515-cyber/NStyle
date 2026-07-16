import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Priya",
    review: "Amazing quality! The delivery was fast and the dress looked exactly like the pictures.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul",
    review: "The AI recommendations helped me find the perfect sneakers. Great experience!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya",
    review: "Beautiful collection and premium quality. I'll definitely shop again.",
    rating: 4,
  },
];

function CustomerReviews() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="text-gray-600">"{review.review}"</p>

              <h3 className="mt-5 font-bold text-lg">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;