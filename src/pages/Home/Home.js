import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import { Link, useParams } from "react-router-dom";
import Projects from "../Projects/Projects";
import Header from "../Header/Header";
import About from "../About/About";
import Service from "../Services/Service";
import Whyus from "../Whyus/Whyus";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
    <Header/>
    <About/>
    <Whyus/>
    {/* <Service/> */}
    <Contact/>
    <Footer/>
    </div>
  );
};

export default Home;
