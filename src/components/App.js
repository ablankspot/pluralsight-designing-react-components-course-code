import {useContext, useState} from "react";
import Speakers from "./Speakers";
import Header from "./Header";
import Layout from "./Layout";

function App({ speakers }) {
    return (
        <Layout initialTheme="light">
            <div>
                <Header />
                <Speakers />
            </div>
        </Layout>
    );
}

export default App;