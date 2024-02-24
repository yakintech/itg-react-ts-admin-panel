import { axiosInstance } from "./axiosInstance"


export const baseApi = {
    getAll: async (url: any) => {
        try {
            const response = await axiosInstance.get(url);
            return response.data;
        } catch (error) {
            console.log("Error in baseApi.getAll: ", error);
            throw error;
            
        }
    },
    getOne: async (url: any, id: any) => {
        try {
            const response = await axiosInstance.get(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.log("Error in baseApi.getOne: ", error);
            throw error;
        }
    },
    create: async (url: any, data: any) => {
        try {
            const response = await axiosInstance.post(url, data);
            return response.data;
        } catch (error) {
            console.log("Error in baseApi.create: ", error);
            throw error;
        }
    },
    update: async (url: any, id: any, data: any) => {
        try {
            const response = await axiosInstance.put(`${url}/${id}`, data);
            return response.data;
        } catch (error) {
            console.log("Error in baseApi.update: ", error);
            throw error;
        }
    },
    delete: async (url: any, id: any) => {
        try {
            const response = await axiosInstance.delete(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.log("Error in baseApi.delete: ", error);
            throw error;
        }
    },
}