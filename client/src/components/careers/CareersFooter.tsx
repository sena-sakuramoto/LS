import Link from "@/components/careers/CareersLink";
import {
  companyProfile,
  recruitContact,
} from "@/components/careers/careersData";

export default function CareersFooter() {
  return (
    <footer className="bg-black border-t border-[#d4af37]/20 py-16">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4 mb-12">
          <div className="space-y-4">
            <Link href="/careers/" className="font-logo text-2xl tracking-[0.1em] text-white">
              LS
            </Link>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              空間を超え、ブランドを創造する。<br />
              株式会社LS 採用サイト
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading-en text-xs tracking-[0.3em] text-white mb-4">RECRUIT</h4>
            <div className="space-y-3">
              <Link href="/careers/job/" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                仕事について
              </Link>
              <Link href="/careers/training/" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                研修・成長支援
              </Link>
              <Link href="/careers/interview/" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                社員インタビュー
              </Link>
              <Link href="/careers/benefits/" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                待遇・福利厚生
              </Link>
              <Link href="/careers/flow/" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                選考フロー
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading-en text-xs tracking-[0.3em] text-white mb-4">COMPANY</h4>
            <div className="space-y-3 text-sm text-gray-400 leading-7">
              <p>{companyProfile.name}</p>
              <p>{companyProfile.address}</p>
              <p>設立：{companyProfile.founded}</p>
              <p>代表者：{companyProfile.representative}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading-en text-xs tracking-[0.3em] text-white mb-4">CONTACT</h4>
            <div className="space-y-3">
              <a
                href={recruitContact.corporateHref}
                className="tap-bounce block text-sm text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                企業サイト
              </a>
              <Link href="/careers/entry/" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                エントリーフォーム
              </Link>
              <a
                href={recruitContact.inquiryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-bounce block text-sm text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                {recruitContact.inquiryLabel}
              </a>
              {recruitContact.email ? (
                <p className="text-sm text-gray-500">メール: {recruitContact.email}</p>
              ) : null}
              {recruitContact.phone ? (
                <p className="text-sm text-gray-500">TEL: {recruitContact.phone}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-light">
            <p className="tracking-[0.2em]">&copy; 2025 株式会社LS. All rights reserved.</p>
            <Link
              href="/careers/entry/"
              className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black text-xs tracking-[0.15em] font-medium rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-500 hover:scale-105"
            >
              エントリーする →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
