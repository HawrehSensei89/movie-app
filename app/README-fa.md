# راه‌اندازی (یک‌بار)
1. در console.firebase.google.com پروژه بساز؛ Authentication (Email/Password) و Firestore را فعال کن؛ یک Web App اضافه کن و مقادیر را در `config.js` بگذار. کلید رایگان TMDB را هم همان‌جا بگذار.
2. محتوای `firestore.rules` را در Firestore > Rules بگذار و Publish کن.
3. حساب مالک: Project settings > Service accounts > Generate key؛ فایل را `serviceAccount.json` نام بگذار کنار `seed-owner.js` و اجرا کن:
   `npm i firebase-admin` سپس `OWNER_PASSWORD='رمز-قوی-جدید' node seed-owner.js` (بعد فایل serviceAccount.json را پاک کن).
4. تغییر رمز یا ایمیل مالک: داخل اپ > پروفایل > تغییر رمز. یا دوباره دستور بالا با رمز دیگر.
5. انتشار: پوشه را با Firebase Hosting (`firebase deploy`) یا GitHub Pages آپلود کن. روی گوشی اندروید با Chrome باز کن > منو > «Install app / Add to Home screen».
