import { v4 as uuid } from "uuid";
import type { IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    imageURL: "https://picsum.photos/seed/gaming-headphones/600/400",
    price: "59.99",
    colors: ["#000000", "#FFFFFF", "#1E90FF"],
    category: {
      name: "Electronics",
      imageURL: "https://picsum.photos/seed/electronics-night/400/300",
    },
  },
  {
    id: uuid(),
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI and RGB lights.",
    imageURL: "https://picsum.photos/seed/gaming-mouse/600/400",
    price: "29.99",
    colors: ["#000000", "#FF0000"],
    category: {
      name: "Computers",
      imageURL: "https://picsum.photos/seed/computer-dark/400/300",
    },
  },
  {
    id: uuid(),
    title: "Smart Watch",
    description: "Track your health and notifications seamlessly.",
    imageURL: "https://picsum.photos/seed/smartwatch-night/600/400",
    price: "79.99",
    colors: ["#000000", "#C0C0C0"],
    category: {
      name: "Wearables",
      imageURL: "https://picsum.photos/seed/wearables-dark/400/300",
    },
  },
  {
    id: uuid(),
    title: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with blue switches.",
    imageURL: "https://picsum.photos/seed/gaming-keyboard/600/400",
    price: "45.99",
    colors: ["#000000", "#FFFFFF"],
    category: {
      name: "Computers",
      imageURL: "https://picsum.photos/seed/keyboard-rgb/400/300",
    },
  },
  {
    id: uuid(),
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and long battery life.",
    imageURL: "https://picsum.photos/seed/speaker-dark/600/400",
    price: "39.99",
    colors: ["#000000", "#1E90FF", "#808080"],
    category: {
      name: "Electronics",
      imageURL: "https://picsum.photos/seed/electronics-rgb/400/300",
    },
  },
  {
    id: uuid(),
    title: "Backpack",
    description: "Durable backpack for travel and study.",
    imageURL: "https://picsum.photos/seed/backpack-night/600/400",
    price: "19.99",
    colors: ["#000000", "#006400", "#000080"],
    category: {
      name: "Accessories",
      imageURL: "https://picsum.photos/seed/accessories-dark/400/300",
    },
  },
  {
    id: uuid(),
    title: "Sunglasses",
    description: "UV-protected stylish sunglasses.",
    imageURL: "https://picsum.photos/seed/night-fashion/600/400",
    price: "14.99",
    colors: ["#000000", "#654321"],
    category: {
      name: "Fashion",
      imageURL: "https://picsum.photos/seed/fashion-dark/400/300",
    },
  },
];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    label: "Product Title",
    type: "text",
    placeholder: "Enter product title",
    name: "title",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter product description",
    name: "description",
  },
  {
    id: "image",
    label: "Image URL",
    type: "text",
    placeholder: "Enter image URL",
    name: "imageURL",
  },
  {
    id: "price",
    label: "Price",
    type: "string",
    placeholder: "Enter product price",
    name: "price",
  },
];
