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
    db.collection("orders")
      .get()
      .then((querySnapshot) => {
        const orders = querySnapshot.docs.map((doc) => doc.data());
        // do something with orders
        console.log(orders);
      });
  },
};
</script>
