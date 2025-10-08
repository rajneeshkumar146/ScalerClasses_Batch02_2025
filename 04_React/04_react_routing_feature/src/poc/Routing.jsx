import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Route, Routes, Navigate, useParams } from 'react-router-dom';

function Routing() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Routing Example</h2>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/house" element={<Navigate to="/home" />}></Route>
                <Route path="/ghar" element={<Navigate to="/home" />}></Route>
                <Route path="/" element={<Navigate to="/home" />}></Route>

                <Route path="/about/*" element={<About></About>}></Route>

                {/* Dynamic Route example */}
                <Route path="/user/:id" element={<User></User>}></Route>

                <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>

        </div>
    )
}

function Home() {
    return <h3>I am home</h3>
}

function About() {
    return <>
        <h3>I am About Page.</h3>
        <ul>
            <li><Link to="/about/company">Company</Link></li>
            <li><Link to="/about/founder">Founder</Link></li>
        </ul>

        <Routes>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/founder" element={<Founder />}></Route>
            <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </>
}

function PageNotFound() {
    return <h3>Sorry!!! Page Not Found</h3>
}

function Company() {
    return <h3>We are a good firm</h3>
}

function Founder() {
    return <h3>Our Founder is good person, Please invest in our company!!!</h3>
}

function User() {
    let params = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async function fetchData() {
            console.log("UseEffect is working...");
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            const userData = await response.json();

            setUser(userData);
        })();
    }, []);

    return (
        <>
            {
                user === null ?
                    <h2>Place Holder loading relevent data...</h2> :
                    <>
                        <h1> Data get loaded</h1>
                        <h2> Name: {user.name}</h2>
                        <h2> Email: {user.email}</h2>
                        <h2> Phone Number: {user.phone}</h2>
                    </>
            }

        </>
    )
}

/**
 * Link -> it is done
 * Roues and route -> it is done
 * Redirect Routes -> using navigate, it is done
 * Nested Routes -> it is done
 * Template route/Dynamic Route -> it is done
 */


export default Routing



