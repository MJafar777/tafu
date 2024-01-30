import React from "react";

// const savloJavoblar = [
//   { savoli: "", javobi: "" },
//   {
//     savoli:
//       "Nutq madaniyati haqidagi ta'limot qaysi qadimiy davlatda shakllangan.",
//     javobi: "Rim",
//   },
//   {
//     savoli:
//       "Notiqlikning san'at darajasiga ko'tarilishida qaysi sohalarning alohida o'rni bo'lgan. ",
//     javobi: "Savdo-sotiq va sud ishlari",
//   },
//   {
//     savoli: `"Tarixda yo yaxshi harbiy sarkarda, yo yaxshi notiq bo'lish kerak"-degan fikr qaysi mashhur notiqga tegishli.`,
//     javobi: "Sitsiron",
//   },
//   {
//     savoli: "Arastotelni Notiqlik san'ati haqida qanday asari mavjud.",
//     javobi: "Ritorika",
//   },
//   {
//     savoli: `"Brut" notiqlik san'ati haqidagi mashhur asar qaysi mashhur notiqniki.`,
//     javobi: "Setseron",
//   },
//   {
//     savoli:
//       "O'rta Osiyo madaniyatI tarixida, nutq madaniyatiga munosib hissa qo 'shgan siymolarimizni belgilang.",
//     javobi: "Beruniy,Koshg'ariy, Y.Xos Hojib",
//   },
//   { savoli: "Qobusnoma kimning asari ", javobi: "Kaykovus" },
//   {
//     savoli: "Nutq madaniyati va notiqlik san'ati fanini o'rganish obekti nima?",
//     javobi: "Til (adabiy til me'yorlari)",
//   },
//   { savoli: "Nutqning nechA xil shakli mavjud.", javobi: "2xil" },
//   {
//     savoli: "Ikki va undan ortiq kishilarning muloqat jarayoni nima deyiladi.",
//     javobi: "Diolog",
//   },
//   {
//     savoli: "O 'rta Osiyoda notiqlarni kim deb atashgan.",
//     javobi: "Nadimlar, qiroatxonlar",
//   },
//   {
//     savoli: "Til me'yorlarini buzuvchi omillar.",
//     javobi: "Begona tillardan kirib kelgan so'zlar",
//   },
//   {
//     savoli: "Nutq madaniyati sohasi ………sohalar bilan aloqador.",
//     javobi: "Poetika, estetika, mantiq",
//   },
//   {
//     savoli:
//       "O'zbek tiliga davlat tili maqomaning berilishi qaysi yil bilan bog'liq.",
//     javobi: "1989-21 oktyabr",
//   },
//   {
//     savoli:
//       "Nutq madaniyati haqidagi dastlabki ta'limot qaysi davlatlarda shakllangan.",
//     javobi: "Misr, Assuriya, Hindiston",
//   },
//   {
//     savoli:
//       "….. arabcha so 'zdan olingan bo'lib, ta'lim, tarbiyalilik va ziyolilik ma'nolarini anglatadi. ",
//     javobi: "Madaniyat",
//   },
//   {
//     savoli: "Insonning nutq faoliyatidagi ko'rinishlari qaysi?",
//     javobi: "So'zlash, mutolaa qilish va eshitish.",
//   },
//   {
//     savoli:
//       "Muayyan umumxalq tilining qayta ishlangan va me'yorlashtirilgan, mazkur tilda so'zlashuvchi xalqning batcha vakili uchun tushunarli madaniy ehtiyojiga xizmat qiladigan til qanday til deyiladi?",
//     javobi: "Adabiy til",
//   },
//   { savoli: "`Til qanday hodisa?", javobi: "Ijtimoiy hodisa" },
//   {
//     savoli: "Nutqning eng muhim aloqaviy fazilati nima?",
//     javobi: "Nutqning to'g'riligi",
//   },
//   {
//     savoli:
//       "Nutq to 'g 'ri bo 'lishi uchun qanday me'yorlarga amal qilish kerak",
//     javobi: "Urg'u va grammatika",
//   },
//   { savoli: "Urg' u nechi turga bo'linadi ?", javobi: "2turga " },
//   { savoli: "Urg'u nimaga xizmat qiladi?", javobi: "Ma'no farqlashga" },
//   {
//     savoli:
//       "So'zning o'zi ifodalayotgan voqeylikka mutlaqo mos va muofiq kelishiga nima deyiladi? ",
//     javobi: "Nutqning aniqligi",
//   },
//   {
//     savoli: "Nutqning sofliliga putur yetkazadigan omillar",
//     javobi: "Jargonlar, shevaga oid so'zlar, takrorlar",
//   },
//   {
//     savoli:
//       "Nutqda o'rinsiz ishlatilgan boshqa tillarga oid so'zlar……. Deyiladi.",
//     javobi: "Varvarizmlar",
//   },
//   {
//     savoli: "Uxlab yotibsanmi xunasa. Gapda qanday so'z qo'llangan?",
//     javobi: "Vulgarizmlar",
//   },
//   {
//     savoli:
//       "Ish qog'ozlari uchun zarur bo'lgan ma'lum bir shaklda saqlanadigan so'z birikmalariga………deyiladi.",
//     javobi: "Kanselyarizmlar",
//   },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
//   { savoli: "", javobi: "" },
// ];

const TestResponse = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Tafu Uchun maxsuz. Informatika
      </h1>
      <table border="1">
        <tr>
          <th>•</th>
        </tr>
        <tr>
          <td>INT turi uchun qaysi amallar o’rinli</td>
        </tr>
        <tr>
          <td>qo’shish, ayirish, butun sonli bo’lish, qoldiqli bo’lish</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>FLOAT turi uchun qaysi amallar o’rinli</td>
        </tr>
        <tr>
          <td>qo’shish, ayrish, ko’paytirish, bo’lish</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>STRUCT kalit so’zi yordamida qanday tuzilma yaratiladi</td>
        </tr>
        <tr>
          <td>Yozuv</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Algoritm nima?</td>
        </tr>
        <tr>
          <td>amallar ketma-ketligi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            C++ tilida tuzilmani yaratish uchun ishlatiladigan kalit so’zi
          </td>
        </tr>
        <tr>
          <td>struct</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmasi nima</td>
        </tr>
        <tr>
          <td>
            bu ma’lumot elementlari va ular orasidagi munosabatlar majmuasi
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Qaysi biri true kalit so’ziga mos qiymatini aniqlaydi?</td>
        </tr>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Qaysi biri false kalit so’ziga mos qiymatini aniqlaydi?</td>
        </tr>
        <tr>
          <td>0</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Shartli operator if tanasi qachon bajariladi?</td>
        </tr>
        <tr>
          <td>rost (true)</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Qaysi kalit so’z butun sonli o’zgaruvchi faqat musbat qiymatlarni
            qabul qilishini ko’rsatadi?
          </td>
        </tr>
        <tr>
          <td>unsigned</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Massivning oxirgi elemenning tartib raqami nimaga teng bo’ladi, agar
            massiv o’lchami 19 teng bo’lsa?
          </td>
        </tr>
        <tr>
          <td>18</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmasi ustida qanday to’rtta asosiy amal bajariladi
          </td>
        </tr>
        <tr>
          <td>yaratish, o’chirish, tanlash (ruxsat olish), yangilash.</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlarni kompyuter xotirasda akslantirish nechta bosqichdan
            iborat?
          </td>
        </tr>
        <tr>
          <td>3 ta</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmasi mazmunli (matematik) bosqichda ...</td>
        </tr>
        <tr>
          <td>
            konkret obyektning qayta ishlash, ularning xussusiyatlari va
            munosabatlarini tadqiq qilinadi.
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmasi mantiqiy bosqichda ...</td>
        </tr>
        <tr>
          <td>
            berilgan talabalar bo’yicha algoritmni ishlab chiqilishi tadqiq
            qilinadi.
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmasi fizik bosqichda ...</td>
        </tr>
        <tr>
          <td>
            kompyuter xotirasida ma’lumotlarni aks ettirilishi tadqiq qilinadi.
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Bir xil tipdagi o’zaro takrorlanmaydigan elementlardan iborat majmua
          </td>
        </tr>
        <tr>
          <td>To’plam</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Bir xil tipdagi elementlar majmuasi</td>
        </tr>
        <tr>
          <td>Massiv</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Turli tipdagi ma’lumotlardan qanday tuzilma xosil qilinadi?</td>
        </tr>
        <tr>
          <td>Yozuv</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Turli tipdagi ma’lumot maydonlardan iborat tartibli tuzilmasi</td>
        </tr>
        <tr>
          <td>Jadval</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Oddiy sozlangan ma’lumotlar turlari (atomlar)ga kuyidagilar kiradi:
          </td>
        </tr>
        <tr>
          <td>mantiqiy, butun, xakikiy, belgili, ko’rsatkichli tur</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Sozlangan tuzilmaviy MT (molekulalar) ga kuyidagilar kiradi:</td>
        </tr>
        <tr>
          <td>massiv, yozuv, rekursiv turlar, to’plam</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>ENUM kalit so’zi yordamida qanday tuzilma yaratiladi</td>
        </tr>
        <tr>
          <td>Birlashma</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Xotirani dinamik ajratish uchun kalit so’zini ko’rsating</td>
        </tr>
        <tr>
          <td>new</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Dinamik xotirani bo’shatish uchun kalit so’zini ko’rsating</td>
        </tr>
        <tr>
          <td>Delete</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            int function(char x1, float x2, double x3)funksiya qiymatining
            qaytarish turini ko’rsating
          </td>
        </tr>
        <tr>
          <td>int</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Turlarni keltirishda ma’lumotnng qisman yo’qotish bilan oshiriladi
          </td>
        </tr>
        <tr>
          <td>float to int</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari bog’lanishiga ko’ra qo’yidagilarga
            klassifikasiyalanadi
          </td>
        </tr>
        <tr>
          <td>Bog’lamli va bog’lamsiz</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari vaqt o’zgaruvchanligi yoki dastur
            bajarilishi jarayoniga ko’ra qo’yidagilarga
          </td>
        </tr>
        <tr>
          <td>klassifikasiyalanadi</td>
        </tr>
        <tr>
          <td>Statik, yarimstatik va dinamik</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari tartibiga ko’ra qo’yidagilarga
            klassifikasiyalanadi
          </td>
        </tr>
        <tr>
          <td>Chiziqli va chiziqsiz</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari uchun xotira ajratish amali qanday nomlanadi
          </td>
        </tr>
        <tr>
          <td>yaratish</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari uchun ajratilgan xotirani o’chirish amali
            qanday nomlanadi
          </td>
        </tr>
        <tr>
          <td>yo’qotish</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari qiymatini o’zgartirish amali qanday
            nomlanadi
          </td>
        </tr>
        <tr>
          <td>yangilash</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmalariga ruxsat olish amali qanday nomlanadi</td>
        </tr>
        <tr>
          <td>tanlash (ruxsat)</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>X=3.1415; xaqiqiy sonning mantissasi nimaga teng bo’ladi</td>
        </tr>
        <tr>
          <td>31415</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Dastur bajarilish jarayonida xotira xajmi bir xil bo’lgan oddiy va
            asosiy tuzilma to’plamlariga ... deyiladi.
          </td>
        </tr>
        <tr>
          <td>Statik ma’lumotlar tuzilmasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ikkita satrni o’zaro taqqoslash funksiyasini ko’rsating</td>
        </tr>
        <tr>
          <td>strcmp();</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Birinchi satrning davomida ikkinchi satrni qo’shish funksiyasini
            ko’rsating
          </td>
        </tr>
        <tr>
          <td>strcat ();</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Stek tuzilmasida qanday hizmat ko’rsatish turi qullaniladi?</td>
        </tr>
        <tr>
          <td>LIFO</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Navbat tuzilmasida qanday hizmat ko’rsatish turi qullaniladi?</td>
        </tr>
        <tr>
          <td>FIFO</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Stekga yangi element qushish funksiyasi qanday belgilanadi</td>
        </tr>
        <tr>
          <td>Push</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Stekdan yuqori elementini o’chirish funksiyasi qanday belgilanadi
          </td>
        </tr>
        <tr>
          <td>Pop</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Stekdan yuqori elementini o’qitib olish funksiyasi qanday
            belgilanadi
          </td>
        </tr>
        <tr>
          <td>Top</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Yarimstatik ma’lumotlar tuzilmasiga nimalar kiradi?</td>
        </tr>
        <tr>
          <td>Stek, Dek, Navbat</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ro’yxatni massivdan ustunligini ko’rsating</td>
        </tr>
        <tr>
          <td>ro’yxatni uzunligiga chegara belgilanmaydi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Dastur bajarilish jarayonida xotira xajmi statik belgilanadi va
            deskriptor-ko’rsatkich orqali foydalanilgan
          </td>
        </tr>
        <tr>
          <td>tuzilma to’plamlariga ... deyiladi.</td>
        </tr>
        <tr>
          <td>Yarimstatik ma’lumotlar tuzilmasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Funksiyalarning qaysi biri kiritish oqimidan 100 belgini x satrga
            o’qitadi?
          </td>
        </tr>
        <tr>
          <td>cin.getline(x,100);</td>
        </tr>
        <tr></tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Stek bu ...</td>
        </tr>
        <tr>
          <td>
            chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va
            chiqarish uning bir tomonidan amalga oshiriladi
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Navbat bu...</td>
        </tr>
        <tr>
          <td>
            shunday tuzilmaki, u yelementlar qo’shilishi bilan kengayib boradi
            va elementlarni faqatgina bir tomondan qabul qiladi
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Dek bu ...</td>
        </tr>
        <tr>
          <td>
            chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va
            chiqarish uning ikki tomonlama amalga oshiriladi
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Qanday kalit so’zi yordamida nol havola (bo’sh manzil) belgilanadi
          </td>
        </tr>
        <tr>
          <td>NULL</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Bir bog’lamli ro’yxatda nechta ko’rsatkichdan foydalaniladi</td>
        </tr>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ikki bog’lamli ro’yxatda nechta ko’rsatkichdan foydalaniladi</td>
        </tr>
        <tr>
          <td>2</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Dastur bajarilish jarayonida xotira xajmi aniqlangan yoki ularning
            soni ma’lum bo’lishi tuzilma
          </td>
        </tr>
        <tr>
          <td>to’plamlariga ... deyiladi.</td>
        </tr>
        <tr>
          <td>Dinamik ma’lumotlar tuzilmasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Xalqasimon ro’yxatdan element o’chirilganda …</td>
        </tr>
        <tr>
          <td>ro’yxat bitta elementga qisqaradi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Halqasimon ikki yo’nalishli ro’yxatda qaysi yo’nalishlar bo’yicha
            xarakatlanish mumkin?
          </td>
        </tr>
        <tr>
          <td>ikkala</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ro’yxat elementlarning ro’yxatlar bo’lishi mumkin tuzilma qanday
            nomlanadi
          </td>
        </tr>
        <tr>
          <td>Lug’at</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            … - obyektni mazkur obyektga murojaat qilish orqali aniqlashdir.
          </td>
        </tr>
        <tr>
          <td>Rekursiya</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmasi, tashkil qiluvchi elementlari qaysining
            o’xshash elementlar bo’lsa, u xoda ...
          </td>
        </tr>
        <tr>
          <td>deyiladi.</td>
        </tr>
        <tr>
          <td>Rekursiv ma’lumotlar tuzilmasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Rekursiv funksiyalar apparati kim tomondan kashf qilingan</td>
        </tr>
        <tr>
          <td>A.Chyorch</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Rekursiya masalasini xal qiluvchi bosqichlari qanday nomlanadi
          </td>
        </tr>
        <tr>
          <td>Rekursiv triada</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Rekursiv triada qaysi bosqichlardan iborat</td>
        </tr>
        <tr>
          <td>parametrizasiya, rekursiya bazasi va dekompozisiya</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Rekursiv triadaning qaysi bosqichida masala shartini tasniflash va
            uni hal etish uchun parametrlar
          </td>
        </tr>
        <tr>
          <td>aniqlanadi.</td>
        </tr>
        <tr>
          <td>parametrizasiya</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Rekursiv triadaning qaysi bosqichida masala yechimi aniq bo’lgan
            trivial holat aniqlanadi, ya’ni bu holatda
          </td>
        </tr>
        <tr>
          <td>funksiyani o’ziga murojaat qilishi talab etilmaydi.</td>
        </tr>
        <tr>
          <td>rekursiya bazasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Rekursiv triadaning qaysi bosqichida umumiy holatni nisbatan ancha
            oddiy bo’lgan o’zgargan parametrli
          </td>
        </tr>
        <tr>
          <td>qism masalalar orqali ifodalaydi.</td>
        </tr>
        <tr>
          <td>dekompozisiya</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Daraxtsimon tuzilmadagi shunday elementga murojaat yo’qki, u...
            tugun xisoblanadi.
          </td>
        </tr>
        <tr>
          <td>Ildiz</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Daraxtsimon tuzilmada boshqa elementlarga murojaat bo’lmasa, u...
            tugun xisoblanadi.
          </td>
        </tr>
        <tr>
          <td>barg</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Qachon daraxt muvozanatlangan xisoblanadi?</td>
        </tr>
        <tr>
          <td>
            agar uning chap va o’ng qism daraxtlari balandligi farqi 1tadan ko’p
            bo’lmasa
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Chiziqsiz ma’lumotlar tuzilmasiga nimalar kiradi?</td>
        </tr>
        <tr>
          <td>Daraxt, graf</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Daraxt balandligi – bu ...</td>
        </tr>
        <tr>
          <td>daraxt bosqichlari soni</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Daraxt darajasi – bu ...</td>
        </tr>
        <tr>
          <td>
            Daraxtga tegishli tugunning munosabatlar sonining maksimal qiymati
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Minimal balandlikka ega daraxt</td>
        </tr>
        <tr>
          <td>HEAP TREE</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Daraxt qanday nomlanadi, agar uning chiqish darajasi ikkidan
            oshmasa.
          </td>
        </tr>
        <tr>
          <td>Binar</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Qidiruv daraxtda nechta va qaysilar ko’ruv amallarini ifodalaydi
          </td>
        </tr>
        <tr>
          <td>Uchta (to’g’ri, teskari, simmetrik)</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Kompyuter xotirasida binar daraxtni qanday ko’rinishda tasvirlash
            qulay
          </td>
        </tr>
        <tr>
          <td>bog’langan chiziqsiz ro’yxatlar</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Daraxt uzunligi – bu ...</td>
        </tr>
        <tr>
          <td>tugunlar soni</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Chiziqsiz iyerarxik bog’langan ma’lumotlar tuzilmasi – bu …</td>
        </tr>
        <tr>
          <td>Daraxt</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Daraxt tugunlar ketma-ketligini tartiblangan holda chiqarish</td>
        </tr>
        <tr>
          <td>Ko’ruv amali</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar daraxtni tashkil etuvchi element (tugun)lardan faqat ikkita
            tugun bilan bog’langan bo’lsa, u holda
          </td>
        </tr>
        <tr>
          <td>bunday binar daraxt ... deyiladi.</td>
        </tr>
        <tr>
          <td>to’liq</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            56,34,60,23,40,65 sonlaridan xosil bo’lgan binar daraxt
            muvozanatlanganmi yoki yo’qmi?
          </td>
        </tr>
        <tr>
          <td>xa</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar elementlar soni 100ta bo’lsa, u holda minimal balandga ega
            daraxt balandligi nechiga teng bo’ladi?
          </td>
        </tr>
        <tr>
          <td>7</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar minimal balandga ega daraxt balandligi 10ga teng bo’lsa, u
            holda maksimal elementlar soni nechiga
          </td>
        </tr>
        <tr>
          <td>teng bo’ladi</td>
        </tr>
        <tr>
          <td>1023</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar elementlar soni 10ta bo’lsa, u holda minimal balandga ega
            daraxt balandligi nechiga teng bo’ladi?
          </td>
        </tr>
        <tr>
          <td>4</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            10,7, 12, 2, 5, 3, 11, 14 sonlaridan hosil qilingan binar daraxtda
            nechta oraliq tugun mavjud
          </td>
        </tr>
        <tr>
          <td>4</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            10,7, 12, 2, 5, 3, 11, 14 sonlaridan hosil qilingan binar daraxtda
            nechta barg mavjud
          </td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            10,7, 12, 2, 5, 3, 11, 14 sonlaridan hosil qilingan binar daraxt
            balandligi nechaga teng
          </td>
        </tr>
        <tr>
          <td>5</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            35, 27, 5,78, 29, 43 sonlaridan hosil qilingan binar daraxtda nechta
            barg mavjud
          </td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            35, 27, 5,78, 29, 43 sonlaridan hosil qilingan binar daraxtda nechta
            oraliq tugun mavjud
          </td>
        </tr>
        <tr>
          <td>2</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            35, 27, 5,78, 29, 43 sonlaridan hosil qilingan binar daraxt
            balandligi nechaga teng
          </td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
        <tr></tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Murrakab obyektlarning xussusiyati va munosabatlarini aks ettiruvchi
            chiziqsiz ko’p bog’lamli dinamik
          </td>
        </tr>
        <tr>
          <td>tuzilmasi.</td>
        </tr>
        <tr>
          <td>Graf</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar grafning munosabatlarini tasvirlashda qirralardan foydalanilsa,
            u holda graf ... deyiladi.
          </td>
        </tr>
        <tr>
          <td>Yo’naltirilmagan</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar grafning munosabatlarini tasvirlashda yoylardan foydalanilsa, u
            holda graf ... deyiladi.
          </td>
        </tr>
        <tr>
          <td>Yo’naltirilgan</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar grafning munosabatlarini tasvirlashda yoy va qirralardan
            foydalanilsa, u holda graf ... deyiladi.
          </td>
        </tr>
        <tr>
          <td>Aralash</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar grafning munosabatlariga og’irlik qiymati belgilansa, u holda
            graf ... deyiladi.
          </td>
        </tr>
        <tr>
          <td>Vaznga ega</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Grafning tartibi nimaga teng</td>
        </tr>
        <tr>
          <td>Uchlar soniga</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Grafning o’lchami nimaga teng</td>
        </tr>
        <tr>
          <td>Qirralar soniga</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Grafning tugun darajasi bu</td>
        </tr>
        <tr>
          <td>undan chiquvchi qirralar soni xisoblanadi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Qaysi biri true kalit so’ziga mos qiymatini aniqlaydi?</td>
        </tr>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Qaysi biri false kalit so’ziga mos qiymatini aniqlaydi?</td>
        </tr>
        <tr>
          <td>0</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Shartli operator if tanasi qachon bajariladi?</td>
        </tr>
        <tr>
          <td>rost (true)</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Qaysi kalit so’z butun sonli o’zgaruvchi faqat musbat qiymatlarni
            qabul qilishini ko’rsatadi?
          </td>
        </tr>
        <tr>
          <td>unsigned</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Massivning oxirgi elemenning tartib raqami nimaga teng bo’ladi, agar
            massiv o’lchami 19 teng bo’lsa?
          </td>
        </tr>
        <tr>
          <td>18</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmasi ustida qanday to’rtta asosiy amal bajariladi
          </td>
        </tr>
        <tr>
          <td>yaratish, o’chirish, tanlash (ruxsat olish), yangilash.</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlarni kompyuter xotirasda akslantirish nechta bosqichdan
            iborat?
          </td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmasi mazmunli (matematik) bosqichda ...</td>
        </tr>
        <tr>
          <td>
            konkret obyektning qayta ishlash, ularning xussusiyatlari va
            munosabatlarini tadqiq qilinadi.
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmasi mantiqiy bosqichda ...</td>
        </tr>
        <tr>
          <td>
            berilgan talabalar bo’yicha algoritmni ishlab chiqilishi tadqiq
            qilinadi.
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmasi fizik bosqichda ...</td>
        </tr>
        <tr>
          <td>
            kompyuter xotirasida ma’lumotlarni aks ettirilishi tadqiq qilinadi.
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Bir xil tipdagi o’zaro takrorlanmaydigan elementlardan iborat majmua
          </td>
        </tr>
        <tr>
          <td>To’plam</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Bir xil tipdagi elementlar majmuasi</td>
        </tr>
        <tr>
          <td>Massiv</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Turli tipdagi ma’lumotlardan qanday tuzilma xosil qilinadi?</td>
        </tr>
        <tr>
          <td>Yozuv</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Turli tipdagi ma’lumot maydonlardan iborat tartibli tuzilmasi</td>
        </tr>
        <tr>
          <td>Jadval</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Oddiy sozlangan ma’lumotlar turlari (atomlar)ga kuyidagilar kiradi:
          </td>
        </tr>
        <tr>
          <td>mantiqiy, butun, xakikiy, belgili, ko’rsatkichli tur</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Sozlangan tuzilmaviy MT (molekulalar) ga kuyidagilar kiradi:</td>
        </tr>
        <tr>
          <td>massiv, yozuv, rekursiv turlar, to’plam</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>ENUM kalit so’zi yordamida qanday tuzilma yaratiladi</td>
        </tr>
        <tr>
          <td>Birlashma</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Xotirani dinamik ajratish uchun kalit so’zini ko’rsating</td>
        </tr>
        <tr>
          <td>new</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Dinamik xotirani bo’shatish uchun kalit so’zini ko’rsating</td>
        </tr>
        <tr>
          <td>delete</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            int function(char x1, float x2, double x3)funksiya qiymatining
            qaytarish turini ko’rsating
          </td>
        </tr>
        <tr>
          <td>mas[6];</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Turlarni keltirishda ma’lumotnng qisman yo’qotish bilan oshiriladi
          </td>
        </tr>
        <tr>
          <td>int</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari bog’lanishiga ko’ra qo’yidagilarga
            klassifikasiyalanadi
          </td>
        </tr>
        <tr>
          <td>Bog’lamli va bog’lamsiz</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari vaqt o’zgaruvchanligi yoki dastur
            bajarilishi jarayoniga ko’ra qo’yidagilarga
          </td>
        </tr>
        <tr>
          <td>klassifikasiyalanadi</td>
        </tr>
        <tr>
          <td>Statik, yarimstatik va dinamik</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari tartibiga ko’ra qo’yidagilarga
            klassifikasiyalanadi
          </td>
        </tr>
        <tr>
          <td>Chiziqli va chiziqsiz</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari uchun xotira ajratish amali qanday nomlanadi
          </td>
        </tr>
        <tr>
          <td>yaratish</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari uchun ajratilgan xotirani o’chirish amali
            qanday nomlanadi
          </td>
        </tr>
        <tr>
          <td>yo’qotish</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmalari qiymatini o’zgartirish amali qanday
            nomlanadi
          </td>
        </tr>
        <tr>
          <td>yangilash</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ma’lumotlar tuzilmalariga ruxsat olish amali qanday nomlanadi</td>
        </tr>
        <tr>
          <td>tanlash (ruxsat)</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>X=3.1415; xaqiqiy sonning mantissasi nimaga teng bo’ladi</td>
        </tr>
        <tr>
          <td>31415</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Dastur bajarilish jarayonida xotira xajmi bir xil bo’lgan oddiy va
            asosiy tuzilma to’plamlariga ... deyiladi.
          </td>
        </tr>
        <tr>
          <td>Statik ma’lumotlar tuzilmasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ikkita satrni o’zaro taqqoslash funksiyasini ko’rsating</td>
        </tr>
        <tr>
          <td>strcmp();</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Birinchi satrning davomida ikkinchi satrni qo’shish funksiyasini
            ko’rsating
          </td>
        </tr>
        <tr>
          <td>strcat ();</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Stek tuzilmasida qanday hizmat ko’rsatish turi qullaniladi?</td>
        </tr>
        <tr>
          <td>LIFO</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Navbat tuzilmasida qanday hizmat ko’rsatish turi qullaniladi?</td>
        </tr>
        <tr>
          <td>FIFO</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Stekga yangi element qushish funksiyasi qanday belgilanadi</td>
        </tr>
        <tr>
          <td>Push</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Stekdan yuqori elementini o’chirish funksiyasi qanday belgilanadi
          </td>
        </tr>
        <tr>
          <td>Pop</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Stekdan yuqori elementini o’qitib olish funksiyasi qanday
            belgilanadi
          </td>
        </tr>
        <tr>
          <td>Top</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Yarimstatik ma’lumotlar tuzilmasiga nimalar kiradi?</td>
        </tr>
        <tr>
          <td>Stek, Dek, Navbat</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ro’yxatni massivdan ustunligini ko’rsating</td>
        </tr>
        <tr>
          <td>ro’yxatni uzunligiga chegara belgilanmaydi</td>
        </tr>
        <tr></tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Dastur bajarilish jarayonida xotira xajmi statik belgilanadi va
            deskriptor-ko’rsatkich orqali foydalanilgan
          </td>
        </tr>
        <tr>
          <td>tuzilma to’plamlariga ... deyiladi.</td>
        </tr>
        <tr>
          <td>Yarimstatik ma’lumotlar tuzilmasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Funksiyalarning qaysi biri kiritish oqimidan 100 belgini x satrga
            o’qitadi?
          </td>
        </tr>
        <tr>
          <td>cin.getline(x,100);</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Stek bu ...</td>
        </tr>
        <tr>
          <td>
            chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va
            chiqarish uning bir tomonidan amalga oshiriladi
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Navbat bu...</td>
        </tr>
        <tr>
          <td>
            shunday tuzilmaki, u yelementlar qo’shilishi bilan kengayib boradi
            va elementlarni faqatgina bir tomondan qabul qiladi
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Dek bu ...</td>
        </tr>
        <tr>
          <td>
            chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va
            chiqarish uning ikki tomonlama amalga oshiriladi
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Qanday kalit so’zi yordamida nol havola (bo’sh manzil) belgilanadi
          </td>
        </tr>
        <tr>
          <td>NULL</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Bir bog’lamli ro’yxatda nechta ko’rsatkichdan foydalaniladi</td>
        </tr>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Ikki bog’lamli ro’yxatda nechta ko’rsatkichdan foydalaniladi</td>
        </tr>
        <tr>
          <td>2</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Dastur bajarilish jarayonida xotira xajmi aniqlangan yoki ularning
            soni ma’lum bo’lishi tuzilma
          </td>
        </tr>
        <tr>
          <td>to’plamlariga ... deyiladi.</td>
        </tr>
        <tr>
          <td>Dinamik ma’lumotlar tuzilmasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Xalqasimon ro’yxatdan element o’chirilganda …</td>
        </tr>
        <tr>
          <td>ro’yxat bitta elementga qisqaradi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Halqasimon ikki yo’nalishli ro’yxatda qaysi yo’nalishlar bo’yicha
            xarakatlanish mumkin?
          </td>
        </tr>
        <tr>
          <td>ikkala</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ro’yxat elementlarning ro’yxatlar bo’lishi mumkin tuzilma qanday
            nomlanadi
          </td>
        </tr>
        <tr>
          <td>Lug’at</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            … - obyektni mazkur obyektga murojaat qilish orqali aniqlashdir.
          </td>
        </tr>
        <tr>
          <td>Rekursiya</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Ma’lumotlar tuzilmasi, tashkil qiluvchi elementlari qaysining
            o’xshash elementlar bo’lsa, u xoda ...
          </td>
        </tr>
        <tr>
          <td>deyiladi.</td>
        </tr>
        <tr>
          <td>Rekursiv ma’lumotlar tuzilmasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Rekursiv funksiyalar apparati kim tomondan kashf qilingan</td>
        </tr>
        <tr>
          <td>A.Chyorch</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Rekursiya masalasini xal qiluvchi bosqichlari qanday nomlanadi
          </td>
        </tr>
        <tr>
          <td>Rekursiv triada</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Rekursiv triada qaysi bosqichlardan iborat</td>
        </tr>
        <tr>
          <td>parametrizasiya, rekursiya bazasi va dekompozisiya</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Rekursiv triadaning qaysi bosqichida masala shartini tasniflash va
            uni hal etish uchun parametrlar
          </td>
        </tr>
        <tr>
          <td>aniqlanadi.</td>
        </tr>
        <tr>
          <td>parametrizasiya</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Rekursiv triadaning qaysi bosqichida masala yechimi aniq bo’lgan
            trivial holat aniqlanadi, ya’ni bu holatda
          </td>
        </tr>
        <tr>
          <td>funksiyani o’ziga murojaat qilishi talab etilmaydi.</td>
        </tr>
        <tr>
          <td>rekursiya bazasi</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Rekursiv triadaning qaysi bosqichida umumiy holatni nisbatan ancha
            oddiy bo’lgan o’zgargan parametrli
          </td>
        </tr>
        <tr>
          <td>qism masalalar orqali ifodalaydi.</td>
        </tr>
        <tr>
          <td>dekompozisiya</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Daraxtsimon tuzilmadagi shunday elementga murojaat yo’qki, u...
            tugun xisoblanadi.
          </td>
        </tr>
        <tr>
          <td>ildiz</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Daraxtsimon tuzilmada boshqa elementlarga murojaat bo’lmasa, u...
            tugun xisoblanadi.
          </td>
        </tr>
        <tr>
          <td>barg</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Qachon daraxt muvozanatlangan xisoblanadi?</td>
        </tr>
        <tr>
          <td>
            agar uning chap va o’ng qism daraxtlari balandligi farqi 1tadan ko’p
            bo’lmasa
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Chiziqsiz ma’lumotlar tuzilmasiga nimalar kiradi?</td>
        </tr>
        <tr>
          <td>Daraxt, graf</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Daraxt balandligi – bu ...</td>
        </tr>
        <tr>
          <td>daraxt bosqichlari soni</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Daraxt darajasi – bu ...</td>
        </tr>
        <tr>
          <td>
            Daraxtga tegishli tugunning munosabatlar sonining maksimal qiymati
          </td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Minimal balandlikka ega daraxt</td>
        </tr>
        <tr>
          <td>HEAP TREE</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Daraxt qanday nomlanadi, agar uning chiqish darajasi ikkidan
            oshmasa.
          </td>
        </tr>
        <tr>
          <td>Binar</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Qidiruv daraxtda nechta va qaysilar ko’ruv amallarini ifodalaydi
          </td>
        </tr>
        <tr>
          <td>Uchta (to’g’ri, teskari, simmetrik)</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Kompyuter xotirasida binar daraxtni qanday ko’rinishda tasvirlash
            qulay
          </td>
        </tr>
        <tr>
          <td>bog’langan chiziqsiz ro’yxatlar</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Daraxt uzunligi – bu ...</td>
        </tr>
        <tr>
          <td>tugunlar soni</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Chiziqsiz iyerarxik bog’langan ma’lumotlar tuzilmasi – bu …</td>
        </tr>
        <tr>
          <td>Daraxt</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>Daraxt tugunlar ketma-ketligini tartiblangan holda chiqarish</td>
        </tr>
        <tr>
          <td>Ko’ruv amali</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar daraxtni tashkil etuvchi element (tugun)lardan faqat ikkita
            tugun bilan bog’langan bo’lsa, u holda
          </td>
        </tr>
        <tr>
          <td>bunday binar daraxt ... deyiladi.</td>
        </tr>
        <tr>
          <td>to’liq</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            56,34,60,23,40,65 sonlaridan xosil bo’lgan binar daraxt
            muvozanatlanganmi yoki yo’qmi?
          </td>
        </tr>
        <tr>
          <td>xa</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar elementlar soni 100ta bo’lsa, u holda minimal balandga ega
            daraxt balandligi nechiga teng bo’ladi?
          </td>
        </tr>
        <tr>
          <td>7</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar minimal balandga ega daraxt balandligi 10ga teng bo’lsa, u
            holda maksimal elementlar soni nechiga
          </td>
        </tr>
        <tr>
          <td>teng bo’ladi</td>
        </tr>
        <tr>
          <td>1023</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            Agar elementlar soni 10ta bo’lsa, u holda minimal balandga ega
            daraxt balandligi nechiga teng bo’ladi?
          </td>
        </tr>
        <tr>
          <td>4</td>
        </tr>
        <tr>
          <td>•</td>
        </tr>
        <tr>
          <td>
            10,7, 12, 2, 5, 3, 11, 14 sonlaridan hosil qilingan binar daraxtda
            nechta oraliq tugun mavjud
          </td>
        </tr>
        <tr>
          <td>4</td>
        </tr>
        <tr></tr>
      </table>
    </div>
  );
};

export default TestResponse;
