import { Address } from "./address";

export interface Hero {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address
}
