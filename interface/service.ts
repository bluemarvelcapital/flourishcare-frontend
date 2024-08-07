export interface ServiceI {
  id: string
  name: string
  description: string
  price: number
  currency: string
  duration: string
  previewImage: string
  status: "ACTIVE" | "INACTIVE" | "COMING_SOON"
  createdAt: string
  updatedAt: string
  serviceCategory: [
    {
      id: string
      name: string
      description: string
      status: "ACTIVE" | "INACTIVE" | "COMING_SOON"
      previewImage: string
      createdAt: string
      updatedAt: string
      ServiceServiceCategory: {
        id: string
        serviceId: string
        categoryId: string
        createdAt: string
        updatedAt: string
      }
    }
  ]
  reviews: {
    id: string
    remarks: string
    rating: number
    serviceId: string
    visible: boolean
    createdAt: string
    updatedAt: string
    userId: string
  }[]
}

export interface ServiceReqParams {
  page?: string
  limit?: string
  status?: "ACTIVE" | "INACTIVE" | "COMING_SOON"
  categoryIds?: string
}
