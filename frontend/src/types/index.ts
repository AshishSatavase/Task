export interface Product {
  id: number;
  name: string;
  description: string;
  sizeOptions: string[];
  price: number;
  images: string[];
  video: string;
}

export interface CartItem extends Product {
  productId: number;
  quantity: number;
  selectedSize?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} 