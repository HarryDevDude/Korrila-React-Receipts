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
              

          </div>
      )
  }
}
class App extends React.Component {
  state = {
      firstReceipt: receipt1,
      secondReceipt: receipt2,
      thirdRecepeit: receipt3

  }

  render() {
      return (
          // <h1>Receipts</h1>
          <h1>
              <Receipt receipt={this.state.firstReceipt} />
              <Receipt receipt={this.state.secondReceipt} />
              <Receipt receipt={this.state.thirdRecepeit} />
              
          </h1>
      )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)