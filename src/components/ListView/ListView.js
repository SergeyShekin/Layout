import ShopItem from "./ShopItem";

function ListView({items}) {

    let i = 0;

    return ( 
        <div className="listView">
            {items.map((el) => <ShopItem item={el} key={i++} />)}
        </div>
     );
}

export default ListView;