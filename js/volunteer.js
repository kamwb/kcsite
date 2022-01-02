var app = new Vue({
    el: "#app",
    methods: {
        showMoreInfo: function(item){
            this.modalData = item;
            const myModal = new bootstrap.Modal(document.querySelector('#moreInfo'))
            myModal.show();
        }
    },
    data: {
        modalData: {
            "title": "",
            "type": "",
            "owner": "",
            "mobile": "",
            "email": "",
            "date": "",
            "committee": "",
            "description": "",
            "outcome": [""],
            "place": "",
            "vol_count": "",
            "hours": "",
            "pics": [
                '#',
            ]
        },
        wt1441: [
            {
                "title": "مبادرة حقيبة تعليمية إلكترونية للصفوف الأولية",
                "type": "مبادرة تطوعية",
                "owner": "عدد من منسوبات الكلية",
                "mobile": "",
                "email": "",
                "date": "20-4-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": "",
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "مبادرة إيزي إنجليزي",
                "type": "مبادرة تطوعية",
                "owner": "د.هبة الله عرابي وعدد من طالبات قسم اللغة الإنجليزية",
                "mobile": "590417742",
                "email": "haorabi@uj.edu.sa",
                "date": "20-4-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "مبادرة تطوعية لتبسيط اللغة الإنجليزية وتحويل مقررات القسم إلى إنفوجرافيك",
                "outcome": [
                "تعليم اللغة الإنجليزية وتبسيطها من خلال تقديمها في قالب مصور يسهل إستيعابه وتذكره",
                "إثراء المحتوى المعرفي لمقررات قسم اللغة الإنجليزية وتلخيص محتوياتها ليستفيد منها الطلاب الحاليون والقادمون في إستذكار دروسهم",
                "إكساب طالبات القسم مهارات التصميم وتلخيص المحتوى حيث أن جميع التصميمات من تنفيذ الطالبات. فقد قمنا بتدريبهم على تصميم الإنفوجرافيك بإستخدام برنامج الوورد فقط نظراً لسهولة إستخدامة وتوفرة لدى جميع الطالبات"],
                "place": "أونلاين  _ من خلال حساب على منصة تويتر خاص بالمبادرة @EZenglEZ ",
                "vol_count": "60",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "مبادرة حفظ النعمة",
                "type": "مبادرة تطوعية",
                "owner": "عدد من منسوبات الكلية",
                "mobile": "",
                "email": "",
                "date": "21-4-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": [""],
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "مبادرة أكرمك فأكرمة",
                "type": "مبادرة تطوعية",
                "owner": "عدد من منسوبات الكلية",
                "mobile": "",
                "email": "",
                "date": "11-5-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": [""],
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "السلامة من عدوى فيروس كورونا",
                "type": "محاضرة",
                "owner": "د.هدى السيد , د.زينب هاشم",
                "mobile": "",
                "email": "",
                "date": "10-3-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": [""],
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "السلامة المرورية للمشاة",
                "type": "محاضرة",
                "owner": "د.فاطمة كساب",
                "mobile": "",
                "email": "",
                "date": "24-7-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": [""],
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "السلامة المرورية لسائقي المركبات",
                "type": "محاضرة",
                "owner": "د.فاطمة كساب",
                "mobile": "",
                "email": "",
                "date": "25-7-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": [""],
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "السلامة في استخدام الأدوية ومستحضرات التجميل",
                "type": "محاضرة ",
                "owner": "د.نورا العبادي",
                "mobile": "",
                "email": "",
                "date": "3-8-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": [""],
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "السلامة في معامل الحاسب الآلي",
                "type": "محاضرة",
                "owner": "أ.فاطمة السلمي",
                "mobile": "",
                "email": "",
                "date": "5-8-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": [""],
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            },
            {
                "title": "طرق اجتياز اختبار القدرات اللفظية",
                "type": "محاضرة",
                "owner": "د.زينب هاشم , د.فاطمة الرواشدة",
                "mobile": "",
                "email": "",
                "date": "8-8-1442",
                "committee": "وحدة خدمة المجتمع والعمل التطوعي",
                "description": "",
                "outcome": [""],
                "place": "",
                "vol_count": "",
                "hours": "",
                "pics": [
                    '#',
                ]
            }
        ],
    }
});