import React from "react";

const CardData = [
  {
    id: "1",
    description: "High-quality earphones with noise cancellation.",
    category: "Earphone",
    image: "",
  },
  {
    id: "2",
    description: "Innovative gadgets to simplify your life.",
    category: "Gadget",
    image: "",
  },
  {
    id: "3",
    description: "Powerful laptops for work and play.",
    category: "Laptop",
    image: "",
  },
  {
    id: "4",
    description: "Premium speakers with immersive sound.",
    category: "Speaker",
    image: "",
  },
];

const CardLayout = ({ description, category, image }) => {
  const placeholderImage ="https://via.placeholder.com/300?text=No+Image";
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img 
          className="rounded-t-lg w-full h-48 object-cover" 
          src={image || placeholderImage} 
          alt={category}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {category}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Browse
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

function Category_Section() {
  return (
    <div className="max-w-[1200px] mx-auto mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {CardData.map((card) => (
        <CardLayout
          key={card.id}
          description={card.description}
          category={card.category}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default Category_Section;
