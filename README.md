# bilsec.tr · Jekyll teması

GitHub Pages'in kendi derlemesiyle çalışır. Ek eklenti ya da GitHub Actions gerekmez.

## Kurulum

1. Bu klasörün içeriğini repo köküne koyun.
2. Yerelde denemek için:
   ```
   bundle install
   bundle exec jekyll serve
   ```
   Site http://localhost:4000 adresinde açılır.
3. GitHub › Settings › Pages › Source: **Deploy from a branch**, `main` / `(root)`.
4. Alan adı `CNAME` dosyasında (`bilsec.tr`). DNS'te GitHub Pages kayıtlarını tanımlayın, ardından "Enforce HTTPS" seçeneğini açın.

## Yayından önce yapılacaklar

- [ ] **Google Forms alan numaraları:** `_config.yml › form.alanlar`. Numaraları almak için formu düzenleyin, ⋮ menüsünden **Önceden doldurulmuş bağlantı al**'ı seçin, her alanı doldurup bağlantıyı kopyalayın. Bağlantıdaki `entry.…` değerleri bu alanlara yazılır. Numaralar girilmezse site formu göstermez, yerine e-posta seçeneği çıkar.
- [ ] Bir deneme gönderimi yapın ve yanıtın Google Forms'a düştüğünü kontrol edin. Tarayıcı Google'ın yanıtını okuyamadığı için yanlış bir numara olsa da form "gönderildi" der.
- [ ] Google formunda mesaj sorusu yok. Eklerseniz numarasını `form.alanlar.mesaj` alanına yazın; alan sitede kendiliğinden görünür.
- [ ] **KVKK metni (açık madde, ilk yayında bilerek bırakıldı):** Form yanıtları Google sunucularında saklanacak. `kvkk.md` dosyasındaki "yurt dışına aktarılmaz" ve "Türkiye'de tutulur" ifadeleri buna göre hukukçunuzla gözden geçirilmeli. Yazı tipleri de Google Fonts'tan yükleniyor.
- [ ] Telefon, adres, Mersis, sosyal hesaplar ve takvim bağlantısı: `_config.yml`. Yazar profil bağlantıları: `_yazarlar/*.md`.
- [ ] Blog kapak görselleri: yazılardaki `kapak:` satırı. Görsel yoksa kart ve yazı görselsiz yayımlanır.

## Nerede ne var

| Değiştirmek istediğiniz | Dosya |
|---|---|
| Telefon, e-posta, adres, unvan, Google Form, sosyal hesaplar | `_config.yml` |
| Üst menü | `_data/menu.yml` |
| Alt bilgi bağlantıları | `_data/altbilgi.yml` |
| Sayfa sonu çağrı bantları | `_data/cta.yml` |
| 13 kontrol alanı ve madde sayıları | `_data/kontrol_alanlari.yml` |
| SSS konuları, blog kategorileri | `_data/sss_konulari.yml`, `_data/blog_kategorileri.yml` |
| İkonlar | `_data/ikonlar.yml` |
| Blog yazıları | `_posts/YYYY-AA-GG-ad.md` |
| Kontrol alanı sayfaları | `_rehber/*.md` (`alan: 7`) |
| Sözlük terimleri | `_sozluk/*.md` |
| SSS soruları | `_sss/*.md` |
| Yazarlar | `_yazarlar/*.md` |
| KVKK | `kvkk.md` |
| Ana sayfa, ürün, çözüm, rehber, hakkımızda, iletişim | kökteki `.html` dosyaları (tasarım sayfaları) |

İçerik nasıl yazılır: `YAZIM-KILAVUZU.md`.

## Adresler

| Sayfa | Adres |
|---|---|
| Ürün / BT yönetimi | `/urun/`, `/urun/bt-yonetimi/` |
| Çözüm | `/cozumler/siber-hijyen-kobi/` |
| Rehber / alan | `/rehber/`, `/rehber/<dosya-adı>/` |
| Blog / yazı / kategori / etiket | `/blog/`, `/blog/<başlık>/`, `/blog/kategori/<ad>/`, `/blog/etiketler/` |
| SSS / soru | `/sss/`, `/sss/<dosya-adı>/` |
| Sözlük / terim | `/sozluk/`, `/sozluk/<dosya-adı>/` |
| Yazar | `/ekip/<dosya-adı>/` |
| Arama | `/ara/?q=…` (dizin: `/arama.json`) |
| RSS / site haritası | `/blog/feed.xml`, `/sitemap.xml`, `/robots.txt` |

## Teknik notlar

- Eklentiler: `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`, `jekyll-paginate`. Dördü de GitHub Pages'in izin verdiği eklentiler arasında.
- İçindekiler, `_includes/icindekiler.html` içinde sayfadaki `<h2 id>` başlıklarından üretilir.
- Yapılandırılmış veri (JSON-LD): kurum bilgisi her sayfada; ekmek kırıntısı, SSS, adım listesi, sözlük terimi, makale ve yazar verileri ilgili include'larda üretilir.
- JavaScript kapalıyken menü, arama kutusu, SSS ve içindekiler çalışmaya devam eder. Form doğrudan Google'a gönderilir. Arama sayfası JavaScript ister; kapalıysa içerik bölümlerine bağlantı verir.
- `assets/css/site.css` dosyası tasarım sisteminin `tokens/*.css` dosyaları ile `ui_kits/web-sitesi/site.css` birleştirilerek oluşturuldu. Token'lar değişirse bu dosya yeniden üretilmeli.
- Sözlükte harf başlığın ilk harfinden bulunur. "i" ile başlayan terimlere `harf: İ` yazın; Liquid "i" harfini "I"ya çevirir.
