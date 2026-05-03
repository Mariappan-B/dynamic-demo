import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

export default async function BlogListPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Blog Posts
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {posts.slice(0, 10).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="block p-5 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              {post.title}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Click to read →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}