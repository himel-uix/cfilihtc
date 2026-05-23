'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function HeroSection({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-card to-background relative overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
                পুরুষদের স্বাস্থ্য এবং শক্তির জন্য প্রিমিয়াম সমাধান
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Men&apos;s 40+ Multivitamin - আপনার সুস্বাস্থ্য এবং প্রাণবন্ততার জন্য বিশেষভাবে ডিজাইন করা
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                onClick={onOrderClick}
              >
                এখনই অর্ডার করুন
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                আরও জানুন
              </Button>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>প্রাকৃতিক উপাদান দিয়ে তৈরি</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>চিকিৎসক দ্বারা অনুমোদিত</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>সম্পূর্ণ নিরাপদ এবং প্রমাণিত</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <Card className="relative border-primary/50 bg-card/50 backdrop-blur p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">💊</div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Men&apos;s 40+ Multivitamin</h3>
                <p className="text-muted-foreground">আপনার সর্বোত্তম স্বাস্থ্যের জন্য সম্পূর্ণ সমাধান</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
