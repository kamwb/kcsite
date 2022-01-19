var app = new Vue({
    el: "#app",
    data: {
      selectedYear: 0,
      modalData: {
        title: "",
        "author": "",
        "faculty": "",
        date: "",
        "url": "",
        "poster": "",
        "video": "",
    },
      seminars: [
        {
            year: "1442-1443",
            list: [
                {
                    title: "Some Topics in the Convolution Theory",
                    author: "Prof. Tarig M. Elzaki, Faculty of Science & Art (Alkamil)",
                    sponsor: "قسم الرياضيات",
                    date: "20-01-2021",
                    poster: "img/semi1.jpg",
                    video: "https://jeddahu-my.sharepoint.com/personal/csa_math_kamil_uj_edu_sa/_layouts/15/download.aspx?SourceUrl=%2Fpersonal%2Fcsa_math_kamil_uj_edu_sa%2FDocuments%2FSeminar%2F1442%2Fsome+topics+in+convolution+theory+Prof.+Tarig+M.+Elzaki.mp4&ccat=0&correlationid=0269f062-066d-4ea2-866c-63551e66f965",
                    url: "",
                },
                {
                    title: "Frictional Self-Contact Problem of Elastic Rods",
                    author: "Mourad Chamekh, PhD, Faculty of Science & Art (Alkamil)",
                    sponsor: "قسم الرياضيات",
                    date: "03-02-2021",
                    poster: "img/semi2.jpg",
                    video: "",
                    url: "",
                },
                {
                    title: "A High Order Finite Element Method for Elliptic Interface Problems Using Hermite Splines",
                    author: "Luis Zeron, PhD, NMT. USA",
                    sponsor: "قسم الرياضيات",
                    date: "10-02-2021",
                    poster: "img/semi3.jpg",
                    video: "",
                    url: "",
                },
                {
                    title: "Stochastic Model for Diminishing Musharakah in Islamic Bank",
                    author: "Majdi D. Alsulami, PhD, Faculty of Science & Art (Alkamil)",
                    sponsor: "قسم الرياضيات",
                    date: "24-02-2021",
                    poster: "img/semi4.jpg",
                    video: "https://jeddahu-my.sharepoint.com/personal/csa_math_kamil_uj_edu_sa/_layouts/15/download.aspx?SourceUrl=%2Fpersonal%2Fcsa_math_kamil_uj_edu_sa%2FDocuments%2FSeminar%2F1442%2FStochastic+model+for+diminishing+Musharakah+finance+in+Islamic+bank+Dr.+Majdi+D.+Alsulami.mp4&ccat=0&correlationid=9d6009f2-aeb8-4507-a6ec-c57b32becf6c",
                    url: "",
                },
                {
                    title: "Goodness-of-Fit for The Beta Gompertz Distribution",
                    author: "Prof. Hanaa Abu-Zinadah, Faculty of Science",
                    sponsor: "قسم الرياضيات",
                    date: "03-03-2021",
                    poster: "img/semi5.jpg",
                    video: "https://jeddahu-my.sharepoint.com/personal/csa_math_kamil_uj_edu_sa/_layouts/15/download.aspx?SourceUrl=%2Fpersonal%2Fcsa_math_kamil_uj_edu_sa%2FDocuments%2FSeminar%2F1442%2FGOODNESS-OF-FIT+TESTS+FOR+THE+BETA+GOMPERTZ+DISTRIBUTION+Hanaa+Abu-Zinadah.mp4&ccat=0&correlationid=706b89e1-9945-4521-af2f-beeed959003d",
                    url: "",
                },
                {
                    title: "Jawarneh Manifold",
                    author: "Mussa Jawarneh, PhD, Faculty of Science & Art (Alkamil)",
                    sponsor: "قسم الرياضيات",
                    date: "10-03-2021",
                    poster: "img/semi6.jpg",
                    video: "",
                    url: "",
                },
                {
                    title: "Solution of Telegraph Equations by Elzaki-LAPLACE Transform",
                    author: "Prof. Tarig M. Elzaki, Faculty of Science & Art (Alkamil)",
                    sponsor: "قسم الرياضيات",
                    date: "17-03-2021",
                    poster: "",
                    video: "",
                    url: "",
                },
                {
                    title: "Forecasting value-at-risk estimates using GARCH-EVT-copula models",
                    author: "Haslifah Hasim, PhD, Mathematical and Computer Sciences, Heriot-Watt University, Dubai",
                    sponsor: "قسم الرياضيات",
                    date: "24-03-2021",
                    poster: "img/semi8.jpg",
                    video: "https://jeddahu-my.sharepoint.com/personal/csa_math_kamil_uj_edu_sa/_layouts/15/download.aspx?SourceUrl=%2Fpersonal%2Fcsa_math_kamil_uj_edu_sa%2FDocuments%2FSeminar%2F1442%2FEvaluation+of+multivariate+GARCH+models+in+an+optimal+asset+allocation+framework+Dr.+Haslifah+Hasim.mp4&ccat=0&correlationid=ee57456e-275b-416d-b8f9-4c38cccc8350",
                    url: "",
                },
                {
                    title: "Modeling and Optimal Control for Chikungunya Disease",
                    author: "Miled ElHajji, PhD, Faculty of Science & Art",
                    sponsor: "قسم الرياضيات",
                    date: "31-03-2021",
                    poster: "img/semi9.jpg",
                    video: "https://jeddahu-my.sharepoint.com/personal/csa_math_kamil_uj_edu_sa/_layouts/15/download.aspx?SourceUrl=%2Fpersonal%2Fcsa_math_kamil_uj_edu_sa%2FDocuments%2FSeminar%2F1442%2FCoexistence+in+the+Chemostat+Modeling+and+Analysis+Dr.+Miled+El+Hajji.mp4&ccat=0&correlationid=dca36a0f-f6f0-4225-9fef-105837f31eb7",
                    url: "",
                },
                {
                    title: "Identification of Points Sources via Time Fractional Diffusion Equation",
                    author: "Ridha Mdimagh, PhD, Faculty of Science & Art (Khulais)",
                    sponsor: "قسم الرياضيات",
                    date: "14-04-2021",
                    poster: "",
                    video: "",
                    url: "",
                },
                ]
            },
            {
                year: "1443-1444",
                list: [
                    {
                        title: " Rapid Exponential Stabilization of Nonlinear Wave Equation Derived from Brain Activity via Event-Triggered Impulsive Control",
                        sponsor: "قسم الرياضيات",
                        author: " Dr. Mohsen Dlala, Mathematics department College of Science Qassim University",
                        date: " 31-01-2022",
                        poster: "",
                        video: "",
                        url: "",
                    },
                    {
                        title: " الملتقى الطلابي 5 لجامعة جدة",
                        author: "",
                        date: "6-02-2022",                        
                        sponsor: "قسم الرياضيات",
                        poster: "",
                        video: "",
                        url: "",
                    },
                    {
                        title: " Infinite Divisibility of Probability Measures and Special Functions",
                        sponsor: "قسم الرياضيات",
                        author: " Dr. Wissem Jdidi, King Saoud University",
                        date: " 14-02-2022",
                        poster: "",
                        video: "",
                        url: "",
                    },
                    {
                        title: " Mathematical and Numerical study of the concentration effect of red cells in blood",
                        sponsor: "قسم الرياضيات",
                        author: " Dr. Mourad Chamekh, College of Science and Arts Al Kamel University of Jeddah",
                        date: " 28-02-2022",
                        poster: "",
                        video: "",
                        url: "",
                    },
                    {
                        title: " Mathematical study for the phase-based transmissibility of a novel COVID-19 Coronavirus",
                        sponsor: "قسم الرياضيات",
                        author: " Dr. Miled El Hajji, College of Science University of Jeddah",
                        date: " 14-03-2022",
                        poster: "",
                        video: "",
                        url: "",
                    },
                    {
                        title: " Basics of academic writing for Higher education students",
                        sponsor: "قسم الرياضيات",
                        author: " Dr. Khaled Ouanes, Saudi Electronic University",
                        date: " 28-03-2022",
                        poster: "",
                        video: "",
                        url: "",
                    },
                    {
                        title: " Quasi Jawarneh Manifolds",
                        sponsor: "قسم الرياضيات",
                        author: " Dr. Moussa Jawarneh, College of Science and Arts Al Kamel University of Jeddah",
                        date: "11-04-2022 ",
                        poster: "",
                        video: "",
                        url: "",
                    },
                    {
                        title: " Dynamic spillovers effect and connectedness among climate change",
                        sponsor: "قسم الرياضيات",
                        author: " Dr. Rabeh Khalfaoui, College of Sciences and Humanities Shaqra University",
                        date: " 16-05-2022",
                        poster: "",
                        video: "",
                        url: "",
                    }
                ]
            },
      ]
  },
methods:{
  setYear: function (e) {
    this.selectedYear = eval(e.target.value)
  },
  showMoreInfo: function(item){
    this.modalData = item;
    const myModal = new bootstrap.Modal(document.querySelector('#moreInfo'))
    myModal.show();
    $('#video > video').get(0).load()
  }
},
created() {
  this.selectedYear = 0
},
});
