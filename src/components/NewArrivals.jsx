function NewArrivals() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          New Arrivals
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Fresh styles just added to our collection.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center text-2xl font-bold">
            Coming Soon
          </div>

          <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center text-2xl font-bold">
            Coming Soon
          </div>

          <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center text-2xl font-bold">
            Coming Soon
          </div>

          <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center text-2xl font-bold">
            Coming Soon
          </div>

        </div>

      </div>
    </section>
  );
}

export default NewArrivals;