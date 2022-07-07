import React from "react"

export default function Contact() {
    return (
        <div>
            <div className="contact-container">
                <h3 className="contact-title">Contact</h3>
                <label className="contact-name">
                    Name* <input type='text' ></input>
                </label>
                <label className="contact-email">
                    Email* <input type='email' ></input>
                </label>
                <label className="contact-title">
                    Title <input type='text' ></input>
                </label>
                <label className="contact-textarea">
                    Your Message <textarea />
                </label>
                <button className="contact-submit">Post Comment</button>
            </div> 
        </div>
    )
}