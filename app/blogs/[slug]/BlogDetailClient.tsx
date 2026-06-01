"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/app/config/baseUrl";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  image: {
    public_id: string;
    url: string;
  };
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  createdAt: string;
  updatedAt: string;
  content?: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getReadTime(description: string) {
  const wordsPerMinute = 200;
  const wordCount = description.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

export default function BlogDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  console.log(blog)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/blogs/${slug}`) 
        // fetch(`http://localhost:5000/api/blogs/${slug}`) 
        // fetch(`http://localhost:5000/api/blogs/${slug}`);
        const data = await response.json();
        
        if (data.success && data.blog) {
          setBlog(data.blog);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError("Error fetching blog details");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetail();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white/40 text-sm">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-sm mb-4">{error || "Blog not found"}</p>
          <button
            onClick={() => router.push('/blogs')}
            className="text-white/40 hover:text-white text-sm underline"
          >
            Back to all articles
          </button>
        </div>
      </div>
    );
  }

  const formattedDate = formatDate(blog.createdAt);
  const readTime = getReadTime(blog.description);

  return (
    <div className="min-h-screen bg-[#0B0B0F]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Back to all articles</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/6">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 right-10 w-56 h-56 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 py-12">
          {/* Author info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold">
              {blog.author.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-white font-medium text-sm">{blog.author}</p>
              <p className="text-white/30 text-xs">Author</p>
            </div>
          </div>

          {/* Title */}
          <h1
            style={{ fontFamily: "'Sora', sans-serif" }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] mb-6"
          >
            {blog.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 mb-8">
            <span>{formattedDate}</span>
            <span>·</span>
            <span>{readTime}</span>
            {blog.metaKeywords && blog.metaKeywords.length > 0 && (
              <>
                <span>·</span>
                <div className="flex gap-2">
                  {blog.metaKeywords.slice(0, 3).map((keyword, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/30"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-8 border border-white/10">
            <img
              src={blog.image.url}
              alt={blog.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Description/Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            {blog.description}
          </p>
          
          {/* If you have full HTML content from API, render it here */}
          {blog.content && (
            <div 
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="text-white/70 leading-relaxed"
            />
          )}
        </div>

        {/* Meta information section */}
        {(blog.metaTitle || blog.metaDescription) && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-white font-semibold text-sm mb-4">Article Information</h3>
            <div className="space-y-3">
              {blog.metaTitle && (
                <div>
                  <p className="text-white/30 text-xs mb-1">Meta Title</p>
                  <p className="text-white/60 text-sm">{blog.metaTitle}</p>
                </div>
              )}
              {blog.metaDescription && (
                <div>
                  <p className="text-white/30 text-xs mb-1">Meta Description</p>
                  <p className="text-white/60 text-sm">{blog.metaDescription}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Share section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm mb-4">Share this article</p>
          <div className="flex gap-3">
            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="text-white/40 hover:text-white transition-colors"
            >
              Twitter
            </button>
            <button
              onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`, '_blank')}
              className="text-white/40 hover:text-white transition-colors"
            >
              LinkedIn
            </button>
            <button
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="text-white/40 hover:text-white transition-colors"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}