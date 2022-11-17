import ShopCard from "./ShopCard";

function CardView({cards}) {

    let i = 0;

    return ( 
        <div className='cardsView'>
            {cards.map((card) => (
                <ShopCard card={card} key={i++} />
            ))}
        </div>        
    );
}

export default CardView;