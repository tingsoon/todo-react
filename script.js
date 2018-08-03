class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.handleClick = this.handleClick.bind( this );
    this.handleRemove = this.handleRemove.bind( this );
  }

  state = {
    list : [],
    word : "",
    enterSmth : ""
  }

  changeHandler(event){
    if (event.target.value.length === 0 ) {
      this.state.enterSmth = 'Enter something';
    } else {
      this.state.enterSmth = "";
    }
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  handleClick() {
    let toDoList = this.state.word;
    console.log("clicking", toDoList)
    this.state.list.push(toDoList);
    // console.log(this.state.list);

    let allList = this.state.list;
    console.log(allList);

    this.setState( {list: allList })
  }

  handleRemove(id) {
    let removeTask = this.state.list.filter((list) => {
      if (list.id == id) {
        return list
      }
    })
    this.setState( {list: removeTask})
  }

  render() {
      // render the list with a map() here
      let tasks = this.state.list.map( (item, i) => {
                  return <li key={i}>{ item }</li>
      })
      console.log("rendering");
      return (
        <div>
          <h4>{this.state.enterSmth}</h4>
          <div className="list">
            <input onChange={this.changeHandler} value={this.state.word}/>
            <button onClick={this.handleClick}>Add item</button>
          </div>
          <div>
            {tasks}
            <button onClick={this.handleRemove}>Remove item</button>
          </div>
        </div>
      );
  }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);

