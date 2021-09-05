import { Component } from "react";
import { books } from "../data/books";
import '../App.scss';
import BookItem from "../components/BookItem";

export default class Books extends Component {

  constructor(props) {
    super(props);
    this.state = {
      basketItems: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : localStorage.setItem('basket', JSON.stringify([])),
      filter: '',
      books: books
    }
    this.addItemToBasket = this.addItemToBasket.bind(this);
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  addItemToBasket = item => {
    const { basketItems } = this.state;
    var newbasketItems = basketItems;
    newbasketItems.push(item);
    basketItems ? basketItems.concat(newbasketItems) : basketItems.push(item);
    localStorage.setItem('basket', JSON.stringify(basketItems));
  }

  render() {
    const { filter, books } = this.state;

    const lowercasedFilter = filter.toLowerCase();
    const booksList = books.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <h1>Список книг</h1>
            Поиск: <input value={filter} onChange={this.handleChange} />
          </div>
          {booksList.map((item) => (
            <BookItem
              item={item}
              addItemToBasket={this.addItemToBasket}
            />
          ))}
        </div>
      </div>
    )
  }
}
