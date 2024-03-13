
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
    ])

        return (
            <div className="container">
                { cards.map((card, index) => {
                    return <Card card={card} />
                }
                )}
            </div>
  );
}