<template>
    <div>
        {{ getRack }}<br />
        <form method="post" @submit.prevent="postNow">
            <button type="submit" name="button">Submit</button>
        </form>
        <router-link to="/rack/1" :num="1"> <button>1</button></router-link><router-link to="/rack/2" :num="2"><button>2</button></router-link>
        <router-view @rack="updateRack" :key="$route.fullPath"></router-view>
        <param-options></param-options>
    </div>
</template>

<script>
import Rack from "./components/Rack";
import ParamOptions from "./components/ParamOptions";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "App",
  components: {
    Rack,
    ParamOptions
  },
  data() {
    return {
      rackNum: 0,
      rack: {}
    };
  },
  updated() {
    this.setRack(this.rack);
  },
  methods: {
    ...mapActions(["setRack"]),
    updateRack(rackObj) {
      this.rack = rackObj;
      this.rackNum = rackObj.id;

      //var rackStorage = window.localStorage;
      //var rackObject = this.rack;
      console.log(
        "Rack Num: " + this.rackNum + " Rack: " + JSON.stringify(this.rack)
      );

      // Put the object into storage
      window.localStorage.setItem(this.rackNum, JSON.stringify(this.rack));

      // Retrieve the object from storage
      var retrievedObject = window.localStorage.getItem(this.rackNum);

      console.log("retrievedObject: ", JSON.parse(retrievedObject));

      this.rack = rackObj;
      this.rackNum = rackObj.id;
      this.setRack(this.rack);
    },
    postNow() {
      // var rack = JSON.stringify(this.rack);
     
      axios
        .post("http://localhost:3000/rack/10", this.rack, {
          headers: {
            "Content-type": "application/json"
          }
        })
        //.then(r => console.log("r: ", JSON.stringify(r, null, 3)));
        .then(r => console.log("r: ", r.data.rows));
    }
  },
  computed: {
    ...mapGetters(["getRack"])
  }
};
</script>

<style scoped>
</style>

