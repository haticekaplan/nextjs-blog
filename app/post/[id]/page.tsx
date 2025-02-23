import React from 'react';
import BackButton from '@/components/BackButton';

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function capitalizeTitle(title: string) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <main>
      <h1 className="text-4xl font-bold"> {capitalizeTitle(post.title)}</h1>
      <p className="text-lg">{capitalizeFirstLetter(post.body)}</p>
      <BackButton />
    </main>
  );
}
