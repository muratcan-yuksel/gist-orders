<template>
  <div class="home">
    <h1>Gist orders</h1>
    <!-- <p>{{ orders }}</p> -->
    <div v-if="orders.length > 0">
      <div class="order" v-for="(order, index) in orders" :key="index">
        <p>Mağaza adı : {{ order.mağazaAdı }} - id : {{ order.id }}</p>
        <p>Ürün Adı: {{ order.ürünAdı }}</p>
        <p>Ürün Adedi: {{ order.ürünAdedi }}</p>
        <p>Müşteri Notu: {{ order.müşteriNotu }}</p>
        <p>Telefon: {{ order.telefon }}</p>
        <p>Email: {{ order.email }}</p>
        <b-button @click="handleDelete" variant="danger">Siparişi Sil</b-button>
        <p>{{ order.id }}</p>
      </div>
    </div>
    <div v-else>
      <h2>Gösterilecek sipariş bulunmamaktadır.</h2>
    </div>
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
      orderId: "",
    };
  },
  firestore: {
    orders: db.collection("orders"),
  },
  mounted() {
    // db.collection("orders").doc("02gSeu4Uuvi7wYgVwsDi").update(
    //   {
    //     name: "name",
    //   },
    //   { merge: true }
    // );
    // db.collection("orders").doc("12").set({ name: "namesdf" });
    // db.collection("orders").doc("12").delete();
    console.log("This component's unique id is: " + this.uid);
  },
  methods: {
    handleDelete(e) {
      console.log(e.target.nextElementSibling.textContent);
      // console.log(this.$parent);
    },
  },
};
</script>
<style scoped>
.title {
  font-weight: 700;
}
.order {
  border: 2px solid black;
}
</style>
