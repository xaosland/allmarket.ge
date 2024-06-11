export type RootInterface = {
  Id: number
  PhotoUrl: string
  SubCategories: SubCategory[]
  Title: string
  Url: string
}

export type SubCategory = {
  CategoryId: number
  DisablePurchase: boolean
  HomepageImageUrl?: any
  Id: number
  InnerBannerPhotoUrl?: (null | string)[]
  InnerBannerUrl?: (null | string)[]
  OrderIndex: number
  PhotoUrl?: (null | string)[]
  SeoDescriptionKa?: any
  SeoDescriptionLat?: any
  ShortDescription?: (null | string)[]
  ShowOnHomepage: boolean
  Title: string
  Url: string
}

export type items = {
  list: RootInterface[]
}
