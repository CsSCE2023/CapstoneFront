import { SearchResult } from "@/data/interfaces/isearchresult";
import React, { useState } from "react";
import Image from "next/image";

interface FoodItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface Review {
  id: number;
  reviewer: string;
  rating: number;
  comment: string;
}

interface ProductProps {
  food: FoodItem;
  relatedFoods: FoodItem[];
  reviews: Review[];
  onAddToCart: (food: FoodItem) => void;
}

const ProductPage = (result: SearchResult) => {
  const [selectedFood, setSelectedFood] = useState<SearchResult>(result);

  const handleRelatedFoodClick = (relatedFood: FoodItem) => {
    // setSelectedFood(relatedFood);
  };

  const onAddToCart = (selectedFood: any) => {};
  const relatedFoods = [
    {
      id: "GGOEYXXX0938",
      name: "YouTube Icon Pullover Black",
      description:
        "This YouTube pullover hoodie will keep you warm while looking stylish with the tone on tone logo.",
      features:
        "<p>8oz. 52% Cotton. 48% Polyester. Fleece</p>\n<p>Kangaroo pocket</p>\n<p>Matching drawcords</p>\n<p>",
      price: "59.99",
      keywords: "YouTube Icon Pullover Black, pullover, hoodie",
      url: "YouTube+Icon+Pullover+Black",
      category: "apparel",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaXrDEWDRb2CsjgHuqY8Gn2iy7-ByrDe0EQ&usqp=CAU",
      subcategory: "apparel",
    },
    {
      id: "GGOEYXXX0937",
      name: "YouTube Wordmark Crew Grey",
      description:
        "Kick back and relax in this comfortable YouTube sweatshirt. Unisex sizing.",
      features:
        "<p>Unisex sizing</p>\n<p>Raglan sleeves</p>\n<p>1x1 ribbed cuffs and waistband inch</p>",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ97tIucvkmmzp_Df_a0oy8yvx4dWMab9tJ3I_0JhxkXAjhbDDxwomjI5q6rPNSa9I9sje_A964SUE&usqp=CAc",
      price: "51.99",
      keywords: "YouTube Wordmark Crew Grey, YouTube, sweatshirt",
      url: "YouTube+Wordmark+Crew+Grey",
      category: "apparel",
      subcategory: "apparel",
    },
  ];
  const reviews: Review[] = [
    {
      id: 1,
      reviewer: "Fortan Pireva",
      rating: 4.2,
      comment: "Very good",
    },
    {
      id: 2,
      reviewer: "Mikhail Lyamets",
      rating: 4.5,
      comment: "Nice",
    },
    {
      id: 3,
      reviewer: "Emmanuel Kpodji",
      rating: 5,
      comment: "Supper",
    },
  ];
  return (
    <div className="product-container justify-center items-center flex flex-col pt-4">
      <div className="food-details-container flex flex-wrap justify-center ">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            className="w-96 h-auto"
            src={selectedFood.image}
            alt={selectedFood.name}
            width={300}
            height={300}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-4">{selectedFood.name}</h2>
          <p className="mb-4">{selectedFood.description}</p>
          <p className="mb-4 text-xl font-semibold">${selectedFood.price}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onAddToCart(selectedFood)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mt-8 mb-4">Related Foods</h3>
      <div className="related-foods-container flex flex-wrap w-full justify-center items-center">
        {relatedFoods.map((relatedFood) => (
          <div
            key={relatedFood.id}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 cursor-pointer"
            onClick={() =>
              handleRelatedFoodClick(relatedFood as unknown as FoodItem)
            }
          >
            <Image
              className="w-full h-auto mb-2"
              src={relatedFood.image}
              alt={relatedFood.name}
              width={200}
              height={200}
            />
            <p className="text-sm">{relatedFood.name}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-semibold mt-8 mb-4">Reviews</h3>
      <div className="reviews-container w-96">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="review mb-4 p-4 bg-white shadow-md rounded"
          >
            <p className="font-bold mb-2">{review.reviewer}</p>
            <p className="text-yellow-400 mb-2">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// This function gets called at build time
export async function getServerSideProps(context: any) {
  const { product: id } = context.params;
  // Call an external API endpoint to get posts
  console.log(id, process.env["HOST"]);
  const response = await fetch(`http://${process.env["HOST"]}/products.json`);
  const products = await response.json();
  let product = products.products.data.items.find(
    (p: SearchResult) => p.id == id
  );

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    props: {
      ...product,
      image: "https://picsum.photos/200/300",
      link: `/products/${product.id}`,
    },
  };
}
export default ProductPage;
