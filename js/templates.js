Vue.component('tabList', {
  template: `
  <div class="tab-pane fade" :class="{  'show active': isActive }" :id="id" role="tabpanel" :aria-labelledby="forId">
  <h3 class="sectiontitle"><strong>{{title}}</strong></h3>
  <ul class="elements">
    <li v-for="item in items">
      <a :href="item.url !== '#' ? item.url:null" target="_blank"><em class="fa fa-angle-right"></em>{{item.title}}</a>
    </li>
  </ul>
</div>
  `,props: ['id', 'forId', 'isActive', 'title', 'items'],
  data() {
    return { }
  },
});

Vue.component('imageSlider', {
  template: `
<div>
  <div class="title-leftborder-wrap">
    <h3 class="thm-titlecustomstyle">{{title}}</h3>
  </div>
  <div class="themeum-topstories-control" style="left: 0px">
    <a class="left" role="button" :data-bs-target="'#'+ id" data-bs-slide="next" data-slide="next"><em class="fa fa-angle-right" style="color: #062a54"></em></a>
    <a class="right" role="button" :data-bs-target="'#'+ id" data-bs-slide="prev"><em class="fa fa-angle-left" style="color: #062a54"></em></a>
  </div>
  <div class="carousel-inner">
  <div v-for="(item, index) in items" :key="index" class="carousel-item" v-bind:class="{ 'active': index == 0 }">
    <div class="themeum-topstories-item">
      <a class="review-item-image" :href="item.url !== '#' ? item.url:null">
        <img alt="" class="img-responsive" :src="item.image"/>
      </a>
      <div>
        <span class="ads-meta-date">
          <span v-text="item.text"></span>
        </span>
      </div>
    </div>
  </div>
</div>
  `,props: ['id', 'title', 'items'],
  data() {
    return { }
  },
});