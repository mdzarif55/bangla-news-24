import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-red-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">

        {/* Main Footer */}
        <div className="grid gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">
              Bangla News 24
            </h2>

            <div className="mt-2 h-1 w-12 rounded-full bg-white" />

            <p className="mt-4 text-sm leading-6 text-red-100">
              দেশের সর্বশেষ সংবাদ, জাতীয় ও আন্তর্জাতিক খবর,
              খেলাধুলা, বিনোদনসহ সব ধরনের সংবাদ একসাথে।
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-4 border-b border-red-400 pb-2 font-bold">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="space-y-2 text-sm text-red-100">
              <li>
                <a href="#" className="transition hover:text-white">
                  আমাদের সম্পর্কে
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  যোগাযোগ
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  গোপনীয়তা নীতি
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  ব্যবহারের শর্তাবলি
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 border-b border-red-400 pb-2 font-bold">
              সংবাদ বিভাগ
            </h3>

            <ul className="space-y-2 text-sm text-red-100">
              <li>
                <a href="#" className="transition hover:text-white">
                  জাতীয়
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  আন্তর্জাতিক
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  খেলাধুলা
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  বিনোদন
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 border-b border-red-400 pb-2 font-bold">
              যোগাযোগ
            </h3>

            <ul className="space-y-3 text-sm text-red-100">
              <li>📍 ঢাকা, বাংলাদেশ</li>
              <li>📧 info@banglanews24.com</li>
              <li>☎ +880 1XXX-XXXXXX</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-5 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-red-700 transition hover:bg-red-100"
              >
                f
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-red-700 transition hover:bg-red-100"
              >
                ▶
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-red-700 transition hover:bg-red-100"
              >
                𝕏
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-red-500 pt-5 text-center text-sm text-red-100">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Bangla News 24
          </span>
          . সর্বস্বত্ব সংরক্ষিত।
        </div>

      </div>
    </footer>
  );
};

export default Footer;