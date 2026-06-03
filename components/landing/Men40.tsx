import Image from "next/image";
import { Badge } from "../ui/badge";

function Men40() {
    return (
        <section>
            <div className="container mx-auto px-5 space-y-2">
                <Badge variant={"default"} className="text-md border-2 font-bold">
                    সমাধান এখানেই
                </Badge>
                <h2 className="text-5xl font-bold my-8">
                    কেন <span className="text-primary">Men's 40+</span> সবার থেকে আলাদা?
                </h2>
                <div className="grid grid-cols-2 gap-2">
                    <Image src={"/images/men-40.png"} alt="" width={534} height={616} />
                    <div>
                        <Image src={"/images/men-40-s1.png"} alt="" width={438} height={130} />
                        <Image src={"/images/men-40-s2.png"} alt="" width={438} height={130} />
                        <Image src={"/images/men-40-s3.png"} alt="" width={438} height={130} />
                        <Image src={"/images/men-40-s4.png"} alt="" width={438} height={130} />
                        <Image src={"/images/men-40-s5.png"} alt="" width={438} height={130} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Men40;
