export interface BlogI {
  id: string
  title: string
  description: string
  content: string
  preview_image: string
  cover_image: string
  status: string
  createdAt: string
  updatedAt: string
  blogTags: BlogTag[]
}

export interface BlogTag {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}
