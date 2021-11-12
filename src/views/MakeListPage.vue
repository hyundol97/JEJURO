<template>
  <div>
    <page-title :pageName="pageName" :pageExplain="pageExplain"></page-title>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
  name: 'MakeListPage',

  components: {
    PageTitle
  },

  data () {
    return {
      pageName: document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length - 4),
      pageExplain: '나만의 리스트를 생성!'
    }
  }
}
</script>
