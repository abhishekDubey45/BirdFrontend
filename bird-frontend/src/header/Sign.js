import react from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router";

export const Sign = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}