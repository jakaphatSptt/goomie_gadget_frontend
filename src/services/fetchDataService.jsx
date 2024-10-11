import { getData } from './api';
import api_URL from './endpoint'

// เรียกข้อมูลผู้ใช้
export const userData = async() => {
    return await getData(api_URL.getUser);
};

// เรียกข้อมูลสินค้า
export const productData = async() => {
    return await getData(api_URL.getProduct);
};