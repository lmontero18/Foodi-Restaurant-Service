import React from "react";

function MessageBubble() {
  return (
    <div className="flex items-center justify-center rounded-full shadow-xl shadow-black-200 bg-white p-4 w-max absolute top-60">
      <span className="text-red-500 font-semibold">Hot spicy Food 🌶️</span>
      <div className="absolute bottom-0 right-[3px] border-t-[26px] border-t-transparent border-r-[22px] border-r-white border-b-[18px] border-b-transparent translate-x-[-2px] translate-y-1"></div>{" "}
    </div>
  );
}

export default MessageBubble;
