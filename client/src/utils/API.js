import axios from 'axios';

export default {

    getAllCompanies: function() { // just for testing..
        return axios.get(`/xxx/comp/all`)
    },
    postNewCompany: function(compInfo) {
        return axios.post(`/xxx/comp/new`, {compInfo})
    },
    editCompanyById: function(compUpdate) {
        return axios.put(`/xxx/comp/update`, {compUpdate});
    },
    deleteCompany: function(id) {
        return axios.delete(`/xxx/comp/byefelicia/${id}/`)
    },
    getCompanyByName: function(id) {
        return axios.get(`/xxx/comp/${id}`)
    },
};
