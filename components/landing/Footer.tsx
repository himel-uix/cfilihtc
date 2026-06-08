import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="py-6 md:py-8 lg:py-10 bg-[#030508] border-t border-[#FFFFFF0A]">
        <div className="container mx-auto px-5 max-w-2xl space-y-4 text-center">
          <h4 className="font-bold text-xs leading-5 text-[#CBD5E1]">Disclaimer</h4>
          <p className="text-[#64748B] font-normal text-xs leading-4">This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </div>
      <footer className="bg-[#04060F] border-t border-[#0EA5E924] py-6">
        <div className="conatiner mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-2 md:space-y-3 lg:space-y-4">
            <Link href="/" className="inline-block uppercase font-bold text-primary text-lg md:text-xl lg:text-3xl">
              CFILIHTC
            </Link>
            <p className="text-[#64748B]">© ২০২৬ CFILIHTC. সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </>
  );
}
