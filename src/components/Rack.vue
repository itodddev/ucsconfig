<template>
    <div>
        <h1>Rack {{ num }}</h1>
        <br/>
        <rack-item v-for="(row, index) in rackObj.rows" @rackRows="updateRows" :row="index" :key="index"></rack-item>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import RackItem from "./RackItem";

export default {
    name: "Rack",
    props:["num"],
    data() {
        return {
            rackObj: {
                id: this.num,
                rows: Array(15)
            }
        }
    },
    components: {
        RackItem
    },
    methods: {
        updateRows: function(rowNum, rowItem) {
            this.rackObj.rows[rowNum] = rowItem;
            this.$emit("rack", this.rackObj);
        }
    },
    updated() {
        //var rack = { id: this.num, items: this.rackObj }
        //console.log(rack);
    },
    watch: {
        rackObj: function(newRackObj) {
            console.log(newRackObj);
            var rack = { id: this.num, items: this.rackObj }
            console.log(rack);
        }
    }
}
</script>

<style scoped>

</style>
