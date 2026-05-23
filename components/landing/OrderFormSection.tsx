'use client';

import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const PRODUCT_PRICE = 1500; // BDT

export function OrderFormSection() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const total = PRODUCT_PRICE * formData.quantity;

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          total,
        }),
      });

      if (!response.ok) {
        toast.error('অর্ডার করতে ব্যর্থ হয়েছে। দয়া করে আবার চেষ্টা করুন।');
        return;
      }

      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'AddToCart', {
          value: total,
          currency: 'BDT',
          content_name: 'Men\'s 40+ Multivitamin',
        });
      }

      toast.success('আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        quantity: 1,
      });
    } catch (error) {
      toast.error('একটি ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                আজই আপনার স্বাস্থ্য যাত্রা শুরু করুন
              </h2>
              <p className="text-lg text-muted-foreground">
                সীমিত সময়ের অফার - প্রথম ১০০০ ক্রেতার জন্য বিশেষ ছাড়
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-primary">✓</span>
                  <div>
                    <h4 className="font-semibold text-foreground">দ্রুত ডেলিভারি</h4>
                    <p className="text-muted-foreground text-sm">ঢাকা শহরে ২৪ ঘন্টায় ডেলিভারি</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-primary">✓</span>
                  <div>
                    <h4 className="font-semibold text-foreground">১০০% নিরাপদ পেমেন্ট</h4>
                    <p className="text-muted-foreground text-sm">সকল প্রধান পেমেন্ট পদ্ধতি গ্রহণযোগ্য</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-primary">✓</span>
                  <div>
                    <h4 className="font-semibold text-foreground">৩০ দিন মানি-ব্যাক গ্যারান্টি</h4>
                    <p className="text-muted-foreground text-sm">সন্তুষ্ট না হলে সম্পূর্ণ অর্থ ফেরত</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                onClick={scrollToForm}
              >
                এখনই অর্ডার করুন
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <Card
                ref={formRef}
                className="relative border-primary/50 bg-card p-8 space-y-6"
              >
                <h3 className="text-2xl font-bold text-foreground">দ্রুত অর্ডার ফর্ম</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">আপনার নাম *</label>
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

                  <div>
                    <label className="text-sm font-medium text-foreground">ইমেইল *</label>
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

                  <div>
                    <label className="text-sm font-medium text-foreground">মোবাইল নম্বর *</label>
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

                  <div>
                    <label className="text-sm font-medium text-foreground">ঠিকানা *</label>
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

                  <div>
                    <label className="text-sm font-medium text-foreground">পরিমাণ *</label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      disabled={loading}
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty} বোতল - ৳ {PRODUCT_PRICE * qty}
                        </option>
                      ))}
                    </select>
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
                    {loading ? 'প্রক্রিয়া করছে...' : 'এখনই অর্ডার করুন'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
