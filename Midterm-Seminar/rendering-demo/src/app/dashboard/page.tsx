"use client";

import { useState } from "react";

export default function DashboardPage() {
  console.log("Hello server");
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <h1 className="text-2xl font-bold mb-4">Dashboard Page</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <p className="text-xl">Hello, {name}!</p>
    </div>
  );
}
