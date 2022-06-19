const airports = async () => {
    const results=await fetch(`http://a66745cd4ff2e4eea89473fd030825ee-912727064.ap-southeast-1.elb.amazonaws.com/airports`)
        .then(response => response.json())
    return results
};

export default airports