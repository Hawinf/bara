
import { notFound } from "next/navigation";

const locales = ["en", "ru", "zh", "ar", "tr"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      {children}
    </div>
  );
}
