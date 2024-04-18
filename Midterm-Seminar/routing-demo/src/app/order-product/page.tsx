"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../../../styles/styles.css";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/blog");
  };

  useEffect(() => {
    router.prefetch("/blog");
  }, [router]);
  return (
    <>
      <h1>Order product page</h1>
      <button onClick={handleClick} className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place Order</button>
    </>
  );
}
