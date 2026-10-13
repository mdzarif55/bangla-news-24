"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // এখানে আপনার authentication logic যোগ করবেন
    console.log({ email, password, rememberMe });
  };

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-10 sm:py-16">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">
        {/* Left panel */}
        <div className="relative hidden min-h-[580px] flex-col justify-between overflow-hidden bg-red-700 p-10 text-white md:flex">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/10" />

          <Link href="/" className="relative z-10 flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={52}
              height={52}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Bangla News 24</span>
          </Link>

          <div className="relative z-10">
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm">
              আপনার বিশ্বস্ত সংবাদমাধ্যম
            </span>

            <h1 className="text-4xl font-bold leading-tight">
              প্রতিদিনের খবর,
              <br />
              আপনার হাতেই।
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-red-100">
              দেশ-বিদেশের সর্বশেষ সংবাদ জানতে এবং আপনার সংবাদ অভিজ্ঞতা আরও
              সহজ করতে সাইন ইন করুন।
            </p>
          </div>

          <p className="relative z-10 text-sm text-red-100">
            © {new Date().getFullYear()} Bangla News 24
          </p>
        </div>

        {/* Right panel */}
        <div className="flex items-center justify-center p-6 sm:p-10 md:p-12">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-8 flex items-center justify-center gap-3 md:hidden"
            >
              <Image
                src="/logo.webp"
                alt="Bangla News 24"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span className="text-lg font-bold text-gray-900">
                Bangla News 24
              </span>
            </Link>

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-700">
                Welcome Back
              </p>

              <h2 className="text-3xl font-bold text-gray-900">
                সাইন ইন করুন
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                আপনার অ্যাকাউন্টে প্রবেশ করতে নিচের তথ্য দিন।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  ইমেইল অ্যাড্রেস
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="আপনার ইমেইল লিখুন"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    পাসওয়ার্ড
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-red-700 transition hover:text-red-900 sm:text-sm"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </Link>
                </div>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword
                        ? "পাসওয়ার্ড লুকান"
                        : "পাসওয়ার্ড দেখান"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-red-700"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox checkbox-sm rounded border-gray-300 [--chkbg:#b91c1c] [--chkfg:white]"
                />
                আমাকে মনে রাখুন
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-red-800 hover:shadow-lg hover:shadow-red-200"
              >
                সাইন ইন
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-gray-600">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/signup"
                className="font-bold text-red-700 transition hover:text-red-900"
              >
                সাইন আপ করুন
              </Link>
            </p>

            <div className="mt-8 border-t border-gray-100 pt-5 text-center">
              <Link
                href="/"
                className="text-sm font-medium text-gray-500 transition hover:text-red-700"
              >
                ← হোমপেজে ফিরে যান
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}