---
title: "Yedeğiniz gerçekten çalışıyor mu? Geri dönüş testi nasıl yapılır"
description: "BT bilgisi olmadan yapılabilecek 45 dakikalık geri dönüş testi ve denetçiye sunulacak rapor, adım adım."
ozet: "Yedek almak işin yarısı. BT bilgisi olmadan da yapılabilecek 45 dakikalık bir geri dönüş testini ve denetçiye sunulacak raporu adım adım anlatıyoruz."
date: 2026-10-10
yazar: sinan-sahin
kategori: Uygulama
tags: [yedekleme, fidye-yazilimi, trtest]
okuma: 8
# kapak: /assets/img/blog/geri-donus-testi.jpg      # 1600 × 800
# kapak_alt: "Sunucu odasında yedek diski"
kapak_aciklama: "Kapak: Yedekten geri dönüş, denetimde en çok sorulan kanıtlardan biridir."
kisa_yanit: "Ayda bir, kritik verilerinizden bir klasörü yedekten ayrı bir test klasörüne geri yükleyin, dosyaların bozulmadan geldiğini doğrulayın ve tarih, süre ve sonucu bir rapora yazın. Bu rapor, denetimde yedekleme alanının en önemli kanıtıdır."
test:
  baslik: 45 dakikalık geri dönüş testi
  bilgiler:
    - { ad: Süre, deger: "~45 dakika", iso: PT45M }
    - { ad: Sıklık, deger: Ayda bir }
  adimlar:
    - baslik: Bir klasör seçin
      metin: Kritik veri listesinden bu ay test edeceğiniz klasörü seçin.
    - baslik: Test klasörüne geri yükleyin
      metin: Yedek yazılımında en son yedeği seçin ve hedef olarak test klasörünü gösterin. Başlangıç saatini not edin.
    - baslik: Dosyaları açın
      metin: Rastgele beş dosyayı açın. Excel, Word ve PDF dosyalarının düzgün açıldığını kontrol edin.
    - baslik: Bitiş saatini ve sonucu yazın
      metin: Geri yüklemenin ne kadar sürdüğünü ve sonucu rapora geçirin.
ilgili:
  - /rehber/yedekleme/
  - /sozluk/degistirilemez-yedek/
---

## Neden test etmelisiniz {#neden}

Görüştüğümüz firmaların çoğunda yedek alınıyor. Ama "en son ne zaman yedekten bir dosya geri yüklediniz?" sorusuna yanıt veren pek yok. Yedek yazılımının "başarılı" demesi, dosyanın açılabileceği anlamına gelmez.

- Yedek diskte yer kalmamış ve son iki haftadır yedek alınmıyor olabilir.
- Yedekleme ayarı bir klasörü dışarıda bırakmış olabilir.
- Geri yükleme parolasını bilen kişi işten ayrılmış olabilir.

## Hazırlık {#hazirlik}

Test için şunlara ihtiyacınız var:

1. Yedek yazılımına giriş yetkisi olan bir kişi
2. Bilgisayarda boş bir `Test` klasörü
3. Kritik veri listesi (yoksa bu test iyi bir başlangıç fırsatı)

{% include not.html metin="Geri yüklemeyi asıl klasöre değil, her zaman ayrı bir test klasörüne yapın. Böylece canlı verinin üzerine yazma riski olmaz." %}

## Adım adım test {#adimlar}

{% include adimlar.html veri=page.test %}

{% include alinti.html metin="Bir dosyanın yedeğini almak kolaydır. Zor olan, ihtiyaç anında o dosyaya ulaşabileceğinizi önceden bilmektir." kaynak="Sinan Şahin, BilSec" %}

## Raporu nasıl yazmalı {#rapor}

Rapor kısa olabilir; önemli olan her testin aynı bilgileri içermesidir.

| Alan      | Örnek                        |
|-----------|------------------------------|
| Tarih     | 10.10.2026                   |
| Test eden | Ayşe Demir, İdari İşler      |
| Klasör    | `D:\Teklifler\2026`          |
| Süre      | 18 dakika                    |
| Sonuç     | Başarılı, 5/5 dosya açıldı   |

{% include not.html tur="hata" metin="Raporu yalnızca başarılı testlerde yazmak." dogrusu="Başarısız test de kayda geçer; ardından yapılan düzeltmeyle birlikte denetçiye daha güçlü bir kanıt sunar." %}

{% include bilsec.html metin="BilSec bu testi her ay otomatik olarak yapar ve raporu kanıt dosyasına ekler. Başarısız bir test olduğunda ekibimiz aynı gün sizi arar." link="/urun/#katmanlar" link_metni="Güvenlik izleme ve yedekleme" %}
