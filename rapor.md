# Test Raporu

## Uygulama Adı
CV US Test Uygulaması

## Test Tarihi
2025-08-06

## Test Amacı
Bu rapor, Test Uygulaması'nın kullanıcı doğrulama fonksiyonlarının farklı senaryolarda doğruluğunu değerlendirmek amacıyla hazırlanmıştır.

## Test Ortamı
- İşletim Sistemi: Windows 12
- Test Aracı:Otomatik(Playwright )


## Test Senaryoları ve Sonuçları

| Test No | Test Senaryosu                                    | Beklenen Sonuç                     | Gerçekleşen Sonuç               | Durum     |
|---------|--------------------------------------------------|-----------------------------------|--------------------------------|-----------|
| 1       | Doğru e-posta ve doğru şifre                      | Başarılı giriş yapılmalı          | Başarılı giriş yapıldı          | ✅ Geçti  |
| 2       | Yanlış e-posta ve doğru şifre                     | Giriş başarısız olmalı             | Giriş reddedildi                | ✅ Geçti  |
| 3       | Doğru e-posta ve yanlış şifre                     | Giriş başarısız olmalı             | Giriş reddedildi                | ✅ Geçti  |
| 4       | Yanlış e-posta ve yanlış şifre                     | Giriş başarısız olmalı             | Giriş reddedildi                | ✅ Geçti  |
| 6       | E-posta alanı boş bırakıldı                       | "E-posta zorunludur" uyarısı gösterilmeli | Uyarı gösterildi       | ✅ Geçti  |
| 7       | Şifre alanı boş bırakıldı                          | "Şifre zorunludur" uyarısı gösterilmeli  | Uyarı gösterildi       | ✅ Geçti  |
| 8       | E-posta ve şifre alanları boş bırakıldı           | "E-posta ve şifre zorunludur" uyarısı gösterilmeli | Uyarı gösterildi | ✅ Geçti  |

## Genel Değerlendirme
Test uygulamasının kullanıcı doğrulama modülü, zorunlu alanlar dahil olmak üzere çeşitli senaryolarda beklendiği gibi çalışmaktadır. Uyarılar doğru şekilde gösterilmiştir.

---
