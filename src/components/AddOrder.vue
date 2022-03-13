<template>
  <div>
    <div v-if="display">
      <h1 id="title">Gist Leather Craft</h1>
      <h1 id="title">Sipariş Sistemi</h1>
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
        label="Ürün Stok Kodu"
        v-model="ürünAdı"
        validation="required"
      />
      <!-- dosya ekleme -->
      <div class="inputFields">
        <div class="inputs">
          <h5>Ürün fotoğrafı</h5>
          <input @change="handleChange" type="file" />
        </div>
        <div class="inputs">
          <h5>Barkod</h5>
          <input @change="handlePDF" type="file" />
        </div>
      </div>

      <!-- ürün rengi -->
      <div>
        <b-dropdown id="dropdown-1" :text="renk" class="m-md-2">
          <b-dropdown-item @click="handleColor">Vidala Brown</b-dropdown-item>
          <b-dropdown-item @click="handleColor"
            >Vidala Dark Brown</b-dropdown-item
          >
          <b-dropdown-item @click="handleColor">Grey</b-dropdown-item>
          <b-dropdown-item @click="handleColor">Black</b-dropdown-item>
          <b-dropdown-item @click="handleColor">Crazy Brown</b-dropdown-item>
          <b-dropdown-item @click="handleColor"
            >Crazy Dark Brown</b-dropdown-item
          >
          <b-dropdown-item @click="handleColor">Crazy Grey</b-dropdown-item>
          <b-dropdown-item @click="handleColor">Özel</b-dropdown-item>
        </b-dropdown>
      </div>
      <!-- boyut -->
      <FormulateInput type="text" label="Boyut" v-model="boyut" />
      <!-- kişiselleştirme -->
      <FormulateInput
        type="text"
        label="Kişiselleştirme"
        v-model="kişiselleştirme"
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
      <b-button class="btn" @click="handleInput" variant="success"
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
import { db, app } from "../firebase/db";
export default {
  data() {
    return {
      mağazaAdı: "",
      ürünAdı: "",
      adet: 0,
      not: "",
      file: "",
      fileName: "",
      pdf: "",
      pdfName: "",
      boyut: "",
      kişiselleştirme: "",
      renk: "Renk",
      display: true,
    };
  },
  //these two async methods are to get the downloadable url and the name of the cloud storage items
  methods: {
    async handleChange(e) {
      const file = e.target.files[0];
      const storageRef = app.ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      this.file = await fileRef.getDownloadURL();
      this.fileName = e.target.files[0].name;
    },
    async handlePDF(e) {
      const file = e.target.files[0];
      const storageRef = app.ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      this.pdf = await fileRef.getDownloadURL();
      this.pdfName = e.target.files[0].name;
    },
    handleInput() {
      if (this.mağazaAdı != "" && this.ürünAdı != "" && this.adet != 0) {
        db.collection("orders").doc().set({
          mağazaAdı: this.mağazaAdı,
          ürünAdı: this.ürünAdı,
          ürünAdedi: this.adet,
          boyut: this.boyut,
          kişiselleştirme: this.kişiselleştirme,
          müşteriNotu: this.not,
          file: this.file,
          fileName: this.fileName,
          pdf: this.pdf,
          pdfName: this.pdfName,
          renk: this.renk,
          siparişTarihi: new Date().toLocaleString(),
          timeStamp: Date.now(),
        });
        this.display = false;
      } else {
        alert("lütfen bütün gerekli alanları doldurunuz!");
      }
    },
    handleColor(e) {
      console.log(e.target.textContent);
      this.renk = e.target.textContent;
    },
  },
};
</script>
<style scoped>
#title {
  /* margin-left: 4em;
  margin-right: 4em; */
}
/* .inputFields {
  display: flex;
  justify-content: space-around;
} */
.inputs {
  margin: 10px;
}
.success {
  margin: 5em;
}
.btn {
  margin-bottom: 2em;
  margin-top: 1em;
}
</style>
