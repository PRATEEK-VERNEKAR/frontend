import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import MiniHeader from "./MiniHeader";
import Header from "./Header";
import Footer from "./Footer";
import SignerType from "./Register/SignerType";
import History from "./NavbarRedirects/History"
import Post from "./NavbarRedirects/Post"
import Stats from './NavbarRedirects/Stats'
import HomeApp from "./Home/HomeApp";
import FanSignin from "./Register/FanSignin";
import OrgSignin from "./Register/OrgSignin";
import Login from "./Register/Login";
import Testing from "./Testing";
import {motion,AnimatePresence} from 'framer-motion';

function App() {
  return (
    <>
      <BrowserRouter>
      <AnimatePresence mode="exit">
        
        <MiniHeader />
        <Header />
        <div
        className="md:mx-24">
            <Routes>
                <Route exact path="/" element={<HomeApp />}></Route>
                <Route exact path="/orgsignin" element={<OrgSignin />}></Route>
                <Route exact path="/fansignin" element={<FanSignin />}></Route>
                <Route exact path="/signertype" element={<SignerType />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/history" element={<History />}></Route>
                <Route exact path="/post" element={<Post />}></Route>
                <Route exact path="/stats" element={<Stats />}></Route>
                <Route exact path="/testing" element={<Testing />}></Route>
            </Routes>
        </div>      
        <Footer />
      </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;

