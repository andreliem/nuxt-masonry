<template>
  <div>
    <no-ssr>
      <div v-masonry transition-duration="3s" item-selector=".item" class="masonry-container">
        <div v-masonry-tile class="item" :key="index" v-for="(item, index) in blocks">
          {{item}} - {{index}}
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
  // import Vue from 'vue'
  export default {
    data () {
      return {
        blocks: [
          'Initial Block',
          'Initial Block 2'
        ]
      }
    },
    mounted () {
      // Vue.redrawVueMasonry()
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .item {
    border: 1px solid grey;
    width: 200px;
  }
  .masonry-container {
    width: 55%;
    margin: 0 auto;
  }
</style>
