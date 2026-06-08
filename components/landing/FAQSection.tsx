'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'এটা কি সত্যিই যৌ/ন শক্তি বাড়ায়?',
      answer:
        'হ্যাঁ, প্রাকৃতিক উপাদানের সমন্বয়ে তৈরি, যা আপনার শারীরিক শক্তি ও কর্মক্ষমতা বাড়াতে সাহায্য করে। নিয়মিত সেবনে আপনি নিজেই এর ইতিবাচক পরিবর্তন অনুভব করতে পারবেন।',
    },
    {
      question: 'কতদিন খেলে ফলাফল পাব?',
      answer:
        'প্রথম দিন থেকেই আপনি পরিবর্তন অনুভব করতে পারবেন',
    },
    {
      question: 'কোনো পার্শ্বপ্রতিক্রিয়া আছে কি?',
      answer:
        'প্রাকৃতিক এবং নিরাপদ উপাদান দিয়ে তৈরি। সাধারণত এর কোনো গুরুতর পার্শ্বপ্রতিক্রিয়া নেই',
    },
    {
      question: 'কীভাবে খেতে হবে?',
      answer:
        'এটি ২ মাসের কোর্স। প্যাকেটে মোট ৩০টি ক্যাপসুল রয়েছে। একদিন পরপর রাতে খাবার শেষে ১টি করে ক্যাপসুল সেবন করুন।',
    },
    {
      question: 'ডেলিভারি কতদিনে পাব?',
      answer:
        'ঢাকার মধ্যে হলে একদিন এবং ঢাকার বাইরে হলে তিন দিন।',
    },
    {
      question: 'পেমেন্ট কীভাবে করব?',
      answer:
        'প্রোডাক্টটি হাতে পাওয়ার পর টাকা পরিশোধ করবেন ',
    },
    {
      question: 'কেউ জানবে না তো? গোপনীয়তা কি নিশ্চিত?',
      answer:
        'কেউ বুঝবে না শুধু আপনার পার্টনার বুঝবে',
    },
  ];

  return (
    <section className="py-6 md:py-10 lg:py-20 bg-background" id="faq-section">
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
