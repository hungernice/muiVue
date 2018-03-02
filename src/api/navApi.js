import Vue from 'vue'
import axios from 'axios'

//const url ="./data.json"

export const getNav =function(){
	return axios.get("/data.json").then(res => res.data)
}
export const getAnaly =function(){
	return axios.get("/analytics.json").then(res =>res.data)
}
