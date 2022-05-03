import React, { useState, useEffect } from 'react';

function CreateChat({}) {
    const [formData, setFormData] = useState({
        user_id: "",
        name: ""
    })
    
    // const [error,setError] = useState("")

    // console.log("user in Add Kit", user.id)

    
    
    function handleSubmit(event){
        // event.preventDefault()
        console.log("clicked")
        console.log("form data",formData)
        
        // if(formData.name === "") {
        //     setError('Error! Complete Field');
        //     setFormData({
        //         name: "",
        //     })
        // }
            
        fetch(`/kits`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // user_id: user.id,
                name: formData.name
                // sound: formData.sound,
                // key: formData.key
                }),
            })
            .then(resp => resp.json())
            .then((kit) => (kit))
            setFormData({
                name: "",
                // sound: "",
                // key:""
            })
            // setKits([...kits, formData])
            alert("Added chat");
            //handle add Kits below to add into state above
        
        
    }

    function handleChange(event) {
        // console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
  
    return (
        // need to add two lines for the first two messages
    <form onSubmit={handleSubmit}>
        {/* <h3>Create a kit</h3> */}
        <label>Name:
            <input type="text" name="name" placeholder="Choose a name" onChange={handleChange} />
        </label>
        <input className="submit-button" type="submit" />
    </form>
  )
}

export default CreateChat