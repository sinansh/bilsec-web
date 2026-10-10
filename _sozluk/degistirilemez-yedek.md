---
title: Değiştirilemez yedek
ingilizce: immutable backup
description: "Değiştirilemez yedek (immutable backup): belirli bir süre boyunca silinemeyen ve değiştirilemeyen yedek. Tanım, nasıl çalıştığı ve ilgili terimler."
kisa_tanim: Belirli bir süre boyunca kimsenin silemeyeceği ya da değiştiremeyeceği yedek.
tanim: Değiştirilemez yedek, belirlenen saklama süresi boyunca hiç kimsenin, yönetici hesabı dahil, silemeyeceği ya da değiştiremeyeceği yedektir. Fidye yazılımına karşı son savunma hattı olarak kullanılır.
alan: 7
guncelleme: 2026-10-10
# Sözlükte sayfası olan terimler bağlantı olarak görünür (dosya adı, .md olmadan)
ilgili: [fidye-yazilimi, 3-2-1-yedekleme-kurali, geri-donus-suresi, saklama-suresi]
kaynaklar:
  - { ad: Fidye yazılımlarına karşı önlemler, url: "https://www.usom.gov.tr", aciklama: "USOM · Erişim 10.10.2026" }
---

## Nasıl çalışır {#nasil}

Yedek alınırken üzerine bir saklama kilidi konur. Kilit süresi dolana kadar yedek yalnızca okunabilir. Saldırgan yönetici parolasını ele geçirse bile yedeği silemez.

## Neden önemli {#neden}

Fidye yazılımları çoğu zaman önce yedekleri bulup siler, sonra asıl dosyaları şifreler. Değiştirilemez bir kopya varsa, ödeme yapmadan geri dönülebilir.
