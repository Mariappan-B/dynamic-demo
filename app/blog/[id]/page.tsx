type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    return <div className="p-6">Post not found</div>;
  }

  const data = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6">
        
        <h1 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          {data.title}
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {data.body}
        </p>

        <div className="mt-6 text-sm text-gray-500">
          Post ID: {id}
        </div>

      </div>
    </div>
  );
}