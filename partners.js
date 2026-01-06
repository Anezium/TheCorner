// TheCorner Partners Database
// Last updated: 2026-01-06
// Scraped from https://clients.boursobank.com/thecorner/toutes-les-offres
const THECORNER_BASE_URL = "https://clients.boursobank.com";

const THECORNER_PARTNERS = {
  "abritel.fr": [
    { name: "Abritel", discount: "-4%", type: "Cashback", url: "/thecorner/produit/d449c208-9232-11eb-b4e7-000c292db615" }
  ],
  "adidas.fr": [
    { name: "adidas", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/432c063c-2312-11ef-bbd3-005056960114" }
  ],
  "alamo.fr": [
    { name: "Alamo – Enterprise – National", discount: "-5% à -15%", type: "Remise immédiate", url: "/thecorner/produit/cce81d63-60ae-11eb-92f5-000c29eac91f" }
  ],
  "enterprise.fr": [
    { name: "Alamo – Enterprise – National", discount: "-5% à -15%", type: "Remise immédiate", url: "/thecorner/produit/cce81d63-60ae-11eb-92f5-000c29eac91f" }
  ],
  "nationalcar.fr": [
    { name: "Alamo – Enterprise – National", discount: "-5% à -15%", type: "Remise immédiate", url: "/thecorner/produit/cce81d63-60ae-11eb-92f5-000c29eac91f" }
  ],
  "alinea.com": [
    { name: "Alinéa", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/93fdf370-55c7-11f0-b3ec-005056aed769" }
  ],
  "alpiq.fr": [
    { name: "Alpiq", discount: "-10%", type: "Remise immédiate", url: "/thecorner/produit/596a0f5c-5663-11f0-b3ec-005056aed769" }
  ],
  "laredoute.fr": [
    { name: "AMPM", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/96f31bcf-ed21-11ee-93b1-005056960114" },
    { name: "La Redoute", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/b524ddf8-ec3f-11ee-93b1-005056960114" }
  ],
  "apple.com": [
    { name: "Apple", discount: "-4%", type: "Bon d'achat", url: "/thecorner/produit/6bc2bb95-568f-11f0-b3ec-005056aed769" }
  ],
  "aquariumdeparis.com": [
    { name: "Aquarium de Paris", discount: "-15% et -18%", type: "Bon d'achat", url: "/thecorner/produit/64f14e5e-6edb-4ccb-be73-1c5124ed740e" }
  ],
  "asos.com": [
    { name: "Asos", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/2c35263c-1814-11ef-b248-005056aed769" }
  ],
  "aubert.com": [
    { name: "Aubert", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/00a0ee7e-391e-11ef-976e-005056aed769" }
  ],
  "auchan.fr": [
    { name: "Auchan", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/cefee36f-f282-11ee-b248-005056aed769" }
  ],
  "ayvens.com": [
    { name: "Ayvens", discount: "-10% ou -1000€", type: "Remise immédiate", url: "/thecorner/produit/95d7325b-2ff1-11eb-92f5-000c29eac91f" }
  ],
  "azureva-vacances.com": [
    { name: "Azureva", discount: "-10% à -25%", type: "Remise immédiate", url: "/thecorner/produit/121d6d66-1dd3-11eb-92f5-000c29eac91f" }
  ],
  "babbel.com": [
    { name: "Babbel", discount: "-20% à -30%", type: "Remise immédiate", url: "/thecorner/produit/babbel-placeholder" }
  ],
  "belambra.fr": [
    { name: "Belambra", discount: "-6% à -26%", type: "Remise immédiate", url: "/thecorner/produit/437d0db2-1dd4-11eb-92f5-000c29eac91f" }
  ],
  "bonoboplanet.com": [
    { name: "Bonobo", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/820bf1c1-fd7f-11ee-b248-005056aed769" }
  ],
  "boohooman.com": [
    { name: "BOOHOO MAN", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/75d3adf3-1812-11ef-b248-005056aed769" }
  ],
  "bosch-home.fr": [
    { name: "Bosch", discount: "Jusqu'à -30%", type: "Remise immédiate", url: "/thecorner/produit/a31bf893-3175-11f0-b048-005056960114" }
  ],
  "breal.net": [
    { name: "Bréal", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/1a5f7706-fd54-11ee-b248-005056aed769" }
  ],
  "bricocash.fr": [
    { name: "Brico Cash", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/7721148e-ec3f-11ee-93b1-005056960114" }
  ],
  "bricomarche.com": [
    { name: "Bricomarché", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/16cdeaa7-fd8f-11ee-b248-005056aed769" }
  ],
  "bricorama.fr": [
    { name: "Bricorama", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/dd975f50-ed17-11ee-93b1-005056960114" }
  ],
  "but.fr": [
    { name: "BUT", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/231ea022-0e35-11f0-b048-005056960114" }
  ],
  "c-and-a.com": [
    { name: "C&A", discount: "-11%", type: "Bon d'achat", url: "/thecorner/produit/b1938d74-193c-11f0-b048-005056960114" }
  ],
  "cache-cache.fr": [
    { name: "Cache Cache", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/2ce56243-8c8d-11f0-b3ec-005056aed769" }
  ],
  "cafeyn.co": [
    { name: "Cafeyn", discount: "3 mois offerts", type: "Remise immédiate", url: "/thecorner/produit/e1c91014-5659-11ef-976e-005056aed769" }
  ],
  "camping-and-co.com": [
    { name: "Camping and Co", discount: "-8% à 10%", type: "Remise immédiate", url: "/thecorner/produit/59219c8c-e94b-11ef-8554-005056aed769" }
  ],
  "carrefour.fr": [
    { name: "Carrefour", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/a3a50a9a-f26d-11ee-b248-005056aed769" }
  ],
  "castorama.fr": [
    { name: "Castorama", discount: "-6%", type: "Bon d'achat", url: "/thecorner/produit/ffe3cfbf-96b1-11ef-8ef2-005056960114" }
  ],
  "cdiscount.com": [
    { name: "Cdiscount", discount: "-4%", type: "Cashback", url: "/thecorner/produit/d640af94-0bbb-11ef-b248-005056aed769" }
  ],
  "centerparcs.fr": [
    { name: "Center Parcs", discount: "-5% à -30%", type: "Remise immédiate", url: "/thecorner/produit/d638c5ce-1dd3-11eb-92f5-000c29eac91f" }
  ],
  "cgrcinemas.fr": [
    { name: "CGR Cinémas", discount: "7,70€", type: "Bon d'achat", url: "/thecorner/produit/82496d51-d998-11ef-8554-005056aed769" }
  ],
  "chateaudechantilly.com": [
    { name: "Château de Chantilly", discount: "-10% et -13%", type: "Bon d'achat", url: "/thecorner/produit/646b3af5-3d5d-11f0-b3ec-005056aed769" }
  ],
  "cinecheque.fr": [
    { name: "Cinéchèque", discount: "7,60€", type: "Bon d'achat", url: "/thecorner/produit/019c8a0e-1dea-11eb-92f5-000c29eac91f" }
  ],
  "cobac-parc.com": [
    { name: "Cobac Parc", discount: "-9%", type: "Bon d'achat", url: "/thecorner/produit/469ad07a-d328-11ef-8ef2-005056960114" },
    { name: "Cobac Parc + Aqua'Fun Park", discount: "-9% et -11%", type: "Bon d'achat", url: "/thecorner/produit/91056808-d326-11ef-8ef2-005056960114" }
  ],
  "conforama.fr": [
    { name: "Conforama", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/73a128d2-ed1c-11ee-93b1-005056960114" }
  ],
  "converse.com": [
    { name: "Converse", discount: "-6%", type: "Cashback", url: "/thecorner/produit/d02592b7-9906-11eb-b4e7-000c292db615" }
  ],
  "cultura.com": [
    { name: "Cultura", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/5e37deb2-323a-11ef-976e-005056aed769" }
  ],
  "cyrillus.fr": [
    { name: "Cyrillus", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/556c5422-5606-11ee-b1df-000c29eac91f" }
  ],
  "darty.com": [
    { name: "Darty", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/0f0686ab-e797-11ee-93b1-005056960114" }
  ],
  "decathlon.fr": [
    { name: "Decathlon", discount: "-4%", type: "Bon d'achat", url: "/thecorner/produit/ee1f0f6f-4f1b-11ef-976e-005056aed769" }
  ],
  "deezer.com": [
    { name: "Deezer Premium", discount: "-22% à -37%", type: "Bon d'achat", url: "/thecorner/produit/39db8962-e6c7-11ee-93b1-005056960114" }
  ],
  "deliveroo.fr": [
    { name: "Deliveroo", discount: "-4%", type: "Bon d'achat", url: "/thecorner/produit/6e9ec7a1-fb3e-11ee-b248-005056aed769" }
  ],
  "dpam.com": [
    { name: "Du Pareil au Même", discount: "-9%", type: "Bon d'achat", url: "/thecorner/produit/49327a83-ac4f-11ec-9245-000c29eac91f" }
  ],
  "ectorparking.com": [
    { name: "Ector", discount: "-10%", type: "Remise immédiate", url: "/thecorner/produit/08a2d258-3dcb-11ef-976e-005056aed769" }
  ],
  "episod.com": [
    { name: "EPISOD", discount: "-31% et -37%", type: "Bon d'achat", url: "/thecorner/produit/d649e52b-9219-11f0-bd6a-005056960114" }
  ],
  "eplaque.fr": [
    { name: "Eplaque", discount: "-15%", type: "Remise immédiate", url: "/thecorner/produit/5edb2fbe-1de9-11eb-92f5-000c29eac91f" }
  ],
  "eram.fr": [
    { name: "Eram", discount: "-6%", type: "Bon d'achat", url: "/thecorner/produit/027d0603-e220-11ef-8554-005056aed769" }
  ],
  "etam.com": [
    { name: "Etam", discount: "-15%", type: "Bon d'achat", url: "/thecorner/produit/cc106173-9dd8-11ef-8ef2-005056960114" }
  ],
  "europcar.fr": [
    { name: "Europcar", discount: "-10% à -20%", type: "Remise immédiate", url: "/thecorner/produit/e2d056bf-d4ac-11ef-8554-005056aed769" }
  ],
  "expedia.fr": [
    { name: "Expedia", discount: "-5%", type: "Cashback", url: "/thecorner/produit/8fc9e4c6-1dd2-11eb-92f5-000c29eac91f" }
  ],
  "fabrikusworld.com": [
    { name: "Fabrikus World", discount: "-8% et -10%", type: "Bon d'achat", url: "/thecorner/produit/2bc89af3-1f76-11f0-b048-005056960114" }
  ],
  "flixbus.fr": [
    { name: "Flixbus", discount: "-6%", type: "Bon d'achat", url: "/thecorner/produit/5e569974-914b-11ef-8ef2-005056960114" }
  ],
  "fnac.com": [
    { name: "Fnac", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/6d95438a-e124-11ee-93b1-005056960114" }
  ],
  "fram.fr": [
    { name: "Fram", discount: "-9%", type: "Remise immédiate", url: "/thecorner/produit/9d211968-3dd0-11ee-b1df-000c29eac91f" }
  ],
  "franceminiature.fr": [
    { name: "France Miniature", discount: "-48%", type: "Bon d'achat", url: "/thecorner/produit/e92321ea-e9b5-4d87-bb7e-042fdf961a4a" }
  ],
  "fulli.com": [
    { name: "FULLI Télépéage", discount: "14 mois offerts", type: "Remise immédiate", url: "/thecorner/produit/424bf84b-2a35-11ef-976e-005056aed769" }
  ],
  "galerieslafayette.com": [
    { name: "Galeries Lafayette", discount: "-6%", type: "Bon d'achat", url: "/thecorner/produit/43837f20-f34d-11ee-b248-005056aed769" }
  ],
  "garmin.com": [
    { name: "Garmin", discount: "Jusqu'à -25%", type: "Remise immédiate", url: "/thecorner/produit/6af1e9ee-1ea4-11eb-92f5-000c29eac91f" }
  ],
  "gemo.fr": [
    { name: "Gemo", discount: "-9%", type: "Bon d'achat", url: "/thecorner/produit/0d0ce33f-3210-11ef-976e-005056aed769" }
  ],
  "play.google.com": [
    { name: "Google Play", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/f38f7c79-660e-11f0-b3ec-005056aed769" }
  ],
  "aquarium-st-malo.com": [
    { name: "Grand Aquarium Saint Malo", discount: "-10% et -13%", type: "Bon d'achat", url: "/thecorner/produit/92a650f6-fb5d-4780-b7d9-1b075476e931" }
  ],
  "hm.com": [
    { name: "H&M", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/4725e3f6-c2d2-11eb-b4e7-000c292db615" }
  ],
  "hellofresh.fr": [
    { name: "HelloFresh", discount: "Jusqu'à -100€", type: "Remise immédiate", url: "/thecorner/produit/e13abe89-0ae9-11f0-b048-005056960114" }
  ],
  "hotels.com": [
    { name: "Hotels.com", discount: "-9%", type: "Cashback", url: "/thecorner/produit/ccf1f669-fc0a-40b8-9203-6e45790daebf" }
  ],
  "hp.com": [
    { name: "HP", discount: "-7% à -30%", type: "Remise immédiate", url: "/thecorner/produit/1c7fa6cd-1dd3-11eb-92f5-000c29eac91f" }
  ],
  "i-run.fr": [
    { name: "I-RUN", discount: "-5%", type: "Cashback", url: "/thecorner/produit/0b95bc5f-c1fb-11eb-b4e7-000c292db615" }
  ],
  "ikea.fr": [
    { name: "IKEA", discount: "-4%", type: "Bon d'achat", url: "/thecorner/produit/4826ae1e-0609-11ef-b248-005056aed769" }
  ],
  "interflora.fr": [
    { name: "Interflora", discount: "-15%", type: "Remise immédiate", url: "/thecorner/produit/e4928d4c-1dd3-11eb-92f5-000c29eac91f" }
  ],
  "jacadi.fr": [
    { name: "Jacadi", discount: "-12%", type: "Bon d'achat", url: "/thecorner/produit/9d34cc46-8f6f-11ee-bbaf-000c292db615" }
  ],
  "jardiland.com": [
    { name: "Jardiland", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/7f9ae3b0-f26a-11ee-b248-005056aed769" }
  ],
  "jardindacclimatation.fr": [
    { name: "Jardin d'Acclimatation", discount: "-22%", type: "Bon d'achat", url: "/thecorner/produit/bd008437-fb3a-11ef-8554-005056aed769" }
  ],
  "jettours.com": [
    { name: "Jet Tours", discount: "-9%", type: "Remise immédiate", url: "/thecorner/produit/36ff4ef9-005d-11ee-b1df-000c29eac91f" }
  ],
  "keepcool.fr": [
    { name: "Keep Cool", discount: "-35% à -49%", type: "Bon d'achat", url: "/thecorner/produit/6105cb01-0fed-11ec-a5ef-000c29eac91f" }
  ],
  "kinepolis.fr": [
    { name: "Kinepolis", discount: "Prix réduit", type: "Bon d'achat", url: "/thecorner/produit/1be3e2cf-362e-4472-9227-cdf0efcf6b9f" }
  ],
  "king-jouet.com": [
    { name: "King Jouet", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/3491ea92-f8d7-11ee-b248-005056aed769" }
  ],
  "lorangebleue.fr": [
    { name: "L'Orange Bleue", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/1ca1fafb-759a-11ef-8ef2-005056960114" }
  ],
  "cite-espace.com": [
    { name: "La Cité de l'Espace", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/f6526524-d8ae-11ef-8554-005056aed769" }
  ],
  "lagranderecre.fr": [
    { name: "La Grande Récré", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/a189cc7f-3b08-11eb-92f5-000c29eac91f" }
  ],
  "lastminute.com": [
    { name: "lastminute.com", discount: "-6%", type: "Bon d'achat", url: "/thecorner/produit/d1e84a7e-7ee5-11ee-bbaf-000c292db615" }
  ],
  "lepermislibre.fr": [
    { name: "lepermislibre - Code", discount: "4,99€", type: "Remise immédiate", url: "/thecorner/produit/e5939090-1de5-11eb-92f5-000c29eac91f" },
    { name: "lepermislibre - Code+examen", discount: "31,99€", type: "Remise immédiate", url: "/thecorner/produit/679287f2-1132-11f0-b048-005056960114" },
    { name: "lepermislibre - Permis", discount: "-10%", type: "Remise immédiate", url: "/thecorner/produit/ddacc735-1de5-11eb-92f5-000c29eac91f" }
  ],
  "leroymerlin.fr": [
    { name: "Leroy Merlin", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/dfe41fe4-f267-11ee-b248-005056aed769" }
  ],
  "forest-hill.fr": [
    { name: "Les Clubs Forest Hill", discount: "-30%", type: "Bon d'achat", url: "/thecorner/produit/2b3e3050-6c44-449b-aa8e-6a58a38d8800" }
  ],
  "gentlemen-demenagement.com": [
    { name: "Les Gentlemen du Déménagement", discount: "-10%", type: "Remise immédiate", url: "/thecorner/produit/a498d5b5-1de8-11eb-92f5-000c29eac91f" }
  ],
  "magasins-u.com": [
    { name: "Magasins U", discount: "-4%", type: "Bon d'achat", url: "/thecorner/produit/835bbb8e-c5a3-11ee-93b1-005056960114" }
  ],
  "maisonsdumonde.com": [
    { name: "Maisons du Monde", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/1bec20e7-f4f1-11ef-8554-005056aed769" }
  ],
  "marionnaud.fr": [
    { name: "Marionnaud", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/24f9c967-1dd4-11eb-92f5-000c29eac91f" }
  ],
  "megarama.fr": [
    { name: "Megarama", discount: "7,50€", type: "Bon d'achat", url: "/thecorner/produit/8ecb2af1-63b9-420e-bde5-bf117ee88afa" }
  ],
  "merdesable.fr": [
    { name: "Mer de sable", discount: "-24%", type: "Bon d'achat", url: "/thecorner/produit/712eeebd-d4e9-11ef-8554-005056aed769" }
  ],
  "misterfly.com": [
    { name: "MisterFly", discount: "Jusqu'à -9%", type: "Remise immédiate", url: "/thecorner/produit/11203122-1f50-11ef-bbd3-005056960114" }
  ],
  "mk2.com": [
    { name: "MK2", discount: "8,40€", type: "Bon d'achat", url: "/thecorner/produit/00370df4-0bbf-11f0-b048-005056960114" }
  ],
  "mmv.fr": [
    { name: "MMV", discount: "-8% à -25%", type: "Remise immédiate", url: "/thecorner/produit/5172d688-1dd4-11eb-92f5-000c29eac91f" }
  ],
  "mondialtourisme.fr": [
    { name: "Mondial Tourisme", discount: "-9%", type: "Remise immédiate", url: "/thecorner/produit/aaec027c-40d5-11ee-b1df-000c29eac91f" }
  ],
  "monoprix.fr": [
    { name: "Monoprix", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/c1a36117-f349-11ee-b248-005056aed769" }
  ],
  "grevin-paris.com": [
    { name: "Musée Grévin", discount: "-29%", type: "Bon d'achat", url: "/thecorner/produit/f662be57-fb5d-11ef-8554-005056aed769" }
  ],
  "natalys.com": [
    { name: "Natalys", discount: "-9%", type: "Bon d'achat", url: "/thecorner/produit/0627153b-ac4b-11ec-9245-000c29eac91f" }
  ],
  "natureetdecouvertes.com": [
    { name: "Nature & Découvertes", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/9e734c24-1069-11f0-b048-005056960114" }
  ],
  "nausicaa.fr": [
    { name: "Nausicaá", discount: "-16%", type: "Bon d'achat", url: "/thecorner/produit/9735f130-e544-11ef-8554-005056aed769" }
  ],
  "nespresso.com": [
    { name: "Nespresso", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/6f09d8c7-5337-11f0-b3ec-005056aed769" }
  ],
  "netski.com": [
    { name: "Netski", discount: "-10% à -15%", type: "Remise immédiate", url: "/thecorner/produit/dc2a376c-1dd4-11eb-92f5-000c29eac91f" }
  ],
  "nike.com": [
    { name: "Nike", discount: "-6% à -10%", type: "Cashback", url: "/thecorner/produit/4f0f1555-2296-11eb-92f5-000c29eac91f" }
  ],
  "nintendo.fr": [
    { name: "Nintendo", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/9c84eb71-21ea-11ec-a5ef-000c29eac91f" }
  ],
  "oceanopolis.com": [
    { name: "Océanopolis", discount: "-11% et -14%", type: "Bon d'achat", url: "/thecorner/produit/4b5a8da2-e49f-11ef-8554-005056aed769" }
  ],
  "odalys-vacances.com": [
    { name: "Odalys", discount: "-8% à -10%", type: "Remise immédiate", url: "/thecorner/produit/5def1511-1dd5-11eb-92f5-000c29eac91f" }
  ],
  "okaidi.fr": [
    { name: "Okaïdi", discount: "-12%", type: "Bon d'achat", url: "/thecorner/produit/3ec3d3b5-dfc3-11ef-8554-005056aed769" }
  ],
  "ovoyages.com": [
    { name: "Ovoyages", discount: "-9%", type: "Remise immédiate", url: "/thecorner/produit/44801080-0da7-11ed-ac5d-151e544e89c7" }
  ],
  "oxybul.com": [
    { name: "Oxybul", discount: "-12%", type: "Bon d'achat", url: "/thecorner/produit/14edc58a-113a-11ef-b248-005056aed769" }
  ],
  "parcasterix.fr": [
    { name: "Parc Astérix", discount: "-24%", type: "Bon d'achat", url: "/thecorner/produit/c88ce658-63bd-4572-8342-292ed8613a80" }
  ],
  "branfere.com": [
    { name: "Parc de Branféré", discount: "-15% et -20%", type: "Bon d'achat", url: "/thecorner/produit/9bf4fb45-d299-11ef-8ef2-005056960114" }
  ],
  "parcsaintecroix.com": [
    { name: "Parc Sainte Croix", discount: "-17% et -19%", type: "Bon d'achat", url: "/thecorner/produit/1e78abaa-ed42-11ef-8554-005056aed769" }
  ],
  "parc-spirou.com": [
    { name: "Parc Spirou", discount: "-10% et -11%", type: "Bon d'achat", url: "/thecorner/produit/d0e5148d-0b23-11f0-b048-005056960114" }
  ],
  "pathe.fr": [
    { name: "Pathé", discount: "8,99€", type: "Bon d'achat", url: "/thecorner/produit/1ddd8139-f5da-11ef-8554-005056aed769" }
  ],
  "philips-hue.com": [
    { name: "Philips Hue", discount: "-8%", type: "Cashback", url: "/thecorner/produit/7a530473-1c3d-11f0-b048-005056960114" }
  ],
  "planetesauvage.com": [
    { name: "Planète Sauvage", discount: "-12% et -18%", type: "Bon d'achat", url: "/thecorner/produit/d566d86c-f4c3-11ed-b1df-000c29eac91f" }
  ],
  "portaventuraworld.com": [
    { name: "Port Aventura World", discount: "Jusqu'à -25%", type: "Remise immédiate", url: "/thecorner/produit/0719f617-33bd-11ef-976e-005056aed769" }
  ],
  "primark.com": [
    { name: "Primark", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/72bfa09a-385b-11ef-976e-005056aed769" }
  ],
  "promosejours.com": [
    { name: "Promoséjours", discount: "-9%", type: "Remise immédiate", url: "/thecorner/produit/b6c91353-1dd4-11eb-92f5-000c29eac91f" }
  ],
  "promovacances.com": [
    { name: "Promovacances", discount: "-9%", type: "Remise immédiate", url: "/thecorner/produit/64184538-3cfd-11ee-b1df-000c29eac91f" }
  ],
  "rhinov.pro": [
    { name: "Rhinov", discount: "-15%", type: "Remise immédiate", url: "/thecorner/produit/0833e35f-19fc-11f0-b048-005056960114" }
  ],
  "rituals.com": [
    { name: "Rituals", discount: "-9%", type: "Bon d'achat", url: "/thecorner/produit/16d10585-3ae2-11f0-b3ec-005056aed769" }
  ],
  "safari-peaugres.com": [
    { name: "Safari de Peaugres", discount: "-15%", type: "Bon d'achat", url: "/thecorner/produit/10743915-d4c0-11ef-8554-005056aed769" }
  ],
  "samsung.com": [
    { name: "Samsung", discount: "Jusqu'à -40%", type: "Remise immédiate", url: "/thecorner/produit/6b89a8c5-8081-462e-ae43-36696756e644" }
  ],
  "sarenza.com": [
    { name: "Sarenza", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/45179230-849a-11ee-bbaf-000c292db615" }
  ],
  "selency.com": [
    { name: "Selency", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/4ba7e841-0609-11ef-b248-005056aed769" }
  ],
  "sergent-major.com": [
    { name: "Sergent Major", discount: "-9%", type: "Bon d'achat", url: "/thecorner/produit/29d5e318-a154-11ec-9245-000c29eac91f" }
  ],
  "showroomprive.com": [
    { name: "Showroom Privé", discount: "-5%", type: "Bon d'achat", url: "/thecorner/produit/f7f1c4e3-5080-11ee-b1df-000c29eac91f" }
  ],
  "siemens-home.bsh-group.com": [
    { name: "Siemens", discount: "Jusqu'à -30%", type: "Remise immédiate", url: "/thecorner/produit/29e48121-3187-11f0-b048-005056960114" }
  ],
  "store.playstation.com": [
    { name: "Sony PlayStation® Store", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/37db683c-21ec-11ec-a5ef-000c29eac91f" }
  ],
  "spartoo.com": [
    { name: "Spartoo", discount: "-15%", type: "Remise immédiate", url: "/thecorner/produit/519b31a0-7b62-11eb-92f5-000c29eac91f" }
  ],
  "spotify.com": [
    { name: "Spotify", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/75a3f3cd-c9bd-11ef-8ef2-005056960114" }
  ],
  "store.steampowered.com": [
    { name: "Steam", discount: "-4%", type: "Bon d'achat", url: "/thecorner/produit/05e88855-4e80-11ef-976e-005056aed769" }
  ],
  "strava.com": [
    { name: "Strava", discount: "-17% à -22%", type: "Bon d'achat", url: "/thecorner/produit/a2dd0247-4e8a-11ef-976e-005056aed769" }
  ],
  "swarovski.com": [
    { name: "Swarovski", discount: "-15%", type: "Bon d'achat", url: "/thecorner/produit/6ec2ee41-218c-11ef-bbd3-005056960114" }
  ],
  "terrabotanica.fr": [
    { name: "Terra Botanica", discount: "Jusqu'à -20%", type: "Bon d'achat", url: "/thecorner/produit/2f240b34-0bc2-11f0-b048-005056960114" }
  ],
  "thefork.fr": [
    { name: "TheFork", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/836e11c6-fd55-11ee-b248-005056aed769" }
  ],
  "truffaut.com": [
    { name: "Truffaut", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/56fad15a-f288-11ee-b248-005056aed769" }
  ],
  "ubereats.com": [
    { name: "Uber Eats", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/f1781072-f50f-11ef-8554-005056aed769" }
  ],
  "uber.com": [
    { name: "Uber One", discount: "Remise", type: "Remise immédiate", url: "/thecorner/produit/92de8325-7405-11ef-8ef2-005056960114" },
    { name: "Uber VTC", discount: "-7%", type: "Bon d'achat", url: "/thecorner/produit/a75d3150-f4ff-11ef-8554-005056aed769" }
  ],
  "ugc.fr": [
    { name: "UGC", discount: "Prix réduit", type: "Bon d'achat", url: "/thecorner/produit/84021016-2a8c-11f0-b048-005056960114" }
  ],
  "upway.fr": [
    { name: "Upway", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/2cc9f0d5-2cae-11f0-b048-005056960114" }
  ],
  "verisure.fr": [
    { name: "Verisure", discount: "Remise", type: "Remise immédiate", url: "/thecorner/produit/cc94d70d-1de6-11eb-92f5-000c292db615" }
  ],
  "vertbaudet.fr": [
    { name: "Vertbaudet", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/3687b15b-3239-11ef-976e-005056aed769" }
  ],
  "thalgo.fr": [
    { name: "Villa Thalgo", discount: "-20%", type: "Bon d'achat", url: "/thecorner/produit/7535124e-e942-4710-bc2c-91debe3a3c63" }
  ],
  "vtf-vacances.com": [
    { name: "VTF", discount: "-8% à -10%", type: "Remise immédiate", url: "/thecorner/produit/4b3283d5-513e-11ee-b1df-000c29eac91f" }
  ],
  "vulcania.com": [
    { name: "Vulcania", discount: "-11 à -23%", type: "Bon d'achat", url: "/thecorner/produit/37fb5804-eed4-11ef-8554-005056aed769" }
  ],
  "vvf.fr": [
    { name: "VVF Villages", discount: "-8% à -25%", type: "Remise immédiate", url: "/thecorner/produit/b96f3216-8e50-11ec-b4e7-000c292db615" }
  ],
  "walibi-rhonealpes.com": [
    { name: "Walibi Rhône-Alpes", discount: "-17%", type: "Bon d'achat", url: "/thecorner/produit/88ba0eb3-fb3d-11ef-8554-005056aed769" }
  ],
  "wonderbox.fr": [
    { name: "Wonderbox", discount: "-16%", type: "Bon d'achat", url: "/thecorner/produit/0914beb2-f883-11ed-b1df-000c29eac91f" }
  ],
  "thoiry.net": [
    { name: "Wow Safari Thoiry", discount: "-8% et -10%", type: "Bon d'achat", url: "/thecorner/produit/91f7efd8-6eb0-11f0-b3ec-005056aed769" }
  ],
  "xbox.com": [
    { name: "Xbox", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/f8e502a8-21ea-11ec-a5ef-000c29eac91f" }
  ],
  "yves-rocher.fr": [
    { name: "Yves Rocher", discount: "-10%", type: "Bon d'achat", url: "/thecorner/produit/65bac37d-1dd3-11eb-92f5-000c29eac91f" }
  ],
  "zalando.fr": [
    { name: "Zalando", discount: "-8%", type: "Bon d'achat", url: "/thecorner/produit/855a3998-1dd2-11eb-92f5-000c29eac91f" }
  ],
  "zoo-amneville.com": [
    { name: "Zoo d'Amnéville", discount: "-19%", type: "Bon d'achat", url: "/thecorner/produit/fb5c78cc-0f03-11f0-b048-005056960114" }
  ],
  "zoo-la-fleche.com": [
    { name: "Zoo de la flèche", discount: "-14% et -17%", type: "Bon d'achat", url: "/thecorner/produit/ad50b2eb-e4a2-11ef-8554-005056aed769" }
  ],
  "zoobeauval.com": [
    { name: "ZooParc de Beauval", discount: "-12%", type: "Bon d'achat", url: "/thecorner/produit/a787af5c-204a-11f0-b048-005056960114" }
  ]
};
