import { BlogI } from '@/types/blog'
import _blogPosts from '../data/posts.json'
const blogPosts = _blogPosts as { blogPosts: BlogI[] }

export default class BlogQueryApi {
    private static blogPosts = blogPosts.blogPosts
    static getBlogPostById(id: string) {
        return blogPosts.blogPosts.find((post) => post.id === id)
    }

    static getSimilarPosts(postId: string) {
        // const post = blogPosts.blogPosts.find((post) => post.id === postId)
        // if (!post) return []

        // return blogPosts.blogPosts.filter((post) => post.tags.some((tag) => post.tags.includes(tag)))
        // TODO: Implement similar posts logic
        return this.blogPosts.filter((post) => post.id !== postId)
    }

    static getBlogPostsByTag(tag: string) {
        return this.blogPosts.filter((post) => post.tags.includes(tag))
    }

    static getBlogPostsByStatus(status: string) {
        return this.blogPosts.filter((post) => post.status.toLowerCase() === status.toLowerCase())
    }

    static getBlogPostsByDate(date: string) {
        const sortedBlogPosts = this.blogPosts.sort((a, b) => {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        })

        return sortedBlogPosts
    }

    static getAllBlogPosts() {
        return this.blogPosts
    }
}
