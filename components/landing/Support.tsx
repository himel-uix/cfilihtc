import icon1 from "@/public/icons/supportSection/security.png"
import icon2 from "@/public/icons/supportSection/run.png"
import icon3 from "@/public/icons/supportSection/market.png"
import icon4 from "@/public/icons/supportSection/medicine.png"
import Image from 'next/image'

const Support = () => {
    const supportItems = [
        {
            id: 1,
            icon: icon1,
            title: "ইমিউনিটি সাপোর্ট"
        },
        {
            id: 2,
            icon: icon2,
            title: "এনার্জি ও স্ট্যামিনা সাপোর্ট"
        },
        {
            id: 3,
            icon: icon3,
            title: "দৈনন্দিন পারফরম্যান্স সাপোর্ট"
        },
        {
            id: 4,
            icon: icon4,
            title: "২০+ ভিটামিন ও মিনারেলস"
        },
    ]
  return (
    <section className='py-6 bg-[#0F1523] border-y border-[#0EA5E952]'>
        <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-11">
            {supportItems.map((item)=>(
                    <div className='flex items-center gap-3 md:pr-4 lg:pr-11 sm:border-r border-white last:pr-0 last:border-r-0' key={item.id}>
                        <Image src={item.icon} alt={item.title} width={64} height={64} className='size-8 md:size-10 lg:size-16' />
                        <h3 className='font-medium text-sm md:text-xl lg:text-2xl text-white'>{item.title}</h3>
                    </div>
                ))}
        </div>
    </section>
  )
}

export default Support