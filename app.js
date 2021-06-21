import PropTypes from 'prop-types';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Header from './Components/header';
//import TreeContainer from './Components/treeContainer';
import json from './json';
import Store from './Reducers/store';
import { connect, Provider } from 'react-redux';
import { resize } from './Reducers/actions';

import './style.css';
import './selection_style.css';
import ReactTooltip from 'react-tooltip';
import TreeContainer from './Components/treeContainer';

//import Detail from './Components/detail';

$(window).on('resize', resize);

const propTypes = {
	activeNode: PropTypes.string,
	filter: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired
};

class App extends React.PureComponent {
	render() {
		return (
			<div id="container">
				
				<p id="header" className="mainHeader">Microscopy image type selection tree</p>

				<TreeContainer
					activeNode={this.props.activeNode}
					data={json}
					filter={this.props.filter}
					height={this.props.height}
					width={this.props.width}/>
					
			</div>

		);
	}

	/*
			// working version:
			<div id="container">
				
				<p>Microscopy image type selection tree</p>

				<TreeContainer
					activeNode={this.props.activeNode}
					data={json}
					filter={this.props.filter}
					height={this.props.height}
					width={this.props.width}/>
					
			</div>
	*/

}

App.propTypes = propTypes;
App = connect(state => state)(App);

ReactDom.render(
	<Provider store={Store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);