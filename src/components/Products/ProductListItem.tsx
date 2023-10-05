import { Card, CardContent, Button, TextField } from '@mui/material';
import './ProductListItem.scss';
import { Component } from 'react';

type Props = {
  title: string;
  description: string;
  type: string;
  capacity: string;
  price: number;
  image: string;
};

type State = {
  count: number;
};

class ProductListItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 1,
    };

    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onDecrementClick = this.onDecrementClick.bind(this);
  }
  onIncrementClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  onDecrementClick() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    const { title, description, type, capacity, price, image } = this.props;
    return (
      <Card variant="outlined">
        <CardContent>
          <div className="product-img">
            <img src={image} alt="phone" />
          </div>
          <h2 className="product-title">{title}</h2>
          <p className="product-desc">{description}</p>
          <div className="product-features">Type:{type}</div>
          <div className="product-features">Capacity: {capacity} GB</div>
          <div className="product-price ">
            Price: <span>{price}$</span>
          </div>
          <div className="button-quantity">
            <Button variant="outlined" onClick={this.onDecrementClick}>
              -
            </Button>
            <TextField value={this.state.count} size="small" />
            <Button variant="outlined" onClick={this.onIncrementClick}>
              +
            </Button>
          </div>
          <div className="btn-wrapper">
            <Button variant="outlined">Add to card</Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default ProductListItem;
