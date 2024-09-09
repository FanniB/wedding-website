const translations = {
    hu: [
         {
            name: "wedding-date-text",
            value: "2025 Április 20, 16:00"
        },
        {
            name: "rsvp-text",
            value: "Kedves Barátaink, Családtagjaink!<br><br>\n" +
                "\t\t\t\t\t\t<p>Örömmel hívunk meg benneteket az esküvőnkre, amely 2025. április 20-án lesz Ráckevén. Minden\n" +
                "\t\t\t\t\t\t\tfontos információt, frissítést és programot itt, ezen a weboldalon fogunk közzétenni. Az\n" +
                "\t\t\t\t\t\t\talábbiakban megtaláljátok az RSVP űrlap linkjét, kérjük, töltsétek ki, hogy pontos\n" +
                "\t\t\t\t\t\t\tlétszámmal\n" +
                "\t\t\t\t\t\t\ttudjunk tervezni, és jelezzétek, ha +1 fővel vagy gyerekekkel érkeztek. Kérjük, itt\n" +
                "\t\t\t\t\t\t\tjelezzétek\n" +
                "\t\t\t\t\t\t\tazt is, ha szükségetek van szállásra az éjszakára. Ezen kívül letölthetitek a \"save the\n" +
                "\t\t\t\t\t\t\tdate\"\n" +
                "\t\t\t\t\t\t\tnaptárfájlt is, hogy elmentsétek a dátumot a saját naptárotokba. </p>\n" +
                "\t\t\t\t\t\t\t<p id=\"paragraph\">This is a simple website with a language toggle feature.</p>"
        },
        {
            name: "respond-text",
            value: "RSVP - visszajelzés"
        },
        {
            name: "save-the-date-text",
            value: "Save the date"
        },
        {
            name: "location-text",
            value: "Helyszín"
        },
        {
            name: "hotel-info-text",
            value: "<h2>Session Hotel Ráckeve</h2>\n" +
                "\n" +
                "\n" +
                "\n" +
                "\t\t\t\t\t<span class=\"megkozelites\"> Ráckeve, Termál sétány 1, 2300 Hungary\n" +
                "\n" +
                "\t\t\t\t\t\t<br><br>\n" +
                "\t\t\t\t\t\t<u>Autóval:</u><br>\n" +
                "\t\t\t\t\t\tÉszakról Budapest érintésével lehet Ráckevét elérni.\n" +
                "\t\t\t\t\t\tAz M0 körgyűrűről Szigetszentmiklós vagy Halászteleknél letérni, majd a Csepel-szigeti úton\n" +
                "\t\t\t\t\t\tvégighaladva Szigetszentmiklós/Halásztelek – Tököl – Szigetcsép – Szigetszentmárton – Ráckeve\n" +
                "\t\t\t\t\t\tútvonalon, vagy az 51-es műútról Kiskunlacházánál Ráckeve felé a peregi elágazásnál.<br>\n" +
                "\t\t\t\t\t\t<br>\n" +
                "\t\t\t\t\t\tRáckeve nyugat felől a Dunán keresztül több irányból közelíthető meg:\n" +
                "\t\t\t\t\t\tAdonyi, Lórévi, Százhalombattai vagy Ercsi komppal\n" +
                "\t\t\t\t\t\tmajd az 51-es, vagy a Csepel-szigeten belül vezető úton keresztül\n" +
                "\t\t\t\t\t\tDélről a 6-os és a Dunaföldvári Hídon át az 51-es főúton<br>\n" +
                "\t\t\t\t\t\t<br>\n" +
                "\t\t\t\t\t\tKelet felől a 4-es, majd az 51-es főúton át, illetve a 3-as főútról.<br>\n" +
                "\t\t\t\t\t\t<br>\n" +
                "\t\t\t\t\t\t<u>Tömegközlekedéssel:</u><br>\n" +
                "\t\t\t\t\t\tVárosunkat a Volánbusz és a HÉV menetrendszerinti járataival egyaránt elérheti.\n" +
                "\t\t\t\t\t\tA ráckevei HÉV-vel érkezve, a végállomásától Budapest irányába 200 m séta után jobbra fordulva.\n" +
                "\t\t\t\t\t\tMenetrendszerinti Volán járattal (Budapest, Csepel, Vermes Miklós utcai végállomás irányából) a\n" +
                "\t\t\t\t\t\tHÉV végállomásnál leszállva, Budapest irányába 200 m séta után jobbra fordulva. Budapest\n" +
                "\t\t\t\t\t\tNépliget Autóbusz-végállomás irányából Ráckeve városközpontban leszállva, vagy gyalogosan\n" +
                "\t\t\t\t\t\tsétálva Budapest irányába (kb. 1500 méter), vagy helyi Volánbusz járatra átszállva a HÉV\n" +
                "\t\t\t\t\t\tvégállomásig.\n" +
                "\t\t\t\t\t</span>\n" +
                "\n"
        },
    ],
    en: [
        {
            name: "wedding-date-text",
            value: "2025 April 20, 16:00"
        },
        {
            name: "rsvp-text",
            value: "RSVP text in english"
        },
        {
            name: "respond-text",
            value: "RSVP - respond"
        },
        {
            name: "save-the-date-text",
            value: "Save the date"
        },
        {
            name: "location-text",
            value: "Location"
        },
        {
            name: "hotel-info-text",
            value: "Hotel info in english"
        },
    ]
};
// Set default language based on the user's browser language or fallback to English
const defaultLanguage = navigator.language.startsWith('hu') ? 'hu' : 'en';
setLanguage(defaultLanguage);

// Function to set the language
function setLanguage(language) {
    localStorage.setItem('language', language);

    const elementsToTranslate = document.querySelectorAll("[id$=text]");
    // Loop through each translatable element and update text
    elementsToTranslate.forEach(el => {
        const element = translations[language].find(it => it.name===el.id)

        el.innerHTML = element.value;
    });
}

// Load saved language preference when page loads
window.onload = () => {
    const savedLanguage = localStorage.getItem('language') || defaultLanguage;
    setLanguage(savedLanguage);
};