import api from "../../api/ucs4";
import NProgress from "nprogress";

const state = {
    racks: "",
    parameters: "",
    temp_xml: ""
};

const getters = {
    getParameters: state => state.parameters,
    getRacks: state => state.racks
};

const actions = {
    setRack({ commit }, rackObj){
        const RACK_HEADER = `<rack cfg="${rackObj.id}" src="UCS" seq="" res="LOW">`;
        
        var rackNum = rackObj.id;
        var origRows = rackObj.rows;
        
        console.log(rackNum);
        console.log(origRows);

        function compressRows(rows) {
            var temp = new Array();
            console.log(rows);
            for (var i = 0; i < rows.length; i++) {
                if (rows[i]) {
                    temp.push(rows[i])
                }
            }
            return temp;
        }

        var compressed = compressRows(origRows);

        // console.log(compressed);

        commit("setRacks", origRows);
    },
    setRacks({
        commit
    }) {
        const HEADER = `<?xml version="1.0" encoding="UTF-8"?>
                        <layout mode="MANUAL" src="UCS" seq="" res="LOW">`;
        const FOOTER = `</layout>`;

        const RACK_TEMP = `<rack cfg="1" qty="1">
                            <device model="NX1010" qty="2" />
                            <device model="MDS9124" qty="1" />
                           </rack>
                           <rack cfg="2" qty="1">
                            <device model="NX1010" qty="6" />
                            <device model="MDS9124" qty="3" />
                           </rack>`;
        const xmlString = HEADER + RACK_TEMP + state.parameters + FOOTER;

        commit("setXML", xmlString);

    },
    setParameters({
        commit
    }, paramsObj) {
        const parameterString =
            `${paramsObj.paramsStart} ru="${paramsObj.ruSelection}" extra="0" face="` +
            `${paramsObj.rackFace}" bezel="${paramsObj.frontBezel}" fill="LINEAR" load="` +
            `${paramsObj.rackLoad}" panels="${paramsObj.panels}" format="${paramsObj.format}"` +
            ` size="${paramsObj.imageSize}" trans="NO" ${paramsObj.paramsEnd}`;

        commit('setParams', parameterString);
    },
    async getImage() {
        NProgress.start();
        // const response = await api.getImage(state.parameters);
        const response = await api.getImage(state.temp_xml);
        NProgress.done();
        return response;
    }
};

const mutations = {
    setParams: (state, params) => state.parameters = params,
    setXML: (state, params) => state.temp_xml = params,
    setRacks: (state, params) => state.racks = params,
};

export default {
    state,
    getters,
    actions,
    mutations
}