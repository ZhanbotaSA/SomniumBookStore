import { Component } from "react";
import BookItem from "../components/BookItem";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basketItems: JSON.parse(localStorage.getItem('basket')),
    }
  }

  render() {
    const { basketItems } = this.state;
    const total = basketItems.reduce((totalPrice, item) => totalPrice + item.price, 0);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <h1>Корзина</h1>
          </div>
          <div className="col-9">
            <div className="row">
              {basketItems.length > 0 ? basketItems.map((item) => {
                return <BookItem item={item} basket={true} />
              }) :
                <div className="text-center">Пусто</div>}
            </div>
          </div>
          <div className="col-3">
            <div className="card p-3">
              <h4 className='mb-3'>Ваш заказ</h4>
              <h5 className='mb-3'>Итого: {total.toLocaleString()}тг</h5>
              <button className="btn btn-primary">Оформить</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}