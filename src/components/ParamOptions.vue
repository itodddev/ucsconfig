<template>
    
<div class="columns">
    <div class="column has-text-centered">
        
        <!-- Rack RUs Parameter -->

        <div class="field is-horizontal">

            <div class="field-label">
                <label class="label">Rack RUs:</label>
            </div>

            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control">
                        <div class="select">
                        <select v-model="paramsObj.ruSelection">
                            <option> 18 </option>
                            <option> 24 </option>
                            <option> 30 </option>
                            <option> 36 </option>
                            <option> 42 </option>
                            <option> 48 </option>
                            <option> 54 </option>
                            <option> 60 </option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rack Face Parameter -->

        <div class="field is-horizontal">

            <div class="field-label">
                <label class="label">Rack Face:</label>
            </div>

            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control has-text-centered">
                        <label class="radio">
                            <input type="radio" name="face" value="FRONT" v-model="paramsObj.rackFace" /><span class="choicePadding">Front</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="face" value="REAR" v-model="paramsObj.rackFace"/><span class="choicePadding">Rear</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="face" value="PERSPECTIVE" v-model="paramsObj.rackFace" /><span class="choicePadding">Perspective</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Front Bezel Parameter -->

        <div class="field is-horizontal">

            <div class="field-label">
                <label class="label">Front Bezel:</label>
            </div>

            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control has-text-centered">
                        <label class="radio">
                            <input type="radio" name="bezl" value="YES" v-model="paramsObj.frontBezel" /><span class="choicePadding">Yes</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="bezl" value="NO" v-model="paramsObj.frontBezel" /><span class="choicePadding">No</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rack Load Parameter -->

        <div class="field is-horizontal">

            <div class="field-label">
                <label class="label">Rack Load:</label>
            </div>

            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control has-text-centered">
                        <label class="radio">
                            <input type="radio" name="load" value="HIGH" v-model="paramsObj.rackLoad" /><span class="choicePadding">High</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="load" value="LOW" v-model="paramsObj.rackLoad" /><span class="choicePadding">Low</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="load" value="NO" v-model="paramsObj.rackLoad" /><span class="choicePadding">No Rack</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Panels Parameter -->

        <div class="field is-horizontal">

            <div class="field-label">
                <label class="label">Panels:</label>
            </div>
            
            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control has-text-centered">
                        <label class="radio">
                            <input type="radio" name="pnls" value="YES" v-model="paramsObj.panels" /><span class="choicePadding">Yes</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="pnls" value="NO" v-model="paramsObj.panels" /><span class="choicePadding">No</span>
                        </label>              
                    </div>
                </div>
            </div>
        </div>

        <!-- Format Parameter -->

        <div class="field is-horizontal">

            <div class="field-label">
                <label class="label">Format:</label>
            </div>
            
            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control has-text-centered">
                        <label class="radio">
                            <input type="radio" name="format" value="PHOTO" v-model="paramsObj.format" /><span class="choicePadding">Photo</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="format" value="DRAWING" v-model="paramsObj.format" /><span class="choicePadding">Drawing</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="format" value="OVERLAY" v-model="paramsObj.format" /><span class="choicePadding">Overlay</span>
                        </label>               
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Image Size:</label>
            </div>
            
            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control has-text-centered">
                        <label class="radio">
                            <input type="radio" name="image-size" value="SMALL" v-model="paramsObj.imageSize"/><span class="choicePadding">Small</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="image-size" value="MEDIUM" v-model="paramsObj.imageSize" /><span class="choicePadding">Medium</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="image-size" value="LARGE" v-model="paramsObj.imageSize" /><span class="choicePadding">Large</span>
                        </label>           
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- End Column -->
</div> <!-- End Columns -->

</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ParamOptions",
  data() {
    return {
      paramsObj: {
        ruSelection: 42,
        rackFace: "FRONT",
        frontBezel: "YES",
        rackLoad: "HIGH",
        panels: "YES",
        format: "PHOTO",
        imageSize: "MEDIUM",
        paramsStart: "<params",
        paramsEnd: "/>"
      }
    };
  },
  methods: mapActions(["setParameters", "getImage", "setRacks"]),
  created() {
    this.setParameters(this.paramsObj);
    this.setRacks();
    //this.getImage();
  },
  updated() {
    this.setParameters(this.paramsObj);
    this.setRacks();
    //this.getImage();
  }
};
</script>

<style scoped>
.choicePadding {
  padding-left: 1em;
  padding-right: 1em;
}
</style>


