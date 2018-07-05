<template>
    <div>
        <rack-item @rackRows="updateRows" row="0"></rack-item>
        <rack-item @rackRows="updateRows" row="1"></rack-item>
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
                rows: []
            }
        }
    },
    components: {
        RackItem
    },
    methods: {
        updateRows: function(rowNum, rowItem) {
            console.log(rowItem);
            this.rackObj.rows[rowNum] = rowItem;
        }
    },
}
</script>

<style scoped>

</style>
