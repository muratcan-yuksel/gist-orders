<template>
  <div id="footerComponent">
    <p id="footerPara">
      Made by
      <a
        id="myLink"
        href="http://muratcan-yuksel.github.io/minimal "
        target="”_blank”"
        >Murat Can Yüksel</a
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
#footerComponent {
  height: 3em;
  width: 100%;
  background-color: rgb(32, 32, 32);
  color: white;
}
#footerPara {
  margin: 0.5em;
  padding: 0.7em;
  font-size: 0.9em;
}
#myLink {
  text-decoration: none;
  color: white;
  border-bottom: 1px groove white;
}
</style>
