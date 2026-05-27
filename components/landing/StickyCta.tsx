import { handleOrderClick } from "@/lib/utils";
import { Button } from "../ui/button";

function StickyCta() {
    return (
        <section className="sticky top-0 bg-background z-10 py-2">
            <div className="flex items-center gap-6 container mx-auto px-5 ">
                <div>
                    <p>৳৫,৯৯৮</p>
                    <h4 className="text-xl font-bold text-primary">৳২,৯৯৯</h4>
                </div>

                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 w-full text-white font-semibold px-8 py-6 text-xl"
                    onClick={handleOrderClick}
                >
                    এখনই অর্ডার করুন
                </Button>
            </div>
        </section>
    );
}

export default StickyCta;
