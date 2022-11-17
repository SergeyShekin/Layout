import React, {useState} from "react";
import IconSwitch from "./IconSwitch";
import CardView from "./CardsView/CardView";
import ListView from "./ListView/ListView";

function Store({products}) {

    const [icon, setIcon] = useState("view_list");

    const handleSwitch = () => {
        icon === "view_list" ? setIcon("view_module") : setIcon("view_list");
    };

    return (
        <div className="container">
            <IconSwitch icon={icon} onSwitch={handleSwitch} />
            <main className="main">
                {icon === "view_list" ? <CardView cards={products}/> : <ListView items={products}/>}
            </main>
        </div> 
     );
}

export default Store;