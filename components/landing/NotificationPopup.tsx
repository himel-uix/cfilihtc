"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";



const NotificationPopup = () => {
    const names = ["শরিফুল", "নাজমুল", "মিরাজ হোসেন", "সাকিব", "আরিয়ান আহমেদ", "তানভীর রহমান"];
    const locations = ["মিরপুর", "ধানমন্ডি", "উত্তরা", "গুলশান", "পুরান ঢাকা", "মোহাম্মদপুর"];
    const products = ["প্রোডাক্টটি", "একটি আইটেম", "আমাদের বেস্টসেলার প্রোডাক্ট"];

    const [isVisible, setIsVisible] = useState(false);
    const [details, setDetails] = useState({ name: "", location: "", product: "" });

    useEffect(() => {
        const showTimer = setTimeout(() => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            const randomProduct = products[Math.floor(Math.random() * products.length)];

            setDetails({ name: randomName, location: randomLocation, product: randomProduct });
            setIsVisible(true);
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 3500);

            return () => clearTimeout(hideTimer);
        }, 3500);

        return () => clearTimeout(showTimer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-top-5 fade-in duration-500">
            <div className="bg-white rounded-lg shadow-2xl border-l-4 border-emerald-500 w-80 overflow-hidden">
                <div className="p-4">
                    <div className="flex items-center gap-3">
                        {/* আইকন */}
                        <div className="bg-emerald-50 text-emerald-500 rounded-full p-2 shrink-0">
                            <ShoppingBag className="w-5 h-5" />
                        </div>
                        <div className="flex-1 -space-y-px">
                            <p className="text-xs text-gray-600 mt-0.5">
                                <span className="font-semibold text-gray-800">{details.name}</span> 
                            </p>
                            <p className="text-emerald-600 font-medium">{details.location} থেকে কিনলেন।</p>
                        </div>
                    </div>
                </div>
                <div className="h-1 bg-gray-100">
                    <div className="h-full bg-emerald-500 animate-[shrink_3.5s_linear_forwards]" />
                </div>
            </div>

            <style jsx>{`
                @keyframes shrink {
                    from { width: 100%; }
                    to { width: 0%; }
                }
            `}</style>
        </div>
    );
}

export default NotificationPopup;