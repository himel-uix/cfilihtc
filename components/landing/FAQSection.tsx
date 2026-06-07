'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'এটা কি সত্যিই যৌ/ন শক্তি বাড়ায়?',
      answer:
        'এই পণ্যটি বিশেষভাবে ৪০+ বছর বয়সী পুরুষদের জন্য ডিজাইন করা হয়েছে, কিন্তু যেকোনো বয়সের প্রাপ্তবয়স্করা এটি ব্যবহার করতে পারেন।',
    },
    {
      question: 'কতদিন খেলে ফলাফল পাব?',
      answer:
        'এটি সম্পূর্ণ প্রাকৃতিক উপাদান দিয়ে তৈরি এবং চিকিৎসকদের দ্বারা পরীক্ষিত। কোনো জানা পার্শ্বপ্রতিক্রিয়া নেই, তবে সংবেদনশীল ব্যক্তিরা প্রথম ব্যবহারের আগে একজন চিকিৎসকের পরামর্শ নিন।',
    },
    {
      question: 'কোনো পার্শ্বপ্রতিক্রিয়া আছে কি?',
      answer:
        'সাধারণত ৩০ দিনের মধ্যে ফলাফল দেখতে পাওয়া যায়, তবে প্রতিটি ব্যক্তির শরীর ভিন্ন, তাই ৬০-৯০ দিন নিয়মিত ব্যবহার করার সুপারিশ করা হয়।',
    },
    {
      question: 'কীভাবে খেতে হবে?',
      answer:
        'এটি ঠান্ডা এবং শুষ্ক জায়গায় রাখুন, সরাসরি রোদ থেকে দূরে। শিশুদের নাগালের বাইরে রাখুন।',
    },
    {
      question: 'ডেলিভারি কতদিনে পাব?',
      answer:
        'প্রতিদিন ২টি ট্যাবলেট খাবারের পরে নিন। বিস্তারিত নির্দেশনার জন্য প্যাকেজিংয়ের লেবেল দেখুন অথবা আমাদের সাথে যোগাযোগ করুন।',
    },
    {
      question: 'পেমেন্ট কীভাবে করব?',
      answer:
        'হ্যাঁ, আপনি ৩০ দিনের মধ্যে যদি সন্তুষ্ট না হন তাহলে আমরা সম্পূর্ণ অর্থ ফেরত দেব, কোনো প্রশ্ন জিজ্ঞাসা করা হবে না।',
    },
    {
      question: 'কেউ জানবে না তো? গোপনীয়তা কি নিশ্চিত?',
      answer:
        'হ্যাঁ, আপনি ৩০ দিনের মধ্যে যদি সন্তুষ্ট না হন তাহলে আমরা সম্পূর্ণ অর্থ ফেরত দেব, কোনো প্রশ্ন জিজ্ঞাসা করা হবে না।',
    },
  ];

  return (
    <section className="py-6 md:py-10 lg:py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-10 lg:space-y-16">
        <div className='space-y-3 lg:space-y-4'>
          <span className="inline-block px-3.5 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold tracking-[0.8px] text-xs text-[#38BDF8]">সাধারণ প্রশ্নোত্তর</span>
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#F8FAFC]">
           আপনার মনে যে <span className='text-[#38BDF8]'>প্রশ্নগুলো</span> আসছে
          </h2>
          <span className="inline-block w-13 h-0.75 rounded-[2px] bg-linear-to-r from-[#0EA5E9] to-transparent"></span>
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
              <div className="px-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`text-primary text-2xl shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                    }`}
                >
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>

              {openIndex === index && (
                <div className="px-6 pt-6 pb-6 border-t border-border text-muted-foreground">
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
