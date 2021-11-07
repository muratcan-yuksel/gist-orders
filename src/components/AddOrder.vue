<template>
  <div>
    <div v-if="display">
      <h1 id="title">
        Gist Leather Craft El Sanatları Atölyesi Sipariş Sistemi
      </h1>
      <!-- mağazaAdı -->
      <FormulateInput
        type="text"
        label="Mağaza adı"
        v-model="mağazaAdı"
        validation="required"
      />
      <!-- ürünAdı -->
      <FormulateInput
        type="text"
        label="Sipariş edilecek ürün"
        v-model="ürünAdı"
        validation="required"
      />
      <!-- email -->
      <FormulateInput
        type="text"
        label="email adresi"
        v-model="email"
        validation="required"
      />
      <!-- telefon -->
      <FormulateInput
        type="number"
        label="Telefon numarası"
        v-model="tel"
        validation="required"
      />
      <!-- ürün adedi -->
      <FormulateInput
        type="number"
        label="Sipariş edilecek ürün adedi"
        v-model="adet"
        validation="required"
      />
      <!-- not -->
      <FormulateInput
        type="textarea"
        label="Eklemek istediğiniz not"
        v-model="not"
      />
      <b-button @click="handleInput" variant="success"
        >Siparişi Onayla</b-button
      >
    </div>
    <div class="success" v-else>
      <h2>
        Siparişiniz bize ulaşmıştır. En kısa zamanda verdiğiniz bilgilerle
        sizinle iletişime geçeceğiz.
      </h2>
      <h2>
        Gist Leather Craft El Sanatları Atölyesi ile çalışmayı seçtiğiniz için
        teşekkür ederiz.
      </h2>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/db";

export default {
  data() {
    return {
      mağazaAdı: "",
      ürünAdı: "",
      email: "",
      tel: 0,
      adet: 0,
      not: "",
      display: true,
    };
  },
  methods: {
    handleInput() {
      if (
        this.mağazaAdı != "" &&
        this.ürünAdı != "" &&
        this.email != "" &&
        this.tel != "" &&
        this.adet != 0
      ) {
        db.collection("orders").doc().set({
          mağazaAdı: this.mağazaAdı,
          ürünAdı: this.ürünAdı,
          email: this.email,
          telefon: this.tel,
          ürünAdedi: this.adet,
          müşteriNotu: this.not,
          siparişTarihi: new Date().toLocaleString(),
          timeStamp: Date.now(),
        });
        this.display = false;
      } else {
        alert("lütfen bütün gerekli alanları doldurunuz!");
      }
    },
  },
};
</script>
<style scoped>
#title {
  margin-left: 4em;
  margin-right: 4em;
}
.success {
  margin: 5em;
}
</style>
