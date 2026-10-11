---
alan: 7
title: Yedekleme
baslik_etiketi: "Yedekleme · Siber Hijyen-KOBİ kontrol alanı 07"
description: "Siber Hijyen-KOBİ'nin 7. alanı Yedekleme: 7.1–7.3 kriterleri, Orta seviye, politika ve uygulama kanıtları, geri dönüş testi, sık yapılan hatalar."
kart_metni: Alanın üç maddesi ve sunulacak kanıtlar.
ozet: Fidye yazılımı, donanım arızası ya da yanlışlıkla silme sonrasında işinize kaldığınız yerden devam edebilmeniz için istenen üç kontrol.
yazar: fatma-bayrambas-sahin
guncelleme: 2026-10-10
okuma: 10
kisa_yanit: "Yedekleme alanında üç madde var ve üçü de Orta seviyededir: kritik verili sistemler harici bir altyapıya yedeklenmeli, yedekler orada güvenli tutulmalı ve yedekten geri dönme (restore) testleri düzenli yapılmalıdır. Başlangıç seviyesinde bu alan aranmaz; Orta ve İleri seviyede üç madde de zorunludur."
kisa_yanit_kaynak: "Kaynak: SSB Siber Hijyen-KOBİ Denetim Kriterleri, madde 7.1–7.3 [1]"

# Kontrol kartları ve kanıt özeti tablosu bu listeden üretilir.
maddeler:
  - "no": "7.1"
    seviye: Orta
    baslik: Kritik veri içeren sistemler harici bir altyapıda yedeklenmelidir.
    ne_isteniyor: Hangi sistemlerde kritik veri bulunduğu belirlenir; bu sistemlerin yedeği aynı sunucu ya da aynı disk üzerinde değil, ayrı bir altyapıda alınır.
    kanitlar:
      - "Politika: yedekleme prosedürü ve kritik sistem listesi"
      - "Uygulama: yedek işinin hedefini gösteren ayar ekranı"
      - "Uygulama: son 30 günün yedek kayıtları"
    politika: Yedekleme prosedürü, kritik sistem listesi
    uygulama: Yedek hedefi ayarı, yedek kayıtları
    guncellik: Son 30 gün
    bilsec: Katman 2
  - "no": "7.2"
    seviye: Orta
    baslik: Yedekler, harici bir altyapıda güvenli bir şekilde tutulmalıdır.
    ne_isteniyor: Yedeğin bulunduğu yere erişim sınırlıdır, yedek şifrelidir ve fidye yazılımı asıl sistemi ele geçirse bile yedeğe ulaşamaz.
    kanitlar:
      - "Politika: yedeklere kimin erişebileceğini tanımlayan kural"
      - "Uygulama: erişim yetkisi ve şifreleme ayarı"
      - "Uygulama: yedeğin silinemez tutulduğunu gösteren saklama ayarı"
    politika: Yedek erişim kuralı
    uygulama: Yetki, şifreleme ve saklama ayarı
    guncellik: Denetim tarihinde
    bilsec: Katman 2
  - "no": "7.3"
    seviye: Orta
    baslik: Önemli veriler, belirli aralıklarla yedeklenmeli ve yedekten geri dönme (restore) testleri düzenli olarak yapılmalıdır.
    ne_isteniyor: Yedekleme sıklığı yazılı olarak belirlenir; yedekten geri yükleme düzenli denenir ve sonucu kayda geçer.
    kanitlar:
      - "Politika: yedekleme sıklığı ve test aralığını içeren prosedür"
      - "Uygulama: yedek takvimi ayarı"
      - "Uygulama: tarihli geri dönüş test raporları"
    politika: Sıklık ve test aralığı
    uygulama: Yedek takvimi, geri dönüş test raporu
    guncellik: Son 3 ay
    bilsec: Katman 2 ve 3

test:
  baslik: Bir klasörün yedekten geri yüklenmesi ve doğrulanması
  bilgiler:
    - { ad: Süre, deger: "~45 dakika", iso: PT45M }
    - { ad: Sıklık, deger: Prosedürde yazdığınız aralıkta }
    - { ad: Gerekenler, deger: "Yedek yazılımına erişim, boş bir test klasörü" }
  adimlar:
    - baslik: Test edilecek veriyi seçin
      metin: Kritik sistem listesinden bir klasör seçin. Her testte farklı bir klasör seçmek iyi bir alışkanlıktır.
    - baslik: Asıl konuma değil, test klasörüne geri yükleyin
      metin: Canlı verinin üzerine yazmamak için geri yüklemeyi ayrı bir klasöre yapın.
    - baslik: Dosyaların aynı olduğunu doğrulayın
      metin: Birkaç dosyayı açın; aşağıdaki komutla özet değerlerini karşılaştırın.
    - baslik: Sonucu ve süreyi kaydedin
      metin: Tarih, klasör, süre ve sonucu test raporuna yazın; raporu imzalayıp saklayın.

sorular:
  - soru: Başlangıç seviyesindeyiz. Yedekleme alanı bizden de istenir mi?
    yanit: Kriter setinde bu alanın üç maddesi de Orta seviyededir; Başlangıç seviyesinde aranmaz. Yine de yedeksiz çalışmak işletme riski olarak kalır.
  - soru: Harici disk yeterli mi?
    yanit: Disk asıl sistemden ayrı tutuluyor, erişimi sınırlı ve şifreliyse 7.1 ve 7.2 için kanıt olabilir. Sürekli takılı duran bir disk "güvenli tutulma" şartını karşılamaz.

kaynaklar:
  - ad: SSB Tedarik Zinciri Siber Hijyen-KOBİ Denetim Kriterleri
    url: https://siberhijyen.ssb.gov.tr/b/bilgilendirme.html
    aciklama: Savunma Sanayii Başkanlığı · Madde 7.1–7.3 · Erişim 10.10.2026
  - ad: Siber Hijyen KOBİ Belgelendirme Programı · Sıkça Sorulan Sorular
    url: https://siberhijyen.ssb.gov.tr/b/bilgilendirme.html
    aciklama: Savunma Sanayii Başkanlığı · Bölüm 5 · Erişim 10.10.2026
---

## Bu alan neyi kapsar {#kapsam}

Yedek almak işin yarısıdır. Kriterler, yedeğin **asıl sistemden ayrı bir altyapıda** durmasını ve **yedekten gerçekten geri dönülebildiğinin düzenli olarak gösterilmesini** ister. Her madde için iki düzeyde kanıt hazırlayın: kuralın yazılı olduğunu gösteren politika ya da prosedür, kuralın uygulandığını gösteren kayıt.

## Kontrol maddeleri {#kontroller}

{% include kontrol-maddeleri.html %}

## Kanıt özeti {#kanit}

{% include kanit-ozeti.html %}

{% include not.html metin="Kanıtlardaki kişisel veriler ve ticari sırlar maskelenebilir. Maskeleme, kontrolün doğrulanmasını engellemeyecek biçimde yapılmalıdır." %}

## Geri dönüş testi nasıl yapılır {#test}

{% include adimlar.html veri=page.test %}

```powershell
# Asıl ve geri yüklenen dosyanın SHA-256 özetini karşılaştırır
Get-FileHash "D:\Proje\teklif.xlsx", "E:\Test\teklif.xlsx" -Algorithm SHA256
```
{: data-baslik="PowerShell · Özet karşılaştırma"}

İki satırdaki `Hash` değeri aynıysa dosya bozulmadan geri yüklenmiştir.

## Sık yapılan hatalar {#hatalar}

{% include not.html tur="hata" metin='Yedek diskini sürekli bilgisayara takılı bırakmak. Disk "harici" olsa da fidye yazılımı onu da şifreler.' dogrusu="Yedeği asıl sistemden erişilemeyen ayrı bir altyapıda tutun." %}

{% include not.html tur="hata" metin='Prosedürde "aylık test" yazıp yalnız bir test raporu yüklemek.' dogrusu="Prosedürde yazdığınız aralıkla uyumlu sayıda tarihli rapor sunun." %}

{% include not.html tur="uyari" metin="Bulut senkronizasyon hizmetleri (dosya eşitleme) tek başına yedek sayılmaz: silinen ya da şifrelenen dosya diğer cihazlara da eşitlenir." %}

{% include bilsec.html metin="BilSec yedekleri Türkiye'deki ayrı bir altyapıda, şifreli ve silinemez olarak tutar. Geri dönüş testi her ay otomatik yapılır; tarihli rapor ve yedekleme prosedürü kanıt dosyasına kendiliğinden eklenir." link="/urun/#katmanlar" link_metni="Güvenlik izleme ve yedekleme" %}

## Sorular {#sss}

{% include sss-listesi.html %}

## Kaynaklar {#kaynaklar}

{% include kaynaklar.html %}
