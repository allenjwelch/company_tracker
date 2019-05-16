import axios from 'axios';

export default {

    getAllCompanies: function() { // just for testing..
        return axios.get(`/xxx/comp/all`)
    },
    getCompanyByName: function(id) {
        return axios.get(`/xxx/comp/${id}`)
    },
    postNewCompany: function(compInfo) {
        return axios.post(`/xxx/comp/new`, {compInfo})
    },
    editCompanyByName: function(id, compInfo) {
        return axios.put(`/xxx/comp/${id}`, {compInfo}); 
    },
    deleteCompany: function(id) {
        return axios.delete(`/xxx/comp/bye/${id}/`)
    }
};