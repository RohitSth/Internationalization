import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-semibold">Internationalization Next.js</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/en">English</Link>
          </li>
          <li>
            <Link href="/id">Indonesia</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
