export type Language = 'fa' | 'en' | 'ar';

export interface Translations {
  header: {
    home: string;
    about: string;
    certificates: string;
    team: string;
    trust: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewCertificates: string;
    viewTeam: string;
    trustText: string;
  };
  certificates: {
    title: string;
    subtitle: string;
    businessRegistration: string;
    tradeLicense: string;
    nationalId: string;
    birthCertificate: string;
    hseMs: string;
  };
  team: {
    title: string;
    subtitle: string;
    contact: string;
    admin1: string;
    admin2: string;
    admin3: string;
    admin4: string;
    admin5: string;
    adminInternational: string;
  };
  trust: {
    title: string;
    storeName: string;
    registrationNumber: string;
    managerName: string;
    issueDate: string;
    status: string;
    statusValid: string;
    description: string;
    verificationLink: string;
  };
  about: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    telegram: string;
    instagram: string;
  };
}

export const translations: Record<Language, Translations> = {
  fa: {
    header: {
      home: 'خانه',
      about: 'درباره ما',
      certificates: 'مدارک',
      team: 'تیم فروش',
      trust: 'نماد اعتماد',
      contact: 'تماس',
    },
    hero: {
      title: 'فلش storei - فروشگاه معتبر اکانت PUBG Mobile',
      subtitle: 'خرید و فروش امن با ضمانت و مدارک رسمی',
      viewCertificates: 'مشاهده مدارک',
      viewTeam: 'مشاهده تیم فروش',
      trustText: 'به فلش storei خوش آمدید ⚡\n\nفلش storei یک فروشگاه اینترنتی مستقل است که در زمینه خرید و فروش اکانت‌های PUBG Mobile فعالیت دارد. ما شرکت رسمی نیستیم ولی با شفافیت کامل، مدارک رسمی و نماد اعتماد، محیطی امن و قابل اعتماد برای کاربران فراهم کرده‌ایم. هر خرید دارای رسید و کد پیگیری است و تیم پشتیبانی ما آماده پاسخگویی است.',
    },
    certificates: {
      title: 'مدارک و گواهی‌های رسمی',
      subtitle: 'شفافیت کامل برای اعتماد شما',
      businessRegistration: 'گواهینامه ثبت انجمن صنفی',
      tradeLicense: 'پروانه کسب بازاریابی فضای مجازی',
      nationalId: 'کارت ملی',
      birthCertificate: 'شناسنامه',
      hseMs: 'گواهی بین‌المللی HSE-MS',
    },
    team: {
      title: 'تیم فروش ما',
      subtitle: 'پشتیبانی حرفه‌ای ۲۴/۷',
      contact: 'تماس با',
      admin1: 'ادمین ۱',
      admin2: 'ادمین ۲',
      admin3: 'ادمین ۳',
      admin4: 'ادمین ۴',
      admin5: 'ادمین ۵',
      adminInternational: 'ادمین خارج از کانال',
    },
    trust: {
      title: 'نماد اعتماد فلش storei',
      storeName: 'نام فروشگاه',
      registrationNumber: 'شماره ثبت / شناسه',
      managerName: 'نام مدیر',
      issueDate: 'تاریخ صدور',
      status: 'وضعیت',
      statusValid: 'معتبر',
      description: 'این فروشگاه مستقل با ارائه مدارک کامل و شفافیت در فعالیت‌های خود، تعهد به ارائه خدمات امن و باکیفیت دارد.',
      verificationLink: 'لینک اعتبارسنجی',
    },
    about: {
      title: 'درباره فلش storei',
      content: 'فلش storei یک فروشگاه مستقل و معتبر در زمینه خرید و فروش اکانت‌های PUBG Mobile است. ما با سابقه چند ساله فعالیت، تلاش می‌کنیم محیطی امن و شفاف برای کاربران فراهم کنیم. تمامی معاملات دارای رسید و کد پیگیری هستند و تیم پشتیبانی ما همواره در خدمت شماست.',
    },
    contact: {
      title: 'تماس با ما',
      name: 'نام',
      email: 'ایمیل',
      message: 'پیام',
      send: 'ارسال',
      telegram: 'کانال تلگرام',
      instagram: 'اینستاگرام',
    },
  },
  en: {
    header: {
      home: 'Home',
      about: 'About',
      certificates: 'Certificates',
      team: 'Sales Team',
      trust: 'Trust Badge',
      contact: 'Contact',
    },
    hero: {
      title: 'Flash storei - Trusted PUBG Mobile Account Store',
      subtitle: 'Safe buying and selling with guarantee and official documents',
      viewCertificates: 'View Certificates',
      viewTeam: 'View Sales Team',
      trustText: 'Welcome to Flash storei ⚡\n\nFlash storei is an independent online store operating in the field of buying and selling PUBG Mobile accounts. We are not a registered company, but with complete transparency, official documents, and trust badges, we provide a safe and reliable environment for users. Every purchase comes with a receipt and tracking code, and our support team is ready to assist you.',
    },
    certificates: {
      title: 'Official Documents & Certificates',
      subtitle: 'Complete transparency for your trust',
      businessRegistration: 'Trade Association Registration Certificate',
      tradeLicense: 'Virtual Space Marketing Business License',
      nationalId: 'National ID Card',
      birthCertificate: 'Birth Certificate',
      hseMs: 'International HSE-MS Certificate',
    },
    team: {
      title: 'Our Sales Team',
      subtitle: 'Professional 24/7 Support',
      contact: 'Contact',
      admin1: 'Admin 1',
      admin2: 'Admin 2',
      admin3: 'Admin 3',
      admin4: 'Admin 4',
      admin5: 'Admin 5',
      adminInternational: 'Admin Outside Channel',
    },
    trust: {
      title: 'Flash storei Trust Badge',
      storeName: 'Store Name',
      registrationNumber: 'Registration Number / ID',
      managerName: 'Manager Name',
      issueDate: 'Issue Date',
      status: 'Status',
      statusValid: 'Valid',
      description: 'This independent store, by providing complete documentation and transparency in its activities, is committed to providing safe and quality services.',
      verificationLink: 'Verification Link',
    },
    about: {
      title: 'About Flash storei',
      content: 'Flash storei is an independent and trusted store specializing in buying and selling PUBG Mobile accounts. With years of experience, we strive to provide a safe and transparent environment for users. All transactions come with receipts and tracking codes, and our support team is always at your service.',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      telegram: 'Telegram Channel',
      instagram: 'Instagram',
    },
  },
  ar: {
    header: {
      home: 'الرئيسية',
      about: 'من نحن',
      certificates: 'الشهادات',
      team: 'فريق المبيعات',
      trust: 'شارة الثقة',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'فلاش storei - متجر موثوق لحسابات PUBG Mobile',
      subtitle: 'الشراء والبيع الآمن مع الضمان والوثائق الرسمية',
      viewCertificates: 'عرض الشهادات',
      viewTeam: 'عرض فريق المبيعات',
      trustText: 'مرحباً بكم في فلاش storei ⚡\n\nفلاش storei هو متجر مستقل عبر الإنترنت يعمل في مجال شراء وبيع حسابات PUBG Mobile. نحن لسنا شركة مسجلة رسمياً، ولكن مع الشفافية الكاملة والوثائق الرسمية وشارات الثقة، نوفر بيئة آمنة وموثوقة للمستخدمين. كل عملية شراء تأتي مع إيصال ورمز تتبع، وفريق الدعم لدينا جاهز لمساعدتك.',
    },
    certificates: {
      title: 'الوثائق والشهادات الرسمية',
      subtitle: 'شفافية كاملة لثقتك',
      businessRegistration: 'شهادة تسجيل جمعية التجارة',
      tradeLicense: 'ترخيص أعمال التسويق في الفضاء الافتراضي',
      nationalId: 'بطاقة الهوية الوطنية',
      birthCertificate: 'شهادة الميلاد',
      hseMs: 'شهادة HSE-MS الدولية',
    },
    team: {
      title: 'فريق المبيعات لدينا',
      subtitle: 'دعم احترافي على مدار الساعة',
      contact: 'اتصل بـ',
      admin1: 'المشرف 1',
      admin2: 'المشرف 2',
      admin3: 'المشرف 3',
      admin4: 'المشرف 4',
      admin5: 'المشرف 5',
      adminInternational: 'المشرف خارج القناة',
    },
    trust: {
      title: 'شارة ثقة فلاش storei',
      storeName: 'اسم المتجر',
      registrationNumber: 'رقم التسجيل / المعرف',
      managerName: 'اسم المدير',
      issueDate: 'تاریخ الإصدار',
      status: 'الحالة',
      statusValid: 'صالح',
      description: 'هذا المتجر المستقل، من خلال تقديم وثائق كاملة والشفافية في أنشطته، ملتزم بتقديم خدمات آمنة وعالية الجودة.',
      verificationLink: 'رابط التحقق',
    },
    about: {
      title: 'عن فلاش storei',
      content: 'فلاش storei هو متجر مستقل وموثوق متخصص في شراء وبيع حسابات PUBG Mobile. مع سنوات من الخبرة، نسعى جاهدين لتوفير بيئة آمنة وشفافة للمستخدمين. جميع المعاملات تأتي مع إيصالات ورموز تتبع، وفريق الدعم لدينا دائماً في خدمتك.',
    },
    contact: {
      title: 'اتصل بنا',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال',
      telegram: 'قناة تيليجرام',
      instagram: 'انستغرام',
    },
  },
};
