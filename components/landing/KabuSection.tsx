import Image from "next/image";
import { Badge } from "../ui/badge";

function KabuSection() {
    return (
        <section>
            <div className="container mx-auto px-5 space-y-2">
                <Badge variant={"default"} className="text-md border-2 font-bold">
                    আপনি কি এই সমস্যায় ভুগছেন?
                </Badge>
                <h2 className="text-5xl font-bold my-8">
                    <span className="text-red-400">এই কষ্টগুলো</span> কি আপনাকেও কাবু করছে? বিবাহর
                    পর
                </h2>
                <p className="font-bold">
                    আপনি একা নন। বাংলাদেশে লক্ষ লক্ষ পুরুষ এই সমস্যায় ভুগছেন - কিন্তু কোন সঠিক
                    সমাধান পাচ্ছে না ।
                </p>
                <div className="grid grid-cols-3 gap-2">
                    <Image src={"/images/kabu-img1.png"} alt="" width={325} height={180} />
                    <Image src={"/images/kabu-img2.png"} alt="" width={325} height={180} />
                    <Image src={"/images/kabu-img3.png"} alt="" width={325} height={180} />
                </div>
                <div className="text-center bg-primary/20 rounded-xl">
                    <h4>
                        এগুলো আসলে <span className="text-primary">আপনার দোষ না</span> - শরীরে
                        প্রয়োজনীয় পুষ্টির অভাবে হয়। শরীরে যখন{" "}
                        <span className="text-primary">পুষ্টি ও মাইক্রোনিউট্রিয়েন্টের অভাব</span>
                        পড়ে। <span className="text-primary">Men's 40+ Multivitamin</span> সেই
                        ঘাটতিই পূরণ করে।
                    </h4>
                </div>
            </div>
        </section>
    );
}

export default KabuSection;
