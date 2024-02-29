<script setup lang="ts">
  import { Editor } from "@tiptap/vue-3";
  import Button from "@/components/ui/button/Button.vue";

  defineProps({
    editor: Editor,
  });
</script>

<template>
  <div v-if="editor" class="flex gap-2 flex-wrap">
    <Button
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :variant="editor.isActive('bold') ? 'selected' : 'unselected'"
    >
      bold
    </Button>
    <Button
      @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :variant="editor.isActive('italic') ? 'selected' : 'unselected'"
    >
      italic
    </Button>
    <Button
      @click="editor.chain().focus().toggleStrike().run()"
      :disabled="!editor.can().chain().focus().toggleStrike().run()"
      :variant="editor.isActive('strike') ? 'selected' : 'unselected'"
    >
      strike
    </Button>
    <Button
      @click="editor.chain().focus().setParagraph().run()"
      :variant="editor.isActive('paragraph') ? 'selected' : 'unselected'"
    >
      paragraph
    </Button>
    <Button
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :variant="
        editor.isActive('heading', { level: 1 }) ? 'selected' : 'unselected'
      "
    >
      h1
    </Button>
    <Button
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :variant="
        editor.isActive('heading', { level: 2 }) ? 'selected' : 'unselected'
      "
    >
      h2
    </Button>
    <Button
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      :variant="
        editor.isActive('heading', { level: 3 }) ? 'selected' : 'unselected'
      "
    >
      h3
    </Button>
    <Button
      @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      :variant="
        editor.isActive('heading', { level: 4 }) ? 'selected' : 'unselected'
      "
    >
      h4
    </Button>
    <Button
      @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      :variant="
        editor.isActive('heading', { level: 5 }) ? 'selected' : 'unselected'
      "
    >
      h5
    </Button>
    <Button
      @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      :variant="
        editor.isActive('heading', { level: 6 }) ? 'selected' : 'unselected'
      "
    >
      h6
    </Button>
    <Button
      @click="editor.chain().focus().toggleBulletList().run()"
      :variant="editor.isActive('bulletList') ? 'selected' : 'unselected'"
    >
      bullet list
    </Button>
    <Button
      @click="editor.chain().focus().toggleOrderedList().run()"
      :variant="editor.isActive('orderedList') ? 'selected' : 'unselected'"
    >
      ordered list
    </Button>
    <Button
      @click="editor.chain().focus().setTextAlign('left').run()"
      :variant="
        editor.isActive({ textAlign: 'left' }) ? 'selected' : 'unselected'
      "
    >
      alignLeft
    </Button>
    <Button
      @click="editor.chain().focus().setTextAlign('center').run()"
      :variant="
        editor.isActive({ textAlign: 'center' }) ? 'selected' : 'unselected'
      "
    >
      alignCenter
    </Button>
    <Button
      @click="editor.chain().focus().setTextAlign('right').run()"
      :variant="
        editor.isActive({ textAlign: 'right' }) ? 'selected' : 'unselected'
      "
    >
      alignRight
    </Button>
    <!-- <Button
      @click="editor.chain().focus().setTextAlign('justify').run()"
      :variant="
        editor.isActive({ textAlign: 'justify' }) ? 'selected' : 'unselected'
      "
    >
      alignJustify
    </Button> -->
    <Button
      variant="unselected"
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor.can().chain().focus().undo().run()"
    >
      undo
    </Button>
    <Button
      variant="unselected"
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor.can().chain().focus().redo().run()"
    >
      redo
    </Button>
  </div>
</template>
