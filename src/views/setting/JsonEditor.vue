<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
// 必须引入
import 'codemirror/lib/codemirror.css'
import CodeMirror from 'codemirror'


import 'codemirror/theme/idea.css'
// require('script-loader!jsonlint');
import 'codemirror/addon/lint/lint.css'
import 'codemirror/mode/javascript/javascript'
// import 'codemirror/addon/lint/lint'
// import 'codemirror/addon/lint/json-lint'

import 'codemirror/addon/fold/foldgutter.css'

import 'codemirror/addon/fold/foldcode.js';

import 'codemirror/addon/fold/foldgutter.js';

import 'codemirror/addon/fold/brace-fold';

import 'codemirror/addon/edit/matchbrackets.js';


export default {
  name: 'JsonEditor',
  /* eslint-disable vue/require-prop-types */
  props: ['value'],
  data() {
    return {
      jsonEditor: false
    }
  },
  watch: {
    value(value) {
      const editorValue = this.jsonEditor.getValue()
      if (value !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
      }
    }
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'application/json',
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-lint-markers', 'CodeMirror-foldgutter'],
      theme: 'idea',
      lint: true,

      tabSize: 4,
      styleActiveLine: true,
      foldgutter: true,
      lineWrapping: true,
      foldGutter: true,
      matchBrackets: true,
      readOnly: true
    })
    this.jsonEditor.setSize('600px', '300px')
    this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
    // this.jsonEditor.on('change', cm => {
    //   this.$emit('changed', cm.getValue())
    //   this.$emit('input', cm.getValue())
    // })
  },
  methods: {
    getValue() {
      return this.jsonEditor.getValue()
    }
  }
}
</script>

<style scoped>
.json-editor{
  height: 100%;
  position: relative;
}
.json-editor >>> .CodeMirror {
  height: auto;
  min-height: 300px;
}
.json-editor >>> .CodeMirror-scroll{
  min-height: 300px;
}
.json-editor >>> .cm-s-rubyblue span.cm-string {
  color: #F08047;
}
</style>
