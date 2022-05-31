var app = new Vue({
    el: "#app",
    data: {
      bannerImg: "",
      latestNews: [
        {
          title:
            "تهنئة بعيد الفطر المبارك",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56225_happyeid.JPG",
          url: "#",
        },
        {
          title:
            "تنفيذ مبادرة تطوعية رمضانكم علينا برباط الشاكرين بجدة",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56215_ramadan2.jpg",
          url: "https://csa.uj.edu.sa/Pages-ramadan.aspx",
        },
        {
          title:
            "محاضرة توعوية بعنوان استثمار رمضان",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56206_ramdan.jpg",
          url: "#",
        },
        {
          title:
            "سعادة محافظ الكامل يستقبل عميد كلية العلوم والآداب وعدد من رؤوساء الأقسام",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56197_alkamil.jpg",
          url: "https://csa.uj.edu.sa/Pages-Recepion.aspx",
        },
        {
          title:
            "مبادرة بركات رمضانية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56205_Ramadan%20blessings.jpg",
          url: "https://csa.uj.edu.sa/Pages-ramadanblessing.aspx",
        },
        {
          title:
            "محاضرة بعنوان التربية بنشر الحب",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56200_education.jpg",
          url: "#",
        },
        {
          title:
            "تعلن وحدة الانشطة الطلابية بكلية العلوم والآداب بالكامل شطر الطالبات عن تنفيذ المسابقة الثقافية السنوية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56199_Competition.jpg",
          url: "https://csa.uj.edu.sa/Pages-competition.aspx",
        },
        {
          title:
            "تعلن وحدة العمل التطوعي وخدمة المجتمع عن إقامة حملة للتوعية بإضرار المخدرات والسموم والمؤثرات العقلية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56201_effects.jpg",
          url: "https://csa.uj.edu.sa/Pages-effects.aspx",
        },
        {
          title:
            "يعلن نادي اللغة الانجليزية عن تقديم محاضرة بعنوان Tips to improve your English",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56208_Tips.jpg",
          url: "#",
        },
        {
          title:
            "يعلن نادي اللغة الانجليزية عن تقديم محاضرة بعنوان HOW TO CORRECTLY PRONOUNCE ENGLISH WORDS",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56209_words.jpg",
          url: "#",
        },
        {
          title:
            "يسر اللجنة الرياضية دعوتكم للمشاركة في النشاط الرياضي ماراثون الجري",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56204_marthon.jpg",
          url: "#",
        },
        {
          title:
            "تدشين العيادة الطبية بالكلية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56198_clinic.jpg",
          url: "https://csa.uj.edu.sa/Pages-clinc.aspx",
        },
        {
          title:
            "تعلن لجنة النوادي العلمية بـ #كلية_العلوم_والآداب_بالكامل بالتعاون مع نادي الرياضيات بالكلية عن تقديم دورة تدريبية بعنوان قوانين نيوتن للحركة",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56111_nn.jpg",
          url: "https://csa.uj.edu.sa/Pages-newteen.aspx",
        },
          {
          title:
            "اللقاء الثاني لبرنامج الإدارة الرقمية المتكاملة",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/56019_IDM.JPG",
          url: "https://csa.uj.edu.sa/Pages-IDM22.aspx",
        },
  {
          title:
            "عوداً حميداً وفصل دراسي موفق",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7278/55981_IMG_3696.JPG",
          url: "#",
        },
  {
          title:
            "اللقاء الأول لبرنامج الإدراة الرقمية المتكاملة",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55983_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A91.JPG",
          url: "https://csa.uj.edu.sa/Pages-IDM1.aspx",
        },
  {
          title:
            "زيارة وكيل الجامعة للتطوير والتنمية المستدامة لفرع الكامل",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55932_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A94.JPG",
          url: "https://csa.uj.edu.sa/Pages-visit-2.aspx",
        },
        {
          title: "احتفال شطر الطالبات بذكرى اليوم الوطني 91",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55933_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A95.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d9%8a%d9%88%d9%85-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a91.aspx",
        },
        {
          title: "انطلاق الحزم التدريبية لبيت الخبرة بالكلية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55934_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A96.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d9%88%d8%b1%d8%b4-%d8%b9%d9%85%d9%84.aspx",
        },
        {
          title: "اللقاء التعريفي بالملتقى العلمي الطلابي الخامس",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55935_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A97.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d9%85%d9%84%d8%aa%d9%82%d9%89-%d8%a7%d9%84%d8%b7%d9%84%d8%a7%d8%a8%d9%8a-%d8%a7%d9%84%d8%ae%d8%a7%d9%85%d8%b3.aspx",
        },
        {
          title:
            "تفقد سعادة العميد لسير اختبارات الفترة الأولى لطلاب السنة التحضيرية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55936_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A922.JPG",
          url: "https://csa.uj.edu.sa/Pages-Exame.aspx",
        },
        {
          title: "تفعيل برامج الأندية الطلابية لطلاب المرحلة الثانوية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55937_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A923.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d8%a3%d9%86%d8%af%d9%8a%d8%a9-%d8%a7%d9%84%d8%b7%d9%84%d8%a7%d8%a8%d9%8a%d8%a9.aspx",
        },
        {
          title: "تنفيذ المبادرة التطوعية أنا والطبيب",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55938_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A911.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a3%d9%86%d8%a7-%d9%88%d8%a7%d9%84%d8%b7%d8%a8%d9%8a%d8%a8.aspx",
        },
        {
          title: "زيارة محافظ الكامل لفرع الجامعة بالكامل",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55939_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A913.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%b2%d9%8a%d8%a7%d8%b1%d8%a9-%d9%85%d8%ad%d8%a7%d9%81%d8%b8-%d8%a7%d9%84%d9%83%d8%a7%d9%85%d9%84.aspx",
        },
        {
          title: "دراسة التقويم البيئي لجبل شمنصير",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55940_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A914.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d8%aa%d9%82%d9%88%d9%8a%d9%85-%d8%a7%d9%84%d8%a8%d9%8a%d8%a6%d9%8a-%d9%84%d8%ac%d8%a8%d9%84-%d8%b4%d9%85%d9%86%d8%b5%d9%8a%d8%b1.aspx",
        },
        {
          title: "تنفيذ مبادرة تطوعية سقيا الماء",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55941_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A916.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%b3%d9%82%d9%8a%d8%a7-%d8%a7%d9%84%d9%85%d8%a7%d8%a1.aspx",
        },
        {
          title: "تهنئة بمناسبة ذكرى البيعة السابعة",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55942_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A920.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d8%a8%d9%8a%d8%b9%d8%a9-%d8%a7%d9%84%d8%b3%d8%a7%d8%a8%d8%b9%d8%a9.aspx",
        },
        {
          title: "تنفيذ مبادرة تطوعية الطريق الى محبة الله",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55943_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A921.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d8%b7%d8%b1%d9%8a%d9%82-%d8%a7%d9%84%d9%89-%d9%85%d8%ad%d8%a8%d8%a9-%d8%a7%d9%84%d9%84%d9%87.aspx",
        },
        {
          title: "التدريب الميداني لطلاب قسم الكيمياء التطبيقية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55944_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A924.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%a8.aspx",
        },
        {
          title: "إصدار خاص بمناسبة ذكرى البيعة السابعة",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55945_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A925.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d9%81%d9%8a-%d8%b9%d9%87%d8%af-%d8%a7%d9%84%d9%85%d9%84%d9%83-%d8%b3%d9%84%d9%85%d8%a7%d9%86.aspx",
        },
        {
          title: "المنصة الرقمية لدعم مربي الحاشية",
          image:
            "https://www.uj.edu.sa/Files/856/Galleries/7270/55946_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A926.JPG",
          url: "https://csa.uj.edu.sa/Pages-%d8%a7%d9%84%d9%85%d9%86%d8%b5%d8%a9-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a%d8%a9-%d9%84%d8%af%d8%b9%d9%85-%d9%85%d8%b1%d8%a8%d9%8a-%d8%a7%d9%84%d9%85%d8%a7%d8%b4%d9%8a%d8%a9.aspx",
        },
      ],
      branches: [
        {
          title: "قسم الرياضيات",
          url: "https://csa-kmath.uj.edu.sa/Default.aspx?Site_ID=856006&Lng=AR"
        },
        {
          title: "قسم اللغة الإنجليزية",
          url: "https://csa-enlan.uj.edu.sa/Default.aspx?site_id=856004&amp;lng=AR"
        },
        {
          title: "قسم الأحياء",
          url: "https://csa-kbio.uj.edu.sa/Default.aspx?Site_ID=856005&amp;Lng=AR"
        },
        {
          title: "قسم الكيمياء",
          url: "https://csa-kchem.uj.edu.sa/Default.aspx?Site_ID=856008&amp;Lng=AR"
        },
        {
          title: "قسم مهارات الاتصال",
          url: "#"
        },
        {
          title: "قسم الدراسات الإسلامية والمهارات اللغوية",
          url: "#"
        },
        {
          title: "شعبة الشريعة",
          url: "#"
        },
      ],
      diploma: [
        {
          title: "دبلوم انتاج الدواجن",
          url: "#"
        },
        {
          title: "دبلوم تقنية تصنيع البلاستيك",
          url: "#"
        },
      ],
      platforms: [
        {
          title: "الإدارة الرقمية المتكاملة IDM",
          url: "https://csa.uj.edu.sa/Pages-IDM.aspx"
        },
        {
          title: "المنصة الرقمية الاستشارية لدعم مربي الماشية",
          url: "https://sites.google.com/view/alkamil-livestock-breeders"
        },
        {
          title: "بيت الخبرة بالكلية",
          url: "https://csa.uj.edu.sa/Pages-dean-page.aspx#uTwo"
        },
        {
          title: "وحدة التوثيق الاعلامي",
          url: "https://csa.uj.edu.sa/Pages-dean-page.aspx#uOne"
        },
        {
          title: "منصة عرض الفعاليات",
          url: "#"
        },
        {
          title: "تويتر",
          url: "https://twitter.com/UJ_Alkamil"
        },
      ],
      importantTips: [
        {
            image:
                "https://www.uj.edu.sa/Files/856/Galleries/7268/56141_eexam.png",
            text: "جدول الإختبارات الطلاب وطالبات السنة التحضيرية",
            url: "https://t.co/PbhrAsNniS?amp=1",
        },{
            image:
                "https://www.uj.edu.sa/Images/856/%D9%81%D8%A7%D8%B7%D9%85%D8%A9%20%D8%A7%D9%84%D8%B3%D9%84%D9%85%D9%8A/%D8%A7%D9%84%D8%AA%D9%82%D9%88%D9%8A%D9%85%20%D8%A7%D9%84%D8%A7%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%20%D9%84%D8%A5%D8%AD%D8%AF%D8%A7%D8%AB%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.jpg",
            text: "التقويم الأكاديمي لأحداث الفصل الدراسي الثاني للعام الدراسي 1442-1443هـ",
            url: "https://csa.uj.edu.sa/Pages-Semister2.aspx",
        },
      ],
      latestAchievements: [
        {
            image: "https://www.uj.edu.sa/Files/856/Galleries/7271/56020_4f3b3266922e.jpg",
            text: "الطالب. فراس سعد السلمي من قسم اللغة الانجليزية يحقق المركز الأول في السباق",
            url: "https://csa.uj.edu.sa/Pages-saad-alsulami.aspx",
        },
        {
            image: "https://csa.uj.edu.sa/Images/856/جائزة%20الابداع.jpg",
            text: "كلية العلوم والآداب بالكامل تفوز بجائزة الإبداع بالمحافظة لعام 1442هـ إحدى جوائز الابداع بمحافظات منطقة مكة المكرمة.",
            url: "https://csa.uj.edu.sa/Pages-%d8%ac%d8%a7%d8%a6%d8%b2%d8%a9-%d8%a7%d9%84%d8%a7%d8%a8%d8%af%d8%a7%d8%b9.aspx",
        },
        {
            image:
                "https://www.uj.edu.sa/Files/856/Galleries/7271/55950_%D8%AA%D9%87%D9%86%D8%A6%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%88%D9%81%D9%8A%D8%B3%D9%88%D8%B1%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%D8%B7%20%D9%85%D8%B1%D9%8A%D9%88%D8%AF.JPG",
            text: "تهنئة البروفيسور عبدالباسط بمناسبة إدراج اسمه ضمن افضل 2% من علماء العالم الأكثر استشهادًا أكاديمياً في مختلف التخصصات للمرة الثانية.",
            url: "#",
        },
        {
            image:
                "https://www.uj.edu.sa/Files/856/Galleries/7271/55951_%D8%B4%D8%B1%D9%8A%D8%AD%D8%A92.JPG",
            text: "تهنئة البروفيسور عبدالباسط بمناسبة فوزه بجائزة عبدالحميد شومان للباحثين العرب .",
            url: "#",
        },
      ],
      stats: [
        /*{
            icon: "leanpub",
            title: "عضو هيئة تدريس",
            value: "47",
        },*/
        {
            icon: "pencil",
            title: "الأبحاث المنشورة",
            value: "400+",
        },
        {
            icon: "graduation-cap",
            title: "الخريجين",
            value: "450+",
        },
        {
            icon: "cog",
            title: "توظيف الخريجين",
            value: "88%",
        },
        {
            icon: "pie-chart",
            title: "أقسام الكلية",
            value: "6",
        },
        /*{
            icon: "users",
            title: "الإداريين",
            value: "16",
        },*/
        {
            icon: "flask",
            title: "المعامل",
            value: "9",
        },
      ],
      graduationGuide: [
        {
            title: "موعد الإعلان عن نتائج الرخص المهنية للوظائف التعليمية في 21/04/2022م",
            url: "https://etec.gov.sa/"
        }, 
      ],
      jobList: [
        {
            title : "شركة الديلا",
            url : "https://csa.uj.edu.sa/Pages-job-dela.aspx"
        },
        {
            title: "شركة أرامكو",
            url: "https://www.aramco.com/ar/careers/saudi-applicants/apply"
        },
        {
            title: "شركة الراجحي",
            url: "https://careers.alrajhibank.com.sa/ar/job-search-results/"
        },
        {
            title: "شركة معارف للتعليم والتدريب",
            url: "https://pbs.twimg.com/media/E2tuS30XEAEy4PU?format=jpg"
        },
        {
            title: "الشؤون الصحية بالحرس الوطني",
            url: "https://eapps.ngha.med.sa/recruitment/AR/vposition.aspx"
        },
        {
            title: "محافظة جدة",
            url: "https://www.wadhefa.com/news/13122/"
        },
      ]
    },
  });
  
  $('.main-carousel').flickity({
    // options
    autofreeScroll: true,
    autoPlay: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true,
  });
