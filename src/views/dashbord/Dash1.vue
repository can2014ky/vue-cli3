<template>
  <div>
    <div>Welcome to GOSINT!111</div>
    <v-jsoneditor v-model="json" :options="options" :plus="false" width="100px" height="400px"></v-jsoneditor>
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
        'hello': 'vue',
        info: {
          name: 'lily',
          age: '18',
          sex: 'male'
        },
        info1: {
          name: 'lily',
          age: '18',
          sex: 'male'
        },
        info2: {
          name: 'lily',
          age: '18',
          sex: 'male'
        },
        info3: {
          name: 'lily',
          age: '18',
          sex: 'male'
        },
        info4: {
          name: 'lily',
          age: '18',
          sex: 'male',
          info6: {
            name: 'lily',
            age: '18',
            sex: 'male'
          }
        }
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
