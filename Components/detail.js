import React from 'react';
import ReactDOM from 'react-dom';

import '../selection_style.css';

import TableComponent from './tableComponent';
import DataType from 'ka-table/enums';

import $ from 'jquery';

import seg_methods from '../seg_methods';


function SampleImage(props){
	return (
    <img src={props.name} id={props.im_id}/>
  );
}

export default class Detail extends React.Component {
	constructor(props){
		super(props);
		this.state={
			stats_stars:Array(this.props.data.methods.length).fill(null), 
			stats_forks:Array(this.props.data.methods.length).fill(null),
			curNodeId:null,
			curImInfo:"",
			curImInfoList:null,
			methods_data_all:Array(this.props.data.methods.length).fill(null)//this.initMethods(this.props.data.methods)
		}
		//this.fetchGithubStats(this.props.data.methods);
		
		/*
		this.state={
      		stats_stars:this.fetchGithubStats(this.props.data.methods)
      	}
      	*/
      	//this.state=this.fetchGithubStats()
	}

	setI(i){
		this.setState({
			data:this.state.data,
			currentId:i,
		});
	}

	findImages(i){
		this.setI(i);
		let curImages=this.state.data.find(data.id===i);
		//console.log('current image hrefs: '+curImages);
	}

	makeIm(imName){
		return '<img src="'+imName+'"/>';
	}

	renderIm(name,nodeId,imId){
		return(
			<SampleImage
				name={name}
				im_id={nodeId+"_"+imId}
			/>
		);
	}

	previewIm(imName,src,id,node){
		//console.log('previewing ');
		//console.log(imName);


		// show info
		this.setState({
			curImInfo:imName+' | source: '+src,
			curImInfoList:[imName,src]
		});

		// highlight selected image:
		const imEls = $('img[id^="miniIm_"]');
		for (var i = 0; i < imEls.length; i++) {
			imEls[i].setAttribute('style','border-color:white !important');
		}
		let imEl=document.getElementById(id);
		imEl.setAttribute('style','border-color:rgba(52, 189, 235,1)');
	}

	fillMiniImages(ims,srcs,nodeId){

		const resDiv=[];
		const baseStyle={borderColor:'white !important'};
		for (var i = 0; i < ims.length; i++) {
			let id="miniIm_"+nodeId+"_"+i;
			resDiv.push(<img key={i} src={ims[i]} id={id} onClick={this.previewIm.bind(this,ims[i],srcs[i],id,nodeId)} style={baseStyle}/>);
		}

		return resDiv;
	}

	getNodeName(inner,outer){
		return outer+" "+inner;
	}

	fillMethods(data,stats){
		//console.log(stats);
		if (!data.methods) {
			return null;
		}
		let methodsDiv=[];
		for (var i = 0; i < data.methods.length; i++) {
			methodsDiv.push(
				<div key={i} id={i}>
					<p/* onClick={this.previewIm(data.methods[i])}*/>
					{data.methods[i].m_name}   |   {data.methods[i].m_author} ({data.methods[i].m_year}, {data.methods[i].m_journal})   |   <a href={data.methods[i].m_link}>visit</a>   |   GitHub stars: {stats.stats_stars[i+1]} | forks: {stats.stats_forks[i+1]}</p>
				</div>);
		}
		return methodsDiv;
	}

	fillMethods2(data){
		//console.log(stats);
		if (!data.methods) {
			return null;
		}
		let methodsDiv=[];
		//console.log(data.methods);
		for (var i = 0; i < data.methods.length; i++) {
			let stars=this.state.stats_stars[i+1];
			let forks=this.state.stats_forks[i+1];
			methodsDiv.push(
				{	
					name:data.methods[i].m_name,
					author:data.methods[i].m_author,
					year:data.methods[i].m_year,
					journal:data.methods[i].m_journal,
					link:data.methods[i].m_link,
					stars:stars, //this.state.methods_data_all[i].stars,
					forks:forks, //this.state.methods_data_all[i].forks,
					id:i
				}
			);
		}
		//this.setState({methods_data_all:methodsDiv});
		return methodsDiv;
	}

	fillMethods3(data){
		//console.log(data);
		if (!data || (data.length===1 && !data[0])) {
			console.log('its a null');
			return null;
		}
		let methodsDiv=[];
		//console.log(data);
		for (var i = 0; i < data.length-1; i++) {
			let stars=this.state.stats_stars[i+1];
			let forks=this.state.stats_forks[i+1];
			methodsDiv.push(
				{	
					name:data[i].name,
					author:data[i].author,
					year:data[i].year,
					journal:data[i].journal,
					link:data[i].link,
					stars:stars, //this.state.methods_data_all[i].stars,
					forks:forks, //this.state.methods_data_all[i].forks,
					id:i
				}
			);
		}
		//this.setState({methods_data_all:methodsDiv});
		return methodsDiv;
	}

	checkTableData(data){
		let isReady=true;
		for (var i = 0; i < data.length; i++) {
			if (!data[i] || !data[i].stars || !data[i].forks) {
				isReady=false;
				return isReady;
			}
		}
		return isReady;
	}

	filterJSONid(json, id){
		return json.filter(
			function(json) {
				return (json['m_id'] == id);
			}
		)[0];
	}

	collectMethods(json,ids){
		let resMethods=[];
		for (var i = 0; i < ids.length; i++) {
			// collect details from the methods struct
			var thisMethod=this.filterJSONid(json['seg_methods'], ids[i]);
			if (!thisMethod) {
				continue;
			}
			resMethods.push(thisMethod);
		}
		return resMethods;
	}

	initMethods(methods,set){
		let outMethods=Array(methods.length).fill(null);
		for (var i = 0; i < methods.length; i++) {
			let curMethod=methods[i];
			outMethods[i]={	
					name:curMethod.m_name,
					author:curMethod.m_author,
					year:curMethod.m_year,
					journal:curMethod.m_journal,
					link:curMethod.m_link,
					stars:null,
					forks:null,
					id:i
				};
		}
		//console.log('inited methods:');
		//console.log(outMethods);
		if (set) {
			this.setState({methods_data_all:outMethods}, () => {
				//console.log(this.state.methods_data_all, 'methods_data_all');
				this.fetchGithubStats(this.props.data.methods);
			});
		}
		return outMethods;
	}

	initMethods2(set){
		let methods=this.collectMethods(seg_methods,this.props.data.methods);
		let outMethods=Array(methods.length).fill(null);
		for (var i = 0; i < methods.length; i++) {
			let curMethod=methods[i];
			outMethods[i]={	
					name:curMethod.m_name,
					author:curMethod.m_author,
					year:curMethod.m_year,
					journal:curMethod.m_journal,
					link:curMethod.m_link,
					stars:null,
					forks:null,
					id:i
				};
		}
		//console.log('inited methods:');
		//console.log(outMethods);
		if (set) {
			this.setState({methods_data_all:outMethods}, () => {
				//console.log(this.state.methods_data_all, 'methods_data_all');
				this.fetchGithubStats(methods);
			});
		}
		return outMethods;
	}

	componentDidMount(){
		//this.initMethods(this.props.data.methods,true);
		this.initMethods2(true);
		//this.fetchGithubStats(this.props.data.methods);
	}

	componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentId !== this.props.currentId) {
        	//console.log('---- updating props ----');
        	this.setState({
				curImInfo:"",
				curImInfoList:null
			});
            //this.setState({methods_data_all:this.initMethods(this.props.data.methods)});
            
            //this.initMethods(this.props.data.methods,true);
            this.initMethods2(true);
            //this.fetchGithubStats(this.props.data.methods);
        }
    }

    updateStats(state){
    	let data=state.methods_data_all.slice();
    	for (var i = 0; i < data.length; i++) {
    		let cur=data[i];
    		if (!cur.stars || !cur.forks) {
    			return true;
    		}
    	}
    	return false;
    }

	getGithubStats(stats,i,method){
		//console.log('fetched '+stats.stargazers_count);
		//console.log(method);
		//console.log(i);
		///*
		const stats_stars=this.state.stats_stars.slice();
		stats_stars[i]=stats.stargazers_count;
		const stats_forks=this.state.stats_forks.slice();
		stats_forks[i]=stats.forks;
		//this.setState({stats_stars:stats_stars, stats_forks:stats_forks, curNodeId:this.props.currentId});
		//*/

		///*
		const methods_data_all=this.state.methods_data_all.slice();
		methods_data_all[i]={	
					name:method.m_name,
					author:method.m_author,
					year:method.m_year,
					journal:method.m_journal,
					link:method.m_link,
					stars:stats.stargazers_count,
					forks:stats.forks,
					id:i
				};
		this.setState({stats_stars:stats_stars, stats_forks:stats_forks, curNodeId:this.props.currentId, methods_data_all:methods_data_all});

		//return stats;
	}

	fetchGithubStats(methods){
		//console.log('got methods: '+methods.length);
		//console.log(methods);

		let url=null;
		let m=methods.length;
		for (var i = 0; i < m; i++) {
			url=methods[i].m_link;

			//let link='https://api.github.com/repos/spreka/biomagdsb';
			//let link='https://api.github.com/repos/napari/napari';

			//console.log('received url: '+url);
			let link='';
			if (url.toLowerCase().indexOf('github.com')!==-1) {
				let tmp='';
				if (url.toLowerCase().indexOf('http://')!==-1) {
					tmp=url.substring(17);
				} else if (url.toLowerCase().indexOf('https://')!==-1) {
					tmp=url.substring(18);
				}
				link='https://api.github.com/repos'+tmp;
			} else {
				console.log('cannot fetch github stats from non-github repo');
				return null;
			}

			console.log('fetching link: '+link);
			//console.log(methods[i]);
			fetch(link)
				.then(response => response.json())
				.then(data => { this.getGithubStats(data,i,methods[i-1]) })
				.catch(err => { console.error(err) });

		}

	}


	render(){
		let currentMiniImages=this.props.data.mini_hrefs;
		let imDiv=this.fillMiniImages(currentMiniImages,this.props.data.mini_info,this.props.data.id);
		//console.log(currentMiniImages);
		let panelName=this.getNodeName(this.props.data.name,this.props.parent);
		//let infoDiv=this.fillMethods(this.props.data,this.state);	

		// check if need to change
		//console.log('update detail stats?');
		/*
		let change=this.state.curNodeId!==this.props.currentId;
		//console.log(change);
		if (change) {
			this.fetchGithubStats(this.props.data.methods);
		}
		*/

		let imInfo=this.state.curImInfo;

		let dispImTable=this.state.curImInfoList===null?false:true;
		//console.log(this.state.curImInfoList);
		let info_keys=null;
		let info_names=null;
		let info_types=null;
		let infoTableData=null;
		if (dispImTable) {
			info_keys=['name','src'];
			info_names=['Dataset','Source'];
			info_types=['string','string'];
			infoTableData=[{name:this.state.curImInfoList[0], src:this.state.curImInfoList[1], id: 0}];
			//console.log(infoTableData);
		}

		
		// construct details as a table
	    let col_keys=['name','author','year','journal','link','stars','forks'];
	    let col_names=['Name','Author','Year','Journal','Link','Github ★','Forks'];
	    let col_types=['string','string','number','string','string','number','number'];
	    //let tableData=this.fillMethods2(this.props.data,this.state);
	    let tableData=this.fillMethods3(this.state.methods_data_all);
	    /*
	    let tableData=this.state.methods_data_all;
		*/
		//console.log(tableData);
		//let ready=this.checkTableData(tableData);
		let ready=tableData!==null;

		//if (ready) {
			return(
				<div className="detailPanelStyle">
					<p id="imageBoxHeader" className="detailHeader">{panelName}</p>
					<div className="imageBox">
						<div className="sampleImage">{imDiv}</div>

						<div id="imInfo" className="info">

							{dispImTable && 
								<div>
									<p>Images:</p>
									<TableComponent
										data={infoTableData}
										columns_keys={info_keys}
										columns_names={info_names}
										columns_types={info_types}
									/>
								</div>
							}
							
						</div>
						<div className="spaceing"></div>
						<div className="info">
							<p>Methods:</p>
							
							{ready && 
								<TableComponent 
									data={tableData}
									columns_keys={col_keys}
									columns_names={col_names}
									columns_types={col_types}
								/>
							}
							
						</div>
					</div>
				</div>
			);

		/*
		} else {
			return(
				<div className="detailPanelStyle">
					<p id="imageBoxHeader" className="detailHeader">{panelName}</p>
					<div className="imageBox">
						<div className="sampleImage">{imDiv}</div>

						<div id="imInfo" className="info">
							<p>{imInfo}</p>
						</div>
						<div className="spaceing"></div>
						<div className="info">
							<p>Methods:</p>
							<p>Loading...</p>
							 
								
							
						</div>
					</div>
				</div>
			);
		}
		*/
	}
}


/*
<img src={this.findImages(i)} />
{infoDiv}
<p>--------</p>
<TableComponent />
<p>{imInfo}</p>
*/