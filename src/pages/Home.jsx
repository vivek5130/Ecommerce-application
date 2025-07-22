import React from 'react';

// Create components to display products section wise
// To do so first check the response object what we are getting from products API
// Then create a component that will take the products as props and display them
const Home = ({ products }) => {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <div className="w-full h-48 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{product.category}</p>
            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
            <p className="text-green-600 font-bold text-lg">₹{product.price}</p>
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <span className="text-yellow-500 mr-1">⭐ {product.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
