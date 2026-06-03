import Image from "next/image";
import { Badge } from "../ui/badge";

function Changes() {
    return (
        <section>
            <div className="container mx-auto px-5 space-y-2">
                <Badge variant={"default"} className="text-md border-2 font-bold">
                    মূল উপকারিতা
                </Badge>
                <h2 className="text-5xl font-bold my-8">
                    যে <span className="text-primary">৩টি পরিবর্তন</span> আপনি অনুভব করবেন
                </h2>
                <div className="grid grid-cols-3 gap-2">
                    <Image src={"/images/changes-img-1.png"} alt="" width={325} height={180} />
                    <Image src={"/images/changes-img-2.png"} alt="" width={325} height={180} />
                    <Image src={"/images/changes-img-3.png"} alt="" width={325} height={180} />
                </div>
            </div>
        </section>
    );
}

export default Changes;
