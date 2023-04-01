import {useContext, useState} from "react";
import Speakers from "./Speakers";
import Header from "./Header";
import Layout from "./Layout";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
    return (
        <AuthProvider initialLogInUser="Ronald">
            <Layout initialTheme="light">
                <div>
                    <Header />
                    <Speakers />
                </div>
            </Layout>
        </AuthProvider>
    );
}

export default App;