import Link from "@/components/careers/CareersLink";
import {
  companyProfile,
  recruitContact,
} from "@/components/careers/careersData";

export default function CareersFooter() {
  return (
    <footer className="border-t border-[#d4af37]/20 bg-black py-10 md:py-16">
      <div className="container max-w-7xl">
        <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-8 md:mb-12 md:grid-cols-2 md:gap-12 xl:grid-cols-4">
          <div className="col-span-2 space-y-3 xl:col-span-1">
            <Link
              href="/careers/"
              className="inline-flex items-center transition-opacity hover:opacity-85"
            >
              <img
                src="/ls-logo-cropped.png"
                alt="LS"
                className="h-10 w-auto md:h-[3.25rem]"
              />
            </Link>
            <p className="text-xs font-light leading-7 text-gray-400 md:text-sm md:leading-relaxed">
              空間を超え、ブランドを創造する。
              <br />
              株式会社LS採用サイト
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="mb-3 font-heading-en text-[11px] tracking-[0.3em] text-white md:mb-4 md:text-xs">
              RECRUIT
            </h4>
            <div className="space-y-2.5 md:space-y-3">
              <Link
                href="/careers/job/"
                className="block text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
              >
                仕事について
              </Link>
              <Link
                href="/careers/training/"
                className="block text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
              >
                研修・成長支援
              </Link>
              <Link
                href="/careers/interview/"
                className="block text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
              >
                社員インタビュー
              </Link>
              <Link
                href="/careers/benefits/"
                className="block text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
              >
                待遇・福利厚生
              </Link>
              <Link
                href="/careers/flow/"
                className="block text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
              >
                選考フロー
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="mb-3 font-heading-en text-[11px] tracking-[0.3em] text-white md:mb-4 md:text-xs">
              COMPANY
            </h4>
            <div className="space-y-2.5 text-sm leading-7 text-gray-400 md:space-y-3">
              <p>{companyProfile.name}</p>
              <p>{companyProfile.address}</p>
              <p>設立：{companyProfile.founded}</p>
              <p>代表者：{companyProfile.representative}</p>
            </div>
          </div>

          <div className="col-span-2 space-y-3 xl:col-span-1">
            <h4 className="mb-3 font-heading-en text-[11px] tracking-[0.3em] text-white md:mb-4 md:text-xs">
              CONTACT
            </h4>
            <div className="space-y-2.5 md:space-y-3">
              <a
                href={recruitContact.corporateHref}
                className="tap-bounce block text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
              >
                企業サイト
              </a>
              <Link
                href="/careers/entry/"
                className="block text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
              >
                エントリーフォーム
              </Link>
              <a
                href={recruitContact.inquiryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-bounce block text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
              >
                {recruitContact.inquiryLabel}
              </a>
              {recruitContact.email ? (
                <p className="text-sm text-gray-500">
                  メール: {recruitContact.email}
                </p>
              ) : null}
              {recruitContact.phone ? (
                <p className="text-sm text-gray-500">
                  TEL: {recruitContact.phone}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-5 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs font-light text-gray-500 md:flex-row md:gap-4">
            <p className="text-center tracking-[0.16em] md:text-left md:tracking-[0.2em]">
              &copy; 2025 株式会社LS. All rights reserved.
            </p>
            <Link
              href="/careers/entry/"
              className="min-w-[180px] rounded-sm bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] px-6 py-3 text-center text-xs font-medium tracking-[0.15em] text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] md:min-w-0 md:px-8"
            >
              エントリーする →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
