import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowUpLeft,
  Check,
  ChevronLeft,
  CircleHelp,
  CloudDownload,
  Cpu,
  Gauge,
  Laptop,
  Link2,
  LockKeyhole,
  Package,
  PlugZap,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Usb,
  Wifi,
  X,
} from 'lucide-react';

type ConnectionState = 'DISCONNECTED' | 'CONNECTING' | 'DEVICE_CONNECTED' | 'READY' | 'ERROR';

const apps = [
  { name: 'YouTube', description: 'بدون إعلانات', version: '1.5', size: '86 MB', icon: '▶', color: 'bg-red-500', state: 'ready' },
  { name: 'Launcher', description: 'واجهة Sami المخصصة', version: '3.0', size: '42 MB', icon: 'S', color: 'bg-blue-600', state: 'ready' },
  { name: 'GarageSplit', description: 'تشغيل تطبيقين معًا', version: '2.2', size: '18 MB', icon: '2', color: 'bg-emerald-500', state: 'ready' },
  { name: 'Jcartools', description: 'أدوات متقدمة للسيارة', version: '1.1', size: '24 MB', icon: 'J', color: 'bg-amber-400', state: 'locked' },
];

const diagnostics = [
  { label: 'USB', detail: 'واجهة الجهاز', icon: Usb },
  { label: 'ADB Transport', detail: 'قناة الاتصال', icon: Link2 },
  { label: 'Authorization', detail: 'صلاحية الكمبيوتر', icon: ShieldCheck },
  { label: 'Firmware', detail: 'ملف التعريف 0.0.8', icon: Cpu },
];

function StatusDot({ active = true }: { active?: boolean }) {
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${active ? 'bg-emerald-500 shadow-[0_0_0_4px_rgb(16_185_129_/_12%)]' : 'bg-slate-300'}`} />;
}

export default function JetourT2() {
  const [connection, setConnection] = useState<ConnectionState>('DISCONNECTED');
  const [installing, setInstalling] = useState<string | null>(null);
  const [installed, setInstalled] = useState<string[]>([]);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    if (connection !== 'CONNECTING') return;
    const deviceTimer = window.setTimeout(() => setConnection('DEVICE_CONNECTED'), 1100);
    const readyTimer = window.setTimeout(() => setConnection('READY'), 2400);
    return () => { window.clearTimeout(deviceTimer); window.clearTimeout(readyTimer); };
  }, [connection]);

  const connect = () => {
    if (connection === 'READY' || connection === 'CONNECTING') return;
    setConnection('CONNECTING');
  };

  const install = (name: string) => {
    if (connection !== 'READY' || installing) return;
    setInstalling(name);
    window.setTimeout(() => { setInstalled((current) => [...current, name]); setInstalling(null); }, 1800);
  };

  const connected = connection === 'READY' || connection === 'DEVICE_CONNECTED';
  const statusLabel = connection === 'CONNECTING' ? 'جاري الاتصال...' : connection === 'READY' ? 'متصلة وجاهزة' : connected ? 'تم العثور على السيارة' : 'غير متصلة';

  return (
    <main dir="rtl" className="jetour-shell min-h-screen bg-[#f5f7fb] text-[#172238]">
      <aside className="jetour-sidebar hidden lg:flex">
        <a href="/" className="flex items-center gap-3 px-2"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#172238] text-sm font-black text-white">S</span><span className="text-lg font-black tracking-tight">Sami <span className="text-[#1f66e5]">Software</span></span></a>
        <div className="my-10 border-t border-slate-200" />
        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">مركز السيارة</p>
        <nav className="space-y-1"><a className="jetour-nav-active" href="#dashboard"><Gauge className="h-4 w-4" /> لوحة التحكم</a><a href="#apps"><Smartphone className="h-4 w-4" /> التطبيقات <span className="mr-auto rounded-full bg-blue-50 px-2 py-0.5 text-[11px] text-blue-600">4</span></a><a href="#packages"><Package className="h-4 w-4" /> الباقات</a><a href="#diagnostics"><Activity className="h-4 w-4" /> التشخيص</a></nav>
        <div className="mt-auto rounded-2xl bg-[#172238] p-4 text-white"><Sparkles className="mb-5 h-5 w-5 text-amber-300" /><p className="mb-1 text-sm font-bold">تحتاج مساعدة؟</p><p className="mb-4 text-xs leading-5 text-slate-300">فريق الدعم جاهز لمساعدتك في توصيل السيارة.</p><a href="https://wa.me/966533833308" className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-xs font-bold transition hover:bg-white/20">تواصل مع الدعم <ArrowUpLeft className="h-4 w-4" /></a></div>
      </aside>

      <section className="min-w-0 flex-1"><header className="jetour-topbar"><div className="flex items-center gap-3 lg:hidden"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#172238] text-sm font-black text-white">S</span><span className="font-black">Jetour T2</span></div><div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex"><span>مركز الأدوات</span><ChevronLeft className="h-4 w-4" /><b className="text-[#172238]">Jetour T2</b></div><div className="mr-auto flex items-center gap-3"><button onClick={() => setShowHelp(true)} className="icon-button" title="تعليمات الاتصال"><CircleHelp className="h-5 w-5" /></button><span className="hidden h-8 w-px bg-slate-200 sm:block" /><div className="hidden text-left sm:block"><p className="text-xs text-slate-400">الحساب</p><p className="text-sm font-bold">عميل Sami</p></div><span className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-sm font-black text-blue-700">س</span></div></header>

        <div className="mx-auto max-w-[1400px] px-5 py-7 sm:px-8 lg:px-12 lg:py-10"><div id="dashboard" className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-2 text-sm font-bold text-[#1f66e5]">صباح الخير، سامي</p><h1 className="text-3xl font-black tracking-tight sm:text-4xl">مركز أدوات Jetour T2</h1><p className="mt-2 text-sm text-slate-500">تحكم في تطبيقات سيارتك وتابع حالتها من مكان واحد.</p></div><button onClick={connect} disabled={connection === 'CONNECTING'} className={`jetour-connect ${connection === 'READY' ? 'is-ready' : ''}`}><PlugZap className="h-5 w-5" />{connection === 'CONNECTING' ? 'جاري البحث عن السيارة...' : connection === 'READY' ? 'السيارة متصلة' : 'توصيل السيارة'}{connection === 'READY' ? <Check className="h-4 w-4" /> : null}</button></div>

          <div className="mb-7 grid gap-5 xl:grid-cols-[1.55fr_1fr]"><section className="connection-card overflow-hidden rounded-3xl bg-[#172238] p-6 text-white sm:p-8"><div className="relative z-10 flex h-full flex-col justify-between gap-10"><div className="flex items-start justify-between"><div><div className="mb-4 flex items-center gap-2 text-sm text-slate-300"><StatusDot active={connected} /> حالة الاتصال</div><h2 className="text-3xl font-black sm:text-4xl">{statusLabel}</h2><p className="mt-2 max-w-md text-sm leading-6 text-slate-400">{connection === 'DISCONNECTED' ? 'وصّل شاشة السيارة بالكمبيوتر عبر USB لبدء إدارة التطبيقات.' : connection === 'READY' ? 'يمكنك الآن تثبيت التطبيقات المتوافقة وإدارة أدوات سيارتك.' : 'يتم إنشاء قناة ADB آمنة مع شاشة السيارة...'}</p></div><div className="rounded-2xl border border-white/10 bg-white/10 p-3"><Wifi className={`h-6 w-6 ${connection === 'CONNECTING' ? 'animate-pulse text-amber-300' : 'text-emerald-300'}`} /></div></div><div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-xs text-slate-300"><span className="flex items-center gap-2"><Usb className="h-4 w-4 text-blue-300" /> USB {connected ? 'متصل' : 'بانتظار التوصيل'}</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> ADB {connection === 'READY' ? 'مصرح' : 'غير متصل'}</span><span className="flex items-center gap-2"><Laptop className="h-4 w-4 text-amber-300" /> Chrome / Edge</span></div></div></section><section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-6 flex items-center justify-between"><div><p className="text-xs font-bold text-slate-400">السيارة المسجلة</p><h2 className="mt-1 text-xl font-black">Jetour T2</h2></div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-2xl">🚙</span></div><div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-5"><div><p className="text-xs text-slate-400">إصدار Android</p><p className="mt-1 font-bold">11 <span className="text-xs font-normal text-slate-400">SDK 30</span></p></div><div><p className="text-xs text-slate-400">Firmware</p><p className="mt-1 font-bold">0.0.8 <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-500" /></p></div></div><div className="mt-5 flex items-center justify-between text-xs"><span className="flex items-center gap-2 text-slate-500"><StatusDot active={connected} /> {connected ? 'آخر اتصال الآن' : 'لم يتم الاتصال بعد'}</span><button className="font-bold text-blue-600">إدارة السيارة <ChevronLeft className="inline h-3.5 w-3.5" /></button></div></section></div>

          <div className="mb-7 grid gap-7 xl:grid-cols-[1.6fr_0.85fr]"><section id="apps"><div className="mb-4 flex items-end justify-between"><div><p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">App library</p><h2 className="text-2xl font-black">تطبيقاتك</h2></div><button className="text-sm font-bold text-blue-600">عرض الكل <ChevronLeft className="inline h-4 w-4" /></button></div><div className="grid gap-3 sm:grid-cols-2">{apps.map((app) => { const isInstalled = installed.includes(app.name); const isBusy = installing === app.name; return <article key={app.name} className="app-row"><span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${app.color} text-lg font-black text-white shadow-sm`}>{app.icon}</span><div className="min-w-0 flex-1"><h3 className="font-black">{app.name}</h3><p className="truncate text-xs text-slate-500">{app.description}</p><p className="mt-1 text-[11px] text-slate-400">v{app.version} · {app.size}</p></div>{app.state === 'locked' ? <span className="rounded-lg bg-amber-50 p-2 text-amber-600" title="متاح في الباقة الذهبية"><LockKeyhole className="h-4 w-4" /></span> : <button disabled={connection !== 'READY' || isBusy || isInstalled} onClick={() => install(app.name)} className={`app-action ${isInstalled ? 'installed' : ''}`}>{isBusy ? <RefreshCw className="h-4 w-4 animate-spin" /> : isInstalled ? <Check className="h-4 w-4" /> : <CloudDownload className="h-4 w-4" />}{isBusy ? 'جاري...' : isInstalled ? 'مثبت' : 'تثبيت'}</button>}</article>; })}</div></section><section id="packages" className="gold-panel"><div className="mb-5 flex items-start justify-between"><div><p className="mb-1 text-xs font-bold text-amber-700">PREMIUM ACCESS</p><h2 className="text-2xl font-black text-amber-950">الباقة الذهبية</h2></div><span className="rounded-xl bg-amber-400 p-2.5 text-amber-950"><Sparkles className="h-5 w-5" /></span></div><p className="mb-5 text-sm leading-6 text-amber-900/70">مجموعة الأدوات الكاملة لتجربة Jetour T2.</p><ul className="mb-6 space-y-3 text-sm font-semibold text-amber-950/80"><li><Check /> 7 تطبيقات وأدوات مخصصة</li><li><Check /> تحديثات تلقائية مدى الحياة</li><li><Check /> دعم فني شامل</li></ul><button disabled={connection !== 'READY'} onClick={() => install('الباقة الذهبية')} className="w-full rounded-xl bg-amber-400 py-3 text-sm font-black text-amber-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50">{installing === 'الباقة الذهبية' ? 'جاري تثبيت الباقة...' : 'تثبيت الباقة'}</button></section></div>

          <section id="diagnostics" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"><div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center"><div><p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">System check</p><h2 className="text-2xl font-black">تشخيص الاتصال</h2></div><span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500">آخر فحص: منذ لحظات</span></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{diagnostics.map((item) => { const Icon = item.icon; return <div key={item.label} className="diagnostic-item"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><Icon className="h-5 w-5" /></span><div><p className="text-sm font-black">{item.label}</p><p className="text-xs text-slate-400">{connection === 'READY' ? item.detail : 'بانتظار الاتصال'}</p></div><StatusDot active={connection === 'READY'} /></div>; })}</div></section><div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400"><ShieldCheck className="h-4 w-4" /> اتصال محلي آمن · لا يتم إرسال أوامر ADB إلى الخادم</div>
        </div></section>

      {showHelp && <div className="fixed inset-0 z-50 grid place-items-center bg-[#172238]/40 p-5 backdrop-blur-sm" onClick={() => setShowHelp(false)}><div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-black">قبل توصيل السيارة</h2><button onClick={() => setShowHelp(false)} className="icon-button"><X className="h-5 w-5" /></button></div><ol className="space-y-4 text-sm font-semibold leading-6 text-slate-600"><li><b className="ml-2 text-blue-600">01</b> شغّل شاشة Jetour T2 ووصل كابل USB بالكمبيوتر.</li><li><b className="ml-2 text-blue-600">02</b> استخدم Google Chrome أو Microsoft Edge المحدث.</li><li><b className="ml-2 text-blue-600">03</b> وافق على نافذة USB ثم اسمح بتصحيح الأخطاء من الشاشة.</li></ol><div className="mt-6 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-900">هذه نسخة POC تجريبية. يلزم HTTPS وجهاز Jetour T2 فعلي لتفعيل WebUSB وWebADB.</div></div></div>}
    </main>
  );
}