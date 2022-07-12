import React from "react"

export default function Contact() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit engaged');
    }

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        title: "",
        message: ""
    });

    console.log(formData);

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
            <form 
            className="contact-container"
            onSubmit={handleSubmit}
            >
                <h3 className="contact-title">Contact</h3>
                <label className="contact-name">
                    Name* <input type='text' 
                    name="name" 
                    onChange={handleChange}
                    value={formData.name}
                    required></input>
                </label>
                <label className="contact-email">
                    Email* <input type='email' 
                    name="email" 
                    onChange={handleChange}
                    value={formData.email}
                    pattern="^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$"
                    required></input>
                </label>
                <label className="contact-title">
                    Title <input type='text' 
                    onChange={handleChange}
                    name="title" 
                    value={formData.title}
                    required></input>
                </label>
                <label className="contact-textarea">
                    Your Message <textarea 
                    onChange={handleChange}
                    name="message" 
                    value={formData.message}
                    required />
                </label>
                <button className="contact-submit">Post Comment</button>
            </form> 
        </div>
    )
}