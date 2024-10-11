import axios from "axios";

const getData = async(api_URL) => {
    try {
        const res = await axios.get(`${api_URL}`);
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const postData = async(api_URL, data) => {
    try {
        const res = await axios.post(`${api_URL}`, data);
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const putData = async(api_URL, data) => {
    try {
        const res = await axios.put(`${api_URL}`, data);
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const patchData = async(api_URL, data) => {
    try {
        const res = await axios.patch(`${api_URL}`, data);
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const deleteData = async(api_URL) => {
    try {
        const res = await axios.delete(`${api_URL}`);
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default { getData, postData, putData, patchData, deleteData };