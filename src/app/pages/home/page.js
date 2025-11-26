import React from 'react';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import BottomNav from '../../components/Menu';
import Image from 'next/image';

const categories = ['all', 'by myself', 'chocolate', 'strawberry'];
const products = [
  { name: 'choccolate', type: 'ice cream', price: '2.89 - 4.50 $' },
  { name: 'vanilla', type: 'ice cream', price: '2.89 - 4.50 $' },
  { name: 'cookies & cream', type: 'ice cream', price: '2.89 - 4.50 $' },
  { name: 'matcha green tea', type: 'ice cream', price: '2.89 - 4.50 $' },
];

const ProductCard = ({ product }) => (
  <div className="w-1/2 p-2">
    <div className="aspect-square bg-gray-300 rounded-2xl shadow-md overflow-hidden relative">
      <div className="flex items-center justify-center h-full text-xs text-gray-500">
        {product.name}
      </div>
    </div>

    <p className="mt-2 mb-0 text-[#2C3E50] text-sm">
      {product.name}
    </p>
    <p className="text-xs text-gray-500">{product.type}</p>
    <p className="font-semibold text-sm text-[#87373b]">
      {product.price}
    </p>
  </div>
);

export default function IceCreamShopPage() {
  return (
    <div
      className="max-w-[430px] mx-auto h-screen flex flex-col shadow-2xl"
      style={{ backgroundColor: '#FFF8F0' }}
    >
      {/* Header Area */}
      <header
        className="pt-5 px-4 pb-4"
        style={{ backgroundColor: '#2C3E50' }}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-lg font-semibold tracking-wide">XXXXX XXX</h1>
          <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
        </div>

        {/* Search Bar */}
        <div
          className="rounded-xl h-12 flex items-center px-4 mb-4"
          style={{ backgroundColor: '#87373b' }}
        >
          <Search size={20} color="#FFFFFF" strokeWidth={2} />
          <input
            type="text"
            placeholder="search ice-cream"
            className="grow ml-3 border-none bg-transparent text-white placeholder-white/90 text-sm focus:outline-none"
          />
          <SlidersHorizontal size={20} color="#FFFFFF" strokeWidth={2} />
        </div>

        {/* Banner Image */}
        <div className="relative rounded-2xl overflow-hidden h-32 bg-gray-400">
          <div className="w-full h-full flex items-center justify-center text-white text-sm">
            Banner Image
          </div>
          <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white">
            <ChevronLeft size={24} strokeWidth={2} />
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grow overflow-y-auto pt-4 pb-4">
        {/* Category Tabs */}
        <nav className="flex overflow-x-auto whitespace-nowrap px-4 mb-4 space-x-2 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`
                rounded-full py-2 px-5 text-sm font-medium shrink-0 transition-all border
                ${index === 0
                  ? 'bg-white text-[#2C3E50] border-[#2C3E50] shadow-sm'
                  : 'bg-transparent text-gray-700 border-gray-300'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Product Grid */}
        <div className="flex flex-wrap px-2">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}