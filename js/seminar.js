var app = new Vue({
    el: "#app",
    data: {
      selectedYear: 0,
      seminars: [
        {
            year: "2021",
            list: [
                {
                    title: "Some Topics in the Convolution Theory",
                    author: "Prof. Tarig M. Elzaki",
                    faculty: "Faculty of Science & Art (Alkamil)",
                    date: "20-01",
                    url: "",
                },
                {
                    title: "Frictional Self-Contact Problem of Elastic Rods",
                    author: "Mourad Chamekh, PhD",
                    faculty: "Faculty of Science & Art (Alkamil)",
                    date: "03-02",
                    url: "",
                },
                {
                    title: "A High Order Finite Element Method for Elliptic Interface Problems Using Hermite Splines",
                    author: "Luis Zeron, PhD",
                    faculty: "NMT. USA",
                    date: "10-02",
                    url: "",
                },
                {
                    title: "Stochastic Model for Diminishing Musharakah in Islamic Bank",
                    author: "Majdi D. Alsulami, PhD",
                    faculty: "Faculty of Science & Art (Alkamil)",
                    date: "24-02",
                    url: "",
                },
                {
                    title: "Goodness-of-Fit for The Beta Gompertz Distribution",
                    author: "Prof. Hanaa Abu-Zinadah",
                    faculty: "Faculty of Science",
                    date: "03-03",
                    url: "",
                },
                {
                    title: "Jawarneh Manifold",
                    author: "Mussa Jawarneh, PhD",
                    faculty: "Faculty of Science & Art (Alkamil)",
                    date: "10-03",
                    url: "",
                },
                {
                    title: "Solution of Telegraph Equations by Elzaki-LAPLACE Transform",
                    author: "Prof. Tarig M. Elzaki",
                    faculty: "Faculty of Science & Art (Alkamil)",
                    date: "17-03",
                    url: "",
                },
                {
                    title: "Forecasting value-at-risk estimates using GARCH-EVT-copula models",
                    author: "Haslifah Hasim, PhD",
                    faculty: "Mathematical and Computer Sciences, Heriot-Watt University, Dubai",
                    date: "24-03",
                    url: "",
                },
                {
                    title: "Modeling and Optimal Control for Chikungunya Disease",
                    author: "Miled ElHajji, PhD",
                    faculty: "Faculty of Science & Art",
                    date: "31-03",
                    url: "",
                },
                {
                    title: "Identification of Points Sources via Time Fractional Diffusion Equation",
                    author: "Ridha Mdimagh, PhD",
                    faculty: "Faculty of Science & Art (Khulais)",
                    date: "14-04",
                    url: "",
                },
                ]
            },
            {
                year: "2022",
                list: [
                    {
                        title: "Identification of Points Sources via Time Fractional Diffusion Equation",
                        author: "Ridha Mdimagh, PhD",
                        faculty: "Faculty of Science & Art (Khulais)",
                        date: "14-04",
                        url: "",
                    },
                ]
            },
      ]
  },
methods:{
  setYear: function (e) {
    this.selectedYear = eval(e.target.value)
  }
},
created() {
  this.selectedYear = 0
},
});
