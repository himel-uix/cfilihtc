'use client';

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">CFILIHTC</h3>
            <p className="text-muted-foreground text-sm">
              আপনার স্বাস্থ্য এবং সুস্বাস্থ্যের জন্য প্রিমিয়াম পণ্য সরবরাহকারী।
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">পণ্য</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Men&apos;s 40+ Multivitamin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  বৈশিষ্ট্য
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  মূল্য নির্ধারণ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">সাপোর্ট</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  যোগাযোগ করুন
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  নীতিমালা
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">যোগাযোগ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ইমেইল: info@cfilihtc.com</li>
              <li>ফোন: +880 1XXX-XXX-XXX</li>
              <li>ঠিকানা: ঢাকা, বাংলাদেশ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2026 CFILIHTC. সব অধিকার সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
