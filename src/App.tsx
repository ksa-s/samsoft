import { type LucideIcon } from 'lucide-react';
import {
  Code2,
  Check,
  Crown,
  ExternalLink,
  MessageCircle,
  Send,
  Share2,
  Smartphone,
  Sparkles,
  Terminal,
  Cpu,
} from 'lucide-react';
import { SiSnapchat, SiTiktok } from 'react-icons/si';
import { type IconType } from 'react-icons';
import jetourImage from '@assets/generated_images/jetour-t2-inspired.jpg';
import havalImage from '@assets/generated_images/haval-inspired.jpg';
import carSystemImage from '@assets/generated_images/car-android-system.jpg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { type ReactNode } from 'react';

const queryClient = new QueryClient();

const socialLinks: {
  name: string;
  handle: string;
  link: string;
  icon: LucideIcon | IconType;
  color: string;
}[] = [
  {
    name: 'تليجرام',
    handle: '@SAM_F4',
    link: 'https://t.me/SAM_F4',
    icon: Send,
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'واتساب',
    handle: '+966 53 383 3308',
    link: 'https://wa.me/966533833308',
    icon: MessageCircle,
    color: 'from-emerald-500 to-green-600',
  },
  {
    name: 'سناب شات',
    handle: '@n6_l',
    link: 'https://www.snapchat.com/add/n6_l',
    icon: SiSnapchat,
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    name: 'تيك توك',
    handle: '@fe_i8',
    link: 'https://www.tiktok.com/@fe_i8',
    icon: SiTiktok,
    color: 'from-slate-900 to-slate-700',
  },
];

const projects: {
  title: string;
  desc: string;
  tag: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: 'حلول جيتور T2 الذكية',
    desc: 'حلول برمجية مخصصة لتطوير تجربة شاشة السيارة والتحكم بالأجهزة عبر ADB.',
    tag: 'Jetour T2 / Android',
    icon: Smartphone,
    image: jetourImage,
  },
  {
    title: 'تجربة هافال المتصلة',
    desc: 'تطبيقات وأدوات تساعد على تخصيص الأنظمة الذكية داخل سيارات هافال الحديثة.',
    tag: 'Haval / Connected',
    icon: Terminal,
    image: havalImage,
  },
  {
    title: 'أنظمة تحكم وحلول مخصصة',
    desc: 'تطوير لوحات تحكم وتطبيقات متكاملة للأجهزة الذكية وأنظمة السيارات.',
    tag: 'Car Tech / Custom',
    icon: Cpu,
    image: carSystemImage,
  },
];

const packages = [
  {
    name: 'الباقة الفضية',
    englishName: 'Silver Package',
    price: '300',
    tone: 'silver',
    features: [
      'لانشر لإظهار التطبيقات',
      'تشغيل التطبيقات على الشاشة الخلفية',
      'تقسيم الشاشة (تشغيل تطبيقين معا)',
      'يوتيوب بدون إعلانات (أحدث إصدار)',
      'برنامج لتشغيل جميع القنوات التلفزيونية',
      'برنامج للأفلام والمسلسلات',
      'برنامج لتعديل وتحسين أصوات السماعات',
      'مدير الملفات File Manager (إدارة وحذف البرامج)',
      'برنامج زر الرجوع الذكي لتسهيل التنقل',
      'متجر تطبيقات مفعل',
      'دعم فني'
    ]
  },
  {
    name: 'الباقة الذهبية',
    englishName: 'Gold Package',
    price: '450',
    tone: 'gold',
    features: [
      'تشغيل وتمرير الخرائط/البرامج على شاشة العداد',
      'متجر تطبيقات مخصص يتضمن التحديث التلقائي (مفعل مدى الحياة)',
      'تثبيت برنامج Jcartools (للتحكم الواسع بالأجهزة)',
      'لانشر مخصص لإظهار التطبيقات',
      'تشغيل التطبيقات على الشاشة الخلفية',
      'تقسيم الشاشة (تطبيقين في نفس الوقت)',
      'يوتيوب بدون إعلانات (آخر إصدار)',
      'برنامج تشغيل القنوات التلفزيونية',
      'برنامج سينما للأفلام والمسلسلات',
      'برنامج تحسين جودة وصوت السماعات',
      'مدير ملفات متقدم File Manager',
      'تفعيل زر الرجوع العائم للتنقل السريع',
      'دعم فني شامل وتحديثات'
    ]
  }
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Sami Software">
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-950">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="logo-gear" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="logo-accent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
          <rect width="512" height="512" rx="112" fill="url(#logo-bg)" />
          <circle
            cx="256"
            cy="256"
            r="200"
            fill="none"
            stroke="url(#logo-accent)"
            strokeWidth="6"
            strokeDasharray="10 14"
            opacity="0.6"
          />
          <path
            fill="url(#logo-gear)"
            d="M236 130h40l8 40c19 6 37 15 53 27l34-18 37 37-18 34c12 16 21 34 27 53l40 8v52l-40 8c-6 19-15 37-27 53l18 34-37 37-34-18c-16 12-34 21-53 27l-8 40h-52l-8-40c-19-6-37-15-53-27l-34 18-37-37 18-34c-12-16-21-34-27-53l-40-8v-52l40-8c6-19 15-37 27-53l-18-34 37-37 34 18c16-12 34-21 53-27l8-40Z"
            opacity="0.95"
          />
          <circle cx="256" cy="256" r="95" fill="#0f172a" stroke="url(#logo-accent)" strokeWidth="6" />
          <text x="256" y="248" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="42" fill="#fff" letterSpacing="4">
            SAMI
          </text>
          <text x="256" y="280" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#22d3ee" letterSpacing="5">
            SOFTWARE
          </text>
        </svg>
      </div>
      <span className="gradient-text text-lg font-extrabold tracking-tight">Sami Software</span>
    </a>
  );
}

function Home() {
  return (
    <main id="top" dir="rtl" className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4">
          <Logo />
          <a
            href="https://wa.me/966533833308"
            target="_blank"
            rel="noreferrer"
            className="btn-glow btn-glow-hover tap-target inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-sm font-bold text-primary-foreground sm:px-4"
          >
            <Sparkles className="h-4 w-4 shrink-0" /> تواصل معنا
          </a>
        </div>
      </header>

      <section className="relative mx-auto max-w-4xl px-5 pb-10 pt-10 text-center sm:pt-14 md:pt-20">
        <div className="hero-glow" aria-hidden="true" />
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary sm:text-sm">
          <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> البرمجة والحلول التقنية المخصصة
        </div>
        <h1 className="fluid-h1 mb-5 font-black tracking-tight text-balance">
          عالم الحلول البرمجية و<span className="gradient-text">تطوير الأنظمة</span>
        </h1>
        <p className="fluid-lead mx-auto max-w-2xl text-muted-foreground text-balance">
          نقدم خدمات برمجة وتعديل تطبيقات الأندرويد، أنظمة شاشات السيارات، وتطوير الأدوات البرمجية الخاصة بكفاءة عالية.
        </p>
      </section>

      <section className="mx-auto mb-14 max-w-3xl px-5">
        <h2 className="mb-5 flex items-center justify-center gap-2 text-center text-sm font-bold text-muted-foreground sm:text-base">
          <Share2 className="h-4 w-4 shrink-0" /> تابعنا وتواصل عبر القنوات الرسمية
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="glass-card tap-target group flex items-center justify-between rounded-2xl p-4 transition active:scale-[0.98] hover:border-primary/50 hover:bg-white/10 sm:p-4.5"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold">{item.name}</span>
                    <span className="block truncate text-sm text-muted-foreground" dir="ltr" style={{ textAlign: 'right' }}>{item.handle}</span>
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 opacity-40 transition group-hover:-translate-x-0.5 group-hover:opacity-100" />
              </a>
            );
          })}
        </div>
      </section>

      <section id="packages" className="pricing-section border-t border-border/70 bg-slate-50/70 px-4 py-14 sm:px-5 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-10">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary sm:text-sm">
              <Crown className="h-4 w-4" /> باقاتنا
            </span>
            <h2 className="fluid-h2 mb-3 font-black tracking-tight text-balance">اختر الباقة المناسبة لسيارتك</h2>
            <p className="text-base leading-7 text-muted-foreground text-balance">
              تجهيزات عملية ومتكاملة لتحصل على تجربة قيادة أكثر سهولة وترفيهاً.
            </p>
          </div>

          <div className="grid items-start gap-5 sm:gap-6 lg:grid-cols-2">
            {packages.map((pkg) => {
              const isGold = pkg.tone === 'gold';
              return (
                <article
                  key={pkg.englishName}
                  className={`package-card relative overflow-hidden rounded-3xl border pb-6 pt-6 sm:pb-8 sm:pt-8 ${
                    isGold
                      ? 'gold-package border-amber-300 bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-xl shadow-amber-200/40'
                      : 'silver-package border-slate-200 bg-white shadow-lg shadow-slate-200/60'
                  }`}
                >
                  {isGold && (
                    <div className="ribbon-badge mb-6 flex items-center justify-center gap-1.5 py-2.5 text-sm font-extrabold text-amber-950">
                      <Crown className="h-4 w-4" /> الأكثر طلباً
                    </div>
                  )}
                  <div className="px-5 sm:px-8">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className={`mb-2 font-mono text-xs uppercase tracking-[0.18em] ${isGold ? 'text-amber-700' : 'text-slate-500'}`}>
                          {pkg.englishName}
                        </p>
                        <h3 className="text-2xl font-black sm:text-3xl">{pkg.name}</h3>
                      </div>
                      <div className={`shrink-0 rounded-2xl p-3 ${isGold ? 'bg-amber-400 text-amber-950' : 'bg-slate-100 text-slate-600'}`}>
                        <Crown className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mb-7 flex items-end gap-2 border-b border-current/10 pb-6">
                      <span className="fluid-price font-black tracking-tight">{pkg.price}</span>
                      <span className="mb-1.5 text-base font-semibold text-muted-foreground sm:mb-2">ريال</span>
                    </div>

                    <ul className="space-y-4">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-base leading-7 text-slate-700">
                          <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${isGold ? 'bg-amber-400 text-amber-950' : 'bg-slate-200 text-slate-700'}`}>
                            <Check className="h-4 w-4" strokeWidth={3} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/966533833308?text=${encodeURIComponent(`أرغب في طلب ${pkg.name} - ${pkg.price} ريال`)}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className={`tap-target mt-8 flex w-full items-center justify-center rounded-xl px-5 py-4 text-base font-bold transition active:scale-[0.98] hover:-translate-y-0.5 ${
                        isGold
                          ? 'bg-amber-400 text-amber-950 shadow-lg shadow-amber-300/40 hover:bg-amber-300'
                          : 'bg-slate-800 text-white shadow-lg shadow-slate-300/50 hover:bg-slate-700'
                      }`}
                    >
                      اطلب هذه الباقة عبر واتساب
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm font-semibold text-muted-foreground">
            * تنبيه: السعر لا يشمل رسوم الاشتراكات الخارجية.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 sm:pb-16">
        <h2 className="gradient-text fluid-h2 mb-7 text-center font-black">أبرز المشاريع والحلول البرمجية</h2>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {projects.map((project) => {
            return (
              <article key={project.title} className="glass-card group rounded-2xl p-5 transition hover:-translate-y-1">
                <div className="relative mb-4 h-52 w-full overflow-hidden rounded-xl border border-white/15 bg-white/5 sm:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 right-2 rounded-md bg-slate-950/75 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    Sami Software
                  </span>
                </div>
                <span className="mb-2 inline-block rounded-md bg-white/10 px-2.5 py-1 font-mono text-xs text-primary">
                  {project.tag}
                </span>
                <h3 className="mb-1.5 text-lg font-bold">{project.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{project.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <a
        href="https://wa.me/966533833308"
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="float-cta tap-target fixed bottom-5 left-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white transition active:scale-90 md:hidden"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      </a>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sami Software — جميع الحقوق محفوظة.
      </footer>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;