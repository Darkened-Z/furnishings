'use client';

import Image from "next/image";
import PageHeader from "@/components/common/header";
import RelatedProducts from "@/components/blog/related-products";

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    featuredImage: string;
    content: string;
    author: string;
    publish_date: string;
    excerpt: string;
    category_name?: string;
}

export default function SingleBlogContent({ blog }: { blog: BlogPost }) {
    const processContent = (content: string): string => {
        const baseUrl = 'https://cms.furnishings.daikimedia.com';

        return content
            // Fix relative image URLs
            .replace(/src="\/storage\//g, `src="${baseUrl}/storage/`)
            // Demote headings in reverse order to avoid cascading replacements:
            // h3 → h4, then h2 → h3, then h1 → h2
            .replace(/<h3(\s|>)/gi, '<h4$1').replace(/<\/h3>/gi, '</h4>')
            .replace(/<h2(\s|>)/gi, '<h3$1').replace(/<\/h2>/gi, '</h3>')
            .replace(/<h1(\s|>)/gi, '<h2$1').replace(/<\/h1>/gi, '</h2>');
    };

    return (
        <>
            <PageHeader title={blog.title} />
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                    
                    <p className="text-gray-500 mb-6">
                        By {blog.author} | {new Date(blog.publish_date).toDateString()}
                    </p>

                    <div className="relative h-96 w-full mb-8">
                        <Image
                            src={`https://cms.furnishings.daikimedia.com/storage/${blog.featuredImage}`}
                            alt={blog.title}
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>

                    <p className="text-lg text-gray-700 mb-8">{blog.excerpt}</p>

                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ 
                            __html: processContent(blog.content) 
                        }}
                    />
                </div>
            </section>
            
            <RelatedProducts />
        </>
    );
}