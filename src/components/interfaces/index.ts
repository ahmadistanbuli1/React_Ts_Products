export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  name: "title" | "description" | "imageURL" | "price";
}

export interface IValidationObj {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}
