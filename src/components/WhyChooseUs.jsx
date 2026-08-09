import { FaShippingFast, FaShieldAlt, FaHeadset, FaUndo } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShippingFast size={40} />,
      title: "Free Shipping",
      description: "Free delivery on all orders over ₹999.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure Payment",
      description: "100% secure and trusted payment methods.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      description: "Our support team is always ready to help.",
    },
    {
      icon: <FaUndo size={40} />,
      title: "Easy Returns",
      description: "7-day hassle-free return policy.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-purple-700">NStyle?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="text-purple-700 flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;