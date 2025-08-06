# Test Raporu

## Uygulama Adı
CV US Test Uygulaması

## Test Tarihi ve Saati
06 Ağustos 2025, 14:30

## Son Güncelleme
06 Ağustos 2025, 15:00

## Test Amacı
Bu rapor, Test Uygulaması'nın kullanıcı doğrulama fonksiyonlarının farklı senaryolarda doğruluğunu değerlendirmek amacıyla hazırlanmıştır.

## Test Ortamı
- İşletim Sistemi: Windows 11
- Test Aracı: Otomatik (Playwright)
- Tarayıcı: Google Chrome 138.0
- Ağ Durumu: Stabil (50 Mbps)

## Ön Koşullar
- Kullanıcı veritabanında en az 1 kayıtlı kullanıcı olmalı.
- Sunucu ve API servisleri aktif olmalı.
- Giriş ekranı erişilebilir durumda olmalı.

## Test Senaryoları ve Sonuçları

| Test ID  | Test No | Test Senaryosu                                    | Test Tipi | Öncelik | Beklenen Sonuç                                      | Gerçekleşen Sonuç                       | Durum     |
|:--------:|:-------:|---------------------------------------------------|:---------:|:-------:|-----------------------------------------------------|------------------------------------------|:---------:|
| TC-001   | 1       | Doğru e-posta ve doğru şifre                       | Pozitif   | Yüksek  | Başarılı giriş yapılmalı                            | Başarılı giriş yapıldı                   | ✅ Geçti  |
| TC-002   | 2       | Yanlış e-posta ve doğru şifre                      | Negatif   | Yüksek  | Giriş başarısız olmalı                              | Giriş reddedildi                         | ✅ Geçti  |
| TC-003   | 3       | Doğru e-posta ve yanlış şifre                      | Negatif   | Yüksek  | Giriş başarısız olmalı                              | Giriş reddedildi                         | ✅ Geçti  |
| TC-004   | 4       | Yanlış e-posta ve yanlış şifre                     | Negatif   | Orta    | Giriş başarısız olmalı                              | Giriş reddedildi                         | ✅ Geçti  |
| TC-005   | 5       | E-posta alanı boş bırakıldı                        | Negatif   | Yüksek  | "E-posta zorunludur" uyarısı gösterilmeli           | Uyarı gösterildi                         | ✅ Geçti  |
| TC-006   | 6       | Şifre alanı boş bırakıldı                          | Negatif   | Yüksek  | "Şifre zorunludur" uyarısı gösterilmeli             | Uyarı gösterildi                         | ✅ Geçti  |
| TC-007   | 7       | E-posta ve şifre alanları boş bırakıldı            | Negatif   | Yüksek  | "E-posta ve şifre zorunludur" uyarısı gösterilmeli  | Uyarı gösterildi                         | ✅ Geçti  |
| TC-008   | 8       | Giriş yapılıp çıkılması                            | Pozitif   | Orta    | Giriş ekranına geri dönmesi                         | Giriş ekranına geri döndü                | ✅ Geçti  |

## Test Sonrası Durum
Tüm senaryolar başarıyla tamamlandı.  
Sistem, hatalı girişlerde doğru uyarı mesajlarını gösterdi ve doğru bilgilerle giriş yapıldığında oturum başarıyla açıldı.  
Çıkış işlemi sonrası sistem giriş ekranına geri dönmüştür.  

## Genel Değerlendirme
Test edilen tüm senaryolar başarıyla sonuçlanmıştır.  
Kritik fonksiyonlar hatasız çalışmakta, performans kabul edilebilir seviyededir.  
Herhangi bir hata veya performans sorunu
