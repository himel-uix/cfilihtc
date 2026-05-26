import { handleOrderClick } from "@/lib/utils";
import { Button } from "../ui/button";

function Header() {
    return (
        <header>
            <h4 className="py-2 px-5 bg-primary bg-gradient text-white font-bold text-center">
                <span className="text-amber-100">⚡ সীমিত স্টক!</span> এখন পর্যন্ত অর্ডার করেছেন
                ৫৫০২ জন, অবশিষ্ট স্টকঃ ৯৭ পিস, লাইভ স্টক ০ হলে আর অর্ডার গ্রহনযোগ্য হবে না
            </h4>
            <nav className="flex justify-between items-center gap-2 container mx-auto px-4 py-8">
                <a href="/" className="uppercase font-bold text-primary text-3xl">
                    CFILIHTC
                </a>

                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
                    onClick={handleOrderClick}
                >
                    এখনই অর্ডার করুন
                </Button>
            </nav>
        </header>
    );
}

export default Header;
