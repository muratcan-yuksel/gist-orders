<template>
  <div class="home">
    <h1>Gist orders</h1>
  </div>
</template>

<script>
import { db } from "../firebase/db";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      orders: [],
    };
  },
  firestore: {
    orders: db.collection("orders"),
  },
  mounted() {
    // console.log(this.orders);
  },
};
</script>
