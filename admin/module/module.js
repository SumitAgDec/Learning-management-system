let data = {}

// For getting the local storage data
export const getDataFunc = () => {
    if(localStorage.getItem("data") != null){
        data = JSON.parse(localStorage.getItem("data"))
        return data  
    }
}

getDataFunc()

export const processImage = (img) => {
    return new Promise((resolve, reject)=>{
        if(img.name){
            let fReader = new FileReader()
            fReader.readAsDataURL(img)
            fReader.onload = (e) =>{
                let url = e.target.result
                resolve(url)
            }
        }
        else {
            return resolve("../../assets/images/avatar-4.svg")
        }
    })
}

export const registerFunc = async (form, array, key) => {
    let formData = new FormData(form)
    let courses = []
    let tmp = {}

    for (let data of formData.entries()){
        let props = data[0]
        let value = data[1]

        let imgUrl = typeof(value) == 'object' && await processImage(value)

        props == 'course' && courses.push(value)
        if( props == 'course'){
            tmp[props] = courses
        }
        else if( imgUrl ){
            tmp[props] = imgUrl
        }
        else{
            tmp[props] = value
        }
        
    }
    array.push(tmp)
    data[key] = array

    // save data in local storage
    localStorage.setItem('data', JSON.stringify(data))

    form.reset('');
    swal("Data inserted", "successfully", 'success');
}