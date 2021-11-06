<template>
  <div class="home">
    <h1>Gist orders</h1>
    <p>{{ orders }}</p>
  </div>
</template>

<script>
//import firebase database
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
    db.collection("orders").doc("02gSeu4Uuvi7wYgVwsDi").update(
      {
        name: "name",
      },
      { merge: true }
    );
    db.collection("orders").doc("12").set({ name: "namesdf" });
    // db.collection("orders").doc("12").delete();
    console.log("This component's unique id is: " + this.uid);
  },
};
</script>
