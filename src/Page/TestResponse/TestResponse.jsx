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
        Tafu Uchun maxsuz. Nutq ma'daniyati
      </h1>
      <table border="1">
        <tr>
          <th>SavolLar</th>
          <th>Javoblar</th>
        </tr>
        <tr>
          <td>
            Nutq madaniyati haqidagi ta'limot qaysi qadimiy davlatda
            shakllangan.
          </td>
          <td>Rim</td>
        </tr>
        <tr>
          <td>
            Notiqlikning san'at darajasiga ko'tarilishida qaysi sohalarning
            alohida o'rni bo'lgan.{" "}
          </td>
          <td>Savdo-sotiq va sud ishlari</td>
        </tr>
        <tr>
          <td>
            "Tarixda yo yaxshi harbiy sarkarda, yo yaxshi notiq bo'lish
            kerak"-degan fikr qaysi mashhur notiqga tegishli.
          </td>
          <td>Sitsiron</td>
        </tr>
        <tr>
          <td>Arastotelni Notiqlik san'ati haqida qanday asari mavjud.</td>
          <td>Ritorika</td>
        </tr>
        <tr>
          <td>
            "Brut" notiqlik san'ati haqidagi mashhur asar qaysi mashhur
            notiqniki.
          </td>
          <td>Setseron</td>
        </tr>
        <tr>
          <td>
            O'rta Osiyo madaniyatI tarixida, nutq madaniyatiga munosib hissa qo
            'shgan siymolarimizni belgilang.
          </td>
          <td>Beruniy,Koshg'ariy, Y.Xos Hojib</td>
        </tr>
        <tr>
          <td>Qobusnoma kimning asari </td>
          <td>Kaykovus</td>
        </tr>
        <tr>
          <td>
            Nutq madaniyati va notiqlik san'ati fanini o'rganish obekti nima?
          </td>
          <td>Til (adabiy til me'yorlari)</td>
        </tr>
        <tr>
          <td>Nutqning nechA xil shakli mavjud.</td>
          <td>2xil</td>
        </tr>
        <tr>
          <td>
            Ikki va undan ortiq kishilarning muloqat jarayoni nima deyiladi.
          </td>
          <td>Diolog</td>
        </tr>
        <tr>
          <td>O 'rta Osiyoda notiqlarni kim deb atashgan.</td>
          <td>Nadimlar, qiroatxonlar</td>
        </tr>
        <tr>
          <td>Til me'yorlarini buzuvchi omillar.</td>
          <td>Begona tillardan kirib kelgan so'zlar</td>
        </tr>
        <tr>
          <td>Nutq madaniyati sohasi ………sohalar bilan aloqador.</td>
          <td>Poetika, estetika, mantiq</td>
        </tr>
        <tr>
          <td>
            O'zbek tiliga davlat tili maqomaning berilishi qaysi yil bilan
            bog'liq.
          </td>
          <td>1989-21 oktyabr</td>
        </tr>
        <tr>
          <td>
            Nutq madaniyati haqidagi dastlabki ta'limot qaysi davlatlarda
            shakllangan.
          </td>
          <td>Misr, Assuriya, Hindiston</td>
        </tr>
        <tr>
          <td>
            ….. arabcha so 'zdan olingan bo'lib, ta'lim, tarbiyalilik va
            ziyolilik ma'nolarini anglatadi.{" "}
          </td>
          <td>Madaniyat</td>
        </tr>
        <tr>
          <td>Insonning nutq faoliyatidagi ko'rinishlari qaysi?</td>
          <td>So'zlash, mutolaa qilish va eshitish.</td>
        </tr>
        <tr>
          <td>
            Muayyan umumxalq tilining qayta ishlangan va me'yorlashtirilgan,
            mazkur tilda so'zlashuvchi xalqning batcha vakili uchun tushunarli
            madaniy ehtiyojiga xizmat qiladigan til qanday til deyiladi?
          </td>
          <td>Adabiy til</td>
        </tr>
        <tr>
          <td>`Til qanday hodisa?</td>
          <td>Ijtimoiy hodisa</td>
        </tr>
        <tr>
          <td>Nutqning eng muhim aloqaviy fazilati nima?</td>
          <td>Nutqning to'g'riligi</td>
        </tr>
        <tr>
          <td>
            Nutq to 'g 'ri bo 'lishi uchun qanday me'yorlarga amal qilish kerak
          </td>
          <td>Urg'u va grammatika</td>
        </tr>
        <tr>
          <td>Urg' u nechi turga bo'linadi ?</td>
          <td>2turga </td>
        </tr>
        <tr>
          <td>Urg'u nimaga xizmat qiladi?</td>
          <td>Ma'no farqlashga</td>
        </tr>
        <tr>
          <td>
            So'zning o'zi ifodalayotgan voqeylikka mutlaqo mos va muofiq
            kelishiga nima deyiladi?{" "}
          </td>
          <td>Nutqning aniqligi</td>
        </tr>
        <tr>
          <td>Nutqning sofliliga putur yetkazadigan omillar</td>
          <td>Jargonlar, shevaga oid so'zlar, takrorlar</td>
        </tr>
        <tr>
          <td>
            Nutqda o'rinsiz ishlatilgan boshqa tillarga oid so'zlar……. Deyiladi.
          </td>
          <td>Varvarizmlar</td>
        </tr>
        <tr>
          <td>Uxlab yotibsanmi xunasa. Gapda qanday so'z qo'llangan?</td>
          <td>Vulgarizmlar</td>
        </tr>
        <tr>
          <td>
            Ish qog'ozlari uchun zarur bo'lgan ma'lum bir shaklda saqlanadigan
            so'z birikmalariga………deyiladi.
          </td>
          <td>Kanselyarizmlar</td>
        </tr>
        <tr>
          <td>
            Yaxlit bir sistema asosida tuzilgan, fikrlar rivoji izchil bo'lgan,
            har bir so'z aniq maqsadga yo'naltirilgan nutq….deyiladi
          </td>
          <td>Nutqning mantiqiyligi </td>
        </tr>
        <tr>
          <td>
            Ma'lumotni birovga yetkazish va bir shaxsning muloqat jarayoni nima
            deyiladi?
          </td>
          <td>Monolog</td>
        </tr>
        <tr>
          <td>Ma'ndosh so'zlar nima deyiladi?</td>
          <td>Sinonimlar.</td>
        </tr>
        <tr>
          <td>Intonatsiya nima?</td>
          <td>Nutqning ta'sirchan va ifodaliyligi</td>
        </tr>
        <tr>
          <td>
            Kasbiy ma'no bildiruvchi va ifodalovchi so'zlar qanday so'zlar
            deyiladi?
          </td>
          <td>Terminlar</td>
        </tr>
        <tr>
          <td>
            Kridet, audet, hisobot . Keltirilgan so'zlar qanday so'zlar
            deyil;adi?
          </td>
          <td>Termin</td>
        </tr>
        <tr>
          <td>Notiqlikning necha xil ko'rinishlari mavjud?</td>
          <td>5ta</td>
        </tr>
        <tr>
          <td>Siyosiy-ijtimoiy nutq turlari.</td>
          <td>Diplomatik nutq, Miting nutqi, Ilmiy-ommabop nutq</td>
        </tr>
        <tr>
          <td>Diniy nutq.</td>
          <td>Xutba, Va'z</td>
        </tr>
        <tr>
          <td>Akademik notiqlik </td>
          <td>O'quv yurtlari ma'ruzalari, Ilmiy axborot</td>
        </tr>
        <tr>
          <td>Ijtimoiy-maishiy notiqlik </td>
          <td>Ta'ziya (nutqi), Tabrik nutqi.</td>
        </tr>
        <tr>
          <td>
            Sud jarayonida boshqa birov manfaatini ko'zlab nutq so'zlovchiga
            ………….. Deyiladi
          </td>
          <td>Sinegorlar</td>
        </tr>
        <tr>
          <td>
            Nutq matnlarini tuzib, yozib, tayyorlab beradigan vakillarf nima
            deyiladi?
          </td>
          <td>Logograflar</td>
        </tr>
        <tr>
          <td>Yunon notiqlari vakillari kimlar?</td>
          <td>Perikl, Lisiy, Aristotel</td>
        </tr>
        <tr>
          <td>Quyidagi so‘zlarning qaysi biri antonimlar qatoriga kirmaydi?</td>
          <td>chiroyli - badbasharalik</td>
        </tr>
        <tr>
          <td>
            Eramizdan avvalgi V VI asrda yashab o'tgan taniqli sud olimi kim?
          </td>
          <td>belgi</td>
        </tr>
        <tr>
          <td>Kontekstual sinonimlar deb qanday sinonimlarga aytiladi?</td>
          <td>Lisiy</td>
        </tr>
        <tr>
          <td>Demosfen nechinchi yillarda yashagan?</td>
          <td>Eramizgacha 384-322 -yillar.</td>
        </tr>
        <tr>
          <td>Aristotel Retorika asarini qachon yozadi?</td>
          <td>Eramizdan avvalgi 335-yillar</td>
        </tr>
        <tr>
          <td>
            Leksikologiyaning nutqni obrazli ifodalashga xizmat qiluvchi
            bo‘limi?
          </td>
          <td>frazeologiya</td>
        </tr>
        <tr>
          <td>Ritorika asari nechi qismdan iborat</td>
          <td>3 qism</td>
        </tr>
        <tr>
          <td>
            "Notiqlik haqida" , "Notiq, ", "Brut" notiqlik san'ati tarixidagi
            mashhur asarlarni muallifi kim?
          </td>
          <td>Sitsiron</td>
        </tr>
        <tr>
          <td>Rimdagi notiqlik maktabining asoschisi kim? </td>
          <td>Kvintalyon</td>
        </tr>
        <tr>
          <td>Notiqlar deb kimlarga aytiladi?</td>
          <td>
            So'zining to'g'ri va aniqligi bilan boshqalarga ta'sir qilish
            doirasi keng bo'lgan so'z ustalariga
          </td>
        </tr>
        <tr>
          <td>Voizlar kimlar?</td>
          <td>Fikri tiniq, nasihatgo'y halol va shirali ovoz sohibi</td>
        </tr>
        <tr>
          <td>So‘zning ko‘chma ma’nosi deyilganda nima nazarda tutiladi?</td>
          <td>
            nutq tarkibidagi boshqa so‘zlar yordamida anglashiladigan ma’nosi
          </td>
        </tr>
        <tr>
          <td>
            Odam – kishi– inson – bashar; ko‘krak – ko‘ks – bag‘ir – to‘sh –
            siyna sinonimik qatorlardagi poetik (badiiy) uslubga xos leksemalar
            berilgan qatorni toping.
          </td>
          <td>bashar, siyna </td>
        </tr>
        <tr>
          <td>Notiq so'zi qaysi tildan olingan?</td>
          <td>Arab tilidan</td>
        </tr>
        <tr>
          <td>
            Ular shahardagi eshigida yashashgan. Bu gapda ma'no ko'chishining
            qaysi turi ishlatilgan.
          </td>
          <td>Sinekdoxa</td>
        </tr>
        <tr>
          <td>
            Geradot tarixini takror vatakror o'qib chiqdim. Ma'no ko'chishining
            qaysi biri qo'llangan?
          </td>
          <td>Metonimya</td>
        </tr>
        <tr>
          <td>Umumiy fonetikaning o‘rganish obyekti?</td>
          <td>Nutq tovushlari, ularning turlari, o‘zgarishlari</td>
        </tr>
        <tr>
          <td>
            Arabcha "zakiy" so'zidan olingan bo'lib "Xozirjavob o'tkir zehnli"
            degan ma'nolarni anglatadi. Tarif qaysi variantga xos?
          </td>
          <td>Askiyachi</td>
        </tr>
        <tr>
          <td>
            Nutq a’zolari vositasida hosil qilinadigan, ma’no ifodalaydigan
            so‘zlarni shakllantirishda xizmat qiladigan tovushlarga nima
            deyiladi?
          </td>
          <td>Nutq tovushlari</td>
        </tr>
        <tr>
          <td>Badihago'y qaysi tildan olingan? </td>
          <td>Arabcha</td>
        </tr>
        <tr>
          <td>
            xozirjavob, va soziga chechan kishilarni she'riy usulda tezda
            muloqatga kirishib ketaolishiga{" "}
          </td>
          <td>Badixago'y</td>
        </tr>
        <tr>
          <td>
            xozirjavob, va soziga chechan kishilarni she'riy usulda tezda
            muloqatga kirishib ketaolishiga{" "}
          </td>
          <td>Suxandonlar</td>
        </tr>
        <tr>
          <td>
            Lotincha so'zdan olingan bo'lib, radio va telivedinalarda nutq
            so'zlaydigan shaxslarni kim deb atashadi?
          </td>
          <td>Diktorlar</td>
        </tr>
        <tr>
          <td>Nutqning og'zaki ko'rinishi……….</td>
          <td>Voizlik, Askiyachilik</td>
        </tr>
        <tr>
          <td>Qiroatxonlar kimlar?</td>
          <td>Ta'sirchan, ifodali o'qiydigan shaxslar</td>
        </tr>
        <tr>
          <td>
            Hikoya, ertak, dostonlarni me'yoriga qo'yib o'qiydiganlarni kim
            deyishadi?
          </td>
          <td>Qissaxon</td>
        </tr>
        <tr>
          <td>Adabiy til uchun qaysi hudud she'valari asos qilib olingan?</td>
          <td>Toshkent va Farg'ona</td>
        </tr>
        <tr>
          <td>
            E.Begmatov umumiy va xususiy me'yorlarni necha turini qayt etgan?
          </td>
          <td>10ta</td>
        </tr>
        <tr>
          <td>
            Harflar va ularning qo'llanish tamoyillarini qaysi me'yorda ko'rib
            chiqiladi?
          </td>
          <td>Fonetik me'yor</td>
        </tr>
        <tr>
          <td>
            Urg'u va uning qo'llanilishini qaysi me'yorda ko'rib chiqamiz?
          </td>
          <td>Aksentologik me'yor</td>
        </tr>
        <tr>
          <td>
            Uygaman, darsimni bajaryaman. Gapda qanday me'yor qoidasi buzilgan?
          </td>
          <td>Grammatik me'yor</td>
        </tr>
        <tr>
          <td>
            O'zbek tilining asosiy imlo qoidalari qachon o'z kuchiga kirgan?
          </td>
          <td>1995-yil 24-avgustda</td>
        </tr>
        <tr>
          <td>
            So'z yasovchi qo'shimchalar fonetik tuzilishi jihatidan bir qolipda
            ishlatilishiga…….. deyiladi.
          </td>
          <td>So'z yasalishi me'yori </td>
        </tr>
        <tr>
          <td>Punktuatsion me'yor qoidalari nimani o'rganadi?</td>
          <td>Tinish belgilarini</td>
        </tr>
        <tr>
          <td>Adabiy til uchun qaysi hudud she'valari asos qilib olingan?</td>
          <td>Toshkent va Farg'ona</td>
        </tr>
        <tr>
          <td>
            Adabiy tilning uslubi , me'yori til birliklarining nutqda sharoitga
            qarab eng ma'qulini qo'llashiga……….deyiladi
          </td>
          <td>Uslubiy me'yor</td>
        </tr>
        <tr>
          <td>Alisher Navoiyning nutqqa oid asarlari</td>
          <td>Muhokamatul lug'atayn</td>
        </tr>
        <tr>
          <td>Qaysi qatorda faqat sinonim leksemalar berilgan?</td>
          <td>sabab, vaj, bahona, bois</td>
        </tr>
        <tr>
          <td>Notiq nutqi qanday bo'lishi kerak?</td>
          <td>Jozibali, aniq va tushunarli</td>
        </tr>
        <tr>
          <td>«Mum tishlamoq» iborasini sharhlab bering.</td>
          <td>Gapirmaslik </td>
        </tr>
        <tr>
          <td>
            Til va nutqning farqi noto‘g‘ri izohlangan javobni belgilang.{" "}
          </td>
          <td>Til - voqelik, nutq - imkoniyat. </td>
        </tr>
        <tr>
          <td>Qaysi gapda noto‘g‘ri yozilgan so‘z qo‘llangan? </td>
          <td>Zulxumor bozordan kech qalib kelayapti</td>
        </tr>
        <tr>
          <td>Notiqlik bu……</td>
          <td>Nutqning og'zaki shakli</td>
        </tr>
        <tr>
          <td>Nutq madaniyati…………. </td>
          <td>Adabiy til bilan bog'liq hodisa</td>
        </tr>
        <tr>
          <td>Qaysi qatordagi so‘zlar imloviy jihatdan to‘g‘ri yozilgan? </td>
          <td>Toshkent, avtobus, tramvay</td>
        </tr>
        <tr>
          <td>Naviyni o'qiyapman. Berilgan gapda qaysi ma'no ko'chishi bor?</td>
          <td>metonimiya </td>
        </tr>
        <tr>
          <td>
            O'xshatish bosqa predmetni xususiyatlari bilan tushuntirish qanday
            ma'no ko'chishi deyiladi?
          </td>
          <td>metafora</td>
        </tr>
        <tr>
          <td>
            Quyida berilgan she’riy parchadagi ajratib ko‘rsatilgan so‘zda ma’no
            ko‘chishining qaysi turi mavjud? Tong otar chog‘ida juda sog‘inib,
            Bedil o‘qir edim, chiqdi oftob. (G‘.G‘ulom){" "}
          </td>
          <td>metonimiya </td>
        </tr>
        <tr>
          <td>
            Nutqning adabiy nutq me'yorlariga asoslanganligi nutqning qaysi
            sifatiga to'g'ri keladi?
          </td>
          <td>Nutqning to'g'riligi</td>
        </tr>
        <tr>
          <td>
            So'zning o'zi ifodalayotgan voqeylikka mutlaqo mos va muofiq
            kelishiga nima deyiladi?{" "}
          </td>
          <td>Nutqning aniqligi</td>
        </tr>
        <tr>
          <td>Qaysi gapda sinekdoxa usulida ma’no ko‘chgan? </td>
          <td>Halima o‘tkir pichoq bilan qo‘lini kesib olibdi. </td>
        </tr>
        <tr>
          <td>
            Til birliklari va uning qurilishini o'zaro yaxshi tushunish zarurati
            tufayli paydo bo'lgan, undan foydalanuvchi xalq tomonidan
            foydalaniluvchi xalq tomonidan yaratilgan amaldagi qoidalar
            yig'indisiga nima deyiladi?
          </td>
          <td>Nutq me'yori</td>
        </tr>
        <tr>
          <td>
            Tishini tishiga qo‘ymoq iborasiga sinonim bo‘lgan so‘zni toping.{" "}
          </td>
          <td>chidamoq</td>
        </tr>
        <tr>
          <td>
            Ko‘ngli joyiga tushdi iborasiga zid bo‘lgan lug‘aviy birlikni
            toping.{" "}
          </td>
          <td>yuragiga g‘ulg‘ula tushdi </td>
        </tr>
        <tr>
          <td>
            Nutq madaniyati ilmiy soha sifatida……. bilan chambarchas bog'liq.
          </td>
          <td>Mantiqshunoslik va ruhshunoslik </td>
        </tr>
        <tr>
          <td>
            Tashqarida o‘tlab yurgan qo‘y-qo‘zilarni ko‘rib: "Qiziq, bu yerdagi
            tuyoqlar soni nechta ekan-a?" − deb qoldi. Ushbu gapda ma’no
            ko‘chish usulini aniqlang.{" "}
          </td>
          <td>sinekdoxa</td>
        </tr>
        <tr>
          <td>
            Qora niyat qilmang eso-omon borib kelay. Ma'no ko'chishining qaysi
            turi ishlatilgan?
          </td>
          <td>metafora</td>
        </tr>
        <tr>
          <td>Tilimizda aynan qaysi tildan o'zlashgan so'zlar ko'proq</td>
          <td>rus tilidan</td>
        </tr>
        <tr>
          <td>Nutqni nimalar ta'sirchan qiladi?</td>
          <td>Tasviriy vositalar va ko'chma ma'noli so'zlar</td>
        </tr>
        <tr>
          <td>Sinekdoxa so‘zi qaysi tildan olingan?</td>
          <td>Yunoncha</td>
        </tr>
        <tr>
          <td>Nutqning necha xil uslubi mavjud?</td>
          <td>5xil</td>
        </tr>
        <tr>
          <td>E'lonlar, qarorlar qaysi uslubga xos?</td>
          <td>Rasmiy uslub</td>
        </tr>
        <tr>
          <td>Prezident qarorlari qaysi uslubda yoziladi?</td>
          <td>Rasmiy uslubda</td>
        </tr>
        <tr>
          <td>
            Fikr aniq ashyoviy dalillarga asoslangan holda berilishi qanday
            uslubda keladi?
          </td>
          <td>Ilmiy uslub</td>
        </tr>
        <tr>
          <td>
            O'zbek tili davlat tili deb 1989 -yil qabul qilingan. Berilgan
            misolda qaysi uslub ketyapti?
          </td>
          <td>Ilmiy uslub</td>
        </tr>
        <tr>
          <td>
            Davrning ijtimoiy-siyosiy, dolzarb masalalarini aks ettirib borish
            qanday uslub deyiladi?
          </td>
          <td>Publisistik uslub</td>
        </tr>
        <tr>
          <td>
            Darakchi, Sug'diyona, Mushtum keltirilgan na'munalar qaysi uslubga
            xos?
          </td>
          <td>Publistikaga</td>
        </tr>
        <tr>
          <td>
            Obrazlilik va estetik ta'sir etishi bilan farqlanadigan uslubni
            ko'rsating
          </td>
          <td>Badiiy uslub</td>
        </tr>
        <tr>
          <td>
            Inson faoliyatining barcha qirralarini o'zida aks ettiradigan uslub
          </td>
          <td>Badiiy uslub</td>
        </tr>
        <tr>
          <td>Badiiy adabiyotda qaysi uslubdan keng foydalaniladi? </td>
          <td>Badiiy uslub</td>
        </tr>
        <tr>
          <td>Kumush choyshab yopib dalalar, Qor qo'ynida uxlab yotadi. </td>
          <td>Badiiy uslub</td>
        </tr>
        <tr>
          <td>Oddiylik, soddalik qaysi uslubga xos?</td>
          <td>So'zlashuv uslub</td>
        </tr>
        <tr>
          <td>Trop so'zi yunoncha tropos so'zdan olingan bo'lib</td>
          <td>Ko'ch,a ma'noda qo'llaniladigan so'z yoki ibora</td>
        </tr>
        <tr>
          <td>Kasb-hunarga oid so‘zlar qaysi qatorda qo‘llangan?</td>
          <td>Tank, aslaha, shpatel, qaychi ip </td>
        </tr>
        <tr>
          <td>Quyidagi gaplardan qaysisida kasb-hunar so‘zlari qo‘llangan?</td>
          <td>
            Shonlar, har xil siniq qoliplar,charm rezgisi, shirach kosa va
            hokazolar do‘konni tutgan.
          </td>
        </tr>
        <tr>
          <td>Cho‘rak, qarinja, gashir so‘zlari qaysi guruhga mansub?</td>
          <td>Shevaga xos so‘zlar.</td>
        </tr>
        <tr>
          <td>Samarqand, Qashqadaryo viloyatlar qaysi shevaga yaqin</td>
          <td>Qipchoq</td>
        </tr>
        <tr>
          <td>
            Davlat idoaralarida faoliyat olib borayotgan vakillar qaysi tildan
            foydalanishadi?
          </td>
          <td>Adabiy til</td>
        </tr>
        <tr>
          <td>
            Antonimlikni yuzaga keltiruvchi belgilar to‘g‘ri ko‘rsatilgan
            qatorni aniqlang.
          </td>
          <td> Ma’nodagi zidlik</td>
        </tr>
        <tr>
          <td>Alligoriya grekcha so'z bo'lib……..</td>
          <td>kinoya, piching</td>
        </tr>
        <tr>
          <td>Mol, bozor, savdo, pul. Bular qaysi sohaga oid terminlar</td>
          <td>Iqtisodiyot</td>
        </tr>
        <tr>
          <td>Qaysi qatorda faqat sinonim so‘zlar berilgan?</td>
          <td>Sabab, vaj, bahona, bois</td>
        </tr>
        <tr>
          <td>Alisher Navoiy nechinchi yillar yashab o'tgan?</td>
          <td>!441-1501-yillar</td>
        </tr>
        <tr>
          <td>Chechan, checha, giddi, haligi. </td>
          <td>Shevaga oid so'zlar</td>
        </tr>
        <tr>
          <td>Eskirib qolgan so‘zlar qatorini ko‘rsating?</td>
          <td>Paranji, charx, chig‘iriq.</td>
        </tr>
        <tr>
          <td>Galing, shoti, hova qaysi viloyatga xos so'zlar</td>
          <td>Xorazm(og'uz)</td>
        </tr>
        <tr>
          <td>
            Inak, yumurta, suzma, ona . Adabiy tilga oid soz'ni belgilang.
          </td>
          <td>Ona</td>
        </tr>
        <tr>
          <td>
            «Gul yuzung ochib, ey gul, majlisim guliston qil» gapida qanday
            uslub qo'llangan?
          </td>
          <td>Badiiy uslub</td>
        </tr>
        <tr>
          <td>
            Tilning boy va chiroyli shakllanishida nimalarga e'tibor berish
            kerak?
          </td>
          <td>Ko'proq kitob mutolaa qilish</td>
        </tr>
        <tr>
          <td>
            To'g'rilik, aniqlik, mantiqiylik, ifodaviylik, boylik, soflik kabi
            sifatlar…
          </td>
          <td>Nutqning komunikativ sifatlari </td>
        </tr>
        <tr>
          <td>
            O'rta Osiyoga Nutq madaniyati va notiqlik san'atining kirib
            kelishini aynan qaysi manbaaga bog'lanadi
          </td>
          <td>Qur'oni Karim bilan</td>
        </tr>
        <tr>
          <td>Kasb-hunarga oid so‘zlar qatorini belgilang.</td>
          <td>Nina, qaychi, andoza.</td>
        </tr>
        <tr>
          <td>
            Quyidagi qatorlarning qay birida salbiy bo‘yoqdor so‘zlar berilgan?
          </td>
          <td>Naynov, qiltiriq, bashara.</td>
        </tr>
        <tr>
          <td>Qaysi so‘zlar leksik ma`noga ega bo‘ladi?</td>
          <td>Mustaqil so‘zlar</td>
        </tr>
        <tr>
          <td>Shevaga xos so‘zlar qaysi qatorda berilgan?</td>
          <td>Momo, moyak, o‘jak.</td>
        </tr>
        <tr>
          <td>
            Narsa hodisalar o‘rtasidagi aloqadorlikka asoslangan ma`no
            ko‘chirilishi bu-
          </td>
          <td>Metonimiya</td>
        </tr>
        <tr>
          <td>Nutq madaniyati insonning odob-axloqiga bog'liq jarayon.</td>
          <td>Ha, albatta</td>
        </tr>
        <tr>
          <td>So‘zlarning ma’nolari qaysi lug‘atda izohlanadi?</td>
          <td>Izohli lug‘atda.</td>
        </tr>
        <tr>
          <td>Eskirgan so'zlar berilgan qatorni toping</td>
          <td>Bo'zchi, omochchi, devonbegi</td>
        </tr>
        <tr>
          <td>"Qobusnoma" kimning asari?</td>
          <td>Kaykovus</td>
        </tr>
        <tr>
          <td>
            Hozirda muomalada yo'q, ishlatilmaydigan so'zlar qanday so'zlar
            deyiladi?
          </td>
          <td>Eskirgan</td>
        </tr>
        <tr>
          <td>«Kovushini to‘g‘irlab qo‘ymoq» iborasining lug‘aviy ma`nosi?</td>
          <td>haydab yubormoq</td>
        </tr>
        <tr>
          <td>Vulgarizmlar qanday ma’nodagi so‘zlar?</td>
          <td>haqorat ma`nosidagi</td>
        </tr>
        <tr>
          <td>Quyidagi sinonimik qatordagi so‘zlarning qaysi biri eskirgan?</td>
          <td>Gardun.</td>
        </tr>
        <tr>
          <td>
            So'zlaganda o'ylab, shoshmasdan tuzishga, keraksiz yaramas so'zlarni
            ishlatmaslikka chaqirgan mutafakkurimiz kim
          </td>
          <td>Ahmad Yugnakiy</td>
        </tr>
        <tr>
          <td>
            Alisher Navoiyning tillar muhokamasiga bag'ishlab yozgan asari.
          </td>
          <td>Muhokamatul lug'atayn</td>
        </tr>
        <tr></tr>
        <tr></tr>
      </table>
    </div>
  );
};

export default TestResponse;
