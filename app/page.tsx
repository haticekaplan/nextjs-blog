import React from 'react';
import Link from 'next/link';

function capitalizeTitle(title: string) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>📰 The Daily Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`} className="text-mahogany-700 hover:underline">
              {capitalizeTitle(post.title)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

