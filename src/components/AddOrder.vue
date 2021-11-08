<template>
  <div class="home">
    <h1>Siparişler</h1>
    <!-- <p>{{ orders }}</p> -->
    <div v-if="orders.length > 0">
      <div class="order" v-for="(order, index) in orders" :key="index">
        <p>Mağaza adı : {{ order.mağazaAdı }}</p>
        <p>Ürün Adı: {{ order.ürünAdı }}</p>
        <p>Boyut: {{ order.boyut }}</p>
        <p>Kişiselleştirme: {{ order.kişiselleştirme }}</p>
        <p>Renk: {{ order.renk }}</p>
        <p>Ürün Adedi: {{ order.ürünAdedi }}</p>
        <p>Siparişin verildiği tarih: {{ order.siparişTarihi }}</p>
        <p>Müşteri Notu: {{ order.müşteriNotu }}</p>
        <b-button class="btn" @click="handleDelete" variant="danger"
          >Siparişi Sil</b-button
        >
        <!-- hide the element from the user -->
        <p v-show="showing">{{ order.id }}</p>
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
      showing: false,
    };
  },
  firestore: {
    orders: db.collection("orders").orderBy("timeStamp", "asc"),
  },
  mounted() {
    // db.collection("orders").doc("12").set({ name: "namesdf" });
    // db.collection("orders").doc("12").delete();
    console.log("This component's unique id is: " + this.uid);
    // console.log(new Date().toLocaleString());
  },
  methods: {
    handleDelete(e) {
      //get the textcontent element next to the button
      //which is its id in firestore
      console.log(e.target.nextElementSibling.textContent);
      // console.log(this.$parent);
      //delete selected item from firebase and display at the same time
      db.collection("orders")
        .doc(e.target.nextElementSibling.textContent)
        .delete();
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
  background-color: rgb(235, 228, 228);
  margin: 2em;
}
.btn {
  margin: 2em;
}
</style>
