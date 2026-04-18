export type ServiceCategory =
  | "hvac"
  | "plumbing"
  | "electrical"
  | "appliance-repair"
  | "roofing";

export interface Contractor {
  id: string;
  businessName: string;
  ownerName: string;
  categories: ServiceCategory[];
  serviceAreas: string[];
  phone: string;
  email: string;
  website?: string;
  shomerShabbos: boolean;
  yearsInBusiness?: number;
  bio?: string;
  createdAt: string;
}

export interface HomeownerLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  zip: string;
  category: ServiceCategory;
  description: string;
  createdAt: string;
}
