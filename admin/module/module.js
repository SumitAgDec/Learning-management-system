let data = {}

export const registerFunc = (form, array, key) => {
    let formData = new FormData(form)
    let courses = []
    let tmp = {}

    formData.entries().forEach((data)=>{
        let props = data[0]
        let value = data[1]
        props == 'course' && courses.push(value)
        tmp[props] = props == 'course' ? courses : value
        
    })
    array.push(tmp)
    data[key] = array

    localStorage.setItem('data', JSON.stringify(data))
}