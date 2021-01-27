<template>
  <div style="display:flex;justify-content:space-around;align-items:center;margin:2em 0">
    <Button @click="$refs.carosel.previous()">《</Button>

    <Carousel style="width:50%;display:inline-block;" ref="carosel">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>

    <Button @click="$refs.carosel.next()">》</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>