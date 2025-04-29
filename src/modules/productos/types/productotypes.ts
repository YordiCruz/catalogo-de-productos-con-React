
export interface Productotype {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
  total: number;
  skip: number;
  limit: number;

}

//con extends heredamos todas las propiedades de Productotype y agregamos la propiedad quantity
export interface ProductoCarrito extends Productotype {
  quantity: number;
  
}

export interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }

export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }

 export interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }

 


  

  
 
  

// Sample JSON response
