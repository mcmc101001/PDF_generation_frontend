<script setup lang="ts">
  import { useEditor, EditorContent } from "@tiptap/vue-3";
  import StarterKit from "@tiptap/starter-kit";
  import TextAlign from "@tiptap/extension-text-align";
  import EditorToolbar from "@/components/editor/EditorToolbar.vue";
  import Button from "@/components/ui/button/Button.vue";
  import { getPDF } from "@/api/getPDF";
  import { ref } from "vue";

  const pdfUrl = ref("");

  const editor = useEditor({
    content: `
        <h2>
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
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
      `,
    autofocus: true,
    editable: true,
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "left",
      }),
    ],
    editorProps: {
      attributes: {
        // apply max-w-full as prose applies max-width: 65ch
        class:
          "prose max-w-full prose-slate dark:prose-invert prose-sm sm:prose-base xl:prose-lg focus:outline-none mt-4",
      },
    },
  });

  const generatePDF = async () => {
    if (!editor.value) return;
    const request = {
      file_name: "test",
      content: editor.value?.getJSON().content,
    };

    console.log(request);

    const pdf = await getPDF(request);
    pdfUrl.value = URL.createObjectURL(pdf);
  };
</script>

<template>
  <div class="h-full w-full flex gap-4">
    <div class="flex-1 flex w-full flex-col items-center">
      <Button v-if="editor" @click="generatePDF" class="mb-4"
        >Generate PDF</Button
      >
      <div v-if="editor" class="border-slate-800 p-5 border rounded-md">
        <EditorToolbar :editor="editor" />
        <EditorContent :editor="editor" />
      </div>
    </div>
    <div class="bg-primary w-px min-h-screen h-full"></div>
    <div
      v-if="pdfUrl === ''"
      class="flex-1 w-full min-h-96 bg-primary rounded-2xl text-primary-foreground h-full flex items-center justify-center"
    >
      PDF Output
    </div>
    <iframe v-else :src="pdfUrl" class="flex-1"></iframe>
  </div>
</template>
