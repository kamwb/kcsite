var app = new Vue({
    el: "#app",
    data: {
      males: [
        {
            name: "طارق محي الدين الزاكى",
            email: "tfarah@uj.edu..sa",
            img: "https://www.uj.edu.sa/Files/856006/Galleries/7292/56152_tariq.jpg",
            cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Tarig%20Elzaki..pdf",
            caption: "استاذ دكتور	",
        },
        {
            name: "موسى أحمد الجوارنة",
            email: "mabdalrahem@uj.edu.sa",
            img: "https://www.uj.edu.sa/Files/856006/Galleries/7292/56153_musa.png",
            cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Musa%20Jawarneh.pdf",
            caption: "استاذ مشارك",
        },
        {
            name: "عبدالباسط مريود",
            email: "aalnadif@uj.edu.sa",
            img: "",
            cv: "http://csa-kbio.uj.edu.sa/Files/856005/Files/154777_CV-Prof.%20Mariod.pdf",
            caption: "استاذ مساعد	",
        },
        {
            name: "محمود محمد امرير	",
            email: "mamrir@uj.edu.sa	",
            img: "https://www.uj.edu.sa/Files/856006/Galleries/7292/56154_mud.jpg",
            cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV_%20Mahmod%20Amrir.pdf",
            caption: "استاذ مساعد	",
        },
        {
          name: "مراد عبد العزيز الشامخ",
          email: "maalshmikh@uj.edu.sa",
          img: "https://www.uj.edu.sa/Files/856006/Galleries/7292/56155_murad.jpg",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Mourad-Chamekh.pdf",
          caption: "استاذ مساعد",
        },
        {
          name: "مجدى ضيف الله السلمي",
          email: "mdalsolami@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-MAJDI%20ALSULAMI.pdf",
          caption: "استاذ مساعد",
        },
        {
          name: "الطيب محمدعبد المحمود",
          email: "emabdelmohmoud@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-%20Eltaib.pdf",
          caption: "استاذ مساعد",
        },
        {
          name: "ياسر محمود عايد",
          email: "ymayed@uj.edu.sa",
          img: "https://www.uj.edu.sa/Files/856006/Galleries/7292/56156_yasser.jpg",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_cv%20yaaser.pdf",
          caption: "استاذ مساعد",
        },
        {
          name: "عبدالرحمن مبروك الثبيتى",
          email: "aalthobiti@uj.edu.sa",
          img: "https://www.uj.edu.sa/Files/856006/Galleries/7292/56157_abdul.jpg",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Althobiti,%20Abdulrahman.pdf",
          caption: "محاضر",
        },
        {
          name: "كامل عطاالله العنزي",
          email: "kaleneze@uj.edu.sa",
          img: "https://www.uj.edu.sa/Files/856006/Galleries/7292/56158_kamel.jpg",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Kamel%20Alanazi.pdf",
          caption: "محاضر",
        },
        {
          name: "محمد عبد الله باجابر",
          email: "mabajaber@uj.edu.sa",
          img: "https://www.uj.edu.sa/Files/856006/Galleries/7292/56159_muha.jpg",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV%20-Mohammed%20Bajaber.pdf",
          caption: "معيد",
        },
      ],
      females: [
        {
          name: "عواطف سالم الحويطي",
          email: "asalhowaity@uj.edu.sa 	",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-%20Awatif%20Alhowaity.pdf",
          caption: "استاذ مساعد",
        },
        {
          name: "منى مجذوب محمد",
          email: "mmahmed@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-MONA%20MAGZOUB.pdf",
          caption: "استاذ مساعد",
        },
        {
          name: "الاء محمود الشيخ",
          email: "amelshiekh@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV%20-Ala%20Elsheikh.pdf",
          caption: "استاذ مساعد",
        },
        {
          name: "صفاء عبد المعطي السلمي",
          email: "saralsulami@uj.edu.sa",
          img: "",
          cv: "",
          caption: "محاضر",
        },
        {
          name: "افتخار قابل السلمي",
          email: " ekalsulami@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Eftekhar%20Alsulami.pdf",
          caption: "محاضر",
        },
        {
          name: "خلود سليم مندورة",
          email: "kmandourh@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Kholod%20Mandourh.pdf",
          caption: "محاضر",
        },
        {
          name: "إيمان أحمد الحارثي",
          email: "ealharthy@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Eman%20Alharthy.pdf",
          caption: "محاضر",
        },
        {
          name: "أشواق حسن كاسب",
          email: "akaseb@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-ASHWAQ%20KASEB.pdf",
          caption: "محاضر",
        },
        {
          name: "رشا محمد الطويرقي",
          email: "rmaltowairqi@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_Rasha%20Altowairqi-CV.pdf",
          caption: "محاضر",
        },
        {
          name: "عائشة عبدالله البركاتي",
          email: "aaalbarakati1@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Aishah%20Albarakati.pdf",
          caption: "معيد",
        },
        {
          name: "مرام عمر الحجاجي",
          email: "malhajaji@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-%20Maram%20Omar%20Alhajaji%20(1).pdf",
          caption: "معيد",
        },
        {
          name: "نورة بركي اللقماني",
          email: "nballugmani@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Noura%20Allugmani.pdf",
          caption: "معيد",
        },
        {
          name: "نهى أحمد العسمي",
          email: "naalasmi@uj.edu.sa",
          img: "",
          cv: "https://csa-kmath.uj.edu.sa/Files/856006/Files/154709_CV-Nuha%20ALasmi.pdf",
          caption: "معيد",
        },
      ]
    },
  });