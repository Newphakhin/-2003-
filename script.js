document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  initApp();
});

const translations = {
  th: {
    'topbar.regLabel': 'เลขทะเบียนนิติบุคคล:',
    'topbar.status': 'สถานะนิติบุคคล: ยังดำเนินกิจการอยู่',
    'topbar.phoneLabel': 'โทรศัพท์:',
    'topbar.location': 'สำนักงานใหญ่: แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510',
    'brand.nameTh': 'บริษัท จักรพงษ์ ขนส่ง (2003) จำกัด',
    'nav.home': 'หน้าแรก',
    'nav.profile': 'ข้อมูลนิติบุคคล',
    'nav.scope': 'ขอบเขตการประกอบกิจการ',
    'nav.gallery': 'ยานพาหนะและการดำเนินงาน',
    'nav.contact': 'ที่ตั้งและการติดต่อ',
    'hero.docHeader': 'ข้อมูลนิติบุคคลและประชาสัมพันธ์องค์กร',
    'hero.title': 'บริษัท จักรพงษ์ ขนส่ง (2003) จำกัด',
    'hero.catLabel': 'หมวดธุรกิจ:',
    'hero.category': 'การขนส่งและขนถ่ายสินค้า และคนโดยสารทางบก (รถรับส่งไม่ประจำทาง)',
    'hero.objHeader': 'วัตถุประสงค์การประกอบกิจการ',
    'hero.objective': '“ประกอบกิจการขนส่งและขนถ่ายสินค้า และคนโดยสารทางบก รถรับส่งไม่ประจำทาง ทั่วประเทศ”',
    'hero.btnPhone': 'โทรศัพท์: 087-332-8245',
    'hero.btnProfile': 'รายละเอียดทะเบียนนิติบุคคล',
    'hero.btnGallery': 'ภาพยานพาหนะและการปฏิบัติงาน',
    'hero.btnLine': 'ติดต่อผ่าน LINE Official',
    'hero.btnFacebook': 'Facebook (จักรพงษ์-หกล้อรับส่งคนงาน)',
    'hero.btnTiktok': 'ช่องทาง TikTok (@chakrapong0_0)',
    'facts.regNoLabel': 'เลขทะเบียนนิติบุคคล',
    'facts.typeLabel': 'ประเภทนิติบุคคล',
    'facts.typeVal': 'บริษัทจำกัด',
    'facts.dateLabel': 'วันที่จดทะเบียนจัดตั้ง',
    'facts.dateVal': '17 พฤษภาคม 2561',
    'facts.capitalLabel': 'ทุนจดทะเบียน',
    'facts.capitalVal': '1,000,000 บาท',
    'profile.secNum': 'ส่วนที่ ๑',
    'profile.title': 'ข้อมูลทะเบียนนิติบุคคล',
    'profile.subtitle': 'ข้อมูลการจดทะเบียนนิติบุคคลของ บริษัท จักรพงษ์ ขนส่ง (2003) จำกัด',
    'profile.copyAllBtn': 'คัดลอกข้อมูลนิติบุคคล',
    'profile.rowNameTh': 'ชื่อนิติบุคคล (ภาษาไทย)',
    'profile.rowNameEn': 'ชื่อนิติบุคคล (ภาษาอังกฤษ)',
    'profile.regNoLabel': 'เลขทะเบียนนิติบุคคล',
    'profile.copyBtn': 'คัดลอกหมายเลข',
    'profile.typeLabel': 'ประเภทธุรกิจ',
    'profile.typeVal': 'บริษัทจำกัด',
    'profile.statusLabel': 'สถานะนิติบุคคล',
    'profile.statusVal': 'ยังดำเนินกิจการอยู่',
    'profile.dateLabel': 'วันที่จดทะเบียนจัดตั้ง',
    'profile.dateVal': '17 พฤษภาคม 2561',
    'profile.capitalLabel': 'ทุนจดทะเบียน',
    'profile.capitalVal': '1,000,000 บาท',
    'profile.categoryLabel': 'หมวดธุรกิจ',
    'profile.categoryVal': 'การขนส่งและขนถ่ายสินค้า และคนโดยสารทางบก (รถรับส่งไม่ประจำทาง)',
    'profile.objLabel': 'วัตถุประสงค์',
    'profile.objVal': 'ประกอบกิจการขนส่งและขนถ่ายสินค้า และคนโดยสารทางบก รถรับส่งไม่ประจำทาง ทั่วประเทศ',
    'profile.addrLabel': 'ที่ตั้งสำนักงานใหญ่',
    'profile.addrVal': '299/258 หมู่บ้านเดอะ คัลเลอร์ส ซอยสุเหร่าคลองหนึ่ง 15 แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510',
    'profile.phoneLabel': 'หมายเลขโทรศัพท์',
    'profile.copyPhoneBtn': 'คัดลอกเบอร์โทร',
    'gallery.secNum': 'ส่วนที่ ๒',
    'gallery.title': 'ภาพยานพาหนะและการดำเนินงานของบริษัท',
    'gallery.subtitle': 'ประมวลภาพยานพาหนะและการปฏิบัติงานขนส่งและขนถ่ายสินค้าและคนโดยสารของ บริษัท จักรพงษ์ ขนส่ง (2003) จำกัด',
    'gallery.zoom': 'คลิกเพื่อดูภาพขนาดเต็ม',
    'gallery.img1Title': 'ลานจอดและขบวนรถโดยสารไม่ประจำทางของบริษัท',
    'gallery.img1Desc': 'ความพร้อมของขบวนรถโดยสารไม่ประจำทางที่จอดเตรียมพร้อมให้บริการอย่างเป็นระเบียบ',
    'gallery.img2Title': 'การให้บริการรับ-ส่งคนโดยสารและบุคลากร',
    'gallery.img2Desc': 'รถโดยสารไม่ประจำทางระบุชื่อ บริษัท จักรพงษ์ ขนส่ง (2003) จำกัด พร้อมให้บริการรับ-ส่งอย่างปลอดภัย',
    'gallery.img3Title': 'ความพร้อมของพนักงานขับรถและยานพาหนะประจำการ',
    'gallery.img3Desc': 'พนักงานขับรถประจำรถแต่ละคันเตรียมความพร้อมก่อนออกปฏิบัติงานขนส่ง',
    'gallery.img4Title': 'ขบวนยานพาหนะรองรับงานขนส่งขนาดใหญ่',
    'gallery.img4Desc': 'ศักยภาพของขบวนรถจำนวนมากที่พร้อมรองรับภารกิจการขนส่งทั้งสินค้าและคนโดยสาร',
    'gallery.img5Title': 'รถบัสโดยสารในเครือจักรพงษ์ขนส่ง',
    'gallery.img5Desc': 'รองรับการเดินทางและขนส่งคนโดยสารด้วยยานพาหนะหลากหลายขนาดตามความเหมาะสมของงาน',
    'gallery.img6Title': 'การเข้าให้บริการขนส่งตามโครงการและหน่วยงาน',
    'gallery.img6Desc': 'ยานพาหนะของบริษัทเข้าปฏิบัติงานรับ-ส่งบุคลากรและวัสดุอุปกรณ์ ณ สถานที่ปฏิบัติงานจริง',
    'gallery.img7Title': 'การจัดเรียงและรัดตรึงสัมภาระและรถจักรยานยนต์',
    'gallery.img7Desc': 'ภายในตัวรถกว้างขวาง รองรับการขนย้ายสิ่งของ สัมภาระ และรถจักรยานยนต์อย่างเป็นระเบียบและปลอดภัย',
    'gallery.img8Title': 'บริการขนส่งและขนถ่ายวัสดุอุปกรณ์',
    'gallery.img8Desc': 'รองรับการบรรทุกและขนส่งวัสดุอุปกรณ์สำหรับงานโครงการและภาคอุตสาหกรรม',
    'gallery.img9Title': 'การปฏิบัติงานรับ-ส่งคนงานและบุคลากรถึงจุดหมาย',
    'gallery.img9Desc': 'บริการรับ-ส่งบุคลากรด้วยรถโดยสารไม่ประจำทางที่มีหลังคาและโครงสร้างแข็งแรงปลอดภัย',
    'contact.secNum': 'ส่วนที่ ๓',
    'contact.title': 'ที่ตั้งสำนักงานใหญ่และช่องทางการติดต่อ',
    'contact.subtitle': 'ติดต่อประสานงานผ่านช่องทาง LINE Official หรือตรวจสอบสถานที่ตั้งสำนักงานใหญ่ตามที่อยู่จดทะเบียน',
    'contact.lineHeader': 'ช่องทางติดต่อประสานงาน (LINE Official)',
    'contact.lineDesc': 'สแกนคิวอาร์โค้ด (QR Code) ด้านล่างด้วยแอปพลิเคชัน LINE เพื่อติดต่อสอบถามข้อมูลกับ บริษัท จักรพงษ์ ขนส่ง (2003) จำกัด',
    'contact.phoneBtn': 'โทรติดต่อ: 087-332-8245',
    'contact.enlargeQr': 'ขยายภาพ QR Code',
    'contact.downloadQr': 'ดาวน์โหลดภาพ QR Code',
    'contact.facebookBtn': 'เพจ Facebook (จักรพงษ์-หกล้อรับส่งคนงาน)',
    'contact.tiktokBtn': 'ติดตามช่องทาง TikTok (@chakrapong0_0)',
    'contact.mapHeader': 'แผนที่ตั้ง บจก.จักรพงษ์ ขนส่ง (2003)',
    'contact.openMapBtn': 'เปิดใน Google Maps',
    'location.copyAddrBtn': 'คัดลอกที่อยู่'
  },
  en: {
    'topbar.regLabel': 'Corporate Registration No.:',
    'topbar.status': 'Status: Active Corporate Entity',
    'topbar.phoneLabel': 'Tel:',
    'topbar.location': 'Head Office: Bang Chan, Khlong Sam Wa, Bangkok 10510',
    'brand.nameTh': 'CHAKRAPONG TRANSPORT (2003) CO., LTD.',
    'nav.home': 'Home',
    'nav.profile': 'Corporate Profile',
    'nav.scope': 'Business Scope',
    'nav.gallery': 'Fleet & Operations',
    'nav.contact': 'Location & Contact',
    'hero.docHeader': 'OFFICIAL CORPORATE PROFILE & CREDENTIALS',
    'hero.title': 'CHAKRAPONG TRANSPORT (2003) COMPANY LIMITED',
    'hero.catLabel': 'Business Category:',
    'hero.category': 'Land Cargo & Non-Regular Passenger Transport Services',
    'hero.objHeader': 'Registered Corporate Objective',
    'hero.objective': '“Engaged in land transportation and handling of goods and passengers, non-regular passenger and cargo transport services nationwide.”',
    'hero.btnPhone': 'Tel: 087-332-8245',
    'hero.btnProfile': 'Corporate Registration Details',
    'hero.btnGallery': 'Fleet & Operations Gallery',
    'hero.btnLine': 'Contact via LINE Official',
    'hero.btnFacebook': 'Facebook (จักรพงษ์-หกล้อรับส่งคนงาน)',
    'hero.btnTiktok': 'Official TikTok (@chakrapong0_0)',
    'facts.regNoLabel': 'Registration Number',
    'facts.typeLabel': 'Entity Type',
    'facts.typeVal': 'Company Limited',
    'facts.dateLabel': 'Incorporation Date',
    'facts.dateVal': 'May 17, 2018',
    'facts.capitalLabel': 'Registered Capital',
    'facts.capitalVal': '1,000,000 Baht',
    'profile.secNum': 'SECTION I',
    'profile.title': 'Corporate Registration Information',
    'profile.subtitle': 'Official registration particulars of CHAKRAPONG TRANSPORT (2003) COMPANY LIMITED',
    'profile.copyAllBtn': 'Copy Corporate Profile',
    'profile.rowNameTh': 'Corporate Name (Thai)',
    'profile.rowNameEn': 'Corporate Name (English)',
    'profile.regNoLabel': 'Registration Number',
    'profile.copyBtn': 'Copy Number',
    'profile.typeLabel': 'Business Type',
    'profile.typeVal': 'Company Limited (บริษัทจำกัด)',
    'profile.statusLabel': 'Corporate Status',
    'profile.statusVal': 'Active (ยังดำเนินกิจการอยู่)',
    'profile.dateLabel': 'Date of Incorporation',
    'profile.dateVal': 'May 17, 2018 (17 พฤษภาคม 2561)',
    'profile.capitalLabel': 'Registered Capital',
    'profile.capitalVal': '1,000,000 Baht',
    'profile.categoryLabel': 'Business Category',
    'profile.categoryVal': 'Land Cargo & Non-Regular Passenger Transport Services',
    'profile.objLabel': 'Registered Objective',
    'profile.objVal': 'Engaged in land transportation and handling of goods and passengers, non-regular passenger and cargo transport services nationwide.',
    'profile.addrLabel': 'Registered Head Office',
    'profile.addrVal': '299/258 The Colours Village, Soi Suheraklongnueng 15, Bang Chan, Khlong Sam Wa, Bangkok 10510',
    'profile.phoneLabel': 'Telephone Number',
    'profile.copyPhoneBtn': 'Copy Phone',
    'gallery.secNum': 'SECTION II',
    'gallery.title': 'Company Fleet & Operations',
    'gallery.subtitle': 'Visual documentation of transport vehicles and cargo/passenger handling operations',
    'gallery.zoom': 'Click to view full image',
    'gallery.img1Title': 'Company Depot & Transport Fleet',
    'gallery.img1Desc': 'Organized fleet of commercial transport vehicles stationed at our yard',
    'gallery.img2Title': 'Passenger & Workforce Transport Operations',
    'gallery.img2Desc': 'Registered non-regular passenger transport vehicles operated by CHAKRAPONG TRANSPORT (2003) CO., LTD.',
    'gallery.img3Title': 'Driver & Vehicle Operational Readiness',
    'gallery.img3Desc': 'Dedicated drivers stationed with their assigned vehicles prior to dispatch',
    'gallery.img4Title': 'Large-Scale Convoy Capacity',
    'gallery.img4Desc': 'Extensive vehicle fleet ready to support major transport assignments',
    'gallery.img5Title': 'Passenger Coach Fleet',
    'gallery.img5Desc': 'Multi-size passenger transport buses supporting diverse transportation needs',
    'gallery.img6Title': 'On-Site Project Transport Operations',
    'gallery.img6Desc': 'Company transport vehicles operating directly at construction and industrial project sites',
    'gallery.img7Title': 'Secure Belongings & Motorcycle Transport',
    'gallery.img7Desc': 'Spacious interior accommodating organized and secure loading of belongings and motorcycles',
    'gallery.img8Title': 'Construction & Industrial Material Transport',
    'gallery.img8Desc': 'Reliable cargo handling and transport of industrial materials and supplies',
    'gallery.img9Title': 'Workforce & Passenger Shuttle Service',
    'gallery.img9Desc': 'Safe and structured passenger transportation to designated destinations',
    'contact.secNum': 'SECTION III',
    'contact.title': 'Head Office Location & Official Contact',
    'contact.subtitle': 'Official coordination via LINE QR Code and registered Head Office map',
    'contact.lineHeader': 'Official Coordination Channel (LINE)',
    'contact.lineDesc': 'Scan the QR Code below via the LINE application to contact CHAKRAPONG TRANSPORT (2003) COMPANY LIMITED',
    'contact.phoneBtn': 'Call: 087-332-8245',
    'contact.enlargeQr': 'Enlarge QR Code',
    'contact.downloadQr': 'Download QR Code',
    'contact.facebookBtn': 'Facebook Page (จักรพงษ์-หกล้อรับส่งคนงาน)',
    'contact.tiktokBtn': 'Follow on TikTok (@chakrapong0_0)',
    'contact.mapHeader': 'Company Location Map',
    'contact.openMapBtn': 'Open in Google Maps',
    'location.copyAddrBtn': 'Copy Address'
  }
};

let currentLang = 'th';
const QR_IMG_PATH = 'รูปQR Line/2413111.jpg';

function initApp() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      const nextLang = currentLang === 'th' ? 'en' : 'th';
      setLanguage(nextLang);
    });
  }

  // Lightbox triggers
  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      openLightbox(el.getAttribute('data-lightbox'));
    });
  });

  ['heroLineBtn', 'enlargeQrBtn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => openLightbox(QR_IMG_PATH));
    }
  });

  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Copy Buttons
  const copyRegNoBtn = document.getElementById('copyRegNoBtn');
  if (copyRegNoBtn) {
    copyRegNoBtn.addEventListener('click', () => {
      copyToClipboard('0105561083910', currentLang === 'th'
        ? 'คัดลอกเลขทะเบียนนิติบุคคล 0105561083910 เรียบร้อยแล้ว'
        : 'Copied Registration No.: 0105561083910');
    });
  }

  const copyAddrBtn = document.getElementById('copyAddrBtn');
  if (copyAddrBtn) {
    copyAddrBtn.addEventListener('click', () => {
      const addr = currentLang === 'th'
        ? '299/258 หมู่บ้านเดอะ คัลเลอร์ส ซอยสุเหร่าคลองหนึ่ง 15 แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510'
        : '299/258 The Colours Village, Soi Suheraklongnueng 15, Bang Chan, Khlong Sam Wa, Bangkok 10510';
      copyToClipboard(addr, currentLang === 'th'
        ? 'คัดลอกที่อยู่สำนักงานใหญ่เรียบร้อยแล้ว'
        : 'Copied Head Office address');
    });
  }

  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('087-332-8245', currentLang === 'th'
        ? 'คัดลอกหมายเลขโทรศัพท์ 087-332-8245 เรียบร้อยแล้ว'
        : 'Copied phone number: 087-332-8245');
    });
  }

  const copyAllInfoBtn = document.getElementById('copyAllInfoBtn');
  if (copyAllInfoBtn) {
    copyAllInfoBtn.addEventListener('click', () => {
      const infoBlock = [
        'ชื่อนิติบุคคล: บริษัท จักรพงษ์ ขนส่ง (2003) จำกัด',
        'ชื่อภาษาอังกฤษ: CHAKRAPONG TRANSPORT (2003) COMPANY LIMITED',
        'เลขทะเบียนนิติบุคคล: 0105561083910',
        'ประเภทธุรกิจ: บริษัทจำกัด',
        'สถานะ: ยังดำเนินกิจการอยู่',
        'วันที่จดทะเบียน: 17 พฤษภาคม 2561',
        'ทุนจดทะเบียน: 1,000,000 บาท',
        'หมวดธุรกิจ: การขนส่งและขนถ่ายสินค้า และคนโดยสารทางบก (รถรับส่งไม่ประจำทาง)',
        'วัตถุประสงค์: ประกอบกิจการขนส่งและขนถ่ายสินค้า และคนโดยสารทางบก รถรับส่งไม่ประจำทาง ทั่วประเทศ',
        'ที่ตั้งสำนักงานใหญ่: 299/258 หมู่บ้านเดอะ คัลเลอร์ส ซอยสุเหร่าคลองหนึ่ง 15 แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510',
        'โทรศัพท์: 087-332-8245'
      ].join('\n');
      copyToClipboard(infoBlock, currentLang === 'th'
        ? 'คัดลอกข้อมูลนิติบุคคลทั้งหมดเรียบร้อยแล้ว'
        : 'Copied corporate registration profile');
    });
  }
}

function openLightbox(src) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImage');
  if (modal && img) {
    img.src = src;
    modal.classList.remove('hidden');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang-btn]').forEach(el => {
    el.classList.toggle('active', el.dataset.langBtn === lang);
  });

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(message));
  } else {
    const temp = document.createElement('textarea');
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    showToast(message);
  }
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}
