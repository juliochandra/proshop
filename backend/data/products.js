const products = [
  {
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "iPhone 13 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 1.5,
    numReviews: 8,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Sony Playstation 5",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

// export default products;

// import { faker } from "@faker-js/faker";
// // Generate fake products
// const generateFakeProduct = () => {
//   return {
//     name: faker.commerce.productName(),
//     image: faker.image.urlLoremFlickr({
//       category: "Electronics",
//       width: 240,
//       height: 120,
//     }),
//     description: faker.commerce.productDescription(),
//     brand: faker.company.name(),
//     category: "Electronics",
//     price: parseFloat(faker.commerce.price({ min: 100, max: 200 })),
//     countInStock: faker.number.int({ min: 1, max: 100 }),
//     rating: parseFloat(faker.number.int({ min: 1, max: 5 })),
//     numReviews: faker.number.int({ min: 1, max: 50 }),
//   };
// };

// // Generate an array of fake products
// const generateFakeProducts = (numProducts) => {
//   const products = [];
//   for (let i = 0; i < numProducts; i++) {
//     products.push(generateFakeProduct());
//   }
//   return products;
// };

// // Example usage: generate 10 fake products
// const products = generateFakeProducts(40);

// console.log(products);

export default products;
