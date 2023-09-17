<template>
  <div class="rich-text">
    <EditorBar :editor="editor"></EditorBar>
    <EditorContent class="editorContent" :editor="editor"></EditorContent>
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import EditorBar from '@/components/editor/editorBar.vue'
TextAlign.configure({
  defaultAlignment: 'right'
})
const editor = useEditor({
  content: ` <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>`,
  extensions: [StarterKit, Underline, TextAlign],
  autofocus: true,
  editable: true
})
</script>

<style scoped lang="less">
.rich-text {
  width: 100%;
  height: 600px !important;
  border: 1px solid #000;
  background-color: #fff;
  box-shadow: 5px 8px #cbcbcb;
  overflow: hidden;
  .editorContent {
    border: none !important;
    margin-top: 15px;
    padding: 0 10px;
  }
  v-deep .tiptap {
    > * + * {
      margin-top: 0.75em;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 2rem 0;
    }
  }
}
</style>
