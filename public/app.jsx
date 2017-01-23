var GreeterMessage = React.createClass({

  render: function(){

    var name=this.props.name;
    var passedMessage=this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{passedMessage}</p>
      </div>
    )
  }

});

var GreeterForm = React.createClass({

  onFormSubmit:function(e){
    e.preventDefault();

    var name=this.refs.name.value;

    if(name.length>0){
      this.refs.name.value='';
      this.props.onNewName(name);
    }
  },

  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" />
        <button>Set Child</button>
      </form>
    )
  }

});


var Greeter = React.createClass({

  getDefaultProps: function(){
    return {
      name: "reaCt",
      message: "Default Message"
    }
  },
////////////////
  getInitialState: function(){
    return {
      name: this.props.name
    }
  },
////////////////
  handleNewName: function(nameArg){

    this.setState({
      name: nameArg
    });

  },
////////////////
  render: function(){
    var name = this.state.name;
    var message = this.props.message;

    return(
      <div>

        <GreeterMessage name={name} message={message} />

        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    )
  }
////////////////
});

var firstName= "Andrew";

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
