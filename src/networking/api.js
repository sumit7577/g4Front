const url = "http://167.99.197.49/"
const debugUrl = "http://127.0.0.1:8000/";

const edit = async (fileData) => {
    let formData = new FormData();
    formData.append("file", fileData);
    const data = await fetch(url+"edit", {
        method: 'POST',
        body: formData,

    });
    const resp = await data.json();
    return resp;
}

const home = async()=>{
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

export {edit,home};