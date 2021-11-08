<template>
  <div>
    <h1>files</h1>
    <input @change="handleChange" type="file" />
  </div>
</template>

<script>
import { app } from "../firebase/db";
export default {
  methods: {
    handleChange(e) {
      const file = e.target.files[0];
      const storageRef = app.ref();
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log("uploaded", file.name);
      });
    },
  },
};
</script>

<style></style>
