const form = document.getElementById('myform');

form.addEventListener('submit',(event)=>{
    try {

        event.preventDefault();
    const data = {
        name:event.target.name.value,
        email:event.target.email.value,
        phone:event.target.tel.value
    }

     axios.post("http://localhost:5000/submit",data)
    .then(response=>{
        const data = response.data;
        console.log(data);
    }).catch(err=>{
        console.log(error);
    })
    
        
    } catch (error) {
        console.log(error)
    }
    
})