
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";

const content = {
  en: {
    nav: ["Home", "About", "Products", "Quality", "Contact"],
    eyebrow: "INDONESIAN COCONUT CHARCOAL",
    title: "Pure Coconut Charcoal. Made for the World.",
    description:
      "Premium coconut shell charcoal briquettes from Indonesia, crafted for international importers, wholesalers, and distributors.",
    button: "Request a Quote",
    secondary: "Explore Products",
    label: "PREMIUM INDONESIAN QUALITY",
    aboutTitle: "From Indonesia to the Global Market",
    aboutText:
      "BARA is dedicated to supplying quality coconut shell charcoal briquettes for international markets. We focus on product consistency, reliable communication, and export-oriented service.",
    productsTitle: "Our Products",
    productsText: "Coconut charcoal solutions for different market needs.",
    products: ["Cube Briquettes", "Hexagonal Briquettes", "Custom Briquettes"],
    qualityTitle: "Quality You Can Rely On",
    qualityText:
      "We focus on consistent product specifications, careful quality control, and packaging solutions for international shipments.",
    contactTitle: "Looking for a Reliable Charcoal Supplier?",
    contactText:
      "Tell us about your requirements. Our team is ready to discuss your product specifications and quotation.",
    footer: "A charcoal brand by LANDSNATURE",
  },

  ru: {
    nav: ["Главная", "О нас", "Продукция", "Качество", "Контакты"],
    eyebrow: "ИНДОНЕЗИЙСКИЙ КОКОСОВЫЙ УГОЛЬ",
    title: "Чистый кокосовый уголь для всего мира.",
    description:
      "Премиальные брикеты из скорлупы кокосового ореха из Индонезии для импортеров, оптовиков и дистрибьюторов.",
    button: "Запросить цену",
    secondary: "Наша продукция",
    label: "ПРЕМИАЛЬНОЕ КАЧЕСТВО ИНДОНЕЗИИ",
    aboutTitle: "Из Индонезии на мировой рынок",
    aboutText:
      "BARA поставляет качественные брикеты из кокосового угля для международных рынков.",
    productsTitle: "Наша продукция",
    productsText: "Кокосовый уголь для различных потребностей рынка.",
    products: ["Кубические брикеты", "Шестигранные брикеты", "Брикеты на заказ"],
    qualityTitle: "Качество, которому можно доверять",
    qualityText:
      "Мы уделяем внимание стабильным характеристикам продукции, контролю качества и экспортной упаковке.",
    contactTitle: "Ищете надежного поставщика угля?",
    contactText:
      "Расскажите нам о ваших требованиях, и мы подготовим предложение.",
    footer: "Бренд угля компании LANDSNATURE",
  },

  zh: {
    nav: ["首页", "关于我们", "产品", "品质", "联系我们"],
    eyebrow: "印度尼西亚椰壳炭",
    title: "优质椰壳炭，供应全球市场。",
    description:
      "来自印度尼西亚的优质椰壳炭，为国际进口商、批发商和经销商提供产品。",
    button: "获取报价",
    secondary: "查看产品",
    label: "印度尼西亚优质产品",
    aboutTitle: "从印度尼西亚走向全球市场",
    aboutText:
      "BARA 致力于为国际市场供应优质椰壳炭，注重产品稳定性、质量管理和出口服务。",
    productsTitle: "我们的产品",
    productsText: "满足不同市场需求的椰壳炭产品。",
    products: ["方形炭块", "六角炭块", "定制炭块"],
    qualityTitle: "值得信赖的产品品质",
    qualityText:
      "我们注重产品规格的一致性、质量控制和国际运输包装。",
    contactTitle: "正在寻找可靠的木炭供应商？",
    contactText:
      "告诉我们您的需求，我们的团队将为您提供报价。",
    footer: "LANDSNATURE 旗下木炭品牌",
  },

  ar: {
    nav: ["الرئيسية", "من نحن", "المنتجات", "الجودة", "اتصل بنا"],
    eyebrow: "فحم جوز الهند الإندونيسي",
    title: "فحم جوز هند عالي الجودة. إلى العالم.",
    description:
      "قوالب فحم جوز الهند الفاخرة من إندونيسيا للمستوردين وتجار الجملة والموزعين.",
    button: "اطلب عرض سعر",
    secondary: "اكتشف المنتجات",
    label: "جودة إندونيسية متميزة",
    aboutTitle: "من إندونيسيا إلى الأسواق العالمية",
    aboutText:
      "تتخصص BARA في توريد قوالب فحم جوز الهند للأسواق الدولية مع التركيز على الجودة والخدمة.",
    productsTitle: "منتجاتنا",
    productsText: "حلول فحم جوز الهند لمختلف احتياجات الأسواق.",
    products: ["قوالب مكعبة", "قوالب سداسية", "قوالب حسب الطلب"],
    qualityTitle: "جودة يمكنك الوثوق بها",
    qualityText:
      "نركز على ثبات المواصفات ومراقبة الجودة والتغليف المناسب للشحن الدولي.",
    contactTitle: "هل تبحث عن مورد موثوق للفحم؟",
    contactText:
      "أخبرنا بمتطلباتك وسيسعد فريقنا بمناقشة عرض السعر.",
    footer: "علامة فحم تابعة لشركة LANDSNATURE",
  },

  tr: {
    nav: ["Ana Sayfa", "Hakkımızda", "Ürünler", "Kalite", "İletişim"],
    eyebrow: "ENDONEZYA HİNDİSTAN CEVİZİ KÖMÜRÜ",
    title: "Saf Hindistan Cevizi Kömürü. Dünyaya.",
    description:
      "Uluslararası ithalatçılar, toptancılar ve distribütörler için Endonezya'dan premium hindistan cevizi kabuğu kömürü.",
    button: "Teklif İsteyin",
    secondary: "Ürünleri Keşfedin",
    label: "PREMIUM ENDONEZYA KALİTESİ",
    aboutTitle: "Endonezya'dan Dünya Pazarına",
    aboutText:
      "BARA, uluslararası pazarlar için kaliteli hindistan cevizi kabuğu kömürü briketleri tedarik etmeye odaklanır.",
    productsTitle: "Ürünlerimiz",
    productsText:
      "Farklı pazar ihtiyaçlarına yönelik hindistan cevizi kömürü çözümleri.",
    products: ["Küp Briketler", "Altıgen Briketler", "Özel Üretim Briketler"],
    qualityTitle: "Güvenebileceğiniz Kalite",
    qualityText:
      "Tutarlı ürün özelliklerine, kalite kontrolüne ve ihracat ambalajına önem veriyoruz.",
    contactTitle: "Güvenilir Bir Kömür Tedarikçisi mi Arıyorsunuz?",
    contactText:
      "İhtiyaçlarınızı bize iletin. Ekibimiz teklifinizi görüşmeye hazır.",
    footer: "LANDSNATURE markasıdır",
  },
};

const locales = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
  { code: "zh", name: "简体中文" },
  { code: "ar", name: "العربية" },
  { code: "tr", name: "Türkçe" },
];

const navLinks = ["home", "about", "products", "quality", "contact"];

export default async function Home({ params }) {


  const { locale } = await params;
  const t = content[locale];

  if (!t) {
    return null;
  }

  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <Link href={`/${locale}`} className="brand">
          BARA<span>.</span>
          <small>BY PT. Landsnature Global Nusantara</small>
        </Link>

        <nav className="nav-links">
          {t.nav.map((item, index) => (
            <a key={item} href={`#${navLinks[index]}`}>
              {item}
            </a>
          ))}
        </nav>

        
        <LanguageSwitcher />
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">{t.eyebrow}</span>

          <h1>{t.title}</h1>

          <p>{t.description}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              {t.button} ↗
            </a>

            <a href="#products" className="btn-outline">
              {t.secondary}
            </a>
          </div>

          <div className="hero-label">
            <span></span> {t.label}
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="charcoal-glow"></div>
          <div className="charcoal-piece piece-one"></div>
          <div className="charcoal-piece piece-two"></div>
          <div className="charcoal-piece piece-three"></div>
          <div className="charcoal-piece piece-four"></div>
          <div className="charcoal-piece piece-five"></div>

          <div className="art-caption">
            COCONUT SHELL
            <br />
            CHARCOAL BRIQUETTES
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-kicker">01 / ABOUT BARA</div>

        <div>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products section" id="products">
        <div className="section-kicker">02 / OUR PRODUCTS</div>

        <h2>{t.productsTitle}</h2>
        <p>{t.productsText}</p>

        
<div className="product-grid">
  {t.products.map((product, index) => (
    <article className="product-card" key={product}>
      <div className={`product-visual visual-${index + 1}`}>
        <Image
          src={`/images/charcoal-0${index + 1}.png`}
          alt={`${product} - BARA Indonesian Coconut Charcoal`}
          width={200}
          height={200}
          className="product-image"
        />
      </div>

      <h3>{product}</h3>

      <a href="#contact">
        Request specifications ↗
      </a>
    </article>
  ))}
</div>

      </section>

      {/* QUALITY */}
      <section className="quality section" id="quality">
        <div className="section-kicker">03 / OUR COMMITMENT</div>

        <h2>{t.qualityTitle}</h2>
        <p>{t.qualityText}</p>

        <div className="quality-points">
          <span>PRODUCT CONSISTENCY</span>
          <span>QUALITY CONTROL</span>
          <span>EXPORT-READY PACKAGING</span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="section-kicker">04 / LET'S WORK TOGETHER</div>

        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>

        <a
          className="btn-primary"
          href="mailto:info@landsnature.id?subject=BARA%20Charcoal%20Inquiry"
        >
          {t.button} ↗
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <Link href={`/${locale}`} className="brand">
          BARA<span>.</span>
        </Link>

        <p>
          {t.footer} · © {new Date().getFullYear()} PT. Landsnature Global Nusantara
        </p>
      </footer>
    </main>
  );
}
