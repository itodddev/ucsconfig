<template>
    <div>
        <router-view></router-view>
        <br>
        <param-options></param-options>
    </div>
</template>

<script>
import Rack from "./components/Rack";
import ParamOptions from "./components/ParamOptions";

export default {
    name: "App",
    components: {
        Rack,
        ParamOptions
    },
}
</script>

<style scoped>

</style>

