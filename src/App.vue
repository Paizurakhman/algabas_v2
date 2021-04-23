<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
.contacts_form {
  padding: 150px 0;
  background-color: #fbf9f5;
  position: relative;
  .fix_el:nth-child(1) {
    position: absolute;
    left: 10%;
    bottom: 30%;
  }
   .fix_el:nth-child(2) {
    position: absolute;
    left: 10%;
    top: 30%;
  }
   .fix_el:nth-child(3) {
    position: absolute;
    right: 10%;
    top: 30%;
  }
   .fix_el:nth-child(4) {
    position: absolute;
    right: 10%;
    bottom: 10%;
  }
  form {
    margin-top: 70px;
    input {
      width: 100%;
      display: block;
      margin-bottom: 30px;
      padding: 30px;
      border: none;
      &::placeholder {
        font-weight: 600;
        color: #000;
      }
    }
    input[type="submit"] {
      margin-top: 60px;
    }
    .main-button {
      width: fit-content;
      padding: 0 60px;
      margin: 0 auto;
    }
  }
  .map {
    margin-top: 150px;
  }
}

@media only screen and (max-width: 768px) {
  .contacts_form {
    padding: 50px 0;
    .map {
      margin-top: 50px;
    }
  }
}
</style>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Navbar },
};
</script>