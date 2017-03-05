const list = {
  mammals: [
      {
        name: 'Hirvi',
        text: 'Suurin hirvieläin. Selvästi etupainoinen rakenne. Keskiselkä mustanruskea, kyljet vaaleamman ruskeat. Alaleuasta kaulaan ulottuu muodoltaan vaihteleva ihopoimu, “parta”, joka naarailla pienempi. Suuri pitkulainen pää, pitkä liikkuva kuono-osa, riippuva ylähuuli. Pitkät korvat. Häntä lyhyt, vain noin 10 cm. Pitkät raajat, alaosista vaaleat, usein lähes valkoiset. Uroksilla sarvet, jotka putoavat yleensä tammikuussa, jonka jälkeen kasvavat uudet valmistuen kiima-aikaan mennessä. Suurimmillaan sarvet ovat noin 10-vuotiaalla uroksella. Sarvet voivat olla kahta perustyyppiä: joko hanka- tai lapiosarvityyppiä, myös välimuodot ovat tavallisia. Suomessa hankasarvisuus selvästi yleisempää (Ruotsissa ja Venäjällä lapiosarvisuus). Hirvi on helppo erottaa muista hirvieläimistä suuren kokonsa perusteella.',
        size: 'Suomen suurin nisäkäs. Säkäkorkeus 170–220 cm, pää n. 50 cm, pituus 200–290 cm, häntä 7–10 cm. Paino yleensä 200–500 kg, sukupuolten välillä suuri kokoero – urokset jopa 700 kg, naaraat korkeintaan 450 kg.',
        endanger: '',
        url: 'http://www.luontoportti.com/suomi/images/20182.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19983.jpg'
      },
      {
        name: 'Karhu',
        text: 'Erittäin suuri, raskastekoinen nisäkäs, suurpeto (yksi neljästä suurpedostamme). Pitkä, tiheä turkki, väritys vaihtelee ruskeasta kellanruskeaan, kellanharmaaseen ja lähes mustaan. Pennuilla usein vaalea kaulus. Kallo koiramainen mutta paljon suurempi. Kuono pitkä, suippeneva, suuret matalat poskihampaat ja hyvin suuret kulmahampaat. Pyöreät korvat ja pieni häntä suurelta osin turkin peitossa. Kaula paksu ja lyhyt. Vahvat jalat, käpälissä suuret käyrät kynnet.',
        size: 'Euroopan suurin petoeläin. Korkeus 90–110 cm, pää n. 30 cm, pituus 150–250 cm, häntä 5–15 cm, paino 60–230 kg. Suurimmillaan loppusyksyllä ennen talviunia. Urokset naaraita suurempia (suurin Suomessa kaadettu karhu painoi yli 300 kg ja oli säkäkorkeudeltaan noin 125 cm).',
        endanger: 'Silmälläpidettävä. Riistaeläin. Kaatolupia myönnetään vuosittain noin 150 elokuun loppupuolelta lokakuun loppuun. Naaras ja sen alle vuodenikäiset pennut ovat aina rauhoitettuja.',
        url: 'http://www.luontoportti.com/suomi/images/20183.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19997.jpg'
      },
      {
        name: 'Susi',
        text: 'Muistuttaa saksanpaimenkoiraa mutta suurempi. Selkäpuoli harmaahko, vatsa kellahtava–harmaanvalkea. Yleisväritys kuitenkin vaihtelee melkein mustasta melkein valkoiseen. Etujaloissa usein mustat juovat. Pitkä kuono, silmät vinossa asennossa pään sivuilla, korvat pyöreäpäiset. Häntä keskimittainen, suora (ei kaarru ylöspäin), tuuhea. Pitkät jalat, suuret käpälät.',
        size: 'Suurin koiraeläimemme, kettua ja supikoiraa huomattavasti suurempi. Säkäkorkeus 65–90 cm, pää n. 22 cm, pituus 90–150 cm, häntä 35–50 cm, paino 20–70 kg. Uros naarasta kookkaampi.',
        endanger: 'Erittäin uhanalainen, rauhoitettu. Poikkeuslupia susien kaatamiseen kuitenkin myönnetään.',
        url: 'http://www.luontoportti.com/suomi/images/15409.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/20005.jpg'
      },
      {
        name: 'Ilves',
        text: 'Suomessa ainoa luonnonvarainen kissaeläin. Se liikkuu enimmäkseen hämärässä ja öisin. Ravinnokseen se saalistaa erityisesti jäniksiä ja kanalintuja mutta myös isompia nisäkkäitä, kuten valkohäntäpeuroja ja metsäkauriita. Suomen ilveskannan kooksi arvioidaan noin 2 700–2 900 aikuista yksilöä (2014). Lyhyt häntä ja tupsut korvien päissä ovat ilveksen tärkeimmät tuntomerkit. Ilveksen silmät ovat lähes samankokoiset kuin ihmisellä. Turkin väri on harmaan- tai punertavanruskea. Yleensä turkissa on myös tummia täpliä tai juovia, jotka erottuvat parhaiten jaloissa.',
        size: 'Ilves on keskikokoinen kissaeläin. Sen ruumiin pituus on noin 80–130 senttimetriä ja paino 15–29 kilogrammaa. Uros on jonkin verran naarasta suurempi.',
        endanger: 'Tällä hetkellä ilveksiä elää Suomessa arviolta 2 500–2 800 kappaletta. Ilvekset, kuten muutkin Suomessa esiintyvät suurpedot, ovat rauhoitettuja.',
        url: 'http://www.luontoportti.com/suomi/images/20246.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/20000.jpg'
      },
      {
        name: 'Ahma',
        text: 'Ahma on tunnettu myös nimillä osma, osmo, kätkä (pohjoissaamen kielestä geatki) ja kamppi. Väriltään ahma on tummanruskea tai ruskeanmusta, ja kyljessä sillä on vaaleahko raita. Päässä on vaaleita ja tummia kuvioita ikään kuin sillä olisi naamio. Kaulassa ja rinnassa voi olla vaaleita läikkiä.[5]Talviturkki on pidempi ja tuuheampi kuin kesäturkki, ja talvella ahman jalkoja peittää tukeva karva, joka helpottaa lumessa liikkumista.',
        size: 'Pituudeltaan ahma on 69–83 senttimetriä, josta hännän osuus on 15–25 senttimetriä. Naaras painaa keskimäärin noin 10 kg ja uros jopa 28 kg. Hartiakorkeus on 40–45 senttimetriä. Se on Euroopan suurin näätäeläin, hieman mäyrää suurempi. Koko maailman näätäeläimistäkin vain jättiläissaukko ja merisaukko voivat kasvaa sitä suuremmiksi. Ahmalla on voimakasrakenteinen ruumis, lyhyet jalat, leveät käpälät ja litteä pää.',
        endanger: 'Suomessa ahmoja arvioidaan olevan noin 200–250 yksilöä. Suomen metsästyslainsäädännössä ahma on uhanalaisuutensa takia täysin rauhoitettu. Ahman tapporahan maksaminen lopetettiin vuonna 1975, laji rauhoitettiin poronhoitoalueen eteläpuolella 1977 ja koko maassa se sai rauhoituksen 1982.',
        url: 'http://www.luontoportti.com/suomi/images/20185.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19977.jpg'
      },
      {
        name: 'Liito-orava',
        text: 'Liito-orava on yöeläin, väriltään harmaa, ja hiukan tavallista oravaa pienempi. Sille on tunnusomaista liitopoimu, jonka avulla se voi liidellä yli 50 metrin matkoja puusta puuhun. Liito-orava elää, liikkuu, ruokailee, pesii ja lisääntyy alueella, joka on uroksella keskimäärin 60 hehtaaria ja naaraalla noin viisi hehtaaria. Liito-orava on paikkauskollinen alueelle, jolle se asettui synnyinkesänsä syksyllä, ja se elää koko elämänsä samalla elinpiirillä.',
        size: 'Liito-orava on tavallista oravaa pienempi. Ruumiin kummallakin sivulla etu- ja takaraajojen välissä on liitopoimu. Häntä on litteä. Silmät ovat suuret. Naaras painaa keskimäärin noin 150 grammaa ja koiras noin 125 grammaa. Ruumis on 15–17 senttimetriä pitkä, häntä 11–12 senttimetriä.',
        endanger: 'Uhanalaisuudeltaan liito-orava on luokiteltu maailmanlaajuisesti elinvoimaiseksi ja Suomessa silmälläpidettäväksi. Sitä uhkaavat metsähakkuut, minkä vuoksi sitä suojellaan.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Pteromysvolans.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/20027.jpg'
      },
      {
        name: 'Orava',
        text: 'Oravan tunnistaa helposti pitkästä tuuheasta hännästä. Oravien silmät ovat melko suuret ja eteenpäin työntyvät, minkä vuoksi niiden näkökenttä on laaja. Suomen oravakannassa tavataan erilaisia värityyppejä: mustahäntäinen tumma kuusiorava, punahäntäinen vaalea mäntyorava sekä ruskeahäntäinen orava lukuisine välimuotoineen. Orava vaihtaa karvan kaksi kertaa vuodessa. Korvien karvatupsut kehittyvät syksyn kuluessa ja putoavat keväällä pois. Uros ja naaras muistuttavat toisiaan sekä ulkomuodoltaan että kooltaan.',
        size: 'Täysikasvuisen oravan ruumis on 19–28 cm ja häntä 13–25 cm pitkä. Painoa oravalla on 200–480 gramman väliltä.',
        endanger: 'Oravaa metsästettiin Suomessa 1900-luvun alussa satojatuhansia yksilöitä. Laji rauhoitettiin vuonna 1929, ja metsästysaikaa lyhennettiin. Oravakannat elpyivätkin nopeasti. Nykyään oravan metsästys Suomessa on vähäistä. Saalismäärä oli vuonna 2013 7 100 kappaletta. Suomessa oravan metsästyskausi alkaa koko maassa 1.12. ja päättyy 31.1.',
        url: 'http://www.luontoportti.com/suomi/images/20160.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19990.jpg'
      },
      {
        name: 'Tunturisopuli',
        text: 'Pää ja etuselkä ovat mustat, korvien välissä oranssit läikät. Muu osa selkää ja kylkiä on oranssin-kellertävää, jossa on mustia karvoja seassa. Selässä on musta viiru. Alapuoli kellertävä. Korvat ovat turkin peitossa. Tunturisopuli on hiljainen eläin, joka joskus vikisee ja narskuttelee hampaitaan, kuitenkin kannan ollessa runsas eläin voi kirskua aggressiivisesti.',
        size: 'Vartalon pituus on 7–15 cm, hännän pituus 1,5–2 cm, paino 100 g.',
        endanger: 'Tunturisopuleita esintyy lapissa, jossa kanta on hyvin elinvoimainen.',
        url: 'http://yle.fi/aihe/sites/aihe/files/migrated/oppiminen/images/tunturisopuli_2651.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/20010.jpg'
      },
      {
        name: 'Poro',
        text: 'Poro on pohjoisessa Fennoskandiassa elävä puolivilli kotieläin, joka laiduntaa tuntureilla ja Metsälapin alueella. Poro on sarvellinen hirvieläin, jolla on lämpöä hyvin eristävä turkki. Sen ansiosta poro kestää pohjoisen kylmät talvet. Turkissa on peitinkarvat, joissa on eristeenä ilmalokeroita. Turkki on väriltään yleensä harmaan, vaaleanruskean ja valkoisen kirjava, mutta väritys vaihtelee eri yksilöiden kesken. Molemmilla sukupuolilla on sarvet, jotka vaihtuvat vuosittain. Se saattaa kasvaa pituutta vuorokaudessa 2 senttimetriä ja painoakin samassa ajassa puoli kiloa. ',
        size: 'Urosporon paino voi olla 70–100 kg ja lapakorkeus jopa 127 cm; naarasporo on jonkin verran pienempi, 60–80 kg. Vastasyntynyt vasa painaa 4–6 kg. Poron pituus on hännästä turvan kärkeen 150–210 cm. Poron elinikä voi olla 18–20 vuotta.',
        endanger: 'Vuonna 2001 Suomessa oli 185 000 poroa. Maa- ja metsätalousministeriö asettaa porojen sallitun enimmäismäärän vuosikymmeneksi kerrallaan. Vuosina 2010–2020 suurin sallittu poromäärä on 203 700 yksilöä.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/20070818-0001-strolling_reindeer.jpg',
      },
      {
        name: 'Rusakko',
        text: 'Rusakon selkäpuoli on kellertävän harmaanruskea ja pohjavilla valkea. Sivut, etukaula ja raajat ovat ruosteenkeltaiset tai ruosteenpunaiset. Vatsapuoli on valkea. Häntä on alta valkoinen ja päältä musta. Korvat ovat mustakärkiset ja pitkät, ja ulottuvat kuonon eteen vastakkain käännettynä. Talvipuku vaihtelee melkein kesäpuvun värisestä hopeanharmaaseen.',
        size: 'Rusakko painaa 2,5–7 kilogrammaa. Ruumis on 55–68 senttimetriä pitkä ja häntä 8–12,5 senttimetrin pituinen.',
        endanger: 'Sitä metsästetään ravinnoksi ja turkkinsa takia. Vuonna 2013 Suomessa metsästettiin noin 66-100 rusakkoa. Suomessa rusakko on erittäin elinvoimainen.',
        url: 'http://www.luontoportti.com/suomi/images/20157.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19986.jpg'
      },
      {
        name: 'Pohjanlepakko',
        text: 'Pohjanlepakko on Suomen yleisin lepakkolaji. Kullanhohtoiset selkäkarvat ovat lajin erityistuntomerkki. Myös selvä väriraja tumman niskan ja vaalean kurkun välillä auttaa tunnistamisessa. Pohjanlepakko parittelee syksyllä ja synnyttää kesä-heinäkuun vaihteessa 1–2 poikasta. Se on horroksessa yleensä lokakuusta huhtikuuhun. Sen elinikä on enimmillään 14–15 vuotta.',
        size: 'Pohjanlepakon pituus ilman häntää on 48–70 mm. Siipien kärkiväli on 23,5 ja 28 cm välillä. Eläin painaa noin 8–24 grammaa.',
        endanger: 'Suomessa pohjanlepakoita on tavattu ulkosaaristosta aina Utsjoen Kevolla ja Enontekiöllä Käsivarressa.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Eptesicus_nilssoni.jpg',
        url2: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Eptesicus_nilssonii_hibernating.JPG'
      },
      {
        name: 'Siili',
        text: 'Siilin selkäpuolta peittää selän karvoista erikoistuneet piikit, joita siilillä on noin 6 000. Ontot piikit ovat pituudeltaan 2–3 senttimetriä. Siilin kasvot ja vatsa ovat tuuhean ruskean karvan peitossa. Kasvoissa on niin sanottu naamio, joka on muodostunut vaalean- ja tummanruskeista karvoista, jotka ovat silmien lähellä lähes mustia. Siilin kuono on suippo, pitkähkö ja liikkuva. Pihasiileille voi tarjota esimerkiksi keitettyä kalaa ja riittävän pieneksi murskattuja maapähkinöitä. Kalat pitää keittää, jotta siinä mahdollisesti piilevät loiset kuolevat eivätkä leviä siilin elimistöön.',
        size: 'Siili on noin 20–30 senttimetriä pitkä, ja sen häntä on 1,5–4 senttimetriä pitkä. Siilin paino on 0,4–1,2 kilogrammaa ja joskus jopa 1,9 kilogrammaa. Paino vaihtelee kuitenkin huomattavasti vuodenajan mukaan. Talvihorroksesta herännyt siili voi painaa alle 300 grammaa, mutta ne lihovat nopeasti alkukesästä.',
        endanger: 'Istutukset, kulttuurimaiseman ja asutuksen lisääntyminen ovat auttaneet siilin leviämistä. Siili onkin Pohjolassa nykyisin huomattavasti laajemmalle levinnyt ja yleisempi kuin vielä 1900-luvun alussa. Eurooppalainen siili, kansankielellä pihasiili, on rauhoitettu eläin. Siiliä saa ruokkia ja sille saa rakentaa horrosta varten talvimajan.',
        url: 'http://www.luontoportti.com/suomi/images/21650.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19974.jpg'
      },
      {
        name: 'Metsäpäästäinen',
        text: 'Metsäpäästäinen on yksi Suomen yleisimmistä nisäkkäistä, ja sitä esiintyy koko Suomessa. Metsäpäästäinen muistuttaa ulkonäöltään hieman hiirtä. Sillä on pitkä ja terävä kuono, korvat ovat piilossa karvapeitteen sisällä ja silmät ovat pienet. Karva on tasainen, samettinen. Väriltään se on talvella selkäpuolelta ruskeanmusta, kesällä metsäpäästäiselle tunnusomaista on "kolmiosainen" väritys: selkäpuoli harmaanruskea, kyljet kellertävät ja vatsa on vaalea. Häntä on noin puolet ruumiin pituudesta tai hieman pidempi, päältä tumma ja alta vaalea, hännän kärjen väriraja on epäselvä.',
        size: 'Ruumiin pituus on 5–8 senttimetriä ja hännän pituus 2,5–5,5 senttimetriä. Eläin painaa 5–14 grammaa.',
        endanger: 'Metsäpäästäinen on Suomessa rauhoitettu nisäkäs.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Common_Shrew.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/20023.jpg'
      },
      {
        name: 'Saimaannorppa',
        text: 'Saimaannorppa on norpan alalaji, jota tavataan vain Suomessa, Saimaan järvialtaassa. Saimaannorppa jäi saarroksiin Saimaalle viimeisimmän jääkauden jälkeisen maankohoamisen seurauksena noin 8 000 vuotta sitten. Aikuinen yksilö on tummanharmaa, ja sillä on selkeitä vaaleita rengaskuvioita. Poikaset, eli kuutit, ovat muista norpan alalajeista poiketen harmaita. Parhaiten saimaannorpan erottaa muista alalajeista päänmuodosta: saimaannorpalla on suhteellisesti levein kallo ja lyhyin kuono.',
        size: 'Aikuisen saimaannorpan ruumiin pituus on 130–145 senttimetriä ja paino 50–90 kilogrammaa.',
        endanger: 'Saimaannorppa luokitellaan erittäin uhanalaiseksi. Vuonna 2015 saimaannorppia arvioitiin olevan noin 320 yksilöä. Vaikka lukumäärä on kasvussa, määrä on niin pieni, että satunnaisvaihtelu voi romahduttaa kannan.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Pusa_hispida_saimensis_at_the_Finnish_Museum_of_Natural_History_20110824.jpg',
        url2: 'https://wwf.fi/mediabank/7047_featuredimage.image'
      },
      {
        name: 'Saukko',
        text: 'Saukko eli euraasiansaukko on vesielämään sopeutunut näätäeläin. Saukon ruumiinrakenne on pitkänomainen ja virtaviivainen. Jalat ovat lyhyet ja häntä kapenee tasaisesti paksusta tyvestä alkaen. Turkki on tuuhea ja vettä hylkivä. Sopeutuminen vesielämään näkyy varpaiden välissä kasvavina räpylöinä ja siinä, että saukko kykenee sukeltaessaan sulkemaan hengitystiet ja korvansa. Saukot ovat leikkisiä eläimiä ja saattavat esimerkiksi laskea mäkeä lumipenkalta joen jäälle öisin. Saukko on aktiivisempi yöaikaan kuin päivisin, mikä voi johtua ihmisten pelosta.',
        size: 'Saukon ruumis on noin 50–100 senttimetriä pitkä ja sen hännän pituus on noin 28–55 senttiä. Täysikasvuinen saukko painaa 5–10 kiloa.',
        endanger: 'Suomessakin saukko on käynyt pari kertaa sukupuuton partaalla. Laji rauhoitettiin vuonna 1974, ja kanta on sittemmin elpynyt. Vuoden 2015 uhanalaisuustarkastelussa sen luokitus muutettiin silmälläpidettävästä elinvoimaiseksi.',
        url: 'http://www.luontoportti.com/suomi/images/20382.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19981.jpg'
      },
      {
        name: 'Metsäpeura',
        text: 'Metsäpeura eli suomenpeura eli petra on suurikokoinen ja havumetsissä elämiseen sopeutunut peuran alalaji, jota tavataan vain Suomessa ja Luoteis-Venäjällä. Metsäpeura oli kivikaudelta lähtien suomalaisen erä- ja pyyntikulttuurin tärkeimpiä saaliseläimiä. Metsäpeura muistuttaa ulkonäöltään muita peuran alalajeja, kuten tunturipeuraa ja sen kesyä muotoa poroa, mutta on niitä kookkaampi ja pidempijalkaisempi.',
        size: 'Metsäpeura on yksi suurimmista peuran alalajeista. Sen ruumiinpituus on 180–220 senttimetriä ja hännän pituus 10–15 senttimetriä.',
        endanger: 'Metsäpeura hävisi nykyisen Suomen alueelta 1800-luvun lopulla. Kanta säilyi vain Vienan Karjalassa, josta metsäpeurat alkoivat levitä takaisin Suomen puolelle Kainuuseen 1940–1950-luvuilla. Myöhemmin niitä takaisinistutettiin myös Suomenselälle. Metsäpeura luokitellaan Suomessa nykyisin silmälläpidettäväksi, eikä sitä pidetä enää uhanalaisena.',
        url: 'http://www.luontoportti.com/suomi/images/20216.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19995.jpg'
      },
      {
        name: 'Kettu',
        text: 'Kettu eli punakettu on koiraeläin. Se on nykyisin maailman levinnein maalla liikkuva petoeläin. Väriltään kettu on tavallisesti punaruskea punakettu; sävy voi vaihdella vaalean kellanruskeasta hyvinkin syvänpunaiseen. Sillä on valkoinen tai harmaa vatsanalus sekä tavallisesti mustat korvankärjet ja raajat. Myös hännänpää on tavallisesti valkoinen, ja eläimen kurkussa ja rinnassa voi olla valkeita merkkejä. Ketun vanha nimi suomessa on repo. Kettu on tarkoittanut alun perin nahkaa, jonka hankkimiseksi repoa pyydettiin. Lapsille voitiin kertoa Pohjois-Suomessa, että revontulet syntyvät, kun kettu huiskii hankia hännällään.',
        size: 'Punakettu on kettujen suvun kookkain laji. Täysikasvuisen ketun pituus ilman häntää vaihtelee välillä 45–90 senttimetriä; tuuhea häntä on 30–55 senttimetriä pitkä. Ketun paino vaihtelee muutamasta kilosta jopa yli kymmeneen kiloon. Suomessa ketun keskipaino on hieman yli viisi kiloa.',
        endanger: 'Kettukanta on hyvin runsas ja sen levinneisyysalue käsittää lähes koko Pohjois-Amerikan ja Euraasian. Lisäksi Pohjois-Afrikassa elää jonkin verran kettuja.',
        url: 'http://www.luontoportti.com/suomi/images/20245.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/20011.jpg'
      },
      {
        name: 'Mäyrä',
        text: 'Mäyrä on ahman jälkeen suurin Suomessa elävä näätäeläin. Se tunnetaan myös nimillä euraasianmäyrä ja metsäsika. Kolmikulmaisessa päässä mäyrällä on kolme valkeaa pitkittäisjuovaa ja pienet korvat, joiden reunus on valkea. Selän ja kylkien peitinkarvat ovat pitkiä, karkeita ja vaaleita. Pohjavilla on vaaleaa ja paistaa peitinkarvojen alta. Mahan ja jalkojen peitinkarva on mustaa ja pohjavilla harvaa. Sivusta katsottuna mäyrä näyttää raskastekoiselta ja hieman päärynämäiseltä. Normaalisti mäyrän ääni on tuhiseva, röhkivä, muriseva ja ähkivä, eivätkä äänet kantaudu kovinkaan kauas. Ruokaa etsiessään se on kuitenkin äänekkäämpi, ja tällöin äänet koostuvat lähinnä tuhinasta, maiskuttelusta sekä lehtien rapinasta.',
        size: 'Mäyrä on keskisuuri petoeläin. Sen ruumiin pituus on 65-85 cm ja hännän pituus noin 15 cm. Paino vaihtelee vuodenajan, iän ja sukupuolen mukaan 6-15 kg:n välillä, mutta voi olla jopa 20 kg. Painonsa puolesta eläimet ovat täysikasvuisia vasta kahden tai kolmen vuoden ikäisenä. Urokset ovat keskimäärin suurempia kuin naaraat.',
        endanger: 'Mäyrä on Suomessa luokiteltu riistaeläimeksi. Mäyrää ei saa tappaa 31.3.–1.8 välisenä aikana. Mäyrää on perinteisesti pidetty tuhoeläimenä, mutta sen aiheuttamaksi väitettyjä tuhoja muun muassa riistalintukannoille pidetään liioiteltuina.',
        url: 'http://www.luontoportti.com/suomi/images/20226.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/20025.jpg'
      },
      {
        name: 'Näätä',
        text: 'Näätä eli mäntynäätä on näätäeläimiin kuuluva nisäkäslaji. Se on heimonsa tyypillinen edustaja ja siksi antanut nimensäkin sille. Sitä tavataan lähes koko Euroopassa sekä osissa Lähi-itää, Kaukasuksella ja Siperian länsiosissa. Näätä elää kaikenlaisissa metsissä. Näädän karvapeite on ruskea, ja se on talvisin tiheä ja pehmeä. Kesäisin se on lyhyt ja karkea. Jalkapohjien polkuanturat ovat kokonaan turkin peitossa talvisin. Talviturkki kasvaa syyskuussa, ja nuoret yksilöt saavat aikuisen karvapeitteen ensimmäisen talvenaan. Ruskeaan turkkiin kuuluu, kermanoranssi kurkkulappu, harmahtavaa sävyä vatsassa sekä tummempaa väritystä tassuissa. Häntä on pitkä ja tuuhea ja korvat isot ja kolmiomaiset. ',
        size: 'Näätä on keskikokoinen lihansyöjä, ja se on noin suuren kotikissan kokoinen. Ruumiin pituus on 45–58 senttimetriä ja hännän pituus 16-28 senttimetriä. Näätä painaa 500–1 800 grammaa. Koossa on selvää vaihtelua maantieteellisesti, ja koiraat ovat 12–30 prosenttia painavempia kuin naaraat.',
        endanger: 'Näätää on metsästetty sen tuuhean talviturkin takia ja siitä on myös yritetty jalostaa tarhattua kantaa. Vuosittainen saalismäärä Suomessa on viimeisten viidentoista vuoden aikana vaihdellut noin kymmenestä tuhannesta runsaaseen kahteenkymmeneen tuhanteen yksilöön vuodessa.',
        url: 'http://www.tunturisusi.com/naata/kultarinta.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19992.jpg'
      },
      {
        name: 'Villisika',
        text: 'Villisika eli metsäkarju on sorkkaeläimiin kuuluva suurikokoinen sikalaji ja useimpien, mutta ei kaikkien kesyjen sikojen kantamuoto. Kesysiasta villisika eroaa muun muassa siten, että sen otsapenger on hyvin loiva, kun taas kesysialla otsapenger on jyrkkä ja selvästi havaittava. Lisäksi villisialla on pitempi kärsä kuin kesyllä sukulaisellaan. Aikuinen villisika on väritykseltään talvella ruskeanmusta tai mustanharmaa ja kesällä vaaleanharmaa. Sen tiheässä turkissa on paljon pitkiä harjaskarvoja. Talviturkki on lyhyt- ja tiheäkarvainen. Karjun peitinkarvoitus voi keskikesällä olla hyvin vähäistä, ja eläin saattaa silloin näyttää vaalealta ja lähes kaljulta.',
        size: 'Villisikanaaras eli emakko painaa noin 100 kilogrammaa, ja suotuisalla alueella elävä aikuinen uros eli karju voi painaa Euroopassa 300 kiloa. Suomessa elävät yksilöt painavat kuitenkin enintään 230 kilogrammaa. Villisian säkäkorkeus on 70–110 senttimetriä, ja pituutta eläimen vartalolla voi olla 185 senttimetriä. Häntä on 17–26 senttiä, joskus jopa 40 sentin mittainen. Karjuilla on suuret ja voimakkaat kulmahampaat.',
        endanger: 'Suomeen villisika on levinnyt uudelleen Virosta ja Venäjältä 1900-luvun puolivälistä alkaen, mutta on yhä varsin harvalukuinen. Nykyinen Suomen villisikakanta on arviolta 2000-3000 yksilöä.',
        url: 'http://www.luontoportti.com/suomi/images/20270.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/19987.jpg'
      }
  ],
  fishes: [
      {
        name: 'Ahven',
        text: 'Ahven on Suomen yleisin kalalaji ja Suomen kansalliskala. Se on parvikala, joka liikkuu ja etsii ravintoa päivisin parvissa, mutta yöksi se menee yksin pohjalle kasvuston suojaan lepäämään. Ahven lisääntyy tehokkaasti, ja naaras voi laskea jopa yli 200 000 mätimunaa. Pienet yksilöt syövät eläinplanktonia, mutta iän myötä ruokavalioon tulevat pohjaeläimet ja pikkukalat. Ahven elää hitaasti virtaavissa joissa, syvissä järvissä ja lammissa ja Itämeren murtovedessä. Se saattaa liikkua myös kylmissä nopeasti virtaavissa vesissä mutta ei jää niihin kutemaan.',
        size: 'Useimmiten ahven on pituudeltaan 15–30 senttimetriä ja painoltaan 50–350 grammaa. FAOn (Yhdistyneiden kansakuntien elintarvike- ja maatalousjärjestö) arvioiden mukaan tyypillinen ylämitta on 35 senttimetriä ja 1,2 kilogrammaa. Se on yleensä vihreäsävyinen tummilla pystyraidoilla. Sen vatsaevät ja pyrstö ovat puna-oranssit.',
        endanger: 'Ahvenen levinneisyysalue sisävesissä kattaa lähes koko Euroopan Italiaa ja Espanjaa lukuun ottamatta ja ulottuu Siperiaan Kolymajoelle saakka. Suomessa ahven on levinnyt lähes koko maahan, ainoastaan pohjoinen käsivarsi on paikka, jossa ahventa ei tavata.',
        url: 'http://www.luontoportti.com/suomi/images/10205.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14309.jpg'
      },
      {
        name: 'Hauki',
        text: 'Suomessa hauki on ahvenen jälkeen vapaa-ajankalastuksen toiseksi tärkein saaliskala kokonaissaaliin painolla mitattuna. Hauella on suuri pää ja kita sekä terävät hampaat ja suuret silmät. Sen ruumiinrakenne on solakka ja evät ovat keskittyneet petokaloille tyypillisesti peräpäähän. Tämä mahdollistaa nopeat hyökkäykset saaliin kimppuun. Paitsi pienempiä kaloja, hauki voi napata toisinaan myös sammakon tai uivan myyrän, joissain tapauksissa isokokoinen hauki tappaa jopa uivan vesilinnun poikasen. Hauki on toisinaan myös kannibaali, eikä se epäröi syödä pienempää lajitoveriaan.',
        size: 'Hauki voi kasvaa jopa puolitoistametriseksi ja 35-kiloiseksi. Suomen pohjoisesta sijainnista johtuen kalan kiivaimman kasvun kausi on meillä melko lyhyt. Suomalainen hauki saavuttaa varsin harvoin yli 140 senttimetrin pituuden ja ylittää 20 kilon painorajan. Yleensä vieheisiin tarttuu noin 500–2 000-grammaisia yksilöitä, joiden osuus vesistön haukipopulaatiossa on suurin. Hauen pohjaväri on vihreä ja sen kyljissä on vaaleanvihreitä tai keltaisia raitoja ja pilkkuja. Vatsa hauella on vaalea.',
        endanger: 'Haukea tavataan Euroopassa, Aasiassa ja Pohjois-Amerikassa. Euroopassa sen levinneisyysalue ulottuu etelässä Pohjois-Italiaan asti. Haukia ei ole Norjan eikä Skotlannin pohjoisosissa. Suomessa hauki on levinnyt koko maahan.',
        url: 'http://www.luontoportti.com/suomi/images/10218.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14316.jpg'
      },
      {
        name: 'Särki',
        text: 'Särki on ahvenen ja hauen jälkeen Suomen kolmanneksi yleisin kalalaji. Särkeä ei juurikaan arvosteta ruokakalana, koska siinä on melko paljon ruotoja. Särki kelpaa kuitenkin hyvin ruokakalaksi. Särkeä hyödynnetään myös lemmikkieläinten ja turkiseläinten ravintona. Särki on lisäksi suosittu syöttikala ravustuksessa ja täkyonginnassa. Kesäpäivinä särkiparvet pysyvät lämpimässä pintavedessä, ja siksi särki onkin varsin yleinen onkisaalis. Särjet syövät pienikokoisina eläinplanktonia ja suurempikokoisena enimmäkseen pohjaeläimiä. Särki kutee toukokuusta kesäkuun alkupuolelle.',
        size: 'Sillä on punaiset silmät ja punaiset vatsanpuoleiset evät. Särjen peräevä on lyhyt ja sen suomut ovat suuria. Särki kasvaa tavallisesti 15–25 cm:n pituiseksi, joskus jopa 45 cm pitkäksi.',
        endanger: 'Särki esiintyy Aasian länsiosissa ja miltei koko Euroopassa, ei kuitenkaan Espanjassa, Italiassa tai Kreikassa. Suomessa se esiintyy yleisenä pohjoisinta Lappia lukuun ottamatta. Rehevöityneissä järvissä särki on usein yleisin kalalaji.',
        url: 'http://www.luontoportti.com/suomi/images/10259.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/24344.jpg'
      },
      {
        name: 'Kuha',
        text: 'Kuha on arvostetuimpia ja arvokkaimpia Suomessa esiintyvistä kaloista. Poikasten ravinto koostuu aluksi eläinplanktonista. Sen jälkeen ruokalistalle ilmestyvät erilaiset äyriäiset ja vapaanveden selkärangattomat. Kuha on lämpimien vesien asukki ja parvikala, joskin isommat yksilöt saattavat liikkua yksin. Kuha viihtyy myös paremmin rehevämmissä ja tummavetisemmissä järvissä. Kudun jälkeen kesällä kuhat oleilevat siellä missä on parhaiten ravintoa. Kuha saattaa muodostaa varsinkin ahvenen kanssa sekaparvia. Kuhan mielisaalista ovat pienemmät parvikalat, kuten silakka.',
        size: 'Kuha muistuttaa pitkänomaista ahventa. Kuhalla on suuri terävähampainen suu ja kaksi selkäevää, joista etummainen on täynnä teräviä piikkejä. Kuhan selkä on harmaanvihertävä. Sinertäviä, hopeanharmahtavia tai kullahtavia kylkiä koristaa kymmenkunta poikkijuovaa. Kuhan pituus on yleensä 30–60 cm ja paino 0,4–2,5 kg. Suotuisissa olosuhteissa kuha saattaa kasvaa yli viisikiloiseksi, ja yli kymmenkiloisiakin kuhia on saatu. Suomen suurin kuha on saatu 1967 Piikkiössä, ja se painoi 16,7 kg.',
        endanger: 'Kuhaa esiintyy luontaisesti Itä-, Keski- ja Pohjois-Euroopassa lukuisissa Itämereen, Mustaanmereen, Kaspianmereen ja Araljärveen laskevissa vesistöissä ja Pohjanmereen laskevan Elben vesistöalueella. Suomessa kuha esiintyy maan etelä- ja keskiosissa.',
        url: 'http://www.luontoportti.com/suomi/images/10236.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14139.jpg'
      },
      {
        name: 'Lahna',
        text: 'Lahnaa pyydetään kotitarpeiksi useimmiten suurisilmäisillä verkoilla, mutta myös muilla seisovilla pyydyksillä ja mato-ongella. Isokokoista lahnaa arvostetaan ruokakalana varsinkin savustettuna. Lahna elää järvissä, matalissa merenlahdissa ja hitaasti virtaavissa joissa ja liikkuu parvissa. Se kutee jaksoittain pitkin kevättä ja alkukesää, kun vesi on yli 15-asteista. Kutu tapahtuu matalissa vesissä kasvillisuuden seassa, jossa mäti tarttuu vesikasveihin. Lahnan ravintoa poikasena on eläinplankton, mutta aikuisena se syö nilviäisiä ja toukkia. Kun lahna imee ravintoa pohjamudasta, saattaa näyttää, että se seisoisi päällään.',
        size: 'Lahna on muodoltaan litteä ja korkea. Se on väriltään aluksi hopeinen, vanhemmiten kuparinvärinen ja tummanpuhuva. Evät ovat tummanharmaat. Tavallisesti lahna on enintään kilon painoinen, mutta voi kasvaa jopa kuusikiloiseksi. Lahna voi kasvaa 25–50 cm:n pituiseksi, mutta suurempiakin on.',
        endanger: 'Lahnan levinneisyys sisävesissä kattaa suurimman osan Eurooppaa, lukuun ottamatta Norjaa ja Etelä-Euroopan suuria Välimereen työntyviä niemimaita. Suomessa luontainen levinneisyysalue yltää pohjoisessa Oulujoen vesistöön, sen pohjoispuolella kala esiintyy paikoin vesitöihin siirrettynä. Myös muualla Suomessa paikalliset lahnakannat ovat usein siirtoistutusten tuloksia.',
        url: 'http://www.luontoportti.com/suomi/images/10235.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14151.jpg'
      },
      {
        name: 'Siika',
        text: 'Suomessa on erotettu viisi tai kuusi pääasiallista siikamuotoa: pohjasiika, karisiika, vaellussiika, järvisiika, planktonsiika ja tuppisiika. On pitkään ollut kiistanalaista, ovatko nämä erillisiä lajeja. Suomessa nykyään vallitsevan käsityksen mukaan ne kuitenkin katsotaan kaikki yhteen ja samaan lajiin Coregonus lavaretus kuuluviksi, eikä niitä pidetä edes alalajeina. Poikasiässä siika syö eläinplanktonia. Harvasiivilähampaiset muodot siirtyvät kasvaessaan syömään kalanpoikasia ja pohjaeläimiä kuten surviaisentoukkia, hankajalkaisia, vesikirppuja, kotiloita ja simpukoita. Myös pienet kalat kelpaavat ravinnoksi siialle.',
        size: 'Siialla on hopeanväriset kyljet ja harmaat evät. Selkäevän ja pyrstöevän välissä sillä on lohikaloille ominainen rasvaevä. Siian pää ja suu ovat pienehköt muuhun ruumiiseen nähden. Eri siikamuotojen kasvunopeus vaihtelee suuresti. Nopeakasvuisin muoto on vaellussiika, joka 7-vuotiaana on noin 50 cm:n mittainen ja painaa noin 1 kg. Eräissä Lapin järvissä elävät siikamuodot kasvavat erittäin hitaasti ja ovat 6-vuotiaina vain noin 15 cm pitkiä ja alle 30 gramman painoisia. Suomessa suurin 2000-luvulla pyydetty siika on painanut 7,08 kilogrammaa.',
        endanger: 'Siian levinneisyys ulottuu Länsi- ja Keski-Euroopasta halki Pohjois-Aasian. Eteläisimmät esiintymisalueet Euroopassa ovat Alpeilla ja Karpaateilla. Suomessa siika on levinnyt koko maahan, sekä merialueilla että sisävesissä.',
        url: 'http://www.luontoportti.com/suomi/images/10269.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14263.jpg'
      },
      {
        name: 'Taimen',
        text: 'Taimen syntyy keväisin kudusta yleensä jokiin ja pieniin puroihin. Sieltä se poikasvaiheen jälkeen joko suuntaa vaellukselle suurempiin vesistöihin tai jää synnyinseuduilleen elämään ns. paikallisena kalana. Muutaman vuoden kuluttua taimen palaa synnyinseudulleen kutemaan. Elinympäristön ravintotilanne ja mahdollisuudet oman elinympäristönsä ulkopuoliseen vesistöön pääsemiseen vaikuttavat suuntaako taimen poikasvaiheen jälkeen noin kahden vuoden ikäisenä vaellukselle järveen, mereen tai suurempaan jokeen, vai jääkö se paikallisena kalana asustamaan synnyinalueilleen.',
        size: 'Yleisesti taimen ja lohi erotetaan toisistaan sillä, että taimenella on pilkkuja koko kyljellä ja lohen pilkutus sijoittuu kylkiviivan yläpuolelle. Toinen yleinen ero on, että taimenen pyrstön pää on yleensä suora, ja lohella pyrstössä on lovi. Taimen on yleensä pituudeltaan 40–70 cm. Taimen on myös lohta pienempi.',
        endanger: 'Taimenen luontainen levinneisyysalue rajoittuu Eurooppaan, jossa sitä tavataan lähes kaikkialla lukuun ottamatta Välimeren maita ja Kaakkois-Eurooppaa.',
        url: 'http://www.luontoportti.com/suomi/images/10277.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14285.jpg'
      },
      {
        name: 'Kiiski',
        text: 'Kiiski on pieni, pohjalla viihtyvä kala. Kiiski syö pääasiassa surviaissääsken toukkia, mutta myös vesikirput, hankajalkaiset ja kalan mäti kelpaavat. Täysikasvuiset kiisket syövät myös kalanpoikasia. Kiiskellä ei ole pienen kokonsa vuoksi merkitystä ruokakalana, vaikka sen makua on verrattu jopa kuhaan.',
        size: 'Täysikasvuinen kiiski on kooltaan 25 cm ja painaa noin 300 grammaa. Kiisken hyviä tuntomerkkejä ovat yhteen kasvaneet selkäevät, tylppä kuono, suuret silmät ja evien pienet pisteet. Väriltään kala on selän ja kylkien puolelta vihreä tai hieman ruskea, vatsa on vaaleanharmaa.',
        endanger: 'Kiiski on parvikala ja kiiskiä löytyy melkein koko Suomesta.',
        url: 'http://www.luontoportti.com/suomi/images/10224.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14103.jpg'
      },
      {
        name: 'Silakka',
        text: 'Silakka on eniten kalastettu kalamme, jonka arvostus ruokakalana on kuitenkin laskenut. Aivan suotta, sillä se on oikein valmistettuna todellinen herkku. Silakalla on eri aikaan kutevia populaatioita. Suurin osa kutee alkukesällä, pieni vähemmistö syksyllä. Silakka kutee suurissa parvissa aivan matalikosta jopa kymmenen metrin syvyyteen, kunhan paikka on kovapohjainen, soran, hiekan ja kasvillisuuden peitossa. Silakalta puuttuu sillien heimon tapaan kylkiviiva ja sen suomut ovat helposti irtoavat. ',
        size: 'Silakka on tavallisesti 14–18 cm pitkä, joskus jopa 30–35 cm. Normaalikokoinen silakka painaa 30–90 grammaa. Sen kyljet ovat hopeiset ja selkä tumma vaaleten alaspäin vihreän sävyisenä. Suomen suurin silakka on vuodelta 1997 ja painoi 1 100 g. ',
        endanger: 'Silakka on yleinen kaikilla merialueillamme. Se vaeltaa suurissa parvissa avovedessä planktonia ja muuta saalista jahdaten. Öisin se nousee pintaan syönnökselle ja painuu päivällä syvemmälle. Keväisin silakat vaeltavat rannikolle ja siirtyvät kesän mittaan ulommas merelle, missä ne talvehtivat.',
        url: 'http://www.luontoportti.com/suomi/images/10271.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14254.jpg'
      },
      {
        name: 'Muikku',
        text: 'Muikku on siikojen sukuun kuuluva lohikala. Muikku elää parvissa, jotka liikkuvat päivällä syvänteissä ja illalla pinnassa. Pimeän tultua parvi kuitenkin hajoaa ja kokoontuu taas aamun sarastaessa. Muikut voivat myös vaeltaa kauas, vaikka ne pääasiassa pysyttelevätkin yhden järven selkäalueilla. Tämä pieni lohikala on Suomen sisävesien ammattikalastajien tärkein saaliskala. Muikkua pyydystetään pienisilmäisellä muikkuverkolla. Saaliin arvo on noin kaksi euroa kilolta.',
        size: 'Muikun silmät ovat suuret ja näkökyky hyvä. Suomut ovat hopeanhohtoiset ja selkä on tumma, joskus miltei musta. Vatsa on täysin valkoinen. Lohikalojen tapaan muikullakin on selän takaosassa rasvaevä. Muikun pituus on tavallisesti 12–20 cm ja paino noin 10–70 g. Painavin Suomesta 2000-luvulla saatu muikku painoi 550 grammaa.',
        endanger: 'Muikku on alkujaan Järvi-Suomen laji, jota on kuitenkin haluttuna talouskalana siirtoistutettu kaikkialle Suomeen lukuun ottamatta enintä osaa pohjoisinta Lappia. Sielläkin se on onnistuttu kotiuttamaan Inarinjärveen ja Paatsjokeen. Murtovettä muikku ei siedä kovin hyvin, mistä syystä sitä on merialueillamme vain Suomenlahden itäosassa ja runsaammin Perämeressä, missä sitä kutsutaan nimellä maiva. Muikku on tyypillinen ulappaveden parvikala, joka suosii erityisesti suuria, kirkasvetisiä ja syviä, karuhkoja vesiä. Ruskeampia ja rehevämpiäkin vesiä se kuitenkin sietää, jos happitilanne vain säilyy hyvänä.',
        url: 'http://www.luontoportti.com/suomi/images/10243.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14168.jpg'
      },
      {
        name: 'Made',
        text: 'Made eli matikka on ainoa makeassa vedessä esiintyvä turskakalalaji. Se on sukunsa Lota ainoa laji. Made viihtyy parhaiten pohjassa ja viileissä runsashappisissa vesistöissä. Syksyisten ohuiden ensijäiden aikaan mateet nousevat usein aivan mataliin rantavesiin. Silloin, jos jää on kirkas, sitä voi löytää rantamatalista ja pyydystää kolkkaamalla, lyömällä tainnuttava isku jään läpi. Talvella taas made asustaa syvemmissä vesissä. Made on petokala ja syö pääasiassa kalaa. Sen saalista ovat kuoreet, muikut, pienet ahvenet ja kiisket ja joskus jopa ravut. Vastakuoriutuneet ja nuoret yksilöt syövät muutakin, erilaisia selkärangattomia.',
        size: 'Made on pitkulainen, hyvin pienisuomuinen ja limaisen liukas kala. Sillä on litteän leveä pää ja puolet sen ruumiista on pyrstöosaa. Made on väritykseltään keltaisen- tai tummanruskean kirjava, kyljissä säännöttömiä kuvioita, mahapuoli on vaalea. Mateen leuassa on turskakaloille tyypillinen viiksisäie. Selkäeviä on kaksi. Taempi selkäevä ja peräevä ulottuvat lähes pyrstöön asti. Kooltaan made on 30–70 cm, 0,5–3 kg, harvoin yli 5 kg (suurin Suomessa saatu made painoi 8,04 kg).',
        endanger: 'Madetta esiintyy sisävesissä koko maassa ja kaikilla merenrannikoillakin se on tavallinen. Maailmanlaajuisesti made on yksi levinneimpiä pohjoisen pallonpuoliskon kaloista.',
        url: 'http://www.luontoportti.com/suomi/images/10242.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/24328.jpg'
      },
      {
        name: 'Lohi',
        text: 'Lohi (Salmo salar) on lohikalojen heimoon kuuluva vaelluskala, jonka alkuperäinen levinneisyysalue on viileissä Pohjois-Atlantin vesissä ja niihin virtaavissa joissa. Perämeren joista kotoisin olevat lohet lähtevät kohti merta, jonne ne saapuvat kesäkuussa ja Itämeren pääaltaan ne saavuttavat jo syyskuussa. Itämerestä Pohjanmereen tapahtuva vaellus on hyvin harvinaista, mutta sitäkin tapahtuu. Pisin tunnettu vaellusmatka oli Perämerestä Grönlannin länsirannikolle, jolloin matkaa kertyi yli 5 000 km. Lohi on tärkeä ruokakala, ja maailmanlaajuisesti yksi kalanviljelyssä eniten tuotettuja kalalajeja. Se on lisäksi tavoiteltu saaliskala. ',
        size: 'Lohen kyljet ovat hopeanhohtoiset, selkä tummanharmaa ja vatsa vaalea. Koiraslohille kasvaa kudun aikana alaleukaan koukku. Pyydetty lohi on tavallisesti 70–110 cm pitkä ja painaa 3–20 kg. Painavin Suomessa saatu lohi painoi 27,4 kg, pisin – Tenojoelta saatu – oli 132 cm, sitä ei punnittu.',
        endanger: 'Lohi luokitellaan Suomessa uhanalaiseksi kalalajiksi: järvilohi äärimmäisen uhanalaiseksi ja Itä- sekä Jäämeren lohikannat vaarantuneiksi.',
        url: 'http://www.luontoportti.com/suomi/images/10244.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/14152.jpg'
      },
      {
        name: 'Kirjolohi',
        text: 'Kirjolohi (Oncorhynchus mykiss) on tyynenmerenlohien sukuun kuuluva lohikala, jonka ihminen on tuonut Pohjois-Amerikasta Suomeen ja muualle Eurooppaan. Ensimmäinen kirjolohen mätierä tuotiin Suomeen Saksasta vuonna 1894. Kalaa on istutettu Suomen luontoon moneen otteeseen ja istutetaan edelleen lähinnä virkistyskalastajien pyydettäväksi. Kirjolohi ei kovinkaan helposti lisäänny Suomen vesissä, sillä kesä on liian lyhyt mädin kypsymiselle. Kirjolohikannat ovat siksi istutusten varassa. Eurooppaan kirjolohta on tuotu 1800-luvun lopulta asti, ja viime vuosina sen viljely kalanviljelylaitoksissa on ollut runsasta.',
        size: 'Selässä, kyljissä ja päässä sekä selkä-, rasva- ja peräevässä on runsaasti mustaa pilkutusta. Yleisväri on selkäpuolella tumman harmaa, kyljissä hopeanhohtoinen ja vatsapuolella vaalea. Kyljissä on kiduskannesta pyrstöön ulottuva, rajoiltaan epäselvä roosanpunainen, hieman violettiin vivahtava raita. Kooltaan kirjolohi on noin 40–70 cm ja 1–5 kg.',
        endanger: 'Kirjolohi on Suomen taloudellisesti arvokkain kala, mutta kuuluu ”tarkkailtava ja paikallisesti haitallinen” ryhmään. Tämä merkitsee nykyistä huolellisempaa seurantaa ja edellyttää puutteellisesti tunnettujen mutta mahdollisten haittavaikutusten tutkimusta. Kalan ruokinnasta ympäristöön voi liueta fosforia. Fosforin liiallinen määrä vesissä rehevöittää vesistöjä.',
        url: 'http://www.luontoportti.com/suomi/images/11088.jpg',
        url2: 'http://www.luontoportti.com/suomi/images/24303.jpg'
      }
  ],
  birds: [
    {
      "name": "Pajulintu",
      "text": "Pieni, sirorakenteinen, ohutnokkainen hyönteissyöjä. Jalat vaaleammat kuin tiltaltilla, siiven kärki suipompi ja silmäkulmanjuova selvempi. Sirittäjästä eroaa alapuolen vaaleankeltaisen värin ja rinnan jyrkän värirajan puuttumisen perusteella.",
      "size": "Pituus 11–12,5 cm, paino 7–12 g.",
      "levinneisyys": "Kaikenlaisissa metsissä ja pensaikkoalueilla. Suomen yleisin lintulaji, pesimäkannaksi arvioitu 7–11 miljoonaa paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12378.jpg"
    },
    {
      "name": "Palokärki",
      "text": "Kokomusta, variksen kokoinen suuri tikka. Koiraan päälaki punainen, naaraan päässä punaista vain niskassa.",
      "size": "Pituus 40–46 cm, siipien kärkiväli 67–73 cm, paino 285–385 g.",
      "levinneisyys": "Pesimälintu lähes koko Suomessa havumetsärajan pohjoisosiin asti. Suomen kannaksi arvioitu 30.000–50.000 paria. Laji on runsastunut.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/25839.jpg"
    },
    {
      "name": "Peippo",
      "text": "Suomen yleisimpiä lintuja. Kaikissa puvuissa valkeat–valkeahkot siipijuovat, vihertävä yläperä ja laajalti valkeat pyrstön reunat. Koiras kesällä helposti tunnettavissa kirkkaista väreistään, naarailta ja nuorilta linnuilta puuttuu punainen rinnasta ja poskilta. Koiras naarasta kookkaampi.",
      "size": "Pituus 14–16 cm, paino 16–30 g.",
      "levinneisyys": "Pesivänä kaikenlaisissa metsissä pohjoisinta Lappia lukuun ottamatta. Suomen pesimäkannaksi arvioitu 7–9 miljoonaa paria. (Parhailla pesimispaikoilla yli 100 pesää neliökilometrillä.)",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12382.jpg"
    },
    {
      "name": "Punakylkirastas",
      "text": "Pienikokoinen rastas, jolla voimakas, kellanvalkea silmäkulmanjuova, ruosteenruskeat kupeet ja siivenalukset. Rinta, vatsa ja kupeet tumman pitkittäisviiruiset.",
      "size": "Pituus 19–23 cm, paino 49–79 g.",
      "levinneisyys": "Pesimälintuna erityyppisissä metsissä koko Suomessa. Suomen pesimäkannaksi arvioitu 1,5 miljoonaa paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12409.jpg"
    },
    {
      "name": "Punarinta",
      "text": "Talitiaisen kokoinen, päältä ruskehtava sieppojen heimoon kuuluva lintu, Naama ja rinta oranssinpunaiset, pyrstö ruskea. Alapuoli vaalea, kupeilla ruskehtavaa ja kaulan sivuilla harmaata. Musta suurehko nappisilmä.",
      "size": "Pituus 12,5–14 cm, paino 13–21 g.",
      "levinneisyys": "Pesivänä kuusivaltaisissa metsissä Metsä-Lappia myöten. Yksi runsaimpia lintujamme, Suomen pesimäkannaksi arvioitu 2–3 miljoonaa paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/7712.jpg"
    },
    {
      "name": "Järripeippo",
      "text": "Tutun peipon pohjoinen serkku, tunnetaan parhaiten valkeasta yläperästä. Hartiat ja rinta oranssit.",
      "size": "Pituus 14–16 cm, paino 19–28 g.",
      "levinneisyys": "Pesii Pohjois-Suomessa, harveneva pesimäkanta ulottuu Keski-Suomeen, toisinaan harvinaisena myös Etelä-Suomessa. Suosii harvahkoja seka- ja havumetsiä. Suomen pesimäkannaksi arvioitu 1–2,5 miljoonaa paria (kuuluu kaikkein runsaimpiin pesimälintuihimme).",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/7594.jpg"
    },
    {
      "name": "Viherpeippo",
      "text": "Sukulaisiaan voimakasrakenteisempi, vihertävä peippolintu. Ruumis, pää ja nokka tukevat. Keltaiset pyrstön reunukset ja käsisulkien ulkohöydyt parhaat tuntomerkit.",
      "size": "Pituus 14–16 cm, paino 25–35 g.",
      "levinneisyys": "Pesimälintuna nykyään Pohjois-Lappiin asti. Viihtyy kulttuuriympäristössä. Suomen pesimäkannaksi arvioitu 170.000–400.000. Kanta väheni voimakkaasti vuosina 2008–2009 linnun nielussa elävän Trichomonas gallinae -alkueläimen aiheuttaman nielemisvaikeuden vuoksi.",
      "endanger": "Vaarantunut, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/25800.jpg"
    },
    {
      "name": "Vihervarpunen",
      "text": "Pieni keltaisen-, vihreän- ja mustankirjava peippolintu. Keltaista päässä, rinnassa, siipijuovassa, yläperässä sekä pyrstön reunassa lähes viherpeippomaisesti. Kupeet voimakkaasti tummaviiruiset.",
      "size": "Pituus 11–12,5 cm, paino 10–15 g.",
      "levinneisyys": "Pesii havu- ja sekametsissä. Puuttuu Tunturi-Lapista. Suomen pesimäkannaksi arvioitu 700.000–2.000.000 paria. Kannanvaihteluun vaikuttaa erityisesti kuusen siemensato.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/25804.jpg"
    },
    {
      "name": "Harmaasieppo",
      "text": "Vailla silmiinpistäviä pukutuntomerkkejä oleva harmaa pystyssä seisova sieppo. Päältä ruskeanharmaa, alta vaalea, rinnassa epäselvää viirutusta. Siivet ja pyrstö pitkät, pää suhteellisen iso ja pyöreä.",
      "size": "Pituus 13,5–15 cm, paino 13–19 g.",
      "levinneisyys": "Pesimälintuna avoimissa metsissä ja pihapiireissä koko Suomessa. Suomen pesimäkannaksi arvioitu 1,4–1,8 miljoonaa paria (kuuluu maamme 10 yleisimmän linnun joukkoon).",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12354.jpg"
    },
    {
      "name": "Harmaasorsa",
      "text": "Muistuttaa jonkin verran sinisorsaa, mutta ei sinistä siipipeiliä, siipipeilin ruumiinpuoleisessa osassa valkea laikku. Koiraan pää ja kaula ruskeankirjavat, ruumis melko tasaisenharmaa, takaosa musta. Naaras sinisorsamainen.",
      "size": "Pituus 46–56 cm, siipien kärkiväli 78–90 cm, paino 0,85–1 kg.",
      "levinneisyys": "Tulokaslaji. Tavataan varmimmin Etelä-Suomen rannikoilla, mutta myös Oulun seuduilla rehevillä merenlahdilla, harvinaisempana järvillä sekä saaristossa. Suomen pesimäkannaksi arvioitu 500–1.000 paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/7573.jpg"
    },
    {
      "name": "Metsäkirvinen",
      "text": "Viiruinen, usein näkyvällä paikalla istuva pikkulintu. Muistuttaa niittykirvistä, mutta alta vähemmän viiruinen, tyveltä vaaleanpunainen nokka tukevampi, takavarpaan kynsi lyhyt ja käyrä.",
      "size": "Pituus 14–16 cm, paino 19–25 g.",
      "levinneisyys": "Suosii avoimia metsiä ja metsänreunoja. Suomen yleisimpiä pesimälintuja. Pesimäkannaksi arvioitu 2 miljoonaa paria. Laji on viime vuosina taantunut.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12355.jpg"
    },
    {
      "name": "Räkättirastas",
      "text": "Suuri, voimakasrakenteinen, pitkäpyrstöinen, kirjava rastas. Takaselkä, yläperä ja niska harmaat. Siivenalukset, kainalot ja vatsa valkeat. Rinnassa okranvärinen vyö. Kurkku, rinta ja vatsansivut juovikkaita.",
      "size": "Pituus 22–27 cm, paino 82–138 g.",
      "levinneisyys": "Pesivänä erilaisissa metsissä lähes koko Suomessa. Yleinen viljelysten tuntumassa, metsissä harvinaisempi. Suomen pesimäkannaksi arvioitu 1–2 miljoonaa paria.",
      "endanger": "Elinvoimainen, rauhoittamaton suurimman osan vuodesta.",
      "url": "http://www.luontoportti.com/suomi/images/7725.jpg"
    },
    {
      "name": "Hippiäinen",
      "text": "Hyvin pieni, palleromainen ja lyhytpyrstöinen. Päälaella keltaoranssi tai keltainen raita, jonka sivuilla kapeat mustat juovat. Selkäpuoli vihertävä, vatsapuoli likaisenvalkea. ”Naamalla” harmaanvalkoisella reunustetut mustat nappisilmät.",
      "size": "Pituus 8,5–9,5 cm, paino 4,5–7 g. Euroopan pienin lintu.",
      "levinneisyys": "Pesimälintuna kuusivaltaisissa metsissä Etelä- ja Keski-Suomessa. Esiintyminen eteläpainotteinen, mutta pesivänä vielä Peräpohjolassakin. Suomen pesimäkannaksi arvioitu 0,6–1,6 miljoonaa paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/16157.jpg"
    },
    {
      "name": "Talitiainen",
      "text": "Tuttu lintulautojen vakiovieras. Mustassa päässä vaalea poski. Keltaisen vatsan halkaisee musta juova. Selkä siniharmaan vihertävä.",
      "size": "Pituus 13,5–15 cm, paino 15–23 g.",
      "levinneisyys": "Pesimälintuna koko maassa, Lapissa paikoittainen. Suomen pesimäkannaksi arvioitu 1,5–2 miljoonaa paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/7762.jpg"
    },
    {
      "name": "Keltasirkku",
      "text": "Melko pitkäpyrstöinen ja kookas viiruinen sirkku. Punaruskea yläperä, puvussa ainakin jonkin verran keltaista. Nokka suhteellisen pieni, alanokka siniharmaa.",
      "size": "Pituus 15,5–17 cm, paino 24–37 g.",
      "levinneisyys": "Pesii viljelysten tuntumassa pohjoisinta Lappia lukuun ottamatta, mutta viihtyy kaikenlaisissa puoliavoimissa ympäristöissä. Talvisilla ruokintapaikoilla yleinen, jos tarjolla on kauraa. Suomen pesimäkannaksi arvioitu 700.000–1.100.000 paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/7618.jpg"
    },
    {
      "name": "Töyhtöhyyppä",
      "text": "Kurmitsoihin kuuluva, kyyhkysen kokoinen, voimakasrakenteinen kahlaaja. Päässä töyhtö. Lento heittelehtivää. Näyttää lennossa mustavalkoiselta.",
      "size": "Pituus 28–31 cm, siipien kärkiväli 67–72 cm, paino \n170–230 g.",
      "levinneisyys": "Pesii niityillä, pelloilla ja avosoilla lähes koko maassa. Maan pohjoisosassa levinneisyys aukkoista. Suomen pesimäkannaksi arvioitu 70.000–120.000 paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/7761.jpg"
    },
    {
      "name": "Töyhtötiainen",
      "text": "Yksi harvoista eurooppalaisista varpuslinnuista, jolla on töyhtö. Selkä lämpimän ruskeanharmaa, vatsapuoli likaisen valkoinen. Musta leukalappu, posket ja töyhtö valkean ja mustan kirjavat.",
      "size": "Pituus 10,5–12 cm, paino 10–14 g.",
      "levinneisyys": "Pesimälintuna havumetsissä – etenkin kallioisissa männiköissä – etelärannikolta Lapin eteläosiin. Suomen pesimäkannaksi arvioitu 300.000–600.000 paria.",
      "endanger": "Vaarantunut, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/25838.jpg"
    },
    {
      "name": "Hippiäisuunilintu",
      "text": "Suunnilleen hippiäisen kokoinen hyvin pieni uunilintu, jolla kaksi siipijuovaa. Kirkkaankeltainen yläperä, voimakas keltainen–oranssinkeltainen silmäkulmanjuova, selvä vaaleankeltainen päälakijuova.",
      "size": "Pituus 9–9,5 cm, paino 4,5–7,5 g.",
      "levinneisyys": "Etelä-Siperian havu- ja sekametsien pesimälintu, lähimmät pesimäalueet Altaivuoriston tienoilla. Suomessa säännöllinen, mutta harvalukuinen syysvieras.",
      "endanger": "",
      "url": "http://www.luontoportti.com/suomi/images/11018.jpg"
    },
    {
      "name": "Huuhkaja",
      "text": "Euroopan suurin pöllö, samannäköistä sarvipöllöä kaksi kertaa suurempi. Lyhyt pyrstö, leveät siivet, tylppä pää, jossa isot korvatupsut ja ”palavat” silmät.",
      "size": "Pituus 59–73 cm, siipien kärkiväli 138–170 cm, paino 1,6–3 kg (koiras), 2–4 kg (naaras).",
      "levinneisyys": "Pesimälintuna metsäympäristöissä lähes koko maassa. Ankaran vainon seurauksena laji lähes katosi 1900-luvun puolivälissä. Rauhoituksen ja elinmahdollisuuksien parantumisen vuoksi kanta on elpynyt 1900-luvun loppupuolella, mutta taantunut uudelleen 2000-luvulla. Kaupungistumassa. Suomen pesimäkannaksi arvioitu 1.300–1.400 paria.",
      "endanger": "Erittäin uhanalainen, rauhoitettu myös Ahvenanmaalla.",
      "url": "http://www.luontoportti.com/suomi/images/14715.jpg"
    },
    {
      "name": "Hiirihaukka",
      "text": "Keskikokoinen petolintu, jolla leveät siivet, lyhyt kaula ja lyhyehkö pyrstö, jonka pituus suurin piirtein siipien leveyden pituinen.",
      "size": "Pituus 46–58 cm, siipien kärkiväli 110–132 cm, paino 0,55–1 kg. Naaras kookkaampi.",
      "levinneisyys": "Pesimälintuna Metsä-Lapin rajoille asti. Viihtyy suurten metsäalueiden ja asutuksen rajavyöhykkeessä. Suomen pesimäkannaksi arvioidaan 4.000–4.200 paria.",
      "endanger": "Vaarantunut, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/25856.jpg"
    },
    {
      "name": "Hiiripöllö",
      "text": "Keskikokoinen, pitkäpyrstöinen, mustan-, tummanruskean- ja valkoisenkirjava pöllö. Silmät keltaiset. Eroaa helmipöllöstä suuremman koon, pitemmän pyrstön ja hartioiden vaalean alueen ansiosta.",
      "size": "Pituus 35–43 cm, siipien kärkiväli 69–82 cm, paino 215–380 g.",
      "levinneisyys": "Pesimälintuna valoisissa metsissä Pohjois-Suomessa Pohjois-Karjalaan ja Suomenselälle asti, harvoin Etelä-Suomessa. Suomen pesimäkannaksi arvioitu 2.000–6.000 paria. Muista pöllöistä poiketen myös päiväaktiivinen.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12705.jpg"
    },
    {
      "name": "Muuttohaukka",
      "text": "Voimakasrakenteinen, lihaksikas jalohaukka, jolla teräväkärkiset siivet. Poski vaalea, viiksijuova leveä.",
      "size": "Pituus 38–51 cm, siipien kärkiväli 89–113 cm, paino 630–880 g (koiras), 860–1.100 g (naaras).",
      "levinneisyys": "Pesäpaikkavaatimuksina avaruus ja hyvä näköala – suosii avointa ympäristöä myös saalistusmaastoina. Kalliojyrkänteet ja laajat suot ovatkin tyypillistä pesimäympäristöä. Kanta väheni romahdusmaisesti 1960-luvulla ympäristömyrkkyjen vuoksi, mutta on sittemmin runsastunut. Nykykannaksi arvioidaan noin 200 paria.",
      "endanger": "Vaarantunut, rauhoitettu myös Ahvenanmaalla.",
      "url": "http://www.luontoportti.com/suomi/images/25670.jpg"
    },
    {
      "name": "Naakka",
      "text": "Keskikokoinen mustahko varislintu. Kaulansivut ja niska vaaleamman harmaat. Silmä harmaanvalkoinen, nokka selkeästi variksen nokkaa pienempi.",
      "size": "Pituus 30–34 cm, siipien kärkiväli 64–73 cm, paino 82–265 g.",
      "levinneisyys": "Pesimälintuna kulttuuriympäristössä Etelä-Suomessa aina Oulun korkeudelle asti. Kanta on runsastunut voimakkaasti. Suomen pesimäkannaksi arvioitu 80.000–130.000 paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12387.jpg"
    },
    {
      "name": "Naurulokki",
      "text": "Pieni lokki. Kaikissa puvuissa paras tuntomerkki siiven etureunan (käsisiiven) kärkeä kohti levenevä valkoinen kiilanmuotoinen alue. Kesällä pää mustanruskea (näyttää usein mustalta).",
      "size": "Pituus 35–39 cm, siipien kärkiväli 86–99 cm, paino 205–340 g.",
      "levinneisyys": "Pesivänä lähes koko Suomessa, lajin kanta Lapissa on aukkoinen ja pieni. Pesivänä järvien ja merenlahtien kasvillisuuden joukossa sekä luodoilla. Etsii ravintoaan kaupungeista ja pelloilta kaukanakin pesimäpaikoista. Pesii usein suurina yhdyskuntina. Kannan kooksi arvioitu noin100.000 paria.",
      "endanger": "Vaarantunut, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12379.jpg"
    },
    {
      "name": "Metso",
      "text": "Koiras isokokoinen yleisväriltään tumma, suuripyrstöinen metsäkanalintu. Naaras ruskeasävyinen, koirasta huomattavasti pienikokoisempi.",
      "size": "Pituus 54–90 cm, siipien kärkiväli 87–125 cm, paino keskimäärin 4 kg (vanha koiras), 1,9 kg (vanha naaras). Nuoret linnut kevyempiä. Painavimmat yksilöt Etelä-Suomessa.",
      "levinneisyys": "Elää laajoilla metsäalueilla ja suosii soiden pilkkomia vaihtelevia kangasmetsäkuvioita, vanhoja (aarnio)metsiä, mutta kelpuuttaa myös varovaisesti käsitellyt talousmetsät. Harvinaistunut viime vuosikymmeninä. Vuoden 2015 kannaksi arvioitiin 540.000 yksilöä. Harvinaistumisen syynä ovat lähinnä metsien ikärakenteessa tapahtuneet muutokset, suojapaikkojen väheneminen metsänhoidon toimenpiteiden takia (raivaukset ym.), soidinpaikkojen tuhoutuminen ja pienpetokantojen (supikoira) lisääntyminen.",
      "endanger": "Elinvoimainen, rauhoitettu. Muiden metsäkanalintujen tapaan riistalintu. (Huippuvuonna 1980 metsosaalis oli 120.000 yksilöä, vuonna 2010 luku oli 32.000.)",
      "url": "http://www.luontoportti.com/suomi/images/25852.jpg"
    },
    {
      "name": "Laulujoutsen",
      "text": "Suuri valkoinen vesilintu. Nuorena vaalean harmaa.",
      "size": "Pituus 1,4–1,6 m, siipien kärkiväli 2,2–2,4 m, paino 6,5–11,5 kg.",
      "levinneisyys": "Oli 1950-luvulla lähes sukupuuton partaalla Suomessa. Nykyisin pesii lähes koko maassa määrältään runsastuen johtuen lajin rauhoituksesta ja sen yhteydessä tehdystä valistustyöstä (Yrjö Kokko). Nykykannaksi arvioidaan 5.600–7.000 paria. Vuonna 2014 laulujoutsenien syyskannan lukumääräksi arvioitiin 70.000 yksilöä. (Syyskanta muodostuu pesivistä pareista, niiden poikasista, pesimättömistä esiaikuisista sekä Suomen läpi muuttavista yksilöistä.)",
      "endanger": "Elinvoimainen, rauhoitettu koko maassa, myös Ahvenanmaalla.",
      "url": "http://www.luontoportti.com/suomi/images/12364.jpg"
    },
    {
      "name": "Käki",
      "text": "Ruskea tai harmaa, pitkäpyrstöinen ja teräväsiipinen lintu. Lennossa haukkamainen, mutta siivet eivät kohoa ruumiin vaakatason yläpuolelle.",
      "size": "Pituus 32–36 cm, siipien kärkiväli 54–60 cm, paino 80–160 g.",
      "levinneisyys": "Elinympäristökirjo laaja. Esiintyy kaikenlaisissa metsissä, saaristossa ja kaupungeissa. Suomen kannaksi arvioitu 100.000–120.000 paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/12371.jpg"
    },
    {
      "name": "Käpytikka",
      "text": "Mustavalkoinen tikka, alaperä tummanpunainen. Muistuttaa valkoselkätikkaa, mutta selkä musta, alapuoli juovaton. Hartialaikut valkeat. Naaraalla päälaki musta, koiraalla niskassa punaista ja nuorella linnulla päälaki punainen.",
      "size": "Pituus 23–26 cm, siipien kärkiväli 38–44 cm, paino \n70–105 g.",
      "levinneisyys": "Yleisin tikkalajimme. Pesii kaikenlaisissa metsissä. Suomen pesimäkannaksi arvioitu 300.000–700.000 paria.",
      "endanger": "Elinvoimainen, rauhoitettu.",
      "url": "http://www.luontoportti.com/suomi/images/15368.jpg"
    }
  ],
  insects: [
      {
        name: 'Nurmiheinäsirkka',
        text: 'Nurmiheinäsirkka (Chorthippus parallelus) on yleinen, Suomessa tavattava heinäsirkkalaji. Lajin lähisukuun kuuluvat esimerkiksi keto- ja nevaheinäsirkat. Sen tunnistaa 1–3 sekuntia kestävistä lyhyistä sirityssarjoista. Useimmista muista heinäsirkkalajeista poiketen nurmiheinäsirkka sirittää vielä hämärän aikaan.',
        size: 'Nurmiheinäsirkka on yleensä vihreän ja mustan kirjava pienikokoinen heinäsirkka. Keskiruumiin selkäpuolella ei ole monilla muilla heinäsirkkalajeilla esiintyvää tiimalasikuviota mutta selkäpuolen väri eroaa usein kylkien väristä. Koirailla, jotka ovat selvästi naaraita pienikokoisempia, on ruskeansävyiset siivet, jotka kuitenkin näyttävät yleensä hieman liian pieniltä eläimen kokoon nähden. Naarasyksilöiden siivet ovat selvästi surkastuneet ja yltävät yleensä korkeintaan takaruumiin puoliväliin saakka.',
        endanger: 'Nurmiheinäsirkka esiintyy suurimmassa osassa Suomea, mutta harvinaistuu pohjoista kohti. Lajin levinneisyysalue jatkuu pitkälle Aasiaan. Laji on runsaslukuinen kosteissa heinikoissa, mutta esiintyy harvakseltaan myös kuivemmilla paikoilla.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Chorthippus_parallelus.jpg',
      },
      {
        name: 'Lapintorakka',
        text: 'Lapintorakka on metsätorakan ohella toinen Suomen luonnonvaraisesista torakkalajeista. Se on harmiton, hyönteinen, joka elää karikkeessa, sammalikossa ja metsänreunojen matalassa kasvillisuudessa. Lapintorakat ovat liikkeellä lähinnä öisin ja tulevat joskus seinämille pihavalojen luo.',
        size: 'Muiden torakoiden tapaan lapintorakalla on pitkät tuntosarvet ja piikikkäät raajat. Vain koiraat ovat lentokykyisiä, naaraiden siivet ovat surkastuneet tynkämäisiksi.  Lapintorakan keskiruumis on lähes kokonaan tummanruskea eikä sen takaosassa ole leveää vaaleaa raitaa metsätorakan tapaan.',
        endanger: '',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Ectobius_lapponicus_a1.jpg'
      },
      {
        name: 'Vesimittari',
        text: 'Vesimittarit pystyvät liikkumaan veden pinnalla käyttäen pintajännitystä hyväkseen. Tämän mahdollistaa vesimittarien jalkojen erikoinen rakenne; nilkkojen kärjissä on vettä hylkiviä karvoja ja kynnet ovat jalkojen kärkiosien sivuilla. Liikkuminen tapahtuu keski- ja takajaloilla. Vesimittareilla on jaloissaan värähtelyaisti, jonka avulla ne kykenevät paikantamaan saaliinsa veden värähtelyjen perusteella. Värähtelyaistia käytetään myös kumppanin etsintään. Vesimittarit pystyvät värisyttämään veden pintaa merkiksi vastakkaisen sukupuolen edustajille. Pitkien keski- ja takajalkojensa työntäminä vesimittarit luistelevat rytmikkäin potkuin kovaa vauhtia eteenpäin.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Aquarius_najas01.jpg'
      },
      {
        name: 'Kirvat',
        text: 'Kirvat (Aphididae) eli lehtikirvat ovat yläheimoon Aphidoidea kuuluvia pieniä, vain muutaman millimetrin kokoisia pehmeäruumiisia hyönteisiä, jotka elävät imemällä kasvien solunesteitä. Maailmanlaajuisesti lajeja tunnetaan noin 4400.',
        size: 'Tavallisimmin kirvat ovat väriltään vihreitä, mutta myös mustia ja jopa punaisia lajeja löytyy. Tuntosarvet ovat pitkät. Siipien olemassaolo vaihtelee sukupolvittain ja siipisuonituksen rakenne erottaa kirvat helposti monista samantapaisista hyönteisryhmistä. Erityisen tärkeä tuntomerkki ovat kuitenkin kaksi selvästi erottuvaa putkea, jotka sijaitsevat hyönteisen selkäpuolella ruumiin takaosassa. Suuosat ovat imevät ja ruokaillessaan kirva työntää imukärsänsä syvälle kasvin johtosolukkoon.',
        endanger: 'Vuoden 2010 kansallisen uhanalaisarvioinnin mukaan Suomessa elää 479 eri kirvalajia. Näistä Suomen punaisen listan lajeja on 107.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Aphididae_%28aka%29.jpg'
      },
      {
        name: 'Rantakorento',
        text: 'Rantakorennot ovat ainoa verkkosiipisten ryhmä, jonka toukat elävät vedessä. Naaras laskee munat vesikasveille lähelle veden pintaa. Edellytyksenä munimispaikalle on makean veden alue, jossa kasvaa sieni- ja sammaleläimiä, joita toukat käyttävät ravinnokseen. Toukka hengittää kiduksilla ja sillä on erikoiset, pistinmäiset suuosat, joilla se imee ravintoa sienieläinkasvustoista. Toukka koteloituu kuivalle maalle.',
        size: 'Rantakorennot ovat 6–8 mm pituisia hyönteisiä, joilla on hoikka vartalo ja verraten suuret siivet. Ne muistuttavat ulkonäöltään ja olemukseltaan suuresti kirvakorentoja, mutta eroavat näistä siipisuonituksen perusteella. Aikuiset korennot liikkuvat hämärän aikaan tai öisin ja syövät niin kukkien mettä kuin toisia hyönteisiäkin.',
        endanger: 'Suomesta on tavattu kolme rantakorentolajia. Mikään niistä ei vuoden 2010 kansallisen uhanalaisarvioinnin mukaan ole uhanalainen, mutta yksi laji on luokiteltu puutteellisesti tunnetuksi.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Sisyra_terminalis.jpg'
      },
      {
        name: 'Lumikorento',
        text: 'Lumikorento on pienikokoinen, kärsäkorentojen lahkoon kuuluva lentokyvytön ja psykrofiilinen (kylmää sietävä) hyönteislaji. Se on vähälajisen lumikorentojen heimon ainoa edustaja Suomessa. Nimensä mukaisesti sen voi tavata esimerkiksi keväthangilta. ',
        size: 'Lumikorento on 3–4 mm:n pituinen, hoikkaruumiinen ja kiiltäväpintainen, väritykseltään enimmäkseen musta hyönteinen. Lentämiseen sopivia siipiä ei ole, mutta koirasyksilöillä on kaarevat siiventyngät, jotka ilmeisesti toimivat apuna parittelussa. Tuntosarvet ovat pitkät ja pään etuosa on kärsäkorennoille tyypilliseen tapaan venynyt pitkäksi, alaspäin osoittavaksi "kärsäksi".',
        endanger: 'Suomessa lajia tavataan koko maassa.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Boreus_westwoodi_01.JPG'
      },
      {
        name: 'Ritariperhonen',
        text: 'Ritariperhonen on apollo- ja ritariperhosten heimoon kuuluva päiväperhoslaji. Ritariperhosta tavataan vuoristoisilla alueilla ja rannikkoseuduilla. Sen tyypillisimpiä elinympäristöjä ovat kosteikot, kukkaniityt, metsänreunat ja suot. ',
        size: 'Ritariperhosen siipien kärkiväli on 7,6–9,3 cm. Yläpuolelta se on pääasiassa keltaisen ja mustan kirjava. Takasiivissä on myös sinistä ja punaiset täplät. Pitkät kapeat kannukset takaosassa ovat ritariperhoselle ja sen lähisukulaisille tunnusomaiset. Kotelovaiheessa ritariperhonen näyttää käpristyneeltä lehdeltä.',
        endanger: 'Ritariperhonen on jokseenkin harvinainen koko maassa esiintyvä laji. Parhaiten Etelä- ja Keski-Suomessa, Metsä-Lapissa harvinainen ja Tunturi-Lapista on taas enemmän havaintoja, mikä voisi viitata siihen että sinne perhoset tulevat Norjan rannikolta.',
        url: 'http://www.luontoportti.com/suomi/images/9299.jpg'
      },
      {
        name: 'Nokkosperhonen',
        text: 'Aikuisena perhosena talvehtiva nokkosperhonen kuuluu maassamme kevään ensimmäisiin päiväperhosiin. Koiraat odottavat naaraita metsien laitamilla, missä ne puolustavat reviirejään. Nokkosperhoselle tyypillinen ympäristö ovat niityt ja hakamaat sekä avoimet metsät, pihat ja puutarhat ja yleensäkin kulttuuriympäristö.',
        size: 'Nokkosperhonen on keskikokoinen noin 40–52 mm. Naaraat ovat koiraita kookkaampia. Siipien yläpinta sillä on tiilenpunainen, etusiiven etureunassa rivi mustia ja vaaleankeltaisia täpliä, ulommainen vaalea täplä on valkoinen. Etusiiven takareunassa suuri tumma laikku ja kaksi pienempää täplää keskellä. Takasiiven tyvipuoli musta. Molempien siipien reunoilla rivi mustareunaisia sinisiä kaaria.',
        endanger: 'Nokkosperhonen on ollut pitkään eräs Suomen yleisimmistä päiväperhosista, mutta sillä oli 1990-luvulta 2000-luvun alkupuolelle voimakas kannan taantuma. Useilla paikoilla, varsinkin Etelä-Suomessa. Lajin kanta on jälleen elpynyt lähes ennalleen.',
        url: 'http://www.luontoportti.com/suomi/images/13290.jpg'
      },
      {
        name: 'Amiraaliperhonen',
        text: 'Amiraali elää kulttuuriympäristöissä, pihapiireissä, puutarhoissa ja joutomailla. Keväällä ensimmäisen sukupolven naaraat munivat munat, jotka kesän aikana kehittyvät toukiksi, koteloituvat ja kuoriutuvat kesällä toisen sukupolven aikuisina. Amiraalin toukat syövät nokkosta. Aikuinen yksilö syö kukkien mettä, esimerkiksi pietaryrtin ja ohdakkeiden kukat vetävät niitä puoleensa. Amiraalit saattavat myös syödä puiden mahlaa tai mädänneiden hedelmien käynyttä mehua.',
        size: 'Amiraalin siipien kärkiväli on noin 5–6 cm. Amiraali on yläpuolelta huomiota herättävä perhonen, taustaväri on musta, jossa on oransseja nauhoja ja valkoisia täpliä. Alapuolelta lajin siivet ovat harmaan, ruskean ja sinisen kirjomat. Takasiipien alapinnalla on kuviointi, joka näyttää numeroilta 980 tai 986. Lennossa laji näyttää mustalta.',
        endanger: 'Suomessa ja muualla Pohjois-Euroopassa amiraali on joko ilmavirtojen mukana saapuva vaeltaja tai kesäviipyjä, jolloin alkukesästä sapuneet perhoset lisääntyvät ja myöhemmin kesällä lentävät perhoset ovat täällä syntyneitä.',
        url: 'http://www.luontoportti.com/suomi/images/16098.jpg'
      },
      {
        name: 'Hyttyset',
        text: 'Suomessa on toistaiseksi tavattu noin neljääkymmentä eri hyttyslajia. Tunnettuja, Suomessakin tavattavia lajeja ovat muun muassa metsähyttynen, jänkähyttynen ja lehtohyttynen. Useimpien lajien naaraat imevät imukärsällään verta muista eläimistä. Hyttyset etsivät uhrinsa hengityksen hiilidioksidin, ihon lämmön ja tuoksun perusteella. Alkukesän lämpö ja kosteus lisäävät hyttysten määrää.',
        size: 'Hyttysten koko vaihtelee, mutta ne ovat harvoin yli 16 millimetriä pitkiä. Useimmat hyttyset painavat alle 2,5 milligrammaa, mutta suurimmat lajit ovat jopa 10 milligramman painoisia. Useimpien muiden kaksisiipisten tapaan hyttyset ovat lentäviä hyönteisiä, joilla on kaksi siipeä, väristinpari, solakka vartalo ja pitkät jalat.',
        endanger: 'Useimmat kotiympäristössä tavattavat hyttyset eivät lennä yli sadan metrin matkoja, mutta hyödyntämällä ilmavirtauksia tietyt hyttyslajit voivat vaeltaa kymmenien kilometrien päähän synnyinseudultaan.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Aedes_aegypti_biting_human.jpg'
      },
      {
        name: 'Mehiläiset',
        text: 'Mehiläinen on yhteiskuntahyönteinen, jolla on neljä siipeä. Yhteiskunta muodostuu yhdestä kuningattaresta, lähes sadasta kuhnurista (koiras) sekä noin 50 000 työmehiläisestä. Kaikki mehiläiset eivät elä parvissa, vaan niistä osa on erakkoja. Kotimaisia mehiläislajeja ovat maamehiläinen, tuhtimehiläinen, sarvimehiläinen, verhoilijamehiläinen ja kesy- eli tarhamehiläinen.',
        size: 'Mehiläinen on 10 - 20 mm pitkä ja sillä on karvainen ja keltamustajuovikas ruumis. Naaraalla on myrkkypistin, jolla se voi tarvittaessa puolustautua.',
        endanger: 'Mesipistiäisiä on Suomessa noin 220 lajia, joista 25 on kimalaisia ja loput mehiläisiä. Villimehiläisen pesä sijaitsee puussa tai onkalossa. maamehiläisten pesä sijaitsee hiekkaisessa maassa ja verhoilijamehiläiset puolestaan leikkaavat kasvien lehdistä palasia, jotka viedään pesään. Työmehiläiset rakentavat pesään kuusikulmaisia kammioita ja tekevät niistä kennolevyjä. ',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Apis_mellifera_carnica_worker_hive_entrance_3.jpg/1920px-Apis_mellifera_carnica_worker_hive_entrance_3.jpg'
      },
      {
        name: 'Leppäkerttu',
        text: 'Leppäkertut eli leppäpirkot on kovakuoriaisheimo. Nimi leppäkerttu viittaa hyönteisen verenpunaiseen väriin. Sana leppä merkitsi verta vanhoissa itämerensuomalaisissa kielissä. Melkein kaikki leppäkertut, kuten niiden toukatkin, ovat petoja. Kirvat muodostavat niiden ravinnosta pääosan. Joskus toukat voivat syödä jopa lajitoverinsa.',
        size: 'Leppäkertut ovat puolipallonmuotoisia ja hidasliikkeisiä vajaan 10 mm:n pituisia hyönteisiä. Niiden peitinsiivet ovat usein pilkulliset, ja pilkkujen määrä ja väritys vaihtelevat lajikohtaisesti. Kirkkaalla värillään ne varoittavat muita petoja pahanmakuisuudestaan.',
        endanger: 'Suomessa leppäkerttulajeja on runsaat 60, joista useimmat syövät kirvoja, kilpikirvoja tai punkkeja ja ovat siten hyödyllisiä sekä viljelijöille että muutenkin kasvustolle.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Coccinella_septempunctata_detail.jpg'
      },
      {
        name: 'Metsäsittiäinen',
        text: 'Metsäsittiäinen on lehtisarvisten heimoon ja sittiäisiin kuuluva kovakuoriaislaji. Metsäsittiäisen tapaa useimmiten polulta, jossa se etenee verkkaisesti etsien metsäneläinten lantaa, raatoja tai lahoavaa kasviainesta. Myös sienet kelpaavat. Sittiäinen kaivaa maahan kolon, johon se varastoi löytämänsä ravinnon.',
        size: 'Metsäsittiäinen on kiiltävän sinimusta kuoriainen, jonka vatsapuoli on yleensä melkein sininen tai violetti. Peitinsiivet ovat melko sileät, uurteet ovat matalia. Koko 13-20 mm. Suuret metsäsittiäiset muistuttavat sontiaista, jonka peitinsiivet ovat uurteisemmat ja synkemmän mustat.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Anoplotrupes.stercorosus.jpg'
      },
      {
        name: 'Sulkakoipikorento',
        text: 'Sulkakoipikorento vaatii elinpaikaltaan virtaavaa vettä. Tyypillisimmin sen löytää hitaasti virtaavan joen varrelta, mutta myös purot käyvät. Korennot oleskelevat lähellä rantaa mutta saattavat myös vaeltaa, jolloin niitä tavataan kauempana vesistöistä. Sopivalla paikalla laji on runsaslukuinen ja korentoja voi tavata jopa sadoittain',
        size: 'Hoikkaruumiinen korento, jota erehtyy helposti pitämään jonakin tytönkorentona. Koiras on vaihtelevan sinisensävyinen ja siinä on mustia kirjailuja. Naaraan pohjaväri on kellanruskea. Nuoret korennot ovat lähes valkoisia, kunnes niiden väri on kehittynyt. Keskiruumiin selkä on musta ja kummallakin puolella on kaksi vaaleaa pitkittäisjuovaa, joista toinen jakaa korennon "hartialla" olevan mustan alueen hieman Y-kirjainta muistuttavaan muotoon. Sulkakoipikorennon paras tuntomerkki on leventyneet sääret ja jalan reunan karvoitus, joka muistuttaa sulkaa. Takaruumiin pituus 27-30 mm, takasiipi 19-24 mm.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Platycnemis_pennipes_1%28loz%29.JPG'
      },
      {
        name: 'Sokerimuurahainen',
        text: 'Mauriainen eli sokerimuurahainen on pieni ja musta muurahaislaji. Sokerimuurahainen tunkeutuu yleisesti ihmisasumuksiin. Sitä löydetään monesti keittiöstä, ruokakaapeista tai -varastoista. Se on perso makealle. Pihalla se viihtyy laatoitusten alla ja kivijalan vieressä tai kukkapenkissä. Laji kelpaa hyvin muurahaisterraarioon; se kaivaa tunneleita ja syö sokeria.',
        size: 'Pää ja takaruumis ovat mustanruskeita. Keskiruumis ja tuntosarvet sekä jalat hieman vaaleamman ruskeat. Työläisen koko on 2-5 mm. ',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/IC_Lasius_with_chelicerae.JPG'
      }
  ]
};

export default list;