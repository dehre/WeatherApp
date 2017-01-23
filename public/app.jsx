var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({

  render: function(){

    var passedName=this.props.name;
    var passedMessage=this.props.message;

    return (
      <div>
        <h1>Hello {passedName}!</h1>
        <p>{passedMessage}</p>
      </div>
    )
  }

});

var GreeterForm = React.createClass({

  onFormSubmit:function(e){
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0){
      this.refs.name.value='';
      updates.name=name;
    }

    if(message.length > 0){
      this.refs.message.value='';
      updates.message=message;
    }

    this.props.onNewData(updates);

  },

  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Type the name"/>
        </div>
        <div>
          <textarea type="text" ref="message" placeholder="Type the message"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }

});


var Greeter = React.createClass({

  getDefaultProps: function(){
    return {
      name: "reaCt DeFauLt",
      message: "Default Message"
    }
  },
////////////////
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
////////////////
  handleNewData: function(updates){

    this.setState(updates);

  },
////////////////
  render: function(){
    var name = this.state.name;
    var message = this.state.message;

    return(
      <div>

        <GreeterMessage name={name} message={message} />

        <GreeterForm onNewData={this.handleNewData}/>

      </div>
    )
  }
////////////////
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
