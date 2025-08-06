const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log('Siteye gidiliyor...');
    await page.goto('https://portal.softwareoptimize.com/');
    await page.waitForTimeout(2000);

    async function teizle() {
      await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', '');
      await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', '');
    }

    console.log("Sitede hatalı şifre giriliyor...");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', "melih.demir@gmail.com");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', "yanlış1234");
    await page.click('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[4]/button');
    try {
      const button = await page.waitForSelector('xpath=/html/body/div[3]/div/div[6]/button[1]', { timeout: 5000 });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'ss/hatamesaji1.png' });
      await button.click();
      console.log('Butona tıklandı!');
    } catch (error) {
      await page.screenshot({ path: 'ss/error_screenshot.png' });
      console.log('Buton bulunamadı!');
    }
    await teizle();

    console.log("Sitede hatalı eposta giriliyor...");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', "melih.dr@gmail.com");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', "Melih.demir@12");
    await page.click('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[4]/button');
    try {
      const button = await page.waitForSelector('xpath=/html/body/div[3]/div/div[6]/button[1]', { timeout: 5000 });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'ss/hatamesaji2.png' });
      await button.click();
      console.log('Butona tıklandı!');
    } catch (error) {
      await page.screenshot({ path: 'ss/error_screenshot3.png' });
      console.log('Buton bulunamadı!');
    }
    await teizle();

    console.log("Sitede hatalı  veşifre giriliyor...");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', "yanlış@gmail.com");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', "yanlış.demir@12");
    await page.click('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[4]/button');
    try {
      const button = await page.waitForSelector('xpath=/html/body/div[3]/div/div[6]/button[1]', { timeout: 5000 });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'ss/hatamesaji4.png' });
      await button.click();
      console.log('Butona tıklandı!');
    } catch (error) {
      await page.screenshot({ path: 'ss/error_screenshot3.png' });
      console.log('Buton bulunamadı!');
    }
    await teizle();

    console.log("Sitede boş şifre giriliyor...");
    try {
      await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', "melih.demir@gmail.com");
      await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', "");
      await page.click('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[4]/button');
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'ss/hatamesaji3.png' });
      await page.waitForTimeout(2000);
      console.log("Boş bırakınca hata veriyor");
    } catch (error) {
      console.log("Boş bırakınca hata vermiyor");
      await page.screenshot({ path: 'ss/error2_screenshot_empty.png' });
    }
    await teizle();

    console.log("Sitede boş eposta giriliyor...");
    try {
      await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', "");
      await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', "Melih.demir@12");
      await page.click('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[4]/button');
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'ss/hatamesaji4.png' });
      await page.waitForTimeout(2000);
      console.log("Boş bırakınca hata veriyor");
    } catch (error) {
      console.log("Boş bırakınca hata vermiyor");
      await page.screenshot({ path: 'ss/error2_screenshot_empty.png' });
    }
    await teizle();

    console.log("Sitede boş şifre ve eposta giriliyor...");
    try {
      await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', "");
      await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', "");
      await page.click('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[4]/button');
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'ss/hatamesaji.png' });
      await page.waitForTimeout(2000);
      console.log("Boş bırakınca hata veriyor");
    } catch (error) {
      console.log("Boş bırakınca hata vermiyor");
      await page.screenshot({ path: 'ss/error2_screenshot_empty.png' });
    }
    await teizle();

     console.log("hesaptan cıkılıyor...");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', "melih.demir@gmail.com");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', "Melih.demir@12");

    console.log('Kabul ediliyor...');
    await page.click("#rememberMe");
    await page.waitForTimeout(1000);

    console.log("Giriş yapılıyor...");
    await page.click('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[4]/button');
    await page.waitForTimeout(2000);

    console.log("hesaptan cıkılıyor...");
    await page.click('xpath=//*[@id="app-container"]/div[1]/div[2]/div[2]/button');
    await page.click('xpath=//*[@id="app-container"]/div[1]/div[2]/div[2]/div/div[2]/button');
    await page.click('xpath=/html/body/div[3]/div/div[6]/button[1]');
    await page.waitForTimeout(1000);

    console.log("Ekran görüntüsü alınıyor...");
    await page.screenshot({ path: 'ss/girişekranı.png' });




    console.log("Sitede şifre ve eposta giriliyor...");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[1]/div[2]/input', "melih.demir@gmail.com");
    await page.fill('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[2]/div[2]/input', "Melih.demir@12");

    console.log('Kabul ediliyor...');
    await page.click("#rememberMe");
    await page.waitForTimeout(1000);

    console.log("Giriş yapılıyor...");
    await page.click('xpath=//*[@id="app-container"]/div/div[2]/div[1]/form/div[4]/button');
    await page.waitForTimeout(2000);

    console.log("Ekran görüntüsü alınıyor...");
    await page.screenshot({ path: 'ss/dogru_calisirsa.png' });

  } catch (error) {
    console.error('Test sırasında hata oluştu:', error);
  } finally {
    await browser.close();
  }
})();
