const debugUrl = "http://localhost:8000/";

const edit = async (fileData,language,id,flavour) => {
    let formData = new FormData();
    formData.append("file", fileData);
    formData.append("id",id);
    formData.append("language",language);
    formData.append("flavour",flavour)
    const data = await fetch(debugUrl+"edit", {
        method: 'POST',
        body: formData,

    });
    const resp = await data.json();
    return resp;
}

const home = async()=>{
    const resp = await fetch(debugUrl);
    const data = await resp.json();
    return data;
}

export {edit,home};