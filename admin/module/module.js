let data = {}

// For getting the local storage data
export const getDataFunc = () => {
    if(localStorage.getItem("data") != null){
        data = JSON.parse(localStorage.getItem("data"))
        return data  
    }
}

getDataFunc()

// formate createdAt or date
export const formateDateFunc = (date, isTime) => {
    let formateDate = new Date(date);
    let dd = formateDate.getDate();
    let mm = formateDate.getMonth()+1;
    let yyyy = formateDate.getFullYear();
    let time = formateDate.toLocaleTimeString();
    dd = dd < 10 ? '0'+dd : dd
    mm = mm < 10 ? '0'+mm : mm
    return `${dd}-${mm}-${yyyy} ${isTime ? time : ''}`
}

// image process coding
export const processImage = (img, array, index) => {
    let data = array[index]
    return new Promise((resolve, reject)=>{
        if(index == undefined){
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
        }
        else {
            if(img.name){
                let fReader = new FileReader()
                fReader.readAsDataURL(img)
                fReader.onload = (e) =>{
                    let url = e.target.result
                    resolve(url)
                }
            }
            else {
                return resolve(data.profile )
            }
        }
        
    })
}

//update coding
export const updateDeFunc = (array, key) => {
    data[key] = array
    localStorage.setItem('data', JSON.stringify(data))
}

// register your data on local storage
export const registerFunc = async (form, array, key, index, readDataFunc) => {
    let formData = new FormData(form)
    let courses = []
    let tmp = {
        createdAt : new Date()
    }

    for (let data of formData.entries()){
        let props = data[0]
        let value = data[1]

        let imgUrl = typeof(value) == 'object' && await processImage(value, array, index)

        props == 'course' && courses.push(value)
        if( props == 'course'){
            tmp[props] = courses
        }
        else if( imgUrl ){
            tmp[props] = imgUrl
        }
        else{
            tmp[props] = value.trim().toLowerCase()
        }
        
    }
    if(index == undefined){
        array.push(tmp)
        data[key] = array

        // save data in local storage
        localStorage.setItem('data', JSON.stringify(data))

        form.reset('');
        swal("Data inserted", "successfully", 'success');
    } else {
        array[index] = tmp
        data[key] = array

        // save data in local storage
        localStorage.setItem('data', JSON.stringify(data))

        form.reset('');
        swal("Data inserted", "successfully", 'success');
        readDataFunc(array)
    }
}

//get data for select tag
export const  createOptionsFunc = (data, element, key) => {
    element.innerHTML = '<option value="select" hidden>Select</option>'
    data.forEach((item, index) => {
        element.innerHTML += `
        <option value=${item[key]}>${item[key]}</option>
        `
    });
}

// confirmation coding 
export const isConfirmFunc = () => {
    return new Promise((resolve, reject)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            resolve(true)
            swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
            });
        } else {
            return false
            swal("Your imaginary file is safe!");
        }
        });
    })
}