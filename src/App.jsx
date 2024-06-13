import Book from "./components/Book";
import data from "./data"

const App = () => {
  return (
    <div className="all-books">
      <Book bookHodno={data[0].hodno} bookTitle={data[0].title} bookPrice={data[0].price} bookImg={data[0].image} bookDesc={data[0].description}/>
      <Book bookHodno={data[1].hodno} bookTitle={data[1].title} bookPrice={data[1].price} bookImg={data[1].image} bookDesc={data[1].description}/>
      <Book bookHodno={data[2].hodno} bookTitle={data[2].title} bookPrice={data[2].price} bookImg={data[2].image} bookDesc={data[2].description}/>
      <Book bookHodno={data[3].hodno} bookTitle={data[3].title} bookPrice={data[3].price} bookImg={data[3].image} bookDesc={data[3].description}/>
      <Book bookHodno={data[4].hodno} bookTitle={data[4].title} bookPrice={data[4].price} bookImg={data[4].image} bookDesc={data[4].description}/>
      <Book bookHodno={data[5].hodno} bookTitle={data[5].title} bookPrice={data[5].price} bookImg={data[5].image} bookDesc={data[5].description}/>
      <Book bookHodno={data[6].hodno} bookTitle={data[6].title} bookPrice={data[6].price} bookImg={data[6].image} bookDesc={data[6].description}/>
    </div>
  )
}

export default App