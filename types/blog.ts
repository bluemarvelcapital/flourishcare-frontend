export interface BlogI {
    id: string;
    title: string
    content: string
    preview_image: string
    cover_image: string
    tags: string[]
    description: string
    createdAt: string
    updatedAt: string
    category: string
    author?: string
    status: 'draft' | 'published' | 'hidden'
}
