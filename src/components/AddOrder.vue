<template>
  <div>
    <h1>Add order</h1>
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
      type="text"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      mağazaAdı: "",
      ürünAdı: "",
      email: "",
      tel: "",
      adet: 0,
      not: "",
    };
  },
};
</script>
