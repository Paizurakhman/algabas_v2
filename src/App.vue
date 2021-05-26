<template>
  <div id="app">
    <Navbar :contacts="contactsData" />
    <router-view />
    <Footer :contacts="contactsData" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Navbar },
  data: () => ({
    header: "header",
    navFix: false,
    contactsData: null,
  }),
  mounted() {
    this.$axios
      .get(
        `https://admin.sadik-algabas.kz/api/get-contacts?lang=${this.$lang}`
      )
      .then((response) => (this.contactsData = response.data));
  },
};
</script>

<style lang="scss">
a.btn_a {
  text-decoration: none;
}
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
      margin-top: 30px;
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
    //.main-button {
    //  width: fit-content;
    //  padding: 0 60px;
    //  margin: 0 auto;
    //}
    .main-button {
      display: block;
      margin: 30px auto 0;
    }

    .invalid {
      border: 1px solid #ff7948 !important;
    }
  }

  .map {
    margin-top: 150px;
  }
}
.error {
  display: inline-block;

  color: #dc1717;
  font-size: 14px;
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