const carsAPI = {
    getCars: () => {
      return [
        {
          "title": "Alpine A108",
          "href": "https://en.wikipedia.org/wiki/Alpine_A108",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alpine_108_02.jpg/280px-Alpine_108_02.jpg",
          "description": "The Alpine A108 was a light-weight glass-fibre bodied, rear-engined two-door coupé produced for a young competition-oriented Dieppe based Renault dealer called Jean Rédélé. The car replaced the Alpine A106 and was based on mechanical components from the Renault Dauphine.",
          "production": "1958–1965"
        },
        {
          "title": "Bugatti Type 101",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Type_101",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bugatti_Type_101.jpg/280px-Bugatti_Type_101.jpg",
          "description": "The Bugatti Type 101 is a motor car made by Bugatti in 1951 and 1952 (one was built in 1965). In order to restart production after World War II and the deaths of Ettore Bugatti and his son Jean, the Type 101 was developed from the pre-war Type 57. Seven chassis were built; these were bodied by four different coachbuilders: Gangloff [de], Guilloré, Antem and Ghia, the last to a design by Virgil Exner. The 101 was powered by the 3.3 L (3,257 cc or 199 cu in) straight-8 from the Type 57.  ",
          "production": "1951–56"
        },
        {
          "title": "De Tomaso Deauville",
          "href": "https://en.wikipedia.org/wiki/De_Tomaso_Deauville",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/De_Tomaso_Deauville_at_Mahy_Mobiles_Leuze_013.jpg/280px-De_Tomaso_Deauville_at_Mahy_Mobiles_Leuze_013.jpg",
          "description": "The De Tomaso Deauville is a luxury four-door saloon first exhibited at the 1970 Turin Motor Show. The Deauville was powered by the same 351 in³ (5,763 cc) Ford Cleveland V8 as the De Tomaso Pantera, rated at 330 hp (246 kW; 335 PS). The car has a top speed of 230 km/h (143 mph) and featured styling similar to that of the Jaguar XJ.[1]",
          "production": "1970–1989"
        },
        {
          "title": "Buick Centurion",
          "href": "https://en.wikipedia.org/wiki/Buick_Centurion",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%2772_Buick_Centurion_%28Auto_classique_Jukebox_Burgers_%2711%29.JPG/280px-%2772_Buick_Centurion_%28Auto_classique_Jukebox_Burgers_%2711%29.JPG",
          "description": "The Buick Centurion is a full-size car built from the 1971 through 1973 model years. Replacing the Wildcat as the sporty iteration of Buick's three full-size car lines, it slotted between the LeSabre and Electra in the lineup. The Centurion name was inspired by a Buick concept car, the name coming from that of an officer in the Roman Army.  The car's emblem was not the traditional Buick tri-shield, but a side profile of a centurion.",
          "production": "1971–73"
        },
        {
          "title": "Bugatti Type 18",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Type_18",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/1913_Bugatti_Type_18_2.jpg/280px-1913_Bugatti_Type_18_2.jpg",
          "description": "The Bugatti Type 18, also called the Garros, is an automobile produced from 1912 through 1914.  Produced shortly after the start of the business, the design was something of a relic.  It had much in common with the cars Ettore Bugatti had designed for Deutz Gasmotoren Fabrik but with the radiator of the Type 13.  Only 6 or 7 examples were built.",
          "production": "1908–14"
        },
        {
          "title": "Bugatti Type 40",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Type_40",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bugatti_Typ_49_Tourer_1929.jpg/280px-Bugatti_Typ_49_Tourer_1929.jpg",
          "description": "The early Bugatti 8-cylinder line began with the 1922 Type 30.  The same basic design was used for the 1926 Type 38 as well as the Type 40, Type 43, Type 44, and Type 49.",
          "production": "1926–30"
        },
        {
          "title": "Buick Apollo",
          "href": "https://en.wikipedia.org/wiki/Buick_Apollo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/1973_Buick_Apollo_%2819215630553%29.jpg/280px-1973_Buick_Apollo_%2819215630553%29.jpg",
          "description": "The Buick Apollo is a compact car that was manufactured from 1973 to 1975 by Buick. It was based on the GM X platform along with the Oldsmobile Omega, Chevrolet Nova, and the Pontiac Ventura. The car was named for the Greek god Apollo.",
          "production": "1973–75"
        },
        {
          "title": "Jaguar XF",
          "href": "https://en.wikipedia.org/wiki/Jaguar_XF",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2017_Jaguar_XF_Portfolio_D_Automatic_2.0.jpg/280px-2017_Jaguar_XF_Portfolio_D_Automatic_2.0.jpg",
          "description": "Jaguar XF may refer to:",
          "production": "2009–present"
        },
        {
          "title": "Lagonda V12",
          "href": "https://en.wikipedia.org/wiki/Lagonda_V12",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/1940_Lagonda_V12_DHC.jpg/280px-1940_Lagonda_V12_DHC.jpg",
          "description": "The Lagonda V12 is a large car produced by the British Lagonda company from 1938 to 1940. It was first shown at the 1936 London Motor Show but production did not commence until 1938. [1]",
          "production": "1938–40"
        },
        {
          "title": "Bugatti Type 30",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Type_30",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bugatti_Typ_49_Tourer_1929.jpg/280px-Bugatti_Typ_49_Tourer_1929.jpg",
          "description": "The early Bugatti 8-cylinder line began with the 1922 Type 30.  The same basic design was used for the 1926 Type 38 as well as the Type 40, Type 43, Type 44, and Type 49.",
          "production": "1922–26"
        },
        {
          "title": "Oreca 07",
          "href": "https://en.wikipedia.org/wiki/Oreca_07",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/TDS_Racing_Oreca_07_Perrodo_Silverstone_2018.jpg/220px-TDS_Racing_Oreca_07_Perrodo_Silverstone_2018.jpg",
          "description": "The Oreca 07 is a Le Mans Prototype built by French manufacturer Oreca to meet the 2017 FIA and ACO LMP2 regulations.[1] It made its official race debut in the opening round of the 2017 IMSA WeatherTech SportsCar Championship, the 24 Hours of Daytona,[2] and its FIA World Endurance Championship debut at the 2017 6 Hours of Silverstone. The car is the successor to the Oreca 05.",
          "production": "2017–present"
        },
        {
          "title": "Edsel Pacer",
          "href": "https://en.wikipedia.org/wiki/Edsel_Pacer",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/58_edsel_pacer.jpg/280px-58_edsel_pacer.jpg",
          "description": "The Edsel Pacer is an automobile that was produced and sold by Edsel in 1958. The Pacer was based on the shorter narrower Edsel platform, shared with Ford and the Ranger.[2]",
          "production": "1958"
        },
        {
          "title": "De Tomaso Longchamp",
          "href": "https://en.wikipedia.org/wiki/De_Tomaso_Longchamp",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/1985_De_Tomaso_Longchamp_GTS_%2820488487263%29.jpg/280px-1985_De_Tomaso_Longchamp_GTS_%2820488487263%29.jpg",
          "description": "The De Tomaso Longchamp is a grand tourer which was produced by the Italian automaker De Tomaso from 1972 to 1989.",
          "production": "1972–89"
        },
        {
          "title": "Checker Marathon",
          "href": "https://en.wikipedia.org/wiki/Checker_Marathon",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Checker-Marathon-2.jpg/280px-Checker-Marathon-2.jpg",
          "description": "The Checker Marathon is an automobile produced by the Checker Motors Corporation of Kalamazoo, Michigan, between 1961 and 1982.  It was marketed as a passenger car for consumers, as opposed to the similar Taxi, which was aimed at fleet buyers.",
          "production": "1961–82"
        },
        {
          "title": "De Tomaso Mangusta",
          "href": "https://en.wikipedia.org/wiki/De_Tomaso_Mangusta",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/De_Tomaso_Mangusta_%28Kirchzarten%29_jm20706.jpg/280px-De_Tomaso_Mangusta_%28Kirchzarten%29_jm20706.jpg",
          "description": "The De Tomaso Mangusta is a sports car produced by Italian automobile manufacturer De Tomaso between 1967 and 1971. It was succeeded by the De Tomaso Pantera.",
          "production": "1967–72"
        },
        {
          "title": "De Tomaso Guarà",
          "href": "https://en.wikipedia.org/wiki/De_Tomaso_Guar%C3%A0",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Guara_2.jpg/280px-Guara_2.jpg",
          "description": "The De Tomaso Guarà is a sports car and the last project the founder and owner Alejandro de Tomaso put into the market. Presented at the 1993 Geneva Motor Show, the Guarà was initially available in coupé body-style. Later a roadster and an open-top barchetta bodystyle became available. The latter corresponds to the coupé but without roof and proper windscreen; a small air deflector protects the passenger and the driver from the passing wind and the car had to be driven while wearing a helmet.",
          "production": "1993–2004"
        },
        {
          "title": "Panoz Roadster",
          "href": "https://en.wikipedia.org/wiki/Panoz_Roadster",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Panoz_Roadster.jpg/280px-Panoz_Roadster.jpg",
          "description": "The Panoz Roadster is a sports car launched in 1992 by the American manufacturer Panoz Auto Development Company of Georgia. The Roadster was succeeded by the AIV Roadster in 1997. They were built using aluminum, similar to that of the Plymouth Prowler first sold several years later in 1997. The Panoz Roadster was the first American built aluminum intensive vehicle.[1] ",
          "production": "1992–1999"
        },
        {
          "title": "Autobianchi A111",
          "href": "https://en.wikipedia.org/wiki/Autobianchi_A111",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Autobianchi_A111_black.jpg/280px-Autobianchi_A111_black.jpg",
          "description": "The Autobianchi A111 is a 4-door saloon family car produced from 1969 to 1972 by Italian car manufacturer Autobianchi, a subsidiary of the Fiat group.[2] Despite rather modest dimensions, at roughly 4 metres long, it was the largest Autobianchi ever made, as the brand specialized in small cars. A modern front-wheel drive construction like the Fiat 128 launched concurrently, it was based on the revolutionary Autobianchi Primula, Fiat's first \"experiment\" with the transverse engine front-wheel-drive setup.[3]",
          "production": "1969–1972"
        },
        {
          "title": "Facel Vega Facel II",
          "href": "https://en.wikipedia.org/wiki/Facel_Vega_Facel_II",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Facel_Vega_Coup%C3%A9.jpg/280px-Facel_Vega_Coup%C3%A9.jpg",
          "description": "The Facel Vega 'Facel II' was a French grand touring car produced by Facel Vega between the years 1962 and 1964.",
          "production": "1962–1964"
        },
        {
          "title": "SS 1",
          "href": "https://en.wikipedia.org/wiki/SS_1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Saxony_Classic_Rallye_2010_-_Jaguar_SS_1_1933_%28aka%29.jpg/280px-Saxony_Classic_Rallye_2010_-_Jaguar_SS_1_1933_%28aka%29.jpg",
          "description": "The SS 1 (the top of its radiator says 'SS One') is a British two-door sports saloon and tourer built by Swallow Coachbuilding Company in Foleshill, Coventry, England.  It was first presented to the public at the 1931 London Motor Show.[1]  In slightly modified form it was then manufactured between 1932 and 1936,[2][3] during which time 148 cars were built.",
          "production": "1932–1936"
        },
        {
          "title": "Vector M12",
          "href": "https://en.wikipedia.org/wiki/Vector_M12",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Vector_ASR2.jpg/280px-Vector_ASR2.jpg",
          "description": "The Vector M12 was a sports car manufactured by Vector Aeromotive under parent company Megatech, and was the first car produced after the hostile takeover of the company from Jerry Wiegert by the Indonesian company Megatech.[3] The model was produced from 1995 to 1999, when production was halted, partly due to slow sales of the cars and mismanagement[according to whom?] of the company.",
          "production": "1995–1999"
        },
        {
          "title": "Alpine A310",
          "href": "https://en.wikipedia.org/wiki/Alpine_A310",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Renault_Alpine_A310.jpg/280px-Renault_Alpine_A310.jpg",
          "description": "The Alpine A310 is a sports car built by French manufacturer Alpine, from 1971 to 1985.",
          "production": "1971–1984"
        },
        {
          "title": "BYD Tang",
          "href": "https://en.wikipedia.org/wiki/BYD_Tang",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/BYD_Tang_EV_001.jpg/280px-BYD_Tang_EV_001.jpg",
          "description": "The BYD Tang is a plug-in hybrid compact crossover sport utility vehicle (CUV) developed by BYD based on the BYD S6. The first generation was introduced at the 2014 Beijing Auto Show. The plug-in hybrid gets its name from the Tang Dynasty, known as the most prosperous of all the great Chinese Dynasties.[1] Retail deliveries began in China in June 2015.[2] The second generation debuted at Auto China in April 2018.[3]",
          "production": "2015–present"
        },
        {
          "title": "Chrysler minivans",
          "href": "https://en.wikipedia.org/wiki/Chrysler_minivans",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Chrysler_Pacifica_Fishes_%26_Oceans_Coast_Guard_Canada.jpg/280px-Chrysler_Pacifica_Fishes_%26_Oceans_Coast_Guard_Canada.jpg",
          "description": "The Chrysler minivans are a series of minivans that have been produced and marketed by the American automaker Chrysler. In production since the 1984 model year, Chrysler has produced six distinct generations of minivans; at various stages of their production, Chrysler minivans have been marketed worldwide, primarily in North America and Europe. ",
          "production": "1984–present"
        },
        {
          "title": "Edsel Citation",
          "href": "https://en.wikipedia.org/wiki/Edsel_Citation",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/1958_Edsel_Citation_%2829145341465%29.jpg/220px-1958_Edsel_Citation_%2829145341465%29.jpg",
          "description": "The Edsel Citation is an automobile that was produced by the Edsel division of Ford for the 1958 model year.  The flagship Edsel model line[3], the Citation was offered as a two-door convertible; all Citation sedans were produced as hardtops.  Slotted above the Corsair, the exterior of the Citation was distinguished by additional stainless steel trim and a gold-anodized aluminum cove panel (emulating the Mercury Turnpike Cruiser).  ",
          "production": "1958"
        },
        {
          "title": "Renault Alpine GTA/A610",
          "href": "https://en.wikipedia.org/wiki/Renault_Alpine_GTA/A610",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Renault_Alpine_V6_GT_Gen3_D500_1984-1991_frontright_2011-04-10_A.jpg/280px-Renault_Alpine_V6_GT_Gen3_D500_1984-1991_frontright_2011-04-10_A.jpg",
          "description": "The Renault Alpine GTA and the succeeding A610[1] was a sports coupe automobile produced by the Renault-owned French manufacturer Alpine between late 1984 and 1995. It replaced the slow-selling Alpine A310, with which it shared many features including the layout and engine.[2] The car underwent a substantive redesign in 1991, which is also when the new model name A610 was given.",
          "production": "1986–1995"
        },
        {
          "title": "Jaguar XK150",
          "href": "https://en.wikipedia.org/wiki/Jaguar_XK150",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/1959_Jaguar_XK150_%2825460836533%29.jpg/280px-1959_Jaguar_XK150_%2825460836533%29.jpg",
          "description": "The Jaguar XK150 is a sports car produced by Jaguar between 1957 and 1961 as the successor to the XK140.",
          "production": "1957–61"
        },
        {
          "title": "Alfa Romeo SZ",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_SZ",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/1990_Alfa_Romeo_SZ_3.0_Front.jpg/280px-1990_Alfa_Romeo_SZ_3.0_Front.jpg",
          "description": "The Alfa Romeo SZ (Sprint Zagato) or ES-30 (Experimental Sportscar 3.0 litre) is a high-performance limited-production sports car/road-concept car built between 1989 and 1991 by a partnership between Centro Stile Zagato, Centro Stile Alfa Romeo and Centro Stile Fiat. It was unveiled as the ES-30 at the 1989 Geneva Motor Show as a prototype by Zagato, although the car was mainly built by them - not designed mechanically.[2]",
          "production": "1989–1994"
        },
        {
          "title": "Cadillac Cimarron",
          "href": "https://en.wikipedia.org/wiki/Cadillac_Cimarron",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cadillac_Cimarron_2_--_07-01-2009.jpg/280px-Cadillac_Cimarron_2_--_07-01-2009.jpg",
          "description": "The Cadillac Cimarron is an entry-level luxury car manufactured and marketed by the Cadillac division of General Motors from 1981 to 1988 as a four-door sedan across a single generation.  ",
          "production": "1982–88"
        },
        {
          "title": "Bugatti EB110",
          "href": "https://en.wikipedia.org/wiki/Bugatti_EB110",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bugatti_EB110_-_Flickr_-_Supermac1961.jpg/280px-Bugatti_EB110_-_Flickr_-_Supermac1961.jpg",
          "description": "The Bugatti EB 110 is a mid-engine sports car produced by Bugatti Automobili S.p.A. from 1991 to 1995, when the company was liquidated. It was the only production model made by Romano Artioli's Italian incarnation of Bugatti.",
          "production": "1991–95"
        },
        {
          "title": "Eagle Talon",
          "href": "https://en.wikipedia.org/wiki/Eagle_Talon",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Talon_bandit.jpg/280px-Talon_bandit.jpg",
          "description": "The Eagle Talon is a two-door 2+2, Front-wheel drive (FWD) or All-wheel drive (AWD) hatchback coupé manufactured and marketed between 1989 and 1998 and sold by Eagle[1][2] along with rebadged variants the Plymouth Laser and Mitsubishi Eclipse.",
          "production": "1990–98"
        },
        {
          "title": "Alfa Romeo Montreal",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_Montreal",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Alfa_Romeo_Montreal.PNG/280px-Alfa_Romeo_Montreal.PNG",
          "description": "The Alfa Romeo Montreal is a 2+2 coupé sports car produced by the Italian manufacturer Alfa Romeo from 1970 to 1977.",
          "production": "1970–1977"
        },
        {
          "title": "BMW X5",
          "href": "https://en.wikipedia.org/wiki/BMW_X5",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019_BMW_X5_M50d_Automatic_3.0.jpg/280px-2019_BMW_X5_M50d_Automatic_3.0.jpg",
          "description": "The BMW X5 is a mid-size, rear-wheel drive luxury SUV produced by BMW.",
          "production": "1999–present"
        },
        {
          "title": "Ferrari 288 GTO",
          "href": "https://en.wikipedia.org/wiki/Ferrari_288_GTO",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ferrari_288_GTO_%281%29.JPG/280px-Ferrari_288_GTO_%281%29.JPG",
          "description": "The Ferrari GTO (often referred to as Ferrari 288 GTO)(Type F114) is an exotic homologation of the Ferrari 308 GTB produced from 1984 to 1987 in Ferrari's Maranello factory, designated GT for Gran Turismo and O for Omologata (homologated in Italian).[3]",
          "production": "1984–87"
        },
        {
          "title": "GM B platform",
          "href": "https://en.wikipedia.org/wiki/GM_B_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/81-85_Oldsmobile_Delta_88.jpg/280px-81-85_Oldsmobile_Delta_88.jpg",
          "description": "The GM B platform  (also known as GM B body) was General Motors' full-size rear-wheel drive automobile platform from 1926-1996. It was closely related to the original rear-wheel drive GM C and GM D platforms, and was used for convertibles, hardtops, coupés, sedans, and station wagons.",
          "production": "1991–96"
        },
        {
          "title": "GM B platform",
          "href": "https://en.wikipedia.org/wiki/GM_B_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/81-85_Oldsmobile_Delta_88.jpg/280px-81-85_Oldsmobile_Delta_88.jpg",
          "description": "The GM B platform  (also known as GM B body) was General Motors' full-size rear-wheel drive automobile platform from 1926-1996. It was closely related to the original rear-wheel drive GM C and GM D platforms, and was used for convertibles, hardtops, coupés, sedans, and station wagons.",
          "production": "1977–90"
        },
        {
          "title": "Morris Ital",
          "href": "https://en.wikipedia.org/wiki/Morris_Ital",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Morrisital.jpg/280px-Morrisital.jpg",
          "description": "The Morris Ital is a medium-sized car that was built by British Leyland (BL) from 1980-1984. A successor to the Morris Marina, it was available in a variety of bodystyles.",
          "production": "1980–84"
        },
        {
          "title": "Lamborghini LM002",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_LM002",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Lamborghini_LM002_Gen1_Type129_1986-1993_1988_frontleft_2013-03-17_U.JPG/280px-Lamborghini_LM002_Gen1_Type129_1986-1993_1988_frontleft_2013-03-17_U.JPG",
          "description": "The Lamborghini LM002 aka \"Lamborghini truck\" is an off-road Truck manufactured by Lamborghini between 1986 and 1993. The LM002 was an unusual departure for Lamborghini which, at the time, was primarily known for high-performance, hand-built, super/sports cars. The LM002 was not the first of its kind to be built by Lamborghini.  Two prototype vehicles, the Cheetah and the LM001, paved the way for LM002. Both vehicles used rear-mounted American power plants and were intended for military use, but were not well received. With the idea of using a front mounted Countach V12 to power the LM001 came the next model, the \"LM002\", which was the first of the three to see actual production by Lamborghini. The LM002 is part of a series of vehicles, the Lamborghini Militaria.",
          "production": "1986–93"
        },
        {
          "title": "Lamborghini Jalpa",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Jalpa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lamborghini_Jalpa.jpg/280px-Lamborghini_Jalpa.jpg",
          "description": "The Lamborghini Jalpa (Spanish pronunciation: [ˈxalpa]) is an entry level sports car produced by the Italian automotive manufacturer Lamborghini from 1981 to 1988. it debuted at the 1981 Geneva Motor Show alongside the Lamborghini LM001 concept off-road vehicle.[1] The Jalpa was the last Lamborghini to use a V8 engine until the Urus.",
          "production": "1981–88"
        },
        {
          "title": "Alfa Romeo 155",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_155",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Alfa_155_WB_crop.JPG/280px-Alfa_155_WB_crop.JPG",
          "description": "The Alfa Romeo 155 (Type 167) is a compact executive car produced by the Italian manufacturer Alfa Romeo between 1992 and 1997. It was released in January 1992 in Barcelona, and the first public launch was in March 1992, at the Geneva Motor Show. It was built in 192,618 units.",
          "production": "1992–1997"
        },
        {
          "title": "Audi Coupé (B2)",
          "href": "https://en.wikipedia.org/wiki/Audi_Coup%C3%A9_(B2)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Audi_coupe_v_sst.jpg/280px-Audi_coupe_v_sst.jpg",
          "description": "The Audi Coupé (B2, Typ 81/85) was a two-door coupé produced and sold by Audi from 1980 to 1988. It was offered as a less expensive version of its turbocharged, permanent four-wheel drive Audi Quattro without turbocharger(s) or four wheel drive. Later, quattro was added as an option (Typ 85). Typ 81 was the internal model code for front-wheel drive Audi Coupés.",
          "production": "1980–1996"
        },
        {
          "title": "BMW M1",
          "href": "https://en.wikipedia.org/wiki/BMW_M1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/BMW_M1_%288754868204%29_%28cropped%29.jpg/280px-BMW_M1_%288754868204%29_%28cropped%29.jpg",
          "description": "The BMW M1 (BMW type code E26) is a sports car produced by German automotive manufacturer BMW from 1978 to 1981.In the late 1970s, Italian automobile manufacturer Lamborghini entered into an agreement with BMW to build a production racing car in sufficient quantity for homologation, but conflicts arose that prompted BMW to produce the car themselves.[2][3]  The resulting car was sold to the public, from 1978 to 1981, as the BMW M1.",
          "production": "1978–81"
        },
        {
          "title": "BMW 3 Series",
          "href": "https://en.wikipedia.org/wiki/BMW_3_Series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/2019_BMW_330i_M_Sport_2.0_Front.jpg/280px-2019_BMW_330i_M_Sport_2.0_Front.jpg",
          "description": "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975. It is the successor to the 02 Series and has been produced in seven different generations.",
          "production": "1975–present"
        },
        {
          "title": "Avanti cars (non-Studebaker)",
          "href": "https://en.wikipedia.org/wiki/Avanti_cars_(non-Studebaker)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Avanti_Convertible.jpg/280px-Avanti_Convertible.jpg",
          "description": "The Avanti II is an American performance sports coupe based on the Studebaker Avanti and marketed through a succession of five different ownership arrangements subsequent to  Studebaker's discontinuation of the model. After the closure of Studebaker's South Bend factory on December 20, 1963, cars carrying the Avanti nameplate were initially produced from left-over Studebaker components and later, by the Avanti Motor Company from General Motors and Ford chassis and engines. Very few cars were made before all production ceased in 2006.",
          "production": "1965–1988"
        },
        {
          "title": "Cadillac Allanté",
          "href": "https://en.wikipedia.org/wiki/Cadillac_Allant%C3%A9",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Cadillac_Allante.jpg/280px-Cadillac_Allante.jpg",
          "description": "The Cadillac Allanté is a two-door, two-seater luxury roadster produced by Cadillac from 1987 until 1993. It used a Cadillac chassis and running gear with a body built in Italy by coachbuilder Pininfarina. It was expensive to produce with the complete bodies flown to Detroit for final assembly. Over 21,000 were built during its seven-year production run.",
          "production": "1986–93"
        },
        {
          "title": "Jaguar D-Type",
          "href": "https://en.wikipedia.org/wiki/Jaguar_D-Type",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/1955_Jaguar_XKD_34_left.jpg/280px-1955_Jaguar_XKD_34_left.jpg",
          "description": "Designed specifically to win the Le Mans 24-hour race, the slippery D-Type was produced by Jaguar Cars Ltd. between 1954 and 1957. Sharing the straight-6 XK engine and many mechanical components with its C-Type predecessor its structure however was radically different. Innovative monocoque construction and aerodynamic efficiency integrated aviation technology in a sports racing car, some examples including a renowned vertical stabilizer.",
          "production": "1954–56"
        },
        {
          "title": "Bugatti Type 57",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Type_57",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bugatti_Type_57_Atalante_1936.jpg/280px-Bugatti_Type_57_Atalante_1936.jpg",
          "description": "The Bugatti Type 57[1] and later variants (including the famous Atlantic and Atalante) was an entirely new design created by Jean Bugatti, son of founder Ettore.[2] Type 57s were built from 1934 through 1940, with a total of 710 examples produced.",
          "production": "1934–39"
        },
        {
          "title": "Ferrari 250 GT Lusso",
          "href": "https://en.wikipedia.org/wiki/Ferrari_250_GT_Lusso",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ferrari_250_GT_Lusso_Berlinetta.jpg/280px-Ferrari_250_GT_Lusso_Berlinetta.jpg",
          "description": "The Ferrari 250 GT Berlinetta Lusso is a GT car which was manufactured by Italian automaker Ferrari from 1962[3] to 1964. Sometimes known as the GTL, GT/L or just Lusso, it is larger and more luxurious[α] than the 250 GT Berlinetta. The 250 GT Lusso, which was not intended to compete in sports car racing, is considered to be one of the most elegant Ferraris.[4][5][6][7]",
          "production": "1964–68"
        },
        {
          "title": "Lamborghini Espada",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Espada",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lamborghini-Espada.jpg/280px-Lamborghini-Espada.jpg",
          "description": "The Lamborghini Espada is a 4-seat grand touring coupé built by Italian car manufacturer Lamborghini between 1968 and 1978.",
          "production": "1968–78"
        },
        {
          "title": "Lamborghini Reventón",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Revent%C3%B3n",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lamborghini_Revent%C3%B3n.jpg/280px-Lamborghini_Revent%C3%B3n.jpg",
          "description": "The Lamborghini Reventón (Spanish pronunciation: [reβenˈton]) is a mid-engine sports car that debuted at the 2007 Frankfurt Motor Show.[1] Its top speed was recorded while testing in the UAE at 221 miles per hour (355.7 km/h). The official press release stated that only 20 vehicles would be sold to the public,[2] with one additional car (marked as 00/20) produced for the Lamborghini museum.[3] Each car is stamped with its number in the sequence of 35 between the driver's and passenger's seats.",
          "production": "2007–09"
        },
        {
          "title": "Nissan Be-1",
          "href": "https://en.wikipedia.org/wiki/Nissan_Be-1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nissan_Be-1.JPG/280px-Nissan_Be-1.JPG",
          "description": "The Nissan Be-1 is a retro-styled three-door hatchback manufactured by Nissan for model years 1987-1988, and originally marketed solely in Japan at their Nissan Cherry Stores.",
          "production": "1987"
        },
        {
          "title": "Toyota Curren",
          "href": "https://en.wikipedia.org/wiki/Toyota_Curren",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Toyota_Curren_ST-206_1996_parking.jpg/280px-Toyota_Curren_ST-206_1996_parking.jpg",
          "description": "The Toyota Curren was a Japanese automobile built by the Toyota Motor Corporation. It was based on the Toyota T200 chassis. It shared the same interior and rear end design as the 1994-1998 Toyota Celica coupé. Instead of having four round headlights like the Celica, it had a rectangular headlight design providing a more traditional halogen headlight appearance. Modifying the appearance of the Celica allowed Toyota to sell the Curren at Toyota Vista Store locations, as the Celica was exclusive to Toyota Corolla Store locations. The Curren directly replaced the Toyota Corona Coupe, which was exclusive to Toyopet Store locations",
          "production": "1994–1998"
        },
        {
          "title": "BMW 5 Series",
          "href": "https://en.wikipedia.org/wiki/BMW_5_Series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/2018_BMW_520d_xDrive_M_Sport_Automatic_2.0_Front.jpg/280px-2018_BMW_520d_xDrive_M_Sport_Automatic_2.0_Front.jpg",
          "description": "The BMW 5 Series is an executive car manufactured by BMW since 1972. It is the successor to the New Class Sedans and is currently in its seventh generation.",
          "production": "1972–present"
        },
        {
          "title": "Ford RS200",
          "href": "https://en.wikipedia.org/wiki/Ford_RS200",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ford_RS200.jpg/280px-Ford_RS200.jpg",
          "description": "The Ford RS200 is a mid-engined, four-wheel drive sports car that was produced by Ford Motorsport in Boreham, UK, from 1984 to 1986. The road-going RS200 was the basis for Ford's Group B rally car and was designed to comply with FIA homologation regulations, which required 200 parts kits to be produced and at least one road-legal car to be assembled. It was first displayed to the public at the Belfast Motor Show.",
          "production": "1984–86"
        },
        {
          "title": "Ferrari F355",
          "href": "https://en.wikipedia.org/wiki/Ferrari_F355",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ferrari_F355_in_front_of_the_ArsDigita_offices_taken_by_Hans_Masing_in_July_2000.jpg/280px-Ferrari_F355_in_front_of_the_ArsDigita_offices_taken_by_Hans_Masing_in_July_2000.jpg",
          "description": "The Ferrari F355 (Type F129) is a sports car manufactured by Italian car manufacturer Ferrari produced from May 1994 to 1999. The car is a heavily revised Ferrari 348 with notable exterior and performance changes. The F355 was succeeded by the all-new Ferrari 360.",
          "production": "1994–99"
        },
        {
          "title": "Subaru 360",
          "href": "https://en.wikipedia.org/wiki/Subaru_360",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/1958_Subaru_360_01.jpg/280px-1958_Subaru_360_01.jpg",
          "description": "The Subaru 360 is a rear-engined, two-door city car manufactured and marketed from 1958 to 1971 by Subaru.  As the company's first automobile, production reached 392,000 over its 12-year model run.",
          "production": "1958–1971"
        },
        {
          "title": "Alfa Romeo GT",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_GT",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Alfa_GT_20090801_front.JPG/280px-Alfa_GT_20090801_front.JPG",
          "description": "The Alfa Romeo GT (Type 937) is a coupe automobile that was produced by the Italian automaker Alfa Romeo between 2003 and 2010.",
          "production": "2003–2010"
        },
        {
          "title": "De Tomaso Pantera",
          "href": "https://en.wikipedia.org/wiki/De_Tomaso_Pantera",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/De_Tomaso_Pantera_GT5-S_%287160836758%29.jpg/280px-De_Tomaso_Pantera_GT5-S_%287160836758%29.jpg",
          "description": "The De Tomaso Pantera is a mid-engine sports car produced by Italian automobile manufacturer De Tomaso from 1971 to 1993.[1] Italian for \"Panther\", the Pantera was the automaker's most popular model, with over 7,000 manufactured over its twenty-year production run.",
          "production": "1971–91"
        },
        {
          "title": "Nissan Figaro",
          "href": "https://en.wikipedia.org/wiki/Nissan_Figaro",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/1991_Nissan_Figaro_%28E-FK10%29_convertible_%2826452674766%29.jpg/280px-1991_Nissan_Figaro_%28E-FK10%29_convertible_%2826452674766%29.jpg",
          "description": "The Nissan Figaro is a front-engine, front-wheel drive, retro-styled two-door, 2+2, fixed-profile convertible manufactured by Nissan for model year 1991, and marketed in Japan at Nissan Cherry Stores.",
          "production": "1991"
        },
        {
          "title": "Volvo PV444/544",
          "href": "https://en.wikipedia.org/wiki/Volvo_PV444/544",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Volvo_PV444_ca_1957_arriving_at_Schaffen-Diest_Fly-drive_2014.JPG/280px-Volvo_PV444_ca_1957_arriving_at_Schaffen-Diest_Fly-drive_2014.JPG",
          "description": "The Volvo PV is a series of two-door, four-passenger car models — the PV444 and the PV544 — made by Volvo from 1947 to 1966. During World War II's early stages, Volvo decided that a new, smaller car that could deliver good fuel economy would assure the company's future. A raw materials shortage during the war drove home the point that an automobile should be smaller, and also complicated Volvo's ability to mass-produce the product. In 1944, when the car was finally introduced to a car-hungry public, response was very positive and orders poured in from the Swedish population. It was another three years though, until 1947, before series production began.",
          "production": "1944–1965"
        },
        {
          "title": "Austin Montego",
          "href": "https://en.wikipedia.org/wiki/Austin_Montego",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Austin_Montego_gold_1984_%28cleaned_filtered_balanced%29.jpg/280px-Austin_Montego_gold_1984_%28cleaned_filtered_balanced%29.jpg",
          "description": "The Austin Montego is a British family car that was produced by British Leyland from 1984 until 1988, and then by Rover Group from 1988 until 1995. The Montego was the replacement for both the rear-wheel-drive Morris Ital and the front-wheel-drive Austin Ambassador ranges to give British Leyland an all-new competitor for the Ford Sierra and Vauxhall Cavalier.",
          "production": "1984–1994"
        },
        {
          "title": "BYD F3DM",
          "href": "https://en.wikipedia.org/wiki/BYD_F3DM",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bilbao_05_2012_BYD_F3DM_2438.JPG/280px-Bilbao_05_2012_BYD_F3DM_2438.JPG",
          "description": "The BYD F3DM (Dual-mode) was a plug-in hybrid compact sedan manufactured by BYD with an all-electric range of 37 miles (60 km) and a hybrid electric powertrain that can extend the range an additional 300 miles (480 km).[3] The F3DM is the world's first mass-produced plug-in hybrid automobile and went on sale to government agencies and corporations in China on December 15, 2008.[2][4][5] During its first year in the market the F3DM plug-in sold only 48 vehicles.[6] Sales to the general public began in Shenzhen in March 2010,[7][8] and 417 units were sold during 2010.[9] Cumulative sales in China reached 3,284 units through October 2013, when sales ended,[10][11][12] and only 11 units were sold in Europe through October 2012.[13]",
          "production": "2008–2013"
        },
        {
          "title": "Henry J",
          "href": "https://en.wikipedia.org/wiki/Henry_J",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/1951_Henry_J.jpg/280px-1951_Henry_J.jpg",
          "description": "The Henry J was an American automobile built by the Kaiser-Frazer Corporation and named after its chairman, Henry J. Kaiser. Production of six-cylinder models began in July 1950, and four-cylinder production started shortly after Labor Day, 1950. Official public introduction was September 28, 1950. The car was marketed through 1954.",
          "production": "1951"
        },
        {
          "title": "Studebaker Champion",
          "href": "https://en.wikipedia.org/wiki/Studebaker_Champion",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Studebaker_Champion%2C_Dutch_licence_registration_AM-41-52_pic09.JPG/280px-Studebaker_Champion%2C_Dutch_licence_registration_AM-41-52_pic09.JPG",
          "description": "The Studebaker Champion is an automobile which was produced by the Studebaker Corporation of South Bend, Indiana from the beginning of the 1939 model year until 1958. It was a full-size car in its first three generations and a mid-size car in its fourth and fifth generation models.",
          "production": "1939–58"
        },
        {
          "title": "Jaguar SS100",
          "href": "https://en.wikipedia.org/wiki/Jaguar_SS100",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jaguar_SS100_in_SA.JPG/280px-Jaguar_SS100_in_SA.JPG",
          "description": "The SS Jaguar 100 is a British 2-seat sports car built between 1936 and 1941 by SS Cars Ltd of Coventry, England.",
          "production": "1935–39"
        },
        {
          "title": "Alfa Romeo Alfasud",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_Alfasud",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Alfasud_orange.jpg/280px-Alfasud_orange.jpg",
          "description": "The Alfa Romeo Alfasud (Type 901, 902 and 904) was a small family car, manufactured from 1971 to 1989 by Industria Napoletana Costruzioni Autoveicoli Alfa Romeo-Alfasud S.p.A of Italy, a new company owned by Alfa Romeo and Finmeccanica. The company was based in the southern region of Italy as a part of the labour policy of the government.",
          "production": "1972–1989"
        },
        {
          "title": "Autobianchi Y10",
          "href": "https://en.wikipedia.org/wiki/Autobianchi_Y10",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Autobianchi_Y10_Roma.jpg/280px-Autobianchi_Y10_Roma.jpg",
          "description": "The Autobianchi Y10 is a 'designer' city car and economy car manufactured from 1985 to 1995 and marketed under the Lancia brand in most export markets (as Lancia Y10). The car was manufactured at Fiat's Autobianchi plant in Desio, Milan until 1992 and after that in Arese, near Alfa Romeo's plants. It offered a very high level of trim for its market segment. The Y10 featured a new rear rigid axle suspension design (called Omega axle) that was subsequently fitted to the facelifted Fiat Panda. Despite its short length, the Y10 boasted a drag coefficient of just 0.31.",
          "production": "1985–1995"
        },
        {
          "title": "Alfa Romeo Spider",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_Spider",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Alfa_Romeo_%283568179480%29.jpg/280px-Alfa_Romeo_%283568179480%29.jpg",
          "description": "The Alfa Romeo Spider (105/115 series) is a two-seater, front engine, rear drive roadster manufactured and marketed by Alfa Romeo from 1966 to 1994 in four distinct series, each with modifications ranging from modest to extensive.[3]",
          "production": "1966–1993"
        },
        {
          "title": "Audi R8",
          "href": "https://en.wikipedia.org/wiki/Audi_R8",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2018_Audi_R8_Coupe_V10_plus_Front.jpg/280px-2018_Audi_R8_Coupe_V10_plus_Front.jpg",
          "description": "The Audi R8[2] is a mid-engine, 2-seater sports car,[2][3] which uses Audi's trademark quattro permanent all-wheel drive system.[2] It was introduced by the German car manufacturer Audi AG in 2006.",
          "production": "2007–present"
        },
        {
          "title": "Ferrari F430",
          "href": "https://en.wikipedia.org/wiki/Ferrari_F430",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ferrari_F430_-_Flickr_-_Alexandre_Pr%C3%A9vot_%284%29.jpg/280px-Ferrari_F430_-_Flickr_-_Alexandre_Pr%C3%A9vot_%284%29.jpg",
          "description": "1,569 kg (3,460 lb) (Spider)[4] 1,497 kg (3,300 lb) (Scuderia Spider 16M)[5]",
          "production": "2004–2009"
        },
        {
          "title": "Chevrolet Citation",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Citation",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Chevrolet_Citation_II_front.jpg/280px-Chevrolet_Citation_II_front.jpg",
          "description": "The Chevrolet Citation is a range of compact cars that was produced by the Chevrolet division of General Motors for a single generation, from the 1980 to 1985 model years. Developed as the replacement for the Chevrolet Nova, the Citation was the first Chevrolet sold with front-wheel drive. Chevrolet offered three body styles: a three- and five-door hatchback, alongside a two-door notchback coupe.[1]    ",
          "production": "1980–85"
        },
        {
          "title": "LaFerrari",
          "href": "https://en.wikipedia.org/wiki/LaFerrari",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/280px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg",
          "description": "LaFerrari, project name F150 (also unofficially referred to as the Ferrari LaFerrari or Ferrari F150),[4] is a limited production hybrid sports car built by Italian automotive manufacturer Ferrari.[5] LaFerrari means \"The Ferrari\" in Italian and some other Romance languages, in the sense that it is the \"definitive\" Ferrari.",
          "production": "2013–2015"
        },
        {
          "title": "FSO Polonez",
          "href": "https://en.wikipedia.org/wiki/FSO_Polonez",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Polonez_niebieski.jpg/280px-Polonez_niebieski.jpg",
          "description": "The FSO Polonez is a motor vehicle that was developed in Poland in collaboration with Fiat and produced by Fabryka Samochodów Osobowych from 1978 to 2002. It was based on the Polski Fiat 125p platform with a new hatchback design by Giorgetto Giugiaro.[1] It was available in a variety of body styles that included two- and four- door compact-sized cars, station wagons, as well as commercial versions that included pickup truck and ambulance uses. With production total of over 1 million units, not counting pick-up and van variants.[2] The Polonez was marketed in other nations and was popular in its domestic market until Poland joined the European Union in 2004.[3] ",
          "production": "1978–2002"
        },
        {
          "title": "Toyota Ipsum",
          "href": "https://en.wikipedia.org/wiki/Toyota_Ipsum",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2003-2010_Toyota_Avensis_Verso_%28ACM21R%29_GLX_wagon_%282011-07-17%29.jpg/280px-2003-2010_Toyota_Avensis_Verso_%28ACM21R%29_GLX_wagon_%282011-07-17%29.jpg",
          "description": "The Toyota Ipsum, Picnic, SportsVan or Avensis Verso is a seven-seater multi-purpose vehicle produced by the Japanese automaker Toyota from 1995 to 2009. The Ipsum, like many Toyota products, was shared as a trio of the Toyota Gaia, and sold only at Japanese Toyota dealerships called Toyota Store, next to the Toyota Carina. The Gaia was unique to Toyopet Store locations, and the Toyota Nadia was sold at Toyota Corolla Store.",
          "production": "1995–2009"
        },
        {
          "title": "Dodge Aries",
          "href": "https://en.wikipedia.org/wiki/Dodge_Aries",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/280px-1985-89_Plymouth_Reliant_K_LE.png",
          "description": "The Plymouth Reliant and  Dodge Aries were introduced for model year 1981 as the first \"K-cars\" manufactured and marketed by the Chrysler Corporation. The Reliant was available as a 2-door coupe, 4-door sedan, or as a 4-door station wagon, in three different trim lines: base, Custom and SE (\"Special Edition\"). Station wagons came only in Custom or SE trim. Unlike many small cars, the K-cars retained the traditional 6 passenger 2 bench seat with column shifter seating arrangement favored by many Americans. The Reliant was powered by a then-new 2.2 L I4 SOHC engine, with a Mitsubishi \"Silent Shaft\" 2.6 L as an option (curiously this engine also featured hemispherical combustion chambers, and all 1981 models equipped with it featured \"HEMI\" badges on the front fenders). Initial sales were brisk, with the both Reliant and Aries each selling over 150,000 units in 1981. As rebadged variants, the Reliant and Aries were manufactured in Newark, Delaware, Detroit, Michigan, and Toluca, Mexico — in a single generation. After their introduction, the Reliant and Aries were marketed as the \"Reliant K\" and \"Aries K\".[2] ",
          "production": "1981–89"
        },
        {
          "title": "Suzuki Cappuccino",
          "href": "https://en.wikipedia.org/wiki/Suzuki_Cappuccino",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Suzuki_Cappuccino_front_20090514.jpg/280px-Suzuki_Cappuccino_front_20090514.jpg",
          "description": "The Suzuki Cappuccino is a small 2-door, 2-seater detachable hardtop minicar produced by Suzuki. The vehicle was designed to meet Kei car specifications for lower tax and insurance in Japan. Weighing 725 kg (1,598 lb), the Cappuccino is powered by a turbocharged, three-cylinder, 657 cc DOHC engine (just under the 660cc maximum displacement allowed for a Kei car). Its dimensions also conformed to Kei car regulations on length and width, being 3,295 mm (129.7 in) long and 1,395 mm (54.9 in) wide.",
          "production": "1991–97"
        },
        {
          "title": "GM J platform",
          "href": "https://en.wikipedia.org/wiki/GM_J_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Vauxhall_Cavalier.jpg/280px-Vauxhall_Cavalier.jpg",
          "description": "The General Motors J platform, or J-body, is an automobile platform that was used by General Motors from 1981 to 2005.  Marking the transition to front-wheel drive in the compact-car segment in North America, the J platform was the successor to the H platform, making it the third generation of compact cars designed by the company.  Outside North America, the J platform was adopted by GM-controlled subsidiaries making the same transition to front-wheel drive, though as a mid-size car.",
          "production": "1981–97"
        },
        {
          "title": "Ford Model A (1927-1931)",
          "href": "https://en.wikipedia.org/wiki/Ford_Model_A_(1927-1931)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/1928_Model_A_Ford.jpg/280px-1928_Model_A_Ford.jpg",
          "description": "Convertible Sedan (400A)Business CoupeCoupeDeluxe CoupeSpecial Coupe ('28–29 limited run)Sport CoupeStandard CoupeDeluxe CoupeStandard Fordor Sedan – MurrayStandard Fordor Sedan – BriggsDeluxe Fordor Sedan – MurrayDeluxe Fordor Sedan – BriggsLeatherback Fordor SedanStandard Fordor Sedan – Slant windshieldMail TruckPanel TruckPhaeton 2-doorPhaeton 4-doorDeluxe Service PickupRoadster PickupCabrioletPickupDeluxe PickupStandard RoadsterRoadster UtilityDeluxe RoadsterSport RoadsterStation WagonTaxi CabTown CarTown Car DeliveryStandard Tudor SedanDeluxe Tudor SedanVictoriaWood Panel Delivery",
          "production": "1927–31"
        },
        {
          "title": "Fiat 127",
          "href": "https://en.wikipedia.org/wiki/Fiat_127",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Fiat_127_mk1.jpg/280px-Fiat_127_mk1.jpg",
          "description": "The Fiat 127 is a supermini car produced by Italian car manufacturer FIAT from 1971 to 1983. It was introduced in 1971 as the replacement for the Fiat 850. Production of the 127 in Italy ended in 1983 following the introduction of its replacement, the Fiat Uno.",
          "production": "1971–83"
        },
        {
          "title": "Vector W8",
          "href": "https://en.wikipedia.org/wiki/Vector_W8",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/VectorW8.jpg/280px-VectorW8.jpg",
          "description": "The Vector W8 is a sports car produced by American automobile manufacturer Vector Aeromotive Corporation from 1989 to 1993.[1] It was designed by company founder and chief designer Gerald Wiegert[1][5] while receiving refinements by Vector's head of engineering David Kostka. The W8 was the production version of the Vector W2 prototype that the company demonstrated throughout the 1980s.",
          "production": "1989–1993"
        },
        {
          "title": "BMW 327",
          "href": "https://en.wikipedia.org/wiki/BMW_327",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Emw327-totale-nah.jpg/280px-Emw327-totale-nah.jpg",
          "description": "The BMW 327 is a medium-sized touring coupé produced by the Bavarian firm between 1937 and 1941,[3] and again produced after 1945. It sat on a shortened version of the BMW 326 chassis.",
          "production": "1937–1955"
        },
        {
          "title": "Bugatti Type 55",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Type_55",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bugatti_Type_55.jpg/280px-Bugatti_Type_55.jpg",
          "description": "The Bugatti Type 55 is a sports car produced by Bugatti from 1932-1935. It is a road-going version of the Type 51 Grand Prix car. A roadster, it had a 108.3 in (2750 mm) wheelbase and 1800 lb (816 kg) weight.",
          "production": "1932–35"
        },
        {
          "title": "Edsel Bermuda",
          "href": "https://en.wikipedia.org/wiki/Edsel_Bermuda",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Edsel_Bermuda%2C_1958.png/280px-Edsel_Bermuda%2C_1958.png",
          "description": "The Edsel Bermuda is a station wagon that was produced and sold by Edsel in 1958. Like the Edsel Villager and Edsel Roundup station wagons, the Bermuda was built on a 116-inch (2,946 mm) wheelbase shared with Ford's station wagons, as well as core body stampings.",
          "production": "1958"
        },
        {
          "title": "Ford CE14 platform",
          "href": "https://en.wikipedia.org/wiki/Ford_CE14_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ford_Escort_front_20080205.jpg/280px-Ford_Escort_front_20080205.jpg",
          "description": "The Ford CE14 platform was a front wheel drive automobile platform used by the Ford Motor Company as the platform from third to sixth-generation European Ford Escort models, in the Ford Orion, in the first generation of North American Ford Escort, in the Ford Tempo, in the Ford EXP and in the Ford Verona.[1] The Ford CE14 based Escort was replaced by the first-generation Ford Focus which was built on the then new Ford C170 platform.[2]",
          "production": "1981–90"
        },
        {
          "title": "Smart Roadster",
          "href": "https://en.wikipedia.org/wiki/Smart_Roadster",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2004_Smart_Roadster_Speedsilver_Automatic_700cc_Front.jpg/280px-2004_Smart_Roadster_Speedsilver_Automatic_700cc_Front.jpg",
          "description": "The Smart Roadster (W452) is a two-door, two-seater sports car (S-segment in Europe) first introduced in 2003 by Smart GmbH. Sales of the Roadster and Roadster Coupé met expectations, however, warranty claims resulted in a halt of production of both models in November 2005 after 43,091 Roadsters were made. The last one built now resides in the Mercedes-Benz Museum.",
          "production": "2003–2006"
        },
        {
          "title": "Lamborghini Jarama",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Jarama",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lamborghini_Jarama_at_AutoItalia_Brooklands_May_2012_1-cropped.jpg/280px-Lamborghini_Jarama_at_AutoItalia_Brooklands_May_2012_1-cropped.jpg",
          "description": "The Lamborghini Jarama (Spanish pronunciation: [xaˈɾama]) is a 2+2 grand tourer manufactured and marketed  by Italian car manufacturer Lamborghini between 1970 and 1976. It was styled by Bertone designer Marcello Gandini. ",
          "production": "1970–76"
        },
        {
          "title": "Dodge Coronet",
          "href": "https://en.wikipedia.org/wiki/Dodge_Coronet",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Dodge_Coronet_500_Coupe_%28Orange_Julep%29.jpg/280px-Dodge_Coronet_500_Coupe_%28Orange_Julep%29.jpg",
          "description": "The Coronet is an automobile that was marketed by Dodge as a full-size car in the 1950s, initially the division's highest trim line but[1], starting in 1955, the lowest trim line. From the 1965 to 1975 model years the name was on intermediate-sized models. A coronet is a small crown consisting of ornaments fixed on a metal ring.",
          "production": "1949–76"
        },
        {
          "title": "Ferrari 275",
          "href": "https://en.wikipedia.org/wiki/Ferrari_275",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/1966_Ferrari_275_GTB_sn_08549%2C_front_left_%28Greenwich_2019%29.jpg/280px-1966_Ferrari_275_GTB_sn_08549%2C_front_left_%28Greenwich_2019%29.jpg",
          "description": "The Ferrari 275 is a series of front-engined V12-powered grand touring automobiles with two-seater coupé and spider bodies produced by Ferrari between 1964 and 1968. The first 275 series cars were powered by a 3.3 L (3286 cc) dual overhead camshaft Colombo 60° V12 engine producing 260–320 hp (190–240 kW). An updated 275 GTB/4 was introduced in 1966, with a revised four overhead camshaft engine producing 300 hp (220 kW). The 275 series were the first road-going Ferraris equipped with a transaxle and independent rear suspension.[1][2]",
          "production": "1964–68"
        },
        {
          "title": "BMW 326",
          "href": "https://en.wikipedia.org/wiki/BMW_326",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/BMW_326_limousine_1938_as_before_but_slightly_cropped.jpg/280px-BMW_326_limousine_1938_as_before_but_slightly_cropped.jpg",
          "description": "The BMW 326 is a medium-sized sedan produced by BMW between 1936 and 1941,[3] and again briefly, under Soviet control, after 1945. The 326 was BMW's first four-door sedan.[4] It had an innovative design and sold well despite its relatively high price. It also had an unusually involved afterlife.",
          "production": "1936–1941"
        },
        {
          "title": "DeSoto Custom",
          "href": "https://en.wikipedia.org/wiki/DeSoto_Custom",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/De_Soto_Custom_4-Door_Sedan_1949.jpg/280px-De_Soto_Custom_4-Door_Sedan_1949.jpg",
          "description": "The DeSoto Custom is an automobile produced by DeSoto from 1939 until the 1952 model year.  While in production, the Custom was DeSoto’s top-trim level car, and was offered in a wide array of body styles, including a 7-passenger sedan[2] and the extended-wheelbase Suburban sedans.",
          "production": "1939–52"
        },
        {
          "title": "Peugeot 204",
          "href": "https://en.wikipedia.org/wiki/Peugeot_204",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Peugeot_204_front_20120630.jpg/280px-Peugeot_204_front_20120630.jpg",
          "description": "The Peugeot 204 is a small family car produced by the French manufacturer Peugeot between 1965 and 1976.",
          "production": "1965–76"
        },
        {
          "title": "Toyota Sports 800",
          "href": "https://en.wikipedia.org/wiki/Toyota_Sports_800",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Toyota_Sports_800_at_History_Garage.jpg/280px-Toyota_Sports_800_at_History_Garage.jpg",
          "description": "The Toyota Sports 800 is Toyota's first production sports car. The prototype for the Sports 800, called the Publica Sports, debuted at the 1962 Tokyo Auto Show, featuring a space age sliding canopy and utilizing the 21 kW (28 hp) power train of the Publica 700, a Japanese market economy car. The Toyota Sports 800 is affectionately called the \"Yota-Hachi\" (ヨタハチ), which is a Japanese short form for \"Toyota 8\". In Japan, the vehicle was exclusive to Toyota Japan retail sales channel called Toyota Public Store alongside the Publica.",
          "production": "1965–69"
        },
        {
          "title": "AC Frua",
          "href": "https://en.wikipedia.org/wiki/AC_Frua",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ac_Frua_Roadster.JPG/280px-Ac_Frua_Roadster.JPG",
          "description": "The AC Frua or AC 428 is a British GT built by AC Cars from 1965 to 1973. Production was 81 cars built in total: 49 coupés (known as fastbacks), 29 convertibles, and 3 special bodied.",
          "production": "1965–1973"
        },
        {
          "title": "Austin Maestro",
          "href": "https://en.wikipedia.org/wiki/Austin_Maestro",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Austin_Maestro_1982.JPG/280px-Austin_Maestro_1982.JPG",
          "description": "The Austin Maestro is a five-door hatchback small family car (and two-door van derivative) that was produced from 1982 to 1987 by British Leyland, and from 1988 until 1994 by Rover Group. The car was produced at Morris' former Oxford plant, also known as Cowley. Today, the redeveloped factory produces the BMW Mini. An MG-branded performance version was sold as the MG Maestro from 1983 until 1991. Although later models were sometimes referred to as the Rover Maestro, the model never wore the Rover badge. A three-box (non-hatchback)  car, the Montego, was a derivative of the Maestro.",
          "production": "1983–1994"
        },
        {
          "title": "Chevrolet Monza",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Monza",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/75_Chevy_Monza_2%2B2.jpg/280px-75_Chevy_Monza_2%2B2.jpg",
          "description": "The Chevrolet Monza is a subcompact automobile produced by Chevrolet for the 1975–1980 model years. The Monza is based on the Chevrolet Vega, sharing its wheelbase, width and 140-CID (2,300 cc) inline-four engine. The 1975 Monza 2+2 was designed to accommodate the GM-Wankel rotary engine, but due to mediocre fuel-economy and emissions-compliance issues the engine was cancelled, and a fuel-efficient, 4.3-liter & 5.7-liter V8 engine option was substituted.[1] The name was also used for the Latin-American version of the Opel Ascona C.",
          "production": "1975–80"
        },
        {
          "title": "BMW 328",
          "href": "https://en.wikipedia.org/wiki/BMW_328",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/BMW_328_%2816.06.2007%29.jpg/280px-BMW_328_%2816.06.2007%29.jpg",
          "description": "The BMW 328 is a sports car made by BMW between 1936 and 1940, with the body design credited to Peter Szymanowski, who became BMW chief of design after World War II (although technically the car was designed by Fritz Fiedler).",
          "production": "1936–1940"
        },
        {
          "title": "BMW 3200 CS",
          "href": "https://en.wikipedia.org/wiki/BMW_3200_CS",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Silver_BMW_3200_CS.JPG/280px-Silver_BMW_3200_CS.JPG",
          "description": "The BMW 3200 CS was a sports touring car manufactured by BMW between January 1962 and September 1965. It was designed by Bertone and was introduced at the 1961 Frankfurt Motor Show. More than five hundred were built.",
          "production": "1962–1965"
        },
        {
          "title": "De Tomaso Vallelunga",
          "href": "https://en.wikipedia.org/wiki/De_Tomaso_Vallelunga",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/De_Tomaso_Vallelunga.jpg/280px-De_Tomaso_Vallelunga.jpg",
          "description": "The De Tomaso Vallelunga is a mid-engine sports car produced by De Tomaso from 1964 until 1968. It was the first road going automobile manufactured by the company.",
          "production": "1964–1968"
        },
        {
          "title": "Simca 1100",
          "href": "https://en.wikipedia.org/wiki/Simca_1100",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Simca-1100-TI.JPG/280px-Simca-1100-TI.JPG",
          "description": "The Simca 1100 is a car built from 1967 to 1982 by Simca. It was replaced by the Simca-Talbot Horizon.",
          "production": "1967–85"
        },
        {
          "title": "Ford Ranchero",
          "href": "https://en.wikipedia.org/wiki/Ford_Ranchero",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/1967_Ford_Ranchero.jpg/280px-1967_Ford_Ranchero.jpg",
          "description": "The Ford Ranchero is a coupe utility that was produced by Ford between 1957 and 1979. Unlike a pickup truck, the Ranchero was adapted from a two-door station wagon platform that integrated the cab and cargo bed into the body. A total of 508,355 units were produced during the model's production run.[1] Over its lifespan it was variously derived from full-sized, compact, and intermediate automobiles sold by Ford for the North American market.",
          "production": "1957–79"
        },
        {
          "title": "Bugatti Type 38",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Type_38",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bugatti_Typ_49_Tourer_1929.jpg/280px-Bugatti_Typ_49_Tourer_1929.jpg",
          "description": "The early Bugatti 8-cylinder line began with the 1922 Type 30.  The same basic design was used for the 1926 Type 38 as well as the Type 40, Type 43, Type 44, and Type 49.",
          "production": "1926–27"
        },
        {
          "title": "Facel Vega FVS",
          "href": "https://en.wikipedia.org/wiki/Facel_Vega_FVS",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Facel-Vega_FV_Front-view.JPG/280px-Facel-Vega_FV_Front-view.JPG",
          "description": "The Facel Vega FV/FVS was a car produced by French car maker Facel from 1954 to 1959. It continued until 1962 as the HK500.",
          "production": "1954–1962"
        },
        {
          "title": "Plymouth Voyager",
          "href": "https://en.wikipedia.org/wiki/Plymouth_Voyager",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/%2796_Plymouth_Voyager_3-Door.JPG/280px-%2796_Plymouth_Voyager_3-Door.JPG",
          "description": "Plymouth Voyager is a nameplate for a range of vans that were marketed by the Plymouth division of Chrysler.  From 1974 to 1983, the Voyager was a full-size van, sold as the counterpart of Dodge Sportsman (later the Dodge Ram Wagon).  For 1984, the Voyager became a Chrysler minivan sold alongside the Dodge Caravan; as a minivan, three generations of the Voyager were sold from 1984 to 2000.  Following the closure of the Plymouth division in 2000, the Voyager was marketed under the Chrysler brand (as a lower-trim version of the Chrysler Town & Country), where it was sold through 2003.",
          "production": "1974–2000"
        },
        {
          "title": "BMW 503",
          "href": "https://en.wikipedia.org/wiki/BMW_503",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BMW_503_Coup%C3%A9_%285746741521%29.jpg/280px-BMW_503_Coup%C3%A9_%285746741521%29.jpg",
          "description": "The BMW 503 is a two-door 2+2 gran turismo manufactured by German automaker BMW from 1956 to 1959.  The company developed the 503 alongside the 507 roadster in an attempt to sell a significant number of luxury cars in the United States. The 503 and 507 cost about twice their projected price and did not recover their costs. During production from May 1956 to March 1959, 413 units of the 503 were built. Even though it was a prestige model it resulted in heavy losses for BMW.",
          "production": "1956–1959"
        },
        {
          "title": "Dodge Aries",
          "href": "https://en.wikipedia.org/wiki/Dodge_Aries",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/280px-1985-89_Plymouth_Reliant_K_LE.png",
          "description": "The Plymouth Reliant and  Dodge Aries were introduced for model year 1981 as the first \"K-cars\" manufactured and marketed by the Chrysler Corporation. The Reliant was available as a 2-door coupe, 4-door sedan, or as a 4-door station wagon, in three different trim lines: base, Custom and SE (\"Special Edition\"). Station wagons came only in Custom or SE trim. Unlike many small cars, the K-cars retained the traditional 6 passenger 2 bench seat with column shifter seating arrangement favored by many Americans. The Reliant was powered by a then-new 2.2 L I4 SOHC engine, with a Mitsubishi \"Silent Shaft\" 2.6 L as an option (curiously this engine also featured hemispherical combustion chambers, and all 1981 models equipped with it featured \"HEMI\" badges on the front fenders). Initial sales were brisk, with the both Reliant and Aries each selling over 150,000 units in 1981. As rebadged variants, the Reliant and Aries were manufactured in Newark, Delaware, Detroit, Michigan, and Toluca, Mexico — in a single generation. After their introduction, the Reliant and Aries were marketed as the \"Reliant K\" and \"Aries K\".[2] ",
          "production": "1981–89"
        },
        {
          "title": "Facel Vega Excellence",
          "href": "https://en.wikipedia.org/wiki/Facel_Vega_Excellence",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Facel_Vegal_Excellence_front.jpg/280px-Facel_Vegal_Excellence_front.jpg",
          "description": "The Excellence is a luxury saloon automobile that was unveiled by Facel-Vega of Paris, France, at the Paris Auto Show in October 1956 to rave reviews by the motoring press. ",
          "production": "1958–1964"
        },
        {
          "title": "Lamborghini Islero",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Islero",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lamborghini_Islero_german_licence_registration_SG_UU_5H-2_pic4.JPG/280px-Lamborghini_Islero_german_licence_registration_SG_UU_5H-2_pic4.JPG",
          "description": "The Lamborghini Islero is a grand tourer produced by Italian automaker Lamborghini between 1968 and 1969. It was the replacement for the 400GT and featured the Lamborghini V12 engine. The car debuted at the 1968 Geneva Auto Show. The Islero (Italian pronunciation: [iˈzlɛːro], Spanish: [iˈ(z)leɾo]) was named after a Miura bull that killed matador Manuel Rodriguez \"Manolete\" on August 28, 1947 (Lamborghini also produced a car named the Miura, from 1966 to 1973).",
          "production": "1968–69"
        },
        {
          "title": "Nash Statesman",
          "href": "https://en.wikipedia.org/wiki/Nash_Statesman",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nash_Stateman_2-Door_Sedan_1951.jpg/280px-Nash_Stateman_2-Door_Sedan_1951.jpg",
          "description": "The Nash Statesman is a full-sized automobile that was built by Nash Motors for the 1950–1956 model years. The Statesman was the mid-level product of Nash Motors' automobile series and was positioned below the top-line Nash Ambassador, but above the Nash Rambler.",
          "production": "1950–56"
        },
        {
          "title": "Edsel Villager",
          "href": "https://en.wikipedia.org/wiki/Edsel_Villager",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/1959_Edsel_Villager_-_Red.jpg/280px-1959_Edsel_Villager_-_Red.jpg",
          "description": "The Edsel Villager is a station wagon that was produced and sold by Edsel from 1958 to 1960.  Like the two-door Roundup and premium Bermuda station wagons, the Villager was initially built on a 116 in wheelbase shared with Ford's station wagons, and, throughout its lifespan, shared Ford's wagons core body stampings. The Villager and the Ranger were the only two model names that existed throughout Edsel's three-year life span as an automobile marque.",
          "production": "1958-60"
        },
        {
          "title": "Toyota 2000GT",
          "href": "https://en.wikipedia.org/wiki/Toyota_2000GT",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/TOYOTA_2000GT.jpg/280px-TOYOTA_2000GT.jpg",
          "description": "The Toyota 2000GT is a limited-production, front-engine, rear-wheel-drive, two-seat, hardtop coupé grand tourer designed by Toyota in collaboration with Yamaha. First displayed to the public at the Tokyo Motor Show in 1965, the 2000GT was manufactured under contract by Yamaha between 1967 and 1970. A halo car for the automaker, in Japan it was exclusive to Toyota's Japanese retail sales channel called Toyota Store.",
          "production": "1967–70"
        },
        {
          "title": "BYD e6",
          "href": "https://en.wikipedia.org/wiki/BYD_e6",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/2014_BYD_E6.jpg/280px-2014_BYD_E6.jpg",
          "description": "The BYD e6 is an all-electric compact crossover/compact MPV manufactured by BYD with a range of 300 km (186 mi) according to the carmaker.[2] Field testing began in China in May 2010 with 40 units operating as taxis in the city of Shenzhen.[3] Sales to the general public began in Shenzhen on October 26, 2011, after over two years behind schedule (the original release date was in 2009).[4][5] As of September 2019[update], e6 units are operating as taxis in China, Indonesia, Colombia, Belgium, the U.S. (New York and Chicago), the Netherlands, and the U.K.[6] Since 2010 sales in China totaled 34,862 units through December 2016.[7][8] The BYD e6 ranked as the best-selling pure electric car in China in 2016[8] and won a golden medal for “Best Quality Product” at the Havana International Fair 2015.[9]",
          "production": "2010–present"
        },
        {
          "title": "Ferrari Testarossa",
          "href": "https://en.wikipedia.org/wiki/Ferrari_Testarossa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/061_-_Ferrari_Testarossa_-_Flickr_-_Price-Photography.jpg/280px-061_-_Ferrari_Testarossa_-_Flickr_-_Price-Photography.jpg",
          "description": "The Ferrari Testarossa (Type F110) is a 12-cylinder mid-engine sports car manufactured by Ferrari, which went into production in 1984 as the successor to the Ferrari Berlinetta Boxer. The Pininfarina-designed car was originally produced from 1984 to 1991, with two model revisions following the end of Testarossa production called the 512 TR and F512 M, which were produced from 1992 to 1996. Including revised variations, almost 10,000 cars in total were produced, making it one of the most mass-produced Ferrari models.[2]",
          "production": "1984–96"
        },
        {
          "title": "Fiat X1/9",
          "href": "https://en.wikipedia.org/wiki/Fiat_X1/9",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Nationale_oldtimerdag_Zandvoort_2010%2C_1978_FIAT_X1-9%2C_51-VV-18_pic2.JPG/280px-Nationale_oldtimerdag_Zandvoort_2010%2C_1978_FIAT_X1-9%2C_51-VV-18_pic2.JPG",
          "description": "The Fiat X1/9 is a two-seater mid-engined sports car designed by Bertone and manufactured by Fiat from 1972–1982 and subsequently by Bertone from 1982–1989.[2]",
          "production": "1972–89"
        },
        {
          "title": "Edsel Corsair",
          "href": "https://en.wikipedia.org/wiki/Edsel_Corsair",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edsel_Corsair_1959.jpg/280px-Edsel_Corsair_1959.jpg",
          "description": "The Edsel Corsair is an automobile that was produced and sold by Edsel in 1958 and 1959.  For 1958, the Corsair was built on the longer, wider Edsel platform shared with Mercury.[1] For 1959, the Corsair shared the shorter, narrower Ranger platform with Ford.",
          "production": "1958-59"
        },
        {
          "title": "Jaguar C-Type",
          "href": "https://en.wikipedia.org/wiki/Jaguar_C-Type",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Jaguar_C-Type_XKC.jpg/280px-Jaguar_C-Type_XKC.jpg",
          "description": "The Jaguar C-Type (also called the Jaguar XK120-C) is a racing sports car built by Jaguar and sold from 1951 to 1953. The \"C\" stands for \"competition\".",
          "production": "1950–53"
        },
        {
          "title": "Lagonda 2.6-Litre",
          "href": "https://en.wikipedia.org/wiki/Lagonda_2.6-Litre",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lagonda_2-6litre_DHC_front.jpg/280px-Lagonda_2-6litre_DHC_front.jpg",
          "description": "The Lagonda 2.6-Litre is an automobile produced in the United Kingdom by Lagonda from 1948 to 1953. It was the first model from that company following its purchase by David Brown in 1947 and was named for the new straight-6 engine which debuted with the car. The so-called Lagonda Straight-6 engine was designed by Walter Owen Bentley and would propel Lagonda's new parent company, Aston Martin, to fame.",
          "production": "1948–53"
        },
        {
          "title": "Alpine A106",
          "href": "https://en.wikipedia.org/wiki/Alpine_A106",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alpine_A106.jpeg/280px-Alpine_A106.jpeg",
          "description": "The Alpine A106  was the first of a line of light-weight glass-fibre bodied, rear-engined two-door coupés  produced for a young competition-oriented Dieppe based Renault dealer called Jean Rédélé.   The car was based on mechanical components from the Renault 4CV.",
          "production": "1955–1961"
        },
        {
          "title": "Ferrari 250 GTO",
          "href": "https://en.wikipedia.org/wiki/Ferrari_250_GTO",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/01-bonhams-ferrari-monterey-2014-1.jpg/280px-01-bonhams-ferrari-monterey-2014-1.jpg",
          "description": "The Ferrari 250 GTO is a GT car produced by Ferrari from 1962 to 1964 for homologation into the FIA's Group 3 Grand Touring Car category. It was powered by Ferrari's Tipo 168/62 Colombo V12 engine.",
          "production": "1962–64"
        },
        {
          "title": "Edsel Ranger",
          "href": "https://en.wikipedia.org/wiki/Edsel_Ranger",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Edsel_Ranger_2door_Hardtop_front.jpg/280px-Edsel_Ranger_2door_Hardtop_front.jpg",
          "description": "The Edsel Ranger is an automobile that was produced and sold by the newly formed Edsel Division of Ford for the 1958–1960 model years. It was built on the shorter, narrower Edsel platform, shared with Ford and Edsel Pacer models.[1]",
          "production": "1958–60"
        },
        {
          "title": "Peel P50",
          "href": "https://en.wikipedia.org/wiki/Peel_P50",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/1965_Peel_P50%2C_The_World%27s_Smallest_Car_%28Lane_Motor_Museum%29.jpg/280px-1965_Peel_P50%2C_The_World%27s_Smallest_Car_%28Lane_Motor_Museum%29.jpg",
          "description": "The Peel P50 is a three-wheeled microcar originally made from 1962 to 1965 by the Peel Engineering Company on the Isle of Man. It was listed in the 2010 Guinness World Records as the smallest production car ever made.[3] It had no reverse gear, but a handle at the rear allows the very lightweight car to be manoeuvred physically when required.",
          "production": "1962–65"
        },
        {
          "title": "Volvo Duett",
          "href": "https://en.wikipedia.org/wiki/Volvo_Duett",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Volvo_211_at_Djurgarden_Stockholm.jpg/280px-Volvo_211_at_Djurgarden_Stockholm.jpg",
          "description": "The Duett is an automobile from Volvo that was in production from 1953[1] to 1969.[2]",
          "production": "1949–1969"
        },
        {
          "title": "Jeep Compass",
          "href": "https://en.wikipedia.org/wiki/Jeep_Compass",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Jeep_Compass_II_00001_China_2017-03-30.jpg/280px-Jeep_Compass_II_00001_China_2017-03-30.jpg",
          "description": "The Jeep Compass is a four-door compact[1][2][3] crossover SUV introduced for the 2007 model year, and is now in its second generation. The first generation Compass and Patriot, its rebadged variant, were among Jeep's first crossover SUVs. The second-generation Compass debuted in September 2016 in Brazil and at the Los Angeles International Auto Show in November 2016, sharing a modified platform with the Renegade.",
          "production": "2017–present"
        },
        {
          "title": "Toyota Stout",
          "href": "https://en.wikipedia.org/wiki/Toyota_Stout",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Toyopet1500RK23.jpg/280px-Toyopet1500RK23.jpg",
          "description": "The Toyota Stout was a light truck produced by the Japanese automaker Toyota from 1954 through 1989. The Stout shared its platform with the Toyota Dyna until 1968, when the Dyna was given its own platform, called the Toyota \"U\". In Japan, it was sold at Toyota Japanese dealerships called Toyopet Store.",
          "production": "1954–1989"
        },
        {
          "title": "BMC ADO16",
          "href": "https://en.wikipedia.org/wiki/BMC_ADO16",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/1970_Morris_1100_Mk_2.jpg/280px-1970_Morris_1100_Mk_2.jpg",
          "description": "The BMC ADO16 (Amalgamated Drawing Office project number 16)[3] is a range of small family cars built by the British Motor Corporation (BMC) and, later, British Leyland. Launched in 1962, it was Britain's best-selling car from 1963 to 1966 and from 1968 to 1971.[4] The ADO16 was marketed under various make and model names, however the Austin 1100 and Morris 1100 were the most prolific of all the ADO16 variants.",
          "production": "1962–1974"
        },
        {
          "title": "Ford D186 platform",
          "href": "https://en.wikipedia.org/wiki/Ford_D186_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_Taurus_SHO_%28second-gen%29.jpg/280px-Ford_Taurus_SHO_%28second-gen%29.jpg",
          "description": "The Ford DN5 platform is a automobile platform produced by Ford Motor Company from 1985 to 1998.  Developed to transition the midsize Ford and Mercury sedan range to front-wheel drive, the DN5 platform served as the replacement for the sedan model ranges of the Ford Fox platform.  In 1987, it became the sole basis of an all-new Lincoln Continental (FN9), introducing front-wheel drive to the Lincoln division.",
          "production": "1986–95"
        },
        {
          "title": "GM D platform",
          "href": "https://en.wikipedia.org/wiki/GM_D_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cadillac_Fleetwood_--_10-30-2009.jpg/280px-Cadillac_Fleetwood_--_10-30-2009.jpg",
          "description": "The GM D platform (informally, D-body), was a General Motors automobile platform designation, used in two series (1936-1984 and 1985-1996) for large body-on-frame rear-wheel drive automobiles. For the majority of its existence the D-Body represented the largest Cadillac, either the Fleetwood Series 75 or the Fleetwood Limousine.",
          "production": "1993–96"
        },
        {
          "title": "Lotus Elise",
          "href": "https://en.wikipedia.org/wiki/Lotus_Elise",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2014_Lotus_Elise_S_Club_Racer_1.8_Front.jpg/280px-2014_Lotus_Elise_S_Club_Racer_1.8_Front.jpg",
          "description": "The Lotus Elise is a two-seat, rear-wheel drive, mid-engined roadster conceived in early 1994 and released in September 1996 by the British manufacturer Lotus Cars. The Elise has a fibreglass body shell atop its bonded extruded aluminium chassis that provides a rigid platform for the suspension, while keeping weight and production costs to a minimum. It is capable of speeds up to 240 km/h (150 mph).[5] The Elise was named after Elisa Artioli, the granddaughter of Romano Artioli who was chairman of Lotus and Bugatti at the time of the car's launch.[6] ",
          "production": "1996–present"
        },
        {
          "title": "Jaguar XK",
          "href": "https://en.wikipedia.org/wiki/Jaguar_XK",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jaguar_XKR_Coup%C3%A9_%28X150%29_Facelift_front_20100717.jpg/280px-Jaguar_XKR_Coup%C3%A9_%28X150%29_Facelift_front_20100717.jpg",
          "description": "The Jaguar XK is a two-door 2+2 grand tourer manufactured and marketed by British automobile manufacturer Jaguar Cars from 1996–2014 in coupé and convertible bodystyles, across two generations. The XK was introduced at the Geneva Motor Show in March 1996 and was discontinued in July 2014 without a replacement model primarily due to slow sales. ",
          "production": "1996–2015"
        },
        {
          "title": "Panoz Esperante",
          "href": "https://en.wikipedia.org/wiki/Panoz_Esperante",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/GTLMCOUPE.jpg/280px-GTLMCOUPE.jpg",
          "description": "The Esperante is a sports car made by Panoz, an American car manufacturer.",
          "production": "1997–present"
        },
        {
          "title": "Lamborghini 400GT",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_400GT",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lamborghini_400_GT_2%2B2_3929cc_manufactured_1966.JPG/280px-Lamborghini_400_GT_2%2B2_3929cc_manufactured_1966.JPG",
          "description": "Lamborghini 400 GT is the name given to two grand tourers produced by Italian manufacturer Lamborghini.",
          "production": "1966–68"
        },
        {
          "title": "GM B platform",
          "href": "https://en.wikipedia.org/wiki/GM_B_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/81-85_Oldsmobile_Delta_88.jpg/280px-81-85_Oldsmobile_Delta_88.jpg",
          "description": "The GM B platform  (also known as GM B body) was General Motors' full-size rear-wheel drive automobile platform from 1926-1996. It was closely related to the original rear-wheel drive GM C and GM D platforms, and was used for convertibles, hardtops, coupés, sedans, and station wagons.",
          "production": "1961–64"
        },
        {
          "title": "GM B platform",
          "href": "https://en.wikipedia.org/wiki/GM_B_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/81-85_Oldsmobile_Delta_88.jpg/280px-81-85_Oldsmobile_Delta_88.jpg",
          "description": "The GM B platform  (also known as GM B body) was General Motors' full-size rear-wheel drive automobile platform from 1926-1996. It was closely related to the original rear-wheel drive GM C and GM D platforms, and was used for convertibles, hardtops, coupés, sedans, and station wagons.",
          "production": "1965–70"
        },
        {
          "title": "Lamborghini Silhouette",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Silhouette",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lamborghini_Silhouette.JPG/280px-Lamborghini_Silhouette.JPG",
          "description": "The Lamborghini Silhouette P300 is a two-door two-seat mid-engined rear-wheel drive sports car, that was made in small numbers by Lamborghini between 1976 and 1979.[1]",
          "production": "1976–79"
        },
        {
          "title": "AC 3000ME",
          "href": "https://en.wikipedia.org/wiki/AC_3000ME",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/AC_3000ME_%28Thames_Ditton_Version%2C_1979-1984%2C_front_left%29.jpg/280px-AC_3000ME_%28Thames_Ditton_Version%2C_1979-1984%2C_front_left%29.jpg",
          "description": "The AC 3000ME is a mid-engined sports car originally sold by AC Cars. The two-door coupé debuted at the 1973 London Motor Show. Sales did not begin until 1979 and lasted until 1984. Rights to the 3000ME and tooling were transferred to a second company who managed to produce a small number of additional cars before going into receivership themselves in mid-1985. A third company acquired the rights to the car with plans to begin selling a revised version under a different name, but only a single prototype was ever produced.",
          "production": "1979–1984"
        },
        {
          "title": "Kaiser Motors",
          "href": "https://en.wikipedia.org/wiki/Kaiser_Motors",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/A_logo_of_the_Kaiser_automobile_manufacturer.jpg/100px-A_logo_of_the_Kaiser_automobile_manufacturer.jpg",
          "description": "Kaiser Motors (formerly Kaiser-Frazer) Corporation made automobiles at Willow Run, Michigan, United States, from 1945 to 1953. In 1953, Kaiser merged with Willys-Overland to form Willys Motors Incorporated, moving its production operations to the Willys plant at Toledo, Ohio. The company changed its name to Kaiser Jeep Corporation in 1963.",
          "production": "1949–53"
        },
        {
          "title": "Volvo 140",
          "href": "https://en.wikipedia.org/wiki/Volvo_140",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Volvo_145_green_vr_TCE.jpg/280px-Volvo_145_green_vr_TCE.jpg",
          "description": "The Volvo 140 Series is a line of mid-size cars manufactured and marketed by Volvo from 1966 to 1974 in two- and four-door sedan (models 142 and 144 respectively) as well as five door station wagon (model 145) body styles—with numerous intermediate facelifts. More than a million Volvo 140s were built.",
          "production": "1966–1974"
        },
        {
          "title": "Lagonda Rapier",
          "href": "https://en.wikipedia.org/wiki/Lagonda_Rapier",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/1935_Lagonda_Rapier.jpg/280px-1935_Lagonda_Rapier.jpg",
          "description": "The Lagonda Rapier was a small car produced by the British Lagonda company from 1934 to 1935. A few more were subsequently produced by the independent Rapier Car Company.",
          "production": "1933–38"
        },
        {
          "title": "Autobianchi A112",
          "href": "https://en.wikipedia.org/wiki/Autobianchi_A112",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Autobianchi_A112E_1973.jpg/280px-Autobianchi_A112E_1973.jpg",
          "description": "The Autobianchi A112 is a supermini produced by the Italian automaker Autobianchi. It was developed using a shrunken version of the contemporary Fiat 128's platform.[3] The mechanicals of the A112 subsequently underpinned the Fiat 127. It was introduced in November 1969, as a replacement for the Bianchina and Primula, and was built until 1986, when it made way for the more modern Autobianchi Y10 (branded in most export markets as the Lancia Y10). Over 1.2 million A112s were produced in Autobianchi's Milan factory.",
          "production": "1969–1986"
        },
        {
          "title": "Alpine A110",
          "href": "https://en.wikipedia.org/wiki/Alpine_A110",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Renault_Alpine_A_110_%28Sp%29.JPG/280px-Renault_Alpine_A_110_%28Sp%29.JPG",
          "description": "The Alpine A110 is a  sports car produced by French automobile manufacturer Alpine from 1961 to 1977. The car was styled as a \"Berlinette\", which in the post-WWII era refers to a small enclosed two-door Berline, better-known as a coupé.[3] The Alpine A110 succeeded the earlier A108. The car was powered by a succession of Renault engines. A modern iteration of the A110 was introduced in 2017 developed under Renault-Nissan partnership.",
          "production": "1961–1977"
        },
        {
          "title": "Buick Riviera",
          "href": "https://en.wikipedia.org/wiki/Buick_Riviera",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SEPT_16TH_BUICK_RIVIERA_HOLLYWOOD_PHOTO_PATRICE_RAUNET.jpg/280px-SEPT_16TH_BUICK_RIVIERA_HOLLYWOOD_PHOTO_PATRICE_RAUNET.jpg",
          "description": "The Buick Riviera is a personal luxury car produced by Buick from 1963 to 1999. GM's first entry into that prestige niche, the Riviera was highly praised by automotive journalists upon its high-profile debut. While early models stayed close to the original form, eight subsequent generations varied substantially over the Riviera's thirty-year lifespan. In all, 1,127,261 were produced.",
          "production": "1963–99"
        },
        {
          "title": "Jaguar XJS",
          "href": "https://en.wikipedia.org/wiki/Jaguar_XJS",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/1989_Jaguar_XJS_coupe_%2826512351756%29.jpg/280px-1989_Jaguar_XJS_coupe_%2826512351756%29.jpg",
          "description": "The Jaguar XJ-S (later called XJS) is a luxury grand tourer manufactured and marketed by British car manufacturer Jaguar Cars from 1975 to 1996, in coupé, fixed-profile and full convertible body styles. There were three distinct iterations, with a final production total of 115,413 units over 20 years and seven months.",
          "production": "1975–96"
        },
        {
          "title": "Pontiac Grand Am",
          "href": "https://en.wikipedia.org/wiki/Pontiac_Grand_Am",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/1999-2002_Pontiac_Grand_Am_SE_sedan_--_12-23-2011.jpg/280px-1999-2002_Pontiac_Grand_Am_SE_sedan_--_12-23-2011.jpg",
          "description": "The Pontiac Grand Am is a mid-size car and later a compact car that was produced by Pontiac. The history of Grand Am starts with Pontiac executives noting incursion into the US market by Mercedes and BMW. Notably, the American sports car was usually without luxury features and the luxury car without sport features. Foreign makes mixed these features. Pontiac hybridized the Trans Am with the Grand Prix to create the Grand Am. Built on the A-body platform, the intended GTO body was re-badged and fitted with the Grand Prix interior. As the 1973 was produced, OPEC levied an oil embargo to the USA. This resulted in a dichotomy of buyers: total luxury or total economy. Since Grand Am was a “in-betweener “, it’s sales died and it was discontinued in 1975. The Grand Am had two separate three-year runs in the 1970s: from 1973 to 1975, and again from 1978 to 1980. It was based on the GM A platform. Production of the Grand Am was canceled in 1980 when it was replaced by the Pontiac 6000. The Grand Am was reintroduced in 1985 when it replaced the Pontiac Phoenix. It became Pontiac's best selling car and was later replaced by the Pontiac G6, so named as it was intended to be the 6th generation of the Grand Am.[2]",
          "production": "1973–2006"
        },
        {
          "title": "BMW Z8 (E52)",
          "href": "https://en.wikipedia.org/wiki/BMW_Z8_(E52)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/BMW_Z8_%282009-05-20%29.JPG/280px-BMW_Z8_%282009-05-20%29.JPG",
          "description": "The BMW Z8 is a roadster produced by German automotive manufacturer BMW from 2000 to 2003. The Z8 was developed under the codename \"E52\" between 1993 and 1999, through the efforts of a design team led by Chris Bangle from 1993 to 1995.[2] The exterior was designed by Henrik Fisker and the interior by Scott Lempert up until 1995, when the latter left BMW and styling was approved.[3]",
          "production": "1999–2003"
        },
        {
          "title": "Lamborghini Urraco",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Urraco",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Lamborghini_Urraco_P111_%28France%29.jpg/280px-Lamborghini_Urraco_P111_%28France%29.jpg",
          "description": "The Lamborghini Urraco is a 2+2 sports car manufactured by Italian automaker Lamborghini, introduced at the Turin Auto Show in 1970, marketed for model years 1972-1979, and named after a line of Miura-bred fighting bulls; the name translates to \"little bull\".[2]",
          "production": "1973–79"
        },
        {
          "title": "Hindustan Ambassador",
          "href": "https://en.wikipedia.org/wiki/Hindustan_Ambassador",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Real_sweet_Ambassador%21.jpg/280px-Real_sweet_Ambassador%21.jpg",
          "description": "The Hindustan Ambassador is an automobile manufactured by Hindustan Motors of India, in production from 1958 to 2014 with few improvements and changes over its production lifetime. The Ambassador was based on the Morris Oxford series III model, first made by Morris Motors Limited at Cowley, Oxford in the United Kingdom from 1956 to 1959.",
          "production": "1958–2014"
        },
        {
          "title": "Edsel Roundup",
          "href": "https://en.wikipedia.org/wiki/Edsel_Roundup",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/1958_Edsel_Roundup.jpg/280px-1958_Edsel_Roundup.jpg",
          "description": "The Edsel Roundup is a station wagon that was produced and sold by Edsel in 1958.  Like the Villager and Bermuda station wagons, the Roundup was built on a 116-inch (2,946 mm) wheelbase[1] shared with Ford's station wagons, as well as core body stampings. It had an approach angle of 21° and an overall length of 205.42 in.[2]",
          "production": "1958"
        },
        {
          "title": "Fiat 131",
          "href": "https://en.wikipedia.org/wiki/Fiat_131",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Fiat_131_S_Mirafiori_1600.jpg/280px-Fiat_131_S_Mirafiori_1600.jpg",
          "description": "The Fiat 131 is a family sedan manufactured and marketed by Fiat from 1974 to 1984 after its debut at the 1974 Turin Motor Show.  Available as a two-door and four-door saloon and 5-door estate across a single generation, the 131 succeeded the Fiat 124.",
          "production": "1974–84"
        },
        {
          "title": "BMW 507",
          "href": "https://en.wikipedia.org/wiki/BMW_507",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/BMW_507.jpg/280px-BMW_507.jpg",
          "description": "The BMW 507 is a roadster that was produced by BMW from 1956 to 1959.  Initially intended to be exported to the United States at a rate of thousands per year, it ended up being too expensive, resulting in a total production figure of 252 cars and heavy losses for BMW.",
          "production": "1956–1959"
        },
        {
          "title": "BMW 8 Series (E31)",
          "href": "https://en.wikipedia.org/wiki/BMW_8_Series_(E31)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BMW_850i_E31_-_Flickr_-_Alexandre_Pr%C3%A9vot_Crop.jpg/280px-BMW_850i_E31_-_Flickr_-_Alexandre_Pr%C3%A9vot_Crop.jpg",
          "description": "The BMW E31 is the first generation of the BMW 8 Series. It is a grand tourerbuilt by BMW from 1990 to 1999 powered by either a V8 or V12 engine. While it did supplant the original E24 based 6 Series in 1990, a common misconception is that the 8 Series was developed as a successor. It was actually in an entirely new model class aimed at a different market, with a substantially higher price and performance than the 6 Series.",
          "production": "1989–99"
        },
        {
          "title": "Lagonda",
          "href": "https://en.wikipedia.org/wiki/Lagonda",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NewLagondaEmblem.jpg/220px-NewLagondaEmblem.jpg",
          "description": "Lagonda is a British luxury car marque established in 1906, which has been owned by Aston Martin since 1947. The marque has had a non-continuous presence in the luxury car market, being dormant for several times during its existence, most recently from 1995 to 2008 and 2010 to 2013.",
          "production": "1913–26"
        },
        {
          "title": "Ferrari Daytona",
          "href": "https://en.wikipedia.org/wiki/Ferrari_Daytona",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/1971_Ferrari_GTB4_Daytona.jpg/280px-1971_Ferrari_GTB4_Daytona.jpg",
          "description": "The Ferrari Daytona, officially designated the Ferrari 365 GTB/4, is a two-seat grand tourer produced by Ferrari from 1968 to 1973. It was introduced at the Paris Auto Salon in 1968 to replace the 275 GTB/4, and featured the 275's Colombo V12 bored out to 4,390 cc (4.4 L; 267.9 cu in).",
          "production": "1968–73"
        },
        {
          "title": "Matra Rancho",
          "href": "https://en.wikipedia.org/wiki/Matra_Rancho",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1977_Simca_Matra_Rancho.jpg/280px-1977_Simca_Matra_Rancho.jpg",
          "description": "The Matra Rancho is a leisure activity vehicle created by the French engineering group Matra, in cooperation with the automaker Simca, to capitalize on the off-road trend started by the Range Rover. The Rancho provided an \"off-road look\" at a lower price.",
          "production": "1977–1984"
        },
        {
          "title": "Ford E-Series",
          "href": "https://en.wikipedia.org/wiki/Ford_E-Series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ford_E-Series_wagon.jpg/280px-Ford_E-Series_wagon.jpg",
          "description": "The Ford E series (also known as the Ford Econoline and Ford Club Wagon throughout various stages of its production) is a range of full-size vans produced by the American automaker Ford since 1960.  Introduced for the 1961 model year as the replacement for the Ford F-series panel van, four generations of the model line have been produced. In addition to cargo van and passenger van body styles, the Ford E-series has been produced as a cutaway van chassis and stripped chassis (a chassis without bodywork).",
          "production": "1961–present"
        },
        {
          "title": "Peugeot 406",
          "href": "https://en.wikipedia.org/wiki/Peugeot_406",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Peugeot_406_front_20080730.jpg/280px-Peugeot_406_front_20080730.jpg",
          "description": "The Peugeot 406 is a large family car that was produced by French automaker Peugeot between 1995 and 2004. Available in saloon, estate and coupé bodystyles with a choice of petrol or turbodiesel engines, the 406 replaced the Peugeot 405 in Peugeot's lineup, and was itself replaced by the Peugeot 407. It used the same platform as the Citroën Xantia, though without that car's sophisticated hydropneumatic suspension system.",
          "production": "1997–2004"
        },
        {
          "title": "Lagonda 3-Litre",
          "href": "https://en.wikipedia.org/wiki/Lagonda_3-Litre",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/1954_Lagonda_Four-Door_Saloon%2C_Coachwork_by_Tickford.jpg/280px-1954_Lagonda_Four-Door_Saloon%2C_Coachwork_by_Tickford.jpg",
          "description": "The Lagonda 3-Litre is an automobile which was produced by Aston Martin Lagonda from 1953 to 1958. It was the second Lagonda model of the David Brown/Aston Martin era. The 3-Litre was fitted with a higher displacement 2.9 L 140 bhp version of the twin overhead camshaft Lagonda Straight-6 engine designed by Walter Owen Bentley.",
          "production": "1953–58"
        },
        {
          "title": "Buick Wildcat",
          "href": "https://en.wikipedia.org/wiki/Buick_Wildcat",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1963_Buick_Wildcat_--_06-18-2011_2.jpg/280px-1963_Buick_Wildcat_--_06-18-2011_2.jpg",
          "description": "The Buick Wildcat was a full-sized automobile that was produced by Buick from 1962 to 1970. It took its name from a fiberglass-bodied 1953 concept car.[1]",
          "production": "1963–70"
        },
        {
          "title": "Alfa Romeo Brera",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_Brera",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lancia_Motor_Club_Track_Day_May_21st_2011_DSC_8632.jpg/280px-Lancia_Motor_Club_Track_Day_May_21st_2011_DSC_8632.jpg",
          "description": "The Alfa Romeo Brera and the Alfa Romeo Spider (Type 939) are two sports cars manufactured by Alfa Romeo respectively between 2005-2010 and 2006-2010.[3] The Brera is a 2+2 coupé, while the Spider is its roadster version. Both models were built by Pininfarina.",
          "production": "2005–2010"
        },
        {
          "title": "Bugatti Royale",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Royale",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bugatti_Type_41_%28Royale%29_Coup%C3%A9_Napoleon.jpg/280px-Bugatti_Type_41_%28Royale%29_Coup%C3%A9_Napoleon.jpg",
          "description": "The Bugatti Type 41, better known as the Royale, is a large luxury car built from 1927 to 1933 with a 4.3 m (169.3 in) wheelbase and 6.4 m (21 ft) overall length. It weighs approximately 3,175 kg (7,000 lb) and uses a 12.763 litre (778 cu in) straight-eight engine. For comparison, against the modern Rolls-Royce Phantom (produced from 2003 onward), the Royale is about 20% longer, and more than 25% heavier. This makes the Royale one of the largest cars in the world.[1][2]",
          "production": "1927–33"
        },
        {
          "title": "Porsche 914",
          "href": "https://en.wikipedia.org/wiki/Porsche_914",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Porsche_914_%281970%29_-_9579225634.jpg/280px-Porsche_914_%281970%29_-_9579225634.jpg",
          "description": "The Porsche 914 or VW-Porsche 914 is a mid-engined sports car designed, manufactured and marketed collaboratively by Volkswagen and Porsche from 1969 to 1976.  It was available as a targa-topped two-seat roadster powered by either a flat-4 or flat-6 engine.",
          "production": "1969–76"
        },
        {
          "title": "Buick Special",
          "href": "https://en.wikipedia.org/wiki/Buick_Special",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Buick_4-Dorrars_Sedan_1937.jpg/280px-Buick_4-Dorrars_Sedan_1937.jpg",
          "description": "The Buick Special was an automobile produced by Buick. It was usually Buick's lowest-priced model, starting out as a full-size car in 1936 and returning in 1938 (after a two-year hiatus) as a mid-size.",
          "production": "1936–69"
        },
        {
          "title": "Toyota Soarer",
          "href": "https://en.wikipedia.org/wiki/Toyota_Soarer",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/1992_Toyota_Soarer_%28UZZ31%29_4.0GT-L_coupe_%282015-06-18%29_01.jpg/280px-1992_Toyota_Soarer_%28UZZ31%29_4.0GT-L_coupe_%282015-06-18%29_01.jpg",
          "description": "The Toyota Soarer is a personal luxury GT coupé that was produced from 1981 to 2005 by Toyota and was sold in Japan. In Japan, it was available at both Toyota Japan dealerships called Toyota Store and Toyopet Store, and it débuted with the Z10 series, replacing the  Toyopet Store exclusive Mark II Coupe, and the Toyota Store exclusive Crown Coupe. ",
          "production": "1991-1997"
        },
        {
          "title": "Ferrari 166 S",
          "href": "https://en.wikipedia.org/wiki/Ferrari_166_S",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ferrari_166MM.JPG/280px-Ferrari_166MM.JPG",
          "description": "The Ferrari 166 S was an evolution of Ferrari's 125 S sports race car that became a sports car for the street in the form of the 166 Inter. Only 12 Ferrari 166 S were produced, nine of them with cycle-fenders as the Spyder Corsa, soon followed by the production of the Ferrari 166 MM (Mille Miglia) which was made in much larger numbers (47) from 1948 to 1953. The 166 MM was an updated 166 S and went on to score many of Ferrari's early international victories, making the manufacturer a serious competitor in the racing industry.[3] Both were later replaced by the 2.3 L 195 S.",
          "production": "1948–53"
        },
        {
          "title": "Jaguar XJR-15",
          "href": "https://en.wikipedia.org/wiki/Jaguar_XJR-15",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/1991_Jaguar_XJR-15_6.0.jpg/280px-1991_Jaguar_XJR-15_6.0.jpg",
          "description": "The Jaguar Sport XJR-15 is a two-seater sports car produced by Jaguar Sport, a subsidiary of Jaguar and Tom Walkinshaw Racing between 1990 and 1992. Only 50 were made, each selling for GB£500,000.[1]",
          "production": "1991"
        },
        {
          "title": "Oldsmobile Aurora",
          "href": "https://en.wikipedia.org/wiki/Oldsmobile_Aurora",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/1997_Oldsmobile_Aurora.jpg/280px-1997_Oldsmobile_Aurora.jpg",
          "description": "The Oldsmobile Aurora is a full-size luxury sports sedan made by Oldsmobile from 1994 to 2003. The Aurora rides on the same Cadillac-derived G platform as the two-door Buick Riviera.",
          "production": "1995–2003"
        },
        {
          "title": "Volvo Amazon",
          "href": "https://en.wikipedia.org/wiki/Volvo_Amazon",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Volvo-122-coupe-1.jpg/280px-Volvo-122-coupe-1.jpg",
          "description": "The Volvo Amazon was a mid-size car manufactured and marketed by Volvo Cars from 1956 to 1970[7] and introduced in the United States as the 122S at the 1959 New York International Auto Show.[8]",
          "production": "1956–1970"
        },
        {
          "title": "BMW New Class",
          "href": "https://en.wikipedia.org/wiki/BMW_New_Class",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/BMW_1600_%285457428606%29.jpg/280px-BMW_1600_%285457428606%29.jpg",
          "description": "The BMW New Class (German: Neue Klasse) was a line of sedans and coupes produced by German automaker BMW between 1962 and 1977. These models ensured BMW's solvency after the company's financial crisis of the 1950s and established the identity of BMW automobiles as sports sedans.",
          "production": "1962–76"
        },
        {
          "title": "Ferrari 333 SP",
          "href": "https://en.wikipedia.org/wiki/Ferrari_333_SP",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ferrari_333_SP_at_Goodwood_2014_002.jpg/220px-Ferrari_333_SP_at_Goodwood_2014_002.jpg",
          "description": "The Ferrari 333 SP is a sports prototype race car that was built by Italian race car manufacturer Dallara and later Michelotto to compete in the World Sports Car championship for Ferrari. Unveiled at the end of 1993, at the behest of amateur racer Giampiero Moretti (owner of the MOMO auto parts business),[2] the 333 SP marked Ferrari's official return to sports car racing after a 20-year absence. The car was built to compete in the IMSA's new WSC class, which replaced the previous GTP cars.",
          "production": "1994–2001"
        },
        {
          "title": "Jaguar E-Type",
          "href": "https://en.wikipedia.org/wiki/Jaguar_E-Type",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jaguar_E-Type_Series_1_3.8_Litre_1961.jpg/280px-Jaguar_E-Type_Series_1_3.8_Litre_1961.jpg",
          "description": "The Jaguar E-Type, or the Jaguar XK-E for the North American market, is a British sports car that was manufactured by Jaguar Cars Ltd between 1961 and 1975. Its combination of beauty, high performance, and competitive pricing established the model as an icon of the motoring world. The E-Type's claimed[who?] 150 mph (241 km/h) top speed, sub-7-second 0 to 60 mph (97 km/h) acceleration, monocoque construction, disc brakes, rack-and-pinion steering, and independent front and rear suspension distinguished the car and spurred industry-wide changes.[3] The E-Type was based on Jaguar's D-Type racing car, which had won the 24 Hours of Le Mans three consecutive years beginning 1955,[4] and employed what was, for the early 1960s, a novel racing design principle,  with a front subframe carrying  the engine, front suspension and front bodywork  bolted directly to the body tub. No ladder frame chassis, as was common at the time, was needed and as such the first cars weighed only 1315kg (2900 lb).[5]",
          "production": "1961–74"
        },
        {
          "title": "Alfa Romeo Arna",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_Arna",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Alfa_Arna.JPG/280px-Alfa_Arna.JPG",
          "description": "The Alfa Romeo Arna (an acronym for \"Alfa Romeo Nissan Autoveicoli\", meaning \"Alfa Romeo[-]Nissan motor vehicles\", but also a female Italian name) (Type 920) is a hatchback produced by the Italian manufacturer Alfa Romeo Nissan Autoveicoli S.p.A. between 1983 and 1987. The company was founded on 9 October 1980, as a 50:50 joint venture between the Italian Alfa Romeo S.p.A. and the Japanese Nissan Motor Company.[1]",
          "production": "1983–1987"
        },
        {
          "title": "BMC ADO17",
          "href": "https://en.wikipedia.org/wiki/BMC_ADO17",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Morris_1800_1970.jpg/280px-Morris_1800_1970.jpg",
          "description": "BMC ADO17 is the model code that was used by the British Motor Corporation (BMC) for a range of cars produced from September 1964 to 1975, and sold initially under its Austin marque as the Austin 1800. The car was also sold by Morris as the Morris 1800 and by Wolseley as the Wolseley 18/85, and later as the Austin 2200, Morris 2200 and Wolseley Six. In Denmark it was sold as the Morris Monaco. Colloquially known as the Landcrab, the 1800 was voted Europe's Car of the Year for 1965 – the second year of the award, and a second successive contest win for the UK, the Rover P6 having won the award a year earlier.[2]",
          "production": "1964–1975"
        },
        {
          "title": "Pontiac Aztek",
          "href": "https://en.wikipedia.org/wiki/Pontiac_Aztek",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2002-05_Pontiac_Aztek.jpg/280px-2002-05_Pontiac_Aztek.jpg",
          "description": "The Pontiac Aztek is a mid-size crossover marketed by General Motors from model years 2001 to 2005, along with its corporate cousin, the Buick Rendezvous.",
          "production": "2000–07"
        },
        {
          "title": "Porsche 944",
          "href": "https://en.wikipedia.org/wiki/Porsche_944",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/1986_944_Turbo.jpg/280px-1986_944_Turbo.jpg",
          "description": "The Porsche 944 is a sports car manufactured by German automobile manufacturer Porsche from 1982 to 1991. A front-engine, rear-wheel drive mid-level model based on the 924 platform, the 944 was available in coupé or cabriolet body styles, with either naturally aspirated or turbocharged engines.",
          "production": "1982–91"
        },
        {
          "title": "Lincoln Versailles",
          "href": "https://en.wikipedia.org/wiki/Lincoln_Versailles",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lincoln_Versailles%2C_1980.png/280px-Lincoln_Versailles%2C_1980.png",
          "description": "The Lincoln Versailles is a mid-size luxury car manufactured by Ford Motor Company and marketed by its Lincoln division as a rebadged variant of the Ford Granada and Mercury Monarch.[4] Marketed as a 4-door sedan from 1977 to 1980, the Versailles reached a production total of 50,156[5] and was noted as the first production vehicle to offer clearcoat paint.[4]",
          "production": "1977–80"
        },
        {
          "title": "Alfa Romeo 75",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_75",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Alfa_Romeo_MIlano_%28America%29.jpg/280px-Alfa_Romeo_MIlano_%28America%29.jpg",
          "description": "The Alfa Romeo 75 (Tipo 161, 162B), sold in North America as the Milano, is a compact executive car produced by the Italian automaker Alfa Romeo between 1985 and 1992. The Alfa 75 was commercially quite successful: in only three years, 236,907 cars were produced,[3] and by the end of production in 1992, around 386,767 had been built.[4]",
          "production": "1985–1992"
        },
        {
          "title": "GM W platform",
          "href": "https://en.wikipedia.org/wiki/GM_W_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/White_Pontiac_Grand_Prix.jpg/280px-White_Pontiac_Grand_Prix.jpg",
          "description": "The W-platform (also known as the W-body) was a General Motors automobile platform which underpinned both mid size and full-size front-wheel drive cars. Originally code named GM10, it began development in 1982 under Chairman Roger B. Smith and debuted in 1987 with the Pontiac Grand Prix, Buick Regal, and Oldsmobile Cutlass Supreme coupés. The four-door sedan version was introduced for 1990. ",
          "production": "1988–2001"
        },
        {
          "title": "Ford Crown Victoria",
          "href": "https://en.wikipedia.org/wiki/Ford_Crown_Victoria",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/280px-Ford_Crown_Victoria_LX.jpg",
          "description": "The Ford Crown Victoria (\"Crown Vic\")[2][3] is a full-size sedan that was marketed and manufactured by Ford from the 1992 to the 2011 model years. The successor to the Ford LTD Crown Victoria, the Crown Victoria served as the flagship Ford sedan above the Ford Taurus, and was the Ford-branded version of the Mercury Grand Marquis. Ford marketed the Crown Victoria Police Interceptor police car to law-enforcement agencies,[4] and a long-wheelbase version was introduced in 2002 for taxi cab fleet.   ",
          "production": "1992–2011"
        },
        {
          "title": "Austin Allegro",
          "href": "https://en.wikipedia.org/wiki/Austin_Allegro",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Austin_Allegro_Registration_ca_1975.jpg/280px-Austin_Allegro_Registration_ca_1975.jpg",
          "description": "The Austin Allegro is a small family car that was manufactured by the Austin-Morris division of British Leyland from 1973 until 1982.  The same vehicle was built in Italy by Innocenti between 1974 and 1975 and sold as the Innocenti Regent.  In total, 642,350 Austin Allegros were produced during its ten-year production life, most of which were sold on the home market.",
          "production": "1973–1983"
        },
        {
          "title": "Austin-Healey Sprite",
          "href": "https://en.wikipedia.org/wiki/Austin-Healey_Sprite",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Wingspr.JPG/280px-Wingspr.JPG",
          "description": "The Austin-Healey Sprite is a small open sports car which was produced in the United Kingdom from 1958 to 1971. The Sprite was announced to the press in Monte Carlo by the British Motor Corporation on 20 May 1958, two days after that year's Monaco Grand Prix. It was intended to be a low-cost model that \"a chap could keep in his bike shed\", yet be the successor to the sporting versions of the pre-war Austin Seven. The Sprite was designed by the Donald Healey Motor Company, with production being undertaken at the MG factory at Abingdon. It first went on sale at a price of £669, using a tuned version of the Austin A-Series engine and as many other components from existing cars as possible to keep costs down.",
          "production": "1958–1971"
        },
        {
          "title": "Chevrolet Opala",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Opala",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1978_Chevrolet_Opala_Deluxe_4dr.jpg/280px-1978_Chevrolet_Opala_Deluxe_4dr.jpg",
          "description": "The Chevrolet Opala was a Brazilian executive car sold under the Chevrolet brand in South America from 1969 to 1992, by General Motors do Brasil. It was derived from the German Opel Rekord Series C, Opel Commodore Series A, but used USA-sourced engines and a local design styling.[citation needed]  Two four-cylinder engines: the Chevrolet 153 cubic inch four-cylinder from Chevy II/Nova, which later got a new crankshaft stroke and cylinder bore changing its size to 151 cubic inches (often mistaken for the Pontiac Iron Duke engine), and the six-cylinder 250 from the contemporary line of North American car/light truck production. GM manufactured about one million units including the Opala sedan, Opala Coupé, and the station wagon variant, the Opala Caravan. It was replaced by the Chevrolet Omega in 1992, also an Opel spinoff. It was the first passenger car built by GM in Brazil by the General Motors do Brasil division. A luxury version of the Opala was marketed as the Chevrolet Diplomata.",
          "production": "1968–92"
        },
        {
          "title": "Daihatsu Copen",
          "href": "https://en.wikipedia.org/wiki/Daihatsu_Copen",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Daihatsu_Copen_Robe.jpg/280px-Daihatsu_Copen_Robe.jpg",
          "description": "The Daihatsu Copen (Japanese: ダイハツ・コペン, Daihatsu Kopen) is a 2-door kei car built by the Japanese car company Daihatsu. It debuted at the 1999 Tokyo Motor Show, as the Daihatsu Copen concept. The second generation model debuted as the Kopen (Future Included) at the 2013 Tokyo Motor Show.[1][2]",
          "production": "2002–12"
        },
        {
          "title": "Ferrari 308 GTB/GTS",
          "href": "https://en.wikipedia.org/wiki/Ferrari_308_GTB/GTS",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/1984_Ferrari_308_GTB_qv.jpg/280px-1984_Ferrari_308_GTB_qv.jpg",
          "description": "The Ferrari 308 GTB berlinetta and targa topped 308 GTS are V8 mid-engined, two-seater sports cars manufactured by the Italian company Ferrari from 1975 to 1985. The 308 replaced the Dino 246 GT and GTS in 1975 and was updated as the 328 in 1985. The similar 208 GTB and GTS were equipped with a smaller initially naturally aspirated, later turbocharged two-litre engine, and sold mostly in Italy.",
          "production": "1975–85"
        },
        {
          "title": "Vauxhall Viva (1963–1979)",
          "href": "https://en.wikipedia.org/wiki/Vauxhall_Viva_(1963%E2%80%931979)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Vivahc.jpg/280px-Vivahc.jpg",
          "description": "The Vauxhall Viva was a small family car produced by Vauxhall in a succession of three versions between 1963 and 1979. These were designated as the HA, HB and HC series.",
          "production": "1963–1979"
        },
        {
          "title": "Lagonda Rapide",
          "href": "https://en.wikipedia.org/wiki/Lagonda_Rapide",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rapide_02.jpg/280px-Rapide_02.jpg",
          "description": "The Lagonda Rapide is a hand built full-sized luxury four-door GT car saloon which was produced from 1961 until 1964.",
          "production": "1961–64"
        },
        {
          "title": "Continental Mark II",
          "href": "https://en.wikipedia.org/wiki/Continental_Mark_II",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/1956_Continental_Mark_II_-_midnight_blue_-_fvr.jpg/280px-1956_Continental_Mark_II_-_midnight_blue_-_fvr.jpg",
          "description": "The Continental Mark II is an ultra-luxury coupé sold by the Continental Division of Ford, serving as the worldwide flagship vehicle of Ford Motor Company.[2]",
          "production": "1956–57"
        },
        {
          "title": "Ferrari 512",
          "href": "https://en.wikipedia.org/wiki/Ferrari_512",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/1970_Ferrari_512_S_-_Chassis_Number_1026.jpg/220px-1970_Ferrari_512_S_-_Chassis_Number_1026.jpg",
          "description": "Ferrari 512 S is the designation for 25 sports cars built in 1969–70, with five-litre 12-cylinder (\"512\") engines, related to the Ferrari P sports prototypes. The V12-powered cars were entered in the 1970 International Championship for Makes[2][3] by the factory Scuderia Ferrari and private teams. Later that year, modified versions resembling their main competitor, the Porsche 917, were called Ferrari 512 M (for modificata). In the 1971 International Championship for Makes, the factory focused on the new Ferrari 312 PB and abandoned the 512 which was only entered by privateers. From 1972 onwards, the 512 (as the 917) was withdrawn from the world championship following a change in the regulations, and some 512s in private hands were entered in CanAm and Interserie races.",
          "production": "1970"
        },
        {
          "title": "Lamborghini Huracán",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Hurac%C3%A1n",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lamborghini_Huracan_20150525_7811.jpg/280px-Lamborghini_Huracan_20150525_7811.jpg",
          "description": "The Lamborghini Huracán (Spanish for \"hurricane\"; [uɾaˈkan]) is a sports car manufactured by Italian automotive manufacturer Lamborghini replacing the previous V10 offering, the Gallardo.[3] The Huracán made its worldwide debut at the 2014 Geneva Auto Show,[4] and was released in the market in the second quarter of 2014. The LP 610-4 designation comes from the fact that this car has 610 metric horsepower and 4 wheel drive, while LP stands for \"Longitudinale Posteriore\", which refers to the longitudinal mid-rear engine position.",
          "production": "2014–present"
        },
        {
          "title": "Ferrari F50",
          "href": "https://en.wikipedia.org/wiki/Ferrari_F50",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Paris_-_RM_Sotheby%E2%80%99s_2016_-_Ferrari_F50_-_1997_-_001.jpg/280px-Paris_-_RM_Sotheby%E2%80%99s_2016_-_Ferrari_F50_-_1997_-_001.jpg",
          "description": "The Ferrari F50 (Type F130) is a mid-engine range-topping sports car manufactured by Italian automobile manufacturer Ferrari from 1995–1997. Introduced in 1995, the car is a two-door, two seat targa top. The car is powered by a 4.7 L naturally aspirated Tipo F130B 60-valve V12 engine that was developed from the 3.5 L V12 used in the 1990 Ferrari 641 Formula One car. The car's design is an evolution of the 1989 Ferrari Mythos concept car.[7]",
          "production": "1995–97"
        },
        {
          "title": "Jensen Interceptor",
          "href": "https://en.wikipedia.org/wiki/Jensen_Interceptor",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/1971_Jensen_Interceptor_MkII%2C_front_left_%28USA%29.jpg/280px-1971_Jensen_Interceptor_MkII%2C_front_left_%28USA%29.jpg",
          "description": "The Jensen Interceptor is a Grand touring car which was hand-built at the Kelvin Way Factory in West Bromwich, near Birmingham in England, by Jensen Motors between 1966 and 1976. The Interceptor name had been used previously by Jensen for the Jensen Interceptor made between 1950 and 1957 at the Carters Green factory. Jensen had extensively used glass-reinforced plastic for the fabrication of body panels in the preceding two decades, but the new Interceptor saw a return to a steel body-shell. The body was designed by an outside firm, Carrozzeria Touring of Italy, rather than the in-house staff. The early bodies were built in Italy by Vignale, before Jensen took production in house, making some subtle body modifications.",
          "production": "1950–76"
        },
        {
          "title": "Honda S500",
          "href": "https://en.wikipedia.org/wiki/Honda_S500",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/1963_Honda_S500_01.jpg/280px-1963_Honda_S500_01.jpg",
          "description": "The S500 was the second production car from Honda, released in 1963, following the T360 truck into production by four months. It was a larger displacement variant of the S360 roadster which, though developed for sale in 1962, was never produced.",
          "production": "1963–64"
        },
        {
          "title": "Jeep Cherokee (KL)",
          "href": "https://en.wikipedia.org/wiki/Jeep_Cherokee_(KL)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2016_Jeep_Cherokee_Limited_Multjet_II_2.2.jpg/280px-2016_Jeep_Cherokee_Limited_Multjet_II_2.2.jpg",
          "description": "The Jeep Cherokee (KL) is a compact[4][5][6] crossover SUV manufactured and marketed by the Jeep subdivision of Fiat Chrysler Automobiles. Introduced for model year 2014 at the 2013 New York International Auto Show, sales began in November 2013.[1][7][7]",
          "production": "2013–present"
        },
        {
          "title": "Ford Tempo",
          "href": "https://en.wikipedia.org/wiki/Ford_Tempo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/92-94_Ford_Tempo.jpg/280px-92-94_Ford_Tempo.jpg",
          "description": "The Ford Tempo and its twin, the Mercury Topaz, are compact cars that were produced by the Ford Motor Company for model years 1984 to 1994. They were downsized successors to the boxy Ford Fairmont and Mercury Zephyr twins. The Tempo and Topaz were part of a rejuvenation plan by Ford to offer more environmentally friendly, fuel efficient, and more modern styled models to compete with the European and Japanese imports. While the car sold well, its innovation and aerodynamic design paved the way for the even more groundbreaking Ford Taurus.[1] The Tempo and Topaz were replaced for 1995 by the \"world car\" platform sold in North America as the Ford Contour and Mercury Mystique.",
          "production": "1984–94"
        },
        {
          "title": "Pagani Huayra",
          "href": "https://en.wikipedia.org/wiki/Pagani_Huayra",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pagani%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0023%29.jpg/280px-Pagani%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0023%29.jpg",
          "description": "The Pagani Huayra (Italian pronunciation: [ˈwai̯ra]) is a mid-engine sports car produced by Italian sports car manufacturer Pagani, succeeding the company's previous offering, the Zonda. It is named after Huayra-tata, a Quechua wind god.[3][4] The Huayra was named \"The Hypercar of the Year 2012\" by Top Gear magazine. On 11 February 2015 it was reported that the Pagani Huayra has been sold out. The Huayra was limited to just 100 units as part of Pagani's agreement with engine supplier Mercedes-AMG.[5]",
          "production": "2012–present"
        },
        {
          "title": "Peugeot 206",
          "href": "https://en.wikipedia.org/wiki/Peugeot_206",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/2002_Peugeot_206_LX_1.4_Front.jpg/280px-2002_Peugeot_206_LX_1.4_Front.jpg",
          "description": "The Peugeot 206 is  a supermini car (B) that is produced by the French manufacturer Peugeot from May 1998 to the present day.",
          "production": "1998–present"
        },
        {
          "title": "Jaguar XK120",
          "href": "https://en.wikipedia.org/wiki/Jaguar_XK120",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chichester_-_Jaguar_XK120_-_geograph.org.uk_-_1349971.jpg/280px-Chichester_-_Jaguar_XK120_-_geograph.org.uk_-_1349971.jpg",
          "description": "The Jaguar XK120 is a sports car manufactured by Jaguar between 1948 and 1954. It was Jaguar's first sports car since the SS 100, which ceased production in 1940.",
          "production": "1948–53"
        },
        {
          "title": "Subaru Alcyone",
          "href": "https://en.wikipedia.org/wiki/Subaru_Alcyone",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/1985_Subaru_Alcyone_VR_Turbo_4WD.jpg/280px-1985_Subaru_Alcyone_VR_Turbo_4WD.jpg",
          "description": "The Subaru XT was a 2-door coupé that was produced from 1985 to 1991. The name Alcyone was used in Japan, the Vortex name was used in Australia and New Zealand, and the name XT (with the four-cylinder EA-82 engine) or XT6 (using the ER-27 six-cylinder engine), was sold in North America and Europe.  All were available in front-wheel drive or four-wheel drive, depending on the year.",
          "production": "1985–1996"
        },
        {
          "title": "Zastava Skala",
          "href": "https://en.wikipedia.org/wiki/Zastava_Skala",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Zastava_Yugo_311_1116cc.jpg/280px-Zastava_Yugo_311_1116cc.jpg",
          "description": "Zastava Skala (pronounced [ˈzâːstaʋa ˈskǎːla]), also known as Yugo Skala (pronounced [ˈjûɡo ˈskǎːla]), is a generic name for a family of cars built by Serbian manufacturer Zastava Automobili. Based on a Fiat 128 sedan, it was introduced in 1971 and sold as Zastava (Yugo) 128 with a restyled rear panel. Later it became available as a 3 or 5-door liftback, a style that had not been issued in Italy, under the names Zastava 101, Zastava 1100, Zastava 1300 and Zastava GTL.",
          "production": "1971-2008"
        },
        {
          "title": "Fiat 124",
          "href": "https://en.wikipedia.org/wiki/Fiat_124",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fiat124Luc106.jpg/280px-Fiat124Luc106.jpg",
          "description": "The Fiat 124 is a small family car manufactured and marketed by Fiat between 1966 and 1974. The saloon superseded the Fiat 1300 and was the basis for several variants including a station wagon, a four-seater coupé (124 Sport Coupé), a two-seater convertible (124 Sport Spider) and a lengthened and more luxurious version, the 125, launched in early 1967.",
          "production": "1966–1974"
        },
        {
          "title": "Mercedes-Benz W186",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_W186",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mercedes_Benz_300_Limousine_front_20110611.jpg/280px-Mercedes_Benz_300_Limousine_front_20110611.jpg",
          "description": "The Mercedes-Benz W186 model 300 was a four-door luxury tourer produced by Mercedes-Benz between 1951 and 1957. The company's largest and most prestigious automobile, it was the Maybach of its day, elegant, powerful, exclusive, and expensive. Three versions were produced in succession, known informally as the 300a (or simply 300), 300b, and 300c. An enlarged \"300d\" variant built on the W189 chassis succeeded it in late 1957.",
          "production": "1951-1962"
        },
        {
          "title": "AC Cobra",
          "href": "https://en.wikipedia.org/wiki/AC_Cobra",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shelby_AC_427_Cobra_vl_blue.jpg/280px-Shelby_AC_427_Cobra_vl_blue.jpg",
          "description": "The AC Cobra, sold as the Shelby Cobra in the United States, is an Anglo-American sports car with a Ford V8 engine, produced intermittently in both the UK and the US since 1962.",
          "production": "1961–2004"
        },
        {
          "title": "Ford Aerostar",
          "href": "https://en.wikipedia.org/wiki/Ford_Aerostar",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ford_Aerostar_LWB_1992-97.jpg/280px-Ford_Aerostar_LWB_1992-97.jpg",
          "description": "The Ford Aerostar is a range of passenger and cargo vans that was manufactured and marketed by Ford in the United States and Canada; a limited number were exported outside of North America.  The first minivan sold by Ford, the Aerostar was sold in a single generation from the 1986 to 1997 model years.  Introduced shortly before the Ford Taurus, the vehicle derived its nameplate from its slope-nosed \"one-box\" exterior (although over six feet tall, the body of the Aerostar retained a drag coefficient of Cd=0.37,[1] besting the Lincoln Mark VII).",
          "production": "1986–97"
        },
        {
          "title": "Ford Granada (North America)",
          "href": "https://en.wikipedia.org/wiki/Ford_Granada_(North_America)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/1st_generation_Ford_Granada_coupe_%28US%29_in_Hastings%2C_Minnesota.jpg/280px-1st_generation_Ford_Granada_coupe_%28US%29_in_Hastings%2C_Minnesota.jpg",
          "description": "The North American version of the Ford Granada is a range of sedans that was manufactured and marketed by Ford.  Introduced for the 1975 model year as the intended successor as the Ford Maverick, the Granada was sold through the 1982 model year across two generations.  Sharing its name with the flagship sedan of Ford of Europe, the Granada was slotted above the Maverick as a luxury compact vehicle, expanding the segment in the United States.[1]",
          "production": "1975–82"
        },
        {
          "title": "Porsche 928",
          "href": "https://en.wikipedia.org/wiki/Porsche_928",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Porsche_928S4_%281990%29_%2834829893216%29.jpg/280px-Porsche_928S4_%281990%29_%2834829893216%29.jpg",
          "description": "The Porsche 928 is a luxury grand tourer produced by Porsche AG of Germany from 1978 to 1995. Originally intended to replace the company's iconic 911, the 928 combined the power, poise, and handling of a sports car with the refinement, comfort, and equipment of a luxury sedan. Porsche executives believed such a flagship would have wider appeal than the compact, quirky and sometimes difficult to drive 911.",
          "production": "1978–95"
        },
        {
          "title": "Škoda Octavia",
          "href": "https://en.wikipedia.org/wiki/%C5%A0koda_Octavia",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2018_Skoda_Octavia_SE_TDi_S-A_1.6_Front.jpg/280px-2018_Skoda_Octavia_SE_TDi_S-A_1.6_Front.jpg",
          "description": "The Škoda Octavia is a small family car produced by the Czech manufacturer Škoda Auto since 1996. It shares its name with an earlier model produced between 1959 and 1971. Three generations of the modern-era Octavia model have been introduced to date, delivered with five-door liftback saloon or five-door estate styles only. The car is front engined, both front- or four-wheel drive  are offered. Around five million units have been sold in its two decades of presence on the market.[2] The Octavia is Škoda's most popular model; about 40% of all newly manufactured Škoda cars are Octavias.[3]",
          "production": "1996–present"
        },
        {
          "title": "Mercedes-Benz CLK GTR",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_CLK_GTR",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mercedes-Benz_CLK_GTR_at_Goodwood_2014_001.jpg/220px-Mercedes-Benz_CLK_GTR_at_Goodwood_2014_001.jpg",
          "description": "The Mercedes-Benz CLK GTR (W297) is a sports car and race car produced by Mercedes-AMG, the performance and motorsports arm of Mercedes-Benz.  Intended for racing in the new FIA GT Championship series in 1997, the CLK GTR was designed primarily as a race car, with the road cars necessary in order to meet homologation standards being secondary in the car's design. Thus the limited production of road-going cars are considered racing cars for the road.",
          "production": "1997–1999"
        },
        {
          "title": "Ferrari 550",
          "href": "https://en.wikipedia.org/wiki/Ferrari_550",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Paris_-_Bonhams_2016_-_Ferrari_550_Maranello_coup%C3%A9_-_1999_-_005.jpg/280px-Paris_-_Bonhams_2016_-_Ferrari_550_Maranello_coup%C3%A9_-_1999_-_005.jpg",
          "description": "The Ferrari 550 Maranello (Type F133) is a front-engine V12 2-seat grand tourer built by Ferrari from 1996 to 2001. The 550 Maranello marked Ferrari's return to a front-engine, rear-wheel drive layout for its 2-seater 12-cylinder model, 23 years after the 365 GTB/4 Daytona had been replaced by the mid-engined Berlinetta Boxer.",
          "production": "1996–2001"
        },
        {
          "title": "Lancia Montecarlo",
          "href": "https://en.wikipedia.org/wiki/Lancia_Montecarlo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Lancia_Montecarlo_%2824750084830%29.jpg/280px-Lancia_Montecarlo_%2824750084830%29.jpg",
          "description": "The Lancia Montecarlo (Type 137) is a Pininfarina-designed mid-engined sports car which was produced by Lancia in Italy from 1975 to 1981.",
          "production": "1975–1981"
        },
        {
          "title": "Ferrari Berlinetta Boxer",
          "href": "https://en.wikipedia.org/wiki/Ferrari_Berlinetta_Boxer",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Ferrari_Berlinetta_Boxer-terabass.jpg/280px-Ferrari_Berlinetta_Boxer-terabass.jpg",
          "description": "The Ferrari Berlinetta Boxer (BB) is an automobile that was produced by Ferrari in Italy between 1973 and 1984. Replacing the front engined Daytona, it was the first in a series of Ferraris to use a mid-mounted flat-12 engine. The Boxer was designed by Leonardo Fioravanti and was the first mid-engined road-car to bear the Ferrari name and the Cavallino Rampante (prancing horse) logo. It was replaced by the Testarossa, which continued to use the Flat-12 engine.",
          "production": "1973–84"
        },
        {
          "title": "Porsche 356",
          "href": "https://en.wikipedia.org/wiki/Porsche_356",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Porsche_356_C_-_Flickr_-_Alexandre_Pr%C3%A9vot_%282%29_%28cropped%29.jpg/280px-Porsche_356_C_-_Flickr_-_Alexandre_Pr%C3%A9vot_%282%29_%28cropped%29.jpg",
          "description": "The Porsche 356 is a sports car which was first produced by Austrian company Porsche Konstruktionen GesmbH (1948–1949), and then by German company Dr. Ing. h. c. F. Porsche GmbH (1950–1965). It was Porsche's first production automobile. Earlier cars designed by the Austrian company include Cisitalia Grand Prix race car, the Volkswagen Beetle, and Auto Union Grand Prix cars.",
          "production": "1948–65"
        },
        {
          "title": "Volvo 164",
          "href": "https://en.wikipedia.org/wiki/Volvo_164",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Volvo_164.jpg/280px-Volvo_164.jpg",
          "description": "The Volvo 164 is a 4-door, 6-cylinder luxury sedan unveiled by Volvo at the Paris Motor Show early in October 1968[1] and first sold as a 1969 model. 46,008 164s were built before the car was succeeded by the 264 in 1975. The 164 was Volvo's first venture into the luxury segment since the end of PV 60 production in 1950, and was the first six-cylinder Volvo since the PV800 last produced in 1958.",
          "production": "1968–1975"
        },
        {
          "title": "Fiat 126",
          "href": "https://en.wikipedia.org/wiki/Fiat_126",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/1973_Fiat_126_IMG_7855.jpg/280px-1973_Fiat_126_IMG_7855.jpg",
          "description": "The Fiat 126 (Type 126) is a rear-engined, small economy or city car, introduced in October 1972 at the Turin Auto Show[1] as a replacement for the Fiat 500. The majority of 126s were produced in Bielsko-Biała, Poland, as the Polski Fiat 126p, where production continued until 2000. In many markets Fiat stopped sales of the 126 in 1993 in favour of their new front-engined Cinquecento. At a vehicle length of 3.05 metres, the Fiat 126 is almost exactly the same size as the original British Mini, and although it came to market 14 years later, production ended in the same year (2000), and its total sales of almost 4.7 million units were in close range of the Mini's 5.4 million. In Poland the car became a cultural icon and earned the nickname Maluch, meaning \"The Little One\" or \"Toddler\".[3][4]",
          "production": "1973–2000"
        },
        {
          "title": "Honda Beat",
          "href": "https://en.wikipedia.org/wiki/Honda_Beat",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Honda_Beat.jpg/280px-Honda_Beat.jpg",
          "description": "The Honda Beat is a rear wheel drive, mid-engined two-seat roadster kei car produced from May 1991 to February 1996. The Beat was the last car to be approved by Soichiro Honda before he died in 1991. The total number of cars produced was around 33,600. Most of the production (around two-thirds) occurred in the first year, and then production and sales fell drastically. The design of the car originated from Pininfarina, who then sold the design plan to Honda. The Beat was one of many cars designed to take advantage of Japan's tax-efficient kei car class.[2]",
          "production": "1991–1996"
        },
        {
          "title": "Lagonda 16/80",
          "href": "https://en.wikipedia.org/wiki/Lagonda_16/80",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Lagonda_16-80_T2_Special_Tourer.jpg/280px-Lagonda_16-80_T2_Special_Tourer.jpg",
          "description": "The Lagonda 16/80 was a sports touring car introduced by Lagonda in 1932, replacing the company’s 4-cylinder 2-litre model.",
          "production": "1928–34"
        },
        {
          "title": "Nissan Z-car",
          "href": "https://en.wikipedia.org/wiki/Nissan_Z-car",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/%2709_Nissan_370Z_Coupe_%28MIAS%29.JPG/280px-%2709_Nissan_370Z_Coupe_%28MIAS%29.JPG",
          "description": "The Nissan Z-car is a sports car which has been manufactured by Nissan Motors Ltd, in six generations, since 1969.",
          "production": "1969–present"
        },
        {
          "title": "Porsche 959",
          "href": "https://en.wikipedia.org/wiki/Porsche_959",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Porsche_959_%E2%80%93_Frontansicht_%283%29%2C_21._M%C3%A4rz_2013%2C_D%C3%BCsseldorf.jpg/280px-Porsche_959_%E2%80%93_Frontansicht_%283%29%2C_21._M%C3%A4rz_2013%2C_D%C3%BCsseldorf.jpg",
          "description": "The Porsche 959 is a sports car manufactured by German automobile manufacturer Porsche from 1986 to 1993, first as a Group B rally car and later as a road legal production car designed to satisfy FIA homologation regulations requiring at least 200 units be produced.[5]",
          "production": "1987-89"
        },
        {
          "title": "Messerschmitt KR175",
          "href": "https://en.wikipedia.org/wiki/Messerschmitt_KR175",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Messerschmitt_KR175_01.jpg/280px-Messerschmitt_KR175_01.jpg",
          "description": "The Messerschmitt KR175 microcar (1953–1955) was the first vehicle built by Messerschmitt under its 1952 agreement with Fritz Fend. In concept, although not in actual design, it was an extended version of the Fend Flitzer invalid carriage. Approximately 15,000 were built before it was replaced by the Messerschmitt KR200 in 1956.[4]",
          "production": "1953–55"
        },
        {
          "title": "Volvo 300 series",
          "href": "https://en.wikipedia.org/wiki/Volvo_300_series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Volvo_340_GL_1990_red.jpg/280px-Volvo_340_GL_1990_red.jpg",
          "description": "The Volvo 300 Series is a rear-wheel-drive small family car sold from 1976[2] to 1991, both as a hatchback and (from 1984) as a  conventional \"notchback\" saloon. It was launched in the Netherlands shortly after Volvo acquired a major stake in the passenger car division of DAF in 1973. The series consisted of the Volvo 340 (previously 343/345) and the later Volvo 360.",
          "production": "1976–1991"
        },
        {
          "title": "Lancia Dedra",
          "href": "https://en.wikipedia.org/wiki/Lancia_Dedra",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lancia_Dedra_from_La_Spezia.jpg/280px-Lancia_Dedra_from_La_Spezia.jpg",
          "description": "The Lancia Dedra (Type 835) is a compact executive car produced by the Italian automaker Lancia from 1989 to 1999. It was initially designed to support, and later to replace, the Prisma that, six years after its launch, was having difficulties to keep in pace with its latest opponents. It can be considered as the saloon version of the second generation Delta, that was launched four years later, in 1993.",
          "production": "1989–2000"
        },
        {
          "title": "Peel Trident",
          "href": "https://en.wikipedia.org/wiki/Peel_Trident",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/PeelTrident.jpg/280px-PeelTrident.jpg",
          "description": "The Peel Trident is the second three-wheeled microcar made by the Peel Engineering Company on the Isle of Man. An all-new design from its one-seat counterpart the Peel P50, the Trident has two seats.",
          "production": "1965–66"
        },
        {
          "title": "Bugatti Veyron",
          "href": "https://en.wikipedia.org/wiki/Bugatti_Veyron",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Red_Bugatti_Veyron_on_the_road_%287559997596%29.jpg/280px-Red_Bugatti_Veyron_on_the_road_%287559997596%29.jpg",
          "description": "The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Volkswagen Group and manufactured in Molsheim, France, by French automobile manufacturer Bugatti. It was named after the racing driver Pierre Veyron.",
          "production": "2005–2015"
        },
        {
          "title": "Chevrolet Vega",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Vega",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1971_Chevrolet_Vega_Coupe.jpg/250px-1971_Chevrolet_Vega_Coupe.jpg",
          "description": "The Chevrolet Vega is a subcompact automobile that was manufactured and marketed by GM's Chevrolet subdivision from 1970 to 1977. Available in two-door hatchback, notchback, wagon, and sedan delivery body styles, all models were powered by an inline four-cylinder engine with a lightweight, aluminum alloy cylinder block. The Vega first went on sale in Chevrolet dealerships on September 10, 1970 [1].  Variants included the Cosworth Vega, a short-lived limited-production performance model, introduced in March 1975.[citation needed]",
          "production": "1971–77"
        },
        {
          "title": "Ford Taurus",
          "href": "https://en.wikipedia.org/wiki/Ford_Taurus",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2010_Ford_Taurus_Limited_2_--_10-31-2009.jpg/280px-2010_Ford_Taurus_Limited_2_--_10-31-2009.jpg",
          "description": "The Ford Taurus is an automobile that was manufactured by Ford in the United States from the 1986 to 2019 model years.  Introduced in late 1985 for the 1986 model year, six generations were produced over 34 years; a brief hiatus was undertaken through 2006 to 2007.  From the 1986 to 2009 model years, the Taurus was sold alongside its near-twin, the Mercury Sable; four generations of the high-performance Ford Taurus SHO were produced (1989–1999; 2010–2019).  The Taurus also served as the basis for the first-ever front-wheel drive Lincoln Continental (1988–2002).        ",
          "production": "1986–present"
        },
        {
          "title": "Mitsubishi L200",
          "href": "https://en.wikipedia.org/wiki/Mitsubishi_L200",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Mitsubishi_L200_%28MSP15%29_01.jpg/280px-Mitsubishi_L200_%28MSP15%29_01.jpg",
          "description": "The Mitsubishi Triton is a compact pickup truck produced by Mitsubishi Motors. In Japan it was originally known as the Mitsubishi Forte[1] and from 1991 as the Strada. In the United States Chrysler Corporation sold captive imports as the Dodge Ram 50 and Plymouth Arrow truck, and Mitsubishi marketed it as the Mitsubishi Mighty Max until 1996.",
          "production": "1978–present"
        },
        {
          "title": "Honda NSX",
          "href": "https://en.wikipedia.org/wiki/Honda_NSX",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Honda_NSX_reg_1991_2977_cc.JPG/280px-Honda_NSX_reg_1991_2977_cc.JPG",
          "description": "The Honda NSX, marketed in North America as the Acura NSX, is a two-seat, mid-engine sports car manufactured by Honda.",
          "production": "1990–2005"
        },
        {
          "title": "Lagonda",
          "href": "https://en.wikipedia.org/wiki/Lagonda",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NewLagondaEmblem.jpg/220px-NewLagondaEmblem.jpg",
          "description": "Lagonda is a British luxury car marque established in 1906, which has been owned by Aston Martin since 1947. The marque has had a non-continuous presence in the luxury car market, being dormant for several times during its existence, most recently from 1995 to 2008 and 2010 to 2013.",
          "production": "1926–30"
        },
        {
          "title": "Ferrari 575M Maranello",
          "href": "https://en.wikipedia.org/wiki/Ferrari_575M_Maranello",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ferrari575M.jpg/280px-Ferrari575M.jpg",
          "description": "The Ferrari 575M Maranello[3] (Type F133) is a two-seat, two-door, grand tourer manufactured by Italian automobile manufacturer Ferrari. Launched in 2002, it is essentially an updated 550 Maranello featuring minor styling changes from Pininfarina. The 575M was replaced by the 599 GTB in the first half of 2006.",
          "production": "2002–2006"
        },
        {
          "title": "Ford LTD (Americas)",
          "href": "https://en.wikipedia.org/wiki/Ford_LTD_(Americas)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%2772_Ford_LTD_Coupe.JPG/280px-%2772_Ford_LTD_Coupe.JPG",
          "description": "The Ford LTD (pronounced el-tee-dee) is a range of automobiles manufactured by Ford Motor Company for the 1965 to 1986 model years.  Introduced as the highest trim of the full-size Ford model range, the LTD introduced options and features normally reserved for more luxurious Lincoln and Mercury models.  The largest vehicle produced by Ford in North America for most of its production, the LTD was joined by the intermediate Ford LTD II from 1977 to 1979; the LTD II served as the replacement for the Torino/Gran Torino range.  At various times throughout its production, the LTD range included two- and four-door pillared and hardtop sedans, a two-door convertible, and the Country Squire five-door woodgrain station wagon.",
          "production": "1967–86"
        },
        {
          "title": "Nissan S-Cargo",
          "href": "https://en.wikipedia.org/wiki/Nissan_S-Cargo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nissan_S-Cargo_001.JPG/280px-Nissan_S-Cargo_001.JPG",
          "description": "The Nissan S-Cargo was a small retro-styled van manufactured by the Japanese automaker Nissan from 1989 to 1991, and originally marketed solely in Japan at their Nissan Cherry Stores.",
          "production": "1989–92"
        },
        {
          "title": "Lamborghini 350GT",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_350GT",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lamborghini_350_GT_1964.jpg/280px-Lamborghini_350_GT_1964.jpg",
          "description": "The Lamborghini 350 GT was a grand tourer manufactured by Lamborghini between 1964 and 1966. It was the first production vehicle produced by Lamborghini.[1] The 350 GT was based on the earlier Lamborghini 350 GTV and was equipped with a 3.5 liter V12 engine and a 2-door coupé body by Carrozzeria Touring. The 350 GT debuted at the March 1964 Geneva Motor Show and production began the following May. The success of this model ensured the company's survival, establishing it as a viable competitor with rival manufacturer Ferrari.[3][4][2]",
          "production": "1964–66"
        },
        {
          "title": "Mazda R360",
          "href": "https://en.wikipedia.org/wiki/Mazda_R360",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Mazda-r360-coupe01.jpg/280px-Mazda-r360-coupe01.jpg",
          "description": "The Mazda R360 is a kei car that was produced by Mazda. It was Mazda's first real car - a two-door, four-seat coupé. Introduced in 1960, it featured a short 69 inch (1753 mm) wheelbase and weighed just 838 lb (380 kg). It was powered by a rear-mounted air-cooled 356 cc V-twin engine putting out about 16 hp (12 kW)[1] and 16 lb·ft (22 Nm) of torque. The car was capable of about 52 mph (84 km/h).[citation needed] It had a 4-speed manual or two-speed automatic transmission.[1]  The suspension, front and rear, was rubber \"springs\" and torsion bars.[citation needed]",
          "production": "1960–1966"
        },
        {
          "title": "Jaguar XJ220",
          "href": "https://en.wikipedia.org/wiki/Jaguar_XJ220",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Paris_-_Bonhams_2016_-_Jaguar_XJ220_coup%C3%A9_-_1992_-_001.jpg/280px-Paris_-_Bonhams_2016_-_Jaguar_XJ220_coup%C3%A9_-_1992_-_001.jpg",
          "description": "The Jaguar XJ220 is a two-seat sports car produced by British luxury car manufacturer Jaguar from 1992 until 1994, in collaboration with the specialist automotive and race engineering company Tom Walkinshaw Racing.[3][4] The XJ220 recorded a top speed of 341.7 km/h (212.3 mph) during testing by Jaguar at the Nardo test track in Italy.[5] This made it the fastest production car from 1992 to 1993.[6] According to Jaguar, an XJ220 prototype managed a Nürburgring lap time of 7:46.36 in 1991 which was faster than any production car lap time before it.[4][7][8][9]",
          "production": "1992–94"
        },
        {
          "title": "Nissan Maxima",
          "href": "https://en.wikipedia.org/wiki/Nissan_Maxima",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2017_Nissan_Maxima_SL%2C_front_8.25.19.jpg/280px-2017_Nissan_Maxima_SL%2C_front_8.25.19.jpg",
          "description": "The Nissan Maxima is a full-size car manufactured by Nissan and sold primarily in North America, the Middle East, and China. Making its sales debut in 1981 for the 1982 model year as the Datsun Maxima, it replaced the earlier Datsun 810. The name \"Maxima\" dates back to 1980 for the 1981 model year when the upscale 810 sold as the \"810 Maxima\" in North America. Like the 810, early versions of the Maxima had their origins in the Datsun/Nissan Bluebird. The Datsun brand was phased out in favor of Nissan in 1984 for the 1985 model year, thus becoming the Nissan Maxima.",
          "production": "1981–present"
        },
        {
          "title": "Fiat 500",
          "href": "https://en.wikipedia.org/wiki/Fiat_500",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/1970_Fiat_500_L_--_2011_DC_1.jpg/280px-1970_Fiat_500_L_--_2011_DC_1.jpg",
          "description": "The Fiat 500 (Italian: Cinquecento, pronounced [ˌtʃiŋkweˈtʃɛnto]) is a rear-engined, four-seat, small city car that was manufactured and marketed by Fiat Automobiles from 1957 to 1975 over a single generation in two-door saloon and two-door station wagon bodystyles.",
          "production": "1957–75"
        },
        {
          "title": "Lada Riva",
          "href": "https://en.wikipedia.org/wiki/Lada_Riva",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lada_2107_aka_Lada_Riva_October_1995_1452cc.jpg/280px-Lada_2107_aka_Lada_Riva_October_1995_1452cc.jpg",
          "description": "The VAZ-2105, VAZ-2104 and VAZ-2107 (collectively known as the Lada Riva in the United Kingdom and the Lada Nova in much of continental Europe[citation needed]) are a series of compact cars of Zhiguli brand built by Russian car manufacturer AvtoVAZ, introduced in 1980 in the Soviet Union, and progressively in other European markets through the early 1980s and sold in sedan and station wagon versions. AvtoVAZ cars are currently branded as Ladas.",
          "production": "1980–2013"
        },
        {
          "title": "Ferrari FF",
          "href": "https://en.wikipedia.org/wiki/Ferrari_FF",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Ferrari_FF_Newport_Beach_%288387695594%29.jpg/280px-Ferrari_FF_Newport_Beach_%288387695594%29.jpg",
          "description": "The Ferrari FF (FF meaning \"Ferrari Four\", for four seats and four-wheel drive) (Type F151) is a grand tourer[5] presented by Italian automobile manufacturer Ferrari on March 1, 2011 at the Geneva Motor Show as a successor to the 612 Scaglietti grand tourer.[1] It is Ferrari's first production four-wheel drive model.[5] The body style has been described as a shooting-brake,[6] a type of sporting hatchback/estate car with two doors.[7] The FF has a top speed of 335 km/h (208 mph) and it accelerates from 0 to 100 km/h (62 mph) in 3.7 seconds.[4][8] Ferrari states that the FF was the world's fastest four-seat automobile[9] upon its release to the public. The FF costs US$300,000,[10]  with 800 being produced during the first year.[11]",
          "production": "2011–2016"
        },
        {
          "title": "Mitsubishi Carisma",
          "href": "https://en.wikipedia.org/wiki/Mitsubishi_Carisma",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mitsubishi_Carisma_front_20071205.jpg/280px-Mitsubishi_Carisma_front_20071205.jpg",
          "description": "The Mitsubishi Carisma is a large family car[1] produced for the European market by Mitsubishi from 1995 to 2004. The model name was derived from a combination of the English car and the Greek kharisma, meaning \"divine gift\". [2] ",
          "production": "1995–2004"
        },
        {
          "title": "Ford Focus",
          "href": "https://en.wikipedia.org/wiki/Ford_Focus",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/2018_Ford_Focus_ST-Line_EcoBoost_1.0.jpg/280px-2018_Ford_Focus_ST-Line_EcoBoost_1.0.jpg",
          "description": "The Ford Focus is a compact car (C-segment in Europe) manufactured by the Ford Motor Company and created under Alexander Trotman's Ford 2000 plan, which aimed to globalize model development and sell one compact vehicle worldwide. The original Focus was primarily designed by Ford of Europe's German and British teams.[1]",
          "production": "1998–present"
        },
        {
          "title": "Hudson Motor Car Company",
          "href": "https://en.wikipedia.org/wiki/Hudson_Motor_Car_Company",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Hudson_Logo.svg/150px-Hudson_Logo.svg.png",
          "description": "The Hudson Motor Car Company made Hudson and other brand automobiles in Detroit, Michigan, U.S., from 1909 to 1954. In 1954, Hudson merged with Nash-Kelvinator to form American Motors Corporation (AMC). The Hudson name was continued through the 1957 model year, after which it was discontinued.",
          "production": "1916–50"
        },
        {
          "title": "Suzuki Swift",
          "href": "https://en.wikipedia.org/wiki/Suzuki_Swift",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/2018_Suzuki_Swift_SZ5_Boosterjet_SHVS_1.0_Front.jpg/280px-2018_Suzuki_Swift_SZ5_Boosterjet_SHVS_1.0_Front.jpg",
          "description": "The Suzuki Swift (Japanese: スズキ・スイフト, Suzuki Suifuto) is a subcompact car produced by Suzuki. The Suzuki Swift is classified in B-segment in European single market, segment known as Supermini in British islands. Prior to this, the \"Swift\" nameplate had been applied to the Suzuki Cultus in numerous export markets.",
          "production": "2004–present"
        },
        {
          "title": "Ferrari 360",
          "href": "https://en.wikipedia.org/wiki/Ferrari_360",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ferrari_360_--_11-11-2010.jpg/280px-Ferrari_360_--_11-11-2010.jpg",
          "description": "1,553 kg (3,424 lb) (Spider)[3]",
          "production": "1999–2004"
        },
        {
          "title": "Isetta",
          "href": "https://en.wikipedia.org/wiki/Isetta",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/BMW_Isetta_-_Flickr_-_mick_-_Lumix.jpg/280px-BMW_Isetta_-_Flickr_-_mick_-_Lumix.jpg",
          "description": "The Isetta is an Italian-designed microcar built under license in a number of different countries, including Argentina,[1] Spain,[2] Belgium,[3] France,[4] Brazil,[5] Germany,[6] and the United Kingdom.[7] Because of its egg shape and bubble-like windows, it became known as a bubble car, a name also given to other similar vehicles.[8]",
          "production": "1953–61"
        },
        {
          "title": "Mazda MPV",
          "href": "https://en.wikipedia.org/wiki/Mazda_MPV",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mazda_MPV_303.JPG/280px-Mazda_MPV_303.JPG",
          "description": "The Mazda MPV (Multi-Purpose Vehicle) is a minivan manufactured by Mazda. Introduced in 1988 as a rear-wheel-drive model with optional selectable four-wheel drive, this was replaced in 1999 with a front-wheel-drive version with optional all-wheel-drive in some markets. Over one million MPV models have been produced since its introduction.[1]",
          "production": "1988–present"
        },
        {
          "title": "Jaguar Mark 1",
          "href": "https://en.wikipedia.org/wiki/Jaguar_Mark_1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/1957_Jaguar_-_Flickr_-_111_Emergency.jpg/280px-1957_Jaguar_-_Flickr_-_111_Emergency.jpg",
          "description": "The Jaguar Mark 1 is a British saloon car produced by Jaguar between 1955 and 1959. It was referred to in contemporary company documentation as the Jaguar 2.4 Litre and Jaguar 3.4 Litre.[2] Its designation Mark 1 followed its  October 1959 replacement by Jaguar's 2.4-litre Mark 2.[3] The 2.4 Litre was the company's first small saloon since the end of its 1½ and 2½ Litre cars in 1949, and was an immediate success, easily outselling the larger much more expensive Jaguar saloons.",
          "production": "1955–1959"
        },
        {
          "title": "Cadillac De Ville",
          "href": "https://en.wikipedia.org/wiki/Cadillac_De_Ville",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/2004_Cadillac_Deville_DHS_--_NHTSA.jpg/280px-2004_Cadillac_Deville_DHS_--_NHTSA.jpg",
          "description": "The Cadillac DeVille was originally a trim level and later a separate model produced by Cadillac. The first car to bear the name was the 1949 Coupe de Ville, a pillarless two-door hardtop body style with a prestige trim level above that of the Series 62 luxury coupe. The last model to be formally known as a DeVille was the 2005 Cadillac DeVille, a full-size sedan, the largest car in the Cadillac model range at the time. The next year, the DeVille was officially renamed the Cadillac DTS.",
          "production": "1959–2005"
        },
        {
          "title": "Fiat Punto",
          "href": "https://en.wikipedia.org/wiki/Fiat_Punto",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Fiat_Grande_Punto_20090402_front.JPG/280px-Fiat_Grande_Punto_20090402_front.JPG",
          "description": "The Fiat Punto is a supermini car produced by the Italian manufacturer Fiat from 1993 to 2018, spanning over three generations. The third generation of the car was marketed as the Grande Punto, between 2005 and 2009, and the Punto Evo, between 2009 and 2012, when the bare Punto name was reintroduced. As of May 2013[update], nearly nine million units had been sold globally.[1][2]",
          "production": "1993–present"
        },
        {
          "title": "Ferrari 250 MM",
          "href": "https://en.wikipedia.org/wiki/Ferrari_250_MM",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ferrari_250_MM_Berlinetta_-_MM_2014_-_%2814241703734%29.jpg/280px-Ferrari_250_MM_Berlinetta_-_MM_2014_-_%2814241703734%29.jpg",
          "description": "The Ferrari 250 MM was a sports car produced by Ferrari in 1953.[1] After the initial racing succeses of the 3.0-litre Colombo V12 engine, introduced in the 250 S one-off, Ferrari produced a serial racing model. It is best recognisable for the distinctive closed berlinetta bodywork by Pinin Farina. The \"MM\" in its name stood for the Mille Miglia race.[2]",
          "production": "1952–53"
        },
        {
          "title": "Enzo Ferrari (automobile)",
          "href": "https://en.wikipedia.org/wiki/Enzo_Ferrari_(automobile)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg/280px-Orange_Enzo_Ferrari_%287191948164%29.jpg",
          "description": "The Enzo Ferrari[7] (also unofficially referred to as the Ferrari Enzo or the F60) (Type F140) is a 12 cylinder mid-engine sports car named after the company's founder, Enzo Ferrari.[5] It was developed in 2002 using Formula One technology, such as a carbon-fibre body, F1-style electrohydraulic shift transmission, and carbon fibre-reinforced silicon carbide (C/SiC) ceramic composite disc brakes. Also used are technologies not allowed in F1 such as active aerodynamics and traction control. The Enzo Ferrari generates substantial amounts of downforce which is achieved by the front underbody flaps, the small adjustable rear spoiler and the rear diffuser working in conjunction, 3,363 N (756 lbf) is generated at 200 km/h (124 mph) 7,602 N (1,709 lbf) is attained at 299 km/h (186 mph) before decreasing to 5,738 N (1,290 lbf) at top speed.[8]",
          "production": "2002–4"
        },
        {
          "title": "Lamborghini Miura",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Miura",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Lamborghini_Miura_%28Kirchzarten%29_jm20695.jpg/280px-Lamborghini_Miura_%28Kirchzarten%29_jm20695.jpg",
          "description": "The Lamborghini Miura is a sports car produced by Italian automaker Lamborghini between 1966 and 1973. The car was the first supercar with a rear mid-engined two-seat layout, although the concept was first pioneered by René Bonnet with the Matra Djet in 1964. This layout has since become the standard for high-performance sports and supercars.[4] When released, it was the fastest production road car.",
          "production": "1966–72"
        },
        {
          "title": "Mercedes-Benz W123",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_W123",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/1980_Mercedes-Benz_300_D_%28W123%29_sedan_%2820980100691%29.jpg/280px-1980_Mercedes-Benz_300_D_%28W123%29_sedan_%2820980100691%29.jpg",
          "description": "The Mercedes-Benz W123 is a range of executive cars produced by German manufacturer Mercedes-Benz from November 1975 to January 1986. The W123 models surpassed their predecessor, the Mercedes-Benz W114 models, as the most successful Mercedes, selling 2.7 million unit before the production ended in the autumn 1985 for saloon/sedan and January 1986 for coupé and estate/station wagon.",
          "production": "1975–86"
        },
        {
          "title": "Plymouth Prowler",
          "href": "https://en.wikipedia.org/wiki/Plymouth_Prowler",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2008-10-05_Red_Plymouth_Prowler_at_South_Square.jpg/280px-2008-10-05_Red_Plymouth_Prowler_at_South_Square.jpg",
          "description": "The Plymouth Prowler, later the Chrysler Prowler, is a retro-styled production car manufactured and marketed from 1997 to 2002 by DaimlerChrysler, based on the 1993 concept car of the same name.",
          "production": "1997–2002"
        },
        {
          "title": "MG Midget",
          "href": "https://en.wikipedia.org/wiki/MG_Midget",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/1963_M.G._Midget_%286322636050%29.jpg/280px-1963_M.G._Midget_%286322636050%29.jpg",
          "description": "The MG Midget is a small two-seater sports car produced by MG from 1961 to 1979. It revived a name that had been used on earlier models such as the MG M-type, MG D-type, MG J-type and MG T-type.",
          "production": "1961–80"
        },
        {
          "title": "Maruti 800",
          "href": "https://en.wikipedia.org/wiki/Maruti_800",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Maruti_800_AC.jpg/280px-Maruti_800_AC.jpg",
          "description": "Maruti 800 is a small city car that was manufactured by Maruti Suzuki in India from 1983 to 2014.[3] The first generation (SS80) was based on the 1979 Suzuki Alto and had an 800 cc F8B engine, hence the moniker. Widely regarded as the most influential automobile in India, about 2.87 million 800s were produced during its course of which 2.66 million were sold in India itself.[4]",
          "production": "1984–2010"
        },
        {
          "title": "Mercury Colony Park",
          "href": "https://en.wikipedia.org/wiki/Mercury_Colony_Park",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Merucry_Colony_Park_1984.jpg/280px-Merucry_Colony_Park_1984.jpg",
          "description": "The Mercury Colony Park is a full-size station wagon that was marketed by the Mercury division of Ford Motor Company between 1957 and 1991.  Distinguished by its simulated wood-grain paneling, the Colony Park was marketed as either the premium-trim or the sole full-size station wagon offering of the division.  Following the demise of Edsel, full-size Mercury and Ford vehicles adopted similar bodyshells, with the Colony Park becoming the counterpart of the Ford Country Squire until their discontinuation.",
          "production": "1957-1991"
        },
        {
          "title": "Buick Invicta",
          "href": "https://en.wikipedia.org/wiki/Buick_Invicta",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Buick_Invicta_Convertible_1961.jpg/280px-Buick_Invicta_Convertible_1961.jpg",
          "description": "The Buick Invicta is a full-size automobile produced by Buick from 1959 to 1963.[1] The Invicta was a continuation of the Buick Century concept that mated the standard size Buick LeSabre (pre-1959, Buick Special) body with Buick's larger 401 cubic inch Nailhead V8 engine, yielding what was referred to as \"the banker's hot rod.\" The name was derived from Latin and signified 'unconquerable, invincible, unbeatable, unvanquished' according to Buick Motor Division sales training materials.",
          "production": "1959–63"
        },
        {
          "title": "GM B platform",
          "href": "https://en.wikipedia.org/wiki/GM_B_platform",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/81-85_Oldsmobile_Delta_88.jpg/280px-81-85_Oldsmobile_Delta_88.jpg",
          "description": "The GM B platform  (also known as GM B body) was General Motors' full-size rear-wheel drive automobile platform from 1926-1996. It was closely related to the original rear-wheel drive GM C and GM D platforms, and was used for convertibles, hardtops, coupés, sedans, and station wagons.",
          "production": "1971–76"
        },
        {
          "title": "Peugeot 504",
          "href": "https://en.wikipedia.org/wiki/Peugeot_504",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Peugeot_504_000.jpg/280px-Peugeot_504_000.jpg",
          "description": "The Peugeot 504 was a mid-size, front-engine, rear wheel drive automobile manufactured and marketed by Peugeot from 1968 to 1983 over a single generation, primarily in four-door sedan and wagon configurations — but also with two-door coupe, convertible and pickup truck variants.",
          "production": "1968–2006"
        },
        {
          "title": "Ferrari 348",
          "href": "https://en.wikipedia.org/wiki/Ferrari_348",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ferrari_348_%282424594972%29.jpg/280px-Ferrari_348_%282424594972%29.jpg",
          "description": "The Ferrari 348 (Type F119) is a mid-engine V8-powered 2-seat sports car produced by Italian automaker Ferrari, replacing the 328 in 1989 and continuing until 1995.[4][5] It was the final V8 model developed under the direction of Enzo Ferrari before his death, commissioned to production posthumously.",
          "production": "1989–95"
        },
        {
          "title": "Trabant",
          "href": "https://en.wikipedia.org/wiki/Trabant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Trabbi_601-S_-_Typenschild_1.jpg/280px-Trabbi_601-S_-_Typenschild_1.jpg",
          "description": "The Trabant (/ˈtræbænt, -ənt/; German: [tʁaˈbant]) is an automobile which was produced from 1957 to 1990 by former East German car manufacturer VEB Sachsenring Automobilwerke Zwickau. It is often seen as symbolic of the former East Germany and the collapse of the Eastern Bloc in general. The Trabant had a duroplast body mounted on a one-piece steel chassis (a so-called unibody), front-wheel drive, a transverse engine, and independent suspension –  unusual features in 1957 but it remained much the same until 1989 when it acquired a (licensed) Volkswagen engine; its discontinuation followed in 1991. The 1980s model had no tachometer, no indicator for either the headlights or turn signals, no fuel gauge, no rear seat belts, and no external fuel door, and drivers had to pour a mix of gasoline and oil directly under the bonnet/hood.[3]",
          "production": "1957–91"
        },
        {
          "title": "MG XPower SV",
          "href": "https://en.wikipedia.org/wiki/MG_XPower_SV",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/AMI_SV-R.jpg/280px-AMI_SV-R.jpg",
          "description": "The MG XPower SV is a sports car that was produced by MG Rover. Manufactured in Modena, Italy and finished at Longbridge, United Kingdom, it was based on the platform of the Qvale Mangusta, formerly the De Tomaso Biguà.[1]",
          "production": "2003–2005"
        },
        {
          "title": "Mercury Cyclone",
          "href": "https://en.wikipedia.org/wiki/Mercury_Cyclone",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/1971_Mercury_Cyclone.jpg/280px-1971_Mercury_Cyclone.jpg",
          "description": "The Mercury Cyclone is an automobile that was marketed by the Mercury division of Ford from 1964 to 1971.  Introduced in 1964 as the Mercury Comet Cyclone, the Cyclone replaced the S-22 as the performance-oriented version of the Mercury Comet model line.  The Cyclone became a distinct nameplate for the 1968 model year, as the Mercury Montego was phased in to replace the Comet.[1]  ",
          "production": "1964-1972"
        },
        {
          "title": "Ferrari 250",
          "href": "https://en.wikipedia.org/wiki/Ferrari_250",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/1962_Ferrari_250_GTE.jpg/280px-1962_Ferrari_250_GTE.jpg",
          "description": "The Ferrari 250 is a series of sports cars and grand tourers built by Ferrari from 1952 to 1964. The company's most successful early line, the 250 series includes many variants designed for road use or sports car racing. 250 series cars are characterized by their use of a 3.0 L (2,953 cc) Colombo V12 engine designed by Giaoccino Colombo. They were replaced by the 275 and 330 series cars.",
          "production": "1959–63"
        },
        {
          "title": "Ferrari 456",
          "href": "https://en.wikipedia.org/wiki/Ferrari_456",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Paris_-_Bonhams_2014_-_Ferrari_456GT_modoficata_coup%C3%A9_-_2003_-_001.jpg/280px-Paris_-_Bonhams_2014_-_Ferrari_456GT_modoficata_coup%C3%A9_-_2003_-_001.jpg",
          "description": "The Ferrari 456 and 456M (Type F116) are front-engine grand tourers which were produced by Ferrari from 1992 to 2003. The 456 was a replacement for the front-engine 412 as the company's V12-powered four seater. The updated 456M, which was the last Ferrari model to use pop-up headlamps, was replaced in 2004 by the 612 Scaglietti.",
          "production": "1992–2003"
        },
        {
          "title": "Ferrari Mondial",
          "href": "https://en.wikipedia.org/wiki/Ferrari_Mondial",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ferrari-Mondial-3.2-side.jpg/280px-Ferrari-Mondial-3.2-side.jpg",
          "description": "The Ferrari Mondial (Type F108) is a mid-engined, V8, grand tourer manufactured and marketed by Ferrari between 1980 and 1993 — with styling by Pininfarina and bodywork by Carrozzeria Scaglietti.",
          "production": "1980–93"
        },
        {
          "title": "Volvo P1800",
          "href": "https://en.wikipedia.org/wiki/Volvo_P1800",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Volvo_P1800_mfd_1965_1780cc_Essex.JPG/280px-Volvo_P1800_mfd_1965_1780cc_Essex.JPG",
          "description": "The Volvo P1800 is a 2+2, front-engine, rear-drive sports car manufactured and marketed by Volvo Cars between 1961 and 1973. Originally a coupe (1961–1972), it was altered into a shooting-brake for the duration of its production (1972-1973).[4][5][6] Styling was by Pelle Petterson under the tutelage of Pietro Frua when Frua's studio was a subsidiary of the prestigious Italian carrozzeria Ghia,[7] and mechanicals derived from Volvo's dependable Amazon/122 series.",
          "production": "1961–1973"
        },
        {
          "title": "Mercury Monarch",
          "href": "https://en.wikipedia.org/wiki/Mercury_Monarch",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/MercuryMonarch500OBO.jpg/280px-MercuryMonarch500OBO.jpg",
          "description": "The Mercury Monarch is a compact[2][3][4][5][6][7] automobile that was marketed by the Mercury division of Ford from 1975 to 1980.  Adopting its nameplate from a marque of Ford Canada during the 1940s and 1950s, the Monarch was marketed as the Mercury counterpart of the Ford Granada in North America. Slotted between the Comet (replaced by the Zephyr for 1978) and the Montego (renamed the Cougar for 1977), a single generation of the Monarch was produced. ",
          "production": "1975–80"
        },
        {
          "title": "Mercury Mariner",
          "href": "https://en.wikipedia.org/wiki/Mercury_Mariner",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/2nd_Mercury_Mariner_--_03-30-2012.JPG/280px-2nd_Mercury_Mariner_--_03-30-2012.JPG",
          "description": "The Mercury Mariner is a compact crossover SUV that was introduced in 2005.  It is a sibling of the Mazda Tribute and Ford Escape, although it is more  upmarket than the other two.  The Mariner is Mercury's first car-based SUV, and is slotted below the Mountaineer in the lineup.   When Ford eliminated the Mercury brand, the Mariner ended production in October 2010.[1]",
          "production": "2005-2010"
        },
        {
          "title": "Ford Model T",
          "href": "https://en.wikipedia.org/wiki/Ford_Model_T",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/1925_Ford_Model_T_touring.jpg/280px-1925_Ford_Model_T_touring.jpg",
          "description": "The Ford Model T (colloquially known as the Tin Lizzie, Leaping Lena, jitney or flivver) is an automobile produced by Ford Motor Company from October 1, 1908, to May 26, 1927.[7][8] It is generally regarded as the first affordable automobile, the car that opened travel to the common middle-class American; some of this was because of Ford's efficient fabrication, including assembly line production instead of individual hand crafting.[9]",
          "production": "1908–27"
        },
        {
          "title": "Lagonda",
          "href": "https://en.wikipedia.org/wiki/Lagonda",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NewLagondaEmblem.jpg/220px-NewLagondaEmblem.jpg",
          "description": "Lagonda is a British luxury car marque established in 1906, which has been owned by Aston Martin since 1947. The marque has had a non-continuous presence in the luxury car market, being dormant for several times during its existence, most recently from 1995 to 2008 and 2010 to 2013.",
          "production": "1936–37"
        },
        {
          "title": "Lagonda",
          "href": "https://en.wikipedia.org/wiki/Lagonda",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NewLagondaEmblem.jpg/220px-NewLagondaEmblem.jpg",
          "description": "Lagonda is a British luxury car marque established in 1906, which has been owned by Aston Martin since 1947. The marque has had a non-continuous presence in the luxury car market, being dormant for several times during its existence, most recently from 1995 to 2008 and 2010 to 2013.",
          "production": "1938–40"
        },
        {
          "title": "Range Rover",
          "href": "https://en.wikipedia.org/wiki/Range_Rover",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Logo_Range_Rover.jpg/280px-Logo_Range_Rover.jpg",
          "description": "The Land Rover Range Rover (generally known simply as a Range Rover) is a full-sized luxury sport utility vehicle (SUV) from Land Rover, a marque of Jaguar Land Rover. The Range Rover was launched in 1970 by British Leyland. This flagship model is now in its fourth generation.",
          "production": "1970–present"
        },
        {
          "title": "Volvo 700 series",
          "href": "https://en.wikipedia.org/wiki/Volvo_700_series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/1989_Volvo_740_GL_2.0_Front.jpg/280px-1989_Volvo_740_GL_2.0_Front.jpg",
          "description": "The Volvo 700 series is a range of executive cars produced by the Swedish manufacturer Volvo Cars from 1982 to 1992. The 700 series was introduced in 1982 with the luxurious 760, followed two years later by the lower priced 740 which capitalized on the prestige attained by the very similar 760. The 700 series was then gradually replaced, beginning in 1990, by the 900 series. The 700, designed by Jan Wilsgaard, was originally to have been a replacement for the 200 series, but production of that model continued until the early nineties. The expensive 780, a Bertone-designed coupé version, entered production in 1986 and departed without a direct successor only four years later.",
          "production": "1982–1992"
        },
        {
          "title": "Subaru Legacy",
          "href": "https://en.wikipedia.org/wiki/Subaru_Legacy",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/2016_Subaru_Liberty_%28MY16%29_2.5i_sedan_%282018-11-02%29_01.jpg/280px-2016_Subaru_Liberty_%28MY16%29_2.5i_sedan_%282018-11-02%29_01.jpg",
          "description": "The Subaru Legacy (Japanese: スバル・レガシィ, Subaru Regashi) is a mid-size car built by Japanese automobile manufacturer Subaru since 1989.  The maker's flagship car, it is unique in its class for offering all wheel drive as a standard feature, and Subaru's traditional boxer engine. The Legacy bears the name Liberty in Australia out of deference to Legacy Australia, an organisation dedicated to caring for the families of military service veterans.",
          "production": "1988–present"
        },
        {
          "title": "Messerschmitt KR200",
          "href": "https://en.wikipedia.org/wiki/Messerschmitt_KR200",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Messerschmitt_Kabinenroller.jpg/280px-Messerschmitt_Kabinenroller.jpg",
          "description": "The Messerschmitt KR200, or Kabinenroller (Cabin Scooter), is a three-wheeled bubble car designed by the aircraft engineer Fritz Fend and produced in the factory of the German aircraft manufacturer Messerschmitt from 1955 to 1964.",
          "production": "1955–1964"
        },
        {
          "title": "Renault Sport Spider",
          "href": "https://en.wikipedia.org/wiki/Renault_Sport_Spider",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Renault_Spider_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29_%28cropped%29.jpg/280px-Renault_Spider_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29_%28cropped%29.jpg",
          "description": "The Renault Sport Spider is a roadster produced by the French automaker Renault Sport (a subsidiary of Renault) between 1996 and 1999.",
          "production": "1996–1999"
        },
        {
          "title": "Austin Metro",
          "href": "https://en.wikipedia.org/wiki/Austin_Metro",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Austin_Metro_Auto_1983.jpg/280px-Austin_Metro_Auto_1983.jpg",
          "description": "The Metro is a supermini car, later a city car that was produced by British Leyland (BL) and, later, the Rover Group from 1980 to 1998. It was launched in 1980 as the Austin Mini Metro. It was intended to complement and eventually replace the Mini, and was developed under the codename LC8. The Metro was named by What Car? as Car of The Year in 1983 as an MG, and again as a Rover in 1991. ",
          "production": "1980–1998"
        },
        {
          "title": "Nissan Tiida",
          "href": "https://en.wikipedia.org/wiki/Nissan_Tiida",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Nissan_Tiida_C12_China_2014-05-01.jpg/280px-Nissan_Tiida_C12_China_2014-05-01.jpg",
          "description": "The Nissan Tiida is a compact car produced by the Japanese manufacturer Nissan since 2004, spanning two generations. The name \"Tiida\" is from the Okinawan language and means \"sun\", continuing the naming tradition started in 1966 with the Nissan Sunny.",
          "production": "2004–present"
        },
        {
          "title": "Lagonda",
          "href": "https://en.wikipedia.org/wiki/Lagonda",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NewLagondaEmblem.jpg/220px-NewLagondaEmblem.jpg",
          "description": "Lagonda is a British luxury car marque established in 1906, which has been owned by Aston Martin since 1947. The marque has had a non-continuous presence in the luxury car market, being dormant for several times during its existence, most recently from 1995 to 2008 and 2010 to 2013.",
          "production": "1928–34"
        },
        {
          "title": "Porsche 917",
          "href": "https://en.wikipedia.org/wiki/Porsche_917",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2006FOS_1970Porsche917KGulf.jpg/280px-2006FOS_1970Porsche917KGulf.jpg",
          "description": "The Porsche 917 is a sports prototype race car developed by German manufacturer Porsche. The 917  gave Porsche its first overall wins at the 24 Hours of Le Mans in 1970 and 1971. Powered by the Type 912 flat-12 engine of 4.5, 4.9, or 5 litres, the 917/30 Can-Am variant was capable of a 0-62 mph (100 km/h) time of 2.3 seconds, 0–124 mph (200 km/h) in 5.3 seconds, and a test track top speed of up to 240 mph (390 km/h).[2][better source needed]",
          "production": "1969–73"
        },
        {
          "title": "Lagonda",
          "href": "https://en.wikipedia.org/wiki/Lagonda",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NewLagondaEmblem.jpg/220px-NewLagondaEmblem.jpg",
          "description": "Lagonda is a British luxury car marque established in 1906, which has been owned by Aston Martin since 1947. The marque has had a non-continuous presence in the luxury car market, being dormant for several times during its existence, most recently from 1995 to 2008 and 2010 to 2013.",
          "production": "1935"
        },
        {
          "title": "Ferrari F40",
          "href": "https://en.wikipedia.org/wiki/Ferrari_F40",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/F40_Ferrari_20090509.jpg/280px-F40_Ferrari_20090509.jpg",
          "description": "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sports car[5] built from 1987 to 1992, with the LM and GTE race car versions continuing production until 1994 and 1996 respectively.[2] As the successor to the 288 GTO, it was designed to celebrate Ferrari's 40th anniversary and was the last Ferrari automobile personally approved by Enzo Ferrari. At the time it was Ferrari's fastest, most powerful, and most expensive car for sale.[8]",
          "production": "1987–93"
        },
        {
          "title": "Mercedes-Benz 600",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_600",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mercedes-Benz_600_vl_silver_TCE.jpg/280px-Mercedes-Benz_600_vl_silver_TCE.jpg",
          "description": "The Mercedes-Benz 600 (W100) is a large ultra-luxury sedan and limousine produced by Mercedes-Benz from 1963 to 1981. The forerunner of the modern Maybach marque, the 600 Grosser Mercedes (\"Grand Mercedes\") succeeded the Type 300d \"Adenauer\" as the company's flagship and most expensive model. It was positioned well above the 300-series Mercedes-Benz W112 in price, amenities, and status. Its few competitors included certain models of Rolls-Royce Silver Cloud III, Rolls-Royce Silver Shadow, Rolls-Royce Phantom V, and Bentley S3.",
          "production": "1963-1981"
        },
        {
          "title": "McLaren P1",
          "href": "https://en.wikipedia.org/wiki/McLaren_P1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/280px-McLaren_P1.jpg",
          "description": "The McLaren P1 is a limited-production plug-in hybrid sports car produced by British automobile manufacturer McLaren Automotive. Debuted at the 2012 Paris Motor Show,[5] sales of the P1 began in the United Kingdom in October 2013 and all 375 units were sold out by November.[6][7] Production ended in early December 2015.[8] The United States accounted for 34% of the units and Europe for 26%.[8]",
          "production": "2013–15"
        },
        {
          "title": "Volkswagen Gol",
          "href": "https://en.wikipedia.org/wiki/Volkswagen_Gol",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Volkswagen_Gol_1.6_Trend_2011_%2813905746028%29.jpg/280px-Volkswagen_Gol_1.6_Trend_2011_%2813905746028%29.jpg",
          "description": "The Volkswagen Gol is a subcompact car that has been manufactured by Volkswagen do Brasil since 1980 as Volkswagen's entry-level car in the Latin American market—where it succeeded the Volkswagen Type 1 (Fusca) and the VW Brasilia. Several variants of the Gol were marketed in North America as the Volkswagen Fox from 1987 to 1993.",
          "production": "1980–present"
        },
        {
          "title": "Alfa Romeo 33 Stradale",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_33_Stradale",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/1968_Alfa_Romeo_Tipo_33_Stradale.jpg/280px-1968_Alfa_Romeo_Tipo_33_Stradale.jpg",
          "description": "The Alfa Romeo 33 Stradale is a mid-engined sports car built by Italian car manufacturer Alfa Romeo. It is one of the world's first supercars, it was the fastest commercially available car for standing kilometer when introduced.[1][2][3] 18 examples were produced between 1967 and 1969. \"Stradale\" (Italian for \"road-going\") is a term often used by Italian car manufacturers to indicate a street-legal version of a racing car; indeed the 33 Stradale was derived from the Tipo 33 sports prototype.",
          "production": "1967–1967"
        },
        {
          "title": "Volkswagen Passat",
          "href": "https://en.wikipedia.org/wiki/Volkswagen_Passat",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/2015_Volkswagen_Passat_%283G_MY16%29_132TSI_station_wagon_%282015-11-11%29_01.jpg/280px-2015_Volkswagen_Passat_%283G_MY16%29_132TSI_station_wagon_%282015-11-11%29_01.jpg",
          "description": "The Volkswagen Passat (listen (help·info)) is a large family car manufactured and marketed by Volkswagen since 1973, and now in its eighth generation. It has been marketed variously as the Dasher, Santana, Quantum, Magotan, Corsar and Carat. The successive generations of the Passat carry the Volkswagen internal designations B1, B2, etc. Originally these designations paralleled those of the Audi 80 and A4 with which the Passat shared platforms, however this is no longer the case.",
          "production": "1973–present"
        },
        {
          "title": "Imperial (automobile)",
          "href": "https://en.wikipedia.org/wiki/Imperial_(automobile)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Imperial_Crown_Convertible_1960.jpg/280px-Imperial_Crown_Convertible_1960.jpg",
          "description": "Imperial was the Chrysler Corporation's luxury automobile brand from 1955 to 1975, and again from 1981 to 1983.",
          "production": "1957–70"
        },
        {
          "title": "Audi A3",
          "href": "https://en.wikipedia.org/wiki/Audi_A3",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/2018_Audi_A3_Sport_TDi_Saloon_1.5_Front.jpg/280px-2018_Audi_A3_Sport_TDi_Saloon_1.5_Front.jpg",
          "description": "The Audi A3 is a small family/subcompact executive car manufactured and marketed since 1996[1][2] by the Audi subdivision of the Volkswagen Group, now in its third generation.",
          "production": "1996–present"
        },
        {
          "title": "Alfa Romeo 156",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_156",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alfa_156_grey.jpg/280px-Alfa_156_grey.jpg",
          "description": "The Alfa Romeo 156 (Type 932) is a compact executive car produced by the Italian automobile manufacturer Alfa Romeo. It was introduced at the 1997 Frankfurt Motor Show[4] as the replacement for the Alfa Romeo 155 the 156 was well accepted and in the following year went on to win the 1998 European Car of the Year award[5] The 156 saloon was discontinued in Europe late in 2005, while the Q4 Crosswagon continued in production until the end of 2007.[6]",
          "production": "1997-2005"
        },
        {
          "title": "Smart Fortwo",
          "href": "https://en.wikipedia.org/wiki/Smart_Fortwo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2016_Smart_Fortwo_Passion_Automatic_1.0_Front.jpg/280px-2016_Smart_Fortwo_Passion_Automatic_1.0_Front.jpg",
          "description": "The Smart Fortwo (stylized as \"smart fortwo\") is a rear-engine, rear-wheel-drive, 2-seater hatchback city car manufactured and marketed by the Smart division of Daimler AG, introduced in 1998, now in its third generation.",
          "production": "1998–present"
        },
        {
          "title": "Crosley",
          "href": "https://en.wikipedia.org/wiki/Crosley",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1948_Crosley_Station_Wagon.jpg/220px-1948_Crosley_Station_Wagon.jpg",
          "description": "Crosley was a small, independent American manufacturer of subcompact cars, bordering on microcars. At first called the Crosley Corporation and later Crosley Motors Incorporated, the Cincinnati, Ohio, firm was active from 1939 to 1952, interrupted by World War II production. Their station wagons were the most popular model, but also offered were sedans, pickups, convertibles, a sports car, and even a tiny jeep-like vehicle. For export, the cars were badged Crosmobile.",
          "production": "1939–49"
        },
        {
          "title": "Lancia Stratos",
          "href": "https://en.wikipedia.org/wiki/Lancia_Stratos",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Lancia_Stratos_HF_001.JPG/280px-Lancia_Stratos_HF_001.JPG",
          "description": "The Lancia Stratos HF (Tipo 829), widely and more simply known as Lancia Stratos, is a sports car and rally car made by Italian car manufacturer Lancia. The HF stands for High Fidelity. It was a very successful rally car, winning the World Rally Championship in 1974, 1975 and 1976.",
          "production": "1972–74"
        },
        {
          "title": "ZAZ",
          "href": "https://en.wikipedia.org/wiki/ZAZ",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/ZAZ_Logo.png/220px-ZAZ_Logo.png",
          "description": "ZAZ or Zaporizhia Automobile Building Plant (Ukrainian: ЗАЗ, Запорізький автомобілебудівельний завод, Zaporiz'kyi avtomobilebudivnyi zavod or Zaporiz'kyi avtozavod)  is the main automobile manufacturer of Ukraine, based in the south-eastern city of Zaporizhia. It also produces buses and trucks and is known for its former parent company's name, AvtoZAZ.",
          "production": "1960–69"
        },
        {
          "title": "Maybach 57 and 62",
          "href": "https://en.wikipedia.org/wiki/Maybach_57_and_62",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/%D0%9C%D0%B0%D0%B9%D0%B1%D0%B0%D1%85_%D0%B2_%D0%90%D0%BB%D0%BC%D0%B0-%D0%90%D1%82%D0%B5.JPG/280px-%D0%9C%D0%B0%D0%B9%D0%B1%D0%B0%D1%85_%D0%B2_%D0%90%D0%BB%D0%BC%D0%B0-%D0%90%D1%82%D0%B5.JPG",
          "description": "The  Maybach 57 (chassis no. W240) and 62 (chassis no. V240) were the first automobile models of the Maybach brand since the brand's revival by DaimlerChrysler AG (now Daimler AG). They are derived from the Benz Maybach concept car presented at the 1997 Tokyo Motor Show. The concept car was based on the Mercedes-Benz W140 S-class sedan platform, as were the production models. The Luxury Brand Status Index 2008 placed the Maybach in first place, ahead of Rolls-Royce and Bentley. The models ceased production in December 2012 due to continued financial losses for the marque, and sales at one-fifth the level of the profitable Rolls-Royce models.[3]",
          "production": "2002–13"
        },
        {
          "title": "BMW E9",
          "href": "https://en.wikipedia.org/wiki/BMW_E9",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/BMWE9CSc.jpg/280px-BMWE9CSc.jpg",
          "description": "The BMW E9 is a range of coupés produced from 1968 to 1975. Initially released as the 2800 CS model, the E9 was based on the BMW 2000 C / 2000 CS four-cylinder coupés, which were enlarged to fit the BMW M30 six-cylinder engine. The E9 bodywork was built by Karmann.",
          "production": "1968–75"
        },
        {
          "title": "Saleen S7",
          "href": "https://en.wikipedia.org/wiki/Saleen_S7",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/SAG2004_181_Saleen.jpg/280px-SAG2004_181_Saleen.jpg",
          "description": "The Saleen S7 is an American hand-built, high-performance supercar designed and built by Saleen Automotive Inc. Developed jointly by Steve Saleen for the initial concept, direction and engine, Hidden Creek Industries for resources and initial funding, Ray Mallock Ltd. (RML) for chassis, suspension and aerodynamics, and Phil Frank for the body and interior CAD design and development,[6][7] it was the first fully proprietary car produced by Saleen and became America's third mid-engine production supercar coming after the Vector W8 and M12. The S7 debuted on August 19, 2000 at the Monterey Historic Races. The all-aluminium engine is a bored-and-stroked derivative of Ford's 351 Windsor small block with Cleveland-style canted valve heads, not based on the FE big-block. It proved remarkably tractable and flexible for such a high-output unit—550 hp (410 kW) at 6400 rpm.[8] In 2005, the S7 gained a more powerful twin-turbo powerplant which boosted engine power to 750 hp (559 kW) and top speed to 248 mph (399 km/h).[9]",
          "production": "2000–09"
        },
        {
          "title": "Mercury Turnpike Cruiser",
          "href": "https://en.wikipedia.org/wiki/Mercury_Turnpike_Cruiser",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/1957_Mercury_Turnpike_Cruiser_%2835442133721%29.jpg/280px-1957_Mercury_Turnpike_Cruiser_%2835442133721%29.jpg",
          "description": "The Mercury Turnpike Cruiser is a series of automobiles that were produced by the Mercury division of Ford.  Named by Mercury to commemorate the creation of the Interstate Highway System, the Turnpike Cruiser was the flagship Mercury model line, slotted above the Montclair.       ",
          "production": "1957-1958"
        },
        {
          "title": "Chevrolet Cavalier",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Cavalier",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3rd_Chevrolet_Cavalier.jpg/280px-3rd_Chevrolet_Cavalier.jpg",
          "description": "The Chevrolet Cavalier is a line of small cars produced for the model years 1982 through 2005 by Chevrolet. As a rebadged variant of General Motors' J-cars, the Cavalier was manufactured alongside the Cadillac Cimarron, Buick Skyhawk, Oldsmobile Firenza, and Pontiac J2000/2000/Sunbird at GM's  South Gate Assembly and Janesville Assembly plants, achieving its highest sales in 1984.",
          "production": "1982–2005"
        },
        {
          "title": "Fiat Uno",
          "href": "https://en.wikipedia.org/wiki/Fiat_Uno",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fiat_Uno_%28front%29%2C_Jimbaran.jpg/280px-Fiat_Uno_%28front%29%2C_Jimbaran.jpg",
          "description": "The Fiat Uno is a supermini car which was produced by the Italian manufacturer Fiat. The Uno was launched in 1983 and built in its homeland until 1995, with production still taking place in other countries for nearly 20 more years, with the final Uno built in Brazil in 2013.",
          "production": "1983–present"
        },
        {
          "title": "Plymouth Fury",
          "href": "https://en.wikipedia.org/wiki/Plymouth_Fury",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/1959_Plymouth_Sport_Fury_photo-13.JPG/280px-1959_Plymouth_Sport_Fury_photo-13.JPG",
          "description": "The Plymouth Fury is a model of automobile which was produced by Plymouth from 1955 to 1989. It was introduced for the 1956 model year as a sub-series of the Plymouth Belvedere, becoming a separate series one level above the contemporary Belvedere for 1959. The Fury was a full-size car from 1959 to 1961, then a mid-size car from 1962 to 1964, again a full-size car from 1965 to 1974, and again a mid-size car from 1975 to 1978. From 1975 to 1977 the Fury was sold alongside the full-size Plymouth Gran Fury. In 1978, the B-body Fury was the largest Plymouth, and by 1979, there was no large Plymouth.  This was rectified in 1980 with the R-body Gran Fury, followed by the M-body Fury in 1982.  Production of the last V8, RWD Plymouth Fury ended at Kenosha, WI, on December 23, 1988.  Unlike its sibling brand, Dodge, Plymouth would not live to see the resurgence of the large, V8/RWD sedan.  The last Plymouth rolled off the Belvedere assembly line in 2001.",
          "production": "1959–78"
        },
        {
          "title": "Chrysler TC by Maserati",
          "href": "https://en.wikipedia.org/wiki/Chrysler_TC_by_Maserati",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/1990_Chrysler_TC_By_Maserati.jpg/280px-1990_Chrysler_TC_By_Maserati.jpg",
          "description": "Chrysler's TC by Maserati was a \"Q\" body based on a modified second generation Chrysler K platform jointly developed by Chrysler and Maserati as a grand tourer  and introduced at the 1986 Los Angeles Auto Show. After two years of development delays, the TC became available in late-1988 and a total of 7,300 units (the minimum required under the contract) were manufactured in Milan, Italy through 1990.  All cars sold as 1991 models were manufactured in 1990.",
          "production": "1989–91"
        },
        {
          "title": "Simca 1000",
          "href": "https://en.wikipedia.org/wiki/Simca_1000",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/1973_Simca_1000_GL.JPG/280px-1973_Simca_1000_GL.JPG",
          "description": "The Simca 1000 is a small, rear-engined, four-door saloon which was manufactured by the French automaker Simca from 1961 to 1978.",
          "production": "1961–78"
        },
        {
          "title": "Mercury Mountaineer",
          "href": "https://en.wikipedia.org/wiki/Mercury_Mountaineer",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2002-05_Mercury_Mountaineer.jpg/280px-2002-05_Mercury_Mountaineer.jpg",
          "description": "The Mercury Mountaineer is a mid-size luxury sport utility vehicle (SUV) that was sold by Mercury from 1996 until 2010.  Sharing many of its features with the Ford Explorer, the vehicles were virtually identical in terms of hardware.[1] Externally, they were styled somewhat differently, and the Mountaineer was positioned with a more upscale interior, with the Mountaineer's MSRP coming in at $1,000–$6,000 more than the Explorer.[2]  It was last redesigned for the 2006 model year with a new frame, looking very similar to its previous model.",
          "production": "1997-2010"
        },
        {
          "title": "Alfa Romeo 33",
          "href": "https://en.wikipedia.org/wiki/Alfa_Romeo_33",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Alfaromeo_33_1.3cc_anno_1990.JPG/280px-Alfaromeo_33_1.3cc_anno_1990.JPG",
          "description": "The Alfa Romeo 33 (Type 905 and 907) is a small family car produced by the Italian automaker Alfa Romeo between 1983 and 1995. From a mechanical standpoint it was essentially an evolution of its predecessor, the Alfasud, whose floorpan, chassis and drivetrain were carried over—albeit with modifications to the suspension and braking system. The Nissan-based Alfa Romeo Arna was launched shortly after, offering a similarly sized but lower priced car.",
          "production": "1983–1995"
        },
        {
          "title": "Mitsubishi GTO",
          "href": "https://en.wikipedia.org/wiki/Mitsubishi_GTO",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/3000gtlev.jpg/280px-3000gtlev.jpg",
          "description": "The Mitsubishi GTO is a front-engine, all-wheel drive 2+2 hatchback sports coupé and Grand Touring car manufactured and marketed by Mitsubishi for model years (MY) 1990-1999, across a single generation with one   facelift.  Manufactured in Nagoya, Japan, the four passenger coupés were marketed in the Japanese domestic market (JDM) as the GTO and globally as Mitsubishi 3000GT. The Dodge Stealth — a badge engineered, mechanically identical captive import — was sold for model years 1991-1996 along with the 1991-1999 Mitsubishi 3000GT in North America. As a collaborative effort between Chrysler and its Japanese partner, Mitsubishi Motors, Chrysler was responsible for the Stealth's exterior styling.[1][2]",
          "production": "1991–96"
        },
        {
          "title": "Honda S2000",
          "href": "https://en.wikipedia.org/wiki/Honda_S2000",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/HondaS2000-004.jpg/280px-HondaS2000-004.jpg",
          "description": "The Honda S2000 is an open top sports car that was manufactured by Japanese automobile manufacturer Honda, from 1999 to 2009. First shown as a concept car at the Tokyo Motor Show in 1995, the production version was launched on April 15, 1999 to celebrate the company's 50th anniversary. The S2000 is named for its engine displacement of two liters, carrying on in the tradition of the S500, S600, and S800 roadsters of the 1960s.",
          "production": "1999–2009"
        },
        {
          "title": "Mercedes-Benz C-Class",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_C-Class",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2014_Mercedes-Benz_C200_SE_Executive_Automatic_2.0_Front.jpg/220px-2014_Mercedes-Benz_C200_SE_Executive_Automatic_2.0_Front.jpg",
          "description": "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque's line-up until the W168 A-Class arrived in 1997. The C-Class built at Mercedes-Benz factories in Sindelfingen and Bremen, Germany as well as numerous satellite factories in other countries. The first C-Class (W202) sedan produced on 1 June 1993 and the opening of the second generation (W203) rolled off the assembly line on 18 July 2000. The C-Class has been available with a 4Matic (i.e., four-wheel drive) option since 2002. The third generation (W204) was launched in 2007 while the latest generation C-Class (W205) came out in 2014.",
          "production": "1993–present"
        },
        {
          "title": "Ford Thunderbird",
          "href": "https://en.wikipedia.org/wiki/Ford_Thunderbird",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/T-bird.jpg/280px-T-bird.jpg",
          "description": "Ford Thunderbird (colloquially called the T-Bird) is a nameplate that was used by Ford from model years 1955 to 1997 and 2002 to 2005 over eleven model generations.  Introduced as a two-seat convertible, the Thunderbird was produced in a number of body configurations through its production life, including four-seat hardtop coupe, four-seat convertible, five-seat convertible and hardtop, four-door pillared hardtop sedan, six-passenger hardtop coupe, and five passenger pillared coupe, with the final generation produced as a two-seat convertible.  ",
          "production": "1955–05"
        },
        {
          "title": "McLaren 12C",
          "href": "https://en.wikipedia.org/wiki/McLaren_12C",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/McLaren_MP4-12C_%E2%80%93_Frontansicht_%284%29%2C_30._August_2012%2C_D%C3%BCsseldorf.jpg/280px-McLaren_MP4-12C_%E2%80%93_Frontansicht_%284%29%2C_30._August_2012%2C_D%C3%BCsseldorf.jpg",
          "description": "The McLaren MP4-12C, later known simply as the McLaren 12C,[3] is a sports car designed and manufactured by McLaren Automotive.  It is the first ever production car wholly designed and built by McLaren,[4] and their first production road car produced since the McLaren F1, which ended production in 1998.  The car's final design was unveiled in September 2009 and was launched in mid-2011.",
          "production": "2011–2014"
        },
        {
          "title": "BMW New Class coupé",
          "href": "https://en.wikipedia.org/wiki/BMW_New_Class_coup%C3%A9",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/BMW_1600_%285457428606%29.jpg/280px-BMW_1600_%285457428606%29.jpg",
          "description": "The BMW New Class (German: Neue Klasse) was a line of sedans and coupes produced by German automaker BMW between 1962 and 1977. These models ensured BMW's solvency after the company's financial crisis of the 1950s and established the identity of BMW automobiles as sports sedans.",
          "production": "1965–69"
        },
        {
          "title": "Suzuki Wagon R",
          "href": "https://en.wikipedia.org/wiki/Suzuki_Wagon_R",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Suzuki_Wagonr_2008.jpg/280px-Suzuki_Wagonr_2008.jpg",
          "description": "The Suzuki Wagon R (Japanese: スズキ・ワゴンR, Suzuki Wagon'āru) is a kei car manufactured and marketed by Suzuki since 1993. The R in the name stands for Revolution and Relaxation (not Racing).[1] The Wagon R uses a \"tall wagon\" configuration  to maximize cabin space within kei car dimensional restrictions.",
          "production": "1993–present"
        },
        {
          "title": "Hyundai Sonata",
          "href": "https://en.wikipedia.org/wiki/Hyundai_Sonata",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hyundai_Sonata_DN8_002.jpg/280px-Hyundai_Sonata_DN8_002.jpg",
          "description": "The Hyundai Sonata (Korean: 현대 쏘나타) is a mid-size car produced by the South Korean manufacturer Hyundai since 1985. The first generation Sonata, which was introduced in 1985, was a facelifted Hyundai Stellar with an engine upgrade, and was withdrawn from the market in two years due to poor customer reactions.[2] While the original was only sold in South Korea, with limited exports to Canada and New Zealand,[3] the second generation of 1988 was widely exported.[4][5]",
          "production": "1985–present"
        },
        {
          "title": "Lamborghini Diablo",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Diablo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Paris_-_RM_Sotheby%E2%80%99s_2018_-_Lamborghini_Diablo_SE30_-_1996_-_007.jpg/280px-Paris_-_RM_Sotheby%E2%80%99s_2018_-_Lamborghini_Diablo_SE30_-_1996_-_007.jpg",
          "description": "The Lamborghini Diablo is a high-performance mid-engine sports car that was built by Italian automotive manufacturer Lamborghini between 1990 and 2001. It is the first production Lamborghini capable of attaining a top speed in excess of 320 kilometres per hour (200 mph). After the end of its production run in 2001, the Diablo was replaced by the Lamborghini Murciélago. The name Diablo' means \"devil\" in Spanish.",
          "production": "1990–2001"
        },
        {
          "title": "Buick LeSabre",
          "href": "https://en.wikipedia.org/wiki/Buick_LeSabre",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/00-05_Buick_LeSabre_1.jpg/280px-00-05_Buick_LeSabre_1.jpg",
          "description": "The Buick LeSabre was a full-size car made by General Motors from 1959 to 2005.  Prior to 1959, this position had been retained by the full-size Buick Special model (1936–58). The name originated with the 1951 GM Le Sabre show car designed by Harley Earl; that car is often mistakenly attributed to the Buick division but in fact it was presented as a GM vehicle without reference to a specific GM division.[citation needed]  Buick closely related their 1956-1957 models to the GM LeSabre by replicating the top section of the rear wing into their design.[citation needed]. LeSabre is French for \"the sabre\".",
          "production": "1959–2005"
        },
        {
          "title": "Morris Minor",
          "href": "https://en.wikipedia.org/wiki/Morris_Minor",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Morris_Minor_1000_in_New_Square_first_registered_February_1963_948cc_and_an_icon.jpg/280px-Morris_Minor_1000_in_New_Square_first_registered_February_1963_948cc_and_an_icon.jpg",
          "description": "The Morris Minor is a British car that made its debut at the Earls Court Motor Show, London, on 20 September 1948.[4] Designed under the leadership of Alec Issigonis, more than 1.6 million were manufactured between 1948 and 1972 in three series: the MM (1948 to 1953), the Series II (1952 to 1956), and the 1000 series (1956 to 1971).",
          "production": "1948–71"
        },
        {
          "title": "Lamborghini Murciélago",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Murci%C3%A9lago",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%283%29.jpg/280px-Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%283%29.jpg",
          "description": "The Lamborghini Murciélago is a sports car produced by Italian automotive manufacturer Lamborghini between 2001[7] and 2010. Successor to the Diablo and flagship of the automaker's lineup, the Murciélago was introduced as a coupé in 2001. The car was first available in North America for the 2002 model year. The manufacturer's first new design in eleven years, the car was also the brand's first new model under the ownership of German parent company Audi, which is owned by Volkswagen. The Murciélago is designed by Peruvian-born Belgian Luc Donckerwolke, Lamborghini's head of design from 1998 to 2005.[8]",
          "production": "2001–10"
        },
        {
          "title": "Porsche 924",
          "href": "https://en.wikipedia.org/wiki/Porsche_924",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/1981_Porsche_924_2.0_Front.jpg/280px-1981_Porsche_924_2.0_Front.jpg",
          "description": "The Porsche 924 is a sports car produced by Porsche AG of Germany from 1976 to 1988. A two-door, 2+2 coupé, the 924 was intended to replace the Porsche 914 as the company's entry-level model.",
          "production": "1976–88"
        },
        {
          "title": "BMW Z1",
          "href": "https://en.wikipedia.org/wiki/BMW_Z1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/BMWZ1.jpg/280px-BMWZ1.jpg",
          "description": "The BMW Z1 is the first model in BMW's line of Z series roadsters (two-seater convertibles), and was produced in limited numbers from 1989 to 1991.",
          "production": "1989–91"
        },
        {
          "title": "Volvo S40",
          "href": "https://en.wikipedia.org/wiki/Volvo_S40",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2008_Volvo_S40_S_Diesel_Automatic_2.0_Front.jpg/280px-2008_Volvo_S40_S_Diesel_Automatic_2.0_Front.jpg",
          "description": "The Volvo S40 is a series of automobiles marketed and produced by the Swedish manufacturer Volvo Cars from 1995 to 2012 across two generations, as a Compact executive car in its first generation (1995 to 2004) and from 2004 to 2012 as a subcompact executive car in its second generation.",
          "production": "1995–2004"
        },
        {
          "title": "MG F / MG TF",
          "href": "https://en.wikipedia.org/wiki/MG_F_/_MG_TF",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MG_F_%282000%29_-_14428744349.jpg/280px-MG_F_%282000%29_-_14428744349.jpg",
          "description": "The MG F and MG TF are mid-engined, rear wheel drive roadster cars that were sold under the MG marque by three manufacturers between 1995 and 2011. ",
          "production": "1995–2011"
        },
        {
          "title": "Mercury Milan",
          "href": "https://en.wikipedia.org/wiki/Mercury_Milan",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mercury-Milan-Premier.JPG/280px-Mercury-Milan-Premier.JPG",
          "description": "The Mercury Milan is a Mid-size car that was marketed by the Mercury division of Ford Motor Company.  Named after Milan, the Milan was sold across the 2006 to 2011 model years across a single generation.  The smaller of two model lines developed to replace the Mercury Sable, indirectly succeeding the Mercury Mystique as the smallest Mercury sedan.    ",
          "production": "2006-2011"
        },
        {
          "title": "Mercury Montego",
          "href": "https://en.wikipedia.org/wiki/Mercury_Montego",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/05-07_Mercury_Montego.jpg/250px-05-07_Mercury_Montego.jpg",
          "description": "The Mercury Montego is a nameplate that was applied to three separate generations of vehicles marketed by the Mercury division of Ford Motor Company.  Taking its name from Montego Bay, Jamaica, the nameplate made its first appearance for 1967 in the Canadian market as part of the Mercury-derived Meteor model line.  For 1968, the Mercury Montego made its debut across North America, becoming the Mercury counterpart of the Ford Torino intermediate-size model line for two generations.",
          "production": "1968-2007"
        },
        {
          "title": "Rover 45",
          "href": "https://en.wikipedia.org/wiki/Rover_45",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/1993_Rover_414SLi_16V_%289720956404%29.jpg/280px-1993_Rover_414SLi_16V_%289720956404%29.jpg",
          "description": "The Rover 400 Series, and later the Rover 45, are a series of small family cars that were produced by the British manufacturer Rover from 1990 to 2005. The car was co-developed as part of Rover's collaboration with Honda. The first generation 400 was based on the Honda Concerto, and the Mark II 400 (later the Rover 45) was based on the Honda Domani/Civic. ",
          "production": "1999–2005"
        },
        {
          "title": "Honda Civic",
          "href": "https://en.wikipedia.org/wiki/Honda_Civic",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2017_Honda_Civic_VTi-S_sedan_%282018-10-29%29_01.jpg/280px-2017_Honda_Civic_VTi-S_sedan_%282018-10-29%29_01.jpg",
          "description": "The Honda Civic (Japanese: ホンダ・シビック, Honda Shibikku) is a line of cars manufactured by Honda. Originally a subcompact, the Civic has gone through several generational changes, becoming both larger and more upscale, moving into the compact car segment. EPA guidelines for vehicle size class stipulate a car having combined passenger and cargo room of 110 to 119.9 cubic feet (3,110 to 3,400 L) is considered a mid-size car, and as such the tenth generation Civic sedan is technically a small-end mid-size car, although it still competes in the compact class.[1] The Civic coupé is still considered a compact car. The Civic currently falls between the Honda Fit and Accord.",
          "production": "1972–present"
        },
        {
          "title": "Ford Falcon (Australia)",
          "href": "https://en.wikipedia.org/wiki/Ford_Falcon_(Australia)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/2014_Ford_Falcon_%28FG_X%29_XR6_Turbo_sedan_%2823382738252%29.jpg/280px-2014_Ford_Falcon_%28FG_X%29_XR6_Turbo_sedan_%2823382738252%29.jpg",
          "description": "The Ford Falcon is a full-sized car that was manufactured by Ford Australia from 1960 to 2016. From the XA series of 1972 onward, each Falcon and range of derivates have been designed, developed, and built in Australia, following the phasing out of the American-influenced Falcon of 1960 to 1971, which had been re-engineered locally as the XK to XY series for the harsher Australian conditions. The luxury-oriented Ford Fairmont model joined the range from 1965. Luxury long-wheelbase derivative versions called the Ford Fairlane and LTD arrived in 1967 and 1973, respectively (with production ending in 2007).",
          "production": "1960–2016"
        },
        {
          "title": "Pontiac Firebird",
          "href": "https://en.wikipedia.org/wiki/Pontiac_Firebird",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Trans_Am_Family.jpg/280px-Trans_Am_Family.jpg",
          "description": "The Pontiac Firebird is an American automobile built by Pontiac from the 1967 to the 2002 model years. Designed as a muscle car to compete with the Mercury Cougar and Dodge Challenger, it was introduced February 23, 1967, the same model year as GM's Chevrolet division platform-sharing Camaro.[1] This also coincided with the release of the 1967 Mercury Cougar, Ford's upscale, platform-sharing version of the Mustang.[2][3]",
          "production": "1967–2002"
        },
        {
          "title": "Tesla Model X",
          "href": "https://en.wikipedia.org/wiki/Tesla_Model_X",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/280px-2017_Tesla_Model_X_100D_Front.jpg",
          "description": "The Tesla Model X is a mid-size all-electric luxury SUV made by Tesla, Inc.. The vehicle is unique in the concept that it uses falcon wing doors instead of traditional automotive doors. The prototype was unveiled at Tesla's design studios in Hawthorne, California on February 9, 2012.[11][12] The Model X has an official EPA rated 250–325 mi (402–523 km) range[7][13] and the combined fuel economy equivalent and energy consumption for the AWD P90D was rated at 89 mpg‑e (39 kW⋅h/100 mi).[14]",
          "production": "2015–present"
        },
        {
          "title": "Toyota Mirai",
          "href": "https://en.wikipedia.org/wiki/Toyota_Mirai",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Toyota_Mirai_%E2%80%93_Frontansicht%2C_11._November_2018%2C_D%C3%BCsseldorf.jpg/280px-Toyota_Mirai_%E2%80%93_Frontansicht%2C_11._November_2018%2C_D%C3%BCsseldorf.jpg",
          "description": "The Toyota Mirai (from Mirai (未来), Japanese for \"future\") is a mid-size hydrogen fuel cell car manufactured by Toyota, one of the first such sedan-like vehicles to be sold commercially.[8][9] The Mirai was unveiled at the November 2014 Los Angeles Auto Show.[10]  As of December 2017[update], global sales totalled 5,300 Mirais. The top-selling markets were the U.S. with 2,900 units, Japan with 2,100 and Europe with 200.[11]",
          "production": "2015–present"
        },
        {
          "title": "Honda S800",
          "href": "https://en.wikipedia.org/wiki/Honda_S800",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/1966_Honda_S800.jpg/280px-1966_Honda_S800.jpg",
          "description": "The S800 is a sports car from Honda.  Introduced at the 1965 Tokyo Motor Show, the S800 would replace the successful Honda S600 as the company's image car and would compete with the Austin-Healey Sprite, MG Midget, Triumph Spitfire and Fiat 850 Spider.",
          "production": "1966–70"
        },
        {
          "title": "Mercury Marauder",
          "href": "https://en.wikipedia.org/wiki/Mercury_Marauder",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercury-Marauder-2.jpg/280px-Mercury-Marauder-2.jpg",
          "description": "The Mercury Marauder is an automobile nameplate that was used by three distinct full-size cars produced by the Mercury division of Ford Motor Company. Deriving its name from the most powerful engines available to the Mercury line, the Marauder was marketed as the highest-performance version of the full-size product range.",
          "production": "2003-2004"
        },
        {
          "title": "Porsche 968",
          "href": "https://en.wikipedia.org/wiki/Porsche_968",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Porsche_968_01.jpg/280px-Porsche_968_01.jpg",
          "description": "The Porsche 968 is a sports car manufactured by German automobile manufacturer Porsche AG from 1992 to 1995. It was the final evolution of a series of water-cooled front-engine rear wheel drive models begun almost 20 years earlier with the 924, taking over the entry-level position in the company lineup from the 944 with which it shared about 20% of its parts. The 968 was Porsche's last new front-engined vehicle before the introduction of the Cayenne SUV in 2003.",
          "production": "1992–95"
        },
        {
          "title": "Cadillac ELR",
          "href": "https://en.wikipedia.org/wiki/Cadillac_ELR",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2014_Cadillac_ELR_trimmed.jpg/280px-2014_Cadillac_ELR_trimmed.jpg",
          "description": "The Cadillac ELR is a two-door, four-passenger luxury plug-in hybrid compact coupé manufactured and marketed by Cadillac for model years (MY) 2014 and 2016 – with a hiatus for MY 2015.[6] Using a retuned version of the Chevrolet Volt's Voltec EREV drivetrain,[3] the ELR's lithium-ion battery pack delivers an all-electric range of 37–39 miles (60–63 km) and a top speed of 106 mph (171 km/h).[5][7]",
          "production": "2013–2016"
        },
        {
          "title": "Toyota Land Cruiser",
          "href": "https://en.wikipedia.org/wiki/Toyota_Land_Cruiser",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/2016-2018_Toyota_Land_Cruiser_%28VDJ200R%29_VX_wagon_%282018-09-03%29_01.jpg/280px-2016-2018_Toyota_Land_Cruiser_%28VDJ200R%29_VX_wagon_%282018-09-03%29_01.jpg",
          "description": "The Toyota Land Cruiser  (Japanese: トヨタ・ランドクルーザー, Toyota Rando-Kurūzā) is a series of four-wheel drive vehicles produced by the Japanese automobile manufacturer Toyota. It is Toyota's longest running series of models.[1] As of 2019[update], the sales of the Land Cruiser totalled more than 10 million units worldwide.[2]",
          "production": "1951–present"
        },
        {
          "title": "Chevrolet Vega",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Vega#Pontiac_Astre",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1971_Chevrolet_Vega_Coupe.jpg/250px-1971_Chevrolet_Vega_Coupe.jpg",
          "description": "The Chevrolet Vega is a subcompact automobile that was manufactured and marketed by GM's Chevrolet subdivision from 1970 to 1977. Available in two-door hatchback, notchback, wagon, and sedan delivery body styles, all models were powered by an inline four-cylinder engine with a lightweight, aluminum alloy cylinder block. The Vega first went on sale in Chevrolet dealerships on September 10, 1970 [1].  Variants included the Cosworth Vega, a short-lived limited-production performance model, introduced in March 1975.[citation needed]",
          "production": "1975–77"
        },
        {
          "title": "Zastava Koral",
          "href": "https://en.wikipedia.org/wiki/Zastava_Koral",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/1987_Yugo_GV_Sport_%287407651462%29.jpg/280px-1987_Yugo_GV_Sport_%287407651462%29.jpg",
          "description": "The Yugo (pronounced [ˈjûɡo]), also marketed as the Zastava Koral (pronounced [ˈzâːstaʋa ˈkǒraːl], Serbian Cyrillic: Застава Корал) and Yugo Koral, is a supermini hatchback formerly manufactured by Zastava Automobiles, at the time a Yugoslav corporation.",
          "production": "1977-2008"
        },
        {
          "title": "Audi 80",
          "href": "https://en.wikipedia.org/wiki/Audi_80",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Audi80-1992.JPG/280px-Audi80-1992.JPG",
          "description": "The Audi 80 was a compact executive car produced by the Audi subdivision of the Volkswagen Group across four generations from 1966 to 1996. It shared its platform with the Volkswagen Passat from 1973 to 1986 and was available as a sedan, and station wagon) — the latter marketed by Audi as the Avant. The coupé and convertible models were not badged as members of the range but shared the same platform.",
          "production": "1972–1996"
        },
        {
          "title": "Jaguar X-Type",
          "href": "https://en.wikipedia.org/wiki/Jaguar_X-Type",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2007_Jaguar_X-Type_%281%29.jpg/280px-2007_Jaguar_X-Type_%281%29.jpg",
          "description": "The Jaguar X-Type is a front-engine, all-wheel/front-wheel drive compact executive car manufactured and marketed by Jaguar Cars from 2001 to 2009 under the internal designation X400, for a single generation, in saloon and estate body styles.  In addition to offering Jaguar's first estate in series production, the X-type would ultimately introduce its first diesel engine, four-cylinder engine and front-wheel drive configuration.",
          "production": "2001–2009"
        },
        {
          "title": "Honda S600",
          "href": "https://en.wikipedia.org/wiki/Honda_S600",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/HondaS600-001.jpg/280px-HondaS600-001.jpg",
          "description": "The Honda S600 is an automobile manufactured by Honda. It was launched in March 1964. Available as a roadster – bearing strong resemblance to the Honda S500 – and as a fastback coupé – introduced in March 1965 – the S600 was the first Honda available in two trim levels.[1]  During its production run up to 1966, the model styling would remain pretty much the same, with the most notable changes coming to the front grille, bumper, and headlights.",
          "production": "1964–66"
        },
        {
          "title": "Ford F-Series",
          "href": "https://en.wikipedia.org/wiki/Ford_F-Series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ford-f150-2015-fx4-por-jesus.jpg/280px-Ford-f150-2015-fx4-por-jesus.jpg",
          "description": "The Ford F-Series is a series of light-duty trucks and medium-duty trucks (Class 2-7) that have been marketed and manufactured by Ford Motor Company. In production since 1948, the F-Series includes full-size pickup trucks, chassis cab trucks, and commercial vehicles.  As of 2019 production, the Ford F-Series includes the F-150 pickup, Class 3-5 Super Duty trucks (F-250 through F-550), and the Class 6-8 Super Duty trucks (F-600, F-650, F-750).  The most popular version of the F-Series is the F-150, now in its thirteenth generation.",
          "production": "1948–present"
        },
        {
          "title": "Mercedes-Benz SL-Class",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_SL-Class",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mercedes-Benz_SL_350_%28R_231%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet_%281%29%2C_22._Mai_2013%2C_D%C3%BCsseldorf.jpg/280px-Mercedes-Benz_SL_350_%28R_231%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet_%281%29%2C_22._Mai_2013%2C_D%C3%BCsseldorf.jpg",
          "description": "The Mercedes-Benz SL-Class is a grand touring car manufactured by Mercedes since 1954. The designation SL derives from the German Super-Leicht, (English: Super Light). The original idea was suggested by American importer Max Hoffman, who perceived a market for a toned-down Gran Prix car tailored to affluent performance enthusiasts in the booming post-war American market, which remains the primary market for the vehicles.",
          "production": "1954–present"
        },
        {
          "title": "Rover 800",
          "href": "https://en.wikipedia.org/wiki/Rover_800",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/1997.rover.800.arp.jpg/280px-1997.rover.800.arp.jpg",
          "description": "The Rover 800 series is an executive car range manufactured by the Austin Rover Group subsidiary of British Leyland, and its successor the Rover Group from 1986 to 1999.[3]  It was also marketed as the Sterling in the United States. Co-developed with Honda, it was a close relative to the Honda Legend and the successor to the Rover SD1.[3]",
          "production": "1986–1999"
        },
        {
          "title": "Mercury Monterey",
          "href": "https://en.wikipedia.org/wiki/Mercury_Monterey",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/1971MONTEREYFRONT.JPG/280px-1971MONTEREYFRONT.JPG",
          "description": "The Mercury Monterey is a series of full-size cars that were manufactured and marketed by the Mercury division of Ford from 1952 to 1974.  Deriving its name from Monterey Bay, the Mercury Monterey served as the replacement for the Mercury Eight, the debut model line of the Mercury division.  During its production, the Monterey would be offered in multiple body styles, ranging from coupes, sedans, hardtops, and station wagons.  ",
          "production": "1952–74"
        },
        {
          "title": "Mercury Villager",
          "href": "https://en.wikipedia.org/wiki/Mercury_Villager",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/96-98_Mercury_Villager_--_12-26-2009.jpg/280px-96-98_Mercury_Villager_--_12-26-2009.jpg",
          "description": "The Mercury Villager is a minivan that was marketed by the Mercury division of Ford.  The first minivan ever sold by Mercury, two generations were sold from the 1993 to 2002 model years.  Competing against the Chrysler minivans and the General Motors APV minivans, the front-wheel drive Villager was introduced between the Ford Aerostar and the Ford Windstar.   ",
          "production": "1993-2002"
        },
        {
          "title": "Porsche 962",
          "href": "https://en.wikipedia.org/wiki/Porsche_962",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2006FOS_1988Porsche962CLeMans.jpg/250px-2006FOS_1988Porsche962CLeMans.jpg",
          "description": "The Porsche 962 (also known as the 962C in its Group C form) is a sports-prototype racing car built by Porsche as a replacement for the 956 and designed mainly to comply with IMSA's GTP regulations, although it would later compete in the European Group C formula as the 956 had.  The 962 was introduced at the end of 1984, from which it quickly became successful through private owners while having a remarkably long-lived career, with some examples still proving competitive into the mid-1990s. The vehicle was later replaced by the Porsche WSC-95.",
          "production": "1984–92"
        },
        {
          "title": "Opel Astra",
          "href": "https://en.wikipedia.org/wiki/Opel_Astra",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Opel_Astra_1.6_CDTI_ecoFLEX_Edition_%28K%29_%E2%80%93_Frontansicht%2C_13._Oktober_2015%2C_D%C3%BCsseldorf.jpg/280px-Opel_Astra_1.6_CDTI_ecoFLEX_Edition_%28K%29_%E2%80%93_Frontansicht%2C_13._Oktober_2015%2C_D%C3%BCsseldorf.jpg",
          "description": "The Opel Astra is a compact car/small family car (C-segment in Europe) engineered and manufactured by the German automaker Opel since 1991.",
          "production": "1991–present"
        },
        {
          "title": "Toyota RAV4",
          "href": "https://en.wikipedia.org/wiki/Toyota_RAV4",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Toyota_RAV4_Hybrid%2C_Paris_Motor_Show_2018%2C_IMG_0386.jpg/280px-Toyota_RAV4_Hybrid%2C_Paris_Motor_Show_2018%2C_IMG_0386.jpg",
          "description": "The Toyota RAV4 (トヨタ RAV4 (ラヴフォー), Toyota Ravufō) is a compact crossover SUV (sport utility vehicle) produced by the Japanese automobile manufacturer Toyota. This was the first compact crossover SUV;[1] it made its debut in Japan and Europe in 1994,[2] and in North America in 1995, being launched in January 1996.[3] The vehicle was designed for consumers wanting a vehicle that had most of the benefits of SUVs, such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with the maneuverability and fuel economy of a compact car. Although not all RAV4s are four-wheel drive, RAV4 stands for \"Recreational Activity Vehicle: 4-wheel drive\", because the aforementioned equipment is an option in select countries.[4]",
          "production": "1994–present"
        },
        {
          "title": "Opel Vectra",
          "href": "https://en.wikipedia.org/wiki/Opel_Vectra",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_Vectra_C_2.2_Direkt_front.JPG/280px-Opel_Vectra_C_2.2_Direkt_front.JPG",
          "description": "The Opel Vectra is a large family car that was engineered and produced by the German automaker Opel. In the United Kingdom, the car was sold under the Vauxhall marque as the Vauxhall Cavalier and later as the Vauxhall Vectra, from 1995 onwards. It has also been sold by Holden in Australasia as the Holden Vectra, and by Chevrolet in Latin America as the Chevrolet Vectra.",
          "production": "1988–2008"
        },
        {
          "title": "Lancia Ypsilon",
          "href": "https://en.wikipedia.org/wiki/Lancia_Ypsilon",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Lancia_Ypsilon_0.9_TwinAir_Turbo_8v_Platinum_%28II%29_%E2%80%93_Frontansicht%2C_31._Dezember_2012%2C_D%C3%BCsseldorf.jpg/280px-Lancia_Ypsilon_0.9_TwinAir_Turbo_8v_Platinum_%28II%29_%E2%80%93_Frontansicht%2C_31._Dezember_2012%2C_D%C3%BCsseldorf.jpg",
          "description": "The Lancia Ypsilon is a supermini manufactured by Italian automaker Lancia now in its third generation and as of 2014 is the marque's only vehicle offered for sale. The Ypsilon was released in 1995. It is the replacement of the Y10 and is larger and more expensive. Between 1995 and 2005 Lancia produced more than 870,000 Ypsilons in the Melfi plant in the Potenza region.[1]",
          "production": "1996–present"
        },
        {
          "title": "Toyota Corolla",
          "href": "https://en.wikipedia.org/wiki/Toyota_Corolla",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Toyota_Corolla_Hybrid_Sedan%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS1338%29.jpg/280px-Toyota_Corolla_Hybrid_Sedan%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS1338%29.jpg",
          "description": "The Toyota Corolla (Japanese: トヨタ・カローラ, Toyota Karōra) is a line of subcompact and compact cars manufactured by Toyota.  Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then. In 1997, the Corolla became the best selling nameplate in the world, surpassing the Volkswagen Beetle.[1] Toyota reached the milestone of 44 million Corollas sold over twelve generations in 2016.[2] The series has undergone several major redesigns.",
          "production": "1966–present"
        },
        {
          "title": "Volvo 850",
          "href": "https://en.wikipedia.org/wiki/Volvo_850",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Volvo-850.jpg/280px-Volvo-850.jpg",
          "description": "The Volvo 850 is a compact executive car that was produced by the Swedish manufacturer Volvo Cars from 1991[9] to 1996.[9] Designed by Jan Wilsgaard, the car was introduced in a saloon body style; an estate style was introduced in 1993.",
          "production": "1991–1996"
        },
        {
          "title": "Range Rover Evoque",
          "href": "https://en.wikipedia.org/wiki/Range_Rover_Evoque",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2019_Land_Rover_Range_Rover_Evoque_R-Dynamic_2.0.jpg/280px-2019_Land_Rover_Range_Rover_Evoque_R-Dynamic_2.0.jpg",
          "description": "The Land Rover Range Rover Evoque (commonly known as the Range Rover Evoque) is a series of subcompact luxury crossover SUVs produced by the British manufacturer Jaguar Land Rover, a subsidiary of Tata Motors, under their Land Rover marque. The original Evoque was a development of the Land Rover LRX concept vehicle, which was unveiled at the North American International Auto Show in January 2008.[1] The first generation Evoque was produced from July 2011 until 2018 in three- and five-door versions, with both two-wheel and four-wheel drive. The second generation car started production in 2018.",
          "production": "2011–present"
        },
        {
          "title": "Morris Marina",
          "href": "https://en.wikipedia.org/wiki/Morris_Marina",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/1974_Morris_Marina_DL_1.8_Front.jpg/280px-1974_Morris_Marina_DL_1.8_Front.jpg",
          "description": "The Morris Marina is a car that was manufactured by Austin-Morris division of British Leyland from 1971 until 1980.  It was sold in some markets as the Austin Marina,[6] the Leyland Marina and the Morris 1700.[1]",
          "production": "1971–80"
        },
        {
          "title": "Porsche Carrera GT",
          "href": "https://en.wikipedia.org/wiki/Porsche_Carrera_GT",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/280px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg",
          "description": "The Porsche Carrera GT (Project Code 980) is a mid-engine[4] sports car that was manufactured by German automobile manufacturer Porsche between 2004–2007.[5] Sports Car International named the Carrera GT number one on its list of Top Sports Cars of the 2000s, and number eight on Top Sports Cars of All Time list. For its advanced technology and development of its chassis, Popular Science magazine awarded it the \"Best of What's New\" award in 2003.[6]",
          "production": "2004–06"
        },
        {
          "title": "Toyota Hilux",
          "href": "https://en.wikipedia.org/wiki/Toyota_Hilux",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2016_Toyota_HiLux_Invincible_D-4D_4WD_2.4_Front.jpg/280px-2016_Toyota_HiLux_Invincible_D-4D_4WD_2.4_Front.jpg",
          "description": "The Toyota Hilux (Japanese: トヨタ・ハイラックス, Toyota Hairakkusu) (also stylized as HiLux and historically as Hi-Lux) is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota. The majority of these vehicles were sold as pickup truck or cab chassis variants, although they could be configured in a variety of body styles. Most countries used the Hilux name for the entire life of the series, but in North America, the Hilux name was retired in 1976 in favor of Truck, Pickup Truck, or Compact Truck. In North America, the popular option package, the SR5 (Sport Rally 5-Speed), was colloquially used as a model name for the truck, even though the option package was also used on other Toyota models, like the 1972 to 1979 Corolla. In 1984, the Toyota Trekker, the camper version of the Hilux, was renamed the 4Runner in Australia and North America, and the Hilux Surf in Japan. In 1995, Toyota introduced a new pickup model, the Tacoma, in North America, thus discontinuing the Hilux/Pickup. The 4Runner is now a full SUV, and the more recent models of the Hilux are separate in appearance from the Tacoma.",
          "production": "1968–present"
        },
        {
          "title": "Mazda MX-5",
          "href": "https://en.wikipedia.org/wiki/Mazda_MX-5",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mazda_Roadster_ND.jpg/280px-Mazda_Roadster_ND.jpg",
          "description": "The Mazda MX-5 is a lightweight two-passenger roadster manufactured and marketed by Mazda with a front mid-engine, rear-wheel-drive layout. The convertible is marketed as the Mazda Roadster (マツダ・ロードスター, Matsuda Rōdosutā) or Eunos Roadster (ユーノス・ロードスター, Yūnosu Rōdosutā) in Japan, and as the Mazda MX-5 Miata /miˈɑːtə/ in North America, where it is widely known as the Miata.",
          "production": "1989–present"
        },
        {
          "title": "Maserati Biturbo",
          "href": "https://en.wikipedia.org/wiki/Maserati_Biturbo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/1985_Maserati_Biturbo_E%2C_front_left_%28US%29.jpg/280px-1985_Maserati_Biturbo_E%2C_front_left_%28US%29.jpg",
          "description": "The Maserati Biturbo was a family of executive grand tourers produced by Italian automobile manufacturer Maserati between 1981 and 1994. The original Biturbo was a two-door, four-seater notchback coupé (of somewhat smaller dimensions than the BMW 3 Series of the time) featuring, as the name implies, a two-litre V6 engine with two turbochargers and a luxurious interior.",
          "production": "1981–1994"
        },
        {
          "title": "Renault 4CV",
          "href": "https://en.wikipedia.org/wiki/Renault_4CV",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/4cvfront.JPG/280px-4cvfront.JPG",
          "description": "The Renault 4CV (French: quatre chevaux, pronounced [katʁə.ʃəvo])[5] is a rear-engined, rear-wheel-drive, 4-door economy supermini manufactured and marketed by the French manufacturer Renault from August 1947 through July 1961.[2] It was the first French car to sell over a million units, and was superseded by the Dauphine.",
          "production": "1947–61"
        },
        {
          "title": "Volvo 200 series",
          "href": "https://en.wikipedia.org/wiki/Volvo_200_series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/1993_Volvo_240_GL_%288113517420%29.jpg/280px-1993_Volvo_240_GL_%288113517420%29.jpg",
          "description": "The Volvo 200 Series (or 240 and 260 Series) is a range of mid-size cars produced by Swedish company Volvo Cars from 1974 to 1993, with more than 2.8 million total units sold worldwide.[6] Like the Volvo 140 Series (1966 to 1974), from which it was developed, it was designed by Jan Wilsgaard.",
          "production": "1974–1993"
        },
        {
          "title": "Jeep Renegade (BU)",
          "href": "https://en.wikipedia.org/wiki/Jeep_Renegade_(BU)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Jeep_Renegade_1.6_MultiJet_2WD_Longitude_%E2%80%93_Frontansicht%2C_9._November_2014%2C_D%C3%BCsseldorf.jpg/280px-Jeep_Renegade_1.6_MultiJet_2WD_Longitude_%E2%80%93_Frontansicht%2C_9._November_2014%2C_D%C3%BCsseldorf.jpg",
          "description": "The Jeep Renegade (BU/520) is a subcompact crossover SUV (mini SUV in Europe) produced by Jeep. The off-road vehicle was first shown to the public in March 2014 at the Geneva Motor Show and production started in late August of that year. Standard Renegade models come with front-wheel drive. The vehicle offers the four-wheel drive systems Active Drive I and Active Drive Low, both of which are paired with Jeep's Selec-Terrain System.",
          "production": "2014–present"
        },
        {
          "title": "Chevrolet Camaro",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Camaro",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg/280px-2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg",
          "description": "The Chevrolet Camaro is a mid-size[2][3] American automobile manufactured by Chevrolet, classified as a pony car[4][5] and some versions also as a muscle car.[6][7] It went on sale on September 29, 1966, for the 1967 model year and was designed as a competing model to the Ford Mustang. The car shared its platform and major components with the Pontiac Firebird, also introduced for 1967.",
          "production": "1967–present"
        },
        {
          "title": "Fisker Karma",
          "href": "https://en.wikipedia.org/wiki/Fisker_Karma",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Fisker_Karma_EVer_EcoChic_%E2%80%93_Frontansicht_%281%29%2C_6._Juni_2012%2C_D%C3%BCsseldorf.jpg/280px-Fisker_Karma_EVer_EcoChic_%E2%80%93_Frontansicht_%281%29%2C_6._Juni_2012%2C_D%C3%BCsseldorf.jpg",
          "description": "The Fisker Karma is a premium plug-in range-extended electric[5] luxury sports sedan produced by Fisker Automotive in 2012. The cars were manufactured at Valmet Automotive in Finland.[6] ",
          "production": "2011–2012"
        },
        {
          "title": "Dino (automobile)",
          "href": "https://en.wikipedia.org/wiki/Dino_(automobile)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Dino_badge.jpg/250px-Dino_badge.jpg",
          "description": "Dino (Italian pronunciation: [ˈdiːno]) was a marque best known for mid-engined, rear-drive sports cars produced by Ferrari from 1967 to 1976. The marque came into existence in late 1956 with a front-engined Formula Two racer powered by a brand new Dino V6 engine. The name Dino was used for some models with engines smaller than 12 cylinders, it was an attempt by the company to offer a relatively low-cost sports car. The Ferrari name remained reserved for its premium V12 and flat-12 models until 1976, when \"Dino\" was retired in favour of full Ferrari branding.",
          "production": "1966–80"
        },
        {
          "title": "Mazda RX-8",
          "href": "https://en.wikipedia.org/wiki/Mazda_RX-8",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2006_Mazda_RX-8_2.6.jpg/280px-2006_Mazda_RX-8_2.6.jpg",
          "description": "The Mazda RX-8 is a sports car manufactured by Japanese automobile manufacturer Mazda between 2002 and 2012. It was first shown in 2001 at the North American International Auto Show. It is the successor to the RX-7 and, like its predecessors in the RX range, it is powered by a rotary Wankel engine. The RX-8 was available for sale in North America from the 2003 model year.",
          "production": "2003–2012"
        },
        {
          "title": "Ferrari 250",
          "href": "https://en.wikipedia.org/wiki/Ferrari_250",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/1962_Ferrari_250_GTE.jpg/280px-1962_Ferrari_250_GTE.jpg",
          "description": "The Ferrari 250 is a series of sports cars and grand tourers built by Ferrari from 1952 to 1964. The company's most successful early line, the 250 series includes many variants designed for road use or sports car racing. 250 series cars are characterized by their use of a 3.0 L (2,953 cc) Colombo V12 engine designed by Giaoccino Colombo. They were replaced by the 275 and 330 series cars.",
          "production": "1964–65"
        },
        {
          "title": "Porsche 918",
          "href": "https://en.wikipedia.org/wiki/Porsche_918",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/2015_Porsche_918_Spyder_4.6.jpg/280px-2015_Porsche_918_Spyder_4.6.jpg",
          "description": "The Porsche 918 Spyder is a mid-engine plug-in hybrid sports car manufactured by German automobile manufacturer Porsche.[4] The 918 Spyder is powered by a naturally aspirated 4.6 L (4,593 cc) V8 engine, developing 447 kW (608 PS; 599 hp) at 8,700 rpm, with two electric motors delivering an additional 210 kW (286 PS; 282 hp) for a combined output of 887 PS (652 kW; 875 hp) and 1,280 N⋅m (944 lbf⋅ft) of torque.[5][6] The 918 Spyder's 6.8 kWh lithium-ion battery pack delivers an all-electric range of 19 km (12 mi) under the US Environmental Protection Agency's five-cycle tests.[1]",
          "production": "2013–15"
        },
        {
          "title": "Mitsubishi Galant",
          "href": "https://en.wikipedia.org/wiki/Mitsubishi_Galant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2004_Mitsubishi_Galant_--_NHTSA.jpg/280px-2004_Mitsubishi_Galant_--_NHTSA.jpg",
          "description": "The Mitsubishi Galant is an automobile which was produced by Japanese manufacturer Mitsubishi from 1969 to 2012. The model name was derived from the French word galant, meaning \"chivalrous\".[3] There have been nine distinct generations with total cumulative sales exceeding five million units.[4] It began as a compact sedan, but over the course of its life evolved into a mid-size car. Initial production was based in Japan, but from 1994 the American market was served by vehicles assembled at the former Diamond-Star Motors (DSM) facility in Normal, Illinois.",
          "production": "1969–present"
        },
        {
          "title": "Lagonda",
          "href": "https://en.wikipedia.org/wiki/Lagonda",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NewLagondaEmblem.jpg/220px-NewLagondaEmblem.jpg",
          "description": "Lagonda is a British luxury car marque established in 1906, which has been owned by Aston Martin since 1947. The marque has had a non-continuous presence in the luxury car market, being dormant for several times during its existence, most recently from 1995 to 2008 and 2010 to 2013.",
          "production": "1935"
        },
        {
          "title": "Jaguar Mark 2",
          "href": "https://en.wikipedia.org/wiki/Jaguar_Mark_2",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jaguar.3point4.750pix.jpg/280px-Jaguar.3point4.750pix.jpg",
          "description": "The Jaguar Mark 2 is a medium-sized saloon car built from late 1959[3] to 1967 by Jaguar in Coventry, England. The outmoded Jaguar 2.4 Litre and 3.4 Litre models made between 1955 and 1959 are identified as Mark 1 Jaguars.[4]",
          "production": "1959–67"
        },
        {
          "title": "Chrysler Newport",
          "href": "https://en.wikipedia.org/wiki/Chrysler_Newport",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Chrysler_Newport_1961.jpg/280px-Chrysler_Newport_1961.jpg",
          "description": "The Newport was a name used by Chrysler for both a hardtop body designation and also for its lowest priced model between 1961 and 1981. Chrysler first used the Newport name on a 1940 show car, of which five vehicles were produced.",
          "production": "1961–81"
        },
        {
          "title": "Land Rover Series",
          "href": "https://en.wikipedia.org/wiki/Land_Rover_Series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Land_Rover_Series_I_1948_%28HUE_166%29.jpg/280px-Land_Rover_Series_I_1948_%28HUE_166%29.jpg",
          "description": "The Land Rover series I, II, and III (commonly referred to as series Land Rovers, to distinguish them from later models) are off-road vehicles produced by the British manufacturer Rover Company. The Land Rover was the first mass-produced civilian four-wheel drive car with doors on it. In 1992, Land Rover claimed that 70% of all the vehicles they had built were still in use.",
          "production": "1948–2015"
        },
        {
          "title": "Saturn S-Series",
          "href": "https://en.wikipedia.org/wiki/Saturn_S-Series",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/1996-1999_Saturn_SL2_--_03-16-2012.JPG/280px-1996-1999_Saturn_SL2_--_03-16-2012.JPG",
          "description": "The Saturn S-series was a family of compact cars from the Saturn automobile company of General Motors. Saturn pioneered the brand-wide \"no haggle\" sales technique. ",
          "production": "1991–2002"
        },
        {
          "title": "BYD Qin",
          "href": "https://en.wikipedia.org/wiki/BYD_Qin",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/BYD_Qin_II_004.jpg/280px-BYD_Qin_II_004.jpg",
          "description": "The BYD Qin (pronounced \"Chin\") is a plug-in hybrid compact sedan developed by BYD Auto with an all-electric range of 70 km (43 mi) and a hybrid electric powertrain that can extend the car's total range to a distance similar to that of a conventional gasoline-powered vehicle. The BYD Qin concept car was unveiled at the 2012 Beijing International Automotive Exhibition. It was named after China's first empire, the Qin Dynasty.[1][2] An all-electric variant with a range of 300 km (190 mi), the BYD Qin EV300, was released in China in March 2016.[3] The second generation model, the BYD Qin ProEV, was launched in September 2018.[4]",
          "production": "2013–present"
        },
        {
          "title": "Lincoln Continental",
          "href": "https://en.wikipedia.org/wiki/Lincoln_Continental",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Lincoln_Continental_P4220637.jpg/280px-Lincoln_Continental_P4220637.jpg",
          "description": "The Lincoln Continental is a series of mid-sized and full-sized luxury cars produced by Lincoln, a division of the American automaker Ford Motor Company. The model line was introduced following the construction of a personal vehicle for Edsel Ford, who commissioned a coachbuilt 1939 Lincoln-Zephyr convertible, developed as a vacation vehicle to attract potential Lincoln buyers. In what would give the model line its name, the exterior was given European \"continental\" styling elements, including a rear-mounted spare tire.",
          "production": "1940–2016"
        },
        {
          "title": "Toyota Celica",
          "href": "https://en.wikipedia.org/wiki/Toyota_Celica",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/TC2004GTS-AP.jpeg/280px-TC2004GTS-AP.jpeg",
          "description": "The Toyota Celica (Japanese: トヨタ セリカ) /ˈsɛlɪkə/ or /sɛˈliːkə/ is an automobile produced by Toyota from 1970 to 2006. The Celica name derives from the Latin word coelica meaning \"heavenly\" or \"celestial\". In Japan, the Celica was exclusive to the Toyota Corolla Store dealer chain.",
          "production": "1971–2006"
        },
        {
          "title": "Opel Corsa",
          "href": "https://en.wikipedia.org/wiki/Opel_Corsa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Opel_Corsa_F_at_IAA_2019_IMG_0693.jpg/280px-Opel_Corsa_F_at_IAA_2019_IMG_0693.jpg",
          "description": "The Opel Corsa is a supermini car[1][2][3] engineered and produced by the German automobile manufacturer Opel since 1982. It has been sold under a variety of other brands (most notably Vauxhall, Chevrolet, and Holden) and also spawned various other derivatives.",
          "production": "1982–present"
        },
        {
          "title": "Mitsubishi Pajero",
          "href": "https://en.wikipedia.org/wiki/Mitsubishi_Pajero",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mitsubishi_Pajero_Exceed.jpg/280px-Mitsubishi_Pajero_Exceed.jpg",
          "description": "The Mitsubishi Pajero (パジェロ, Japanese: [pad͡ʑeɾo]; English: /pəˈhɛroʊ/; Spanish: [paˈxeɾo])[3][4] is a full-size sport utility vehicle manufactured and marketed globally by Mitsubishi.",
          "production": "1982–present"
        },
        {
          "title": "Oldsmobile Cutlass",
          "href": "https://en.wikipedia.org/wiki/Oldsmobile_Cutlass",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/1971_Cutlass_Supreme_convertible.JPG/280px-1971_Cutlass_Supreme_convertible.JPG",
          "description": "The Oldsmobile Cutlass was a range of automobiles produced by General Motors' Oldsmobile division between 1961 and 1999. At its introduction, the Cutlass was Oldsmobile's smallest model; it began as a unibody compact car, but saw its greatest success as a body-on-frame intermediate.",
          "production": "1961–99"
        },
        {
          "title": "Peugeot 205",
          "href": "https://en.wikipedia.org/wiki/Peugeot_205",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Peugeot_205_%2822249003235%29.jpg/280px-Peugeot_205_%2822249003235%29.jpg",
          "description": "The Peugeot 205 is a supermini car produced by the French manufacturer Peugeot from 1983 to 1998.",
          "production": "1983–98"
        },
        {
          "title": "Mercedes-Benz SLR McLaren",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_SLR_McLaren",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_SLR_McLaren_%288615973055%29_%28cropped%29.jpg/280px-Mercedes-Benz_SLR_McLaren_%288615973055%29_%28cropped%29.jpg",
          "description": "The Mercedes-Benz SLR McLaren (C199 / R199 / Z199) is a grand tourer jointly developed by German automotive manufacturer Mercedes-Benz and British automobile manufacturer McLaren Automotive and sold from 2003 to 2010. When the car was developed, Mercedes-Benz owned 40 percent of the McLaren Group and the car was produced in conjunction between the two companies.SLR is an abbreviation for \"Sport Leicht Rennsport\" (Sport Light Racing), a homage to the Mercedes-Benz 300 SLR which served as the car's inspiration.[4] The car was offered in coupé, roadster and speedster bodystyles with the latter being a limited edition model.",
          "production": "2003–2010"
        },
        {
          "title": "Porsche 911",
          "href": "https://en.wikipedia.org/wiki/Porsche_911",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/280px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
          "description": "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door, 2+2 high performance rear-engined sports car made since 1963[1] by Porsche AG of Stuttgart, Germany. It has a rear-mounted flat-six engine and all round independent suspension. It has undergone continuous development, though the basic concept has remained unchanged.[2] The engines were air-cooled until the introduction of the Type 996 in 1998, with the 993, produced from 1994–1998 model years, being the last of the air-cooled Porsche sports cars.[3][4]",
          "production": "1963–present"
        },
        {
          "title": "Mitsubishi GTO",
          "href": "https://en.wikipedia.org/wiki/Mitsubishi_GTO",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/3000gtlev.jpg/280px-3000gtlev.jpg",
          "description": "The Mitsubishi GTO is a front-engine, all-wheel drive 2+2 hatchback sports coupé and Grand Touring car manufactured and marketed by Mitsubishi for model years (MY) 1990-1999, across a single generation with one   facelift.  Manufactured in Nagoya, Japan, the four passenger coupés were marketed in the Japanese domestic market (JDM) as the GTO and globally as Mitsubishi 3000GT. The Dodge Stealth — a badge engineered, mechanically identical captive import — was sold for model years 1991-1996 along with the 1991-1999 Mitsubishi 3000GT in North America. As a collaborative effort between Chrysler and its Japanese partner, Mitsubishi Motors, Chrysler was responsible for the Stealth's exterior styling.[1][2]",
          "production": "1991–99"
        },
        {
          "title": "Mercedes-Benz W201",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_W201",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Mercedes-Benz_190_front_20081213.jpg/280px-Mercedes-Benz_190_front_20081213.jpg",
          "description": "The Mercedes-Benz W201 was the first compact executive car manufactured by German automotive manufacturer Mercedes-Benz. Introduced in 1982, it was positioned in the size category below the Mercedes-Benz W123/W124 models and marketed under variants of the Mercedes-Benz 190 nameplate. Designer Bruno Sacco, head of styling at Mercedes-Benz from 1975-1999, regards it as his favourite design.",
          "production": "1983–93"
        },
        {
          "title": "Citroën DS",
          "href": "https://en.wikipedia.org/wiki/Citro%C3%ABn_DS",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bornholm_Rundt_2012_%282012-07-08%29%2C_by_Klugschnacker_modified.jpg/280px-Bornholm_Rundt_2012_%282012-07-08%29%2C_by_Klugschnacker_modified.jpg",
          "description": "The Citroën DS (French pronunciation: ​[si.tʁɔ.ˈɛn de ɛs]) is a front-engine, front-wheel-drive executive car that was manufactured and marketed by the French company Citroën from 1955 to 1975 in sedan, wagon/estate and convertible body configurations across three series, or generations. ",
          "production": "1955–76"
        },
        {
          "title": "Ford Cortina",
          "href": "https://en.wikipedia.org/wiki/Ford_Cortina",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ford_Cortina_KTO959E.jpg/280px-Ford_Cortina_KTO959E.jpg",
          "description": "The Ford Cortina is a car that was built by Ford of Britain in various guises from 1962 to 1982, and was the United Kingdom's best-selling car of the 1970s.",
          "production": "1962–82"
        },
        {
          "title": "Packard",
          "href": "https://en.wikipedia.org/wiki/Packard",
          "image": "https://upload.wikimedia.org/wikipedia/en/b/bd/Packardshield.gif",
          "description": "Coordinates: 42°22′47″N 83°01′44″W﻿ / ﻿42.379617°N 83.028928°W﻿ / 42.379617; -83.028928",
          "production": "1933–50"
        },
        {
          "title": "Toyota Supra",
          "href": "https://en.wikipedia.org/wiki/Toyota_Supra",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Toyota_Supra_SZ_%28A80%29_front.jpg/280px-Toyota_Supra_SZ_%28A80%29_front.jpg",
          "description": "The Toyota Supra (Japanese: トヨタ・スープラ, Toyota Sūpura) is a sports car and grand tourer manufactured by Toyota Motor Corporation beginning in 1978. The initial four generations of the Supra were produced from 1978 to 2002. The fifth generation has been produced since March 2019 and went on sale in May 2019.[3] The styling of the Supra was derived from the Toyota Celica, but it was both longer and wider.[4] Starting in mid-1986, the A70 Supra became a separate model from the Celica. In turn, Toyota also stopped using the prefix Celica and began calling the car Supra.[5] Owing to the similarity and past of the Celica's name, it is frequently mistaken for the Supra, and vice versa. The first, second, and third generations of the Supra were assembled at the Tahara plant in Tahara, Aichi, while the fourth generation was assembled at the Motomachi plant in Toyota City. The fifth-generation Supra is assembled alongside the G29 BMW Z4 in Graz, Austria, by Magna Steyr.",
          "production": "1986–2002"
        },
        {
          "title": "Ford Mustang",
          "href": "https://en.wikipedia.org/wiki/Ford_Mustang",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ford_Mustang_%2815583517786%29.jpg/280px-Ford_Mustang_%2815583517786%29.jpg",
          "description": "The Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car.[2] The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang. The 1963 Mustang II concept car was designed with a variation of the production model's front and rear ends with a roof that was 2.7 inches shorter.[3] Introduced early on April 17, 1964[4] (16 days after the Plymouth Barracuda), and thus dubbed as a \"1964½\" by Mustang fans, the 1965 Mustang was the automaker's most successful launch since the Model A.[5] The Mustang has undergone several transformations to its current sixth generation.",
          "production": "1964–present"
        },
        {
          "title": "Maserati MC12",
          "href": "https://en.wikipedia.org/wiki/Maserati_MC12",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/MC12._%285234528513%29.jpg/280px-MC12._%285234528513%29.jpg",
          "description": "The Maserati MC12 (Tipo M144S) is a limited production two-seater sports car produced by Italian car maker Maserati to allow a racing variant to compete in the FIA GT Championship. The car entered production in 2004, with 25 cars produced. A further 25 were produced in 2005, making a total of 50 cars available for customers, each of which was pre-sold for €600,000 (US$670,541).[6][9] With the addition of 12 cars produced for racing, only a total of 62 of these cars were ever produced.[10]",
          "production": "2004–05"
        },
        {
          "title": "Fiat Panda",
          "href": "https://en.wikipedia.org/wiki/Fiat_Panda",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fiat_panda_1_v_sst.jpg/280px-Fiat_panda_1_v_sst.jpg",
          "description": "The Fiat Panda is a city car manufactured and marketed by Fiat, now in its third generation. ",
          "production": "1980–present"
        },
        {
          "title": "Jaguar XJ",
          "href": "https://en.wikipedia.org/wiki/Jaguar_XJ",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Jaguar_XJ12_registered_December_1986_5343cc.JPG/280px-Jaguar_XJ12_registered_December_1986_5343cc.JPG",
          "description": "The Jaguar XJ is a series of full-size luxury cars produced by British automobile manufacturer Jaguar Cars (becoming Jaguar Land Rover in 2013) since 1968 across four basic platform generations (debuting in 1968, 1986, 2003 and 2009) with various updated derivatives of each. Since 1970 they have been Jaguar's flagship four door model. The original model was the last Jaguar saloon to have had the input of Sir William Lyons, the company's founder, and the model has been featured in countless media and high-profile appearances.  The current XJ (X351) was launched in 2009.",
          "production": "1968–present"
        },
        {
          "title": "Mercury Sable",
          "href": "https://en.wikipedia.org/wiki/Mercury_Sable",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/3rd-Mercury-Sable-sedan.jpg/280px-3rd-Mercury-Sable-sedan.jpg",
          "description": "The Mercury Sable is a range of automobiles that were manufactured and marketed by the Mercury brand of Ford Motor Company.  Introduced on December 26, 1985 as the replacement for the Mercury Marquis, the Sable marked the transition of the mid-size Mercury product range to front-wheel drive.",
          "production": "1986-2009"
        },
        {
          "title": "Lagonda",
          "href": "https://en.wikipedia.org/wiki/Lagonda",
          "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NewLagondaEmblem.jpg/220px-NewLagondaEmblem.jpg",
          "description": "Lagonda is a British luxury car marque established in 1906, which has been owned by Aston Martin since 1947. The marque has had a non-continuous presence in the luxury car market, being dormant for several times during its existence, most recently from 1995 to 2008 and 2010 to 2013.",
          "production": "1925–33"
        },
        {
          "title": "Opel Ascona",
          "href": "https://en.wikipedia.org/wiki/Opel_Ascona",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Opel_Ascona_front_20071115.jpg/280px-Opel_Ascona_front_20071115.jpg",
          "description": "The Opel Ascona was a large family car (D-segment in Europe) produced by the German automaker Opel from 1970 to 1988. It was produced in three separate generations, beginning with rear-wheel-drive and ending up as a front-wheel drive J-car derivative.",
          "production": "1970–88"
        },
        {
          "title": "Nissan March",
          "href": "https://en.wikipedia.org/wiki/Nissan_March",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/2017_Nissan_Micra_N-Connecta_IG-T_900cc_Front.jpg/280px-2017_Nissan_Micra_N-Connecta_IG-T_900cc_Front.jpg",
          "description": "The Nissan Micra (Japanese: 日産・マイクラ, Nissan Maikura), known in Latin America and in most of Asia as the Nissan March (Japanese: 日産・マーチ, Nissan Māchi), is a supermini[1] produced by the Japanese manufacturer Nissan since 1982.",
          "production": "1982–present"
        },
        {
          "title": "Mazda 6",
          "href": "https://en.wikipedia.org/wiki/Mazda_6",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2018_Mazda6_facelift.jpg/280px-2018_Mazda6_facelift.jpg",
          "description": "The Mazda 6 or Mazda6 (known as the Mazda Atenza in Japan, China, Malaysia and Singapore, derived from the Italian attenzione) is a mid-size car produced by Mazda since 2002, replacing the long-produced Capella/626 in 2002. The car was popular among consumers, selling faster than all previous Mazda models.[2]",
          "production": "2002–present"
        },
        {
          "title": "Pontiac Bonneville",
          "href": "https://en.wikipedia.org/wiki/Pontiac_Bonneville",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pontiac_Bonneville_--_07-09-2009.jpg/280px-Pontiac_Bonneville_--_07-09-2009.jpg",
          "description": "The Pontiac Bonneville was an automobile built by Pontiac from 1957 to 2005. Bonnevilles were full-sized, with the exception of a brief period of mid-size between 1982–1986. The brand was introduced as a limited production performance convertible during the 1957 model year. The Bonneville (known as the Parisienne in Canada until 1981), and its platform partner, the Grand Ville, are some of the largest Pontiacs ever built; in station wagon body styles they reached just over 230 inches (5.8 m) long, and at 5,000 pounds (2,300 kg) and more were also some of the heaviest cars produced at the time. Also, they came with a Jetaway 315 and also were available as hearses.",
          "production": "1958–2005"
        },
        {
          "title": "Audi A1",
          "href": "https://en.wikipedia.org/wiki/Audi_A1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2018_Audi_A1_S_Line_30_TFSi_S-A_1.0.jpg/280px-2018_Audi_A1_S_Line_30_TFSi_S-A_1.0.jpg",
          "description": "The Audi A1 (internally designated Typ 8X) is a supermini sized launched by Audi at the 2010 Geneva Motor Show. Sales of the initial three door A1 model started in Germany in August 2010, with the United Kingdom following in November 2010.[3] A five-door version, called Sportback, was launched in November 2011, with sales starting in export markets during spring 2012.[4]",
          "production": "2010–present"
        },
        {
          "title": "Chrysler Town & Country",
          "href": "https://en.wikipedia.org/wiki/Chrysler_Town_%26_Country",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2011_Chrysler_Town_%26_Country_Touring_-_L_--_04-22-2011.jpg/280px-2011_Chrysler_Town_%26_Country_Touring_-_L_--_04-22-2011.jpg",
          "description": "The Chrysler Town & Country is a minivan that was manufactured and marketed by Chrysler. It was introduced in 1989 for the 1990 model year. The Chrysler group minivans, which include the Dodge Caravan/Dodge Grand Caravan and included the Plymouth Voyager/Plymouth Grand Voyager/Chrysler Voyager, have ranked as the 13th bestselling automotive nameplates worldwide, with over 12 million sold.[1]",
          "production": "1990–present"
        },
        {
          "title": "Nissan Qashqai",
          "href": "https://en.wikipedia.org/wiki/Nissan_Qashqai",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_Nissan_Qashqai_N-Connecta_DCi_1.5_Front.jpg/280px-2018_Nissan_Qashqai_N-Connecta_DCi_1.5_Front.jpg",
          "description": "The Nissan Qashqai (/ˈkæʃkaɪ/; Japanese: 日産・カシュカイ, romanized: Nissan Kashukai) is a compact crossover SUV produced by the Japanese car manufacturer Nissan since 2006.  For the first generation, the Qashqai was sold under the name Nissan Dualis (Japanese: 日産・デュアリス, Nissan Dyuarisu) in Japan and Australia.  Now in its second generation, which was released in 2014, the new model is only badged as Qashqai, except in the United States where it is rebadged as the Nissan Rogue Sport (日産・ローグ スポーツ, Nissan Rōgu Supōtsu).",
          "production": "2006–present"
        },
        {
          "title": "MG MGB",
          "href": "https://en.wikipedia.org/wiki/MG_MGB",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/MG_MGB_open_roadster_1969.jpg/280px-MG_MGB_open_roadster_1969.jpg",
          "description": "The MGB is a two-door sports car manufactured and marketed by the British Motor Corporation (BMC), later the Austin-Morris division of British Leyland, as a four-cylinder, soft-top roadster from 1963 until 1980. Its details were first published on 19 September 1962.[3] Variants include the MGB GT three-door 2+2 coupé (1965–1980), the six-cylinder roadster and coupé MGC (1967–69), and the eight-cylinder 2+2 coupé, the MGB GT V8 (1973–76).",
          "production": "1962–80"
        },
        {
          "title": "Mini",
          "href": "https://en.wikipedia.org/wiki/Mini",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Morris_Mini-Minor_1959_%28621_AOK%29.jpg/280px-Morris_Mini-Minor_1959_%28621_AOK%29.jpg",
          "description": "The Mini is a small economy car produced by the English-based British Motor Corporation (BMC) and its successors from 1959 until 2000. The original is considered an icon of 1960s British popular culture.[8][9][10][11] Its space-saving transverse engine and front-wheel drive layout – allowing 80% of the area of the car's floorpan to be used for passengers and luggage – influenced a generation of car makers.[12] In 1999, the Mini was voted the second-most influential car of the 20th century, behind the Ford Model T, and ahead of the Citroën DS and Volkswagen Beetle.[13][14]  The front-wheel-drive, transverse-engine layout of the Mini was copied for other \"supermini\" designs including the Honda N360 (1967), Nissan Cherry (1970), and Fiat 127 (1971).  The layout was also adapted for larger subcompact designs.",
          "production": "1959–2000"
        },
        {
          "title": "Jeep Wrangler",
          "href": "https://en.wikipedia.org/wiki/Jeep_Wrangler",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2018_Jeep_Wrangler_Unlimited_au_SIAM_2018.jpg/280px-2018_Jeep_Wrangler_Unlimited_au_SIAM_2018.jpg",
          "description": "The Jeep Wrangler is a series of compact and mid-size (Wrangler Unlimited and Wrangler 2-door JL) four-wheel drive off-road SUVs, manufactured by Jeep since 1986, and currently in its fourth generation. The Wrangler JL, the most recent generation, was unveiled in late 2017 and is produced at Jeep's Toledo Complex.",
          "production": "1987-present"
        },
        {
          "title": "Ford Windstar",
          "href": "https://en.wikipedia.org/wiki/Ford_Windstar#Mercury_Monterey",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2001-2003_Ford_Windstar_Limited.jpg/280px-2001-2003_Ford_Windstar_Limited.jpg",
          "description": "The Ford Windstar (later the Ford Freestar and Mercury Monterey) is a minivan that was produced and sold by Ford from the 1995 to 2007 model years.  Serving as the replacement for the Ford Aerostar, the Windstar marked the adoption of a front-wheel drive layout, in line with Chrysler minivans.  Three generations of the model line were sold, with the third generation marketed as the Ford Freestar.  ",
          "production": "2004-2007"
        },
        {
          "title": "Porsche Cayenne",
          "href": "https://en.wikipedia.org/wiki/Porsche_Cayenne",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Porsche_Cayenne%2C_IAA_2017_%281Y7A2256%29.jpg/280px-Porsche_Cayenne%2C_IAA_2017_%281Y7A2256%29.jpg",
          "description": "The Porsche Cayenne is a mid-size luxury crossover sport utility vehicle produced by the German manufacturer Porsche since 2002, with North American sales beginning in 2003. It is the first V8-engined vehicle built by Porsche since 1995, when the Porsche 928 was discontinued. It is also Porsche's first off-road variant vehicle since its Super and Junior tractors of the 1950s, and the first Porsche with four doors. Since 2008, all engines have featured direct injection technology.",
          "production": "2002–present"
        },
        {
          "title": "Buick Electra",
          "href": "https://en.wikipedia.org/wiki/Buick_Electra",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/1970_Buick_Electra_225_%2814872481980%29.jpg/280px-1970_Buick_Electra_225_%2814872481980%29.jpg",
          "description": "The Buick Electra is a full-size luxury car manufactured and marketed by Buick from 1959 to 1990 over six generations — having been named after heiress and sculptor Electra Waggoner Biggs by her brother-in-law Harlow H. Curtice, former president of Buick and later president of General Motors.[1] The Electra was offered in coupe, convertible, sedan, and station wagon body styles over the course of its production — with rear-wheel drive (1959-1984) or front-wheel drive (1985-1990, except station wagon).  For its entire production run, it ran on some form of GM's C platform, which it shared with the Oldsmobile 98 and Cadillac DeVille.  The Electra was superseded by the Buick Park Avenue in 1991.",
          "production": "1959–90"
        },
        {
          "title": "Mercury Cougar",
          "href": "https://en.wikipedia.org/wiki/Mercury_Cougar",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mercury_Cougar_Visby.jpg/280px-Mercury_Cougar_Visby.jpg",
          "description": "Mercury Cougar is a nameplate applied to a diverse series of automobiles sold by the Mercury division of Ford from 1967 to 1997 and from 1999 to 2002.  While the nameplate is most commonly associated with two-door coupes, at various times during its production, the Cougar was also marketed as a convertible,  four-door sedan, station wagon, and hatchback.",
          "production": "1967-2002"
        },
        {
          "title": "Chevrolet Corvair",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Corvair",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flickr_-_DVS1mn_-_64_Chevrolet_Corvair_Monza_%281%29.jpg/280px-Flickr_-_DVS1mn_-_64_Chevrolet_Corvair_Monza_%281%29.jpg",
          "description": "The Chevrolet Corvair is a compact car manufactured by Chevrolet for model years 1960–1969 in two generations. It is still the only American-designed, mass-produced passenger car with a rear-mounted, air-cooled engine,[1] the Corvair was manufactured and marketed in 2-door coupe, convertible, 4-door sedan, 4-door station wagon, passenger van, commercial van, and pickup truck body styles in its first generation (1960–1964) as well as 2-door coupe, convertible and 4-door sedan in its second (1965–1969).",
          "production": "1960–69"
        },
        {
          "title": "Oldsmobile 88",
          "href": "https://en.wikipedia.org/wiki/Oldsmobile_88",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/81delta88.jpg/280px-81delta88.jpg",
          "description": "The Oldsmobile 88 (marketed from 1989 on as the Eighty Eight) is a full-size car that was sold and produced by Oldsmobile from 1949 until 1999. From 1950 to 1974 the 88 was the division's top-selling line, particularly the entry-level models such as the 88 and Dynamic 88. The 88 series was also an image leader for Oldsmobile, particularly in the early years (1949–51) when it was one of the best performing automobiles thanks to its relatively small size, light weight and advanced overhead-valve high-compression V8 engine. This engine, originally designed for the larger C-bodied and more luxurious 98 series, also replaced the straight-8 on the smaller B-bodied 78. With the large, high performance V8, the Oldsmobile 88 is widely considered to be the first muscle car, although this title is disputed.",
          "production": "1949–99"
        },
        {
          "title": "Toyota 86",
          "href": "https://en.wikipedia.org/wiki/Toyota_86",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/2017_Toyota_GT86_PRO_D-4S_2.0_%281%29.jpg/280px-2017_Toyota_GT86_PRO_D-4S_2.0_%281%29.jpg",
          "description": "The Toyota 86 is a 2+2 sports car jointly developed by Toyota and Subaru, manufactured at Subaru's Gunma assembly plant — along with a badge engineered variant, marketed as the Subaru BRZ.",
          "production": "2012–present"
        },
        {
          "title": "Rover 25",
          "href": "https://en.wikipedia.org/wiki/Rover_25",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/2005_Rover_25_GLi_1.4.jpg/280px-2005_Rover_25_GLi_1.4.jpg",
          "description": "The Rover 200 Series, and later the Rover 25, are a series of small family cars (until 1995) and supermini cars (1995-2005) that were produced by British manufacturer Rover from 1984 to 2005.",
          "production": "1999–2005"
        },
        {
          "title": "Renault 4",
          "href": "https://en.wikipedia.org/wiki/Renault_4",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Terenure%2C_Co._Dublin_-_Ireland_%286018047588%29.jpg/280px-Terenure%2C_Co._Dublin_-_Ireland_%286018047588%29.jpg",
          "description": "The Renault 4, also known as the 4L (pronounced \"Quatrelle\" in French), is a hatchback economy car produced by the French automaker Renault between 1961 and 1994. It was the first front-wheel drive family car produced by Renault.[nb 1]",
          "production": "1961–92"
        },
        {
          "title": "Tesla Model 3",
          "href": "https://en.wikipedia.org/wiki/Tesla_Model_3",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tesla_Model_3_Monaco_IMG_1212.jpg/280px-Tesla_Model_3_Monaco_IMG_1212.jpg",
          "description": "The Tesla Model 3 is an  electric four-door sedan developed by Tesla.[7] The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 250 miles (402 km) and the Long Range versions deliver 310 miles (499 km).[3]Tesla stated that the Model 3 carries full self-driving hardware to be optionally enabled at a future date.[8][9][10]",
          "production": "2017-present"
        },
        {
          "title": "Chrysler Aspen Hybrid",
          "href": "https://en.wikipedia.org/wiki/Chrysler_Aspen_Hybrid",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2011_Dodge_Durango_--_02-17-2011.jpg/280px-2011_Dodge_Durango_--_02-17-2011.jpg",
          "description": "The Dodge Durango is a mid-size sport utility vehicle (SUV) produced by Dodge. The first two generations were very similar in that both were based on the Dodge Dakota, both featured a body-on-frame construction and both were produced at the Newark Assembly Plant in Newark, Delaware.",
          "production": "2008-2009"
        },
        {
          "title": "Ford GT",
          "href": "https://en.wikipedia.org/wiki/Ford_GT",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/2018_Ford_GT_%2825437330737%29.jpg/280px-2018_Ford_GT_%2825437330737%29.jpg",
          "description": "The Ford GT is an American mid-engine two-seater sports car manufactured and marketed by Ford for model year 2005 in conjunction with the company's 2003 centenary. The second generation Ford GT became available for the 2017 model year.[1]",
          "production": "2005–06"
        },
        {
          "title": "Citroën 2CV",
          "href": "https://en.wikipedia.org/wiki/Citro%C3%ABn_2CV",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Citroen_2CV_1X7A7979.jpg/280px-Citroen_2CV_1X7A7979.jpg",
          "description": "The Citroën 2CV (French: \"deux chevaux\" i.e. \"deux chevaux-vapeur\", lit. \"two steam horses\", \"two tax horsepower\") is an air-cooled front-engine, front-wheel-drive economy car introduced at the 1948 Paris Mondial de l'Automobile and manufactured by Citroën for model years 1948–1990.[1]",
          "production": "1948–90"
        },
        {
          "title": "Hyundai Accent",
          "href": "https://en.wikipedia.org/wiki/Hyundai_Accent",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/2018_Hyundai_Accent_1.6L_front_7.28.18.jpg/280px-2018_Hyundai_Accent_1.6L_front_7.28.18.jpg",
          "description": "The Hyundai Accent (Korean: 현대 엑센트), or Hyundai Verna (현대 베르나) in South Korea, is a subcompact car produced by Hyundai. In Australia, the first generation models carried over the Hyundai Excel name used by the Accent's predecessor. The Accent was replaced in 2000 by the Hyundai Verna in South Korea, although most international markets, including the US, retained the \"Accent\" name.",
          "production": "1994–present"
        },
        {
          "title": "Lamborghini Countach",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Countach",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lamborghini_Countach_-_Flickr_-_exfordy_%282%29.jpg/280px-Lamborghini_Countach_-_Flickr_-_exfordy_%282%29.jpg",
          "description": "The Lamborghini Countach (help·info) is a rear mid-engine, rear-wheel-drive sports car produced by the Italian automobile manufacturer Lamborghini from 1974 to 1990. It is one of the then-exotic designs conceptualized by Italian Design house Bertone, which pioneered and popularized the sharply angled \"Italian Wedge\" design language.",
          "production": "1974–1990"
        },
        {
          "title": "Porsche Boxster",
          "href": "https://en.wikipedia.org/wiki/Porsche_Boxster",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/FoS20162016_0623_160214AA_%2827584753770%29.jpg/220px-FoS20162016_0623_160214AA_%2827584753770%29.jpg",
          "description": "The Porsche Boxster and Porsche Cayman are mid-engined two-seater sports cars manufactured and marketed by German automobile manufacturer Porsche across four generations — as a 2-door, 2-seater roadster (Boxster) and a 3-door, 2-seater fastback coupé (Cayman).",
          "production": "1996–present"
        },
        {
          "title": "Lamborghini Aventador",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Aventador",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1486%29.jpg/280px-Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1486%29.jpg",
          "description": "The Lamborghini Aventador (Spanish pronunciation: [aβentaˈðoɾ]) is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a fighting bull.[7][8][9]",
          "production": "2011–present"
        },
        {
          "title": "Audi A4",
          "href": "https://en.wikipedia.org/wiki/Audi_A4",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2018_Audi_A4_Sport_TDi_Quattro_S-A_2.0.jpg/280px-2018_Audi_A4_Sport_TDi_Quattro_S-A_2.0.jpg",
          "description": "The Audi A4 is a line of compact executive cars produced since 1994 by the German car manufacturer Audi, a subsidiary of the Volkswagen Group.",
          "production": "1994–present"
        },
        {
          "title": "DMC DeLorean",
          "href": "https://en.wikipedia.org/wiki/DMC_DeLorean",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Delorean_DMC-12_side.jpg/280px-Delorean_DMC-12_side.jpg",
          "description": "The DMC DeLorean (commonly referred to simply as a \"DeLorean\", as it was the only model ever produced by the company) is a sports car originally manufactured by John DeLorean's DeLorean Motor Company, or DMC, for the American market from model years 1981 through 1983. The car, designed by Giorgetto Giugiaro, stood out for its gull-wing doors and brushed stainless-steel outer body panels, as well as an innovative fiberglass body structure with a steel backbone chassis. Initially, it became widely known for its disappointing lack of power and performance, which didn't match the expectations created by its looks and price tag, but later – after 1985 – the DeLorean became iconic for its appearances as the time machine in the Back to the Future media franchise.",
          "production": "1981–82"
        },
        {
          "title": "Volkswagen Beetle",
          "href": "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/VW_1302_%282013-09-15_2307_Spu%29.JPG/280px-VW_1302_%282013-09-15_2307_Spu%29.JPG",
          "description": "The Volkswagen Beetle—officially the Volkswagen Type 1, informally in German the Käfer (meaning \"beetle\"), in parts of the English-speaking world the Bug,[11] and known by many other nicknames in other languages—is a two-door, rear-engine economy car, intended for five occupants (later, Beetles were restricted to four people in some countries),[12][13][14] that was manufactured and marketed by German automaker Volkswagen (VW) from 1938 until 2003.[15]",
          "production": "1938–2003"
        },
        {
          "title": "Renault Twingo",
          "href": "https://en.wikipedia.org/wiki/Renault_Twingo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Renault_Twingo%2C_Generation_3_%282017-07-27_Sp%29.JPG/280px-Renault_Twingo%2C_Generation_3_%282017-07-27_Sp%29.JPG",
          "description": "The Renault Twingo is a four passenger city car manufactured and marketed by the French automaker Renault, introduced in 1992 and currently in its third generation.",
          "production": "1993–present"
        },
        {
          "title": "AMC Gremlin",
          "href": "https://en.wikipedia.org/wiki/AMC_Gremlin",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gremlin_side_%285903000893%29.jpg/280px-Gremlin_side_%285903000893%29.jpg",
          "description": "The AMC Gremlin (also American Motors Gremlin)[1] is an American subcompact automobile introduced in 1970, manufactured and marketed in a single, two-door body style in America  (1970–1978) by American Motors Corporation (AMC), as well as in Mexico (1974–1978) by AMC's Vehículos Automotores Mexicanos (VAM) subsidiary.",
          "production": "1970–1978"
        },
        {
          "title": "Mazda RX-7",
          "href": "https://en.wikipedia.org/wiki/Mazda_RX-7",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tuned_Mazda_RX-7_Type_RB_%28GF-FD3S%29_front.jpg/280px-Tuned_Mazda_RX-7_Type_RB_%28GF-FD3S%29_front.jpg",
          "description": "The Mazda RX-7 is a front-engine, rear-wheel-drive rotary engine powered sports car that was manufactured and marketed by Mazda from 1978–2002 across three generations, all of which made use of a compact, lightweight Wankel rotary engine.",
          "production": "1978–2002"
        },
        {
          "title": "Tesla Roadster (2008)",
          "href": "https://en.wikipedia.org/wiki/Tesla_Roadster_(2008)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roadster_2.5_windmills_trimmed.jpg/280px-Roadster_2.5_windmills_trimmed.jpg",
          "description": "The Tesla Roadster is a battery electric vehicle (BEV) sports car, based on the Lotus Elise chassis, that was produced by the electric car firm Tesla Motors (now Tesla, Inc.) in California from 2008 to 2012. The Roadster was the first highway legal serial production all-electric car to use lithium-ion battery cells and the first production all-electric car to travel more than 320 kilometres (200 mi) per charge.[7] It is also the first production car to be launched into orbit, carried by a Falcon Heavy rocket in a test flight on February 6, 2018.",
          "production": "2008–2012"
        },
        {
          "title": "Ford Escort (Europe)",
          "href": "https://en.wikipedia.org/wiki/Ford_Escort_(Europe)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ford_Escort_RS2000_MkI.jpg/280px-Ford_Escort_RS2000_MkI.jpg",
          "description": "The Ford Escort is a small family car which was manufactured by Ford Europe from 1968 to 2004. The Ford Escort name was also applied to several different small cars produced in North America by Ford between 1981 and 2004.",
          "production": "1968–2003"
        },
        {
          "title": "Chevrolet Corvette",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Corvette",
          "image": "https://upload.wikimedia.org/wikipedia/en/f/ff/Corvette_wings_logo.jpg",
          "description": "The Chevrolet Corvette, colloquially known as the Vette[1] or Chevy Corvette, is a historically front engine, rear drive, two-door, two-passenger sports car manufactured and marketed by Chevrolet across more than 60 years of production and seven design generations[2][3]—with GM confirming in early 2019 an eighth generation Corvette in a rear-mid-engine configuration.[4] With its generations noted sequentially from C1 to C8, the Corvette serves as Chevrolet's halo vehicle and is widely noted for its performance and distinctive plastic—either fiberglass or composite—bodywork.",
          "production": "1953–present"
        },
        {
          "title": "Dodge Viper",
          "href": "https://en.wikipedia.org/wiki/Dodge_Viper",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aewroi.jpg/280px-Aewroi.jpg",
          "description": "The Dodge Viper is a sports car manufactured by Dodge (SRT for 2013 and 2014), a division of American car manufacturer FCA US LLC from 1991 through 2017, having taken a brief hiatus from 2010–2013. Production of the two-seat sports car began at New Mack Assembly Plant in 1991 and moved to Conner Avenue Assembly Plant in October 1995.",
          "production": "1992–2017"
        },
        {
          "title": "Chevrolet Caprice",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Caprice",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/2011_Chevrolet_Caprice_PPV_--_12-06-2010_front.jpg/280px-2011_Chevrolet_Caprice_PPV_--_12-06-2010_front.jpg",
          "description": "The Chevrolet Caprice  is a full-sized automobile produced by Chevrolet in North America for the 1965 to 1996 model years. Full-size Chevrolet sales peaked in 1965 with over a million sold. It was the most popular American car in the sixties and early seventies, which, during its lifetime, included the Biscayne, Bel Air, and Impala.",
          "production": "1966–96"
        },
        {
          "title": "Ford Transit",
          "href": "https://en.wikipedia.org/wiki/Ford_Transit",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2016_Ford_Transit_350_2.2.jpg/280px-2016_Ford_Transit_350_2.2.jpg",
          "description": "The Ford Transit is a range of light commercial vehicles produced by Ford since 1965. Sold primarily as a cargo van, the Transit is also built as a passenger van (marketed as the Ford Tourneo since 1995), minibus, cutaway van chassis, and as a pickup truck. Over 8,000,000 Transit vans have been sold, making it the third best-selling van of all time[1] and have been produced across four basic platform generations (debuting in 1965, 1986, 2000, and 2013 respectively), with various \"facelift\" versions of each.",
          "production": "1965–present"
        },
        {
          "title": "Renault Dauphine",
          "href": "https://en.wikipedia.org/wiki/Renault_Dauphine",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Want_it%3F_%286438706249%29.jpg/280px-Want_it%3F_%286438706249%29.jpg",
          "description": "Renault Dauphine (pronounced [dɔfin])[7] is a rear-engined economy car manufactured by Renault in a single body style – a three-box, 4-door saloon – as the successor to the Renault 4CV; more than two million were manufactured during its 1956-1967 production.",
          "production": "1956–67"
        },
        {
          "title": "Mercury Grand Marquis",
          "href": "https://en.wikipedia.org/wiki/Mercury_Grand_Marquis",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/03-05_Mercury_Grand_Marquis_.jpg/280px-03-05_Mercury_Grand_Marquis_.jpg",
          "description": "The Mercury Grand Marquis is an automobile that was sold by the Mercury division of Ford Motor Company from 1975 to 2011. From 1975 to 1982, it was the premium model of the Mercury Marquis line of full-size sedans, becoming a standalone model line in 1983.  For 2003 and 2004, it was sold alongside the revival of the Mercury Marauder.",
          "production": "1983–2011"
        },
        {
          "title": "Rambler Classic",
          "href": "https://en.wikipedia.org/wiki/Rambler_Classic",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/1965_Rambler_Classic_770_convertible-white.jpg/280px-1965_Rambler_Classic_770_convertible-white.jpg",
          "description": "The Rambler Classic is an intermediate sized automobile that was built and sold by American Motors Corporation (AMC) from the 1961 to 1966 model years. The Classic took the place of the Rambler Six and Rambler Rebel V-8 names, which were retired at the end of the 1960 model year.",
          "production": "1961–66"
        },
        {
          "title": "McLaren F1",
          "href": "https://en.wikipedia.org/wiki/McLaren_F1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/1996_McLaren_F1_Chassis_No_63_6.1_Front.jpg/280px-1996_McLaren_F1_Chassis_No_63_6.1_Front.jpg",
          "description": "The McLaren F1 is a sports car designed and manufactured by McLaren Cars, and powered by the BMW S70/2 V12 engine. Originally a concept conceived by Gordon Murray, he convinced Ron Dennis to back the project and engaged Peter Stevens to design the exterior and interior of the car. On 31 March 1998, the XP5 prototype with a modified rev limiter set the Guinness World Record for the world's fastest production car, reaching 240.1 mph (386.4 km/h), surpassing the modified Jaguar XJ220's 217.1 mph (349 km/h) record from 1992. The BMW-powered McLaren's record lasted until the Koenigsegg CCR surpassed it in 2005, followed by the Bugatti Veyron. Only low production volume cars like the 1993 Dauer 962 Le Mans which attained 251.4 mph (404.6 km/h) in 1998 were faster.[3][4]",
          "production": "1993–98"
        },
        {
          "title": "Toyota Prius",
          "href": "https://en.wikipedia.org/wiki/Toyota_Prius",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2019_Toyota_Prius_%28ZVW50R%29_1.8_Hybrid_liftback_%282018-12-19%29_01.jpg/280px-2019_Toyota_Prius_%28ZVW50R%29_1.8_Hybrid_liftback_%282018-12-19%29_01.jpg",
          "description": "The Toyota Prius (/ˈpriːəs/; Japanese:トヨタ プリウス Toyota Puriusu) is a full hybrid electric automobile developed by Toyota and manufactured by the company since 1997. Initially offered as a 4-door sedan, it has been produced only as a 5-door liftback since 2003.",
          "production": "1997–present"
        },
        {
          "title": "Renault 5",
          "href": "https://en.wikipedia.org/wiki/Renault_5",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/1990_Renault_5_1.4_Auto_%289743019740%29.jpg/280px-1990_Renault_5_1.4_Auto_%289743019740%29.jpg",
          "description": "The Renault 5 is a four passenger, three or five-door, front-engine, front wheel drive hatchback supermini manufactured and marketed by Renault over two generations 1972–1985 (also called R5) and 1984–1996 (also called Super 5 or Supercinq). The R5 was marketed in the US as Le Car, from 1976 to 1983.[1] The R5 spawned the Renault 7, a four door sedan variant manufactured from 1974 to 1984 in Spain by Renault's subsidiary FASA-Renault[2] and exported in limited markets.",
          "production": "1972–96"
        },
        {
          "title": "Ford Fiesta",
          "href": "https://en.wikipedia.org/wiki/Ford_Fiesta",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2017_Ford_Fiesta_Zetec_Turbo_1.0_Front.jpg/280px-2017_Ford_Fiesta_Zetec_Turbo_1.0_Front.jpg",
          "description": "The Ford Fiesta is a supermini marketed by Ford since 1976 over seven generations. It has been manufactured in the United Kingdom, Germany, Spain, Australia, Brazil, Argentina, Venezuela, Mexico, China, India, Thailand, and South Africa.",
          "production": "1976–89"
        },
        {
          "title": "AMC Hornet",
          "href": "https://en.wikipedia.org/wiki/AMC_Hornet",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/1976_AMC_Hornet_Sportabout.jpg/280px-1976_AMC_Hornet_Sportabout.jpg",
          "description": "The AMC Hornet is a compact automobile, manufactured and marketed by American Motors Corporation (AMC) in a single generation from model years 1970 through 1977 — in sedan, wagon, and hatchback coupe configurations. The Hornet replaced the compact Rambler American marking the end of the Rambler marque in the American and Canadian markets.",
          "production": "1970–1977"
        },
        {
          "title": "Mazda 3",
          "href": "https://en.wikipedia.org/wiki/Mazda_3",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2017_Mazda3_Sport_Diesel_2.2.jpg/280px-2017_Mazda3_Sport_Diesel_2.2.jpg",
          "description": "The Mazda3 or Mazda 3 (known as the Mazda Axela in Japan (first three generations), a combination of \"accelerate\" and \"excellent\"[4]) is a compact car manufactured in Japan by Mazda. It was introduced in 2003 as a 2004 model, replacing the Familia/323/Protegé in the C-segment. A performance-oriented version of the Mazda3 is marketed as the Mazdaspeed3 in North America, Mazdaspeed Axela in Japan and the Mazda3 MPS in Europe.",
          "production": "2003–present"
        },
        {
          "title": "Mercedes-Benz S-Class",
          "href": "https://en.wikipedia.org/wiki/Mercedes-Benz_S-Class",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2014_Mercedes-Benz_S550_%28US%29_lwb.jpg/280px-2014_Mercedes-Benz_S550_%28US%29_lwb.jpg",
          "description": "The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for \"special class\", abbreviated as \"S-Klasse\"), is a series of full-sized luxury flagship vehicles produced by the German automaker Mercedes-Benz, a division of German company Daimler AG. The S-Class designation for top-of-the-line Mercedes-Benz models was officially introduced in 1972 with the W116, and has remained in use ever since.",
          "production": "1965–present"
        },
        {
          "title": "Jeep Cherokee (XJ)",
          "href": "https://en.wikipedia.org/wiki/Jeep_Cherokee_(XJ)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jeep_Cherokee_2-door.jpg/280px-Jeep_Cherokee_2-door.jpg",
          "description": "The Jeep Cherokee (XJ) is a compact sport utility vehicle manufactured and marketed across a single generation by Jeep in the United States from 1983 to 2001 — and globally through 2014. Available in three- or five-door, five passenger, front engine, rear- or four-wheel drive configurations, the XJ was manufactured in Toledo, Ohio, USA; Beijing, China; Ferreyra, Argentina; Cairo, Egypt; and in Valencia, Venezuela, with production reaching approximately 3 million between 1984 and 2001.[2]",
          "production": "1984–present"
        },
        {
          "title": "Honda CR-V",
          "href": "https://en.wikipedia.org/wiki/Honda_CR-V",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2017_Honda_CR-V_front_4.11.18.jpg/280px-2017_Honda_CR-V_front_4.11.18.jpg",
          "description": "The Honda CR-V is a compact crossover SUV manufactured by Honda since 1995 and introduced in the North American market in 1997.[1][2] It uses the Honda Civic platform with an SUV body design. The CR-V is Honda's mid-range utility vehicle, slotting between the smaller Honda HR-V and the larger Honda Pilot. Honda states \"CR-V\" stands for \"Comfortable Runabout Vehicle,\"[3][4][5] while the term \"Compact Recreational Vehicle\" is used in a British car review article that was republished by Honda.[6]",
          "production": "1996–present"
        },
        {
          "title": "Mitsubishi Lancer",
          "href": "https://en.wikipedia.org/wiki/Mitsubishi_Lancer",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2017_Mitsubishi_Lancer_2.4_ES_AWC%2C_front_left_side.jpg/280px-2017_Mitsubishi_Lancer_2.4_ES_AWC%2C_front_left_side.jpg",
          "description": "The Mitsubishi Lancer is a compact car produced by the Japanese manufacturer Mitsubishi since 1973.",
          "production": "1973–present"
        },
        {
          "title": "Volvo V70",
          "href": "https://en.wikipedia.org/wiki/Volvo_V70",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Volvo_V70_III_20090905_front.JPG/280px-Volvo_V70_III_20090905_front.JPG",
          "description": "The Volvo V70 is an executive car manufactured and marketed by Volvo Cars from 1996 to 2016 across three generations.The name V70 combines the letter V, standing for versatility,[1][2] and 70, denoting relative platform size[3] (i.e., a V70 is larger than a V40, but smaller than a V90).",
          "production": "1996–2016"
        },
        {
          "title": "Lamborghini Gallardo",
          "href": "https://en.wikipedia.org/wiki/Lamborghini_Gallardo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg/280px-Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg",
          "description": "The Lamborghini Gallardo (/ɡaɪˈjɑːrdoʊ/; Spanish: [ɡaˈʎaɾðo]) is a sports car built by the Italian automotive manufacturer Lamborghini from 2003 to 2013. It is Lamborghini's first best-selling model with 14,022 built throughout its production run.[7] Named after a famous breed of fighting bull,[8]  the V10 powered Gallardo has been Lamborghini's sales leader and stable-mate to a succession of V12 flagship models—first to the  Murciélago (4,099 built between 2001 and 2011), then to the current flagship, the Aventador. On 25 November 2013, the last Gallardo was rolled off the production line. The Gallardo was replaced by the Huracán in 2014.",
          "production": "2004–13"
        },
        {
          "title": "Lincoln Town Car",
          "href": "https://en.wikipedia.org/wiki/Lincoln_Town_Car",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lincoln_Town_Car_.jpg/280px-Lincoln_Town_Car_.jpg",
          "description": "The Lincoln Town Car is a model line of full-size luxury sedans that was marketed by the Lincoln division of the American automaker Ford Motor Company from 1980 to 2011. Taking its nameplate from a limousine body style, the Town Car first appeared in 1959 as a sub-model of the Continental Mark IV, returning as a Lincoln Continental trim line from 1969 to 1980. Following a revision of the Lincoln model line, the Lincoln Town Car became a distinct product line for 1981, replacing the Continental.",
          "production": "1981–2011"
        },
        {
          "title": "Hyundai Elantra",
          "href": "https://en.wikipedia.org/wiki/Hyundai_Elantra",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2019_Hyundai_Elantra_Limited_%28AD_facelift%29_front_NYIAS_2019.jpg/280px-2019_Hyundai_Elantra_Limited_%28AD_facelift%29_front_NYIAS_2019.jpg",
          "description": "The Hyundai Elantra (Korean: 현대 엘란트라), or Hyundai Avante (현대 아반떼) in South Korea, is a compact car produced by the South Korean manufacturer Hyundai since 1990.",
          "production": "1990–present"
        },
        {
          "title": "BMW i8",
          "href": "https://en.wikipedia.org/wiki/BMW_i8",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/280px-2016_BMW_i8.jpg",
          "description": "The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW's electric fleet \"Project i\" being marketed as a new sub-brand, BMW i. The 2015 model year BMW i8 has a 7.1 kWh lithium-ion battery pack that delivers an all-electric range of 37 km (23 mi) under the New European Driving Cycle. Under the United States Environmental Protection Agency cycle, the range in EV mode is 24 km (15 mi) with a small amount of gasoline consumption. Its design is heavily influenced by the BMW M1 Homage concept car, which in turn pays homage to BMW's last production mid-engined sports car prior to the i8: the BMW M1. BMW will cease the production of the BMW i8 in April 2020.[10][11]",
          "production": "2014–present"
        },
        {
          "title": "Renault Zoe",
          "href": "https://en.wikipedia.org/wiki/Renault_Zoe",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2018_Renault_ZOE.jpg/280px-2018_Renault_ZOE.jpg",
          "description": "The Renault Zoe (sometimes stylized as ZOE and pronounced as \"Zoé\") is a five-door supermini electric car produced by the French manufacturer Renault. Renault originally unveiled, under the Zoe name, a number of different concept cars. Initially in 2005 as the Zoe City Car and later as the Zoe Z.E. electric concept was shown in two different versions in 2009 and 2010 under the Renault Z.E. name. A production ready version of the Zoe was shown at the 2012 Geneva Motor Show.[6]",
          "production": "2012–present"
        },
        {
          "title": "Chevrolet Malibu",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Malibu",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2017_Chevrolet_Malibu_%28E2XX%29_front_3.25.18.jpg/280px-2017_Chevrolet_Malibu_%28E2XX%29_front_3.25.18.jpg",
          "description": "The Chevrolet Malibu is a mid-size car manufactured and marketed by Chevrolet from 1964 to 1983 and since 1997. The Malibu began as a trim-level of the Chevrolet Chevelle, becoming its own model line in 1978. Originally a rear-wheel-drive intermediate, GM revived the Malibu nameplate as a front-wheel-drive car in 1997.",
          "production": "1964–present"
        },
        {
          "title": "Saab 900",
          "href": "https://en.wikipedia.org/wiki/Saab_900",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Saab_900i_16v_285.jpg/280px-Saab_900i_16v_285.jpg",
          "description": "The Saab 900 is a mid-sized automobile which was produced by Saab from 1978 until 1998 in two generations. The first generation from 1978 to 1993 is known as the \"classic\" and the generation from 1994 to 1998 is known as the \"new generation\".",
          "production": "1978–93"
        },
        {
          "title": "Volkswagen Jetta",
          "href": "https://en.wikipedia.org/wiki/Volkswagen_Jetta",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/2019_Volkswagen_Jetta_front_7.11.18.jpg/280px-2019_Volkswagen_Jetta_front_7.11.18.jpg",
          "description": "The Volkswagen Jetta (listen (help·info)) is a compact car/small family car manufactured and marketed by Volkswagen since 1979. Positioned to fill a sedan niche above the firm's Golf hatchback, it has been marketed over seven generations, variously as the Atlantic, Vento, Bora, City Jetta, Jetta City, GLI, Jetta, Clasico,  and Sagitar (in China).",
          "production": "1980–present"
        },
        {
          "title": "Ford Explorer",
          "href": "https://en.wikipedia.org/wiki/Ford_Explorer",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/95-98_Ford_Explorer.jpg/280px-95-98_Ford_Explorer.jpg",
          "description": "The Ford Explorer is a range of SUVs manufactured by Ford Motor Company. Introduced in 1990 for the 1991 model year, the Explorer was the first four-door SUV produced by Ford, replacing the two-door Bronco II. Six generations of the Explorer have been produced. The sixth generation  was unveiled in January 2019. As with the Ranger, the Explorer derives its name from a trim package used on the F-Series, used from 1967 to 1986. Originally slotted below the full-size Bronco in the Ford truck line, the current Explorer is slotted between the Edge and standard-wheelbase Expedition.",
          "production": "1990–present"
        },
        {
          "title": "Rover 75",
          "href": "https://en.wikipedia.org/wiki/Rover_75",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rover_75.jpg/280px-Rover_75.jpg",
          "description": "The Rover 75 is an executive car that was produced by British car manufacturers Rover Group and later by MG Rover, under the Rover marque. The Rover 75 was available with front-wheel drive in either a saloon or estate body style and latterly, in long-wheelbase form and a rear-wheel drive, V8-engined specification. In 2001, an MG-branded version was launched by MG Rover, called the MG ZT.",
          "production": "1999–2005"
        },
        {
          "title": "Volkswagen Golf",
          "href": "https://en.wikipedia.org/wiki/Volkswagen_Golf",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2017_Volkswagen_Golf_%285G_MY17%29_1.4_SE_TSI_hatchback_%282017-08-30%29.jpg/280px-2017_Volkswagen_Golf_%285G_MY17%29_1.4_SE_TSI_hatchback_%282017-08-30%29.jpg",
          "description": "The Volkswagen Golf (listen (help·info)) is a compact car produced by the German automotive manufacturer Volkswagen since 1974, marketed worldwide across seven generations, in various body configurations and under various nameplates – such as the Volkswagen Rabbit in the United States and Canada (Mk1 and Mk5), and as the Volkswagen Caribe in Mexico (Mk1).",
          "production": "1974–present"
        },
        {
          "title": "Nissan Leaf",
          "href": "https://en.wikipedia.org/wiki/Nissan_Leaf",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2018_Nissan_Leaf_Tekna_Front.jpg/280px-2018_Nissan_Leaf_Tekna_Front.jpg",
          "description": "The Nissan Leaf (Japanese: 日産・リーフ, Nissan Rīfu) is a compact five-door hatchback electric car manufactured by Nissan, introduced in Japan and the United States in December 2010, and now in its second generation. The U.S. Environmental Protection Agency (EPA) official range for the 2018 model year Leaf is 243 km (151 miles) on a full battery charge.",
          "production": "2010–present"
        },
        {
          "title": "Nissan Sunny",
          "href": "https://en.wikipedia.org/wiki/Nissan_Sunny",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2002-2004_NISSAN_SUNNY.jpg/280px-2002-2004_NISSAN_SUNNY.jpg",
          "description": "The Nissan Sunny is an automobile built by the Japanese automaker Nissan from 1966 to 2006. In the early 1980s, the brand changed from Datsun to Nissan in line with other models by the company. Although production of the Sunny in Japan ended in 2006, the name remains in use in the Chinese market for a rebadged version of the Nissan Latio.",
          "production": "1966–present"
        },
        {
          "title": "Lexus LFA",
          "href": "https://en.wikipedia.org/wiki/Lexus_LFA",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Lexus_LFA_Yellow_Las_Vegas.jpg/280px-Lexus_LFA_Yellow_Las_Vegas.jpg",
          "description": "The Lexus LFA (Japanese: レクサス・LFA, Rekusasu LFA) is a two-seat sports car manufactured by Lexus, the luxury car division of Toyota. It is the second model in the F marque line of performance vehicles from Lexus, following the IS F. Three concept versions were unveiled, each debuting at the North American International Auto Show with the LF-A designation as part of the LF Series concept line. After beginning development in the early 2000s (with a codename of TXS), the first LF-A concept premiered in 2005, followed in 2007 by a second concept with a more completely furnished interior and exterior. The third version of the LF-A, featuring a roadster bodystyle premiered in 2008. The production model, trademarked LFA,[2] was unveiled at the Tokyo Motor Show in October 2009.[3]",
          "production": "2010–2012"
        },
        {
          "title": "Toyota Camry",
          "href": "https://en.wikipedia.org/wiki/Toyota_Camry",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg/280px-2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg",
          "description": "The Toyota Camry (/ˈkæmri/; Japanese: トヨタ・カムリ Toyota Kamuri) is an automobile sold internationally by the Japanese manufacturer Toyota since 1982, spanning multiple generations. Originally compact in size (narrow-body), later Camry models have grown to fit the mid-size classification (wide-body)—although the two sizes co-existed in the 1990s. Since the release of the wide-bodied versions, Camry has been extolled by Toyota as the firm's second \"world car\" after the Corolla. In Japan, Camry is exclusive to Toyota Corolla Store retail dealerships. Narrow-body cars also spawned a rebadged sibling in Japan, the Toyota Vista (トヨタ・ビスタ)—also introduced in 1982 and sold at Toyota Vista Store locations. Diesel fuel versions have previously retailed at Toyota Diesel Store.",
          "production": "1983–present"
        },
        {
          "title": "SEAT Ibiza",
          "href": "https://en.wikipedia.org/wiki/SEAT_Ibiza",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2018_SEAT_Ibiza_SE_Technology_MPi_1.0_Front.jpg/280px-2018_SEAT_Ibiza_SE_Technology_MPi_1.0_Front.jpg",
          "description": "The SEAT Ibiza is a supermini car manufactured by Spanish car manufacturer SEAT since 1984. It is SEAT's best-selling car.[2] The Ibiza is named after the Spanish island of Ibiza, and it is the second SEAT model to be named after a Spanish city, after the SEAT Ronda.",
          "production": "1984–present"
        },
        {
          "title": "Renault Clio",
          "href": "https://en.wikipedia.org/wiki/Renault_Clio",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Renault_Clio_V_Genf_2019_1Y7A5590.jpg/280px-Renault_Clio_V_Genf_2019_1Y7A5590.jpg",
          "description": "The Renault Clio is a supermini car (B-segment), produced by the French automobile manufacturer Renault. It was launched in 1990, and was in its fourth generation in 2012. The Clio has had substantial critical and commercial success, being consistently one of Europe's top-selling cars since its launch,[1] and it is largely credited with restoring Renault's reputation and stature after a difficult second half of the 1980s. The Clio is one of only two cars, the other being the Volkswagen Golf, to have been voted European Car of the Year twice, in 1991 and 2006.",
          "production": "1991–present"
        },
        {
          "title": "Chevrolet Cruze",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Cruze",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/2017_Chevrolet_Cruze_LT_front_5.26.18.jpg/280px-2017_Chevrolet_Cruze_LT_front_5.26.18.jpg",
          "description": "The Chevrolet Cruze is a compact car that has been made by the Chevrolet division of General Motors since 2008. The nameplate has been used previously in Japan, for a version of a subcompact hatchback car produced under a joint venture with Suzuki from 2001 to 2007, and was based on the Suzuki Ignis.",
          "production": "2008–present"
        },
        {
          "title": "Mazda Familia",
          "href": "https://en.wikipedia.org/wiki/Mazda_Familia",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/2003_Mazda_323_%28BJ_II%29_Proteg%C3%A9_Shades_sedan_%282015-08-07%29_01.jpg/280px-2003_Mazda_323_%28BJ_II%29_Proteg%C3%A9_Shades_sedan_%282015-08-07%29_01.jpg",
          "description": "The Mazda Familia, also marketed prominently as the Mazda 323 and Mazda Protegé, is a small family car that was manufactured by Mazda between 1963 and 2003. The Familia line was replaced by the Mazda3/Axela for 2004.",
          "production": "1963–2003"
        },
        {
          "title": "Chevrolet Suburban",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Suburban",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/2015_Chevrolet_Suburban_LT_in_black%2C_front_left_side_view.jpg/280px-2015_Chevrolet_Suburban_LT_in_black%2C_front_left_side_view.jpg",
          "description": "The Chevrolet Suburban is a full-size SUV from Chevrolet. It is the longest continuous use automobile nameplate in production, starting in 1934 for the 1935 U.S. model year, and has traditionally been one of General Motors' most profitable vehicles.[1] The 1935 first generation Carryall Suburban was one of the first production all-metal bodied station wagons.[2]",
          "production": "1935–present"
        },
        {
          "title": "Mercury Bobcat",
          "href": "https://en.wikipedia.org/wiki/Mercury_Bobcat",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Pinto.jpg/280px-Ford_Pinto.jpg",
          "description": "The Ford Pinto is a subcompact car that was manufactured and marketed by Ford Motor Company in North America, sold from the 1971 to the 1980 model years.  The smallest American Ford vehicle since 1907, the Pinto was the first subcompact vehicle produced by Ford in North America.",
          "production": "1974-1980"
        },
        {
          "title": "Honda Prelude",
          "href": "https://en.wikipedia.org/wiki/Honda_Prelude",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/1998_Honda_Prelude_VTi_Automatic_2.2_Front.jpg/280px-1998_Honda_Prelude_VTi_Automatic_2.2_Front.jpg",
          "description": "The Honda Prelude is a  sports car which was produced by Japanese car manufacturer Honda from 1978 until 2001. The two-door coupe was loosely derived from the Honda Accord and spanned five generations. The Prelude was used by Honda to introduce the Japanese Honda retail sales chain Honda Verno, with the international release of the model following shortly after.",
          "production": "1978–2001"
        },
        {
          "title": "Jeep CJ",
          "href": "https://en.wikipedia.org/wiki/Jeep_CJ",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jeep-CJ.jpg/280px-Jeep-CJ.jpg",
          "description": "The Jeep CJ models are both a series and a range of small, open-bodied off-road vehicles and compact pickup trucks, built and sold by several successive incarnations of the Jeep automobile marque from 1945 to 1986. The 1945 Willys Jeep was the world's first mass-produced civilian four-wheel drive car.",
          "production": "1944–86"
        },
        {
          "title": "Holden Commodore",
          "href": "https://en.wikipedia.org/wiki/Holden_Commodore",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/2018_Holden_Commodore_%28ZB_MY18%29_LT_sedan_%282018-08-06%29_01.jpg/280px-2018_Holden_Commodore_%28ZB_MY18%29_LT_sedan_%282018-08-06%29_01.jpg",
          "description": "The Holden Commodore is a medium to large sedan sold by Holden since 1978. It was manufactured from 1978 to 2017 in Australia and from 1979 to 1990 in New Zealand, with production in Australia ending on 20 October 2017.[1] From 2018 the Holden Commodore is fully imported from Opel Germany, and is a badge-engineered Opel Insignia.",
          "production": "1978–present"
        },
        {
          "title": "BMW i3",
          "href": "https://en.wikipedia.org/wiki/BMW_i3",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2018_BMW_i3_facelift_%281%29.jpg/280px-2018_BMW_i3_facelift_%281%29.jpg",
          "description": "The BMW i3 is a B-class, high-roof hatchback manufactured and marketed by BMW with an electric powertrain using rear wheel drive via a single-speed transmission and an underfloor Li-ion battery pack and an optional range-extending gasoline engine. The i3 was BMW's first mass-produced zero emissions vehicle and was launched as part of BMW's electric vehicle BMW i sub-brand.[13]",
          "production": "2013–present"
        },
        {
          "title": "Honda Fit",
          "href": "https://en.wikipedia.org/wiki/Honda_Fit",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2018_Honda_Jazz_%28GK5_MY18%29_VTi-S_hatchback_%282018-08-06%29_01.jpg/280px-2018_Honda_Jazz_%28GK5_MY18%29_VTi-S_hatchback_%282018-08-06%29_01.jpg",
          "description": "The Honda Fit (Japanese: ホンダ・フィット), also marketed as the Honda Jazz (Japanese: ホンダ・ジャズ), is a five-door B-segment supermini manufactured and marketed by Honda since 2001 and now in its third generation. Marketed worldwide and manufactured at ten plants in eight countries,[1] sales reached almost 5 million by mid-2013.[2]",
          "production": "2001–present"
        },
        {
          "title": "Chevrolet Impala",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Impala",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/2014_Chevy_Impala_Europe.jpg/280px-2014_Chevy_Impala_Europe.jpg",
          "description": "The Chevrolet Impala (/ɪmˈpælə, -ˈpɑːlə/) is a full-size car built by Chevrolet for model years 1958 to 1985, 1994 to 1996, and since 2000 onwards. The Impala is Chevrolet's popular flagship passenger car and is generally among the better selling American made automobiles in the United States.[4][5]",
          "production": "1958–present"
        },
        {
          "title": "Ford Fiesta",
          "href": "https://en.wikipedia.org/wiki/Ford_Fiesta",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2017_Ford_Fiesta_Zetec_Turbo_1.0_Front.jpg/280px-2017_Ford_Fiesta_Zetec_Turbo_1.0_Front.jpg",
          "description": "The Ford Fiesta is a supermini marketed by Ford since 1976 over seven generations. It has been manufactured in the United Kingdom, Germany, Spain, Australia, Brazil, Argentina, Venezuela, Mexico, China, India, Thailand, and South Africa.",
          "production": "1976–present"
        },
        {
          "title": "Honda Accord",
          "href": "https://en.wikipedia.org/wiki/Honda_Accord",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2018_Honda_Accord_front_4.1.18.jpg/280px-2018_Honda_Accord_front_4.1.18.jpg",
          "description": "The Honda Accord (Japanese: ホンダ・アコード, Honda Akōdo) /əˈkɔːrd/ is a series of automobiles manufactured by Honda since 1976, best known for its four-door sedan variant, which has been one of the best-selling cars in the United States since 1989. The Accord nameplate has been applied to a variety of vehicles worldwide, including coupes, station wagons, hatchbacks and a Honda Crosstour crossover.",
          "production": "1976–present"
        },
        {
          "title": "Tesla Model S",
          "href": "https://en.wikipedia.org/wiki/Tesla_Model_S",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/280px-2018_Tesla_Model_S_75D.jpg",
          "description": "The Tesla Model S is an all-electric five-door liftback sedan,  produced by Tesla, Inc., and introduced on June 22, 2012.[10] As of April 23, 2019, the Model S Long Range has an EPA range of 370 miles (600 km), higher than any other electric car.[11][12]",
          "production": "2012–present"
        },
        {
          "title": "Chevrolet Volt",
          "href": "https://en.wikipedia.org/wiki/Chevrolet_Volt",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/DCA_06_2012_Chevy_Volt_4035.JPG/280px-DCA_06_2012_Chevy_Volt_4035.JPG",
          "description": "The Chevrolet Volt is a plug-in hybrid car manufactured by General Motors, also marketed in rebadged variants as the Holden Volt in Australia and New Zealand, Buick Velite 5 in China, and with a different fascia as the Vauxhall Ampera in the United Kingdom and as the Opel Ampera in the remainder of Europe. Volt production ended in February 2019.[1][13]",
          "production": "2010–present"
        }
      ]
    }
  };