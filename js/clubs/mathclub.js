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
                        "title": "تحليل التمثيلات البيانية للدوال",
                        "owner": "د. الطيب محمد",
                        "email": " ",
                        "date": "22-3-1443",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            ' ',
                        ]
                    },
                       {
                        "title": "افضل الطرق لدراسة الرياضيات",
                        "owner": "د.عواطف الحويطي",
                        "email": "asalhowaity@uj.edu.sa",
                        "date": "5-4-1443 ",
                        "place": "منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7295/56211_bestways.jpg',
                        ]
                    },
                    {
                        "title": "العمليات الحسابية بطرق سهلة",
                        "owner": " أ.أشواق كاسب",
                        "email": "akaseb@uj.edu.sa",
                        "date": "12-4-1443",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7295/56214_operation.jpg',
                        ]
                    },
                     {
                        "title": "تركيب الدوال والنهايات",
                        "owner": "د. الطيب محمد",
                        "email": "@uj.edu.sa",
                        "date": "16-5-1443 ",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            ' ',
                        ]
                    },
		 {
                        "title": "قوانين نيوتن للحركة",
                        "owner": "د. موسى الجوارنة",
                        "email": "",
                        "date": "8-7-1443 ",
                        "place": "منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7270/56111_nn.jpg',
                        ]
                    },
					{
                        "title": "الاتصال ونهايات الدوال",
                        "owner": "د. الطيب محمد",
                        "email": "@uj.edu.sa",
                        "date": "20-7-1443 ",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7295/56210_connection.jpg',
                        ]
                    },
		                    {
                        "title": "استراتيجيات التعلم النشط في الرياضيات",
                        "owner": "د.منى مجذوب",
                        "email": "mmahmed@uj.edu.sa ",
                        "date": "19-11-1443",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7295/56213_stratigies.jpg',
                        ]
                    },
          ]},
          {
            year: "1441-1442",
            list: [
              {
                        "title": "سلسلة لقاءات التقوية",
                        "owner": " أ.أشواق كاسب",
                        "email": "akaseb@uj.edu.sa",
                        "date": "5-7-1442",
                        "place": "عبر منصة البلاك بورد",
                        "duration": "2 hours",
                        "pics": [
                            'https://www.uj.edu.sa/Files/856/Galleries/7295/56212_math.jpg',
                        ]
                    },
            ],
          },
        ],
      },
});
