import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const companyLinks = ['About Us', 'Features', 'Blog', 'Careers', 'Legal'];

const supportLinks = ['hello@bomba.co', 'WhatsApp ↗', 'Help Center'];

const socials = ['Instagram', 'Facebook', 'Linkedin', 'Twitter'];

export default function Footer() {
  return (
    <footer className="mt-[50px] bg-[url('/footer.png')] bg-center bg-contain py-20 px-6">
      <h1 className="font-medium text-[#0D2C65] text-4xl md:text-6xl max-w-[681px]">
        Sign up for free <br /> Join thousands of users
      </h1>

      <div className="hidden md:block border border-[#6E80A3] my-16 w-full"></div>

      <div className="mt-10 md:mt-0 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-10">
          <div>
            <h5 className="font-medium text-[#0D2C65]">Company</h5>
            <div className="mt-3 flex flex-col gap-2">
              {companyLinks.map((item, index) => (
                <Link href="#" key={index} className="text-[#6E80A3] text-2xl">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-medium text-[#0D2C65]">Suport</h5>
            <div className="mt-3 flex flex-col gap-2">
              {supportLinks.map((item, index) => (
                <Link href="#" key={index} className="text-[#6E80A3] text-2xl">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 space-y-6 text-lg">
          <h5 className="text-[#0D2C65]">The neo bank for Africans globally</h5>

          <p className="text-[#6E80A3] max-w-[400px]">
            Bomba Ltd is a UK-incorporated Company with Registration Number (RC.
            12551277)
          </p>
        </div>
      </div>

      <div className="mt-20 flex gap-2 flex-col-reverse md:flex-row items-center justify-between">
        <div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2.5 px-8 py-1.5 text-[#233375] cursor-pointer border border-[#6E80A3] rounded-lg">
              <img src="/playstore.png" alt="playstore" />
              <div className="space-y-1.5">
                <p className="text-sm">Get it on</p>
                <p className="font-medium text-lg">Google Play</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-8 py-1.5 text-[#233375] cursor-pointer border border-[#6E80A3] rounded-lg">
              <img src="/appstore.png" alt="appstore" />
              <div className="space-y-1.5">
                <p className="text-sm">Download on the</p>
                <p className="font-medium text-lg">App Store</p>
              </div>
            </div>
          </div>
          <div className="mt-4 border-t border-[#6E80A3] md:border-0 pt-2">
            <p className="text-[#0D2C65]">
              © 2022 Bomba Limited. All rights reserved.
            </p>
            <p className="mt-0.5 text-[#6E80A3]">
              Terms of Service <span className="text-[#63C57B]">|</span> Privacy
              Policy <span className="text-[#63C57B]">|</span> T&C UK{' '}
              <span className="text-[#63C57B]">|</span> Cookie Policy
            </p>
          </div>
        </div>

        <div className="w-full md:max-w-[400px] space-y-6">
          <p className="font-medium text-lg text-[#0D2C65]">
            Stay update on our newsletter
          </p>

          <form className="md:w-[400px] flex flex-col md:flex-row md:items-center gap-2">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#233375] rounded-e-lg md:rounded-e-none md:rounded-s-lg p-3 text-center text-[#6E80A3] text-sm focus:outline-none"
              placeholder="Enter your email address"
            />

            <button className="w-fit border-b border-[#2668EC] text-[#2668EC] font-medium gap-2 p-3 flex items-center">
              Subscribe
              <ChevronRight />
            </button>
          </form>

          <div className="flex items-center justify-between">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {socials.map((item, index) => (
                <Link href="#" key={index} className="text-[#6E80A3]">
                  {item}
                </Link>
              ))}
            </div>

            <div className="md:hidden flex flex-col  gap-6">
              <div className="flex items-center gap-2.5 px-8 py-1.5 text-[#233375] cursor-pointer border border-[#6E80A3] rounded-lg">
                <img src="/playstore.png" alt="playstore" />
                <div className="space-y-1.5">
                  <p className="text-sm">Get it on</p>
                  <p className="font-medium text-lg">Google Play</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-8 py-1.5 text-[#233375] cursor-pointer border border-[#6E80A3] rounded-lg">
                <img src="/appstore.png" alt="appstore" />
                <div className="space-y-1.5">
                  <p className="text-sm">Download on the</p>
                  <p className="font-medium text-lg">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
