# Koncept – Femina Slovakia, železiarstvo Dopravná 5 Topoľčany

## Tři koncepty
1. **Priehradkový regál** – web je stěna skladových přihrádek se štítky (kód přihrádky, skupina, rozměr), jak ji zná každý, kdo kupuje šrouby na kusy; přihrádka se vysune a ukáže, co v ní je.
2. **Dodací list** – celý web jako firemní dodací list / objednávkový lístek s řádky, množstvím a razítkem; míří na velkoobchod a firmy z průmyslové zóny.
3. **Katalog s kótami** – starý železářský katalog s perokresbami šroubu, hmoždinky a kolečka s kótami (M8 × 60), číslované položky jako v ceníku.

## Výběr: 1 + nákupní lístek ze 2
Priehradkový regál je předmět, který patří jen železářství, a unese i to, že máme jen jednu fotku
(regál fischer + kolečka). Sortiment se v regálu dá doplňovat z `_data/regal.json` bez přestavby.
Z konceptu 2 bereme jen jednu věc: **nákupní lístek** (řádky položka / rozměr / ks), který odejde
předajni – užitečné pro firmy (velkoobchod) i domácnosti, které chtějí mít věci připravené.
Koncept 3 by potřeboval technické kresby skutečného sortimentu, který neznáme.

## Skladba
1. Hlavička: název FEMINA textem (logo nemá) + „železiarstvo · Topoľčany“, navigace Sortiment / Pre firmy / Prenájom / Kontakt, telefon vpravo.
2. Úvod: vlevo h1 „Železiarstvo na Dopravnej“, věta o maloobchodu i velkoobchodu, štítek s otevírací dobou a telefonem; vpravo jejich fotka regálu na výšku (3:4, nezvětšená).
3. **Signature 1 – Regál:** mřížka přihrádek se štítky (kód A1…C3, skupina); klik/Enter vysune přihrádku a vpravo se otevře její obsah. Neznámý sortiment = přihrádky se štítkem „doplníme“.
4. Pre firmy a remeselníkov: tmavší plocha z oceli, krátký text o velkoobchodu + **Signature 2 – nákupný lístok** (řádky, přidat řádek, poslat), v návrhu ukázkový režim.
5. Prenájom priestorov: pruh s odkazem na podstránku /prenajom/ (stejný areál Dopravná 5).
6. Návšteva: adresa, otevírací doba, telefony, mapa (odkaz na Google Maps + statická mapa OSM není potřeba – jen odkaz a orientace „priemyselná zóna, Dopravná ulica“).
7. Patička: údaje firmy z RPO.

Podstránka /prenajom/: úvod, tři přihrádky-karty „Priestor 1–3 – doplníme typ, výmeru, cenu“, poptávkový formulář prenájmu.

## Písma, barvy, fotky
- Schibsted Grotesk 500/600 (nadpisy, text) + IBM Plex Mono 400/500 jen na štítky přihrádek a kódy (koncept štítků). Test diakritiky SK (ľ ĺ ť ď ô ä ŕ) prošel 19. 10.
- Brand klient nemá → vlastní paleta „pozinkovaná oceľ + žlutý štítek“: pozadí #F1F1EE, ocel #C9CDCF, text #16181B, tmavá ocel #23292E, akcent signální žlutá #F3BE1E (jen plochy štítků, nikdy text), odkazy #16181B podtržené. Červenou fischer nebereme (je to značka dodavatele).
- Fotka: jediná skutečná (regál fischer z Google Maps). Žádný stock s cizími cedulemi. V `chybi` žádost o fotky predajne.

## Zakázané vzory
- Žádný marquee, zrno, countery, nadtitulky 01/——, pilulková navigace.
- Mono písmo použito, ale jen jako štítky přihrádek (kódy jsou součást konceptu, ne dekorace nadpisů).
- Kódy A1–C3 nejsou číslování služeb – jsou to adresy přihrádek v regálu.

## Porovnání
- Posledních 5 v registru: Bodoni Moda (Metelka), Bricolage 800 (breu), Playfair (Engadin 4), Young Serif (Engadin 2), Jost (dveře), Oswald (Stabau) → Schibsted Grotesk se neopakuje.
- Skladba (úvod s fotkou → interaktivní regál → lístek → prenájom → návšteva) se neshoduje s posledními weby.
- Odmítnuté: žádný tmavý luxus, žádné obdélníčky bez nápadu – regál je konkrétní předmět, ne karty s ikonami.
- Schválené: princip Parolek (předmět z oboru + doložená fakta), Kovovýroba (katalog).
