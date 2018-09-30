<template>
  <el-row>
    <quill-editor v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @change="onEditorChange($event)">
    </quill-editor>
  </el-row>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'QuillEditor',
  data () {
    return {
      editorOption: []
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorBlur () {},
    onEditorFocus () {},
    onEditorChange () {}
  }
}
</script>

<style scoped>

</style>
