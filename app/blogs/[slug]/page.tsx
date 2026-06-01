import BlogDetailClient from './BlogDetailClient';

// // Required for static export with dynamic routes
// export async function generateStaticParams() {
//   // Return empty array for client-side fetching
  
//   return [];
// }

// export default async function Page({ params }: { params: { slug: string } }) {
//       const { slug } = await params;
//       console.log(slug)
//   return <BlogDetailClient slug={params.slug} />;
// }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log(slug);
  return <BlogDetailClient slug={slug} />; // ← use slug, not params.slug
}