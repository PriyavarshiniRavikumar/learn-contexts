// JavaScript source code
import { useContext, useState } from "react";

import Layout from "../components/Layout";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/ThemeContext";
import { UserDispatchContext } from "../context/ThemeContext";

const IndexPage = () => {
    const themeContext = useContext(ThemeContext);
    const userDispatch = useContext(UserDispatchContext);
    const userContext = useContext(UserContext);
    const [nameInput, setnameInput] = useState("");
    const [imageInput, setImageInput] = useState("");

    function handleOnChange(name, value) {
        if (name === "name") {
            setnameInput(value);
        } else if (name === "image") {
            setImageInput(value);
        }
    }
    function handleClick(e) {
        e.preventDefault();
        const updatedUser = {
            ...userContext,
            name: nameInput,
            image: imageInput,
        };
        userDispatch(updatedUser);
        setnameInput("");
        setImageInput("");
    }

