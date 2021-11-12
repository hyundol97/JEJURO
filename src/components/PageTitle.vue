<template>
  <div>
    <h1 id="page-name">{{pageName}}</h1>
    <p id="page-explain">{{pageExplain}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'AboutTypeA',
  props: ['pageName', 'pageExplain']
}
</script>

<style>
    #page-name {
      padding-top: 20px;
      padding-left: 30px;
      font-size: 60px;
    }
    #page-explain {
      padding-top: 20px;
      padding-left: 30px;
      font-size: 24px;
    }
</style>
