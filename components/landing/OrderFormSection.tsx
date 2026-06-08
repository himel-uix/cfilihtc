"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import formImage from "@/public/images/form-img.png";

const PRODUCT_PRICE = 2999; // BDT

export function OrderFormSection() {
    const formRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        quantity: 1,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "quantity" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const total = PRODUCT_PRICE * formData.quantity;

            const response = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    total,
                }),
            });

            if (!response.ok) {
                toast.error("অর্ডার করতে ব্যর্থ হয়েছে। দয়া করে আবার চেষ্টা করুন।");
                return;
            }

            if (typeof window !== "undefined" && (window as any).fbq) {
                (window as any).fbq("track", "Purchase", {
                    value: total,
                    currency: "USD",
                    content_name: "Men's 40+ Multivitamin",
                });
            }

            toast.success("আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।");
            setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                quantity: 1,
            });
        } catch (error) {
            toast.error("একটি ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="py-6 md:py-10 lg:py-20 bg-linear-to-b from-background to-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                    <div className="space-y-3 lg:space-y-4 text-center">
                        <span className="inline-block px-3.5 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold tracking-[0.8px] text-xs text-[#38BDF8]">
                            অর্ডার করুন
                        </span>
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold">
                            এখনই
                            <span className="text-[#38BDF8]">অর্ডার দিন</span>
                            <br />
                            ঘরে বসে পেয়ে যান
                        </h2>
                        <span className="inline-block w-13 h-0.75 rounded-[2px] bg-linear-to-r from-[#0EA5E9] to-transparent"></span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12 bg-[#0F1523] border border-[#0EA5E952] shadow-[0px_0px_24px_rgba(14,165,233,0.38)] rounded-3xl overflow-hidden">
                        <div className="space-y-6">
                            <Image
                                className="w-full h-full"
                                src={formImage}
                                alt="form image"
                                width={632}
                                height={930}
                            />
                        </div>
                        <div className="px-5 md:px-8 lg:px-10 pt-2 md:pt-16 lg:pt-24 pb-8 md:pb-10 lg:pb-12 grow space-y-6">
                            <div className="space-y-1.5">
                                <h2 className="font-bold text-xl md:text-2xl lg:text-[28px] lg:leading-11 text-center text-[#F8FAFC]">
                                    আপনার অর্ডার ফর্ম
                                </h2>
                                <p className="font-normal text-xs md:text-sm lg:text-base text-center text-[#64748B]">
                                    সব তথ্য সঠিক দিন - আমরা কল করে কনফার্ম করব
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-foreground inline-block">
                                        আপনার নাম *
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="আপনার সম্পূর্ণ নাম"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-foreground inline-block">
                                        ইমেইল *
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="আপনার ইমেইল"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-foreground inline-block">
                                        মোবাইল নম্বর *
                                    </label>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="0১ XXX XXX XXX"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-foreground inline-block">
                                        ঠিকানা *
                                    </label>
                                    <Input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="আপনার সম্পূর্ণ ঠিকানা"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-foreground inline-block">
                                        পরিমাণ *
                                    </label>
                                    <div className="flex items-center gap-0 border border-border rounded-md overflow-hidden w-full">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    quantity: Math.max(1, prev.quantity - 1),
                                                }))
                                            }
                                            disabled={loading || formData.quantity <= 1}
                                            className="px-4 py-2 bg-input text-foreground hover:bg-muted disabled:opacity-40 transition-colors text-lg font-medium"
                                        >
                                            −
                                        </button>
                                        <div className="px-6 py-2 bg-background text-foreground font-semibold text-lg min-w-[60px] text-center select-none w-full">
                                            {formData.quantity}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    quantity: prev.quantity + 1,
                                                }))
                                            }
                                            disabled={loading}
                                            className="px-4 py-2 bg-input text-foreground hover:bg-muted transition-colors text-lg font-medium"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-primary/10 border border-primary/20 rounded-md p-4">
                                    <p className="text-sm text-muted-foreground">মোট মূল্য:</p>
                                    <p className="text-2xl font-bold text-primary">
                                        ৳ {PRODUCT_PRICE * formData.quantity}
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                    disabled={loading}
                                >
                                    {loading ? "প্রক্রিয়া করছে..." : "এখনই অর্ডার করুন"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
