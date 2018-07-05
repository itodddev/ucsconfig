import api from "../../api/ucs4";

const state = {
    parameters: ""
};

const getters = {
    getParameters: state => state.parameters
};

const actions = {
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
        
        console.log(state.parameters);
        const response = await api.getImage(state.parameters);
        return response;
    }
};

const mutations = {
    setParams: (state, params) => state.parameters = params
};

export default {
    state,
    getters,
    actions,
    mutations
}