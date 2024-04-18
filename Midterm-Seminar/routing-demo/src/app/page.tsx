import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <h2>
        <Link href="/blog">Blog</Link>
      </h2>
      <h2>
        <Link href="/news">News</Link>
      </h2>
      <h2>
        <Link href="/products">Products</Link>
      </h2>
    </div>
  );
}
