/* ═══════════════════════════════════════════════════════════════
   NatMesh · I18N (EN / TR)
   English lives in the HTML as the source of truth.
   This file holds the Turkish overrides + the toggle machinery.
═══════════════════════════════════════════════════════════════ */

/* ─── DOM translations (innerHTML, keyed by data-i18n) ───────── */
const I18N_DOM = {
  tr: {
    /* classification bars */
    'cb.rules': '202 / 202 KURAL YÜKLENDİ',
    'cb.parsers': '28 AYRIŞTIRICI AKTİF',
    'cb.offline': 'ÇEVRİMDIŞI · TELEMETRİ YOK',
    'cb.opuse': 'OPERASYONEL KULLANIM İÇİN',
    'cb.eod': 'BELGE SONU',
    'cb.dist': 'DAĞITIM · BİLDİRİM A',
    'cb.destroy': 'GEREK KALMADIĞINDA İMHA EDİN',
    'cb.page': 'SAYFA 01 / 01',

    /* brand + nav */
    'brand.tag': 'YAPILANDIRMA · GÜVENLİK · DENETİM',
    'nav.scanner': 'Tarayıcı',
    'nav.compliance': 'Uyumluluk',
    'nav.vs': 'Nipper ile',
    'nav.integrity': 'Bütünlük',
    'nav.pricing': 'Fiyatlandırma',
    'nav.cta': 'Lisans İste',

    /* hero */
    'hero.h1': 'Her hatalı yapılandırma.<br><span class="amber">Açığa çıkar.</span><br>İhlal gerçekleşmeden önce.',
    'hero.lede': 'NatMesh; savunma, finans ve DevSecOps ekipleri için <strong>çevrimdışı öncelikli, çok-üreticili</strong> bir ağ yapılandırma denetleyicisidir. Bir yapılandırma dosyası bırakın. Ağınıza tek bir paket bile gitmeden CVSS puanlı, uyumlulukla eşlenmiş, denetime hazır bir bulgu raporu alın.',
    'hero.btn1': 'Lisans İste\n            <span class="arrow">→</span>',
    'hero.btn2': 'Canlı taramayı izle',
    'hero.fact1': 'Güvenlik kuralı',
    'hero.fact2': 'Üretici ayrıştırıcısı',
    'hero.fact3': 'Çerçeve',
    'hero.fact4': 'Eve telefon eden çağrı',

    /* terminal chrome */
    'term.file': 'DOSYA:',
    'term.found': 'BULUNAN',
    'term.live': 'CANLI',
    'term.status': 'DURUM',

    /* vendor strip */
    'vendor.label': '28 AYRIŞTIRICI · SERTİFİKALI',

    /* §01 scanner */
    's1.ey': '§ 01 · MOTOR',
    's1.h': 'Gerçek bir yapılandırmanın<br>parçalanışını izleyin.',
    's1.lede': 'Ajan yok. SNMP yoklaması yok. Kimlik bilgisi yok. Dışa aktarılan yapılandırmayı bırakın; motor üreticiyi belirler, her kural paketini gezer ve saniyeler içinde CVE, CVSS, STIG ve düzeltme önerisiyle bir bulgu yazar.',
    's1.stream': 'BULGULAR · AKIŞ',

    /* §02 scoring */
    's2.ey': '§ 02 · PUANLAMA',
    's2.ey2': 'DÖRT SİSTEM · TEK BULGU',
    's2.h': 'Bir denetçinin karşısında<br>savunabileceğiniz risk.',
    's2.lede': 'Her bulgu dört bağımsız puanla gelir. Önem için CVSS, DoD duruşu için STIG CAT, üretici hizalaması için Cisco SIR ve cihaz rolüne göre ağırlıklandırılmış 0–100 bileşik puan — çünkü aynı hatalı yapılandırma, bir sınır güvenlik duvarında ve bir erişim anahtarında aynı risk değildir.',
    's2.c1': 'Bulgu başına temel, zamansal ve çevresel puanlar. Standart, savunulabilir ve SIEM beslemesi için makine tarafından ayrıştırılabilir.',
    's2.c2': 'Her bulguyu ilgili DISA STIG karşısında Kategori I/II/III ile eşler. Doğrudan RMF paketinize düşer.',
    's2.c3': 'Cisco platformları için Cisco Security Impact Rating — üreticinin kendi dilini konuşur, böylece PSIRT bültenleri temiz şekilde hizalanır.',
    's2.c4t': 'Bileşik · Rol-Ağırlıklı',
    's2.c4': 'Bizim 0–100 puanımız. Aynı hatalı yapılandırma bir sınır güvenlik duvarında, bir erişim anahtarına göre daha yüksek puan alır — çünkü mesele tam da maruziyet bağlamıdır.',

    /* §03 compliance */
    's3.ey': '§ 03 · UYUMLULUK',
    's3.ey2': 'ALTI ÇERÇEVE · TEK GEÇİŞ',
    's3.h': 'Denetim kanıtı,<br>önceden eşlenmiş.',
    's3.lede': 'Kanıtıyla birlikte denetim başına otomatik üretilen geçti/kaldı sonucu. PDF\'i bir QSA\'ya, bir Yetkilendirme Görevlisine veya bir CMMC C3PAO\'ya verin; ağınızı zaten düşündükleri biçimde okusunlar.',
    's3.f1sub': '12 kurallık özel paket · NIST 800-53 r5',
    's3.f1p': 'Her bulgu, önem ve CCI referanslarıyla bir STIG Vul-ID\'sine eşlenir. Kutudan çıktığı haliyle RMF\'e hazır kanıt paketi.',
    's3.f2sub': 'Gereksinimler 1 · 2 · 6 · 8 · 10',
    's3.f2p': 'v4.0 nihai standardına göre yazılmış özel 10 kurallık paket. Kontrol numaralarıyla QSA düzeyinde metin kanıtı.',
    's3.f3sub': 'NIST 800-171 + 800-172',
    's3.f3p': 'Her DIB yüklenicisinin bir C3PAO incelemesinde göreceği değerlendirme hedeflerine bağlı 14 özel CMMC kuralı.',
    's3.f4sub': 'AC · SC · IA · AU · CM · SI · SA',
    's3.f4p': 'Her kurala etiketlenmiş kontrol aileleri. FedRAMP, FISMA ve StateRAMP değerlendirme paketlerine doğrudan kanıt.',
    's3.f5sub': 'CSC v8 · çapraz etiketli',
    's3.f5p': 'Denetim programlarıyla çapraz eşleme için her kurala iliştirilmiş Center for Internet Security kontrol numaraları.',
    's3.f6sub': 'Parola ve kimlik güvencesi',
    's3.f6p': 'Her Cisco parola tipini (0, 5, 7, 8, 9) tespit eder ve 800-63B ezberlenen sır kılavuzuna göre derecelendirir.',

    /* §04 depth */
    's4.ey': '§ 04 · DERİNLİK',
    's4.ey2': 'BİR TARAYICININ ASLA GÖREMEYECEĞİ',
    's4.h': 'Başka hiçbir şeyin<br>yapmadığı üç şey.',
    's4.lede': 'Bir port tarayıcı neyin açık olduğunu okur. NatMesh neyin <em>yazıldığını</em> okur — ve son on iki aydır neyin yazıldığını. Segmentasyon duruşu, zaman içindeki sapma ve şimdiye dek yürüttüğünüz her taramanın kurcalamaya karşı dayanıklı zinciri.',
    's4.c1e': 'Zero Trust puanlaması',
    's4.c1h': 'Segmentasyon, derecelendirildi.',
    's4.c1p': 'Her güvenlik duvarı, ACL ve bölge politikası bir Zero Trust ölçeğinde puanlanır — örtük any-any, aşırı izinli çıkış, eksik mikro-segmentasyon hepsi sıralanmış bulgular olarak ortaya çıkar.',
    's4.c2e': 'Sapma tespiti',
    's4.c2h': 'Her tarama, sorgulanabilir.',
    's4.c2p': 'Yerel DuckDB her taramayı saklar. Herhangi iki çalıştırmayı karşılaştırın; NatMesh hangi bulguların düzeltildiğini, hangilerinin geri geldiğini ve altın temele göre neyin yeni olduğunu gösterir.',
    's4.c3e': 'Kurcalamaya karşı dayanıklı denetim',
    's4.c3h': 'Düzenlendiyse, haberiniz olur.',
    's4.c3p': 'Her tarama olayı bir öncekine hash zinciriyle bağlanır. <code style="font-family:var(--f-mono);color:var(--amber)">verify_audit_integrity()</code> zinciri gezer ve herhangi bir kopukluğu işaretler — tek bir değiştirilmiş bayt bile.',

    /* §05 comparison */
    's5.ey': '§ 05 · KARŞILAŞTIRMA',
    's5.ey2': 'GİZLİLİĞİ KALDIRILDI · DAĞITIM İÇİN',
    's5.h': 'Nipper Omnisight<br><span style="color:var(--amber)"><span class="brandcase">NatMesh</span>\'e karşı.</span>',
    's5.lede': 'Nipper bu kategoriyi bir on yıl boyunca tek başına elinde tuttu. Motor 2018\'den bu yana anlamlı bir ilerleme kaydetmedi. İşte aynı özellik listesi, yan yana. Siyah çubuklar, mevcut oyuncunun söyleyecek hiçbir şeyinin olmadığı yerler.',
    's5.rows': '13 SATIR',
    's5.cap': 'YETENEK',
    's5.r1': 'Üretici ayrıştırıcıları<span class="sub">cisco · juniper · forti · palo · …</span>',
    's5.r2': 'Güvenlik kuralları<span class="sub">denetlenen desenler</span>',
    's5.r3': 'Yalnızca çevrimdışı, hava boşluğu uyumlu<span class="sub">telemetri yok, lisans sunucusu yok</span>',
    's5.yes': 'Evet',
    's5.r4': 'Cihaz rolüne göre bağlamsal risk<span class="sub">sınır · kenar · erişim</span>',
    's5.r4v': 'Rol-ağırlıklı',
    's5.r5': 'Zero Trust segmentasyon puanlaması<span class="sub">politika grafiği + not</span>',
    's5.r5v': 'Yerleşik',
    's5.r6': 'Çevrimdışı CVE eşleştirme<span class="sub">statik KB + NVD önbelleği</span>',
    's5.r7': 'Özel CMMC 2.0 kural paketi<span class="sub">L2 + L3</span>',
    's5.r7v': '14 kural',
    's5.r8': 'Özel DISA STIG kural paketi<span class="sub">CAT I/II/III</span>',
    's5.r8v': '12 kural',
    's5.r9': 'CI/CD için SARIF çıktısı<span class="sub">GitHub Actions · Azure DevOps</span>',
    's5.r9v': 'Birinci sınıf',
    's5.r10': 'Tarama-üstüne-tarama sapma tespiti<span class="sub">DuckDB · altın temel</span>',
    's5.r10v': '90 günlük pencere',
    's5.r11': 'Kurcalamaya karşı dayanıklı denetim zinciri<span class="sub">hash bağlı olaylar</span>',
    's5.r12': 'Genişletilebilir kurallar — kod yok<span class="sub">bildirimsel YAML paketleri</span>',
    's5.r13': 'Beyaz etiketli raporlar<span class="sub">şirket / logo / altbilgi</span>',
    's5.r13t': 'Ücretli eklenti',
    's5.r13v': 'Dahil',
    's5.r14': 'Lisans modeli<span class="sub">nasıl ödüyorsunuz</span>',
    's5.r14t': 'Cihaz başına abonelik',
    's5.r14v': 'Tek seferlik, makine başına',
    's5.stamp': 'GİZLİLİĞİ KALDIRILDI<span>18·05·2026</span>',
    's5.sum': 'Her modern yetenekte — <strong>Zero Trust puanlaması, rol-ağırlıklı risk, çevrimdışı CVE eşleştirme, SARIF/CI-CD çıktısı, sapma tespiti ve kurcalamaya karşı dayanıklı denetim izi</strong> — Nipper\'ın sütuna koyacak bir şeyi yok. Mevcut oyuncuya saygımız var. Biz sadece bu kategorinin önümüzdeki on yılını yayına aldık.',

    /* §06 personas */
    's6.ey': '§ 06 · OPERATÖRLER',
    's6.ey2': 'DÖRT PROFİL · TEK LİSANS',
    's6.h': 'NatMesh\'i kimler kullanır.',
    's6.lede': 'Alıcı motoru değiştirmez. Motor, alıcının görevini değiştirir. Savunma yüklenicileri, ödeme-kartı ekipleri, MSSP\'ler ve DevSecOps; hepsi aynı ikili dosyayı kullanır.',
    's6.use1': 'KULLANANLAR · 01',
    's6.p1h': 'Savunma ve Federal',
    's6.p1a': 'Hava boşluğu gereksinimi, listedeki her SaaS rakibini eler.',
    's6.p1b': 'DISA STIG + CMMC 2.0 paketleri hazır gelir — danışman tutmaya gerek yok.',
    's6.p1c': 'RMF\'e hazır kanıt, doğrudan AO\'nun paketine düşer.',
    's6.use2': 'KULLANANLAR · 02',
    's6.p2h': 'Finans · PCI',
    's6.p2a': 'Kurcalamaya karşı dayanıklı denetim günlüğü — tam da bir QSA\'nın görmek istediği şey.',
    's6.p2b': 'Req 1/2/6/8/10 eşlemesiyle PCI-DSS 4.0 kontrol kanıtı.',
    's6.p2c': 'Bankanın yıllık ROC destekleyici kanıtı için beyaz etiketli PDF.',
    's6.use3': 'KULLANANLAR · 03',
    's6.p3h': 'MSSP\'ler ve Danışmanlıklar',
    's6.p3a': 'Başsız CLI, tek bir iş istasyonundan toplu olarak 100 yapılandırmayı tarar.',
    's6.p3b': 'Beyaz etiketli PDF\'ler her müşteri için şirket adını, logosunu ve altbilgisini değiştirir.',
    's6.p3c': 'Analist başına tek makine lisansı — yönetilecek cihaz başına sayaç yok.',
    's6.use4': 'KULLANANLAR · 04',
    's6.p4h': 'DevSecOps',
    's6.p4a': 'SARIF çıktısı GitHub ve Azure DevOps PR\'larında yerel olarak görüntülenir.',
    's6.p4b': 'Kritik/yüksekte çıkış kodu 2 — yapıyı başarısız kıl, birleştirmeyi engelle.',
    's6.p4c': 'Config-as-code dostu. Kural motorunun kendisi YAML\'dır.',

    /* §07 ci/cd */
    's7.ey': '§ 07 · CI/CD',
    's7.ey2': 'SARIF · BİRİNCİ SINIF',
    's7.h': 'Boru hattınıza<br>ekleyin. Bitti.',
    's7.lede': '<span class="mono" style="color:var(--amber)">natmesh-cli</span> tek bir statik ikili dosyadır. GitHub Actions veya Azure DevOps boru hattınıza bir adım ekleyin. GitHub Güvenlik sekmesine akan aynı SARIF; Defender, Sentinel ve her modern SIEM\'e de düşer.',

    /* §08 pricing */
    's8.ey': '§ 08 · LİSANS',
    's8.ey2': 'MAKİNEYE KİLİTLİ · ÇEVRİMDIŞI',
    's8.h': 'Tek lisans dosyası.<br>Tek makine. Sunucu yok.',
    's8.lede': 'Bir kez ödeyin. <span class="mono" style="color:var(--amber)">natmesh.lic</span> lisans dosyası bir makine kimliğine bağlanır ve o iş istasyonunda sonsuza dek çalışır. Eve telefon yok. Abonelik sayacı yok. Sözleşmeniz değiştiğinde kaybedeceğiniz bir SaaS bağımlılığı yok.',
    's8.t1h': 'Analist',
    's8.t1b': 'Tek iş istasyonu. Tek operatör. Bir kurum içi güvenlik mühendisinin filosunu denetlemesi için gereken her şey.',
    's8.t1per': 'Tek seferlik · makine başına · süresiz',
    's8.t1l1': 'Tüm 202 güvenlik kuralı',
    's8.t1l2': 'Tüm 28 üretici ayrıştırıcısı',
    's8.t1l3': 'Tüm 6 uyumluluk çerçevesi',
    's8.t1l4': 'PDF · HTML · Excel · CSV · SARIF · JSON',
    's8.t1l5': 'Sapma ve kurcalamaya dayanıklı denetim zinciri',
    's8.t1l6': 'GUI + başsız CLI',
    's8.t1l7': 'Beyaz etiketli markalama',
    's8.t1l8': 'Öncelikli destek SLA\'sı',
    's8.req': 'Lisans İste',
    's8.most': '◆ EN ÇOK TERCİH EDİLEN',
    's8.t2h': 'Saha Birimi',
    's8.t2b': 'MSSP\'ler ve danışmanlıklar için. Beş analist koltuğu, beyaz etiketli raporlar, zamanlanmış toplu taramalar.',
    's8.t2per': 'Tek seferlik · 5 makine · süresiz',
    's8.t2l1': 'Analist\'teki her şey',
    's8.t2l2': 'Beş makineye kilitli lisans',
    's8.t2l3': 'Beyaz etiketli raporlar (logo · ad · altbilgi)',
    's8.t2l4': 'Zamanlanmış taramalar + altın temel uyarıları',
    's8.t2l5': 'Toplu CLI · çalıştırma başına 100+ yapılandırma',
    's8.t2l6': 'CI/CD boru hattı şablonları',
    's8.t2l7': 'E-posta desteği · 1 iş günü',
    's8.t2l8': 'Yerinde eğitim hizmeti',
    's8.t3h': 'Komuta',
    's8.t3b': 'Savunma ana yüklenicileri, federal SI ve büyük finans kuruluşları için. Sınırsız koltuk. Özel kural paketleri. Yerinde devreye alma.',
    's8.t3price': 'Özel',
    's8.t3per': 'Teklif için iletişime geçin',
    's8.t3l1': 'Saha Birimi\'ndeki her şey',
    's8.t3l2': 'Sınırsız makine lisansı',
    's8.t3l3': 'Özel kural paketleri (biz yazarız, siz sahibi olursunuz)',
    's8.t3l4': 'Hava boşluğu kurulumu ve gizli ağ rehberliği',
    's8.t3l5': 'Özel Signal kanalı + atanmış TAM',
    's8.t3l6': 'Yerinde devreye alma (1 hafta, dahil)',
    's8.t3l7': 'Kaynak emaneti mevcut',
    's8.t3l8': 'Öncelikli CVE paketi güncellemeleri',
    's8.talk': 'Bizimle konuşun',

    /* §09 faq */
    's9.h': 'Sıkça aldığımız<br>sorular.',
    's9.lede': 'Burada olmayan bir şey varsa sorun. Mühendisliği mühendisler yanıtlar.',
    's9.q1': 'NatMesh hiç eve telefon eder mi?',
    's9.a1': '<p>Hayır. Sıfır telemetri. Lisans sunucusu yok. Güncelleme sinyali yok. <code>natmesh.lic</code> yerel olarak makine kimliğine göre doğrulanır. İkili dosya, hava boşluklu Sınıf C ağlarında değişiklik olmadan çalışır.</p>',
    's9.q2': 'CVE eşleştirme çevrimdışı nasıl oluyor?',
    's9.a2': '<p>İkili dosyada, derlenmiş 22 yüksek etkili gerçek dünya CVE\'sinden oluşan bir KB gelir (CVE-2024-3400, CVE-2024-21762, CVE-2023-27997, CVE-2022-42475, CVE-2018-0101 ve diğerleri). Çevrimdışı bir NVD JSON önbelleği <code>~/.natmesh/nvd_cache/</code> konumunda bulunur. Canlı NVD API\'si yalnızca tercihe bağlıdır.</p>',
    's9.q3': 'Ekibim özel kurallar ekleyebilir mi?',
    's9.a3': '<p>Evet. Kurallar saf YAML\'dır — <code>prerequisite_patterns</code>, <code>required_patterns</code>, <code>negative_patterns</code> ve doğrudan rapora akan anlatı alanları (<code>checked_text</code>, <code>matters_text</code>, <code>impact_rating</code>). Motoru genişletmek için Python gerekmez.</p>',
    's9.q4': 'Puanlamanızda gerçekte farklı olan ne?',
    's9.a4': '<p>Bulgu başına dört paralel puan: CVSS v3.1, DISA STIG CAT, Cisco SIR ve cihazın trafik yolundaki rolüne göre ağırlıklandırılmış NatMesh 0–100 bileşik puanı. Aynı SNMP "public" topluluğu, bir sınır güvenlik duvarında ve bir erişim anahtarında çok farklı rol-ağırlıklı sayılar üretir.</p>',
    's9.q5': 'Denetim izi kurcalamaya karşı nasıl dayanıklı?',
    's9.a5': '<p>Her tarama olayı bir öncekine hash zinciriyle bağlanır. <code>verify_audit_integrity()</code> zinciri uçtan uca gezer. Geçmişte herhangi bir yerdeki tek bir değiştirilmiş bayt zinciri kırar ve işaretlenir.</p>',
    's9.q6': 'CLI çıkış kodu ne anlama gelir?',
    's9.a6': '<p><code>natmesh-cli</code> temizse <code>0</code>, bilgi/düşük bulgularda <code>1</code> ve herhangi bir kritik veya yüksek bulguda <code>2</code> ile çıkar. CI\'ya <code>--exit-on critical,high</code> ile ekleyin; boru hattınız birleştirmeyi otomatik olarak engeller.</p>',
    's9.q7': 'Gerçekten tek seferlik bir lisans mı?',
    's9.a7': '<p>Evet. Lisans dosyası bir makine kimliğine bağlanır ve o iş istasyonunda süresizdir. Yıllık bakım isteğe bağlıdır — ve yalnızca yeni kural paketleri ile CVE güncellemeleri kazandırır. Satın aldığınız motor ne olursa olsun çalışmaya devam eder.</p>',

    /* cta */
    'cta.h': 'Ertelediğiniz denetimin<br>tetiğini çekin.',
    'cta.p': 'On beş günlük değerlendirme lisansı. Tek bir makineye düşer. Katlanacak demo yok, atlatılacak SDR yok — ikili dosya sadece çalışır.',
    'cta.btn1': 'Lisans Dosyası İste\n        <span class="arrow">→</span>',
    'cta.btn2': 'Mühendislikle konuşun',

    /* footer */
    'foot.mono': 'YAPI · <span class="amber">1.4.2</span><br>\n          KURAL · <span class="amber">202</span><br>\n          AYRIŞTIRICI · <span class="amber">28</span><br>\n          NVD-ÖNBELLEK · <span class="amber">2026-05-15</span><br>\n          TELEMETRİ · <span class="amber">YOK</span>',
    'foot.c1h': 'Motor',
    'foot.c1a': 'Canlı tarayıcı',
    'foot.c1b': 'Puanlama sistemleri',
    'foot.c1c': 'Sapma ve denetim zinciri',
    'foot.c1d': 'Zero Trust',
    'foot.c2h': 'Uyumluluk',
    'foot.c3h': 'Karşılaştır',
    'foot.c3a': 'Nipper ile',
    'foot.c3b': 'SaaS tarayıcılarına karşı',
    'foot.c3c': 'NCM araçlarına karşı',
    'foot.c4h': 'İletişim'
  }
};

/* ─── meta (title / description) per language ────────────────── */
const I18N_META = {
  en: {
    title: 'NatMesh · Network Configuration Security Auditor',
    desc: 'Offline-first, multi-vendor configuration auditor — 202 rules · 28 parsers · 6 compliance frameworks. CMMC 2.0, DISA STIG, PCI-DSS 4.0, NIST 800-53. Air-gap compatible.'
  },
  tr: {
    title: 'NatMesh · Ağ Yapılandırma Güvenlik Denetleyicisi',
    desc: 'Çevrimdışı öncelikli, çok-üreticili yapılandırma denetleyicisi — 202 kural · 28 ayrıştırıcı · 6 uyumluluk çerçevesi. CMMC 2.0, DISA STIG, PCI-DSS 4.0, NIST 800-53. Hava boşluğu uyumlu.'
  }
};

/* ─── Dynamic strings (used by scanner.js via window.t) ──────── */
const I18N_DYN = {
  en: {
    /* Abstract keys whose English value isn't the key itself.
       Pass-through strings (boot lines, finding messages) use the
       English text as the key, so they fall through to the key in EN. */
    'audit_complete': '› audit complete · {n} findings · 4 critical · 2 high · 1 medium',
    'risk_summary': '› risk score 87/100 · CVSS max 9.8 · STIG-CAT-I exposures present',
    'report_exported': '› report exported · clr-2026-05-18-edge-fw-01.pdf · sarif=12',
    'engine_ready': '› natmesh-csc engine ready · 202 rules loaded',
    'findings_n': '{n} findings'
  },
  tr: {
    /* terminal status labels */
    'BOOT': 'AÇILIŞ',
    'INITIALIZING': 'BAŞLATILIYOR',
    'SCANNING': 'TARANIYOR',
    'COMPLETE': 'TAMAMLANDI',

    /* hero terminal boot + summary lines */
    '› natmesh-csc v1.4.2 · initializing': '› natmesh-csc v1.4.2 · başlatılıyor',
    '› loading rule packs … 16/16 [OK]': '› kural paketleri yükleniyor … 16/16 [OK]',
    '› parsers ready · 28 vendors registered': '› ayrıştırıcılar hazır · 28 üretici kayıtlı',
    '› ingesting edge-fw-01.cfg · 1,247 lines · sha=0xa3f4': '› edge-fw-01.cfg alınıyor · 1.247 satır · sha=0xa3f4',
    '› vendor identified: cisco-ios-xe 15.4 · role: BORDER-FW': '› üretici belirlendi: cisco-ios-xe 15.4 · rol: SINIR-FW',
    '› audit start · 2026-05-18T14:22:08Z': '› denetim başlangıcı · 2026-05-18T14:22:08Z',
    'audit_complete': '› denetim tamamlandı · {n} bulgu · 4 kritik · 2 yüksek · 1 orta',
    'risk_summary': '› risk puanı 87/100 · CVSS maks 9.8 · STIG-CAT-I maruziyetleri mevcut',
    'report_exported': '› rapor dışa aktarıldı · clr-2026-05-18-edge-fw-01.pdf · sarif=12',
    'engine_ready': '› natmesh-csc motoru hazır · 202 kural yüklendi',

    /* live scanner */
    'findings_n': '{n} bulgu',

    /* finding messages */
    'Plain-text Type 0 enable password': 'Düz metin Tip 0 enable parolası',
    'Local-only auth · no fallback': 'Yalnızca yerel kimlik doğrulama · yedek yok',
    'Telnet enabled on VTY lines': 'VTY hatlarında Telnet etkin',
    'Default SNMP community "public"': 'Varsayılan SNMP topluluğu "public"',
    'Default SNMP "private" with RW': 'RW yetkili varsayılan SNMP "private"',
    'SSHv1 protocol enabled': 'SSHv1 protokolü etkin',
    'HTTP server enabled': 'HTTP sunucusu etkin',
    'Implicit permit-any-any on ACL 101': 'ACL 101 üzerinde örtük permit-any-any',
    'Type-5 (MD5) password hash detected': 'Tip-5 (MD5) parola özeti tespit edildi',
    'Telnet service enabled': 'Telnet hizmeti etkin',
    'SSHv1 explicitly enabled': 'SSHv1 açıkça etkin',
    'permit-any-any from untrust→trust': 'untrust→trust yönünde permit-any-any',
    'Type-7 (reversible) password': 'Tip-7 (geri döndürülebilir) parola',
    'Banner lacks DOD warning': 'Başlıkta DoD uyarısı eksik',
    'Weak cipher 3DES in IKEv1': 'IKEv1\'de zayıf şifre 3DES',
    'DH Group 2 (1024-bit MODP)': 'DH Grup 2 (1024-bit MODP)',
    'permit-any-any on outside ACL': 'dış ACL üzerinde permit-any-any',
    'Default community "public"': 'Varsayılan topluluk "public"',
    'Missing log timestamps': 'Günlük zaman damgaları eksik'
  }
};

/* ═══════════════════════════════════════════════════════════════
   ENGINE
═══════════════════════════════════════════════════════════════ */
(function i18nEngine() {
  const STORE_KEY = 'nm-lang';
  const SUPPORTED = ['en', 'tr'];

  function detect() {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('tr') ? 'tr' : 'en';
  }

  let lang = detect();

  // Cache the original English DOM so we can swap back without reloading.
  const EN_DOM = {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!(key in EN_DOM)) EN_DOM[key] = el.innerHTML;
  });

  function applyDOM(l) {
    const dict = l === 'en' ? EN_DOM : I18N_DOM[l] || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = (l === 'en') ? EN_DOM[key] : (dict[key] != null ? dict[key] : EN_DOM[key]);
      if (val != null) el.innerHTML = val;
    });
  }

  function applyMeta(l) {
    const m = I18N_META[l] || I18N_META.en;
    document.title = m.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', m.desc);
    document.documentElement.lang = l;
  }

  function updateToggles(l) {
    document.querySelectorAll('.lang-toggle .lang-opt').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === l);
    });
  }

  // Global translator for dynamic JS strings (scanner.js / main.js).
  window.NM = window.NM || {};
  window.NM.lang = lang;
  window.t = function t(key) {
    const map = I18N_DYN[window.NM.lang];
    if (map && map[key] != null) return map[key];
    return key;
  };

  function setLang(l, persist) {
    if (!SUPPORTED.includes(l)) return;
    lang = l;
    window.NM.lang = l;
    if (persist) localStorage.setItem(STORE_KEY, l);
    applyDOM(l);
    applyMeta(l);
    updateToggles(l);
    document.dispatchEvent(new CustomEvent('nm:langchange', { detail: { lang: l } }));
  }
  window.NM.setLang = setLang;

  // Wire up toggles (nav + mobile drawer).
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const opt = e.target.closest('.lang-opt');
      const next = opt ? opt.dataset.lang : (lang === 'en' ? 'tr' : 'en');
      setLang(next, true);
    });
  });

  // Initial apply.
  setLang(lang, false);
})();
