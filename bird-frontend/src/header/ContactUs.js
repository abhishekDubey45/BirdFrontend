import react from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router";

export const ContactUs = () => {

    return (
        <div>
            <h1>Contact Us</h1>
            <p>Please fill out the form below to reach out to us.</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>We will respond to your inquiry as soon as possible.</p>
            <p>Thank you for your interest in our company!</p>
            <p>Best regards,</p>
            <p>Your Name</p>
            <p>Your Position</p>
            <p>Your Company</p>
        </div>
    )
}