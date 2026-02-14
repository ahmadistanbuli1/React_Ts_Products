import type { IValidationObj } from "../components/interfaces";

export const productValidation = (product: IValidationObj) => {
  const { title, description, imageURL, price } = product;
  // ** Return An Object
  const errors: IValidationObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  // REGEX
  const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (!title.trim() || title.length < 10 || title.length > 80) {
    errors.title = "Product Title Must Be Between 10 And 80 Characters";
  }

  if (
    !description.trim() ||
    description.length < 10 ||
    description.length > 900
  ) {
    errors.description =
      "Product Description Must Be Between 10 And 900 Characters";
  }

  if (!imageURL.trim() || !validURL) {
    errors.imageURL = "Please Enter A Valid URL For The Product Image";
  }

  if (!price.trim() || isNaN(Number(price))) {
    errors.price = "Valid Price Is Required";
  }
  return errors;
};
