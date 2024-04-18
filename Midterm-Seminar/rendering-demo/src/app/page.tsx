import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 p-10">
      <h1 className="text-4xl text-blue-600">Group 2</h1>
      <div className="p-2">
        <Link href="/dashboard" className="text-lg text-blue-500 hover:underline"> Dashboard </Link>
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/0/00/Logo_UIT_updated.svg"
        alt="Image"
        width={200}
        height={200}
        layout="fixed"
      />
    </div>
  );
}
