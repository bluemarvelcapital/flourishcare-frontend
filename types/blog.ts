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


export interface GetBlogPostsResponse {
    status: 'success',
    data: {
        blogPosts: (BlogI & { status: 'draft' | 'published' | 'hidden' })[]
    }
}
export interface GetBlogPostResponse {
    status: 'success',
    data: {
        blogPost: (BlogI & { status: 'draft' | 'published' | 'hidden' })
    }
}
