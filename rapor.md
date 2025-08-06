# Test Raporu

## Uygulama Adı
CV US Test Uygulaması

## Test Tarihi
2025-08-06

## Test Amacı
Bu rapor, Test Uygulaması'nın kullanıcı doğrulama fonksiyonlarının farklı senaryolarda doğruluğunu değerlendirmek amacıyla hazırlanmıştır.

## Test Ortamı
- İşletim Sistemi: Windows 11
- Test Aracı:Otomatik(Playwright )


## Test Senaryoları ve Sonuçları

| Test No | Test Senaryosu                                    | Beklenen Sonuç                     | Gerçekleşen Sonuç               | Durum     |
|---------|--------------------------------------------------|-----------------------------------|--------------------------------|-----------|
| 1       | Doğru e-posta ve doğru şifre                      | Başarılı giriş yapılmalı          | Başarılı giriş yapıldı          | ✅ Geçti  |
| 2       | Yanlış e-posta ve doğru şifre                     | Giriş başarısız olmalı             | Giriş reddedildi                | ✅ Geçti  |
| 3       | Doğru e-posta ve yanlış şifre                     | Giriş başarısız olmalı             | Giriş reddedildi                | ✅ Geçti  |
| 4       | Yanlış e-posta ve yanlış şifre                     | Giriş başarısız olmalı             | Giriş reddedildi                | ✅ Geçti  |
| 5       | E-posta alanı boş bırakıldı                       | "E-posta zorunludur" uyarısı gösterilmeli | Uyarı gösterildi       | ✅ Geçti  |
| 6       | Şifre alanı boş bırakıldı                          | "Şifre zorunludur" uyarısı gösterilmeli  | Uyarı gösterildi       | ✅ Geçti  |
| 7       | E-posta ve şifre alanları boş bırakıldı           | "E-posta ve şifre zorunludur" uyarısı gösterilmeli | Uyarı gösterildi | ✅ Geçti  |
| 8       | giriş yapılıp cıkılması                           | "giriş ekranına giri dönmesi"              |giriş ekranına giri döndü  |✅ Geçti  |

## 5. Genel Değerlendirme
Test edilen tüm senaryolar başarıyla sonuçlanmıştır.  
Kullanıcı doğrulama modülü, hatalı girişlerde doğru uyarıları göstermekte ve doğru bilgilerle giriş yapıldığında başarılı şekilde oturum açmaktadır.  
Çıkış (logout) işlemi sonrası sistem tekrar giriş ekranına dönmektedir.  
Testler sırasında herhangi bir hata veya performans sorunu tespit edilmemiştir.

---

**📌 Not:** Bu test raporunda kullanılan ekran görüntüleri, `ss/` klasörü altında saklanmaktadır ve gerektiğinde referans olarak kullanılabilir.
