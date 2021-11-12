<template>
  <div>
    <page-title :pageName="pageName" :pageExplain="pageExplain"></page-title>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
  name: 'PlayListPage',

  components: {
    PageTitle
  },

  data () {
    return {
      pageName: document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length - 4),
      pageExplain: 'About 페이지의 유형B 입니다.'
    }
  }
}
</script>
