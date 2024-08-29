<template>
  <footer>
    <div>
      <h4 class="footer__logo">
        <img src="../../public/images/Logo.svg" alt="Logo" />
        عقاري
      </h4>
      <ul class="footer__list">
        <h5>تواصل معنا</h5>
        <li> <font-awesome-icon icon="phone" /> +2010221522345 </li>
        <li> <font-awesome-icon icon="phone" /> +2010221522345 </li>
        <h5> بريد إلكتروني</h5>
        <li> <font-awesome-icon icon="envelope" /> contact@3qary.com </li>
        <li> <font-awesome-icon icon="envelope" />  info@3qary.com</li>
      </ul>
    </div>

    <div>
      <h4>روابط سريعة</h4>
      <ul class="footer__list">
        <li><a href="#">شروط الإستخدام</a></li>
        <li><a href="#">سياسة الخصوصية</a></li>
        <li><a href="#">خدماتنا</a></li>
        <li><a href="#">الأسئلة الشائعة</a></li>
        <li><a href="#">تواصل معنا</a></li>
        <li><a href="#">من نحن</a></li>
      </ul>
    </div>

    <div>
      <h4>بحث شائع</h4>
      <ul class="footer__list">
        <li><a href="#">شقق للإيجار</a></li>
        <li><a href="#">شقق للبيع</a></li>
        <li><a href="#">مكاتب للإيجار</a></li>
        <li><a href="#">أرض للبيع</a></li>
        <li><a href="#">أرض للإيجار</a></li>
      </ul>
    </div>
    <div>
      <h4>ابق على تواصل دائم معنا</h4>
      <input type="email" placeholder="الإيميل" class="inpt__sec" required />
      <input type="password" placeholder="كلمة المرور" class="inpt__sec" required />
      <input type="submit" value="تسجيل الدخول" class="btn__primary btn__small" style="margin-bottom: 20px;"/>

      <span> حمل التطبيق الآن على </span>
      <a><img src="../../public/images/google-play.png" alt="Google Play" class="store__logo" /></a>
    <a><img src="../../public/images/App-Store.png" alt="Play Store" class="store__logo"/></a>
    </div>
  </footer>  
</template>

<script setup></script>

<style lang="scss" scoped>
</style>
