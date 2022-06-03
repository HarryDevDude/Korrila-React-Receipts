class Receipt extends React.Component {

  render() {
      
      return (
          <div>
              {this.props.receipt.person}
              <li>
                  Main: {this.props.receipt.order.main}
                 
              </li>
              <li>Protein: {this.props.receipt.order.protein}</li>
              <li>Rice: {this.props.receipt.order.rice}</li>
              <li>Sauce: {this.props.receipt.order.sauce}</li>
              <li>Toppings: {this.props.receipt.order.toppings}</li>
              <li>Drink: {this.props.receipt.order.drink}</li>
              <li>Cost: {this.props.receipt.order.cost}</li>
              <li>Paid: {this.props.receipt.paid ? "this reciept is paid": "not paid"}</li>
          </div>
      )
  }
}
class App extends React.Component {
  state = {
      firstReceipt: receipt1,
      secondReceipt: receipt2,
      thirdReceipt: receipt3,
      
  }

  render() {
    console.log(this.state.firstReceipt.paid)
      return (
          // <h1>Receipts</h1>
          <h1>
            <Receipt receipt={this.state.firstReceipt} />
            <Receipt receipt={this.state.secondReceipt} />
            <Receipt receipt={this.state.thirdReceipt} />
          </h1>
      )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)