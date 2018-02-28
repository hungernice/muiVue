import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
const url ="./data.json"
export const requestLogin =function(){
	return axios.get("./data.json").then(res => res.data);
}