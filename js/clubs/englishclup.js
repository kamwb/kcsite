var app = new Vue({
    el: "#app",
    methods: {
        showMoreInfo: function(item){
            this.modalData = item;
            const myModal = new bootstrap.Modal(document.querySelector('#moreInfo'))
            myModal.show();
        },
        setYear: function (e) {
            this.selectedYear = eval(e.target.value)
          },
    },
    created() {
        this.selectedYear = 0
    },
    data: {
        selectedYear: 0,
        modalData: {
            "title": "",
			"type": " ",
            "owner": "",
            "email": "",
            "date": "",
            "place": "",
	    "duration": "",
            "pics": [
                '#',
            ]
        },
        programs: [
            {
                year: "1442-1443",
                list: [
				    {
                        "title": "Strategies for developing reading and writing skills",
						"type": "Training program",
                        "owner": "Balqees Alsulamy",
                        "email": "bnalsulami1@uj.edu.sa",
                        "date": "22-3-1443",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
				   {
                        "title": "English Pronunciation Rules",
						"type": "Training program",
                        "owner": "Balqees Alsulamy",
                        "email": "bnalsulami1@uj.edu.sa",
                        "date": "12-3-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "Basics of APA style 6th edition",
						"type": "Training program",
                        "owner": "Madiha Al sulamy",
                        "email": "mmalsulami@uj.edu.sa",
                        "date": "11-4-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "How to expand your vocabulary",
						"type": "Training program",
                        "owner": "Zulfa ALsulamy",
                        "email": "znalsulami1@uj.edu.sa",
                        "date": "4-3-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "English Grammar Basics course",
						"type": "Training program",
                        "owner": "Siham Asa’ad",
                        "email": "saassad@uj.edu.sa",
                        "date": "22-6-1442",
                        "place": "BlackBoard",
                        "duration": "6 week /2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "Developing English language skills course",
						"type": "Training program",
                        "owner": "Siham Asa’ad & Madiha Al-sulamy",
                        "email": "saassad@uj.edu.sa",
                        "date": "19-7-1442",
                        "place": "BlackBoard",
                        "duration": "8 week /4 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "How to learn English without studying lecture",
						"type": "Training program",
                        "owner": "Zulfa Alsulamy",
                        "email": "znalsulami1@uj.edu.sa",
                        "date": "4-8-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "IELTS Passing Skills workshop",
						"type": "Training program",
                        "owner": "Balqees Alsulamy",
                        "email": "bnalsulami1@uj.edu.sa",
                        "date": "22-8-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					]
					},
            {
                year: "1441-1442",
                list: [
                    {
                        "title": "How to improve reading skills",
						"type": "Training program",
                        "owner": "Siham Asa’ad",
                        "email": "saassad@uj.edu.sa",
                        "date": "28-2-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
				   {
                        "title": "An introduction to IELTS test",
						"type": "Training program",
                        "owner": "Balqees Alsulamy",
                        "email": "bnalsulami1@uj.edu.sa",
                        "date": "12-3-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "Basics of APA style 6th edition",
						"type": "Training program",
                        "owner": "Madiha Al sulamy",
                        "email": "mmalsulami@uj.edu.sa",
                        "date": "11-4-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "How to expand your vocabulary",
						"type": "Training program",
                        "owner": "Zulfa ALsulamy",
                        "email": "znalsulami1@uj.edu.sa",
                        "date": "4-3-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "English Grammar Basics course",
						"type": "Training program",
                        "owner": "Siham Asa’ad",
                        "email": "saassad@uj.edu.sa",
                        "date": "22-6-1442",
                        "place": "BlackBoard",
                        "duration": "6 week /2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "Developing English language skills course",
						"type": "Training program",
                        "owner": "Siham Asa’ad & Madiha Al-sulamy",
                        "email": "saassad@uj.edu.sa",
                        "date": "19-7-1442",
                        "place": "BlackBoard",
                        "duration": "8 week /4 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "How to learn English without studying lecture",
						"type": "Training program",
                        "owner": "Zulfa Alsulamy",
                        "email": "znalsulami1@uj.edu.sa",
                        "date": "4-8-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
					{
                        "title": "IELTS Passing Skills workshop",
						"type": "Training program",
                        "owner": "Balqees Alsulamy",
                        "email": "bnalsulami1@uj.edu.sa",
                        "date": "22-8-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
                ]
            },
             {
                year: "1440-1441",
                list: [
		       {
                        "title": "Strategies for developing reading and writing skills",
						"type": "Training program",
                        "owner": "Balqees Alsulamy",
                        "email": "bnalsulami1@uj.edu.sa",
                        "date": "22-3-1443",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
				   {
                        "title": "English Pronunciation Rules",
						"type": "Training program",
                        "owner": "Balqees Alsulamy",
                        "email": "bnalsulami1@uj.edu.sa",
                        "date": "12-3-1442",
                        "place": "BlackBoard",
                        "duration": "2 hourse",
                        "pics": [
                            ' ',
                        ]
                    },
                ]
            },
        ]
    }
});
