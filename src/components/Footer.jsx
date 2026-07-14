import React from "react";

export default function Footer() {
  const share = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Lihat ini!");
    let shareUrl = "";
    if (platform === "twitter") shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    if (platform === "facebook") shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (platform === "whatsapp") shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} Brand. All rights reserved.</div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button onClick={() => share('twitter')} className="text-sm px-3 py-2 bg-blue-400 text-white rounded">Twitter</button>
          <button onClick={() => share('facebook')} className="text-sm px-3 py-2 bg-blue-600 text-white rounded">Facebook</button>
          <button onClick={() => share('whatsapp')} className="text-sm px-3 py-2 bg-green-500 text-white rounded">WhatsApp</button>
        </div>
      </div>
    </footer>
  );
}
