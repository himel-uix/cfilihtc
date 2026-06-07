"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { handleOrderClick } from "@/lib/utils";
import { X, ShoppingBag, Timer } from "lucide-react";

function NotificationPopup() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const showTimer = setTimeout(() => {
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
            <div className="bg-white rounded-lg shadow-2xl border-l-4 border-primary w-96 overflow-hidden">
                <div className="p-4">
                    <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div className="bg-primary/10 rounded-full p-2">
                            <ShoppingBag className="w-5 h-5 text-primary" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="font-bold text-gray-900">স্পেশাল অফার! 🎉</h4>
                                <button 
                                    onClick={() => setIsVisible(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                আপনার জন্য বিশেষ ডিসকাউন্ট
                            </p>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="line-through text-gray-400 text-sm">৳৫,৯৯৮</span>
                                <span className="text-xl font-bold text-primary">৳২,৯৯৯</span>
                            </div>
                            <Button
                                size="sm"
                                className="bg-primary hover:bg-primary/90 w-full text-white font-semibold text-sm"
                                onClick={handleOrderClick}
                            >
                                এখনই অর্ডার করুন
                            </Button>
                        </div>
                    </div>
                </div>
                
                {/* Progress bar */}
                <div className="h-1 bg-gray-100">
                    <div className="h-full bg-primary animate-[shrink_3.5s_linear_forwards]" />
                </div>
            </div>

            <style jsx>{`
                @keyframes shrink {
                    from {
                        width: 100%;
                    }
                    to {
                        width: 0%;
                    }
                }
            `}</style>
        </div>
    );
}

export default NotificationPopup;