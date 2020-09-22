const httpService = async (url) => {
    let data = {};
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error('Something went wrong on HTTP request.');
        data = await response.json();
    } catch(e) {
        console.log('Unexpected Promise Error: ', e);
    }
    return data;
}

export default httpService;