const paysData = {
    "ae": { nom: "Émirats arabes unis", nom_en: "United Arab Emirates", nom_ar: "الإمارات العربية المتحدة", population: "9 900 000", superficie: "83 600", gouvernement: "Fédération de monarchies", capitale: "Abou Dabi", monnaie: "Dirham" },
    "af": { nom: "Afghanistan", nom_en: "Afghanistan", nom_ar: "أفغانستان", population: "40 100 000", superficie: "652 230", gouvernement: "République islamique", capitale: "Kaboul", monnaie: "Afghani" },
    "al": { nom: "Albanie", nom_en: "Albania", nom_ar: "ألبانيا", population: "2 845 000", superficie: "28 748", gouvernement: "République parlementaire", capitale: "Tirana", monnaie: "Lek" },
    "am": { nom: "Arménie", nom_en: "Armenia", nom_ar: "أرمينيا", population: "2 900 000", superficie: "29 743", gouvernement: "République parlementaire", capitale: "Erevan", monnaie: "Dram" },
    "ao": { nom: "Angola", nom_en: "Angola", nom_ar: "أنغولا", population: "34 500 000", superficie: "1 246 700", gouvernement: "République présidentielle", capitale: "Luanda", monnaie: "Kwanza" },
    "ar": { nom: "Argentine", nom_en: "Argentina", nom_ar: "الأرجنتين", population: "46 000 000", superficie: "2 780 400", gouvernement: "République fédérale", capitale: "Buenos Aires", monnaie: "Peso argentin" },
    "at": { nom: "Autriche", nom_en: "Austria", nom_ar: "النمسا", population: "9 000 000", superficie: "83 879", gouvernement: "République fédérale", capitale: "Vienne", monnaie: "Euro" },
    "au": { nom: "Australie", nom_en: "Australia", nom_ar: "أستراليا", population: "26 000 000", superficie: "7 692 024", gouvernement: "Monarchie constitutionnelle", capitale: "Canberra", monnaie: "Dollar australien" },
    "az": { nom: "Azerbaïdjan", nom_en: "Azerbaijan", nom_ar: "أذربيجان", population: "10 100 000", superficie: "86 600", gouvernement: "République présidentielle", capitale: "Bakou", monnaie: "Manat" },
    "ba": { nom: "Bosnie-Herzégovine", nom_en: "Bosnia and Herzegovina", nom_ar: "البوسنة والهرسك", population: "3 280 000", superficie: "51 129", gouvernement: "République fédérale", capitale: "Sarajevo", monnaie: "Mark convertible" },
    "bd": { nom: "Bangladesh", nom_en: "Bangladesh", nom_ar: "بنغلاديش", population: "170 000 000", superficie: "147 570", gouvernement: "République parlementaire", capitale: "Dacca", monnaie: "Taka" },
    "be": { nom: "Belgique", nom_en: "Belgium", nom_ar: "بلجيكا", population: "11 560 000", superficie: "30 528", gouvernement: "Monarchie constitutionnelle", capitale: "Bruxelles", monnaie: "Euro" },
    "bf": { nom: "Burkina Faso", nom_en: "Burkina Faso", nom_ar: "بوركينا فاسو", population: "22 100 000", superficie: "274 200", gouvernement: "République", capitale: "Ouagadougou", monnaie: "Franc CFA" },
    "bg": { nom: "Bulgarie", nom_en: "Bulgaria", nom_ar: "بلغاريا", population: "6 900 000", superficie: "110 912", gouvernement: "République parlementaire", capitale: "Sofia", monnaie: "Lev" },
    "bi": { nom: "Burundi", nom_en: "Burundi", nom_ar: "بوروندي", population: "12 600 000", superficie: "27 834", gouvernement: "République présidentielle", capitale: "Gitega", monnaie: "Franc burundais" },
    "bj": { nom: "Bénin", nom_en: "Benin", nom_ar: "بنين", population: "13 000 000", superficie: "112 622", gouvernement: "République présidentielle", capitale: "Porto-Novo", monnaie: "Franc CFA" },
    "bn": { nom: "Brunei", nom_en: "Brunei", nom_ar: "بروناي", population: "450 000", superficie: "5 765", gouvernement: "Monarchie absolue", capitale: "Bandar Seri Begawan", monnaie: "Dollar de Brunei" },
    "bo": { nom: "Bolivie", nom_en: "Bolivia", nom_ar: "بوليفيا", population: "12 000 000", superficie: "1 098 581", gouvernement: "République présidentielle", capitale: "Sucre", monnaie: "Boliviano" },
    "br": { nom: "Brésil", nom_en: "Brazil", nom_ar: "البرازيل", population: "215 000 000", superficie: "8 515 767", gouvernement: "République fédérale", capitale: "Brasília", monnaie: "Réal brésilien" },
    "bs": { nom: "Bahamas", nom_en: "Bahamas", nom_ar: "الباهاما", population: "400 000", superficie: "13 943", gouvernement: "Monarchie constitutionnelle", capitale: "Nassau", monnaie: "Dollar bahaméen" },
    "bt": { nom: "Bhoutan", nom_en: "Bhutan", nom_ar: "بوتان", population: "780 000", superficie: "38 394", gouvernement: "Monarchie constitutionnelle", capitale: "Thimphou", monnaie: "Ngultrum" },
    "bw": { nom: "Botswana", nom_en: "Botswana", nom_ar: "بوتسوانا", population: "2 400 000", superficie: "581 730", gouvernement: "République parlementaire", capitale: "Gaborone", monnaie: "Pula" },
    "by": { nom: "Biélorussie", nom_en: "Belarus", nom_ar: "بيلاروسيا", population: "9 350 000", superficie: "207 600", gouvernement: "République présidentielle", capitale: "Minsk", monnaie: "Rouble biélorusse" },
    "bz": { nom: "Belize", nom_en: "Belize", nom_ar: "بليز", population: "400 000", superficie: "22 966", gouvernement: "Monarchie constitutionnelle", capitale: "Belmopan", monnaie: "Dollar de Belize" },
    "ca": { nom: "Canada", nom_en: "Canada", nom_ar: "كندا", population: "39 000 000", superficie: "9 984 670", gouvernement: "Monarchie constitutionnelle", capitale: "Ottawa", monnaie: "Dollar canadien" },
    "cd": { nom: "Rép. dém. du Congo", nom_en: "DR Congo", nom_ar: "جمهورية الكونغو الديمقراطية", population: "100 000 000", superficie: "2 344 858", gouvernement: "République semi-présidentielle", capitale: "Kinshasa", monnaie: "Franc congolais" },
    "cf": { nom: "Centrafrique", nom_en: "Central African Republic", nom_ar: "جمهورية أفريقيا الوسطى", population: "5 500 000", superficie: "622 984", gouvernement: "République présidentielle", capitale: "Bangui", monnaie: "Franc CFA" },
    "cg": { nom: "Congo", nom_en: "Congo", nom_ar: "الكونغو", population: "5 800 000", superficie: "342 000", gouvernement: "République présidentielle", capitale: "Brazzaville", monnaie: "Franc CFA" },
    "ch": { nom: "Suisse", nom_en: "Switzerland", nom_ar: "سويسرا", population: "8 700 000", superficie: "41 285", gouvernement: "République fédérale", capitale: "Berne", monnaie: "Franc suisse" },
    "ci": { nom: "Côte d'Ivoire", nom_en: "Ivory Coast", nom_ar: "ساحل العاج", population: "28 000 000", superficie: "322 463", gouvernement: "République présidentielle", capitale: "Yamoussoukro", monnaie: "Franc CFA" },
    "cl": { nom: "Chili", nom_en: "Chile", nom_ar: "تشيلي", population: "19 500 000", superficie: "756 102", gouvernement: "République présidentielle", capitale: "Santiago", monnaie: "Peso chilien" },
    "cm": { nom: "Cameroun", nom_en: "Cameroon", nom_ar: "الكاميرون", population: "27 200 000", superficie: "475 442", gouvernement: "République présidentielle", capitale: "Yaoundé", monnaie: "Franc CFA" },
    "cn": { nom: "Chine", nom_en: "China", nom_ar: "الصين", population: "1 412 000 000", superficie: "9 596 961", gouvernement: "République socialiste", capitale: "Pékin", monnaie: "Yuan renminbi" },
    "co": { nom: "Colombie", nom_en: "Colombia", nom_ar: "كولومبيا", population: "51 800 000", superficie: "1 141 748", gouvernement: "République présidentielle", capitale: "Bogota", monnaie: "Peso colombien" },
    "cr": { nom: "Costa Rica", nom_en: "Costa Rica", nom_ar: "كوستاريكا", population: "5 200 000", superficie: "51 100", gouvernement: "République présidentielle", capitale: "San José", monnaie: "Colón" },
    "cu": { nom: "Cuba", nom_en: "Cuba", nom_ar: "كوبا", population: "11 100 000", superficie: "109 884", gouvernement: "République socialiste", capitale: "La Havane", monnaie: "Peso cubain" },
    "cv": { nom: "Cap-Vert", nom_en: "Cape Verde", nom_ar: "الرأس الأخضر", population: "590 000", superficie: "4 033", gouvernement: "République semi-présidentielle", capitale: "Praia", monnaie: "Escudo cap-verdien" },
    "cy": { nom: "Chypre", nom_en: "Cyprus", nom_ar: "قبرص", population: "1 200 000", superficie: "9 251", gouvernement: "République présidentielle", capitale: "Nicosie", monnaie: "Euro" },
    "cz": { nom: "Tchéquie", nom_en: "Czech Republic", nom_ar: "التشيك", population: "10 700 000", superficie: "78 867", gouvernement: "République parlementaire", capitale: "Prague", monnaie: "Couronne tchèque" },
    "de": { nom: "Allemagne", nom_en: "Germany", nom_ar: "ألمانيا", population: "83 200 000", superficie: "357 386", gouvernement: "République fédérale", capitale: "Berlin", monnaie: "Euro" },
    "dj": { nom: "Djibouti", nom_en: "Djibouti", nom_ar: "جيبوتي", population: "1 000 000", superficie: "23 200", gouvernement: "République présidentielle", capitale: "Djibouti", monnaie: "Franc djiboutien" },
    "dk": { nom: "Danemark", nom_en: "Denmark", nom_ar: "الدنمارك", population: "5 850 000", superficie: "42 933", gouvernement: "Monarchie constitutionnelle", capitale: "Copenhague", monnaie: "Couronne danoise" },
    "dm": { nom: "Dominique", nom_en: "Dominica", nom_ar: "دومينيكا", population: "72 000", superficie: "751", gouvernement: "République parlementaire", capitale: "Roseau", monnaie: "Dollar des Caraïbes" },
    "do": { nom: "Rép. dominicaine", nom_en: "Dominican Republic", nom_ar: "جمهورية الدومينيكان", population: "11 000 000", superficie: "48 671", gouvernement: "République présidentielle", capitale: "Saint-Domingue", monnaie: "Peso dominicain" },
    "dz": { nom: "Algérie", nom_en: "Algeria", nom_ar: "الجزائر", population: "45 000 000", superficie: "2 381 741", gouvernement: "République présidentielle", capitale: "Alger", monnaie: "Dinar algérien" },
    "ec": { nom: "Équateur", nom_en: "Ecuador", nom_ar: "الإكوادور", population: "18 000 000", superficie: "283 561", gouvernement: "République présidentielle", capitale: "Quito", monnaie: "Dollar américain" },
    "ee": { nom: "Estonie", nom_en: "Estonia", nom_ar: "إستونيا", population: "1 330 000", superficie: "45 228", gouvernement: "République parlementaire", capitale: "Tallinn", monnaie: "Euro" },
    "eg": { nom: "Égypte", nom_en: "Egypt", nom_ar: "مصر", population: "104 000 000", superficie: "1 001 450", gouvernement: "République présidentielle", capitale: "Le Caire", monnaie: "Livre égyptienne" },
    "er": { nom: "Érythrée", nom_en: "Eritrea", nom_ar: "إريتريا", population: "3 600 000", superficie: "117 600", gouvernement: "République présidentielle", capitale: "Asmara", monnaie: "Nakfa" },
    "es": { nom: "Espagne", nom_en: "Spain", nom_ar: "إسبانيا", population: "47 400 000", superficie: "505 990", gouvernement: "Monarchie constitutionnelle", capitale: "Madrid", monnaie: "Euro" },
    "et": { nom: "Éthiopie", nom_en: "Ethiopia", nom_ar: "إثيوبيا", population: "120 000 000", superficie: "1 104 300", gouvernement: "République fédérale", capitale: "Addis-Abeba", monnaie: "Birr" },
    "fi": { nom: "Finlande", nom_en: "Finland", nom_ar: "فنلندا", population: "5 540 000", superficie: "338 145", gouvernement: "République parlementaire", capitale: "Helsinki", monnaie: "Euro" },
    "fk": { nom: "Îles Malouines", nom_en: "Falkland Islands", nom_ar: "جزر فوكلاند", population: "3 500", superficie: "12 173", gouvernement: "Territoire britannique", capitale: "Stanley", monnaie: "Livre des Malouines" },
    "fr": { nom: "France", nom_en: "France", nom_ar: "فرنسا", population: "67 390 000", superficie: "643 801", gouvernement: "République semi-présidentielle", capitale: "Paris", monnaie: "Euro" },
    "ga": { nom: "Gabon", nom_en: "Gabon", nom_ar: "الغابون", population: "2 300 000", superficie: "267 668", gouvernement: "République présidentielle", capitale: "Libreville", monnaie: "Franc CFA" },
    "gb": { nom: "Royaume-Uni", nom_en: "United Kingdom", nom_ar: "المملكة المتحدة", population: "67 220 000", superficie: "242 495", gouvernement: "Monarchie constitutionnelle", capitale: "Londres", monnaie: "Livre sterling" },
    "ge": { nom: "Géorgie", nom_en: "Georgia", nom_ar: "جورجيا", population: "3 700 000", superficie: "69 700", gouvernement: "République parlementaire", capitale: "Tbilissi", monnaie: "Lari" },
    "gh": { nom: "Ghana", nom_en: "Ghana", nom_ar: "غانا", population: "33 000 000", superficie: "238 535", gouvernement: "République présidentielle", capitale: "Accra", monnaie: "Cedi" },
    "gl": { nom: "Groenland", nom_en: "Greenland", nom_ar: "غرينلاند", population: "56 000", superficie: "2 166 086", gouvernement: "Territoire autonome danois", capitale: "Nuuk", monnaie: "Couronne danoise" },
    "gm": { nom: "Gambie", nom_en: "Gambia", nom_ar: "غامبيا", population: "2 500 000", superficie: "11 295", gouvernement: "République présidentielle", capitale: "Banjul", monnaie: "Dalasi" },
    "gn": { nom: "Guinée", nom_en: "Guinea", nom_ar: "غينيا", population: "13 500 000", superficie: "245 857", gouvernement: "République présidentielle", capitale: "Conakry", monnaie: "Franc guinéen" },
    "gq": { nom: "Guinée équatoriale", nom_en: "Equatorial Guinea", nom_ar: "غينيا الاستوائية", population: "1 600 000", superficie: "28 051", gouvernement: "République présidentielle", capitale: "Malabo", monnaie: "Franc CFA" },
    "gr": { nom: "Grèce", nom_en: "Greece", nom_ar: "اليونان", population: "10 720 000", superficie: "131 957", gouvernement: "République parlementaire", capitale: "Athènes", monnaie: "Euro" },
    "gt": { nom: "Guatemala", nom_en: "Guatemala", nom_ar: "غواتيمالا", population: "17 600 000", superficie: "108 889", gouvernement: "République présidentielle", capitale: "Guatemala", monnaie: "Quetzal" },
    "gw": { nom: "Guinée-Bissau", nom_en: "Guinea-Bissau", nom_ar: "غينيا بيساو", population: "2 000 000", superficie: "36 125", gouvernement: "République semi-présidentielle", capitale: "Bissau", monnaie: "Franc CFA" },
    "gy": { nom: "Guyana", nom_en: "Guyana", nom_ar: "غيانا", population: "800 000", superficie: "214 969", gouvernement: "République présidentielle", capitale: "Georgetown", monnaie: "Dollar guyanien" },
    "hn": { nom: "Honduras", nom_en: "Honduras", nom_ar: "هندوراس", population: "10 300 000", superficie: "112 492", gouvernement: "République présidentielle", capitale: "Tegucigalpa", monnaie: "Lempira" },
    "hr": { nom: "Croatie", nom_en: "Croatia", nom_ar: "كرواتيا", population: "4 050 000", superficie: "56 594", gouvernement: "République parlementaire", capitale: "Zagreb", monnaie: "Euro" },
    "ht": { nom: "Haïti", nom_en: "Haiti", nom_ar: "هايتي", population: "11 500 000", superficie: "27 750", gouvernement: "République semi-présidentielle", capitale: "Port-au-Prince", monnaie: "Gourde" },
    "hu": { nom: "Hongrie", nom_en: "Hungary", nom_ar: "المجر", population: "9 750 000", superficie: "93 028", gouvernement: "République parlementaire", capitale: "Budapest", monnaie: "Forint" },
    "id": { nom: "Indonésie", nom_en: "Indonesia", nom_ar: "إندونيسيا", population: "275 000 000", superficie: "1 904 569", gouvernement: "République présidentielle", capitale: "Jakarta", monnaie: "Roupie indonésienne" },
    "ie": { nom: "Irlande", nom_en: "Ireland", nom_ar: "أيرلندا", population: "5 000 000", superficie: "70 273", gouvernement: "République parlementaire", capitale: "Dublin", monnaie: "Euro" },
    "il": { nom: "Israël", nom_en: "Israel", nom_ar: "إسرائيل", population: "9 500 000", superficie: "20 770", gouvernement: "République parlementaire", capitale: "Jérusalem", monnaie: "Shekel" },
    "in": { nom: "Inde", nom_en: "India", nom_ar: "الهند", population: "1 420 000 000", superficie: "3 287 263", gouvernement: "République fédérale", capitale: "New Delhi", monnaie: "Roupie indienne" },
    "iq": { nom: "Irak", nom_en: "Iraq", nom_ar: "العراق", population: "42 000 000", superficie: "438 317", gouvernement: "République fédérale", capitale: "Bagdad", monnaie: "Dinar irakien" },
    "ir": { nom: "Iran", nom_en: "Iran", nom_ar: "إيران", population: "87 000 000", superficie: "1 648 195", gouvernement: "République islamique", capitale: "Téhéran", monnaie: "Rial iranien" },
    "is": { nom: "Islande", nom_en: "Iceland", nom_ar: "آيسلندا", population: "370 000", superficie: "103 000", gouvernement: "République parlementaire", capitale: "Reykjavik", monnaie: "Couronne islandaise" },
    "it": { nom: "Italie", nom_en: "Italy", nom_ar: "إيطاليا", population: "59 550 000", superficie: "301 340", gouvernement: "République parlementaire", capitale: "Rome", monnaie: "Euro" },
    "jm": { nom: "Jamaïque", nom_en: "Jamaica", nom_ar: "جامايكا", population: "2 800 000", superficie: "10 991", gouvernement: "Monarchie constitutionnelle", capitale: "Kingston", monnaie: "Dollar jamaïcain" },
    "jo": { nom: "Jordanie", nom_en: "Jordan", nom_ar: "الأردن", population: "11 000 000", superficie: "89 342", gouvernement: "Monarchie constitutionnelle", capitale: "Amman", monnaie: "Dinar jordanien" },
    "jp": { nom: "Japon", nom_en: "Japan", nom_ar: "اليابان", population: "125 000 000", superficie: "377 975", gouvernement: "Monarchie constitutionnelle", capitale: "Tokyo", monnaie: "Yen" },
    "ke": { nom: "Kenya", nom_en: "Kenya", nom_ar: "كينيا", population: "54 000 000", superficie: "580 367", gouvernement: "République présidentielle", capitale: "Nairobi", monnaie: "Shilling kényan" },
    "kg": { nom: "Kirghizistan", nom_en: "Kyrgyzstan", nom_ar: "قيرغيزستان", population: "6 700 000", superficie: "199 951", gouvernement: "République présidentielle", capitale: "Bichkek", monnaie: "Som" },
    "kh": { nom: "Cambodge", nom_en: "Cambodia", nom_ar: "كمبوديا", population: "16 700 000", superficie: "181 035", gouvernement: "Monarchie constitutionnelle", capitale: "Phnom Penh", monnaie: "Riel" },
    "km": { nom: "Comores", nom_en: "Comoros", nom_ar: "جزر القمر", population: "900 000", superficie: "2 235", gouvernement: "République fédérale", capitale: "Moroni", monnaie: "Franc comorien" },
    "kp": { nom: "Corée du Nord", nom_en: "North Korea", nom_ar: "كوريا الشمالية", population: "26 000 000", superficie: "120 538", gouvernement: "République socialiste", capitale: "Pyongyang", monnaie: "Won nord-coréen" },
    "kr": { nom: "Corée du Sud", nom_en: "South Korea", nom_ar: "كوريا الجنوبية", population: "51 800 000", superficie: "100 210", gouvernement: "République présidentielle", capitale: "Séoul", monnaie: "Won sud-coréen" },
    "kw": { nom: "Koweït", nom_en: "Kuwait", nom_ar: "الكويت", population: "4 300 000", superficie: "17 818", gouvernement: "Monarchie constitutionnelle", capitale: "Koweït", monnaie: "Dinar koweïtien" },
    "kz": { nom: "Kazakhstan", nom_en: "Kazakhstan", nom_ar: "كازاخستان", population: "19 400 000", superficie: "2 724 900", gouvernement: "République présidentielle", capitale: "Astana", monnaie: "Tenge" },
    "la": { nom: "Laos", nom_en: "Laos", nom_ar: "لاوس", population: "7 400 000", superficie: "236 800", gouvernement: "République socialiste", capitale: "Vientiane", monnaie: "Kip" },
    "lb": { nom: "Liban", nom_en: "Lebanon", nom_ar: "لبنان", population: "5 500 000", superficie: "10 400", gouvernement: "République parlementaire", capitale: "Beyrouth", monnaie: "Livre libanaise" },
    "lc": { nom: "Sainte-Lucie", nom_en: "Saint Lucia", nom_ar: "سانت لوسيا", population: "180 000", superficie: "616", gouvernement: "Monarchie constitutionnelle", capitale: "Castries", monnaie: "Dollar des Caraïbes" },
    "lk": { nom: "Sri Lanka", nom_en: "Sri Lanka", nom_ar: "سريلانكا", population: "22 000 000", superficie: "65 610", gouvernement: "République semi-présidentielle", capitale: "Sri Jayawardenepura", monnaie: "Roupie sri-lankaise" },
    "lr": { nom: "Liberia", nom_en: "Liberia", nom_ar: "ليبيريا", population: "5 200 000", superficie: "111 369", gouvernement: "République présidentielle", capitale: "Monrovia", monnaie: "Dollar libérien" },
    "ls": { nom: "Lesotho", nom_en: "Lesotho", nom_ar: "ليسوتو", population: "2 200 000", superficie: "30 355", gouvernement: "Monarchie constitutionnelle", capitale: "Maseru", monnaie: "Loti" },
    "lt": { nom: "Lituanie", nom_en: "Lithuania", nom_ar: "ليتوانيا", population: "2 800 000", superficie: "65 300", gouvernement: "République semi-présidentielle", capitale: "Vilnius", monnaie: "Euro" },
    "lu": { nom: "Luxembourg", nom_en: "Luxembourg", nom_ar: "لوكسمبورغ", population: "630 000", superficie: "2 586", gouvernement: "Monarchie constitutionnelle", capitale: "Luxembourg", monnaie: "Euro" },
    "lv": { nom: "Lettonie", nom_en: "Latvia", nom_ar: "لاتفيا", population: "1 900 000", superficie: "64 589", gouvernement: "République parlementaire", capitale: "Riga", monnaie: "Euro" },
    "ly": { nom: "Libye", nom_en: "Libya", nom_ar: "ليبيا", population: "7 000 000", superficie: "1 759 540", gouvernement: "Gouvernement intérimaire", capitale: "Tripoli", monnaie: "Dinar libyen" },
    "ma": { nom: "Maroc", nom_en: "Morocco", nom_ar: "المغرب", population: "37 000 000", superficie: "446 550", gouvernement: "Monarchie constitutionnelle", capitale: "Rabat", monnaie: "Dirham marocain" },
    "md": { nom: "Moldavie", nom_en: "Moldova", nom_ar: "مولدوفا", population: "3 550 000", superficie: "33 846", gouvernement: "République parlementaire", capitale: "Chișinău", monnaie: "Leu moldave" },
    "me": { nom: "Monténégro", nom_en: "Montenegro", nom_ar: "الجبل الأسود", population: "620 000", superficie: "13 812", gouvernement: "République parlementaire", capitale: "Podgorica", monnaie: "Euro" },
    "mg": { nom: "Madagascar", nom_en: "Madagascar", nom_ar: "مدغشقر", population: "29 000 000", superficie: "587 041", gouvernement: "République semi-présidentielle", capitale: "Antananarivo", monnaie: "Ariary" },
    "mk": { nom: "Macédoine du Nord", nom_en: "North Macedonia", nom_ar: "مقدونيا الشمالية", population: "2 080 000", superficie: "25 713", gouvernement: "République parlementaire", capitale: "Skopje", monnaie: "Denar" },
    "ml": { nom: "Mali", nom_en: "Mali", nom_ar: "مالي", population: "21 500 000", superficie: "1 240 192", gouvernement: "République", capitale: "Bamako", monnaie: "Franc CFA" },
    "mm": { nom: "Myanmar", nom_en: "Myanmar", nom_ar: "ميانمار", population: "54 000 000", superficie: "676 578", gouvernement: "République", capitale: "Naypyidaw", monnaie: "Kyat" },
    "mn": { nom: "Mongolie", nom_en: "Mongolia", nom_ar: "منغوليا", population: "3 400 000", superficie: "1 564 116", gouvernement: "République semi-présidentielle", capitale: "Oulan-Bator", monnaie: "Tugrik" },
    "mr": { nom: "Mauritanie", nom_en: "Mauritania", nom_ar: "موريتانيا", population: "4 700 000", superficie: "1 030 700", gouvernement: "République présidentielle", capitale: "Nouakchott", monnaie: "Ouguiya" },
    "mt": { nom: "Malte", nom_en: "Malta", nom_ar: "مالطا", population: "520 000", superficie: "316", gouvernement: "République parlementaire", capitale: "La Valette", monnaie: "Euro" },
    "mu": { nom: "Maurice", nom_en: "Mauritius", nom_ar: "موريشيوس", population: "1 300 000", superficie: "2 040", gouvernement: "République parlementaire", capitale: "Port-Louis", monnaie: "Roupie mauricienne" },
    "mv": { nom: "Maldives", nom_en: "Maldives", nom_ar: "المالديف", population: "520 000", superficie: "298", gouvernement: "République présidentielle", capitale: "Malé", monnaie: "Rufiyaa" },
    "mw": { nom: "Malawi", nom_en: "Malawi", nom_ar: "ملاوي", population: "20 000 000", superficie: "118 484", gouvernement: "République présidentielle", capitale: "Lilongwe", monnaie: "Kwacha" },
    "mx": { nom: "Mexique", nom_en: "Mexico", nom_ar: "المكسيك", population: "128 000 000", superficie: "1 964 375", gouvernement: "République fédérale", capitale: "Mexico", monnaie: "Peso mexicain" },
    "my": { nom: "Malaisie", nom_en: "Malaysia", nom_ar: "ماليزيا", population: "33 000 000", superficie: "329 847", gouvernement: "Monarchie constitutionnelle", capitale: "Kuala Lumpur", monnaie: "Ringgit" },
    "mz": { nom: "Mozambique", nom_en: "Mozambique", nom_ar: "موزمبيق", population: "32 000 000", superficie: "801 590", gouvernement: "République présidentielle", capitale: "Maputo", monnaie: "Metical" },
    "na": { nom: "Namibie", nom_en: "Namibia", nom_ar: "ناميبيا", population: "2 600 000", superficie: "824 292", gouvernement: "République présidentielle", capitale: "Windhoek", monnaie: "Dollar namibien" },
    "nc": { nom: "Nouvelle-Calédonie", nom_en: "New Caledonia", nom_ar: "كاليدونيا الجديدة", population: "290 000", superficie: "18 575", gouvernement: "Collectivité française", capitale: "Nouméa", monnaie: "Franc CFP" },
    "ne": { nom: "Niger", nom_en: "Niger", nom_ar: "النيجر", population: "25 000 000", superficie: "1 267 000", gouvernement: "République", capitale: "Niamey", monnaie: "Franc CFA" },
    "ng": { nom: "Nigeria", nom_en: "Nigeria", nom_ar: "نيجيريا", population: "220 000 000", superficie: "923 768", gouvernement: "République fédérale", capitale: "Abuja", monnaie: "Naira" },
    "ni": { nom: "Nicaragua", nom_en: "Nicaragua", nom_ar: "نيكاراغوا", population: "6 800 000", superficie: "130 373", gouvernement: "République présidentielle", capitale: "Managua", monnaie: "Córdoba" },
    "nl": { nom: "Pays-Bas", nom_en: "Netherlands", nom_ar: "هولندا", population: "17 740 000", superficie: "41 543", gouvernement: "Monarchie constitutionnelle", capitale: "Amsterdam", monnaie: "Euro" },
    "no": { nom: "Norvège", nom_en: "Norway", nom_ar: "النرويج", population: "5 450 000", superficie: "385 207", gouvernement: "Monarchie constitutionnelle", capitale: "Oslo", monnaie: "Couronne norvégienne" },
    "np": { nom: "Népal", nom_en: "Nepal", nom_ar: "نيبال", population: "30 000 000", superficie: "147 181", gouvernement: "République fédérale", capitale: "Katmandou", monnaie: "Roupie népalaise" },
    "nz": { nom: "Nouvelle-Zélande", nom_en: "New Zealand", nom_ar: "نيوزيلندا", population: "5 100 000", superficie: "268 021", gouvernement: "Monarchie constitutionnelle", capitale: "Wellington", monnaie: "Dollar néo-zélandais" },
    "om": { nom: "Oman", nom_en: "Oman", nom_ar: "عُمان", population: "4 500 000", superficie: "309 500", gouvernement: "Monarchie absolue", capitale: "Mascate", monnaie: "Rial omanais" },
    "pa": { nom: "Panama", nom_en: "Panama", nom_ar: "بنما", population: "4 400 000", superficie: "75 420", gouvernement: "République présidentielle", capitale: "Panama", monnaie: "Balboa" },
    "pe": { nom: "Pérou", nom_en: "Peru", nom_ar: "بيرو", population: "33 000 000", superficie: "1 285 216", gouvernement: "République présidentielle", capitale: "Lima", monnaie: "Sol" },
    "pg": { nom: "Papouasie-N.-Guinée", nom_en: "Papua New Guinea", nom_ar: "بابوا غينيا الجديدة", population: "10 000 000", superficie: "462 840", gouvernement: "Monarchie constitutionnelle", capitale: "Port Moresby", monnaie: "Kina" },
    "ph": { nom: "Philippines", nom_en: "Philippines", nom_ar: "الفلبين", population: "112 000 000", superficie: "300 000", gouvernement: "République présidentielle", capitale: "Manille", monnaie: "Peso philippin" },
    "pk": { nom: "Pakistan", nom_en: "Pakistan", nom_ar: "باكستان", population: "230 000 000", superficie: "881 913", gouvernement: "République fédérale", capitale: "Islamabad", monnaie: "Roupie pakistanaise" },
    "pl": { nom: "Pologne", nom_en: "Poland", nom_ar: "بولندا", population: "37 950 000", superficie: "312 696", gouvernement: "République parlementaire", capitale: "Varsovie", monnaie: "Złoty" },
    "pr": { nom: "Porto Rico", nom_en: "Puerto Rico", nom_ar: "بورتوريكو", population: "3 200 000", superficie: "9 104", gouvernement: "Territoire américain", capitale: "San Juan", monnaie: "Dollar américain" },
    "pt": { nom: "Portugal", nom_en: "Portugal", nom_ar: "البرتغال", population: "10 300 000", superficie: "92 212", gouvernement: "République semi-présidentielle", capitale: "Lisbonne", monnaie: "Euro" },
    "py": { nom: "Paraguay", nom_en: "Paraguay", nom_ar: "باراغواي", population: "7 300 000", superficie: "406 752", gouvernement: "République présidentielle", capitale: "Asuncion", monnaie: "Guarani" },
    "qa": { nom: "Qatar", nom_en: "Qatar", nom_ar: "قطر", population: "2 900 000", superficie: "11 586", gouvernement: "Monarchie absolue", capitale: "Doha", monnaie: "Riyal qatarien" },
    "ro": { nom: "Roumanie", nom_en: "Romania", nom_ar: "رومانيا", population: "19 050 000", superficie: "238 397", gouvernement: "République semi-présidentielle", capitale: "Bucarest", monnaie: "Leu roumain" },
    "rs": { nom: "Serbie", nom_en: "Serbia", nom_ar: "صربيا", population: "6 900 000", superficie: "88 361", gouvernement: "République parlementaire", capitale: "Belgrade", monnaie: "Dinar serbe" },
    "ru": { nom: "Russie", nom_en: "Russia", nom_ar: "روسيا", population: "144 000 000", superficie: "17 098 242", gouvernement: "République fédérale", capitale: "Moscou", monnaie: "Rouble" },
    "rw": { nom: "Rwanda", nom_en: "Rwanda", nom_ar: "رواندا", population: "13 500 000", superficie: "26 338", gouvernement: "République présidentielle", capitale: "Kigali", monnaie: "Franc rwandais" },
    "sa": { nom: "Arabie saoudite", nom_en: "Saudi Arabia", nom_ar: "المملكة العربية السعودية", population: "35 000 000", superficie: "2 149 690", gouvernement: "Monarchie absolue", capitale: "Riyad", monnaie: "Riyal saoudien" },
    "sb": { nom: "Îles Salomon", nom_en: "Solomon Islands", nom_ar: "جزر سليمان", population: "720 000", superficie: "28 896", gouvernement: "Monarchie constitutionnelle", capitale: "Honiara", monnaie: "Dollar des Salomon" },
    "sc": { nom: "Seychelles", nom_en: "Seychelles", nom_ar: "سيشل", population: "100 000", superficie: "455", gouvernement: "République présidentielle", capitale: "Victoria", monnaie: "Roupie seychelloise" },
    "sd": { nom: "Soudan", nom_en: "Sudan", nom_ar: "السودان", population: "44 000 000", superficie: "1 861 484", gouvernement: "Gouvernement de transition", capitale: "Khartoum", monnaie: "Livre soudanaise" },
    "se": { nom: "Suède", nom_en: "Sweden", nom_ar: "السويد", population: "10 420 000", superficie: "450 295", gouvernement: "Monarchie constitutionnelle", capitale: "Stockholm", monnaie: "Couronne suédoise" },
    "sg": { nom: "Singapour", nom_en: "Singapore", nom_ar: "سنغافورة", population: "5 500 000", superficie: "733", gouvernement: "République parlementaire", capitale: "Singapour", monnaie: "Dollar de Singapour" },
    "si": { nom: "Slovénie", nom_en: "Slovenia", nom_ar: "سلوفينيا", population: "2 100 000", superficie: "20 273", gouvernement: "République parlementaire", capitale: "Ljubljana", monnaie: "Euro" },
    "sk": { nom: "Slovaquie", nom_en: "Slovakia", nom_ar: "سلوفاكيا", population: "5 460 000", superficie: "49 035", gouvernement: "République parlementaire", capitale: "Bratislava", monnaie: "Euro" },
    "sl": { nom: "Sierra Leone", nom_en: "Sierra Leone", nom_ar: "سيراليون", population: "8 400 000", superficie: "71 740", gouvernement: "République présidentielle", capitale: "Freetown", monnaie: "Leone" },
    "sn": { nom: "Sénégal", nom_en: "Senegal", nom_ar: "السنغال", population: "17 200 000", superficie: "196 722", gouvernement: "République présidentielle", capitale: "Dakar", monnaie: "Franc CFA" },
    "so": { nom: "Somalie", nom_en: "Somalia", nom_ar: "الصومال", population: "17 000 000", superficie: "637 657", gouvernement: "République fédérale", capitale: "Mogadiscio", monnaie: "Shilling somalien" },
    "sr": { nom: "Suriname", nom_en: "Suriname", nom_ar: "سورينام", population: "600 000", superficie: "163 820", gouvernement: "République présidentielle", capitale: "Paramaribo", monnaie: "Dollar surinamais" },
    "ss": { nom: "Soudan du Sud", nom_en: "South Sudan", nom_ar: "جنوب السودان", population: "11 000 000", superficie: "619 745", gouvernement: "République présidentielle", capitale: "Djouba", monnaie: "Livre sud-soudanaise" },
    "st": { nom: "São Tomé-et-Príncipe", nom_en: "São Tomé and Príncipe", nom_ar: "ساو تومي وبرينسيبي", population: "220 000", superficie: "964", gouvernement: "République semi-présidentielle", capitale: "São Tomé", monnaie: "Dobra" },
    "sv": { nom: "Salvador", nom_en: "El Salvador", nom_ar: "السلفادور", population: "6 500 000", superficie: "21 041", gouvernement: "République présidentielle", capitale: "San Salvador", monnaie: "Dollar américain" },
    "sy": { nom: "Syrie", nom_en: "Syria", nom_ar: "سوريا", population: "21 000 000", superficie: "185 180", gouvernement: "République présidentielle", capitale: "Damas", monnaie: "Livre syrienne" },
    "sz": { nom: "Eswatini", nom_en: "Eswatini", nom_ar: "إسواتيني", population: "1 200 000", superficie: "17 364", gouvernement: "Monarchie absolue", capitale: "Mbabane", monnaie: "Lilangeni" },
    "td": { nom: "Tchad", nom_en: "Chad", nom_ar: "تشاد", population: "17 000 000", superficie: "1 284 000", gouvernement: "République présidentielle", capitale: "N'Djamena", monnaie: "Franc CFA" },
    "tg": { nom: "Togo", nom_en: "Togo", nom_ar: "توغو", population: "8 600 000", superficie: "56 785", gouvernement: "République présidentielle", capitale: "Lomé", monnaie: "Franc CFA" },
    "th": { nom: "Thaïlande", nom_en: "Thailand", nom_ar: "تايلاند", population: "70 000 000", superficie: "513 120", gouvernement: "Monarchie constitutionnelle", capitale: "Bangkok", monnaie: "Baht" },
    "tj": { nom: "Tadjikistan", nom_en: "Tajikistan", nom_ar: "طاجيكستان", population: "9 750 000", superficie: "143 100", gouvernement: "République présidentielle", capitale: "Douchanbé", monnaie: "Somoni" },
    "tm": { nom: "Turkménistan", nom_en: "Turkmenistan", nom_ar: "تركمانستان", population: "6 300 000", superficie: "488 100", gouvernement: "République présidentielle", capitale: "Achgabat", monnaie: "Manat" },
    "tn": { nom: "Tunisie", nom_en: "Tunisia", nom_ar: "تونس", population: "12 000 000", superficie: "163 610", gouvernement: "République présidentielle", capitale: "Tunis", monnaie: "Dinar tunisien" },
    "tr": { nom: "Turquie", nom_en: "Turkey", nom_ar: "تركيا", population: "84 680 000", superficie: "783 562", gouvernement: "République présidentielle", capitale: "Ankara", monnaie: "Livre turque" },
    "tt": { nom: "Trinité-et-Tobago", nom_en: "Trinidad and Tobago", nom_ar: "ترينيداد وتوباغو", population: "1 400 000", superficie: "5 130", gouvernement: "République parlementaire", capitale: "Port-d'Espagne", monnaie: "Dollar de T&T" },
    "tw": { nom: "Taïwan", nom_en: "Taiwan", nom_ar: "تايوان", population: "23 500 000", superficie: "36 193", gouvernement: "République semi-présidentielle", capitale: "Taipei", monnaie: "Nouveau dollar de Taïwan" },
    "tz": { nom: "Tanzanie", nom_en: "Tanzania", nom_ar: "تنزانيا", population: "63 000 000", superficie: "945 087", gouvernement: "République présidentielle", capitale: "Dodoma", monnaie: "Shilling tanzanien" },
    "ua": { nom: "Ukraine", nom_en: "Ukraine", nom_ar: "أوكرانيا", population: "41 130 000", superficie: "603 500", gouvernement: "République semi-présidentielle", capitale: "Kyiv", monnaie: "Hryvnia" },
    "ug": { nom: "Ouganda", nom_en: "Uganda", nom_ar: "أوغندا", population: "47 000 000", superficie: "241 038", gouvernement: "République présidentielle", capitale: "Kampala", monnaie: "Shilling ougandais" },
    "us": { nom: "États-Unis", nom_en: "United States", nom_ar: "الولايات المتحدة", population: "333 000 000", superficie: "9 833 520", gouvernement: "République fédérale", capitale: "Washington D.C.", monnaie: "Dollar américain" },
    "uy": { nom: "Uruguay", nom_en: "Uruguay", nom_ar: "أوروغواي", population: "3 500 000", superficie: "176 215", gouvernement: "République présidentielle", capitale: "Montevideo", monnaie: "Peso uruguayen" },
    "uz": { nom: "Ouzbékistan", nom_en: "Uzbekistan", nom_ar: "أوزبكستان", population: "35 000 000", superficie: "448 978", gouvernement: "République présidentielle", capitale: "Tachkent", monnaie: "Sum" },
    "vc": { nom: "Saint-Vincent", nom_en: "Saint Vincent", nom_ar: "سانت فينسنت", population: "110 000", superficie: "389", gouvernement: "Monarchie constitutionnelle", capitale: "Kingstown", monnaie: "Dollar des Caraïbes" },
    "ve": { nom: "Venezuela", nom_en: "Venezuela", nom_ar: "فنزويلا", population: "28 000 000", superficie: "916 445", gouvernement: "République fédérale", capitale: "Caracas", monnaie: "Bolívar" },
    "vn": { nom: "Viêt Nam", nom_en: "Vietnam", nom_ar: "فيتنام", population: "98 000 000", superficie: "331 212", gouvernement: "République socialiste", capitale: "Hanoï", monnaie: "Dong" },
    "vu": { nom: "Vanuatu", nom_en: "Vanuatu", nom_ar: "فانواتو", population: "320 000", superficie: "12 189", gouvernement: "République parlementaire", capitale: "Port-Vila", monnaie: "Vatu" },
    "ye": { nom: "Yémen", nom_en: "Yemen", nom_ar: "اليمن", population: "33 000 000", superficie: "527 968", gouvernement: "République", capitale: "Sanaa", monnaie: "Rial yéménite" },
    "za": { nom: "Afrique du Sud", nom_en: "South Africa", nom_ar: "جنوب أفريقيا", population: "60 000 000", superficie: "1 221 037", gouvernement: "République parlementaire", capitale: "Pretoria", monnaie: "Rand" },
    "zm": { nom: "Zambie", nom_en: "Zambia", nom_ar: "زامبيا", population: "19 500 000", superficie: "752 618", gouvernement: "République présidentielle", capitale: "Lusaka", monnaie: "Kwacha" },
    "zw": { nom: "Zimbabwe", nom_en: "Zimbabwe", nom_ar: "زيمبابوي", population: "16 000 000", superficie: "390 757", gouvernement: "République présidentielle", capitale: "Harare", monnaie: "Dollar zimbabwéen" },
    "_somaliland": { nom: "Somaliland", nom_en: "Somaliland", nom_ar: "أرض الصومال", population: "5 700 000", superficie: "176 120", gouvernement: "République (non reconnu)", capitale: "Hargeisa", monnaie: "Shilling somalilandais" }
};

// ── Translation System ──
const translations = {
    en: {
        title: "Interactive World Map",
        select: "Select a country",
        population: "Population",
        superficie: "Area",
        gouvernement: "Government",
        capitale: "Capital",
        monnaie: "Currency",
        explore: "Explore More →",
        nameKey: "nom_en"
    },
    fr: {
        title: "Carte Interactive du Monde",
        select: "Sélectionnez un pays",
        population: "Population",
        superficie: "Superficie",
        gouvernement: "Gouvernement",
        capitale: "Capitale",
        monnaie: "Monnaie",
        explore: "Explorer Plus →",
        nameKey: "nom"
    },
    ar: {
        title: "خريطة العالم التفاعلية",
        select: "اختر دولة",
        population: "السكان",
        superficie: "المساحة",
        gouvernement: "نظام الحكم",
        capitale: "العاصمة",
        monnaie: "العملة",
        explore: "← اكتشف المزيد",
        nameKey: "nom_ar"
    }
};

let currentLang = "en";

function getT() { return translations[currentLang]; }

function resetInfoBox() {
    const t = getT();
    document.getElementById('pays-nom').textContent = t.select;
    document.getElementById('population').textContent = '-';
    document.getElementById('superficie').textContent = '-';
    document.getElementById('gouvernement').textContent = '-';
    document.getElementById('capitale').textContent = '-';
    document.getElementById('monnaie').textContent = '-';
}

function updateLabels() {
    const t = getT();
    document.getElementById('main-title').textContent = t.title;
    document.querySelectorAll('.label').forEach(lbl => {
        const key = lbl.getAttribute('data-label');
        if (t[key]) lbl.textContent = t[key];
    });
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) exploreBtn.textContent = t.explore;
    if (currentLang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.removeAttribute('dir');
    }
    resetInfoBox();
}

function getCountryName(data, idPays) {
    const t = getT();
    if (data[t.nameKey]) return data[t.nameKey];
    if (data.nom) return data.nom;
    return idPays.toUpperCase();
}

// ── Close / Reset Button ──
document.getElementById('close-btn').addEventListener('click', function () {
    resetInfoBox();
    document.getElementById('info-box').style.display = 'none';
    const obj = document.getElementById('carte-europe');
    const svgDoc = obj.getSVGDocument();
    if (svgDoc) {
        svgDoc.querySelectorAll('path, polygon, circle').forEach(p => {
            p.style.fill = '#ffffff';
            p.style.strokeWidth = '0.5px';
        });
    }
});

// ── Language Toggle ──
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentLang = this.getAttribute('data-lang');
        updateLabels();
    });
});

// ── SVG Hover Logic ──
document.getElementById('carte-europe').addEventListener('load', function () {
    const svgDoc = this.getSVGDocument();
    const paths = svgDoc.querySelectorAll('path, polygon, circle');

    paths.forEach(pays => {
        pays.classList.add('pays');
        pays.style.fill = '#ffffff';
        pays.style.stroke = '#ecf0f1';
        pays.style.transition = 'all 0.3s ease';
        pays.style.cursor = 'pointer';

        pays.addEventListener('mouseover', function () {
            document.getElementById('info-box').style.display = '';
            let el = this;
            let idPays = el.id;
            while ((!idPays || idPays === '') && el.parentElement) {
                el = el.parentElement;
                idPays = el.id;
            }

            const data = paysData[idPays] || {};
            document.getElementById('pays-nom').textContent = getCountryName(data, idPays);
            document.getElementById('population').textContent = data.population || '-';
            document.getElementById('superficie').textContent = data.superficie || '-';
            document.getElementById('gouvernement').textContent = data.gouvernement || '-';
            document.getElementById('capitale').textContent = data.capitale || '-';
            document.getElementById('monnaie').textContent = data.monnaie || '-';

            if (el.tagName === 'g') {
                el.querySelectorAll('path').forEach(p => {
                    p.style.fill = '#ffbb00';
                    p.style.strokeWidth = '1.5px';
                });
            } else {
                this.style.fill = '#ffbb00';
                this.style.strokeWidth = '1.5px';
            }
        });

        pays.addEventListener('mouseout', function () {
            resetInfoBox();
            let el = this;
            let idPays = el.id;
            while ((!idPays || idPays === '') && el.parentElement) {
                el = el.parentElement;
                idPays = el.id;
            }

            if (el.tagName === 'g') {
                el.querySelectorAll('path').forEach(p => {
                    p.style.fill = '#cddedf';
                    p.style.strokeWidth = '0.5px';
                });
            } else {
                this.style.fill = '#cddedf';
                this.style.strokeWidth = '0.5px';
            }
        });
    });

    updateLabels();
});
