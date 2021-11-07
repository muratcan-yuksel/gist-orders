<template>
  <div>
    <h1>Home</h1>
    <AddOrder />
    <DisplayOrder />
  </div>
</template>

<script>
import AddOrder from "../components/AddOrder.vue";
import DisplayOrder from "../components/DisplyOrder.vue";
export default {
  components: { AddOrder, DisplayOrder },
};
</script>

<style></style>
