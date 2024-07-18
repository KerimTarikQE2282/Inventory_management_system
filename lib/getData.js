export async function getData(url) {
    const baseUrl = 'http://localhost:3000/api';
    try {
        const response = await fetch(`${baseUrl}/${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}