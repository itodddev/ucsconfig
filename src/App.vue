<template>
    <div>
        {{ getRack }}<br />
        <router-link to="/rack/1" :num="1"> <button>1</button></router-link><router-link to="/rack/2" :num="2"><button>2</button></router-link>
        <router-view @rack="updateRack"></router-view>
        <br>
        <param-options></param-options>
    </div>
</template>

<script>
import Rack from "./components/Rack";
import ParamOptions from "./components/ParamOptions";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "App",
    components: {
        Rack,
        ParamOptions
    },
    data() {
        return{
          rack: {},
          rackNum: 0
        }
    },
    methods: {
        ...mapActions(["setRack"]),
        updateRack(rackObj) {

           this.rack = rackObj;
           this.rackNum = rackObj.id;
           this.setRack(this.rack);
        },
    },
    computed: mapGetters(["getRack"]),
}
</script>

<style scoped>

</style>

