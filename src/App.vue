<template>
  <div id="app">
    <h3 class="">Tic-Tac-Toe</h3>
    <Content></Content>
  </div>
</template>

<script>
import Content from "@/views/content";
export default {
  name: "App",
  components: {
    Content: Content
  }
};
</script>

<style lang="scss">
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

}
h3{
  text-align: center;
  margin: 30px 0;

}

</style>
