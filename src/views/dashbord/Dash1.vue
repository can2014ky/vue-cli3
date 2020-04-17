<template>
  <div>
    <div>Welcome to GOSINT!111</div>
    <v-jsoneditor v-model="json" :options="options" height="400px"></v-jsoneditor>
  </div>
</template>
<script>
// https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options?blank
import VJsoneditor from 'v-jsoneditor'
export default {
  components: {
    VJsoneditor
  },
  data() {
    return {
      json: {
        'hello': 'vue'
      },
      options: {
        mainMenuBar: false,
        mode: 'code',
        onEditable: ()=> {}
      }
    }
  }
}
</script>
