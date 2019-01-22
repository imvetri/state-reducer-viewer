# state-reducer-viewer

Renders a tree of state, reducers/new states. Used in UI-Editor project.
## Usage

    npm install "state-editor-viewer"

in index.js file


    // Libraries.
    import  React, {Component} from  "react";
    import  ReactDOM  from  "react-dom";
    import  StateReducerViewer  from  "state-reducer-viewer";
    
    // Dependencies.
    import  style  from  "./index.css";
    
    // Components.
    mport  StateReducerViewer  from  "state-reducer-viewer";
    
    class  Index  extends  Component {
	    constructor(props) {
		    super(props);
	    }
	    render(){
		    return (
			    <StateReducerViewer/>
		    );
	    }
    }
    
    ReactDOM.render(<Index/>, document.getElementById("index"));

in your html file

> <div id="index"/>

Run it, you will see below screenshot/video(future)


## Available options
No props - Runs with mock state.

    <StateReducerViewer/>


states props  - Array - Tree representation of states and reducer in below format


	let states = [
		 {
			 name:"ValidInputState",
			 data: {
				 border:"black"
			 }
		 }   
    ];

	<StateReducerViewer states={states}/>
closeFunction props - Function - optional - Helps to customise the close behaviour. FUTURE- Allow to change css. to give custom class name.
openFunction props - Function - optional - Helps to customise open behaviour.

### State object properties

data - JSON details of state.
Example: 

	let states = [
		 {
			 name:"ValidInputState",
			 data: {
				 border:"black"
			 },
			 states: [],
			 reducers: []
		 }   
    ];
name - String - name of the state. First state is named "default".
states - Array of next states. Computed by running reducers agains data de here`
reducers - Array of function definitions. 

    let states = [
	    {
		    "name": "Initial State",
		    "data": {
					    "status": "Anonymous"
				    },
				    "reducers": [
					    "state.status='LoggedIn'",
					    "state.status='LoggedOut'"
				    ],
				    "states": [
				    {
				    "name": "Loggedin State",
				    "data": {
					    "status": "LoggedIn"
				    },
				    "reducers": [],
				    "states": []
				    },
				    {
					    "name": "LoggedOut State",
					    "data": {
						    "status": "LoggedOut"
					    },
					    "reducers": [],
					    "states": []
				    }
			    ]
		}
	]
	<StateReducerViewer states={states}/>
Will render below viewer.
![A tree view rendered format](https://github.com/imvetri/state-reducer-viewer/blob/master/Viewer.png)

## Example demos

1. Takes a default data -  
	2. <StateReducerViewer}/>
	3. <StateReducerViewer data={your json data}/>

