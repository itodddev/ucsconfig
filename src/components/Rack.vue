<template>
    <div>
        <h1>Rack {{ num }}</h1>
        <br/>
        <RackRow v-for="(row, index) in rackObj.rows" @rackRows="updateRows" :row="index" :key="index"></RackRow>
    </div>
</template>

<script>
import RackRow from "./RackRow";
import Vue from "vue";

export default {
  name: "Rack",
  props: ["num"],
  data() {
    return {
      rackObj: {
        id: this.num,
        rows: Array(15)
      }
    };
  },
  components: {
    RackRow
  },
  methods: {
    updateRows: function(rowNum, rowItem) {
      Vue.set(this.rackObj.rows, rowNum, rowItem);
      // this.rackObj.rows[rowNum] = rowItem;
      this.$emit("rack", this.rackObj, this.rackObj.id);
    }
  },
  updated() {
    this.$emit("rack", this.rackObj, this.rackObj.id);
  },
  beforeUpdate() {
    this.$emit("rack", this.rackObj, this.rackObj.id);
  }
};
</script>

<style scoped>
</style>
