'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'এই পণ্যটি কত বয়সী মানুষের জন্য?',
      answer:
        'এই পণ্যটি বিশেষভাবে ৪০+ বছর বয়সী পুরুষদের জন্য ডিজাইন করা হয়েছে, কিন্তু যেকোনো বয়সের প্রাপ্তবয়স্করা এটি ব্যবহার করতে পারেন।',
    },
    {
      question: 'এর পার্শ্বপ্রতিক্রিয়া আছে কি?',
      answer:
        'এটি সম্পূর্ণ প্রাকৃতিক উপাদান দিয়ে তৈরি এবং চিকিৎসকদের দ্বারা পরীক্ষিত। কোনো জানা পার্শ্বপ্রতিক্রিয়া নেই, তবে সংবেদনশীল ব্যক্তিরা প্রথম ব্যবহারের আগে একজন চিকিৎসকের পরামর্শ নিন।',
    },
    {
      question: 'কত দিনে ফলাফল দেখতে পাব?',
      answer:
        'সাধারণত ৩০ দিনের মধ্যে ফলাফল দেখতে পাওয়া যায়, তবে প্রতিটি ব্যক্তির শরীর ভিন্ন, তাই ৬০-৯০ দিন নিয়মিত ব্যবহার করার সুপারিশ করা হয়।',
    },
    {
      question: 'কিভাবে এটি সংরক্ষণ করতে হবে?',
      answer:
        'এটি ঠান্ডা এবং শুষ্ক জায়গায় রাখুন, সরাসরি রোদ থেকে দূরে। শিশুদের নাগালের বাইরে রাখুন।',
    },
    {
      question: 'প্রতিদিন কত ট্যাবলেট খেতে হবে?',
      answer:
        'প্রতিদিন ২টি ট্যাবলেট খাবারের পরে নিন। বিস্তারিত নির্দেশনার জন্য প্যাকেজিংয়ের লেবেল দেখুন অথবা আমাদের সাথে যোগাযোগ করুন।',
    },
    {
      question: 'অর্থ ফেরত গ্যারান্টি কি?',
      answer:
        'হ্যাঁ, আপনি ৩০ দিনের মধ্যে যদি সন্তুষ্ট না হন তাহলে আমরা সম্পূর্ণ অর্থ ফেরত দেব, কোনো প্রশ্ন জিজ্ঞাসা করা হবে না।',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            সাধারণ প্রশ্নাবলী
          </h2>
          <p className="text-xl text-muted-foreground">
            আপনার সমস্ত প্রশ্নের উত্তর এখানে পাবেন
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`text-primary text-2xl flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </div>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
