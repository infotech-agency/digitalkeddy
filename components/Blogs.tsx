// "use client"
// import React, { useState } from "react";

// const CATEGORIES = ["All", "Design", "Technology", "Culture", "Business", "Creative"];

// const posts = [
//   {
//     id: 1,
//     category: "Design",
//     date: "May 20, 2026",
//     readTime: "5 min",
//     title: "The Art of Minimalist UI: Less Is More",
//     excerpt: "Explore how stripping away the unnecessary reveals the essential — and why the most powerful interfaces speak through silence.",
//     author: { name: "Aria Chen", role: "Design Lead", gradient: "from-violet-500 to-indigo-500" },
//     tag: "Featured",
//     tagColor: "bg-violet-500/15 text-violet-400",
//     accentColor: "bg-violet-500",
//     image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
//   },
//   {
//     id: 2,
//     category: "Technology",
//     date: "May 18, 2026",
//     readTime: "4 min",
//     title: "AI-Driven Creativity: The New Frontier",
//     excerpt: "How machine intelligence is augmenting human expression, not replacing it. A deep dive into the tools reshaping creative workflows.",
//     author: { name: "Luca Moretti", role: "Tech Writer", gradient: "from-sky-500 to-cyan-500" },
//     tag: "Trending",
//     tagColor: "bg-sky-500/15 text-sky-400",
//     accentColor: "bg-sky-500",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
//   },
//   {
//     id: 3,
//     category: "Culture",
//     date: "May 15, 2026",
//     readTime: "6 min",
//     title: "Typography as a Living Language",
//     excerpt: "Letters aren't just vessels for words — they carry emotion, rhythm, and the pulse of an era. How type shapes our perception.",
//     author: { name: "Maya Rivers", role: "Editor", gradient: "from-rose-500 to-pink-500" },
//     tag: "Editor's Pick",
//     tagColor: "bg-rose-500/15 text-rose-400",
//     accentColor: "bg-rose-500",
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
//   },
//   {
//     id: 4,
//     category: "Business",
//     date: "May 12, 2026",
//     readTime: "7 min",
//     title: "Building Products People Actually Love",
//     excerpt: "The gap between good and great products isn't features — it's empathy. Here's how top teams think about their users differently.",
//     author: { name: "James Park", role: "Product Strategist", gradient: "from-amber-500 to-orange-500" },
//     tag: "New",
//     tagColor: "bg-amber-500/15 text-amber-400",
//     accentColor: "bg-amber-500",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//   },
//   {
//     id: 5,
//     category: "Creative",
//     date: "May 10, 2026",
//     readTime: "3 min",
//     title: "Motion Design: Breathing Life Into Static Screens",
//     excerpt: "Animation isn't decoration — it's communication. How motion guides users, builds trust, and makes interfaces feel alive.",
//     author: { name: "Sofia Reyes", role: "Motion Designer", gradient: "from-emerald-500 to-teal-500" },
//     tag: "Popular",
//     tagColor: "bg-emerald-500/15 text-emerald-400",
//     accentColor: "bg-emerald-500",
//     image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
//   },
//   {
//     id: 6,
//     category: "Design",
//     date: "May 8, 2026",
//     readTime: "5 min",
//     title: "Color Theory in the Age of Dark Mode",
//     excerpt: "Dark interfaces demand a rethinking of color relationships. A practical guide to designing for both light and dark with elegance.",
//     author: { name: "Aria Chen", role: "Design Lead", gradient: "from-violet-500 to-indigo-500" },
//     tag: "Guide",
//     tagColor: "bg-purple-500/15 text-purple-400",
//     accentColor: "bg-purple-500",
//     image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
//   },
//   {
//     id: 7,
//     category: "Technology",
//     date: "May 5, 2026",
//     readTime: "8 min",
//     title: "The Future of Web Performance",
//     excerpt: "Speed is a feature. Every millisecond matters — and here's how the best engineering teams are thinking about performance in 2026.",
//     author: { name: "Luca Moretti", role: "Tech Writer", gradient: "from-sky-500 to-cyan-500" },
//     tag: "Deep Dive",
//     tagColor: "bg-sky-500/15 text-sky-400",
//     accentColor: "bg-sky-500",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
//   },
//   {
//     id: 8,
//     category: "Culture",
//     date: "May 2, 2026",
//     readTime: "4 min",
//     title: "Remote Work and the Redefinition of Presence",
//     excerpt: "As distributed teams become the norm, what does it mean to truly be 'there'? Rethinking presence, collaboration, and belonging.",
//     author: { name: "Maya Rivers", role: "Editor", gradient: "from-rose-500 to-pink-500" },
//     tag: "Opinion",
//     tagColor: "bg-rose-500/15 text-rose-400",
//     accentColor: "bg-rose-500",
//     image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
//   },
// ];

// function Avatar({ name, gradient }: { name: string; gradient: string }) {
//   const initials = name.split(" ").map((n) => n[0]).join("");
//   return (
//     <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
//       {initials}
//     </div>
//   );
// }

// function BlogCard({ post }: { post: (typeof posts)[0] }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <article
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-pointer"
//     >
//       {/* Image */}
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-full object-cover transition-transform duration-700 ease-out"
//           style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent" />
//         <div className="absolute top-3 left-3 flex items-center gap-2">
//           <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${post.tagColor}`}>
//             {post.tag}
//           </span>
//         </div>
//         <div className="absolute bottom-3 left-3">
//           <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
//             {post.category}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col flex-1 p-5">
//         <h2
//           style={{ fontFamily: "'Sora', sans-serif" }}
//           className="text-white font-bold text-base leading-snug mb-2.5 group-hover:text-white/90 transition-colors line-clamp-2"
//         >
//           {post.title}
//         </h2>

//         <p className="text-white/35 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
//           {post.excerpt}
//         </p>

//         <div className="flex items-center justify-between pt-4 border-t border-white/6">
//           <div className="flex items-center gap-2">
//             <Avatar name={post.author.name} gradient={post.author.gradient} />
//             <div>
//               <p className="text-white/70 text-xs font-medium leading-none mb-0.5">{post.author.name}</p>
//               <p className="text-white/25 text-[10px]">{post.author.role}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 text-white/25 text-xs">
//             <span>{post.date}</span>
//             <span>·</span>
//             <span>{post.readTime} read</span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function BlogPage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [search, setSearch] = useState("");

//   const filtered = posts.filter((p) => {
//     const matchCat = activeCategory === "All" || p.category === activeCategory;
//     const matchSearch =
//       search === "" ||
//       p.title.toLowerCase().includes(search.toLowerCase()) ||
//       p.excerpt.toLowerCase().includes(search.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   return (
//     <div className="min-h-screen bg-[#0B0B0F]" style={{ fontFamily: "'Inter', sans-serif" }}>
//       {/* Hero */}
//       <div className="relative overflow-hidden border-b border-white/6">
//         {/* Gradient orbs */}
//         <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute -top-10 right-10 w-56 h-56 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

//         <div className="relative max-w-5xl mx-auto px-6 py-16">
//           <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
//             Our Journal
//           </p>
//           <h1
//             style={{ fontFamily: "'Sora', sans-serif" }}
//             className="text-white text-5xl font-bold tracking-tight leading-[1.1] mb-4"
//           >
//             Stories worth
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400"> your attention</span>
//           </h1>
//           <p className="text-white/35 text-base max-w-xl mb-8">
//             Thoughtfully written articles on design, technology, and culture — curated for curious minds.
//           </p>

//           {/* Search */}
//           <div className="relative max-w-sm">
//             <svg
//               className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
//               width="15"
//               height="15"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <circle cx="11" cy="11" r="8" />
//               <path d="m21 21-4.35-4.35" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search articles..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full bg-white/6 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="sticky top-0 z-20 bg-[#0B0B0F]/90 backdrop-blur-md border-b border-white/6">
//         <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
//           {CATEGORIES.map((cat) => {
//             const active = activeCategory === cat;
//             return (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${
//                   active
//                     ? "bg-white text-black border-white"
//                     : "text-white/40 border-white/10 hover:text-white/70 hover:border-white/20"
//                 }`}
//               >
//                 {cat}
//                 {cat !== "All" && (
//                   <span className={`ml-1.5 text-[10px] ${active ? "text-black/50" : "text-white/20"}`}>
//                     {posts.filter((p) => p.category === cat).length}
//                   </span>
//                 )}
//               </button>
//             );
//           })}

//           <span className="ml-auto shrink-0 text-white/20 text-xs">
//             {filtered.length} article{filtered.length !== 1 ? "s" : ""}
//           </span>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="max-w-5xl mx-auto px-6 py-10">
//         {filtered.length === 0 ? (
//           <div className="text-center py-24">
//             <p className="text-white/20 text-4xl mb-4">¯\_(ツ)_/¯</p>
//             <p className="text-white/40 text-sm">No articles found. Try a different filter.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {filtered.map((post) => (
//               <BlogCard key={post.id} post={post} />
//             ))}
//           </div>
//         )}

//         {/* Load more */}
//         {filtered.length > 0 && (
//           <div className="flex justify-center mt-12">
//             <button className="text-sm text-white/40 hover:text-white border border-white/10 hover:border-white/20 px-8 py-3 rounded-full transition-all duration-300">
//               Load more articles
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import { BASE_URL } from "@/app/config/baseUrl";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// Define the blog type based on your API response
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
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
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

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  
  // Generate a random gradient based on name
  const gradients = [
    "from-violet-500 to-indigo-500",
    "from-sky-500 to-cyan-500",
    "from-rose-500 to-pink-500",
    "from-amber-500 to-orange-500",
    "from-emerald-500 to-teal-500",
    "from-purple-500 to-indigo-500",
  ];
  const gradientIndex = name.length % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <div
      className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}
    >
      {initials}
    </div>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  const [hovered, setHovered] = useState(false);
  const readTime = getReadTime(blog.description);
  const formattedDate = formatDate(blog.createdAt);
   const router = useRouter(); // Add this
  // Generate a random tag for variety (optional)
  const tags = ["Featured", "Trending", "Editor's Pick", "New", "Popular", "Guide"];
  const tagColors = [
    "bg-violet-500/15 text-violet-400",
    "bg-sky-500/15 text-sky-400",
    "bg-rose-500/15 text-rose-400",
    "bg-amber-500/15 text-amber-400",
    "bg-emerald-500/15 text-emerald-400",
    "bg-purple-500/15 text-purple-400",
  ];
  const tagIndex = blog._id.length % tags.length;
  const tag = tags[tagIndex];
  const tagColor = tagColors[tagIndex];

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
       onClick={() => router.push(`/blogs/${blog.slug}`)}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image.url}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${tagColor}`}
          >
            {tag}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
            {formattedDate}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h2
          style={{ fontFamily: "'Sora', sans-serif" }}
          className="text-white font-bold text-base leading-snug mb-2.5 group-hover:text-white/90 transition-colors line-clamp-2"
        >
          {blog.title}
        </h2>

        <p className="text-white/35 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
          {blog.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/6">
          <div className="flex items-center gap-2">
            <Avatar name={blog.author} />
            <div>
              <p className="text-white/70 text-xs font-medium leading-none mb-0.5">
                {blog.author}
              </p>
              <p className="text-white/25 text-[10px]">Author</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/25 text-xs">
            <span>{formattedDate}</span>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/blogs`) 
        // fetch("http://localhost:5000/api/blogs");
        const data = await response.json();
        
        if (data.success) {
          setBlogs(data.blogs);
        } else {
          setError("Failed to fetch blogs");
        }
      } catch (err) {
        setError("Error connecting to the server");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on search
  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch =
      search === "" ||
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white/40 text-sm">Loading stories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-sm mb-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-white/40 hover:text-white text-sm underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0F]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/6">
        {/* Gradient orbs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 right-10 w-56 h-56 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Journal
          </p>
          <h1
            style={{ fontFamily: "'Sora', sans-serif" }}
            className="text-white text-5xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            Stories worth
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              {" "}
              your attention
            </span>
          </h1>
          <p className="text-white/35 text-base max-w-xl mb-8">
            Thoughtfully written articles on design, technology, and culture — curated for curious minds.
          </p>

          {/* Search */}
          <div className="relative max-w-sm">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search articles by title, author, or content..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/6 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-white/30 text-sm">
            Showing {filteredBlogs.length} of {blogs.length} articles
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-white/20 text-4xl mb-4">¯\_(ツ)_/¯</p>
            <p className="text-white/40 text-sm">
              No articles found matching your search. Try different keywords.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}

        {/* Load more - Optional: implement pagination if your API supports it */}
        {filteredBlogs.length > 0 && filteredBlogs.length < blogs.length && (
          <div className="flex justify-center mt-12">
            <button className="text-sm text-white/40 hover:text-white border border-white/10 hover:border-white/20 px-8 py-3 rounded-full transition-all duration-300">
              Load more articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}