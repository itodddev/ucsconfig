import axios from 'axios';

const ROOT_URL = "http://ucs4.us/ucs/engine/ucs-engine.cgi";
const TEST_URL = "http://localhost:3000/xml";
const TEST_XML = 
`<?xml version="1.0" encoding="UTF-8"?>
<layout mode="MANUAL" src="UCS" seq="" res="LOW">
    <chassis model="UCS5108" cfg="1" qty="1">
        <power qty="4" />
    </chassis>
    <rack cfg="1" qty="1">
        <device model="FI6120" qty="1" />
    </rack>
    <params ru="42" extra="0" face="FRONT" bezel="NO" fill="LINEAR" load="HIGH" panels="YES" format="PHOTO" size="MEDIUM" trans="NO" />
</layout>`;


export default {
    getImage(params) {
        return axios.post(`${TEST_URL}`, { data: params });
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData(); // FormData is vanilla JS no import
            formData.append('image', image); // first 'image' is the image key for imgur

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });

        return Promise.all(promises); // when all promises are completed
    }
};