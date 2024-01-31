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
        Tafu Uchun maxsuz. fizikadan
      </h1>
      <table border="1">
        <tr>
          <td>1</td>
          <td>Elektr zanjirida tugun deb nimaga aytiladi?</td>
          <td>Uch va unda ortiq tarmoqlar tutashgan nuqtaga</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Elektr zanjirida tarmoq deb nimaga aytiladi?</td>
          <td>
            Ikki va undan ortiq ketma-ket ulangan elektr zanjiridagi elementlar
            ketma-ketligiga
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Elektr zanjirida kontur deb nimaga aytiladi?</td>
          <td>
            Bir nechta tarmoqlardan tashkil topgan yopiq tizimni tashkil etuvchi
            elektr zanjirining bir qismiga
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Elektr zanjiridagi elementlar nech turga bo’linadi?</td>
          <td>2 (aktiv va passiv)</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Elektr zanjirining aktiv elementlariga nimalar kiradi?</td>
          <td>EYuK, generator va h</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Elektr zanjirining passiv elementlariga nimalar kiradi?</td>
          <td>Rezistor, kondensator, induktiv galtak</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Elektr zanjiridagi kontur nech turga bo’linadi?</td>
          <td>2 (aktiv va passiv)</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Aktiv kontur deb nimaga aytiladi?</td>
          <td>
            Elektr zanjiridagi kontur tarkibida bir va undan ortiq aktiv
            element(lar)i mavjud bo’lgan konturga
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Passiv kontur deb nimaga aytiladi?</td>
          <td>
            Elektr zanjiridagi kontur tarkibida faqatgina passiv elementlardan
            tashkil topgan konturga
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Tok kuchini qanday qurilma bilan o’lchanadi?</td>
          <td>Ampermetr</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Kuchlanishni qanday qurilma bilan o’lchanadi?</td>
          <td>Voltmetr</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Quvvatni qanday qurilma bilan o’lchanadi?</td>
          <td>Vattmetr</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Elektr qarshilikni qanday qurilma bilan o’lchanadi?</td>
          <td>Ommetr</td>
        </tr>
        <tr>
          <td>14</td>
          <td>
            Elektr zanjirida ampermetrning belgilanishi qaysi javobda to’g’ri
            ko’rsatilgan?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>15</td>
          <td>
            Elektr zanjirida voltmetrning belgilanishi qaysi javobda to’g’ri
            ko’rsatilgan?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>16</td>
          <td>
            Elektr zanjirida EYuKning belgilanishi qaysi javobda to’g’ri
            ko’rsatilgan?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>17</td>
          <td>
            Elektr zanjirida generatorning belgilanishi qaysi javobda to’g’ri
            ko’rsatilgan?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>18</td>
          <td>Tok kuchining formulasi qaysi javobda to’g’ri ko’rsatilgan?</td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>19</td>
          <td>
            Elektr zanjiridagi rezistorning volt-amper xarakteristikasi (VAX)
            ning formulasi qaysi javobda to’g’ri ko’rsatilgan?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>20</td>
          <td>
            Elektr zanjirining bir qismi uchun Om qonunining ifodasi qaysi
            javobda to’g’ri ko’rsatilgan?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>21</td>
          <td>
            Berk (yopiq, to’liq) elektr zanjiri uchun Om qonunining ifodasi
            qaysi javobda to’g’ri ko’rsatilgan?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>22</td>
          <td>Ampermetr tarmoqqa qanday ulanadi?</td>
          <td>Ketma-ket</td>
        </tr>
        <tr>
          <td>23</td>
          <td>Voltmetr tarmoqqa qanday ulanadi?</td>
          <td>Parallel</td>
        </tr>
        <tr>
          <td>24</td>
          <td>Elektr zanjirida resistor qanday belgilanadi?</td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>25</td>
          <td>Elektr zanjirida kondensator qanday belgilanadi?</td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>26</td>
          <td>Elektr zanjirida induktiv g’altak qanday belgilanadi?</td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>27</td>
          <td>Elektr zanjirida tok manbai qanday belgilanadi?</td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>28</td>
          <td>
            Quyida keltirilgan formulalardan qaysi biri elektr zanjiri uchun
            Kirxgofning I-qonunini ifodalaydi?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>29</td>
          <td>
            Quyida keltirilgan formulalardan qaysi biri elektr zanjiri uchun
            Kirxgofning II-qonunini ifodalaydi?
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>30</td>
          <td>O’lchov birliklaridan qaysi biri induktivlikka tegishli?</td>
          <td>Genri</td>
        </tr>
        <tr>
          <td>31</td>
          <td>O’lchov birliklaridan qaysi biri tok kuchiga tegishli?</td>
          <td>Amper</td>
        </tr>
        <tr>
          <td>32</td>
          <td>O’lchov birliklaridan qaysi biri kuchlanishga tegishli?</td>
          <td>Volt</td>
        </tr>
        <tr>
          <td>33</td>
          <td>O’lchov birliklaridan qaysi biri quvvatga tegishli?</td>
          <td>Vatt</td>
        </tr>
        <tr>
          <td>34</td>
          <td>
            Keltirilgan elementlarning qaysi birida elektr zaryadlari
            to’planishi mumkin?
          </td>
          <td>Kondensator (C)</td>
        </tr>
        <tr>
          <td>35</td>
          <td>Diffuziya - bu……….</td>
          <td>
            kosentrasiyalar farqi tufayli zaryad tashuvchilarning harakati
          </td>
        </tr>
        <tr>
          <td>36</td>
          <td>
            Dielektrik – bu kristall qattiq jism, uning elektr o’tkazuvchanligi
          </td>
          <td>
            absolyut nol temperaturada nolga teng va temperatura ortishi bilan
            o’zgarmaydi
          </td>
        </tr>
        <tr>
          <td>37</td>
          <td>Nurlanuvchi diod</td>
          <td>elektr yoritgich asbob</td>
        </tr>
        <tr>
          <td>38</td>
          <td>Nurlanuvchi diod nurining to’lqin uzunligi ...... bog’liq</td>
          <td>diod tayyorlangan materialga</td>
        </tr>
        <tr>
          <td>39</td>
          <td>elektr signallarni optik signallarga aylantirish uchun</td>
          <td>Nurlanuvchi diod ... ishlatiladi</td>
        </tr>
        <tr>
          <td>40</td>
          <td>Rekombinasiya – bu……...</td>
          <td>erkin zaryad tashuvchilarning yo’qolish hodisasi</td>
        </tr>
        <tr>
          <td>41</td>
          <td>
            Signallarni uzatishda zanjirlarni uzish uchun (tranzistor eng katta
            qarshilikka ega) tranzistorning qaysi rejimi ishlatiladi?
          </td>
          <td>berk rejim</td>
        </tr>
        <tr>
          <td>42</td>
          <td>
            Signallarni uzatishda zanjirlarni ulash uchun (tranzistor eng kichik
            qarshilikka ega) tranzistorning qaysi rejimi ishlatiladi?{" "}
          </td>
          <td>to’yinish rejimi</td>
        </tr>
        <tr>
          <td>43</td>
          <td>
            Signalni buzilmagan holda kuchaytirish uchun tranzistorning qaysi
            rejimi ishlatiladi?
          </td>
          <td>aktiv rejim</td>
        </tr>
        <tr>
          <td>44</td>
          <td>Stabilitronning ishchi rejimini belgilang (ko’rsating)</td>
          <td>elektr teshilish rejimi</td>
        </tr>
        <tr>
          <td>45</td>
          <td>Sxemalarda varikap ... ishlatiladi</td>
          <td>elektr kondensator sifatida</td>
        </tr>
        <tr>
          <td>46</td>
          <td>Sxemalarda stabistor ... ishlatiladi</td>
          <td>kuchlanishni stabilizasiyalash uchun</td>
        </tr>
        <tr>
          <td>47</td>
          <td>Sxemalarda yarimo’tkazgichli diod ... ishlatiladi</td>
          <td>o’zgaruvchan tokni o’zgarmasga aylantirish uchun</td>
        </tr>
        <tr>
          <td>48</td>
          <td>Sxemalarda bipolyar tranzistor ... ishlatiladi</td>
          <td>signallarni quvvatini kuchaytirish uchun</td>
        </tr>
        <tr>
          <td>49</td>
          <td>
            Sxemalarda zatvori p-n o’tish bilan boshqariladigan tranzistor ...
            ishlatiladi
          </td>
          <td>kuchlanish kuchaytirgichi sifatida</td>
        </tr>
        <tr>
          <td>50</td>
          <td>Termorezistor</td>
          <td>termoelektrik asbob</td>
        </tr>
        <tr>
          <td>51</td>
          <td>..... termorezistor toki qiymati o’zgaradi</td>
          <td>atrof muhit temperaturasi o’zgarishi bilan</td>
        </tr>
        <tr>
          <td>52</td>
          <td>Teskari ulangan fotodiod toki</td>
          <td>yoritilganlik ortishi bilan ortadi</td>
        </tr>
        <tr>
          <td>53</td>
          <td>Tetrodli tiristor ...</td>
          <td>uchta p-n o’tish va to’rtta elektrodga ega</td>
        </tr>
        <tr>
          <td>54</td>
          <td>Tiristor ...</td>
          <td>uchta p-n o’tish va uchta elektrodga ega</td>
        </tr>
        <tr>
          <td>55</td>
          <td>To’g’irlovchi diod</td>
          <td>elektr o’zgartiruvchi asbob</td>
        </tr>
        <tr>
          <td>56</td>
          <td>To’g’irlovchi diodning ishchi rejimini belgilang (ko’rsating)</td>
          <td>to’g’ri va teskari siljitishlarning davriy almashishi</td>
        </tr>
        <tr>
          <td>57</td>
          <td>Fotodiod</td>
          <td>fotoelektrik asbob</td>
        </tr>
        <tr>
          <td>58</td>
          <td>Fotodiod ... ishlatiladi</td>
          <td>optik signallarni elektr signallarga aylantirish uchun</td>
        </tr>
        <tr>
          <td>59</td>
          <td>Fotodiod .... o’zgartiradi</td>
          <td>optik signalni elektr signalga</td>
        </tr>
        <tr>
          <td>60</td>
          <td>Fotorezistor </td>
          <td>fotoelektrik asbob</td>
        </tr>
        <tr>
          <td>61</td>
          <td>...... fotorezistor fototoki qiymati o’zgaradi</td>
          <td>yoritilganlik o’zgarishi bilan</td>
        </tr>
        <tr>
          <td>62</td>
          <td>Fototranzistor ... ishlatiladi</td>
          <td>optik signallarni elektr signallarga aylantirish uchun</td>
        </tr>
        <tr>
          <td>63</td>
          <td>Emitter zaryad tashuvchilarini ... xizmat qiladi</td>
          <td>injeksiyalash uchun</td>
        </tr>
        <tr>
          <td>64</td>
          <td>
            Yarimo’tkazgichli diod volt-amper xarakteristikasini belgilang
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>65</td>
          <td>Yarimo’tkazgichli diod …….. ishlatiladi</td>
          <td>elektr signallarni elektr signallarga aylantirish uchun</td>
        </tr>
        <tr>
          <td>66</td>
          <td>Yarimo’tkazgichli diod ...</td>
          <td>bitta p-n o’tish va ikkita elektrodga ega</td>
        </tr>
        <tr>
          <td>67</td>
          <td>
            O’tkazgich – bu kristall qattiq jism, uning elektr o’tkazuvchanligi
          </td>
          <td>
            absolyut nol temperaturada maksimal qiymatga ega va temperatura
            ortishi bilan kamayadi
          </td>
        </tr>
        <tr>
          <td>68</td>
          <td>
            O’zgaruvchan elektr kondensator sifatida qo’llaniladigan diod turi
          </td>
          <td>varikap</td>
        </tr>
        <tr>
          <td>69</td>
          <td>
            Qaysi tranzistorda kanali boyitilgan va kambag’allashgan rejim
            amalga oshadi
          </td>
          <td>kanali qurilgan MDYa maydoniy tranzistor</td>
        </tr>
        <tr>
          <td>70</td>
          <td>Qaysi tranzistorda kanali boyitilgan rejim amalga oshadi</td>
          <td>kanali induksiyalangan MDYa maydoniy tranzistor</td>
        </tr>
        <tr>
          <td>71</td>
          <td>Tok kuchi qanday belgilanadi?</td>
          <td>I</td>
        </tr>
        <tr>
          <td>72</td>
          <td>Kuchlanish qanday belgilanadi?</td>
          <td>U</td>
        </tr>
        <tr>
          <td>73</td>
          <td>Quvvat qanday belgilanadi?</td>
          <td>P</td>
        </tr>
        <tr>
          <td>74</td>
          <td>Elektr qarshilik (resistor) qanday belgilanadi?</td>
          <td>R</td>
        </tr>
        <tr>
          <td>75</td>
          <td>Induktiv g’altak qanday belgilanadi?</td>
          <td>L</td>
        </tr>
        <tr>
          <td>76</td>
          <td>Elektr sig’imi (kondensator) qanday belgilanadi?</td>
          <td>C</td>
        </tr>
        <tr>
          <td>77</td>
          <td>Qanday bipolyar tranzistor eng tezkor ishlaydi</td>
          <td>
            baza kengligi kichik, unda n- turli kiritmalar notekis taqsimlangan
          </td>
        </tr>
        <tr>
          <td>78</td>
          <td>p-n o’tish bilan boshqariladigan maydoniy tranzistor ...</td>
          <td>bitta p-n o’tish va uchta elektrodga ega</td>
        </tr>
        <tr>
          <td>79</td>
          <td>p-n o’tish to’g’ri siljitilganda tashqi kuchlanishning ...</td>
          <td>manfiy uchi n-sohaga ulanadi, natijaviy maydon kamayadi</td>
        </tr>
        <tr>
          <td>80</td>
          <td>p-n o’tish teskari siljitilganda tashqi kuchlanishning ...</td>
          <td>musbat uchi n-sohaga ulanadi, natijaviy maydon ortadi</td>
        </tr>
        <tr>
          <td>81</td>
          <td>p-n o’tish to’g’ri ulanganda ...</td>
          <td>uning kengligi kamayadi, baryer sig’imi esa ortadi</td>
        </tr>
        <tr>
          <td>82</td>
          <td>p-n o’tish teskari ulanganda ...</td>
          <td>uning kengligi ortadi, baryer sig’imi esa kamayadi</td>
        </tr>
        <tr>
          <td>83</td>
          <td>p-n o’tish baryer sig’imi ... aniqlanadi</td>
          <td>uning kengligi bilan</td>
        </tr>
        <tr>
          <td>84</td>
          <td>p-n o’tish kengligi nimalarga bog’liq?</td>
          <td>teskari ulangan kuchlanishga bog’liq</td>
        </tr>
        <tr>
          <td>85</td>
          <td>p-turdagi yarimo’tkazgich - bu</td>
          <td>akseptor kirishmali yarimo’tkazgich</td>
        </tr>
        <tr>
          <td>86</td>
          <td>n- turdagi yarimo’tkazgich - bu</td>
          <td>donor kirishmali yarimo’tkazgich</td>
        </tr>
        <tr>
          <td>87</td>
          <td>
            n- yarimo’tkazichlar uchun qaysi zaryad tashuvchilar asosiy
            hisoblanadi?
          </td>
          <td>elektronlar</td>
        </tr>
        <tr>
          <td>88</td>
          <td>
            n- yarimo’tkazgichda qaysi zaryad tashuvchilar tok hosil qiladi?
          </td>
          <td>elektronlar</td>
        </tr>
        <tr>
          <td>89</td>
          <td>
            n-p-n turli bipolyar tranzistorning chegaraviy chastotasi nima bilan
            aniqlanadi?
          </td>
          <td>elektronlarning bazadan uchib o’tish vaqti</td>
        </tr>
        <tr>
          <td>90</td>
          <td>
            Xususiy yarim o’tkazgichlarda Fermi energetik sathi qayerda
            joylashgan?
          </td>
          <td>Taqiqlangan zona o’rtasida</td>
        </tr>
        <tr>
          <td>91</td>
          <td>
            n-tur yarim o’tkazgichda Fermi energetik sathi qayerda joylashgan?
          </td>
          <td>Donor sathi va valent zonasi tepasining o’rtasida</td>
        </tr>
        <tr>
          <td>92</td>
          <td>Kovak nima?</td>
          <td>Elektron bo’lmagan o’rni va musbat zaryadlangan kvazizarracha</td>
        </tr>
        <tr>
          <td>93</td>
          <td>p-n o’tishda injeksiya …..</td>
          <td>
            p-n o’tishda potensial to’siq balandligi pasaytirish hisobiga zaryad
            tashuvchilarning asosiy hisoblangan sohaga o’tkazish
          </td>
        </tr>
        <tr>
          <td>94</td>
          <td>p-n o’tishda teshilish mexanizmining turlari?</td>
          <td>Ko’chki, issiqlik va tunnel</td>
        </tr>
        <tr>
          <td>95</td>
          <td>Tranzistorlarni ulash sxermalari?</td>
          <td>Umumiy baza, umumiy kollektor, umumiy emitter</td>
        </tr>
        <tr>
          <td>96</td>
          <td>
            Umumiy baza asosida ulangan ikki qutbli tranzistorga qanday
            kuchlanish berilganda aktiv rejimda ishlatiladi
          </td>
          <td>Emmiterli o’tishga to’g’ri, kollektorli o’tishga teskari</td>
        </tr>
        <tr>
          <td>97</td>
          <td>
            Analog signallarga ishlov berganda bipolyar tranzistor qaysi rejimda
            ishlaydi?
          </td>
          <td>aktiv</td>
        </tr>
        <tr>
          <td>98</td>
          <td>Baza zaryad tashuvchilarni ... xizmat qiladi</td>
          <td>uzatish uchun</td>
        </tr>
        <tr>
          <td>99</td>
          <td>Bipolyar transistor</td>
          <td>elektr o’zgartiruvchi asbob</td>
        </tr>
        <tr>
          <td>100</td>
          <td>Bipolyar tranzistor...</td>
          <td>ikkita p-n o’tish va uchta elektrodga ega</td>
        </tr>
        <tr>
          <td>101</td>
          <td>Bipolyar tranzistor... ishlatiladi</td>
          <td>elektr signallarni elektr signallarga aylantirish uchun</td>
        </tr>
        <tr>
          <td>102</td>
          <td>....... bipolyar tranzistorning aktiv rejimi amalga oshadi</td>
          <td>
            emitter o’tish to’g’ri, kollektor o’tish esa teskari siljitilganda
          </td>
        </tr>
        <tr>
          <td>103</td>
          <td>...... bipolyar tranzistorning berk rejimi amalga oshadi</td>
          <td>ikkala o’tish teskari yo’nalishda siljitilganda</td>
        </tr>
        <tr>
          <td>104</td>
          <td>...... bipolyar tranzistorning invers rejimi amalga oshadi</td>
          <td>
            emitter o’tish teskari, kollektor o’tish to’g’ri siljitilganda
          </td>
        </tr>
        <tr>
          <td>105</td>
          <td>
            Bipolyar tranzistorning qaysi ish rejimida p-n o’tishlar toklarining
            bir-biriga tasiri yo’q?
          </td>
          <td>berk berk</td>
        </tr>
        <tr>
          <td>106</td>
          <td>
            Bipolyar tranzistorning qaysi ish rejimida kollektor toki emitter
            toki bilan boshqariladi?
          </td>
          <td>aktiv</td>
        </tr>
        <tr>
          <td>107</td>
          <td>
            Bipolyar tranzistorning qaysi ish rejimida kollektor toki emitter
            tokiga sust bog’liq?
          </td>
          <td>to’yinish</td>
        </tr>
        <tr>
          <td>108</td>
          <td>
            Bipolyar tranzistorning qaysi sohasida kiritmalar konsentrasiyasi
            eng katta bo’ladi?
          </td>
          <td>emitter</td>
        </tr>
        <tr>
          <td>109</td>
          <td>
            Bipolyar tranzistorning qaysi sohasida kiritmalar konsentrasiyasi
            eng kichik bo’ladi?
          </td>
          <td>baza</td>
        </tr>
        <tr>
          <td>110</td>
          <td>Varikapning ishchi rejimi qachon amalga oshadi?</td>
          <td>teshilish rejimiga o’tmagan teskari siljitish</td>
        </tr>
        <tr>
          <td>111</td>
          <td>Diodli tiristor...</td>
          <td>uchta p-n o’tish va ikkita elektrodga ega</td>
        </tr>
        <tr>
          <td>112</td>
          <td>
            Invers rejimda bipolyar tranzistorning emitteri ...... xizmat qiladi
          </td>
          <td>bazadan noasosiy zaryad tashuvchilarni ekstraksiyalash uchun</td>
        </tr>
        <tr>
          <td>113</td>
          <td>Injeksiya - bu………..</td>
          <td>
            n-p o’tish to’g’ri ulanganda elektronlar oqimi n sohadan p sohaga
            harakatlanadi, kovaklar esa teskari yo’nalishda harakatlanadi
          </td>
        </tr>
        <tr>
          <td>114</td>
          <td>Kompensasiyalangan yarimo’tkazgich - bu</td>
          <td>
            donor kirishmalar konsentrasiyasi akseptor kirishmalar
            konsentrasiyasigi teng yarimo’tkazich
          </td>
        </tr>
        <tr>
          <td>115</td>
          <td>Kuchlanishni barqarorlashtirishda qo’llaniladigan diod turi?</td>
          <td>stabilitron</td>
        </tr>
        <tr>
          <td>116</td>
          <td>
            Maydoniy tranzistorning qaysi turida stok toki faqat kanal sohasi
            kengligining o’zgarishi hisobiga amalga oshadi?{" "}
          </td>
          <td>zatvori p-n o’tish bilan boshqariladigan maydoniy tranzistor</td>
        </tr>
        <tr>
          <td>117</td>
          <td>Yarim o’tkazgichli stabilitronning ishlatilishi</td>
          <td>Kuchlanishni doimiy saqlab turishda</td>
        </tr>
        <tr>
          <td>118</td>
          <td>Varikap nima ?</td>
          <td>Teskari ulangan sigimi maydon kuchlanganligiga bog’liq asbob</td>
        </tr>
        <tr>
          <td>119</td>
          <td>Maydonli tranzistorining ishlash jarayoni nimaga asoslangan</td>
          <td>
            Yarim o’tkazgichning elektr qarshiligi, shu materialga ko’ndalang
            qo’yilgan maydon bilan boshqarilib, elektr toki tashishda bir
            xildagi zaryad tashuvchilar ishtirokiga
          </td>
        </tr>
        <tr>
          <td>120</td>
          <td>Shottki diodi ………… dan iborat</td>
          <td>Metall – yarim o’tkazgich</td>
        </tr>
        <tr>
          <td>121</td>
          <td>Shottki diodning asosiy afzalliklari quyidagilardan iborat:</td>
          <td>Ochilish kuchlanishi past, tezkor</td>
        </tr>
        <tr>
          <td>122</td>
          <td>
            Eng ko’p ishlatiladigan yarim o’tkazgichli materyallarlarga nimalar
            kiradi.
          </td>
          <td>Kremniy va germaniy</td>
        </tr>
        <tr>
          <td>123</td>
          <td>
            Yarim o’tkazgichli materiallarda asosiy zaryad tashuvchilarni
            ko’rsating?
          </td>
          <td>Elektronlar, kovaklar</td>
        </tr>
        <tr>
          <td>124</td>
          <td>Integral mikrosxemaning turlari.</td>
          <td>Gibrid va yarimo’tkazgich</td>
        </tr>
        <tr>
          <td>125</td>
          <td>
            Yarim o’tkazgichnining temperaturasi ko’tarilganda uning qarshiligi
            qanday o’zgaradi?
          </td>
          <td>kamayadi</td>
        </tr>
        <tr>
          <td>126</td>
          <td>
            Tunnel diodida p-n o’tishning qanday yarim o’tkazgichlardan yasalgan
            bo’ladi
          </td>
          <td>aynigan yarim o’tkazgichlardan</td>
        </tr>
        <tr>
          <td>127</td>
          <td>Tranzistor nechta rejimda ishlaydi?</td>
          <td>4</td>
        </tr>
        <tr>
          <td>128</td>
          <td>Tranzistorning ishlash jarayoni qanday omillarga asoslangan</td>
          <td>
            zaryad tashuvchilar injeksiyasi, diffuziyasi va rekombinasiyasiga
          </td>
        </tr>
        <tr>
          <td>129</td>
          <td>
            Agar tranzistorning emitterga to’g’ri yo’nalishda kollektorga
            teskari yo’nalishda kuchlanish qo’yilsa, u qanday rejimda ishlaydi
          </td>
          <td>aktiv</td>
        </tr>
        <tr>
          <td>130</td>
          <td>
            Maydonli tranzistorlarning qarshiligi qanday elektr maydoni bilan
            boshqariladi?
          </td>
          <td>ko’ndalang</td>
        </tr>
        <tr>
          <td>131</td>
          <td>Qanday maydonli tranzistor mavjud?</td>
          <td>
            boshqariladigan p-n – o’tishli va metall – dielektrik – yarim
            o’tkazgich
          </td>
        </tr>
        <tr>
          <td>132</td>
          <td>
            Uchta va undan ortiq p-n o`tishlarga hamda ikkita ulash uchiga ega
            bo`lgan elektron sxemalarida elektr tokini katta ulashda elekron
            kalit vazifasini bajaradigan yarim o`tkazgichli asbobga ......
            deyiladi.
          </td>
          <td>Tiristor</td>
        </tr>
        <tr>
          <td>133</td>
          <td>
            Yarim o’tkazgich elektr qarshiligining elektromagnit nurlar
            ta’sirida o’zgarish hodisasi ...... deb ataladi.
          </td>
          <td>fotoo’tkazuvchanlik</td>
        </tr>
        <tr>
          <td>134</td>
          <td>
            Yorug’lik diodi nurlanadigan p-n – o’tishdan iborat bo’lib, bunda
            nimaning hisobiga nurlanish chiqariladi.
          </td>
          <td>zaryad tashuvchilar rekombinatsiyasi</td>
        </tr>
        <tr>
          <td>135</td>
          <td>
            p-n – o’tish asosida yaratilgan chiziqlimas kondensatorlar nima deb
            ataladi
          </td>
          <td>varikaplar</td>
        </tr>
        <tr>
          <td>136</td>
          <td>
            Kirish kuchlanishining nisbiy o’zgarishini chiqish kuchlanishining,
            ya’ni stabilizasiya kuchlanishining nisbiy o’zgarishiga nisbati nima
            deb ataladi
          </td>
          <td>stabilizasiya koeffisiyenti</td>
        </tr>
        <tr>
          <td>137</td>
          <td>
            Kirish va chiqish qismi elektr izolyasiyali optik bog’lanishga ega
            bo’lgan nurlanish manbai va qabul qiluvchi (fotopriyomnik)dan
            tashkil topgan yarim o’tkazgichli optoelektron qurilma
            hisoblanadi.Bu qanday qurilma?
          </td>
          <td>optopara</td>
        </tr>
        <tr>
          <td>138</td>
          <td>Ko’chkili diod deb qanday diodga aytiladi?</td>
          <td>
            teskari rejimda ishlovchi va o’ta yuqori chastotali tebranishlar
            hosil qilish uchun qo’llaniladigan diodlarga
          </td>
        </tr>
        <tr>
          <td>139</td>
          <td>Tiristorlarda qanday teshilish turlarini kuzatish mumkin</td>
          <td>barcha javoblar to’g’ri</td>
        </tr>
        <tr>
          <td>140</td>
          <td>
            Mikrozarrachalarning (elektronlarning) to’liq energiyasi potensial
            to’siq balandligidan kichik bo’lsa ham, shu to’siq bo’ylab o’z
            energiyasini o’zgartirmasdan o’tib ketishiga …. deb ataladi
          </td>
          <td>Tunnel effekti</td>
        </tr>
        <tr>
          <td>141</td>
          <td>
            Donorli yarim o’tkazgichlarda elektr o’tkazuvchanlik …….. hisobiga
            paydo bo’ladi
          </td>
          <td>Asosan elektronlar</td>
        </tr>
        <tr>
          <td>142</td>
          <td>
            Akseptorli yarim o’tkazgichlarda elektr o’tkazuvchanlik ……..
            hisobiga paydo bo’ladi
          </td>
          <td>Asosan kovaklar</td>
        </tr>
        <tr>
          <td>143</td>
          <td>
            Yarim o’tkazgichlarda elektronlarning kovaklar bilan birikib
            yo’qolish jarayoniga ……… deyiladi
          </td>
          <td>Rekombinasiya</td>
        </tr>
        <tr>
          <td>144</td>
          <td>p-n o’tishda ekstraksiya hodisasi deb nimaga aytiladi?</td>
          <td>
            p-n o’tishda asosiy zaryad tashuvchilarning elektr maydon ta’sirida
            so’rib olinishiga
          </td>
        </tr>
        <tr>
          <td>145</td>
          <td>p-n o’tishda injeksiya …..</td>
          <td>
            p-n o’tishda potensial to’siq balandligi pasaytirish hisobiga zaryad
            tashuvchilarning asosiy hisoblangan sohaga o’tkazish
          </td>
        </tr>
        <tr>
          <td>146</td>
          <td>Akseptorli aralashma nima?</td>
          <td>
            elektronlarni qabul qiluvchi, erkin kovaklar vujudga keltiruvchi
            aralashma
          </td>
        </tr>
        <tr>
          <td>147</td>
          <td>p-n o’tishni qaysi usullar bilan olish mumkin?</td>
          <td>Diffuziya, epitaksiya va eritish</td>
        </tr>
        <tr>
          <td>148</td>
          <td>Reaktiv qarshilik ifodasini ko’rsating</td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>149</td>
          <td>
            Elektr zanjiridagi tebranish konturi uchun tebranish davri ifodasini
            (Tomson formulasini) ko’rsating
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>150</td>
          <td>
            Elektromagnit tebranishda siklik chastota ifodasini ko’rsating
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>151</td>
          <td>Elektromagnit tebranishda chastota ifodasini ko’rsating</td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>152</td>
          <td>Berilgan =628 rad/s uchun davr «T» nimaga teng</td>
          <td>T=0,01 s</td>
        </tr>
        <tr>
          <td>153</td>
          <td>Induktiv qarshilik ifodasini ko’rsating</td>
          <td>XL = ωL</td>
        </tr>
        <tr>
          <td>154</td>
          <td>Sig’im qarshiligi ifodasini ko’rsating</td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>155</td>
          <td>L=16 mGn; υ=50 Gs; </td>
          <td>5,024 Om</td>
        </tr>
        <tr>
          <td>156</td>
          <td>O’tkazgichdagi elektr toki deganda nimani tushunasiz</td>
          <td>
            O’tkazgich bo’ylab zaryadlangan zarracha-larning tartibli harakati
          </td>
        </tr>
        <tr>
          <td>157</td>
          <td>Elektr kuchlanishi deb nimaga aytiladi</td>
          <td>Ikki nuqta orasidagi potensiallar farqi</td>
        </tr>
        <tr>
          <td>158</td>
          <td>Bir megagers necha gersga teng: </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>159</td>
          <td>
            O’zgaruvchan tokning burchak chastotasi quyidagi belgilashlarning
            qaysi biri bilan ko’rsatiladi
          </td>
          <td>Javobi pastda suratda</td>
        </tr>
        <tr>
          <td>160</td>
          <td>Elektr zaryadining o’lchov birligini ko’rsating</td>
          <td>Kl</td>
        </tr>
        <tr>
          <td>161</td>
          <td>
            Aktiv qarshilik elementida iste’mol qilanayotgan manba enegiyasi
          </td>
          <td>Issiqlik enegiyasiga aylanadi</td>
        </tr>
        <tr>
          <td>162</td>
          <td>Elektr zanjirlari deb ...</td>
          <td>
            elektromagnit jarayonlarini ifodalanishda elektr yurituvchi kuch,
            tok va kuchlanish tushunchalaridan foydalanish mumkin bo‘lgan,
            elektr toki oqishi uchun yo‘llarni hosil qiluvchi qurilmalar va
            ob’ektlar majmualariga aytiladi
          </td>
        </tr>
        <tr>
          <td>163</td>
          <td>Elektromagnit energiyani uzatish elementlariga nimalar kiradi</td>
          <td>barcha javoblar to‘g‘ri</td>
        </tr>
        <tr>
          <td>164</td>
          <td>
            Elektr zanjiri elektromagnit energiyasi manbalari bo‘lmagan qismini
            ... deb ataymiz
          </td>
          <td>zanjirning passiv qismi</td>
        </tr>
        <tr>
          <td>165</td>
          <td>Elektr jihozi ishlaganda uzoq vaqt xizmat qiladi</td>
          <td>Nominal ish rejimida</td>
        </tr>
        <tr>
          <td>166</td>
          <td>Elektr energiya bu …… energiyadir</td>
          <td>Elektr va magnit maydon</td>
        </tr>
        <tr>
          <td>167</td>
          <td>Elektr toki deb …… aytiladi</td>
          <td>Zaryadlangan zarralar tartibli harakatiga</td>
        </tr>
        <tr>
          <td>168</td>
          <td>Doimiy tok deb tokka aytiladi</td>
          <td>Vaqt o’tishi bilan yo’nalishi va qiymatlari o’zgarmaydigan</td>
        </tr>
        <tr>
          <td>169</td>
          <td>O’zgaruvchan tok deb … tokka aytiladi</td>
          <td>Yo’nalishi va qiymati sinus qonuni bo’yicha o’zgaradigan</td>
        </tr>
        <tr>
          <td>170</td>
          <td>
            Elektr zanjirining nominal ish rejimi deb …… mos bo’lgan rejim
            tushiniladi
          </td>
          <td>
            Elektr zanjiridagi tok, kuchlanish elektr zanjir elementlarining
            zavod tomonidan ko’rsatilgan qiymatiga
          </td>
        </tr>
        <tr>
          <td>171</td>
          <td>O’zgaruvchan tok … parametrlar bilan xarakterlanadi</td>
          <td>Oniy, effektiv, maksimal, o’rtacha qiymat va davr, chastota</td>
        </tr>
        <tr>
          <td>172</td>
          <td>
            Atom elektrostantsiyalarida …… energiya elektr energiyaga
            aylantiriladi
          </td>
          <td>Yadro</td>
        </tr>
        <tr>
          <td>173</td>
          <td>O’zgaruvchan tokni … usulida tasvirlash mumkin</td>
          <td>Analitik</td>
        </tr>
        <tr>
          <td>174</td>
          <td>
            O’zgaruvchan tok tenglamasidagi (ωt+φ) ifoda tokning …… deyiladi
          </td>
          <td>Fazasi</td>
        </tr>
        <tr>
          <td>175</td>
          <td>Nega o’zgaruvchan tok chastotasi 50 Gts qilib olingan?</td>
          <td>Ko’zning talabi shunday</td>
        </tr>
        <tr>
          <td>176</td>
          <td>
            Elektr o’lchov asboblari o’zgaruvchan tokning qiymatni o’lchaydi
          </td>
          <td>Effektiv, ta'sir etuvchi</td>
        </tr>
        <tr>
          <td>177</td>
          <td>
            O’zgarmas tok zanjiridagi R qarshilik o’zgaruvchan tok zanjiridagi R
            qarshilik bilan bir xilmi?
          </td>
          <td>O’zgaruvchan tok zanjiridagi R katta</td>
        </tr>
        <tr>
          <td>178</td>
          <td>
            Aktiv qarshilik, aktiv quvvat tushunchasi qanday toklarga xos?
          </td>
          <td>O’zgaruvchan tokka</td>
        </tr>
        <tr>
          <td>179</td>
          <td>
            Kondensator ulangan o’zgaruvchan tok zarjirida kuchlanish faza
            bo’yicha tok kuchidan …… bo’ladi
          </td>
          <td>900 keyinda</td>
        </tr>
        <tr>
          <td>180</td>
          <td>
            Induktiv g’altak ulangan o’zgaruv-chan tok zanjirida kuchlanish fazo
            bo’yicha tok kuchidan …… bo’ladi
          </td>
          <td>900 oldinda</td>
        </tr>
        <tr>
          <td>181</td>
          <td>
            Aktiv qarshilikli o’zgaruvchan tok eanjirida kuchlanish va tok kuchi
            orasidagi fazalar farqi … bo’ladi
          </td>
          <td>nolga teng</td>
        </tr>
        <tr>
          <td>182</td>
          <td>
            Kuchlanishlar rezonansi R,L,C elementlar o’zaro …………………… ulangan
            o’zgaruvchan tok zanjirida sodir bo’ladi
          </td>
          <td>Ketma-ket</td>
        </tr>
        <tr>
          <td>183</td>
          <td>
            Toklar rezononsi RC L elementlar o’zaro … ulangan o’zgaruvchan tok
            zanjirida sodir bo’ladi
          </td>
          <td>Paralel</td>
        </tr>
        <tr>
          <td>184</td>
          <td>
            Radiotexnikada … rezonansidan tebranish konturlarida kerakli
            radiostantsiyalarning signallarini qabul qilishda foydalaniladi
          </td>
          <td>Kuchlanishlar rezonansidan</td>
        </tr>
        <tr>
          <td>185</td>
          <td>Uyimizdagi elektr hisoblagich elektr tokining o’lchaydi</td>
          <td>Sarflangan energiyasini</td>
        </tr>
        <tr>
          <td>186</td>
          <td>Elektr zanjirlarini tekshirish uchun foydalaniladi</td>
          <td>Avometrdan</td>
        </tr>
        <tr>
          <td>187</td>
          <td>
            Elektr o’lchov asbobi shkalasi pastidagi korrektor nima uchun kerak
          </td>
          <td>Asbob strelkasini nolga keltirish uchun</td>
        </tr>
        <tr>
          <td>188</td>
          <td>
            Noelektrik kattalikni elektrik kattalikga aylantiruvchi asbob
            deyiladi
          </td>
          <td>Datchik</td>
        </tr>
        <tr>
          <td>189</td>
          <td>Radioaloqa 1895 yilda …………… tomonidan amalga oshirilgan</td>
          <td>A.S.Popov</td>
        </tr>
        <tr>
          <td>190</td>
          <td>Yarim o’tkazgichli asboblarda elektr toki yaxshi o’tadi</td>
          <td>bir tomonga</td>
        </tr>
        <tr>
          <td>191</td>
          <td>Tranzistor so’zi degan ma'noni bildiradi</td>
          <td>o’zgaruvcha qarshilik;</td>
        </tr>
        <tr>
          <td>192</td>
          <td>IMSning yarim o’tkazgichdan tayyorlangani kashf qilingan</td>
          <td>1957 yilda</td>
        </tr>
        <tr>
          <td>193</td>
          <td>IMSlar to’rt turga bo’linadi</td>
          <td>
            bajaradigan vazifasi, funktsional maqsadi, yasalish texnologiyasi,
            integratsiya darajasiga
          </td>
        </tr>
        <tr>
          <td>194</td>
          <td>IMSlar yasalish texnologiyasiga qarab turga bo’linadi</td>
          <td>3, yarim o’tkazgichli, plyonkali, gibrid</td>
        </tr>
        <tr>
          <td>195</td>
          <td>IMSlar integratsiya darajasiga qarab turga bo’linadi</td>
          <td>4, oddiy, o’rtacha, katta, o’ta katta IMS</td>
        </tr>
        <tr>
          <td>196</td>
          <td>Avtogeneratorlar yordamida …… tebranishlar ishlab chiqariladi</td>
          <td>garmonik</td>
        </tr>
        <tr>
          <td>197</td>
          <td>
            Multivibratorlarda teskari bog’lanish koeffitsienti ……… bo’ladi
          </td>
          <td>1 ga teng</td>
        </tr>
        <tr>
          <td>198</td>
          <td>Multivibratorlarning …… ish rejimi bor</td>
          <td>3 xil</td>
        </tr>
        <tr>
          <td>199</td>
          <td>
            Detektrlash jarayonini amalga oshiruvchi asbobga ………… deyiladi
          </td>
          <td>detektor</td>
        </tr>
        <tr>
          <td>200</td>
          <td>Detektorning asosiy elementi bo’lib ……… hisoblanadi</td>
          <td>diod</td>
        </tr>
        <tr></tr>
      </table>
    </div>
  );
};

export default TestResponse;
