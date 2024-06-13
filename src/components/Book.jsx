import './Book.css'
import Order from './Order'

const Book = (props) => {
    return <div div className="one-book">
        <img className='book-img' src={props.bookImg} alt='Obrazek knihy'></img>
        <h2 className="one-book-title">{props.bookTitle}</h2> 
        <p className="one-book-description">{props.bookDesc}</p>
        <p>Hodnoceni: {props.bookHodno} /10</p>
        <p className="book-price">{props.bookPrice} Kc</p>
        <Order/>
    </div>
}

export default Book