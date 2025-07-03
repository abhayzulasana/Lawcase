import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const getHeroSection = async () =>{
    try{
        const res = await axios.get(`${API}/api/home/hero`);
        return res.data;
    }catch(err){
        console.log("Error fetching hero section:",err);
        throw err;
    }
};