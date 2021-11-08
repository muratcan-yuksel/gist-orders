<template>
  <div>
    <h1>files</h1>
    <input @change="handleChange" type="file" />
  </div>
</template>

<script>
import { app } from "../firebase/db";
export default {
  data() {
    return { fileUrl: "" };
  },
  methods: {
    async handleChange(e) {
      const file = e.target.files[0];
      const storageRef = app.ref();
      const fileRef = storageRef.child(file.name);
      this.fileUrl = await fileRef.put(file);
      console.log(this.fileUrl);
    },
  },
};
</script>

<style></style>
