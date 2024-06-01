import React from "react";

//  exeldan tablega o'tkazsh uchun
//  https://tableconvert.com/excel-to-html
//  https://www.seabreezecomputers.com/excel2array/
/* satylari mavjud !!! */

const TestResponse = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Tafu Uchun maxsuz.
      </h1>

      <table
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
      </table>
    </div>
  );
};

export default TestResponse;
