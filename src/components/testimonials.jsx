import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Hannah Schmitt",
      role: "Lead designer",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    },
    {
      id: 2,
      name: "Hannah Schmitt",
      role: "Lead designer",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    },
    {
      id: 3,
      name: "Hannah Schmitt",
      role: "Lead designer",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      </div>
      <div className="relative flex justify-center items-center">
        <button className="absolute left-0 text-cyan-300 text-2xl px-2">&#x276E;</button>
        <div className="flex space-x-6 overflow-hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 p-6 rounded-2xl text-center w-80 shadow-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-gray-900 mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{testimonial.role}</p>
              <p className="text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button className="absolute right-0 text-cyan-300 text-2xl px-2">&#x276F;</button>
      </div>
      <div className="flex justify-center space-x-2 mt-6">
        {[0, 1, 2, 3].map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 1 ? "bg-cyan-400" : "bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
