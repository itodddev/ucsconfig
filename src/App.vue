<template>
    <div>
        <rack-item row="1"></rack-item>
        <rack-item row="2"></rack-item>
        <param-options></param-options>
    </div>
</template>

<script>
import RackItem from "./components/RackItem";
import ParamOptions from "./components/ParamOptions";

export default {
    name: "App",
    components: {
        ParamOptions,
        RackItem
    },
}
</script>

<style scoped>

</style>

