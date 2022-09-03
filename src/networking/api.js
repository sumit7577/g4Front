const url = "https://g4api.pythonanywhere.com/edit"
const debugUrl = "http://127.0.0.1:8000/edit";

const edit = async (fileData) => {
    let formData = new FormData();
    formData.append("file", fileData);
    const data = await fetch(url, {
        method: 'POST',
        body: formData,

    });
    const resp = await data.json();
    return resp;
}

export default edit;