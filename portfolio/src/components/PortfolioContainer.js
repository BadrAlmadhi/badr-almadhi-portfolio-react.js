import React, {useState} from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";

export default function App() {
    return(
        <div>
            <NavTabs />
            <Home />
        </div>
    )
}
