const URL = "cities.json";


export const getCityList = async () => {
    try {
        const response = await fetch(URL);
        return response.ok ? response.json() : [];
    } catch (e) {
        return [];
    }
};