---
title: About Us
---

<div class="text-center text-xs-center">
  <h3>{{ $t("about.title") }}</h3>
</div>


<div class="v-responsive__content v-container text-xs-center">
  <div style="display: flex; justify-content: center;">
    <img src="../assets/logo.png" style="width:100px;height:100px;">
  </div>
  
  <p>
    {{ $t("about.text1") }} <span style="font-weight: bold;">THE HOSPITALITY CENTER</span> {{ $t("about.text2") }}
    <a href="https://thehospitalitycenterus.com/" target="_blank">{{ $t("about.webpage") }}</a>
    <img src="../assets/image1-about.jpg" class="my-3">
  </p>
  <div>
    <a href="#" onclick="window.history.back()" class="font-weight-bold text-primary" style="font-size:0.75rem !important">{{ $t("about.back") }}</a>
  </div>
</div>
