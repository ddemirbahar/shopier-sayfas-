<template>
  <div>
    <Header />
<Comp1 />
<div class="boş">

</div>
<Comp2/>
<Comp4/>
<Comp5/>
<Comp7/>
<Comp3/>
<div class="boş"></div>
<div class="boş"></div>
<Comp6/>
<div class="boş"></div>
<Comp8/>
<Footer/>


  </div>
</template>

<script setup lang="ts">
import Comp1 from './Comp1.vue';
import Comp2 from './Comp2.vue';
import Comp3 from './Comp3.vue';
import Comp4 from './Comp4.vue';
import Comp5 from './Comp5.vue';
import Comp6 from './Comp6.vue';
import Comp7 from './Comp7.vue';
import Comp8 from './Comp8.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';

</script>
<style scoped>

.boş{
  width: 100px;
  height: 300px;
  color: white;
}
</style>