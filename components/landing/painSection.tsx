import Image from "next/image"
import icon1 from "@/public/icons/painSectionIcon/icon1.png"
import icon2 from "@/public/icons/painSectionIcon/icon2.png"
import icon3 from "@/public/icons/painSectionIcon/icon3.png"

const PainSection = () => {
  const pains = [
    {
      id: 1,
      icon: icon1,
      title: "যৌ/ন শক্তি কমে গেছে",
      description: "আগের মতো শক্তি ও উদ্দীপনা নেই ফলে সম্পর্কে দূরত্ব তৈরি হচ্ছে"
    },
    {
      id: 2,
      icon: icon2,
      title: "খেলার শুরুতেই আউটের চিন্তা",
      description: "আত্মবিশ্বাস না থাকার কারণে মনোবল হারিয়ে যাচ্ছে"
    },
    {
      id: 3,
      icon: icon3,
      title: "শরীরে দুর্বলতা ও ক্লান্তি",
      description: "একটু খেলা করলেই হাঁপিয়ে পড়েন। শরীরে জোর পাচ্ছেন না।"
    }
  ];
  return (
    <section className="py-6 md:py-10 lg:py-20 bg-linear-to-b from-[#04060F] to-[#070B18]">
      <div className="container mx-auto px-5 space-y-4 lg:space-y-9">
        <div className='space-y-3 lg:space-y-4'>
          <span className="inline-block px-3.5 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold tracking-[0.8px] text-[11.5px] text-[#38BDF8]">আপনি কি এই সমস্যায় ভুগছেন?</span>
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#F8FAFC]">
            <span className="text-[#F87171]">এই কষ্টগুলো</span> কি <br /> আপনাকেও কাবু করছে? বিবাহর পর
          </h2>
          <span className="inline-block w-13 h-0.75 rounded-[2px] bg-linear-to-r from-[#0EA5E9] to-transparent"></span>
        </div>
        <div className="space-y-4 lg:space-y-11">
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#CBD5E1]">
            <span className="text-[#F8FAFC]">আপনি একা নন।</span> বাংলাদেশে লক্ষ লক্ষ পুরুষ এই সমস্যায় ভুগছেন - কিন্তু কোন সঠিক সমাধান পাচ্ছে না।
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {pains.map((pain) => (
              <div key={pain.id} className="px-4.5 py-5.5 rounded-lg bg-[#0F1523] border border-[#EF444424]">
                <div className="flex items-center justify-center mb-4">
                  <Image src={pain.icon} alt={pain.title} width={48} height={48} className="size-12" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base text-center font-bold text-[#F87171]">{pain.title}</h3>
                  <p className="max-w-8/12 text-sm text-center font-normal text-[#64748B] mx-auto">{pain.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="py-4 md:py-8.5 px-3 md:px-6.5 bg-[#141C2E] rounded-[20px] border border-[#0EA5E924]">
            <div className="max-w-[35.188rem] mx-auto">
              <h3 className="font-bold lg:text-xl lg:leading-8.5 text-center text-[#F8FAFC]">এগুলো আসলে <span className="text-[#38BDF8]">আপনার দোষ না</span> - শরীরে প্রয়োজনীয় পুষ্টির অভাবে হয়। শরীরে যখন <span className="text-[#38BDF8]">পুষ্টি ও মাইক্রোনিউট্রিয়েন্টের অভাব</span> পড়ে। <span className="text-[#38BDF8]">Men's 40+ Multivitamin</span> সেই ঘাটতিই পূরণ করে। </h3>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default PainSection