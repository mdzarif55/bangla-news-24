"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("আপনার নাম কমপক্ষে ২ অক্ষরের হতে হবে।");
      return;
    }

    if (password.length < 8) {
      setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    if (password !== confirmPassword) {
      setError("দুটি পাসওয়ার্ড মিলছে না।");
      return;
    }

    // এখানে আপনার authentication signup function যুক্ত করতে হবে।
    setError("Signup authentication এখনো সংযুক্ত করা হয়নি।");
  };

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-10 sm:py-14">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">
        {/* Left branding panel */}
        <section className="relative hidden min-h-[650px] flex-col justify-between overflow-hidden bg-red-700 p-10 text-white md:flex">
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
              আমাদের সঙ্গে যুক্ত হোন
            </span>

            <h1 className="text-4xl font-bold leading-tight">
              খবর জানুন,
              <br />
              সবার আগে থাকুন।
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-red-100">
              একটি অ্যাকাউন্ট তৈরি করুন এবং দেশ-বিদেশের গুরুত্বপূর্ণ সংবাদ
              সহজেই পড়ুন।
            </p>

            <div className="mt-8 space-y-4 text-sm text-red-50">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} />
                <span>সর্বশেষ সংবাদ এক জায়গায়</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} />
                <span>সহজ ও দ্রুত সংবাদ পড়ার অভিজ্ঞতা</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} />
                <span>মোবাইল ও ডেস্কটপে ব্যবহারযোগ্য</span>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-sm text-red-100">
            © {new Date().getFullYear()} Bangla News 24
          </p>
        </section>

        {/* Signup form */}
        <section className="flex items-center justify-center p-6 sm:p-10 md:p-12">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-7 flex items-center justify-center gap-3 md:hidden"
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

            <div className="mb-7">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-700">
                Create Account
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                অ্যাকাউন্ট তৈরি করুন
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                শুরু করতে আপনার তথ্যগুলো পূরণ করুন।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  আপনার নাম
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="আপনার পুরো নাম"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

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
                    placeholder="আপনার ইমেইল"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  পাসওয়ার্ড
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="কমপক্ষে ৮ অক্ষর"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখান"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-red-700"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  পাসওয়ার্ড নিশ্চিত করুন
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="পাসওয়ার্ড আবার লিখুন"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "পাসওয়ার্ড লুকান"
                        : "পাসওয়ার্ড দেখান"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-red-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 p-3 text-sm leading-6 text-red-700"
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-red-800 hover:shadow-lg hover:shadow-red-200"
              >
                অ্যাকাউন্ট তৈরি করুন
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              ইতোমধ্যে অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/signin"
                className="font-bold text-red-700 transition hover:text-red-900"
              >
                সাইন ইন করুন
              </Link>
            </p>

            <div className="mt-7 border-t border-gray-100 pt-5 text-center">
              <Link
                href="/"
                className="text-sm font-medium text-gray-500 transition hover:text-red-700"
              >
                ← হোমপেজে ফিরে যান
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}