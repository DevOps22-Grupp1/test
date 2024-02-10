db.createUser({
    user: "sudo_admin",
    pwd: "password",
    roles: [
        {
            role: "readWrite",
            db: "allProducts",
        },
    ],
});

db.createCollection("products");
db.products.insertMany([
    {
        "id": 1,
        "order": "Celsius",
        "price": 12.99,
        "image": "https://m.media-amazon.com/images/I/8188PGnPg0L.jpg",
        "category": ["drinks"],
    },
    {
        "id": 2,
        "order": "Monster",
        "price": 14.99,
        "image": "https://i.pinimg.com/736x/87/36/35/873635abf5f51455f7b105ee2315f40c.jpg",
        "category": ["drinks"],
    },
    {
        "id": 3,
        "order": "Prime Hydration Drink Orange by Logan Paul & KSI",
        "price": 11.41,
        "image": "https://www.picclickimg.com/i64AAOSwKz1kIXDy/PRIME-HYDRATION-DRINK-Orange-Flavour-KSI.webp",
        "category": ["drinks"]
    },
    {
        "id": 4,
        "order": "RedBull",
        "price": 19.99,
        "image": "https://media.istockphoto.com/id/458735615/sv/foto/red-bull-can-in-ice.jpg?s=612x612&w=0&k=20&c=HmCogPnrPjsHW1g93HQs59p_uru_hBXK8D04DnaC3OM=",
        "category": ["drinks"],
    },
    {
        "id": 5,
        "order": "Great Northern Popcorn Popcornmaskin Little Bambino",
        "price": 14.99,
        "image": "https://www.hembiobutiken.se/images/prod/192760_2.jpg",
        "category": ["food-machine"],
    },
    {
        "id": 6,
        "order": "Kitchen Aid 4,8L - ARTISAN - RED",
        "price": 490.60,
        "image": "https://whirlpool-cdn.thron.com/delivery/public/thumbnail/whirlpool/pi-240352b9-0345-4027-95fb-0d7684c11d8e/sckne7/std/1000x1000/Kitchenaid_Food_processor_5KSM125EER_R_d_Profile.jpg?fill=zoom&fillcolor=rgba:255,255,255&scalemode=product&format=auto",
        "category": ["food-machine"]
    },
    {
        "id": 7,
        "order": "NOD Icecream machine 1,5 liter, BLACK",
        "price": 191.57,
        "image": "https://static.goshopping.dk/products/600/nod-ismaskine-1-5-liter-ice-1533w-59202-1.jpg",
        "category": ["food-machine"]
    },
    {
        "id": 8,
        "order": "Sage Belgian Waffeiron - The Smart Waffle",
        "price": 258.68,
        "image": "https://static.goshopping.dk/products/600/sage-bwm620-the-smart-waffle-vaffeljern-bwm-620-eu-5560-1.jpg",
        "category": ["food-machine"]
    },
    {
        "id": 9,
        "order": "AirPods Max",
        "price": 673.73,
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=470&hei=556&fmt=png-alpha&.v=1604022365000",
        "category": ["headphones"]
    },
    {
        "id": 10,
        "order": "Apple AirPods Pro",
        "price": 699.99,
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
        "category": ["headphones"],

    },
    {
        "id": 11,
        "order": "BANG & OLUFSEN BEOPLAY HX",
        "price": 497.57,
        "image": "https://images.hifiklubben.com/image/fb5b95c0-ae8b-4ed8-8c63-f6c893180b44/pdp_e/pdp_e.jpg",
        "category": ["headphones"]
    },
    {
        "id": 12,
        "order": "Bowers & Wilkins PX7",
        "price": 799.99,
        "image": "https://5.imimg.com/data5/ECOM/Default/2022/9/AU/PY/VI/149548967/px7s2-blue-001-500x500.png",
        "category": ["headphones"],
    },
    {
        "id": 13,
        "order": "Apple MacBook Pro space grey",
        "price": 1999.99,
        "image": "https://img2.cgtrader.com/items/3815465/ee734a0696/large/apple-macbook-pro-2021-14-inch-space-gray-3d-model-max-obj-3ds-fbx-c4d-lwo.jpg",
        "category": ["laptop"]
    },
    {
        "id": 14,
        "order": "Dell Precision 7540",
        "price": 718.32,
        "image": "https://files.refurbed.com/ii/dell-precision-7540-i7-9850h-15--1698214377.jpg?t=fitdesign&h=600&w=800",
        "category": ["laptop"]
    },
    {
        "id": 15,
        "order": "HP Envy Laptop 16-h1024no",
        "price": 1917.63,
        "image": "https://billigteknik.b-cdn.net/144782-home_default/hp-victus-hp-16-d0028no-16-full-hd-144-hz-i7-11-16gb-1tb-ssd-rtx-3060-6gb-win-11-demo.jpg",
        "category": ["laptop"]
    },
    {
        "id": 16,
        "order": "MSI GS65 Stealth Thin",
        "price": 499.99,
        "image": "https://www.pcworld.com/wp-content/uploads/2023/04/dsc04169_final-100796414-orig.jpg?quality=50&strip=all",
        "category": ["laptop"],
    },
    {
        "id": 17,
        "order": "LG G8 ThinQ",
        "price": 1499.99,
        "image": "https://dealy.com/se/472604-large_default/visa-skydd-lg-g8-thinq-mirror-och-konstlader.jpg",
        "category": ["mobile"],
    },
    {
        "id": 18,
        "order": "OnePlus Open",
        "price": 1499.99,
        "image": "https://image01.oneplus.net/ebp/202310/09/1-m00-47-77-ckvlh2ujwe2atshtaale9r-nxtm963.png?x-amz-process=image/format",
        "category": ["mobile"],
    },
    {
        "id": 19,
        "order": "Samsung Galaxy S10",
        "price": 999.99,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdS9tCPJnc-iiw3fMUCpq8eufGEP5rnOyE1A&usqp=CAU",
        "category": ["mobile"],
    },
    {
        "id": 20,
        "order": "Samsung Galaxy S23 Ultra 256GB - Phantom Black",
        "price": 1531.84,
        "image": "https://www.elon.se/media/catalog/product/cache/691c7eca49da472be3ce24c0b9b28e0b/2/0/207a246688_1_918d02f8bfced3dc9a556797166184b3.jpeg",
        "category": ["mobile"]
    },
    {
        "id": 21,
        "order": "BenQ TK700 4K",
        "price": 1332.33,
        "image": "https://m.media-amazon.com/images/I/51YY2jGmyZL._AC_SX679_.jpg",
        "category": ["projector"]
    },
    {
        "id": 22,
        "order": "Epson EH-TW9400",
        "price": 2699.99,
        "image": "https://actsessory.files.wordpress.com/2021/12/file3lysgbl6-copy.jpg?w=670&h=413",
        "category": ["projector"],
    },
    {
        "id": 23,
        "order": "NEBULA Capsule",
        "price": 335.64,
        "image": "https://m.media-amazon.com/images/I/71UVoEe03xL._AC_SX679_.jpg",
        "category": ["projector"]
    },
    {
        "id": 24,
        "order": "Optoma DX 322 Projektor",
        "price": 520.74,
        "image": "https://www.tradeinn.com/f/13826/138260153_3/optoma-dx-322-projektor.jpg",
        "category": ["projector"]
    },
    {
        "id": 25,
        "order": "Air Jordan 1 Retro High OG",
        "price": 2099.99,
        "image": "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c73107-7997-4d09-8893-04158b0e7757/air-jordan-1-retro-high-og-shoes-lZQrDX.png",
        "category": ["shoes"],
    },
    {
        "id": 26,
        "order": "GEQ Fish sandals",
        "price": 22.57,
        "image": "https://m.media-amazon.com/images/I/71j8kzR0AtL._AC_SY695_.jpg",
        "category": ["shoes"]
    },
    {
        "id": 27,
        "order": "Nike Air Max 90",
        "price": 1299.99,
        "image": "https://de.kicksmaniac.com/zdjecia/2019/02/20/302/26/NIKE_AIR_MAX_90_ESSENTIAL_WOLF_GREY-mini.jpg",
        "category": ["shoes"],
    },
    {
        "id": 28,
        "order": "Skyrunner Kangaroo shoes",
        "price": 239.34,
        "image": "https://m.media-amazon.com/images/I/61FTkuWktYL._AC_UF1000,1000_QL80_.jpg",
        "category": ["shoes"]
    },
    {
        "id": 29,
        "order": "Beam (gen 2)",
        "price": 460.00,
        "image": "https://hnsgsfp.imgix.net/9/images/detailed/70/Sonos_Beam_(Gen_2)_Soundbar_-_White_(IMG_1).jpg?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress",
        "category": ["sound"]
    },
    {
        "id": 30,
        "order": "Devialet Dione Opéra de Paris",
        "price": 3190.99,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQree3S76keglE8JsDkBWDJZHEiZG7Uq6ULyg&usqp=CAU",
        "category": ["sound"],
    },
    {
        "id": 31,
        "order": "Triangle Antal 40th Anniversary",
        "price": 3599.99,
        "image": "https://www.hificine.com/wp-content/uploads/2022/10/triangle-antal-40th.jpg",
        "category": ["sound"],
    },
    {
        "id": 32,
        "order": "Wharfedale EVO 4.1 (Walnut)",
        "price": 407.51,
        "image": "https://hifi-freaks.se/cdn/shop/files/EVO4.1StandardWalnut_3_b73afb43-daf6-419c-ae81-798c6b8a201c.jpg?v=1690213782&width=990",
        "category": ["sound"]
    },
    {
        "id": 33,
        "order": "Acer Iconia Tab P10 (64GB) ",
        "price": 200.17,
        "image": "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/410411-9-inch-screen-and-larger-tablets-mobile-data-wifi-acer-iconia-tab-p10-11-k5p5-10035922.jpg",
        "category": ["tablet"]
    },
    {
        "id": 34,
        "order": "Apple 2022 iPad",
        "price": 603.70,
        "image": "https://m.media-amazon.com/images/I/61ToKShnQvL._AC_SX679_.jpg",
        "category": ["tablet"]
    },
    {
        "id": 35,
        "order": "Samsung Galaxy Tab S8+",
        "price": 54.35,
        "image": "https://m.media-amazon.com/images/I/81yP9mS5H6L._AC_SX679_.jpg",
        "category": ["tablet"]
    },
    {
        "id": 36,
        "order": "Wacom Intuos M",
        "price": 178.54,
        "image": "https://cdn.inet.se/product/688x386/6611408_7.png",
        "category": ["tablet"],
    },
    {
        "id": 37,
        "order": "LG C2 65 OLED",
        "price": 3999.99,
        "image": "https://www.lg.com/se/images/TV/features/OLED2022/OLEDC2/TV-OLED-C2-02-intro-Mobile-v2.jpg",
        "category": ["tv"],
    },
    {
        "id": 38,
        "order": "Samsung QN90A Neo QLED",
        "price": 4999.99,
        "image": "https://reviewed-com-res.cloudinary.com/image/fetch/s--df1p37wd--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1616592529737/Samsung-QN90A-8.jpg",
        "category": ["tv"],
    },
    {
        "id": 39,
        "order": "Sony XBR-65A9G",
        "price": 5999.99,
        "image": "https://m.media-amazon.com/images/I/61baGFdOXfL._AC_UF1000,1000_QL80_.jpg",
        "category": ["tv"],
    },
    {
        "id": 40,
        "order": "TCL 75' 75C849 Mini LED 4K Google TV",
        "price": 1723.22,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/600156/tcl-75-c845-4k-miniled-smart-tv-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["tv"]
    },
    {
        "id": 41,
        "order": "Acer Predator Orion 3000",
        "price": 1999.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/acer-predator-orion-3000-gaming-dator-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["computer"]
    },
    {
        "id": 42,
        "order": "Apple iMac 27' M1 8GB/256GB",
        "price": 1699.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/600156/apple-imac-27-m1-8gb-256gb-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["computer"]
    },
    {
        "id": 43,
        "order": "HP Pavilion 15-eg0009no 15.6' bärbar dator",
        "price": 599.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/hp-pavilion-15-eg0009no-15-6-barbar-dator-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["computer"]
    },
    {
        "id": 44,
        "order": "Lenovo Legion 5 15IMH05H 15.6' bärbar dator",
        "price": 999.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/lenovo-legion-5-15imh05h-15-6-barbar-dator-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["computer"]
    },
    {
        "id": 45,
        "order": "Acer Predator Triton 500",
        "price": 1999.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/acer-predator-triton-500-gaming-dator-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["computer"]
    },
    {
        "id": 46,
        "order": "Apple Watch Series 7 41mm",
        "price": 499.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/apple-watch-series-7-41mm-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["watch"]
    },
    {
        "id": 47,
        "order": "Fitbit Versa 3",
        "price": 199.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/fitbit-versa-3-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["watch"]
    },
    {
        "id": 48,
        "order": "Garmin Venu 2S",
        "price": 399.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/garmin-venu-2s-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["watch"]
    },
    {
        "id": 49,
        "order": "Samsung Galaxy Watch4 Classic",
        "price": 499.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/samsung-galaxy-watch4-classic-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["watch"]
    },
    {
        "id": 50,
        "order": "Samsung Galaxy Watch4",
        "price": 399.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/samsung-galaxy-watch4-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["watch"]
    },
    {
        "id": 51,
        "order": "Apple iPhone 13 Pro 128GB",
        "price": 999.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/apple-iphone-13-pro-128gb-2023--pdp_zoom-3000--pdp_main-960.jpg", "category": ["mobile"]
    },
    {
        "id": 52,
        "order": "Crecent 24' 7-växlad",
        "price": 399.99,
        "image": "https://www.elgiganten.se/image/dv_web_D1800010021421037/300156/crecent-24-7-vaxlad-2023--pdp_zoom-3000--pdp_main-960.jpg",
        "category": ["bike"]
    },

]);
