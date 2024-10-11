const base_URL = 'http://localhost:5050';
//const base_URL = 'http://localhost:6000';
//const base_URL = 'http://server-host-1001';
//const base_URL = 'http://server-host-1002';

const api_URL = {
    getUser:`${base_URL}/user/:id`,
    getProduct:`${base_URL}/product/:id`,
    postProduct:`${base_URL}/product/new`,
    putProduct:`${base_URL}/product/update/:id`,
    patch:`${base_URL}/product/edit/:id`,
    delete:`${base_URL}/product/delete/:id`
};

export default { api_URL }