var app = new Vue({
  el: "#app",
  methods: {
    showMoreInfo: function (item) {
      this.modalData = item;
      const myModal = new bootstrap.Modal(document.querySelector("#moreInfo"));
      myModal.show();
    },
    setYear: function (e) {
      this.selectedYear = eval(e.target.value);
    },
  },
  created() {
    this.selectedYear = 0;
  },
  data: {
    selectedYear: 0,
    modalData: {
      title: "",
      type: " ",
      owner: "",
      email: "",
      date: "",
      place: "",
      duration: "",
      pics: ["#"],
    },
    programs: [
      {
        year: "1442-1443",
        list: [
          {
                        "title": "مبادرة أنتم في قلوبنا ولن ننساكم",
                        "owner": "د.نورا العبادي ",
                        "email": "nalabadi@uj.edu.sa ",
                        "date": "20-2-1443 ",
                        "place": "عدة مدارس ثانوية بجدة والكامل",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56023_alzheimer.JPG',
                        ]
                    },
                       {
                        "title": "مبادرة سقيا الماء",
                        "owner": "د.سماء عطية",
                        "email": "smattiyah@uj.edu.sa",
                        "date": "5-4-1443 ",
                        "place": "عدة مواقع بمحافظة الكامل",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56033_water.JPG',
                        ]
                    },
                    {
                        "title": "مبادرة الطريق إلى محبة الله",
                        "owner": "د.خاتمة حمود",
                        "email": "khmoud@uj.edu.sa",
                        "date": "13-4-1443:19-4-1443 ",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56028_thewaytoallah.JPG',
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56027_optimistic.JPG',
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56029_thewaytoallah2.JPG',
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56030_thewaytoallah3.JPG',
                        ]
                    },
                    {
                        "title": "مبادرة أنا والطبيب",
                        "owner": "د.سماء عطية ",
                        "email": "smattiyah@uj.edu.sa",
                        "date": "24-4-1443",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56024_doctors.JPG',
                        ]
                    },
                    {
                        "title": "مبادرة فطورك علينا",
                        "owner": "د.هبة الله عرابي ",
                        "email": "haorabi@uj.edu.sa ",
                        "date": "1-5-1443:5-5-1443 ",
                        "place": "كلية العلوم والآداب بالكامل",
                        "duration": "5 days",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56022_breakfast2.JPG',
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56021_breakfast.jpg',
                        ]
                    },
                     {
                        "title": "مبادرة مهارتك تصنع مستقبلك",
                        "owner": "د.نورا العبادي",
                        "email": "nalabadi@uj.edu.sa ",
                        "date": "17-5-1443 ",
                        "place": "عدد من مدارس محافظة الكامل",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56032_skill.JPG',
                        ]
                    },
                    {
                        "title": "مبادرة أبناؤنا",
                        "owner": "د.نورا العبادي",
                        "email": "nalabadi@uj.edu.sa ",
                        "date": "23-5-1443 ",
                        "place": "جمعية البر بجدة",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56031_oursons.JPG',
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56034_IMG_4131.jpg',
                        ]
                    },
                    {
                        "title": "مبادرة برنامج الإدارة الرقمية المتكاملة",
                        "owner": "أ.عزالدين المفتاحي",
                        "email": "nalabadi@uj.edu.sa ",
                        "date": "16-6-1443",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "3 weeks",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56025_IDM.JPG',
                            'https://www.uj.edu.sa/Files/856/Galleries/7282/56026_IDM2.JPG',
                        ]
                    },
					{
                        "title": "مبادرة بركات رمضانية",
                        "owner": "د.سماء عطية",
                        "email": "smattiyah@uj.edu.sa",
                        "date": "26-8-1443",
                        "place": "محافظة الكامل",
                        "duration": "1 week",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7270/56205_Ramadan%20blessings.jpg',
                        ]
                    },
					{
                        "title": "مبادرة توعوية اضرار المخدرات والسموم والمؤثرات العقلية",
                        "owner": "د.سماء عطية",
                        "email": "smattiyah@uj.edu.sa",
                        "date": "27-8-1443",
                        "place": "محافظة الكامل",
                        "duration": "1 week",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7270/56201_effects.jpg',
                        ]
                    },
          ]},
          {
            year: "1441-1442",
            list: [
              {
                        "title": "مبادرة حقيبة تعليمية إلكترونية للصفوف الأولية",
                        "owner": "د.سماء عطية وعدد من منسوبات الكلية",
                        "email": "smattiyah@uj.edu.sa",
                        "date": "20-4-1442",
                        "place": "مبادرة تطوعية عن بعد",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7280/55998_electronic%20bag.jpg',
                    'https://www.uj.edu.sa/Files/856/Galleries/7280/55999_electronic%20bag2.png',
                        ]
                    },
                    {
                        "title": "مبادرة إيزي إنجليزي",
                        "owner": "د.هبة الله عرابي وعدد من طالبات قسم اللغة الإنجليزية",
                        "email": "haorabi@uj.edu.sa",
                        "date": "20-4-1442",
                        "place": "أونلاين  _ من خلال حساب على منصة تويتر خاص بالمبادرة @EZenglEZ ",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7280/56000_easyenglish.jpg',
                    'https://www.uj.edu.sa/Files/856/Galleries/7280/56001_easyenglish2.png',
                        ]
                    },
                    {
                        "title": "مبادرة حفظ النعمة",
                        "owner": "أ.مها السلمي - أ.زلفى السلمي",
                        "email": "mmalsulami1@uj.edu.sa",
                        "date": "21-4-1442",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7280/56008_save%20grace.jpg',
                    'https://www.uj.edu.sa/Files/856/Galleries/7280/56009_save%20grace2.jpg',
                        ]
                    },
                    {
                        "title": "مبادرة أكرمك فأكرمة",
                        "owner": " د.سماء عطية وعدد من منسوبات الكلية",
                        "email": "smattiyah@uj.edu.sa",
                        "date": "11-5-1442",
                        "place": "مساجد ومراكز مختلفة بجدة ومحافظة الكامل",
                        "duration": "1 month",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7280/56002_quran.JPG',
                    'https://www.uj.edu.sa/Files/856/Galleries/7280/56003_quran2.JPG',
                    'https://www.uj.edu.sa/Files/856/Galleries/7280/56004_report.jpg',
                        ]
                    },
                    {
                        "title": "دثروهم2",
                        "owner": "أ.صافية السلمي",
                        "email": "skalsolami@uj.edu.sa",
                        "date": "25-6-1442",
                        "place": "مسجد الملك فهد بمحافظة الكامل",
                        "duration": "5 days",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7280/56015_cover3.JPG',
                    'https://www.uj.edu.sa/Files/856/Galleries/7280/56013_coverthem.JPG',
                    'https://www.uj.edu.sa/Files/856/Galleries/7280/56014_cover2.JPG',
                        ]
                    },
					{
                        "title": "السلامة في حياتنا اليومية",
                        "owner": "د.سماء عطية",
                        "email": "smattiah@uj.edu.sa",
                        "date": "24-7-1442",
                        "place": "مسجد الملك فهد بمحافظة الكامل",
                        "duration": "1 month",
                        "pics": [
                            ' ',
                        ]
                    },
            ],
          },
        ],
      },
});
