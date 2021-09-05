import { Component } from "react";
import '../App.scss';

export default class BookItem extends Component {
  render() {
    const { item, addItemToBasket, basket } = this.props;
    return (
      <div className="col-md-3 mb-4" key={item.title}>
        <div className="card h-100">
          <div className="card-img-block py-4">
            <img src={item.imageLink} className="card-img" alt="..." />
          </div>
          <div className="card-body text-center">
            <h6 className="card-title">{item.title}</h6>
            <p className="text-muted">{item.author}</p>
            <p className="card-text bold">{item.price}тг</p>
            {!basket &&
              <button onClick={addItemToBasket.bind(this, item)} className="btn btn-primary">Добавить
                в корзину</button>
            }
          </div>
        </div>
      </div>
    )
  }
}