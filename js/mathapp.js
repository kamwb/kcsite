var app = new Vue({
  el: "#app",
  data: {
    bannerImg: "",
    latestNews: [
      {
        image: "https://www.uj.edu.sa/Files/856006/Galleries/7293/56160_1.jpg",
      },
      {
        image: "https://www.uj.edu.sa/Files/856006/Galleries/7293/56161_2.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56162_3.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56163_4.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56164_5.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56165_6.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56166_7.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56167_8.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56168_9.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56169_10.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56170_11.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56171_12.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56172_13.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56173_14.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56175_16.png",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56176_17.jpg",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56177_18.png",
      },
      {
        image:
          "https://www.uj.edu.sa/Files/856006/Galleries/7293/56178_19.png",
      },
      {
        image: "https://www.uj.edu.sa/Files/856006/Galleries/7293/56179_20.png",
      },
      {
        image: "https://www.uj.edu.sa/Files/856006/Galleries/7293/56180_21.jpg",
      },
      {
        image: "https://www.uj.edu.sa/Files/856006/Galleries/7293/56181_22.jpg",
      },
      {
        image: "https://www.uj.edu.sa/Files/856006/Galleries/7293/56182_23.jpg",
      },
    ],
  },
});

$(".main-carousel").flickity({
  // options
  autofreeScroll: true,
  autoPlay: true,
  wrapAround: true,
  pageDots: false,
  prevNextButtons: true,
});
