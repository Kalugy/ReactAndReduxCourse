import React, { useState } from "react";
import Field from "./Field";
import Translate from "./Translate";
import Languages from "./Languages";
//import "./styles.css";

const Index = () => {
    const [languages, setLanguage] = useState("es");
    const [text, setText] = useState();
  
    return (
        <div className="h-screen bg-slate-800  text-white flex justify-center items-center">
            <div className="max-w-lg">
                <Field value={text} onChange={setText} />
                <Languages language={languages} onLanguageChange={setLanguage} />
                <Translate language={languages} text={text} />
            </div>
        </div>
    )

}

export default Index