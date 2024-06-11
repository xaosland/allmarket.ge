export type SubCategorie = {
  id: number;
  title: string;
  url: string;
  Photourl: any;
  InnerBannerPhotourl: any;
  InnerBannerurl: string;
  showOnHomepage: boolean;
  shortDescription: string;
  orderIndex: number;
  disablePurchase: boolean;
  seoDescriptionKa?: any;
  seoDescriptionLat?: any;
  Categoryid: number;
  HomepageImageurl: any;
}

export type List = {
  id: number;
  title: string;
  url: string;
  Photourl: string;
  subCategories: SubCategorie[];
}

export type type = {
  list: List[];
}