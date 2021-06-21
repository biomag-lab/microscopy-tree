import clone from 'clone';
import PropTypes from 'prop-types';
import React from 'react';
import Tree from 'react-tree-graph';
//import { setActiveNode } from '../Reducers/actions';

import { setActiveNode, setFilter } from '../Reducers/actions';

import ReactTooltip from 'react-tooltip';

import Detail from './detail';
import '../selection_style.css';

//import img from '../nuc.png';
//import '../nuc.png';

const propTypes = {
	activeNode: PropTypes.string,
	data: PropTypes.object,
	filter: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number//,
	//icon: PropTypes.object
};

export default class TreeContainer extends React.PureComponent {

	handleClick(event, node) {
		setActiveNode(node);
		//console.log('Clicked '+node);
		//this.buildSubTree(node);
		setFilter(node);
	}

	showInfo(event, nodeKey){
		event.preventDefault();
		//console.log(`Hover over ${nodeKey}`);
		//alert('Cites: [...]');

		let i='10';
		let curImages=nodeKey.indexOf(i);
		//console.log('current image hrefs: '+curImages);

		// update table view
		// TODO

	}

	getRoot(json) {
		//if (json.name === this.props.activeNode) {
		if (json.id === this.props.activeNode) {
			return json;
		}
		for (let i = 0; i < json.children.length; i++) {
			let childJson = this.getRoot(json.children[i]);
			if (childJson) {
				return childJson;
			}
		}
		return false;
	}

	buildSubTree(root) {
		let newChildren = [];

		for (let i = 0; i < root.children.length; i++) {
			let child = this.buildSubTree(root.children[i]);
			if (child) {
				newChildren.push(child);
			}
		}

		if (newChildren.length > 0) {
			root.children = newChildren;
		}

		//if (newChildren.length > 0 || root.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1) {
		if (newChildren.length > 0 || root.id===this.props.filter) {
			//console.log('in buildSubTree filter if | root: '+root.name);
			return root;
		}
		return null;
	}

	setClassName(node) {
		node.children.forEach(this.setClassName, this);

		if (!this.props.filter) {
			return;
		}

		//node.className = node.name.toLowerCase().indexOf(this.props.filter) === -1
		node.className = node.id!==this.props.filter
			? 'node searchExcluded'
			: 'node searchIncluded';
	}

	// useless:
	setIcons(json){
		//let curNode=clone(node);

		//if (json.name === this.props.activeNode) {
		if (json.id === this.props.activeNode) {
			return json;
		}
		for (let i = 0; i < json.children.length; i++) {
			let childJson = this.getRoot(json.children[i]);
			if (childJson) {

				//childJson.pathProps.className=childJson.pathProps.className+' selected';
				return childJson;
			}
		}

		return false;
	}

	countChildren(json){
		let allChildren=0;
		let curCount=json.children.length;
		//console.log(json.name+'	has '+curCount+' children');
		allChildren+=curCount;
		for (let i = 0; i < curCount; i++) {
			let childJson = this.countChildren(json.children[i]);
			allChildren+=childJson;
		}
		//console.log('	curcount: '+allChildren);
		return allChildren;
	}

	setCurIconSize(node,iconSize){
		let curProps=node.nodeProps;
		//console.log(curProps);
		curProps.height=iconSize;
		curProps={
			height:iconSize,
			width:iconSize,
			href:curProps.href
		};
		node.nodeProps=curProps;
		//console.log(curProps);
	}

	procChildren(json,iconSize){
		for (let i = 0; i < json.children.length; i++) {
			let childJson = json.children[i];
			if (childJson) {
				this.procChildren(childJson,iconSize);
			}
			this.setCurIconSize(childJson,iconSize);
		}
	}

	// set icon sizes
	setIconSizes(json){
		// count all nodes to display
		let count=this.countChildren(json);
		//console.log('Counted '+count+' child nodes of '+json.name);
		let iconSize=50;
		if (count<15) {
			iconSize=65;
		} else {
			iconSize=30;
		}
		// set the icon sizes
		this.setCurIconSize(json,iconSize);
		this.procChildren(json,iconSize);
	}

	// update detail view
	showDetails(){
		console.log('called showDetails');
	}

	doCheckName(node,name){
		if (node && node.id===name) {
			return node;
		}
		return false;
	}

	checkName(node,name){
		//console.log('node name: '+node.name+" | against "+name);

		//if (node.name==="Microscopy" || node.name==="Stained" || node.name==="Label-free") {
		//	console.log('--nope--');

		//} else {
			let tmp=this.doCheckName(node,name);
			if (tmp) {
				return tmp;
			}
		//}
		
		for (let i=0; i<node.children.length; i++){
			//let child=node.children[i];
			let child=this.checkName(node.children[i],name);
			if (child) {
				return child;
				//child=this.checkName(node.children[i],node.id);
			}
			//this.doCheckName(child,name);

		}
		return null;
	}

	findParentName(root,curNode){
		let curParent=curNode.parent_id;
		//console.log('in fcn parent: '+curParent);

		let res=this.checkName(root,curParent);
		if (res===null) {
			return "";
		} else
			return res.name;
	}

	
	render() {
		let root = this.props.data;
		let currentNode = this.props.activeNode ? this.getRoot(this.props.data) : this.props.data;

		root = clone(root);

		if (this.props.filter) {
			root = this.buildSubTree(root) || root;
		}

		this.setClassName(root);

		this.setIconSizes(root);

		let parentName=currentNode.parent_tag?currentNode.parent_tag:"";

		let initStats=null;


		return (

			<div id="content" className="contentStyle">
				<Tree
					animated
					data={root}
					height={this.props.height}
					width={this.props.width}
					gProps={{
						className: 'node',
						onClick: this.handleClick,
						onMouseOver: this.showInfo
					}}
					textProps={{
						dy: 3.5
					}}
					steps={30}

					nodeShape="image"
					//nodeProps={curProps}
					keyProp="id"

				/>

				<div id="detail-panel" className="detailPanelMainStyle">
					<Detail 
						data={currentNode}
						currentId={currentNode.id}
						parent={parentName}
						stats={initStats}
					/>
				</div>
			</div>

		);
	}
}

TreeContainer.propTypes = propTypes;