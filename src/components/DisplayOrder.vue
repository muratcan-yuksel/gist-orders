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
        <div class="fileFlex">
          <div class="fileContainer">
            <img class="productImage" :src="order.file" :alt="order.fileName" />
          </div>
          <div class="pdfContainer">
            <a :href="order.pdf" download :id="order.pdfName">
              <p>Barkod</p>
            </a>
          </div>
        </div>
        <b-button @click="handleDelete" variant="danger">Siparişi Sil</b-button>
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
import { db, app } from "../firebase/db";

// var regex = "/(?<=\o/)(.*?)(?=\])/" ;
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
      // //-----storage delete
      //this part is to delete from the cloud storage
      //delete image
      // // gs Bucket URL
      var fileUrl = `gs://gist-orders.appspot.com/${e.target.previousElementSibling.firstElementChild.firstElementChild.alt}`;

      // Create a reference to the file to delete
      var fileRef = app.refFromURL(fileUrl);
      // Delete the file using the delete() method
      fileRef
        .delete()
        .then(function () {
          // File deleted successfully
          console.log("image Deleted");
        })
        .catch(function (error) {
          // Some Error occurred
          console.log(error);
        });

      //delete pdf
      var pdfUrl = `gs://gist-orders.appspot.com/${e.target.previousElementSibling.lastElementChild.firstElementChild.id}`;

      // Create a reference to the file to delete
      var pdfRef = app.refFromURL(pdfUrl);
      // Delete the file using the delete() method
      pdfRef
        .delete()
        .then(function () {
          // File deleted successfully
          console.log("pdf Deleted");
        })
        .catch(function (error) {
          // Some Error occurred
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.title {
  font-weight: 700;
}
.fileFlex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.fileContainer {
  height: 250px;
  width: 250px;
  border: 1px solid black;
}
.pdfContainer {
  border: 2px solid black;
  height: 100px;
  width: 100px;
  padding: 1em;
  font-weight: 700;
}
.productImage {
  object-fit: fill;
  height: 250px;
  width: 250px;
}
.order {
  border: 2px solid black;
  background-color: rgb(235, 228, 228);
  margin: 2em;
}
</style>
