export class ProductModel {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculateReting: number;
  desciption: string;
  Advantages: string;
  disAdvantages: string;
  tegories: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
