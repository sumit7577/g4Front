const url = "http://167.99.197.49/"
const debugUrl = "http://127.0.0.1:8000/";

const edit = async (fileData,language,id,flavour) => {
    let formData = new FormData();
    formData.append("file", fileData);
    formData.append("id",id);
    formData.append("language",language);
    formData.append("flavour",flavour)
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