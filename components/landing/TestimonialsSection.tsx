'use client';

import { Card } from '@/components/ui/card';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'রফিকুল ইসলাম',
      city: 'ঢাকা',
      comment:
        'এই পণ্যটি আমার জীবনে সত্যিই পরিবর্তন এনেছে। আমি এখন আরও সক্রিয় এবং সুস্থ অনুভব করি।',
      rating: 5,
    },
    {
      name: 'করিম আহমেদ',
      city: 'চট্টগ্রাম',
      comment:
        'অসাধারণ পণ্য! দ্রুত ডেলিভারি এবং অসাধারণ গ্রাহক সেবা। আমি অত্যন্ত সন্তুষ্ট।',
      rating: 5,
    },
    {
      name: 'আব্দুল্লাহ খান',
      city: 'সিলেট',
      comment:
        'দীর্ঘদিন ধরে ব্যবহার করছি এবং ফলাফল দেখে অত্যন্ত খুশি। সবাইকে সুপারিশ করি।',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            আমাদের সন্তুষ্ট গ্রাহকরা কি বলছেন
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            হাজার হাজার খুশি গ্রাহক আমাদের পণ্য ব্যবহার করে তাদের জীবন পরিবর্তন করেছেন
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-background/50 p-6 flex flex-col space-y-4"
            >
              <div className="flex gap-1">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-xl text-primary">
                      ★
                    </span>
                  ))}
              </div>

              <p className="text-muted-foreground italic">
                &quot;{testimonial.comment}&quot;
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.city}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
