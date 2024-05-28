import React from "react";

//  exeldan tablega o'tkazsh uchun
//  https://tableconvert.com/excel-to-html
//  https://www.seabreezecomputers.com/excel2array/
/* satylari mavjud !!! */

const TestResponse = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        KiberXavsizlikdan Javoblar
      </h1>

      {/* <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Tafu Uchun maxsuz. Falsafadan
      </h1> */}

      <table
        border="1"
        style={{
          width: "100%",
          margin: "10px auto",
        }}
      >
        <tr>
          <td>1.Konfidensiallikni ta&#39;minlash bu - ?</td>
          <td>+ruxsatsiz o&#39;qishdan himoyalash.</td>
        </tr>
        <tr>
          <td>2.Foydalanuvchanlikni ta&#39;minlash bu - ?</td>
          <td>+ruxsatsiz bajarishdan himoyalash.</td>
        </tr>
        <tr>
          <td>3.Yaxlitlikni ta&#39;minlash bu - ?</td>
          <td>+ruxsatsiz yozishdan himoyalash.</td>
        </tr>
        <tr>
          <td>4.Jumlani to&#39;ldiring. Hujumchi kabi fikrlash ... kerak.</td>
          <td>+bo&#39;lishi mumkin bo&#39;lgan xavfni oldini olish uchun</td>
        </tr>
        <tr>
          <td>5.Jumlani to&#39;ldiring. Tizimli fikrlash ... uchun kerak.</td>
          <td>+kafolatlangan amallarni ta&#39;minlash</td>
        </tr>
        <tr>
          <td>6.Axborot xavfsizligida risk bu?</td>
          <td>
            +Manbaga zarar keltiradigan ichki yoki tashqi zaiflik ta&#39;sirida
            tahdid qilish ehtimoli.
          </td>
        </tr>
        <tr>
          <td>7.Axborot xavfsizligida tahdid bu?</td>
          <td>
            +Aktivga zarar yetkazishi mumkin bo&#39;lgan istalmagan hodisa.
          </td>
        </tr>
        <tr>
          <td>8.Axborot xavfsizligida aktiv bu?</td>
          <td>
            +Tashkilot yoki foydalanuvchi uchun qadrli bo&#39;lgan ixtiyoriy
            narsa.
          </td>
        </tr>
        <tr>
          <td>9.Axborot xavfsizligida zaiflik bu?</td>
          <td>
            +Tahdidga sabab bo&#39;luvchi tashkilot aktivi yoki boshqaruv
            tizimidagi nuqson.
          </td>
        </tr>
        <tr>
          <td>10.Axborot xavfsizligida boshqarish vositasi bu?</td>
          <td>
            +Natijasi zaiflik yoki tahdidga ta&#39;sir qiluvchi riskni
            o&#39;zgartiradigan harakatlar.
          </td>
        </tr>
        <tr>
          <td>
            11.Har qanday vaziyatda biror bir hodisani yuzaga kelish ehtimoli
            qo&#39;shilsa ....
          </td>
          <td>+risk paydo bo&#39;ladi.</td>
        </tr>
        <tr>
          <td>
            12.Jumlani to&#39;ldiring. Denial of service (DOS) hujumi axborotni
            .... xususiyatini buzushga qaratilgan.
          </td>
          <td>+foydalanuvchanlik</td>
        </tr>
        <tr>
          <td>
            13.Jumlani to&#39;ldiring. ... sohasi tashkil etuvchilar
            xavfsizligi, aloqa xavfsizligi va dasturiy ta&#39;minotlar
            xavfsizligidan iborat.
          </td>
          <td>+Tizim xavfsizligi</td>
        </tr>
        <tr>
          <td>
            14.Kriptologiya so&#39;ziga berilgan to&#39;g&#39;ri tavsifni
            toping?
          </td>
          <td>+Maxfiy shifrlarni yaratish va buzish fani va sanati.</td>
        </tr>
        <tr>
          <td>
            15..... kriptotizimni shifrlash va deshifrlash uchun sozlashda
            foydalaniladi.
          </td>
          <td>+Kriptografik kalit</td>
        </tr>
        <tr>
          <td>
            16.Kriptografiya so&#39;ziga berilgan to&#39;g&#39;ri tavsifni
            toping?
          </td>
          <td>+Maxfiy shifrlarni yaratish fani va sanati.</td>
        </tr>
        <tr>
          <td>
            17.Kriptotahlil so&#39;ziga berilgan to&#39;g&#39;ri tavsifni
            toping?
          </td>
          <td>+Maxfiy shifrlarni buzish fani va sanati.</td>
        </tr>
        <tr>
          <td>
            18...... axborotni ifodalash uchun foydalaniladigan chekli sondagi
            belgilar to&#39;plami.
          </td>
          <td>+Alifbo</td>
        </tr>
        <tr>
          <td>19.Ma&#39;lumot shifrlansa, natijasi .... bo&#39;ladi.</td>
          <td>+shifrmatn</td>
        </tr>
        <tr>
          <td>20.Deshifrlash uchun kalit va ..... kerak bo&#39;ladi.</td>
          <td>+shifrmatn</td>
        </tr>
        <tr>
          <td>
            21.Ma&#39;lumotni shifrlash va deshifrlashda yagona kalitdan
            foydalanuvchi tizim bu -
          </td>
          <td>+simmetrik kriptotizim.</td>
        </tr>
        <tr>
          <td>22.Ikki kalitli kriptotizim bu -</td>
          <td>+ochiq kalitli kriptotizim.</td>
        </tr>
        <tr>
          <td>
            23.Axborotni mavjudligini yashirish bilan shug&#39;ullanuvchi fan
            sohasi bu -
          </td>
          <td>+steganografiya.</td>
        </tr>
        <tr>
          <td>
            24.Axborotni foydalanuvchiga qulay tarzda taqdim etish uchun .....
            amalga oshiriladi.
          </td>
          <td>+kodlash</td>
        </tr>
        <tr>
          <td>
            25.Jumlani to&#39;ldiring. Ma&#39;lumotni konfidensialligini
            ta&#39;minlash uchun ..... zarur.
          </td>
          <td>+shifrlash</td>
        </tr>
        <tr>
          <td>26.Ma&#39;lumotni mavjudligini yashirishda .....</td>
          <td>+steganografik algoritmdan foydalaniladi.</td>
        </tr>
        <tr>
          <td>27.Xesh funksiyalar - .... funksiya.</td>
          <td>+kalitsiz kriptografik</td>
        </tr>
        <tr>
          <td>
            28.Jumlani to&#39;ldiring. Ma&#39;lumotni uzatishda kriptografik
            himoya .....
          </td>
          <td>+konfidensiallik va butunlikni ta&#39;minlaydi.</td>
        </tr>
        <tr>
          <td>
            29.Jumlani to&#39;ldiring. ... kompyuter davriga tegishli shifrlarga
            misol bo&#39;la oladi.
          </td>
          <td>+DES, AES shifri</td>
        </tr>
        <tr>
          <td>
            30..... kriptografik shifrlash algoritmlari blokli va oqimli
            turlarga ajratiladi.
          </td>
          <td>+Simmetrik</td>
        </tr>
        <tr>
          <td>
            31.Jumlani to&#39;ldiring. .... shifrlar tasodifiy ketma-ketliklarni
            generatsiyalashga asoslanadi.
          </td>
          <td>+Oqimli</td>
        </tr>
        <tr>
          <td>
            32.Ochiq matn qismlarini takroriy shifrlovchi algoritmlar bu -
          </td>
          <td>+blokli shifrlar</td>
        </tr>
        <tr>
          <td>33,A5/1 shifri bu -</td>
          <td>+oqimli shifr.</td>
        </tr>
        <tr>
          <td>
            34.Quyidagi muammolardan qaysi biri simmetrik kriptotizimlarga xos.
          </td>
          <td>+Kalitni taqsimlash zaruriyati.</td>
        </tr>
        <tr>
          <td>
            35.Quyidagi atamalardan qaysi biri faqat simmetrik blokli shifrlarga
            xos?
          </td>
          <td>+Blok uzunligi.</td>
        </tr>
        <tr>
          <td>
            36.Jumlani to&#39;ldiring. Sezar shifri .... akslantirishga
            asoslangan.
          </td>
          <td>+o&#39;rniga qo&#39;yish</td>
        </tr>
        <tr>
          <td>
            37.Kriptotizimning to&#39;liq xavfsiz bo&#39;lishi Kerxgofs
            prinsipiga ko&#39;ra qaysi kattalikning nomalum bo&#39;lishiga
            asoslanadi?
          </td>
          <td>+Kalit.</td>
        </tr>
        <tr>
          <td>
            38.Shifrlash va deshifrlashda turli kalitlardan foydalanuvchi
            shifrlar bu -
          </td>
          <td>+ochiq kalitli shifrlar.</td>
        </tr>
        <tr>
          <td>
            39.Agar simmetrik kalitning uzunligi 64 bit bo&#39;lsa, jami
            bo&#39;lishi mumkin bo&#39;lgan kalitlar soni nechta?
          </td>
          <td>264</td>
        </tr>
        <tr>
          <td>
            40.Axborotni qaysi xususiyatlari simmetrik shifrlar yordamida
            ta&#39;minlanadi.
          </td>
          <td>+Konfidensiallik va butunlik.</td>
        </tr>
        <tr>
          <td>
            41.Axborotni qaysi xususiyatlari ochiq kalitli shifrlar yordamida
            ta&#39;minlanadi.
          </td>
          <td>+Konfidensiallik.</td>
        </tr>
        <tr>
          <td>42.Elektron raqamli imzo tizimi.</td>
          <td>+MAC tizimlari.</td>
        </tr>
        <tr>
          <td>
            43.Qaysi ochiq kalitli algoritm katta sonni faktorlash muammosiga
            asoslanadi?
          </td>
          <td>+RSA algoritmi.</td>
        </tr>
        <tr>
          <td>
            44.Rad etishdan himoyalashda ochiq kalitli kriptotizimlarning qaysi
            xususiyati muhim hisoblanadi.
          </td>
          <td>+Ikkita kalitdan foydalanilgani.</td>
        </tr>
        <tr>
          <td>
            45.Quyidagi talablardan qaysi biri xesh funksiyaga tegishli emas.
          </td>
          <td>+Bir tomonlama funksiya bo&#39;lmasligi kerak.</td>
        </tr>
        <tr>
          <td>
            46.Quyidagi xususiyatlardan qaysi biri elektron raqamli imzo
            tomonidan ta&#39;minlanadi?
          </td>
          <td>+Axborot butunligini va rad etishdan himoyalash.</td>
        </tr>
        <tr>
          <td>
            47.Faqat ma&#39;lumotni butunligini ta&#39;minlovchi
            kriptotizimlarni ko&#39;rsating.
          </td>
          <td>+MAC (Xabarlarni autentifikatsiya kodlari) tizimlari.</td>
        </tr>
        <tr>
          <td>48.Foydalanuvchini tizimga tanitish jarayoni bu?</td>
          <td>+Identifikatsiya.</td>
        </tr>
        <tr>
          <td>49.Foydalanuvchini haqiqiyligini tekshirish jarayoni bu?</td>
          <td>+Autentifikatsiya.</td>
        </tr>
        <tr>
          <td>
            50.Tizim tomonidan foydalanuvchilarga imtiyozlar berish jarayoni bu?
          </td>
          <td>+Avtorizatsiya.</td>
        </tr>
        <tr>
          <td>
            51.Parolga asoslangan autentifikatsiya usulining asosiy kamchiligini
            ko&#39;rsating?
          </td>
          <td>+Esda saqlash zaruriyati.</td>
        </tr>
        <tr>
          <td>
            52.Biror narsani bilishga asoslangan autentifikatsiya deyilganda
            quyidagilardan qaysilar tushuniladi.
          </td>
          <td>+PIN, Parol.</td>
        </tr>
        <tr>
          <td>
            53.Tokenga asoslangan autentifikatsiya usulining asosiy kamchiligini
            ayting?
          </td>
          <td>+Doimo xavfsiz saqlab olib yurish zaruriyati.</td>
        </tr>
        <tr>
          <td>
            54.Esda saqlashni va olib yurishni talab etmaydigan autentifikatsiya
            usuli bu -
          </td>
          <td>+biometrik autentifikatsiya.</td>
        </tr>
        <tr>
          <td>
            55.Qaysi biometrik parametr eng yuqori universallik xususiyatiga
            ega?
          </td>
          <td>+Yuz tasviri.</td>
        </tr>
        <tr>
          <td>
            56.Qaysi biometrik parametr eng yuqori takrorlanmaslik xususiyatiga
            ega?
          </td>
          <td>+Ko&#39;z qorachig&#39;i.</td>
        </tr>
        <tr>
          <td>
            57.Quyidagilardan qaysi biri har ikkala tomonning haqiqiyligini
            tekshirish jarayonini ifodalaydi?
          </td>
          <td>+Ikki tomonlama autentifikatsiya.</td>
        </tr>
        <tr>
          <td>
            58.Parolga asoslangan autentifikatsiya usuliga qaratilgan hujumlarni
            ko&#39;rsating?
          </td>
          <td>
            +Parollar lug&#39;atidan foydalanish asosida hujum, yelka orqali
            qarash hujumi, zararli dasturlardan foydanish asosida hujum.
          </td>
        </tr>
        <tr>
          <td>
            59.Tokenga asoslangan autentifikatsiya usuliga qaratilgan hujumlarni
            ko&#39;rsating?
          </td>
          <td>
            +Fizik o&#39;g&#39;irlash, mobil qurilmalarda zararli dasturlardan
            foydalanishga asoslangan hujumlar
          </td>
        </tr>
        <tr>
          <td>
            60.Foydalanuvchi parollari bazada qanday ko&#39;rinishda saqlanadi?
          </td>
          <td>+Xeshlangan ko&#39;rinishda.</td>
        </tr>
        <tr>
          <td>
            61.Agar parolning uzunligi 8 ta belgi va har bir o&#39;rinda 128 ta
            turlicha belgidan foydalanish mumkin bo&#39;lsa, bo&#39;lishi mumkin
            bo&#39;lgan jami parollar sonini toping.
          </td>
          <td>1288</td>
        </tr>
        <tr>
          <td>
            62.Parolni &quot;salt&quot; (tuz) kattaligidan foydalanib
            xeshlashdan (h(password, salt)) asosiy maqsad nima?
          </td>
          <td>
            +Buzg&#39;unchiga ortiqcha hisoblashni talab etuvchi murakkablikni
            yaratish.
          </td>
        </tr>
        <tr>
          <td>
            63.Quyidagilardan qaysi biri tabiy tahdidga misol bo&#39;ladi?
          </td>
          <td>+Yong&#39;in, suv toshishi, harorat ortishi.</td>
        </tr>
        <tr>
          <td>
            64.Qaysi nazorat usuli axborotni fizik himoyalashda inson faktorini
            mujassamlashtirgan?
          </td>
          <td>+Ma&#39;muriy nazoratlash.</td>
        </tr>
        <tr>
          <td>
            65.Faqat ob&#39;ektning egasi tomonidan foydalanishga mos
            bo&#39;lgan mantiqiy foydalanish usulini ko&#39;rsating?
          </td>
          <td>+Diskretsion foydalanishni boshqarish.</td>
        </tr>
        <tr>
          <td>
            66.Qaysi usul ob&#39;ektlar va sub&#39;ektlarni
            klassifikatsiyalashga asoslangan?
          </td>
          <td>+Mandatli foydalanishni boshqarish.</td>
        </tr>
        <tr>
          <td>
            67.Biror faoliyat turi bilan bog&#39;liq harakatlar va majburiyatlar
            to&#39;plami bu?
          </td>
          <td>+Rol.</td>
        </tr>
        <tr>
          <td>
            68.Qoida, siyosat, qoida va siyosatni mujassamlashtirgan
            algoritmlar, majburiyatlar va maslahatlar kabi tushunchalar qaysi
            foydalanishni boshqarish usuliga aloqador.
          </td>
          <td>+Attributga asoslangan foydalanishni boshqarish.</td>
        </tr>
        <tr>
          <td>
            69,Bell-Lapadula modeli axborotni qaysi xususiyatini
            ta&#39;minlashni maqsad qiladi?
          </td>
          <td>+Konfidensiallik.</td>
        </tr>
        <tr>
          <td>
            70.Biba modeli axborotni qaysi xususiyatini ta&#39;minlashni maqsad
            qiladi?
          </td>
          <td>+Butunlik.</td>
        </tr>
        <tr>
          <td>
            71.Qaysi turdagi shifrlash vositasida barcha kriptografik
            parametrlar kompyuterning ishtirokisiz generatsiya qilinadi?
          </td>
          <td>+Apparat.</td>
        </tr>
        <tr>
          <td>
            72.Qaysi turdagi shifrlash vositasida shifrlash jarayonida boshqa
            dasturlar kabi kompyuter resursidan foydalanadi?
          </td>
          <td>+Dasturiy.</td>
        </tr>
        <tr>
          <td>
            73.Yaratishda biror matematik muammoga asoslanuvchi shifrlash
            algoritmini ko&#39;rsating?
          </td>
          <td>+Ochiq kalitli shifrlar.</td>
        </tr>
        <tr>
          <td>74.Xesh funksiyalarda kolliziya hodisasi bu?</td>
          <td>
            +Ikki turli matnlarning xesh qiymatlarini bir xil bo&#39;lishi.
          </td>
        </tr>
        <tr>
          <td>
            75.64 ta belgidan iborat Sezar shifrlash usilida kalitni bilmasdan
            turib nechta urinishda ochiq matnni aniqlash mumkin?
          </td>
          <td>63</td>
        </tr>
        <tr>
          <td>76.Elektron raqamli imzo muolajalarini ko&#39;rsating?</td>
          <td>+Imzoni shakllantirish va imkoni tekshirish.</td>
        </tr>
        <tr>
          <td>
            77.&quot;Yelka orqali qarash&quot; hujumi qaysi turdagi
            autentifikatsiya usuliga qaratilgan.
          </td>
          <td>+Parolga asoslangan autentifikatsiya.</td>
        </tr>
        <tr>
          <td>
            78.Sotsial injineriyaga asoslangan hujumlar qaysi turdagi
            autentifikatsiya usuliga qaratilgan.
          </td>
          <td>+Parolga asoslangan autentifikatsiya.</td>
        </tr>
        <tr>
          <td>
            79.Yo&#39;qolgan holatda almashtirish qaysi turdagi autentifikatsiya
            usuli uchun eng arzon.
          </td>
          <td>+Parolga asoslangan autentifikatsiya.</td>
        </tr>
        <tr>
          <td>
            80.Qalbakilashtirish hujumi qaysi turdagi autentifikatsiya usuliga
            qaratilgan.
          </td>
          <td>+Biometrik autentifikatsiya.</td>
        </tr>
        <tr>
          <td>
            81,Axborotni butunligini ta&#39;minlash usullarini ko&#39;rsating.
          </td>
          <td>+Xesh funksiyalar, MAC.</td>
        </tr>
        <tr>
          <td>
            82.Quyidagilardan qaysi biri to&#39;liq kompyuter topologiyalarini
            ifodalamaydi.
          </td>
          <td>+LAN, GAN, OSI.</td>
        </tr>
        <tr>
          <td>83.OSI tarmoq modeli nechta sathdan iborat?</td>
          <td>7</td>
        </tr>
        <tr>
          <td>84.TCP/IP tarmoq modeli nechta sathdan iborat?</td>
          <td>4</td>
        </tr>
        <tr>
          <td>85.Hajmi bo&#39;yicha eng kichik hisoblangan tarmoq turi bu -</td>
          <td>+PAN</td>
        </tr>
        <tr>
          <td>
            86.IPv6 protokolida IP manzilni ifodalashda necha bit ajratiladi.
          </td>
          <td>128</td>
        </tr>
        <tr>
          <td>
            87.IP manzilni domen nomlariga yoki aksincha almashtirishni amalga
            oshiruvchi xizmat bu-
          </td>
          <td>+DNS</td>
        </tr>
        <tr>
          <td>
            88.Natijasi tashkilotning amallariga va funksional harakatlariga
            zarar keltiruvchi hodisalarning potensial paydo bo&#39;lishi bu?
          </td>
          <td>+Tahdid.</td>
        </tr>
        <tr>
          <td>
            89.Zaiflik orqali AT tizimi xavfsizligini buzish tomon amalga
            oshirilgan harakat bu?
          </td>
          <td>+Hujum.</td>
        </tr>
        <tr>
          <td>
            90.Quyidagilardan qaysi biri tarmoq xavfsizligi muammolariga sabab
            bo&#39;lmaydi?
          </td>
          <td>+Routerlardan foydalanmaslik.</td>
        </tr>
        <tr>
          <td>
            91.Tarmoq xavfsizligini buzulishi biznes faoliyatga qanday
            ta&#39;sir qiladi?
          </td>
          <td>
            +Biznes faoliyatning buzilishi, huquqiy javobgarlikka sababchi
            bo&#39;ladi.
          </td>
        </tr>
        <tr>
          <td>92.Razvedka hujumlari bu?</td>
          <td>
            +Asosiy hujumlarni oson amalga oshirish uchun tashkilot va tarmoq
            haqidagi axborotni to&#39;plashni maqsad qiladi.
          </td>
        </tr>
        <tr>
          <td>93.Kirish hujumlari bu?</td>
          <td>
            +Turli texnologiyalardan foydalangan holda tarmoqqa kirishga harakat
            qiladi.
          </td>
        </tr>
        <tr>
          <td>94.Xizmatdan vos kechishga qaratilgan hujumlar bu?</td>
          <td>
            +Foydalanuvchilarga va tashkilotlarda mavjud bo&#39;lgan biror
            xizmatni cheklashga urinadi.
          </td>
        </tr>
        <tr>
          <td>
            95.Paketlarni snifferlash, portlarni skanerlash va Ping
            buyrug&#39;ini yuborish hujumlari qaysi hujumlar toifasiga kiradi?
          </td>
          <td>+Razvedka hujumlari.</td>
        </tr>
        <tr>
          <td>
            96.O&#39;zini yaxshi va foydali dasturiy vosita sifatida
            ko&#39;rsatuvchi zararli dastur turi bu?
          </td>
          <td>+Troyan otlari.</td>
        </tr>
        <tr>
          <td>
            97.Marketing maqsadida yoki reklamani namoyish qilish uchun
            foydalanuvchini ko&#39;rish rejimini kuzutib boruvchi zararli dastur
            turi bu?
          </td>
          <td>+Adware.</td>
        </tr>
        <tr>
          <td>
            98.Himoya mexanizmini aylanib o&#39;tib tizimga ruxsatsiz kirish
            imkonini beruvchi zararli dastur turi bu?
          </td>
          <td>+Backdoors.</td>
        </tr>
        <tr>
          <td>
            99.Paket filterlari turidagi tarmoqlararo ekran vositasi OSI
            modelining qaysi sathida ishlaydi?
          </td>
          <td>+Tarmoq sathida.</td>
        </tr>
        <tr>
          <td>
            100.#Tashqi tarmoqdagi foydalanuvchilardan ichki tarmoq resurslarini
            himoyalash qaysi himoya vositasining vazifasi hisoblanadi.
          </td>
          <td>+Tarmoqlararo ekran.</td>
        </tr>
        <tr>
          <td>
            101.Ichki tarmoq foydalanuvchilarini tashqi tarmoqqa bo&#39;lgan
            murojaatlarini chegaralash qaysi himoya vositasining vazifasi
            hisoblanadi.
          </td>
          <td>+Tarmoqlararo ekran.</td>
        </tr>
        <tr>
          <td>
            102.2 lik sanoq tizimida 11011 soniga 11010 sonini 2 modul
            bo&#39;yicha qo&#39;shing?
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            103.2 lik sanoq tizimida 11011 soniga 00100 sonini 2 modul
            bo&#39;yicha qo&#39;shing?
          </td>
          <td>11111</td>
        </tr>
        <tr>
          <td>
            104.2 lik sanoq tizimida 11011 soniga 11010 sonini 2 modul
            bo&#39;yicha qo&#39;shing?
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            105.Axborot saqlagich vositalaridan qayta foydalanish xususiyatini
            saqlab qolgan holda axborotni yo&#39;q qilish usuli qaysi?
          </td>
          <td>
            +Bir necha marta takroran yozish va maxsus dasturlar yordamida
            saqlagichni tozalash
          </td>
        </tr>
        <tr>
          <td>
            106.Elektron ma&#39;lumotlarni yo&#39;q qilishda maxsus qurilma
            ichida joylashtirilgan saqlagichning xususiyatlari
            o&#39;zgartiriladigan usul bu ...
          </td>
          <td>+magnitsizlantirish.</td>
        </tr>
        <tr>
          <td>
            107.Yo&#39;q qilish usullari orasidan ekologik jihatdan
            ma&#39;qullanmaydigan va maxsus joy talab qiladigan usul qaysi?
          </td>
          <td>+Yoqish</td>
        </tr>
        <tr>
          <td>108.Kiberjinoyatchilik bu - ?</td>
          <td>
            +Kompyuter yoki boshqa qurilmalarga qarshi qilingan yoki kompyuter
            va boshqa qurilmalar orqali qilingan jinoiy faoliyat.
          </td>
        </tr>
        <tr>
          <td>109.Kiberetika bu - ?</td>
          <td>
            +Kompyuterlar bilan bog&#39;liq falsafiy soha bo&#39;lib,
            foydalanuvchilarning xatti-harakatlari, kompyuterlar nimaga
            dasturlashtirilganligi va umuman insonlarga va jamiyatga qanday
            ta&#39;sir ko&#39;rsatishini o&#39;rganadi.
          </td>
        </tr>
        <tr>
          <td>
            110.Shaxsiy simsiz tarmoqlar qo&#39;llanish sohasini belgilang
          </td>
          <td>+Tashqi qurilmalar kabellarining o&#39;rnida</td>
        </tr>
        <tr>
          <td>
            111.VPNning texnik yechim arxitekturasiga ko&#39;ra turlari
            keltirilgan qatorni aniqlang?
          </td>
          <td>
            +Korporativ tarmoq ichidagi VPN; masofadan foydalaniluvchi VPN;
            korporativ tarmoqlararo VPN
          </td>
        </tr>
        <tr>
          <td>
            112.Axborotning konfidensialligi va butunligini ta&#39;minlash uchun
            ikki uzel orasida himoyalangan tunelni quruvchi himoya vositasi bu?
          </td>
          <td>+Virtual Private Network</td>
        </tr>
        <tr>
          <td>113.Qanday tahdidlar passiv hisoblanadi?</td>
          <td>
            +Amalga oshishida axborot strukturasi va mazmunida hech narsani
            o&#39;zgartirmaydigan tahdidlar
          </td>
        </tr>
        <tr>
          <td>
            114Quyidagi qaysi hujum turi razvedka hujumlari turiga kirmaydi?
          </td>
          <td>+Ddos</td>
        </tr>
        <tr>
          <td>
            115.Trafik orqali axborotni to&#39;plashga harakat qilish razvedka
            hujumlarining qaysi turida amalga oshiriladi?
          </td>
          <td>+Passiv</td>
        </tr>
        <tr>
          <td>
            116.Portlarni va operatsion tizimni skanerlash razvedka
            hujumlarining qaysi turida amalga oshiriladi?
          </td>
          <td>+Aktiv</td>
        </tr>
        <tr>
          <td>
            117.Paketlarni snifferlash, portlarni skanerlash, ping
            buyrug&#39;ini yuborish qanday hujum turiga misol bo&#39;ladi?
          </td>
          <td>+Razvedka hujumlari</td>
        </tr>
        <tr>
          <td>118.DNS serverlari tarmoqda qanday vazifani amalga oshiradi?</td>
          <td>
            +Xost nomlari va internet nomlarini IP manzillarga o&#39;zgartirish
            va teskarisini amalga oshiradi
          </td>
        </tr>
        <tr>
          <td>
            119.Markaziy xab yoki tugun orqali tarmoqni markazlashgan holda
            boshqarish qaysi tarmoq topologiyasida amalga oshiriladi?
          </td>
          <td>+Yulduz</td>
        </tr>
        <tr>
          <td>
            120.Quyidagilardan qaysilari ananaviy tarmoq turi hisoblanadi?
          </td>
          <td>+WAN, MAN, LAN</td>
        </tr>
        <tr>
          <td>
            121.Quyidagilardan qaysilari tarmoq topologiyalari hisoblanadi?
          </td>
          <td>+Halqa, yulduz, shina, daraxt</td>
        </tr>
        <tr>
          <td>
            122.Yong&#39;inga qarshi tizimlarni aktiv chora turiga
            quyidagilardan qaysilari kiradi?
          </td>
          <td>+Yong&#39;inni aniqlash va bartaraf etish tizimi</td>
        </tr>
        <tr>
          <td>
            123.Yong&#39;inga qarshi kurashishning aktiv usuli to&#39;g&#39;ri
            ko&#39;rsatilgan javobni toping?
          </td>
          <td>
            +Tutunni aniqlovchilar, alangani aniqlovchilar va issiqlikni
            aniqlovchilar
          </td>
        </tr>
        <tr>
          <td>
            124.Yong&#39;inga qarshi kurashishning passiv usuliga kiruvchi
            choralarni to&#39;g&#39;ri ko&#39;rsatilgan javobni toping?
          </td>
          <td>
            +Minimal darajada yonuvchan materiallardan foydalanish,
            qo&#39;shimcha etaj va xonalar qurish
          </td>
        </tr>
        <tr>
          <td>
            125.Fizik himoyani buzilishiga olib keluvchi tahdidlar yuzaga kelish
            shakliga ko&#39;ra qanday guruhlarga bo&#39;linadi?
          </td>
          <td>+Tabiy va sun&#39;iy</td>
        </tr>
        <tr>
          <td>
            126.Quyidagilarnnig qaysi biri tabiiy tahdidlarga misol bo&#39;la
            oladi?
          </td>
          <td>+Toshqinlar, yong&#39;in, zilzila</td>
        </tr>
        <tr>
          <td>
            127.Quyidagilarnnig qaysi biri sun&#39;iy tahdidlarga misol
            bo&#39;la oladi?
          </td>
          <td>+Bosqinchilik, terrorizm, o&#39;g&#39;irlik</td>
        </tr>
        <tr>
          <td>128.Kolliziya hodisasi deb nimaga aytiladi?</td>
          <td>+Ikki xil matn uchun bir xil xesh qiymat chiqishi</td>
        </tr>
        <tr>
          <td>
            129.GSM tarmog&#39;ida foydanalaniluvchi shifrlash algoritmi nomini
            ko&#39;rsating?
          </td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            130.O&#39;zbekistonda kriptografiya sohasida faoliyat yurituvchi
            tashkilot nomini ko&#39;rsating?
          </td>
          <td>+&quot;UNICON.UZ&quot; DUK</td>
        </tr>
        <tr>
          <td>
            131.RC4 shifrlash algoritmi simmetrik turga mansub bo&#39;lsa, unda
            nechta kalitdan foydalaniladi?
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            132.A5/1 shifrlash algoritmi simmetrik turga mansub bo&#39;lsa, unda
            nechta kalitdan foydalaniladi?
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            133.AES shifrlash algoritmi simmetrik turga mansub bo&#39;lsa, unda
            nechta kalitdan foydalaniladi?
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            134.DES shifrlash algoritmi simmetrik turga mansub bo&#39;lsa, unda
            nechta kalitdan foydalaniladi?
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            135.A5/1 oqimli shifrlash algoritmida maxfiy kalit necha registrga
            bo&#39;linadi?
          </td>
          <td>3</td>
        </tr>
        <tr>
          <td>
            136.Faqat simmetrik blokli shifrlarga xos bo&#39;lgan atamani
            aniqlang?
          </td>
          <td>+blok uzunligi</td>
        </tr>
        <tr>
          <td>137.A5/1 shifri qaysi turga mansub?</td>
          <td>+oqimli shifrlar</td>
        </tr>
        <tr>
          <td>138…..shifrlar blokli va oqimli turlarga ajratiladi</td>
          <td>+simmetrik</td>
        </tr>
        <tr>
          <td>
            139.Quyida keltirilgan xususiyatlarning qaysilari xesh funksiyaga
            mos?
          </td>
          <td>
            +ixtiyoriy olingan har xil matn uchun xesh qiymatlar bir xil
            bo&#39;lmaydi
          </td>
        </tr>
        <tr>
          <td>
            140.Quyida keltirilgan xususiyatlarning qaysilari xesh funksiyaga
            mos?
          </td>
          <td>+chiqishda fiksirlangan uzunlikdagi qiymatni beradi</td>
        </tr>
        <tr>
          <td>141.Xesh qiymatlarni yana qanday atash mumkin?</td>
          <td>+dayjest</td>
        </tr>
        <tr>
          <td>
            142.A5/1 oqimli shifrlash algoritmida dastlabki kalit uzunligi nechi
            bitga teng?
          </td>
          <td>64</td>
        </tr>
        <tr>
          <td>
            143.A5/1 oqimli shifrlash algoritmi asosan qayerda qo&#39;llaniladi?
          </td>
          <td>+mobil aloqa standarti GSM protokolida</td>
        </tr>
        <tr>
          <td>144.Assimetrik kriptotizimlarda necha kalitdan foydalaniladi?</td>
          <td>+2 ta</td>
        </tr>
        <tr>
          <td>145.Simmetrik kriptotizimlarda necha kalitdan foydalaniladi?</td>
          <td>+1 ta</td>
        </tr>
        <tr>
          <td>
            146.Kriptotizimlar kalitlar soni bo&#39;yicha qanday turga
            bo&#39;linadi?
          </td>
          <td>+simmetrik va assimetrik turlarga</td>
        </tr>
        <tr>
          <td>147.Kriptologiya qanday yo&#39;nalishlarga bo&#39;linadi?</td>
          <td>+kriptografiya va kriptotahlil</td>
        </tr>
        <tr>
          <td>
            148.Qaysi chora tadbirlar virusdan zararlanish holatini kamaytiradi?
          </td>
          <td>+Barcha javoblar to&#39;g&#39;ri</td>
        </tr>
        <tr>
          <td>
            149.Antivirus dasturiy vositalari zararli dasturlarga qarshi
            to&#39;liq himoyani ta&#39;minlay olmasligining asosiy sababini
            ko&#39;rsating?
          </td>
          <td>
            +Paydo bo&#39;layotgan zararli dasturiy vositalar sonining
            ko&#39;pligi.
          </td>
        </tr>
        <tr>
          <td>
            150…..umumiy tarmoqni ichki va tashqi qismlarga ajratib himoyalash
            imkonini beradi.
          </td>
          <td>+Tarmoqlararo ekran</td>
        </tr>
        <tr>
          <td>
            151.RSA algoritmida p=5, q=13, e=7 ga teng bo&#39;lsa, shaxsiy
            kalitni hisoblang?
          </td>
          <td>7</td>
        </tr>
        <tr>
          <td>
            152….hujumida hujumchi o&#39;rnatilgan aloqaga suqilib kiradi va
            aloqani bo&#39;ladi. Nuqtalar o&#39;rniga mos javobni qo&#39;ying.
          </td>
          <td>+O&#39;rtada turgan odam.</td>
        </tr>
        <tr>
          <td>
            153.Agar ob&#39;ektning xavfsizlik darajasi sub&#39;ektning
            xavfsizlik darajasidan kichik yoki teng bo&#39;lsa, u holda
            O&#39;qish uchun ruxsat beriladi. Ushbu qoida qaysi foydalanishni
            boshqarish usuliga tegishli.
          </td>
          <td>+MAC</td>
        </tr>
        <tr>
          <td>
            154.GSM tarmog&#39;ida ovozli so&#39;zlashuvlarni shifrlash
            algoritmi bu?
          </td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            155.RSA algoritmida ochiq kalit e=7, N=35 ga teng bo&#39;lsa, M=2 ga
            teng ochiq matnni shifrlash natijasini ko&#39;rsating?
          </td>
          <td>23</td>
        </tr>
        <tr>
          <td>
            156.RSA algoritmida ochiq kalit e=7, N=143 ga teng bo&#39;lsa, M=2
            ga teng ochiq matnni shifrlash natijasini ko&#39;rsating?
          </td>
          <td>128</td>
        </tr>
        <tr>
          <td>
            157.Jumlani to&#39;ldiring. Agar axborotning o&#39;g&#39;irlanishi
            moddiy va ma&#39;naviy boyliklarning yo&#39;qotilishiga olib kelsa.
          </td>
          <td>+jinoyat sifatida baholanadi.</td>
        </tr>
        <tr>
          <td>
            158.Jumlani to&#39;ldiring. Simli va simsiz tarmoqlar orasidagi
            asosiy farq ...
          </td>
          <td>
            +tarmoq chetki nuqtalari orasidagi mutlaqo nazoratlamaydigan xudud
            mavjudigi.
          </td>
        </tr>
        <tr>
          <td>
            159.Jumlani to&#39;ldiring. Simmetrik shifrlash algoritmlari ochiq
            ma&#39;lumotdan foydalanish tartibiga ko&#39;ra ...
          </td>
          <td>+blokli va oqimli turlarga bo&#39;linadi.</td>
        </tr>
        <tr>
          <td>
            160.Jumlani to&#39;ldiring. Tarmoqlararo ekranning vazifasi ...
          </td>
          <td>
            +ishonchli va ishonchsiz tarmoqlar orasida ma&#39;lumotlarga
            kirishni boshqarish.
          </td>
        </tr>
        <tr>
          <td>
            161.Faktorlash muammosi asosida yaratilgan assimetrik shifrlash
            usuli?
          </td>
          <td>+RSA</td>
        </tr>
        <tr>
          <td>162.Eng zaif simsiz tarmoq protokolini ko&#39;rsating?</td>
          <td>+WEP</td>
        </tr>
        <tr>
          <td>163.Axborotni shifrlashdan maqsadi nima?</td>
          <td>+Maxfiy xabar mazmunini yashirish.</td>
        </tr>
        <tr>
          <td>
            164. 9 soni bilan o&#39;zaro tub bo&#39;lgan sonlarni
            ko&#39;rsating?
          </td>
          <td>+10, 8</td>
        </tr>
        <tr>
          <td>
            165. 12 soni bilan o&#39;zaro tub bo&#39;lgan sonlarni
            ko&#39;rsating?
          </td>
          <td>+11, 13</td>
        </tr>
        <tr>
          <td>
            166. 13 soni bilan o&#39;zaro tub bo&#39;lgan sonlarni
            ko&#39;rsating?
          </td>
          <td>+5, 7</td>
        </tr>
        <tr>
          <td>
            167.Jumlani to&#39;ldiring. Autentifikatsiya tizimlari asoslanishiga
            ko&#39;ra ... turga bo&#39;linadi.
          </td>
          <td>3</td>
        </tr>
        <tr>
          <td>
            168. ….umumiy tarmoqni ichki va tashqi qismlarga ajratib himoyalash
            imkonini beradi.
          </td>
          <td>+Tarmoqlararo ekran</td>
        </tr>
        <tr>
          <td>
            169. Antivirus dasturiy vositalari zararli dasturlarga qarshi
            to&#39;liq himoyani ta&#39;minlay olmasligining asosiy sababini
            ko&#39;rsating?
          </td>
          <td>
            +Paydo bo&#39;layotgan zararli dasturiy vositalar sonining
            ko&#39;pligi.
          </td>
        </tr>
        <tr>
          <td>
            170.Qaysi chora tadbirlar virusdan zararlanish holatini kamaytiradi?
          </td>
          <td>+Barcha javoblar to&#39;g&#39;ri</td>
        </tr>
        <tr>
          <td>
            171.Virus aniq bo&#39;lganda va xususiyatlari aniq ajratilgan
            holatda eng katta samaradorlikka ega zararli dasturni aniqlash
            usulini ko&#39;rsating?
          </td>
          <td>+Signaturaga asoslangan usul</td>
        </tr>
        <tr>
          <td>172.Signatura (antiviruslarga aloqador bo&#39;lgan) bu-?</td>
          <td>+Fayldan topilgan bitlar qatori.</td>
        </tr>
        <tr>
          <td>
            173.Zararli dasturiy vositalarga qarshi foydalaniluvchi dasturiy
            vosita bu?
          </td>
          <td>+Antivirus</td>
        </tr>
        <tr>
          <td>
            174.Kompyuter viruslarini tarqalish usullarini ko&#39;rsating?
          </td>
          <td>
            +Ma&#39;lumot saqlovchilari, Internetdan yuklab olish va elektron
            pochta orqali.
          </td>
        </tr>
        <tr>
          <td>
            175.Qurbon kompyuteridagi ma&#39;lumotni shifrlab, uni deshifrlash
            uchun to&#39;lovni amalga oshirishni talab qiluvchi zararli dastur
            bu-?
          </td>
          <td>+Ransomware.</td>
        </tr>
        <tr>
          <td>
            176.Internet tarmog&#39;idagi obro&#39;sizlantirilgan kompyuterlar
            bu-?
          </td>
          <td>+Botnet.</td>
        </tr>
        <tr>
          <td>
            178.Biror mantiqiy shartni tekshiruvchi trigger va foydali
            yuklamadan iborat zararli dastur turi bu-?
          </td>
          <td>+Mantiqiy bombalar.</td>
        </tr>
        <tr>
          <td>
            179.Buzg&#39;unchiga xavfsizlik tizimini aylanib o&#39;tib tizimga
            kirish imkonini beruvchi zararli dastur turi bu-?
          </td>
          <td>+Backdoors.</td>
        </tr>
        <tr>
          <td>
            180.Ma&#39;lumotni to&#39;liq qayta tiklash qachon samarali amalga
            oshiriladi?
          </td>
          <td>+Saqlagichda ma&#39;lumot qayta yozilmagan bo&#39;lsa.</td>
        </tr>
        <tr>
          <td>
            181.Ma&#39;lumotni zaxira nusxalash nima uchun potensial tahdidlarni
            paydo bo&#39;lish ehtimolini oshiradi.
          </td>
          <td>+Tahdidchi uchun nishon ko&#39;payadi.</td>
        </tr>
        <tr>
          <td>182.Qaysi xususiyatlar RAID texnologiyasiga xos emas?</td>
          <td>+Shaxsiy kompyuterda foydalanish mumkin.</td>
        </tr>
        <tr>
          <td>
            183.Qaysi zaxira nusxalash vositasi oddiy kompyuterlarda foydalanish
            uchun qo&#39;shimcha apparat va dasturiy vositani talab qiladi?
          </td>
          <td>+Lentali disklar.</td>
        </tr>
        <tr>
          <td>
            184.Ma&#39;lumotlarni zaxira nusxalash strategiyasi nimadan
            boshlanadi?
          </td>
          <td>+Zarur axborotni tanlashdan.</td>
        </tr>
        <tr>
          <td>
            185.Jumlani to&#39;ldiring. .... - muhim bo&#39;lgan axborot
            nusxalash yoki saqlash jarayoni bo&#39;lib, bu ma&#39;lumot
            yo&#39;qolgan vaqtda qayta tiklash imkoniyatini beradi.
          </td>
          <td>+Ma&#39;lumotlarni zaxira nusxalash</td>
        </tr>
        <tr>
          <td>
            186.Paket filteri turidagi tarmoqlararo ekran vositasi nima asosida
            tekshirishni amalga oshiradi?
          </td>
          <td>+Tarmoq sathi parametrlari asosida.</td>
        </tr>
        <tr>
          <td>
            187.Jumlani to&#39;ldiring. ... texnologiyasi lokal simsiz
            tarmoqlarga tegishli.
          </td>
          <td>+WI-FI</td>
        </tr>
        <tr>
          <td>
            188.Jumlani to&#39;ldiring. Kriptografik himoya axborotning ...
            xususiyatini ta&#39;minlamaydi.
          </td>
          <td>+Foydalanuvchanlik</td>
        </tr>
        <tr>
          <td>189.Jumlani to&#39;ldiring. Parol kalitdan .... farq qiladi.</td>
          <td>+tasodifiylik darajasi bilan</td>
        </tr>
        <tr>
          <td>190.Parolga &quot;tuz&quot;ni qo&#39;shib xeshlashdan maqsad?</td>
          <td>+Tahdidchi ishini oshirish.</td>
        </tr>
        <tr>
          <td>
            191.Axborotni foydalanuvchanligini buzishga qaratilgan tahdidlar bu?
          </td>
          <td>+DDOS tahdidlar.</td>
        </tr>
        <tr>
          <td>192.Tasodifiy tahdidlarni ko&#39;rsating?</td>
          <td>+Texnik vositalarning buzilishi va ishlamasligi.</td>
        </tr>
        <tr>
          <td>
            193.Xodimlarga faqat ruxsat etilgan saytlardan foydalanishga imkon
            beruvchi himoya vositasi bu?
          </td>
          <td>+Tarmoqlararo ekran.</td>
        </tr>
        <tr>
          <td>
            194.Qaysi himoya vositasi yetkazilgan axborotning butunligini
            tekshiradi?
          </td>
          <td>+Virtual Private Network.</td>
        </tr>
        <tr>
          <td>
            195.Qaysi himoya vositasi tomonlarni autentifikatsiyalash
            imkoniyatini beradi?
          </td>
          <td>+Virtual Private Network.</td>
        </tr>
        <tr>
          <td>
            196.Foydalanuvchi tomonidan kiritilgan taqiqlangan so&#39;rovni
            qaysi himoya vositasi yordamida nazoratlash mumkin.
          </td>
          <td>+Tarmoqlararo ekran.</td>
        </tr>
        <tr>
          <td>
            197.Qaysi himoya vositasi mavjud IP - paketni to&#39;liq shifrlab,
            unga yangi IP sarlavha beradi?
          </td>
          <td>+Virtual Private Network.</td>
        </tr>
        <tr>
          <td>
            198,Ochiq tarmoq yordamida himoyalangan tarmoqni qurish imkoniyatiga
            ega himoya vositasi bu?
          </td>
          <td>+Virtual Private Network.</td>
        </tr>
        <tr>
          <td>
            199.Qaysi himoya vositasida mavjud paket shifrlangan holda yangi
            hosil qilingan mantiqiy paket ichiga kiritiladi?
          </td>
          <td>+Virtual Private Network.</td>
        </tr>
        <tr>
          <td>
            200.Qaysi himoya vositasi tarmoqda uzatilayotgan axborotni
            butunligi, maxfiyligi va tomonlar autentifikatsiyasini
            ta&#39;minlaydi?
          </td>
          <td>+Virtual Private Network.</td>
        </tr>
        <tr>
          <td>
            201.Qaysi tarmoq himoya vositasi tarmoq manzili, identifikatorlar,
            interfeys manzili, port nomeri va boshqa parametrlar yordamida
            filtrlashni amalga oshiradi.
          </td>
          <td>+Tarmoqlararo ekran.</td>
        </tr>
      </table>
      {/* <table
        border="1"
        style={{
          width: "100%",
          margin: "10px auto",
        }}
      >
        <tr>
          <td>1</td>
          <td>
            Zaruriyat va tasodif kategoriyasining mazmun va mohiyati nimadan
            iborat?
          </td>
          <td>javob yoq</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Zardo&#39;shtiylik ta&#39;limoti qachon va qaerda paydo bo&#39;lgan?
          </td>
          <td>Xorazmda 6-4 asr</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Vaqtga berilgan to&#39;gri ta&#39;rifni toping?</td>
          <td>Narsalarning ketma-ketligi va davomiyligi</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            Ushbu fikr muallifini toping: -Odamlar o&#39;zlarining xos
            xususiyatlariga va tabiiy ehtiyojlariga ko&#39;ra jamiyat tuzadilar.
            Ularning harakat va fe&#39;llarini dastavval bora-bora odatlarga
            aylanadigan tabiiy qobiliyatlar belgilaydi.
          </td>
          <td>Farobiy</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Tasavvuf tariqati bosqichlarini to’g’ri aniqlang.</td>
          <td>4 ta bosqich (ma&#39;rifat, shariat, tariqat, haqiqat)</td>
        </tr>
        <tr>
          <td>6</td>
          <td>So’fizm – tasavvuf falsafasining asosiy mohiyati nimada?</td>
          <td>tarki dunyochilik</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Quyidagilarning qaysi biri dinning funksiyasi emas?</td>
          <td>
            regulyator, kompensatorlik, integratsiya, dunyoqarash, ligitm,
            madaniy bog&#39;, kommunikativ
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            Quyidagilardan qaysi javob dunyoqarashning tarixiy tiplari
            hisoblanadi?
          </td>
          <td>mifologik va diniy</td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            Quyidagilardan qaysi biri dialektik bilimlar sohasiga tegishli?
          </td>
          <td>Dialetika - baxs</td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            Qaysi javobda Olamni fan va aqlga asoslangan xolda tushuntiruvchi
            dunyoqarash turi to’g’ri ko’rsatilgan?
          </td>
          <td>Ilmiy, falsafiy</td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            Qadimgi Hitoy falsafasidagi asosiy yo&#39;nalishlarni aniqlang?
          </td>
          <td>2 ta yo&#39;nalish: daosizm, komfutsizm</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Qadimgi Hindistondagi maktablarni aniqlab bering?</td>
          <td>2 ta maktab: astika va nastika</td>
        </tr>
        <tr>
          <td>13</td>
          <td>
            Qadimgi hind falsafiy maktablarining ikki guruhi qaysi javobda
            to‘g‘ri ko‘rsatilgan?
          </td>
          <td>astika va nastika</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Qadimgi hind falsafasining asosiy yodgorliklari?</td>
          <td>vedalar, upanishada</td>
        </tr>
        <tr>
          <td>15</td>
          <td>
            Qadimgi Grek faylasuflari Fales, Anaksimandr va Anaksimenlar
            ta&#39;limotlarida borliq qanday hisoblangan?
          </td>
          <td>moddiy</td>
        </tr>
        <tr>
          <td>16</td>
          <td>Qadimgi falsafaning eng rivojlangan joyi qayerda?</td>
          <td>Hindiston, Xitoy</td>
        </tr>
        <tr>
          <td>17</td>
          <td>
            Ob’yektiv dunyoga va insonning undagi o‘rniga, odamzotning o‘zini
            qurshagan borliqqa va o‘z-o‘ziga bo‘lgan munosabatiga nisbatan
            yondashuvlar tizimi, bu ...
          </td>
          <td>Dunyoqarash</td>
        </tr>
        <tr>
          <td>18</td>
          <td>O’tmish Sharq faylasuflari ijodidagi bosh g’oya?</td>
          <td>Xudo</td>
        </tr>
        <tr>
          <td>19</td>
          <td>
            O’rta Osiyoda “Sharq uyg’onishi” davri (IX-XII asrlar) yirik
            namoyondalarini aniqlang.
          </td>
          <td>Farobiy</td>
        </tr>
        <tr>
          <td>20</td>
          <td>O’rta asr falsafasi negizida nima yotadi</td>
          <td>Din</td>
        </tr>
        <tr>
          <td>21</td>
          <td>Nisbiy haqiqat deb qanday haqiqatga aytiladi?</td>
          <td>O&#39;tkinchi narsalar</td>
        </tr>
        <tr>
          <td>22</td>
          <td>Nemis faylasufi Hegel falsafasini mohiyatini aniqlang?</td>
          <td>G&#39;oya mutlog&#39; g&#39;oya</td>
        </tr>
        <tr>
          <td>23</td>
          <td>
            Nemis falsafasining asoschilaridan biri Immanuil Kant falsafasining
            mohiyatini aniqlang?
          </td>
          <td>Narsa o&#39;zidan</td>
        </tr>
        <tr>
          <td>24</td>
          <td>
            Milet maktabining qaysi namoyondasi olamning asosiga suvni qo‘ygan?
          </td>
          <td>Fales</td>
        </tr>
        <tr>
          <td>25</td>
          <td>Milet maktab asoschisi kim?</td>
          <td>Fales</td>
        </tr>
        <tr>
          <td>26</td>
          <td>Mifologiyada dastlab qanday masalalar qo‘yilgan?</td>
          <td>Dunyo qanday yaraldi, dunyo kim tomonidan yaratildi</td>
        </tr>
        <tr>
          <td>27</td>
          <td>Miflar nimalar orqali ifodalanadi?</td>
          <td>Afsonolar, rivoyatlar</td>
        </tr>
        <tr>
          <td>28</td>
          <td>Mif atamasi qanday ma’nolarni anglatadi?</td>
          <td>Afsona, asotir</td>
        </tr>
        <tr>
          <td>29</td>
          <td>Metodologiya nima?</td>
          <td>yo&#39;l, usul, uslub haqidagi ta&#39;limot</td>
        </tr>
        <tr>
          <td>30</td>
          <td>
            Materiyaning tuzilishi qaysi javobda to&#39;g&#39;ri
            ko&#39;rsatilgan?
          </td>
          <td>2 ta: modda, maydon</td>
        </tr>
        <tr>
          <td>31</td>
          <td>Materiya harakatining formalarini aniqlang?</td>
          <td>2 ta: progres, regress</td>
        </tr>
        <tr>
          <td>32</td>
          <td>Materialistlar deb qaysi toifadagi kishilarni aytish mumkin?</td>
          <td>Dunyoning asosiga moddy narsalarni quyish</td>
        </tr>
        <tr>
          <td>33</td>
          <td>Materialistlar deb qaysi toifadagi kishilarni aytish mumkin?</td>
          <td>Dunyoning asosiga moddy narsalarni quyish</td>
        </tr>
        <tr>
          <td>34</td>
          <td>
            Koinot atomlardan tashkil topgan degan g’oyani olg’a surganlar?
          </td>
          <td>Demokrit</td>
        </tr>
        <tr>
          <td>35</td>
          <td>Klassik mexanikaning qonunlarini qaysi olim ta’riflagan?</td>
          <td>Nyuton, Arastu</td>
        </tr>
        <tr>
          <td>36</td>
          <td>
            Ingliz faylasufi J.Berkli falsafa yo&#39;nalishining qaysi oqimini
            rivojlantirgan?
          </td>
          <td>Imperizm</td>
        </tr>
        <tr>
          <td>37</td>
          <td>
            Ingliz faylasufi D.Yum falsafa yo&#39;nalishining qaysi oqimini
            rivojlantirgan?
          </td>
          <td>Imperizm, Agnostitsizm</td>
        </tr>
        <tr>
          <td>38</td>
          <td>Ilmiy bilishning shakllarini ajrating?</td>
          <td>Dalillar, kashfiyotlar, nazariya, manbalar</td>
        </tr>
        <tr>
          <td>39</td>
          <td>Hissiy bilish shakllari (bosqichlari) qaysilar?</td>
          <td>Sezgi, tasavvur va hotira</td>
        </tr>
        <tr>
          <td>40</td>
          <td>
            Hindiston falsafasining kurtaklari qaysi davrga kelib paydo bo’ldi?
          </td>
          <td>Mil/av. 2- ming yillik ohiri 1-ming yillik boshi</td>
        </tr>
        <tr>
          <td>41</td>
          <td>
            Grek faylasufi Demokritning fikricha dunyoning asosi qanday
            zarrachalardan tashkil topgan?
          </td>
          <td>Mayda zarralar atomlardan</td>
        </tr>
        <tr>
          <td>42</td>
          <td>Gnoseologiya qanday ta’limot</td>
          <td>Bilish nazariyasi</td>
        </tr>
        <tr>
          <td>43</td>
          <td>Gnoseologik optimizm ta’limoti qanday qarashni ilgari suradi?</td>
          <td>(Optimistik) Dunyo yaxshilikdan iborat</td>
        </tr>
        <tr>
          <td>44</td>
          <td>Fetishizm bu?</td>
          <td>Narsa-buyum va toshlarga sig&#39;inish</td>
        </tr>
        <tr>
          <td>45</td>
          <td>Faqat insonga xos xususiyatni aniqlang?</td>
          <td>Tafakkur qilish</td>
        </tr>
        <tr>
          <td>46</td>
          <td>
            Falsafiy tafakkurning eng qadimiy-ma&#39;naviy negizlari qaysi
            mamlakatlarda keng yoyilgan edi?
          </td>
          <td>Xitor, Hindiston, Bobil, Misr</td>
        </tr>
        <tr>
          <td>47</td>
          <td>
            Falsafiy qarashlar tarixida monizm qanday ta’limot hisoblanadi?
          </td>
          <td>1 yoqlamalik</td>
        </tr>
        <tr>
          <td>48</td>
          <td>
            Falsafiy qarashlar tarixida dualizm qanday ta’limot hisoblanadi?
          </td>
          <td>2 yoqlamalik</td>
        </tr>
        <tr>
          <td>49</td>
          <td>
            Falsafiy dunyoqarash dunyoni nimalarga tayangan holda tushuntiradi?
          </td>
          <td>Fan va aqlga</td>
        </tr>
        <tr>
          <td>50</td>
          <td>
            Falsafiy bilimning muhim tarkibiy qismlari to‘g‘ri ko‘rsatilgan
            javobni belgilang?
          </td>
          <td>
            Antalogiya, Nasalogiya, falsafiy antropologiya, metapologiya, etika,
            estetika, aksalogiya
          </td>
        </tr>
        <tr>
          <td>51</td>
          <td>
            Falsafaning tarkibiy qismi hisoblanuvchi ontologiya qanday ta’limot?
          </td>
          <td>Borliq va rivojlanish haqida ta&#39;limot</td>
        </tr>
        <tr>
          <td>52</td>
          <td>
            Falsafaning qaysi funksiyasida “Haqiqat nima? Uning me’zonlari
            qanday?” degan savollar beriladi?.
          </td>
          <td>Nasalogik</td>
        </tr>
        <tr>
          <td>53</td>
          <td>Falsafaning predmeti bu?</td>
          <td>Borliq </td>
        </tr>
        <tr>
          <td>54</td>
          <td>Falsafaning bilish nazariyasi bilan bog’liq atamani toping.</td>
          <td>Neprizm, Optimalizm….....</td>
        </tr>
        <tr>
          <td>55</td>
          <td>Falsafaning asosiy vazifalari?</td>
          <td>
            Dunyoqarashlilik, Nosalogik, Metadalogik, tarbiyaviylik, prosalogik
          </td>
        </tr>
        <tr>
          <td>56</td>
          <td>Falsafada nima birinchi o‘rinda turadi?</td>
          <td>Dunyoqarash (baxs-munozara)</td>
        </tr>
        <tr>
          <td>57</td>
          <td>Falsafa qanday ma’noni anglatadi?</td>
          <td>Donishmandlikni sevmoq</td>
        </tr>
        <tr>
          <td>58</td>
          <td>Falsafa bo&#39;limlari nomini aniqlang?</td>
          <td>8 ta bo&#39;lim (50 javob) + paksalogiya</td>
        </tr>
        <tr>
          <td>59</td>
          <td>
            Falsafa atamasini ilk bor ilmiy termin sifatida kiritgan olim?
          </td>
          <td>Pifagor</td>
        </tr>
        <tr>
          <td>60</td>
          <td>Falsafa nimadan bahs yuritadi?</td>
          <td>Inson, tabiat, jamiyat va borliq</td>
        </tr>
        <tr>
          <td>61</td>
          <td>Eng umumiy qonunlar deganda qanday qonunlarni tushunamiz?</td>
          <td>Gravitasion</td>
        </tr>
        <tr>
          <td>62</td>
          <td>Dunyoqarashning turlarini aniqlang?</td>
          <td>Mifologik, Diniy va Falsafiy</td>
        </tr>
        <tr>
          <td>63</td>
          <td>Dunyoqarashning qadimgi turlari qaysi?</td>
          <td>Mifalogik, Diniy</td>
        </tr>
        <tr>
          <td>64</td>
          <td>Dunyoni idrok etish bu?</td>
          <td>Borliqning ongimizda aks etishi</td>
        </tr>
        <tr>
          <td>65</td>
          <td>Dunyoni bilishdan maqsad nima?</td>
          <td>javob yoq</td>
        </tr>
        <tr>
          <td>66</td>
          <td>Dualizm tushunchasining ma&#39;nosi?</td>
          <td>ikkiyoqlamali talimot</td>
        </tr>
        <tr>
          <td>67</td>
          <td>Borliqning mohiyati bo&#39;lmish substansiya nima?</td>
          <td>Boshlang&#39;ich birinchi asos</td>
        </tr>
        <tr>
          <td>68</td>
          <td>Borliqning falsafiy mazmuni nimada?</td>
          <td>Rivojlanish, qarama-qarshilik doimiy o&#39;zgarishlar</td>
        </tr>
        <tr>
          <td>69</td>
          <td>Borliqning atributlarini aniqlang?</td>
          <td>Harakat, fazo, vaqt, makon, zamon, ong, in ikos</td>
        </tr>
        <tr>
          <td>70</td>
          <td>Bilish deganda nimani tushuniladi?</td>
          <td>Borliqning sezgilar va tafakkur orqali qabul qilinishi</td>
        </tr>
        <tr>
          <td>71</td>
          <td>Antropologiya qanday ta’limot</td>
          <td>Inson tuzilishini o&#39;rganadi</td>
        </tr>
        <tr>
          <td>72</td>
          <td>Antik falsafaning asosiy savoli?</td>
          <td>Dunyo qanday yaraldi?</td>
        </tr>
        <tr>
          <td>73</td>
          <td>Antik falsafaning asosiy mohiyati nima?</td>
          <td>Borliq nimadan iborat</td>
        </tr>
        <tr>
          <td>74</td>
          <td>Anaksimen olam asosiga nimni qo‘ygan?</td>
          <td>Havo</td>
        </tr>
        <tr>
          <td>75</td>
          <td>Aksiologiya qanday ta’limot?</td>
          <td>Qadriyatlar haqidagi talimot</td>
        </tr>
        <tr>
          <td>76</td>
          <td>Afsonaviy dunyoqarash deganda nimani tushunamiz?</td>
          <td>Mifalogik dunyo-afsona va rivoyatga tayanadi</td>
        </tr>
        <tr>
          <td>77</td>
          <td>
            «Falsafa» so‘zining lug‘aviy ma’nosi to‘g‘ri ko‘rsatilgan javobni
            belgilang?
          </td>
          <td>Donishmandlikni sevmoq</td>
        </tr>
        <tr>
          <td>78</td>
          <td>“Taraqqiyot” nima?</td>
          <td>Rivojlanish - O&#39;zgarish (oddiydan murakkabgacha)</td>
        </tr>
        <tr>
          <td>79</td>
          <td>“Substantsiya” nima?</td>
          <td>Birlamchi asos</td>
        </tr>
        <tr>
          <td>80</td>
          <td>“Sifat” tushunchasi nima?</td>
          <td>Narsa va hodisalarni hususiyatini aniqlaydi</td>
        </tr>
        <tr>
          <td>81</td>
          <td>“Qonun” nima?</td>
          <td>Narsa va hodisalar o&#39;rtasidagi munosabatni belgilaydi</td>
        </tr>
        <tr>
          <td>82</td>
          <td>“Ong” nima?</td>
          <td>Inson tafakkurining oliy maxsuli</td>
        </tr>
        <tr>
          <td>83</td>
          <td>“Narsa o’zida” degan fikrni aytgan faylasuf kim?</td>
          <td>i. kant</td>
        </tr>
        <tr>
          <td>84</td>
          <td>“Kategoriya” nima?</td>
          <td>Tamoyil</td>
        </tr>
        <tr>
          <td>85</td>
          <td>“Jamiyat”tushunchasiga falsafiy ta’rif bering.</td>
          <td>
            Arabcha so&#39;z bo&#39;lib birlashish umumiylik. Insonlarni
            birgalikda manfaat yuritishi
          </td>
        </tr>
        <tr>
          <td>86</td>
          <td>“In’ikos” nima?</td>
          <td>Aks etish: axborot va energiya almashish</td>
        </tr>
        <tr>
          <td>87</td>
          <td>“Ijtimoiy harakat” nima?</td>
          <td>Insonlarning birgalikdagi harakati</td>
        </tr>
        <tr>
          <td>88</td>
          <td>“Hayot” deganda Siz nimani tushunasiz?</td>
          <td>-</td>
        </tr>
        <tr>
          <td>89</td>
          <td>“Haqiqat”ning turlarini aniqlang.</td>
          <td>Nisbiy, obyektiv va mutloq</td>
        </tr>
        <tr>
          <td>90</td>
          <td>“Haqiqat”ni siz qanday tushunasiz?</td>
          <td>-</td>
        </tr>
        <tr>
          <td>91</td>
          <td>“Fazo (makon)” nima?</td>
          <td>
            Fazo-narsalarning joylashishi, tartibi, hajmi, uzlukli va
            usluksizligi
          </td>
        </tr>
        <tr>
          <td>92</td>
          <td>
            “Ezgu fikr, ezgu so‘z, ezgu amal” g‘oyasi kim tomonidan ilgari
            surilgan?
          </td>
          <td>Zardusht</td>
        </tr>
        <tr>
          <td>93</td>
          <td>“Dunyoqarash” nima?</td>
          <td>
            Insonning o&#39;z-o&#39;ziga va borliqga bo&#39;lgan munosabati
          </td>
        </tr>
        <tr>
          <td>94</td>
          <td>“Davlat” asarini muallifi kim?</td>
          <td>Aflotun</td>
        </tr>
        <tr>
          <td>95</td>
          <td>
            “Ayni bir daryoga ikki marta tushishi mumkin emas, ikkinchi marta
            tushayotgan odamga yangi suvlar oqadi” degan fikr qaysi faylasufga
            tegishli?
          </td>
          <td>Geraklit</td>
        </tr>
        <tr>
          <td>96</td>
          <td>“Amaliyot” (“praktika”) tushunchasini ta’riflang.</td>
          <td>Faoliyat: harakatlar majmui</td>
        </tr>
        <tr>
          <td>97</td>
          <td>
            &quot;Umumiy nisbiylik nazariyasi” ta’limotining asoschisi kim?
          </td>
          <td>Arastu, Enshteyn</td>
        </tr>
        <tr>
          <td>98</td>
          <td>
            &quot;Substantsiya&quot; tushunchasining talqiniga daxldor quyidagi
            javoblardan biri noto&#39;g&#39;ri. Uni toping
          </td>
          <td>To&#39;g&#39;risi birinchi boshlang&#39;ich asos</td>
        </tr>
        <tr>
          <td>99</td>
          <td>
            &quot;Substantsiya&quot; so&#39;zining ma&#39;nosini aniqlang?
          </td>
          <td>Birinchi boshlang&#39;ich asos</td>
        </tr>
        <tr>
          <td>100</td>
          <td>Dunyoni sezish bu?</td>
          <td>Borliqni sezgilar asosida qabul qilishimiz</td>
        </tr>
      </table> */}
    </div>
  );
};

export default TestResponse;
