import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white/60 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-lg">Brand</div>
        <div className="space-x-4">
          <a href="#home" className="text-sm hover:underline">Home</a>
          <a href="#features" className="text-sm hover:underline">Features</a>
          <a href="#products" className="text-sm hover:underline">Products</a>
        </div>
      </div>
    </nav>
  );
}
