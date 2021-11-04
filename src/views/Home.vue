<template>
  <div class="home">
    <HelloWorld />
    <Stat />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "../components/Hero.vue";
import Stat from "../components/Stat.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Hero,
    Stat,
  },
};
</script>
