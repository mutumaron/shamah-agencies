// types.ts

export interface Destination {
  id: number;
  title: string;
  param: string;
  tours?: number;
  imgurl: string;
}

export interface Package {
  id: number;
  title: string;
  location: string;
  reviews: number;
  imageurl1: string;
  imageurl2: string;
  imageurl3: string;
  duration: number;
  type: string;
  guests: number;
  language: string;
  price: number;
  about: string;
  highlights: string[];
  include: string[];
  exclude: string[];
  plan: {
    description: string;
    days: string[];
  };
  mapurl: string;
  mapdata: string;
  tag: string;
  promo: boolean;
  param: string;
}

export interface Booking {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  checkin: string; // Expecting mm/dd/yyyy format
  checkout: string; // Expecting mm/dd/yyyy format
  noadults: number;
  nochildren: number;
  package_id: number;
}

export interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  content: string;
}
