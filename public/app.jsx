var Greeter = React.createClass({

  getDefaultProps: function(){
    return {
      name: "reaCt",
      message: "Default Message"
    }
  },
////////////////
  getInitialState: function(){ //changed
    return {
      name: this.props.name
    }
  },
////////////////
  onButtonClick: function(e){
    e.preventDefault();

    var nameRef = this.refs.name;

    var name=nameRef.value;
    nameRef.value='';

    if(typeof name === "string" && name.length > 0){
      this.setState({
        name: name
      });
    }

  },
////////////////
  render: function(){
    var name = this.state.name; //changed
    var message = this.props.message;

    return(
      <div>
        <h1>Hello {name}</h1>
        <p>{message + "!!"}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    )
  }
////////////////
});

var firstName= "Andrew";

ReactDOM.render(
  <Greeter name={firstName} message="Message from PrOp"/>,
  document.getElementById('app')
);
