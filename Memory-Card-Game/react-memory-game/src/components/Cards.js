import { useState, useRef } from 'react';
import Card from './Card';

export default function Cards() {

    const [cards, setCards] = useState([
        { id: 0, name: 'Tommy Shelby', status: '', image: '/images/01.jpg' },
        { id: 0, name: 'Tommy Shelby', status: '', image: '/images/01.jpg' },
        { id: 1, name: 'Arthur Shelby', status: '', image: '/images/02.jpg' },
        { id: 1, name: 'Arthur Shelby', status: '', image: '/images/02.jpg' },
        { id: 2, name: 'Polly Gray', status: '', image: '/images/03.jpg' },
        { id: 2, name: 'Polly Gray', status: '', image: '/images/03.jpg' },
        { id: 3, name: 'John Shelby', status: '', image: '/images/04.jpg' },
        { id: 3, name: 'John Shelby', status: '', image: '/images/04.jpg' },
        { id: 4, name: 'Ada Shelby', status: '', image: '/images/05.jpg' },
        { id: 4, name: 'Ada Shelby', status: '', image: '/images/05.jpg' },
        {id: 5, name: 'Michael Gray', status: '', image: '/images/06.jpg' },
        {id: 5, name: 'Michael Gray', status: '', image: '/images/06.jpg' },
        {id: 6, name: 'Gina Gray', status: '', image: '/images/07.jpg' },
        {id: 6, name: 'Gina Gray', status: '', image: '/images/07.jpg' },
        {id: 7, name: 'Finn Shelby', status: '', image: '/images/08.jpg' },
        {id: 7, name: 'Finn Shelby', status: '', image: '/images/08.jpg' },
    ].sort(() => Math.random() - 0.5));

       const [previousCard, setPreviousCard] = useState(-1);
       const previousCardIndex = useRef(-1);

        const matchCheck = (currentCard) => {
            if (cards[currentCard].id === cards[previousCard].id) {
                cards[previousCard].status = 'active matched';
                cards[currentCard].status = 'active matched';
                setPreviousCard(-1);
            } else {
                cards[currentCard].status = 'active';
                setCards([...cards]);
                setTimeout(() => {
                    setPreviousCard(-1);
                    cards[currentCard].status = 'unmatched';
                    cards[previousCard].status = 'unmatched';
                    setCards([...cards]);
                }, 1000);
            }
        }

        const clickHandler = (index) => {
            if (index !== previousCardIndex.current){
                if (cards[index].status === 'active matched') {
                    alert('You clicked a matched card!');
                } else {
                    if (previousCard === -1) {
                        setPreviousCard(index);
                        previousCardIndex.current = index;
                        cards[index].status = 'active';
                        setCards([...cards]);
                        setPreviousCard(index);
                    } else {
                        matchCheck(index);
                        previousCardIndex.current = -1;
                    }
                }
            }
            else{
                alert('You clicked the same card!');
            }
        }

        return (
            <div className="container">
                { cards.map((card, index) => {
                    return <Card card={card} key={index} index={index} clickHandler={clickHandler} />
                }
                )}
            </div>
  );
}