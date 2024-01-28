import React from "react";
import TestResponse from "./Page/TestResponse/TestResponse";

const arr = [
  [
    "Nutq madaniyati haqidagi ta'limot qaysi qadimiy davlatda shakllangan.",
    "Rim",
  ],
  [
    "Notiqlikning san'at darajasiga ko'tarilishida qaysi sohalarning alohida o'rni bo'lgan. ",
    "Savdo-sotiq va sud ishlari",
  ],
  [
    `"Tarixda yo yaxshi harbiy sarkarda, yo yaxshi notiq bo'lish kerak"-degan fikr qaysi mashhur notiqga tegishli.`,
    "Sitsiron",
  ],
  ["Arastotelni Notiqlik san'ati haqida qanday asari mavjud.", "Ritorika"],
  [
    `"Brut" notiqlik san'ati haqidagi mashhur asar qaysi mashhur notiqniki.`,
    "Setseron",
  ],
  [
    "O'rta Osiyo madaniyatI tarixida, nutq madaniyatiga munosib hissa qo 'shgan siymolarimizni belgilang.",
    "Beruniy,Koshg'ariy, Y.Xos Hojib",
  ],
  ["Qobusnoma kimning asari ", "Kaykovus"],
  [
    "Nutq madaniyati va notiqlik san'ati fanini o'rganish obekti nima?",
    "Til (adabiy til me'yorlari)",
  ],
  ["Nutqning nechA xil shakli mavjud.", "2xil"],
  [
    "Ikki va undan ortiq kishilarning muloqat jarayoni nima deyiladi.",
    "Diolog",
  ],
  ["O 'rta Osiyoda notiqlarni kim deb atashgan.", "Nadimlar, qiroatxonlar"],
  [
    "Til me'yorlarini buzuvchi omillar.",
    "Begona tillardan kirib kelgan so'zlar",
  ],
  [
    "Nutq madaniyati sohasi ………sohalar bilan aloqador.",
    "Poetika, estetika, mantiq",
  ],
  [
    "O'zbek tiliga davlat tili maqomaning berilishi qaysi yil bilan bog'liq.",
    "1989-21 oktyabr",
  ],
  [
    "Nutq madaniyati haqidagi dastlabki ta'limot qaysi davlatlarda shakllangan.",
    "Misr, Assuriya, Hindiston",
  ],
  [
    "….. arabcha so 'zdan olingan bo'lib, ta'lim, tarbiyalilik va ziyolilik ma'nolarini anglatadi. ",
    "Madaniyat",
  ],
  [
    "Insonning nutq faoliyatidagi ko'rinishlari qaysi?",
    "So'zlash, mutolaa qilish va eshitish.",
  ],
  [
    "Muayyan umumxalq tilining qayta ishlangan va me'yorlashtirilgan, mazkur tilda so'zlashuvchi xalqning batcha vakili uchun tushunarli madaniy ehtiyojiga xizmat qiladigan til qanday til deyiladi?",
    "Adabiy til",
  ],
  ["`Til qanday hodisa?", "Ijtimoiy hodisa"],
  ["Nutqning eng muhim aloqaviy fazilati nima?", "Nutqning to'g'riligi"],
  [
    "Nutq to 'g 'ri bo 'lishi uchun qanday me'yorlarga amal qilish kerak",
    "Urg'u va grammatika",
  ],
  ["Urg' u nechi turga bo'linadi ?", "2turga "],
  ["Urg'u nimaga xizmat qiladi?", "Ma'no farqlashga"],
  [
    "So'zning o'zi ifodalayotgan voqeylikka mutlaqo mos va muofiq kelishiga nima deyiladi? ",
    "Nutqning aniqligi",
  ],
  [
    "Nutqning sofliliga putur yetkazadigan omillar",
    "Jargonlar, shevaga oid so'zlar, takrorlar",
  ],
  [
    "Nutqda o'rinsiz ishlatilgan boshqa tillarga oid so'zlar……. Deyiladi.",
    "Varvarizmlar",
  ],
  ["Uxlab yotibsanmi xunasa. Gapda qanday so'z qo'llangan?", "Vulgarizmlar"],
  [
    "Ish qog'ozlari uchun zarur bo'lgan ma'lum bir shaklda saqlanadigan so'z birikmalariga………deyiladi.",
    "Kanselyarizmlar",
  ],
  [
    "Yaxlit bir sistema asosida tuzilgan, fikrlar rivoji izchil bo'lgan, har bir so'z aniq maqsadga yo'naltirilgan nutq….deyiladi",
    "Nutqning mantiqiyligi ",
  ],
  [
    "Ma'lumotni birovga yetkazish va bir shaxsning muloqat jarayoni nima deyiladi?",
    "Monolog",
  ],
  ["Ma'ndosh so'zlar nima deyiladi?", "Sinonimlar."],
  ["Intonatsiya nima?", "Nutqning ta'sirchan va ifodaliyligi"],
  [
    "Kasbiy ma'no bildiruvchi va ifodalovchi so'zlar qanday so'zlar deyiladi?",
    "Terminlar",
  ],
  [
    "Kridet, audet, hisobot . Keltirilgan so'zlar qanday so'zlar deyil;adi?",
    "Termin",
  ],
  ["Notiqlikning necha xil ko'rinishlari mavjud?", "5ta"],
  [
    "Siyosiy-ijtimoiy nutq turlari.",
    "Diplomatik nutq, Miting nutqi, Ilmiy-ommabop nutq",
  ],
  ["Diniy nutq.", "Xutba, Va'z"],
  ["Akademik notiqlik ", "O'quv yurtlari ma'ruzalari, Ilmiy axborot"],
  ["Ijtimoiy-maishiy notiqlik ", "Ta'ziya (nutqi), Tabrik nutqi."],
  [
    "Sud jarayonida boshqa birov manfaatini ko'zlab nutq so'zlovchiga ………….. Deyiladi",
    "Sinegorlar",
  ],
  [
    "Nutq matnlarini tuzib, yozib, tayyorlab beradigan vakillarf nima deyiladi?",
    "Logograflar",
  ],
  ["Yunon notiqlari vakillari kimlar?", "Perikl, Lisiy, Aristotel"],
  [
    "Quyidagi so‘zlarning qaysi biri antonimlar qatoriga kirmaydi?",
    "chiroyli - badbasharalik",
  ],
  [
    "Eramizdan avvalgi V VI asrda yashab o'tgan taniqli sud olimi kim?",
    "belgi",
  ],
  ["Kontekstual sinonimlar deb qanday sinonimlarga aytiladi?", "Lisiy"],
  ["Demosfen nechinchi yillarda yashagan?", "Eramizgacha 384-322 -yillar."],
  ["Aristotel Retorika asarini qachon yozadi?", "Eramizdan avvalgi 335-yillar"],
  [
    "Leksikologiyaning nutqni obrazli ifodalashga xizmat qiluvchi bo‘limi?",
    "frazeologiya",
  ],
  ["Ritorika asari nechi qismdan iborat", "3 qism"],
  [
    `"Notiqlik haqida" , "Notiq, ", "Brut" notiqlik san'ati tarixidagi mashhur asarlarni muallifi kim?`,
    "Sitsiron",
  ],
  ["Rimdagi notiqlik maktabining asoschisi kim? ", "Kvintalyon"],
  [
    "Notiqlar deb kimlarga aytiladi?",
    "So'zining to'g'ri va aniqligi bilan boshqalarga ta'sir qilish doirasi keng bo'lgan so'z ustalariga",
  ],
  ["Voizlar kimlar?", "Fikri tiniq, nasihatgo'y halol va shirali ovoz sohibi"],
  [
    "So‘zning ko‘chma ma’nosi deyilganda nima nazarda tutiladi?",
    "nutq tarkibidagi boshqa so‘zlar yordamida anglashiladigan ma’nosi",
  ],
  [
    "Odam – kishi– inson – bashar; ko‘krak – ko‘ks – bag‘ir – to‘sh – siyna sinonimik qatorlardagi poetik (badiiy) uslubga xos leksemalar berilgan qatorni toping.",
    "bashar, siyna ",
  ],
  ["Notiq so'zi qaysi tildan olingan?", "Arab tilidan"],
  [
    "Ular shahardagi eshigida yashashgan. Bu gapda ma'no ko'chishining qaysi turi ishlatilgan.",
    "Sinekdoxa",
  ],
  [
    "Geradot tarixini takror vatakror o'qib chiqdim. Ma'no ko'chishining qaysi biri qo'llangan?",
    "Metonimya",
  ],
  [
    "Umumiy fonetikaning o‘rganish obyekti?",
    "Nutq tovushlari, ularning turlari, o‘zgarishlari",
  ],
  [
    `Arabcha "zakiy" so'zidan olingan bo'lib "Xozirjavob o'tkir zehnli" degan ma'nolarni anglatadi. Tarif qaysi variantga xos?`,
    "Askiyachi",
  ],
  [
    "Nutq a’zolari vositasida hosil qilinadigan, ma’no ifodalaydigan so‘zlarni shakllantirishda xizmat qiladigan tovushlarga nima deyiladi?",
    "Nutq tovushlari",
  ],
  ["Badihago'y qaysi tildan olingan? ", "Arabcha"],
  [
    "xozirjavob, va soziga chechan kishilarni she'riy usulda tezda muloqatga kirishib ketaolishiga ",
    "Badixago'y",
  ],
  [
    "xozirjavob, va soziga chechan kishilarni she'riy usulda tezda muloqatga kirishib ketaolishiga ",
    "Suxandonlar",
  ],
  [
    "Lotincha so'zdan olingan bo'lib, radio va telivedinalarda nutq so'zlaydigan shaxslarni kim deb atashadi?",
    "Diktorlar",
  ],
  ["Nutqning og'zaki ko'rinishi……….", "Voizlik, Askiyachilik"],
  ["Qiroatxonlar kimlar?", "Ta'sirchan, ifodali o'qiydigan shaxslar"],
  [
    "Hikoya, ertak, dostonlarni me'yoriga qo'yib o'qiydiganlarni kim deyishadi?",
    "Qissaxon",
  ],
  [
    "Adabiy til uchun qaysi hudud she'valari asos qilib olingan?",
    "Toshkent va Farg'ona",
  ],
  ["E.Begmatov umumiy va xususiy me'yorlarni necha turini qayt etgan?", "10ta"],
  [
    "Harflar va ularning qo'llanish tamoyillarini qaysi me'yorda ko'rib chiqiladi?",
    "Fonetik me'yor",
  ],
  [
    "Urg'u va uning qo'llanilishini qaysi me'yorda ko'rib chiqamiz?",
    "Aksentologik me'yor",
  ],
  [
    "Uygaman, darsimni bajaryaman. Gapda qanday me'yor qoidasi buzilgan?",
    "Grammatik me'yor",
  ],
  [
    "O'zbek tilining asosiy imlo qoidalari qachon o'z kuchiga kirgan?",
    "1995-yil 24-avgustda",
  ],
  [
    "So'z yasovchi qo'shimchalar fonetik tuzilishi jihatidan  bir qolipda ishlatilishiga…….. deyiladi.",
    "So'z yasalishi me'yori ",
  ],
  ["Punktuatsion me'yor qoidalari nimani o'rganadi?", "Tinish  belgilarini"],
  [
    "Adabiy til uchun qaysi hudud she'valari asos qilib olingan?",
    "Toshkent va Farg'ona",
  ],
  [
    "Adabiy tilning uslubi , me'yori til birliklarining nutqda sharoitga qarab eng ma'qulini qo'llashiga……….deyiladi",
    "Uslubiy me'yor",
  ],
  ["Alisher Navoiyning nutqqa oid asarlari", "Muhokamatul lug'atayn"],
  [
    "Qaysi qatorda faqat sinonim leksemalar berilgan?",
    "sabab, vaj, bahona, bois",
  ],
  ["Notiq nutqi qanday bo'lishi kerak?", "Jozibali, aniq va tushunarli"],
  ["«Mum tishlamoq» iborasini sharhlab bering.", "Gapirmaslik "],
  [
    "Til va nutqning farqi noto‘g‘ri izohlangan javobni belgilang. ",
    "Til - voqelik, nutq - imkoniyat. ",
  ],
  [
    "Qaysi gapda noto‘g‘ri yozilgan so‘z qo‘llangan? ",
    "Zulxumor bozordan kech qalib kelayapti",
  ],
  ["Notiqlik bu……", "Nutqning og'zaki shakli"],
  ["Nutq madaniyati…………. ", "Adabiy til bilan bog'liq hodisa"],
  [
    "Qaysi qatordagi so‘zlar imloviy jihatdan to‘g‘ri yozilgan? ",
    "Toshkent, avtobus, tramvay",
  ],
  [
    "Naviyni o'qiyapman. Berilgan gapda qaysi ma'no ko'chishi bor?",
    "metonimiya ",
  ],
  [
    "O'xshatish bosqa predmetni xususiyatlari bilan tushuntirish qanday ma'no ko'chishi deyiladi?",
    "metafora",
  ],
  [
    "Quyida berilgan she’riy parchadagi ajratib ko‘rsatilgan so‘zda ma’no ko‘chishining qaysi turi mavjud? Tong otar chog‘ida juda sog‘inib, Bedil o‘qir edim, chiqdi oftob. (G‘.G‘ulom) ",
    "metonimiya ",
  ],
  [
    "Nutqning adabiy nutq me'yorlariga asoslanganligi nutqning qaysi sifatiga to'g'ri keladi?",
    "Nutqning to'g'riligi",
  ],
  [
    "So'zning o'zi ifodalayotgan voqeylikka mutlaqo mos va muofiq kelishiga nima deyiladi? ",
    "Nutqning aniqligi",
  ],
  [
    "Qaysi gapda sinekdoxa usulida ma’no ko‘chgan? ",
    "Halima o‘tkir pichoq bilan qo‘lini kesib olibdi.       ",
  ],
  [
    "Til birliklari va uning qurilishini o'zaro yaxshi tushunish zarurati tufayli paydo bo'lgan, undan foydalanuvchi xalq tomonidan foydalaniluvchi xalq tomonidan yaratilgan amaldagi qoidalar yig'indisiga nima deyiladi?",
    "Nutq me'yori",
  ],
  [
    "Tishini tishiga qo‘ymoq iborasiga sinonim bo‘lgan so‘zni toping.               ",
    "chidamoq",
  ],
  [
    "Ko‘ngli joyiga tushdi iborasiga zid bo‘lgan lug‘aviy birlikni toping.           ",
    "yuragiga g‘ulg‘ula tushdi ",
  ],
  [
    "Nutq madaniyati ilmiy soha sifatida……. bilan chambarchas bog'liq.",
    "Mantiqshunoslik va ruhshunoslik ",
  ],
  [
    `Tashqarida o‘tlab yurgan qo‘y-qo‘zilarni ko‘rib: "Qiziq, bu yerdagi tuyoqlar soni nechta ekan-a?" − deb qoldi. Ushbu gapda ma’no ko‘chish usulini aniqlang.`,
    "sinekdoxa",
  ],
  [
    "Qora niyat qilmang eso-omon borib kelay. Ma'no ko'chishining qaysi turi ishlatilgan?",
    "metafora",
  ],
  ["Tilimizda aynan qaysi tildan o'zlashgan so'zlar ko'proq", "rus tilidan"],
  [
    "Nutqni nimalar ta'sirchan qiladi?",
    "Tasviriy vositalar va ko'chma ma'noli so'zlar",
  ],
  ["Sinekdoxa so‘zi qaysi tildan olingan?", "Yunoncha"],
  ["Nutqning necha xil uslubi mavjud?", "5xil"],
  ["E'lonlar, qarorlar qaysi uslubga xos?", "Rasmiy uslub"],
  ["Prezident qarorlari qaysi uslubda yoziladi?", "Rasmiy uslubda"],
  [
    "Fikr aniq ashyoviy dalillarga asoslangan holda berilishi qanday uslubda keladi?",
    "Ilmiy uslub",
  ],
  [
    "O'zbek tili davlat tili deb 1989 -yil qabul qilingan. Berilgan misolda qaysi uslub ketyapti?",
    "Ilmiy uslub",
  ],
  [
    "Davrning ijtimoiy-siyosiy, dolzarb masalalarini aks ettirib borish qanday uslub deyiladi?",
    "Publisistik uslub",
  ],
  [
    "Darakchi, Sug'diyona, Mushtum keltirilgan na'munalar qaysi uslubga xos?",
    "Publistikaga",
  ],
  [
    "Obrazlilik va estetik ta'sir etishi bilan farqlanadigan uslubni ko'rsating",
    "Badiiy uslub",
  ],
  [
    "Inson faoliyatining barcha qirralarini o'zida aks ettiradigan uslub",
    "Badiiy uslub",
  ],
  ["Badiiy adabiyotda qaysi uslubdan keng foydalaniladi? ", "Badiiy uslub"],
  [
    "Kumush choyshab yopib dalalar, Qor qo'ynida uxlab yotadi. ",
    "Badiiy uslub",
  ],
  ["Oddiylik, soddalik qaysi uslubga xos?", "So'zlashuv uslub"],
  [
    "Trop so'zi yunoncha tropos so'zdan olingan bo'lib",
    "Ko'ch,a ma'noda qo'llaniladigan so'z yoki ibora",
  ],
  [
    "Kasb-hunarga oid so‘zlar qaysi qatorda qo‘llangan?",
    "Tank, aslaha, shpatel, qaychi ip ",
  ],
  [
    "Quyidagi gaplardan qaysisida kasb-hunar so‘zlari qo‘llangan?",
    "Shonlar, har xil siniq qoliplar,charm rezgisi, shirach kosa va hokazolar do‘konni tutgan.",
  ],
  [
    "Cho‘rak, qarinja, gashir so‘zlari qaysi guruhga mansub?",
    "Shevaga xos so‘zlar.",
  ],
  ["Samarqand, Qashqadaryo viloyatlar qaysi shevaga yaqin", "Qipchoq"],
  [
    "Davlat idoaralarida faoliyat olib borayotgan vakillar qaysi tildan foydalanishadi?",
    "Adabiy til",
  ],
  [
    "Antonimlikni yuzaga keltiruvchi belgilar to‘g‘ri ko‘rsatilgan qatorni aniqlang.",
    " Ma’nodagi zidlik",
  ],
  ["Alligoriya grekcha so'z bo'lib……..", "kinoya, piching"],
  ["Mol, bozor, savdo, pul. Bular qaysi sohaga oid terminlar", "Iqtisodiyot"],
  ["Qaysi qatorda faqat sinonim so‘zlar berilgan?", "Sabab, vaj, bahona, bois"],
  ["Alisher Navoiy nechinchi yillar yashab o'tgan?", "!441-1501-yillar"],
  ["Chechan, checha, giddi, haligi. ", "Shevaga oid so'zlar"],
  ["Eskirib qolgan so‘zlar qatorini ko‘rsating?", "Paranji, charx, chig‘iriq."],
  ["Galing, shoti, hova  qaysi viloyatga xos so'zlar", "Xorazm(og'uz)"],
  ["Inak, yumurta, suzma, ona . Adabiy tilga oid soz'ni belgilang.", "Ona"],
  [
    "«Gul yuzung ochib, ey gul, majlisim guliston qil» gapida qanday uslub qo'llangan?",
    "Badiiy uslub",
  ],
  [
    "Tilning boy va chiroyli shakllanishida nimalarga e'tibor berish kerak?",
    "Ko'proq kitob mutolaa qilish",
  ],
  [
    "To'g'rilik, aniqlik, mantiqiylik, ifodaviylik, boylik, soflik kabi sifatlar…",
    "Nutqning komunikativ sifatlari ",
  ],
  [
    "O'rta Osiyoga Nutq madaniyati va notiqlik san'atining kirib kelishini aynan qaysi manbaaga bog'lanadi",
    "Qur'oni Karim bilan",
  ],
  ["Kasb-hunarga oid so‘zlar qatorini belgilang.", "Nina, qaychi, andoza."],
  [
    "Quyidagi qatorlarning qay birida salbiy bo‘yoqdor so‘zlar berilgan?",
    "Naynov, qiltiriq, bashara.",
  ],
  ["Qaysi so‘zlar leksik ma`noga ega bo‘ladi?", "Mustaqil so‘zlar"],
  ["Shevaga xos so‘zlar qaysi qatorda berilgan?", "Momo, moyak, o‘jak."],
  [
    "Narsa hodisalar o‘rtasidagi aloqadorlikka asoslangan ma`no ko‘chirilishi bu-",
    "Metonimiya",
  ],
  ["Nutq madaniyati insonning odob-axloqiga bog'liq jarayon.", "Ha, albatta"],
  ["So‘zlarning  ma’nolari qaysi lug‘atda izohlanadi?", "Izohli lug‘atda."],
  ["Eskirgan so'zlar berilgan qatorni toping", "Bo'zchi, omochchi, devonbegi"],
  [`"Qobusnoma" kimning asari?`, "Kaykovus"],
  [
    "Hozirda muomalada yo'q, ishlatilmaydigan so'zlar qanday so'zlar deyiladi?",
    "Eskirgan",
  ],
  [
    "«Kovushini to‘g‘irlab qo‘ymoq» iborasining lug‘aviy ma`nosi?",
    "haydab yubormoq",
  ],
  ["Vulgarizmlar qanday ma’nodagi so‘zlar?", "haqorat ma`nosidagi"],
  ["Quyidagi sinonimik qatordagi so‘zlarning qaysi biri eskirgan?", "Gardun."],
  [
    "So'zlaganda o'ylab, shoshmasdan tuzishga, keraksiz yaramas so'zlarni ishlatmaslikka chaqirgan mutafakkurimiz kim",
    "Ahmad Yugnakiy",
  ],
  [
    "Alisher Navoiyning tillar muhokamasiga bag'ishlab yozgan asari.",
    "Muhokamatul lug'atayn",
  ],
  [],
  [],
];

const App = () => {
  return (
    <div>
      <h4 style={{ color: "red" }}>
        qidirish uchun : "ctrl + f" ni bosing va savolni yozing!
      </h4>
      <TestResponse />
    </div>
  );
};

export default App;
