# İçerik yazım kılavuzu

Tüm içerik Markdown ile yazılır. Dosyanın başındaki `---` arasındaki bölüme (front matter) sayfa bilgileri yazılır, altına metin gelir. Hazır örnekler:

- Yazı: `_posts/2026-10-10-geri-donus-testi.md`
- Kontrol alanı: `_rehber/yedekleme.md`
- Terim: `_sozluk/degistirilemez-yedek.md`
- Soru: `_sss/siber-hijyen-kobi-belgesi-zorunlu-mu.md`

Yeni içerik açarken en kolay yol en yakın örneği kopyalamaktır.

## Ortak kurallar

- Dosya adları Türkçe karakter ve boşluk içermez: `isten-ayrilan-calisan.md`. Dosya adı aynı zamanda sayfanın adresi olur.
- Tarihler `2026-10-09` biçiminde yazılır. Sitede `09.10.2026` olarak görünür.
- Bölüm başlıkları `##`, alt başlıklar `###` ile yazılır. İçindekiler `##` başlıklarından üretilir. Kısa ve kalıcı bir adres için başlığın sonuna `{#kisa-ad}` ekleyin.
- İki nokta (`:`) içeren front matter değerlerini tırnak içine alın.
- `yazar:` alanına `_yazarlar` klasöründeki dosyanın adı yazılır: `fatma-bayrambas-sahin`.

## Blog yazısı (`_posts/`)

```yaml
---
title: "Başlık"
description: "Arama motoru ve kart açıklaması, 150 karakteri geçmesin"
ozet: "Başlığın altındaki giriş cümlesi"
date: 2026-10-15
guncelleme: 2026-10-20        # isteğe bağlı
yazar: fatma-bayrambas-sahin
kategori: Uygulama            # _data/blog_kategorileri.yml'deki adlardan biri
tags: [yedekleme, trtest]     # Türkçe karakter kullanmayın
kapak: /assets/img/blog/ad.jpg   # isteğe bağlı, 1600 × 800
kisa_yanit: "Yazının en başındaki 'Kısa yanıt' kutusu"   # isteğe bağlı
ilgili: [/rehber/yedekleme/, /sozluk/degistirilemez-yedek/]  # isteğe bağlı
---
```

Okuma süresi kendiliğinden hesaplanır. Elle vermek için `okuma: 8` yazın.

## Kontrol alanı (`_rehber/`)

- `alan: 7` alanın numarasıdır. Başlık, komşu alanlar ve önceki/sonraki bağlantılar `_data/kontrol_alanlari.yml` dosyasından gelir.
- `maddeler:` listesindeki her madde için şunlar yazılır: `no`, `seviye` (Başlangıç / Orta / İleri), `baslik`, `ne_isteniyor`, `kanitlar`, `politika`, `uygulama`, `guncellik` ve isteğe bağlı `bilsec`. Kontrol kartları ve kanıt özeti tablosu bu listeden üretilir. Metinde yerlerini şu satırlar belirler:
  `{% include kontrol-maddeleri.html %}` ve `{% include kanit-ozeti.html %}`
- **`no` alanı mutlaka tırnak içinde yazılır.** Tırnaksız `no:` YAML'da "hayır" (`false`) olarak okunur; madde numarası sitede boş görünür, hata da vermez. Değer de tırnaklı yazılır, yoksa `7.10` sayı sayılıp `7.1` olur:
  ```yaml
  maddeler:
    - "no": "7.1"        # doğru
      seviye: Orta
    - no: 7.1            # YANLIŞ: numara boş görünür
  ```
  Aynı kural `_data/kontrol_alanlari.yml` dosyası için de geçerlidir: `{ "no": 7, kod: "07", … }`.
- Bir alanın sayfası yazıldığında rehberdeki tabloda o alan kendiliğinden bağlantıya dönüşür.

## Sözlük terimi (`_sozluk/`)

`title`, `ingilizce`, `kisa_tanim` (sözlük listesinde görünür), `tanim` (terim sayfasındaki kutu), isteğe bağlı `alan` (kontrol alanı numarası), `ilgili` (diğer terimlerin dosya adları) ve `kaynaklar` yazılır. Ayrıntılı açıklama dosyanın gövdesine yazılır.

## SSS sorusu (`_sss/`)

`title` (soru), `konu` (`hijyen`, `urun`, `kurulum`, `veri` ya da `fiyat`), `sira` (konu içindeki sıra; 10, 20, 30… diye artırın, araya ekleme kolay olur) ve `kisa_yanit` yazılır. Gövdeye ayrıntılı yanıt yazılırsa SSS sayfasında soruya "Ayrıntılı yanıt" bağlantısı eklenir.

## İçerik blokları

Metnin içinde ayrı bir satıra yazılır. Değerin içinde çift tırnak geçiyorsa değeri tek tırnağa alın: `metin='… "harici" …'`.

**Not kutusu.** Türler: `bilgi` (varsayılan), `uyari`, `hata`.
```
{% include not.html metin="Geri yüklemeyi her zaman ayrı bir klasöre yapın." %}
{% include not.html tur="uyari" metin="Bulut senkronizasyonu tek başına yedek sayılmaz." %}
{% include not.html tur="hata" metin="Yanlış uygulama." dogrusu="Doğru uygulama." %}
```

**BilSec bunu nasıl karşılar**
```
{% include bilsec.html metin="…" link="/urun/#katmanlar" link_metni="Güvenlik izleme ve yedekleme" %}
```

**Adım adım kılavuz.** Adımlar front matter'da bir ad altında yazılır, metinde o adla çağrılır:
```yaml
test:
  baslik: 45 dakikalık geri dönüş testi
  bilgiler:
    - { ad: Süre, deger: "~45 dakika", iso: PT45M }
  adimlar:
    - baslik: Bir klasör seçin
      metin: Kritik veri listesinden bir klasör seçin.
```
```
{% include adimlar.html veri=page.test %}
```

**Soru listesi (akordeon)**
```
{% include sss-listesi.html %}                  ← front matter'daki sorular: [{ soru, yanit }]
{% include sss-listesi.html konu="hijyen" %}    ← SSS bölümündeki bir konunun soruları
```

**Kaynaklar.** Front matter'a `kaynaklar: [{ ad, url, aciklama }]` yazılır, metinde `{% include kaynaklar.html %}` ile çağrılır.

**Alıntı.** `{% include alinti.html metin="…" kaynak="Fatma Bayrambaş Şahin, BilSec" %}`

**Görsel.** `{% include sekil.html gorsel="/assets/img/…" alt="…" aciklama="Şekil 1. …" %}`

**Tablo.** Normal Markdown tablosu yazılır. Mobilde kaydırılabilir kutu kendiliğinden eklenir.

**Kod.** Üç ters tırnakla açılan kod bloğu yazılır. Kutunun başlığı dil adından gelir; başlığı değiştirmek için bloğun hemen altına `{: data-baslik="PowerShell · Özet karşılaştırma"}` ekleyin.

**İkon.** `{% include ikon.html ad="info" %}`. İkon adlarının listesi `_data/ikonlar.yml` dosyasında.

**İletişim bilgisi.** Telefon ya da e-postayı metne elle yazmayın; config'teki değeri kullanın: `{{ site.iletisim.telefon }}`, `{{ site.iletisim.eposta }}`.
