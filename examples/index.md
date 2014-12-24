# rc-pager@1.0.0


### pager

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

````html

<div id="p1"></div>

````

````js
/** @jsx React.DOM */

require(['../','react'],function(Pager,React){
  var pager = React.renderComponent(
    <Pager total={10} current={5}/>,
    document.getElementById('p1')
  );
});


````

### pager callback

````html

<div id="p2"></div>

````
````js
require(['../','react'],function(Pager,React){
  function skipTo(page){
    alert(page + 1);
  }

  var pager = React.renderComponent(
    <Pager total={10} current={5} onSkipTo={skipTo}/>,
    document.getElementById('p2')
  );
});
````

### nest to other component

````html

<div id="p3"></div>

````
````js
require(['../','react'],function(Pager,React){

  var MyControl = React.createClass({

    getInitialState: function () {
      return {
        current : 0
      };
    },

    handleSkip : function(page){
      //To Do
      this.setState({
        current : page
      });

      if(this.props.onSkipTo){
        this.props.onSkipTo(page);
      }
    },
    render : function  () {
      return (
        <div>
          <Pager total={this.props.total} current={this.state.current} onSkipTo={this.handleSkip}/>
        </div>
      );
    }
  });

  var control = React.renderComponent(
    <MyControl total={10}/>,
    document.getElementById('p3')
  );
});
````