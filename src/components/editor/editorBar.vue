<template>
  <div class="editorBar">
    <button
      @click="editor?.chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor?.isActive('bold') }"
      title="加粗"
    >
      <i class="iconfont">&#xec84;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleItalic().run()"
      :class="{ 'is-active': editor?.isActive('italic') }"
      title="斜体"
    >
      <i class="iconfont">&#xec86;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleUnderline().run()"
      :class="{ 'is-active': editor?.isActive('underline') }"
      title="下划线"
    >
      <i class="iconfont">&#xec85;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleStrike().run()"
      :class="{ 'is-active': editor?.isActive('strike') }"
      title="删除线"
    >
      <i class="iconfont">&#xe7f9;</i>
    </button>
    <button
      @click="editor?.chain().focus().setTextAlign('left').run()"
      :class="{ 'is-active': editor?.isActive({ textAlign: 'left' }) }"
      title="左对齐"
    >
      <i class="iconfont">&#xec87;</i>
    </button>
    <button
      @click="editor?.chain().focus().setTextAlign('center').run()"
      :class="{ 'is-active': editor?.isActive({ textAlign: 'center' }) }"
      title="居中"
    >
      <i class="iconfont">&#xec80;</i>
    </button>
    <button
      @click="editor?.chain().focus().setTextAlign('right').run()"
      :class="{ 'is-active': editor?.isActive({ textAlign: 'right' }) }"
      title="右对齐"
    >
      <i class="iconfont">&#xec82;</i>
    </button>
    <button title="表格">
      <i class="iconfont">&#xe796;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor?.isActive('bulletList') }"
      title="有序列表"
    >
      <i class="iconfont">&#xe604;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleOrderedList().run()"
      :class="{ 'is-active': editor?.isActive('orderedList') }"
      title="无序列表"
    >
      <i class="iconfont">&#xe625;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor?.isActive('codeBlock') }"
      title="代办"
    >
      <i class="iconfont">&#xeabb;</i>
    </button>
    <button title="引用">
      <i class="iconfont">&#xe60c;</i>
    </button>
    <button title="代码块">
      <i class="iconfont">&#xec83;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'is-active': editor?.isActive('heading', { level: 1 }) }"
      title="h1"
    >
      <i class="iconfont">&#xe61a;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'is-active': editor?.isActive('heading', { level: 2 }) }"
      title="h2"
    >
      <i class="iconfont">&#xe61b;</i>
    </button>
    <button
      @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()"
      :class="{ 'is-active': editor?.isActive('heading', { level: 3 }) }"
      title="h3"
    >
      <i class="iconfont">&#xe60b;</i>
    </button>
    <button
      @click="editor?.chain().focus().undo().run()"
      :disabled="!editor?.can().undo()"
      title="回退"
    >
      <i class="iconfont">&#xe63f;</i>
    </button>
    <button
      @click="editor?.chain().focus().redo().run()"
      :disabled="!editor?.can().redo()"
      title="前进"
    >
      <i class="iconfont">&#xe646;</i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { type Editor } from '@tiptap/vue-3'

const props = defineProps({
  editor: {
    type: Object
  }
})
</script>

<style scoped lang="less">
.editorBar {
  width: 100%;
  height: 25px;
  line-height: 25px;
  padding: 10px 10px;
  button {
    background-color: #fff;
    border: none;
    padding: 0 15px;
  }
  border-bottom: 2px solid #666;
}
.is-active {
  color: skyblue;
}
</style>
