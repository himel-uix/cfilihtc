'use client';

import { Card } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: '🫀',
      title: 'হৃদয় স্বাস্থ্য',
      description: 'কোএনজাইম Q10 এবং অমেগা-3 দিয়ে সমৃদ্ধ',
    },
    {
      icon: '🧠',
      title: 'মস্তিষ্ক শক্তি',
      description: 'ফোকাস এবং স্মৃতিশক্তি বৃদ্ধি করতে সাহায্য করে',
    },
    {
      icon: '💪',
      title: 'পেশী শক্তি',
      description: 'প্রোটিন এবং ভিটামিন D এর সম্পূর্ণ ডোজ',
    },
    {
      icon: '⚡',
      title: 'শক্তি বৃদ্ধি',
      description: 'সারাদিন সক্রিয় থাকার জন্য B-কমপ্লেক্স ভিটামিন',
    },
    {
      icon: '🦴',
      title: 'হাড়ের শক্তি',
      description: 'ক্যালসিয়াম এবং ম্যাগনেসিয়াম সমৃদ্ধ',
    },
    {
      icon: '🛡️',
      title: 'রোগ প্রতিরোধ',
      description: 'প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট সহ শক্তিশালী ইমিউনিটি',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            আমাদের প্রধান সুবিধা
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            সম্পূর্ণ স্বাস্থ্যসেবার জন্য 6টি গুরুত্বপূর্ণ উপাদান
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all p-6 group"
            >
              <div className="space-y-4">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
