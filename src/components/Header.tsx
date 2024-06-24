import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";

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
          <LocalSwitcher />
        </ul>
      </nav>
    </header>
  );
}
