<template>
    <div>
        <h1>Rack {{ num }}</h1>
        {{ getRacks }}
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
        },
        ...mapActions(["setRack"]),
    },
    computed: mapGetters(["getRacks"]), // Move to App
    created() {
        this.setRack(this.rackObj);
     }, 
    updated() {
        this.setRack(this.rackObj);
    }
}
</script>

<style scoped>

</style>
