<template>
    <div>
        <rack-item v-for="(row, index) in rackObj.rows" @rackRows="updateRows" :row="index" :key="index"></rack-item>
    </div>
</template>

<script>
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
        }
    },
}
</script>

<style scoped>

</style>
