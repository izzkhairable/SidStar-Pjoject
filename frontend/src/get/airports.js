
const airports = async () => {
    const results=await fetch('http://localhost:3333/airports')
        .then(response => response.json())
    return results
};

export default airports