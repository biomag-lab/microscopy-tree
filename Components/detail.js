import React from 'react';
import ReactDOM from 'react-dom';

import '../selection_style.css';

import TableComponent from './tableComponent';
import DataType from 'ka-table/enums';

import $ from 'jquery';

import seg_methods from '../seg_methods';

import nuc from '../nuc.png';


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
			methods_data_all:Array(this.props.data.methods.length).fill(null), //this.initMethods(this.props.data.methods)
			is2D: true,
			is3D: false,
			isElongated: false,
			isConcanve: false,
			isDeviating: false,
			isWobbling: false,
			isMultinuc: false,
			isHeterogen: false,
			isFragmented: false,
			hoverImg: '../challenge_none.png'
		}
		//this.fetchGithubStats(this.props.data.methods);
		
		/*
		this.state={
      		stats_stars:this.fetchGithubStats(this.props.data.methods)
      	}
      	*/
      	//this.state=this.fetchGithubStats()
      	this.handleInputChange = this.handleInputChange.bind(this);
      	this.showTooltipImg=this.showTooltipImg.bind(this);
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
			// 2D/3D:
			if ((this.state.is2D && !data[i]._2d) || (this.state.is3D && !data[i]._3d)) {
				continue;
			}
			// challenges:
			if ((this.state.isElongated && !data[i].challenges.m_elongated) || (this.state.isConcanve && !data[i].challenges.m_concave) || (this.state.isDeviating && !data[i].challenges.m_deviating) || (this.state.isWobbling && !data[i].challenges.m_wobbling) || (this.state.isMultinuc && !data[i].challenges.m_multinuc) || (this.state.isHeterogen && !data[i].challenges.m_heterogen) || (this.state.isFragmented && !data[i].challenges.m_fragmented)) {
				continue;
			}

			let stars=this.state.stats_stars[i+1];
			let forks=this.state.stats_forks[i+1];
			methodsDiv.push(
				{	
					name:data[i].name,
					author:data[i].author,
					year:data[i].year,
					journal:data[i].journal,
					link:[data[i].link,data[i].paper],
					stars:stars, //this.state.methods_data_all[i].stars,
					forks:forks, //this.state.methods_data_all[i].forks,
					_2d:data[i]._2d,
					_3d:data[i]._3d,
					challenges:JSON.stringify(data[i].challenges),
					id:i
				}
			);
		}
		//this.setState({methods_data_all:methodsDiv});
		return methodsDiv;
	}

	fillMethods4(data){
		//console.log(data);
		if (!data || (data.length===1 && !data[0]) || this.checkNull(data)) {
			console.log('its a null');
			return null;
		}
		let methodsDiv=[];
		//console.log(data);
		for (var i = 0; i < data.length; i++) {
			// 2D/3D:
			if ((this.state.is2D && !data[i]._2d) || (this.state.is3D && !data[i]._3d)) {
				continue;
			}
			// challenges:
			if ((this.state.isElongated && !data[i].challenges.m_elongated) || (this.state.isConcanve && !data[i].challenges.m_concave) || (this.state.isDeviating && !data[i].challenges.m_deviating) || (this.state.isWobbling && !data[i].challenges.m_wobbling) || (this.state.isMultinuc && !data[i].challenges.m_multinuc) || (this.state.isHeterogen && !data[i].challenges.m_heterogen) || (this.state.isFragmented && !data[i].challenges.m_fragmented)) {
				continue;
			}

			let stars=this.state.stats_stars[i];
			let forks=this.state.stats_forks[i];
			methodsDiv.push(
				{	
					name:data[i].name,
					author:data[i].author,
					year:data[i].year,
					journal:data[i].journal,
					//link:[data[i].link,data[i].paper],
					links:JSON.stringify(data[i].links),
					stars:stars, //this.state.methods_data_all[i].stars,
					forks:forks, //this.state.methods_data_all[i].forks,
					_2d:data[i]._2d,
					_3d:data[i]._3d,
					challenges:JSON.stringify(data[i].challenges),
					id:i
				}
			);
		}
		//this.setState({methods_data_all:methodsDiv});
		return methodsDiv;
	}

	checkNull(data){
		// return true if all values are null
		let res=true;
		for (var i = 0; i < data.length; i++) {
			if (data[i]){
				res=false;
				break;
			}
		}
		return res;
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
					//link:curMethod.m_link,
					links:curMethod.m_links,
					stars:null,
					forks:null,
					_2d:curMethod.m_2d,
					_3d:curMethod.m_3d,
					//paper:curMethod.m_paper,
					challenges:curMethod.m_challenges,
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
					links:method.m_links,
					stars:stats.stargazers_count,
					forks:stats.forks,
					_2d:method.m_2d,
					_3d:method.m_3d,
					paper:method.m_paper,
					challenges:method.m_challenges,
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
		let links=Array(m).fill(null);
		let oriLinks=Array(m).fill(null);
		const promises=Array(m).fill(null);
		for (var i = 0; i < m; i++) {
			//url=methods[i].m_link;

			// get code links
			//console.log(JSON.stringify(methods[i].m_links));
			let allUrls=methods[i].m_links;
			for (const property in allUrls) {
				if (property==="m_code") {
     				url=allUrls[property];
     				break;
     			}
     		}

			//let link='https://api.github.com/repos/spreka/biomagdsb';
			//let link='https://api.github.com/repos/napari/napari';

			//console.log('received url: '+url);
			let link='';
			let dummy=false;
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
				//return null;
				// use this as a placeholder link:
				link='https://api.github.com/repos/atom/github';
				dummy=true;
			}

			console.log('fetching link: '+link);
			//console.log(methods[i]);

			// this works more or less:
			/*
			fetch(link)
				.then(response => response.json())
				.then(data => { this.getGithubStats(data,i,methods[i-1]) })
				.catch(err => { console.error(err) });
			*/

			links[i]=link;
			if (dummy)
				oriLinks[i]=url;
			else
				oriLinks[i]=link;
			//promises.push(this.getGithubStatsLight2(link));

		}

		// try this:
		/*
		this.callGithubStatsFetch(links)
			.then((res) => {
		    // both have loaded!
		    console.log('in main fetch fcn');
		    console.log(res);
		});
		*/
		/*
		Promise.all(promises)
           .then((results) => {
               console.log("All done");
               console.log(results);
           })
           .catch((e) => {
               // Handle errors here
           });
		*/

		Promise.all(links.map(url =>
			fetch(url)
			    .then(response => response.json())
				.then(data => { 
					// check if placeholder link
					console.log('---- in promise of link '+url);
					if (url==='https://api.github.com/repos/atom/github')
						return [[-1,-1],url]
					else
						return [this.getGithubStatsLight(data), url] 
				})
				.catch(err => { console.error(err) })
		)).then(results => {
		    //console.log("All done");
            //console.log(results[0]);
            this.storeGithubStats(methods,results,oriLinks); //links);
		})
		.catch((e) => {
			console.error(e);
       });
	}

	getGithubStatsLight(stats){
		//console.log([stats.stargazers_count, stats.forks]);
		return [stats.stargazers_count, stats.forks];
	}

	storeGithubStats(methods,stats,oriLinks){
		const methods_data_all=this.state.methods_data_all.slice();
		const stats_stars=this.state.stats_stars.slice();
		const stats_forks=this.state.stats_forks.slice();
		for (var i = 0; i < stats.length; i++) {
			let curStat=stats[i];
			let idx=oriLinks.indexOf(curStat[1]);
			let method=methods[idx];
			if (!method) {
				//console.log('No data found for method');
				//console.log(methods);
				continue;
			}
			let stat=curStat[0];
			methods_data_all[i]={	
				name:method.m_name,
				author:method.m_author,
				year:method.m_year,
				journal:method.m_journal,
				//link:method.m_link,
				links:method.m_links,
				stars:stat[0],
				forks:stat[1],
				_2d:method.m_2d,
				_3d:method.m_3d,
				//paper:method.m_paper,
				challenges:method.m_challenges,
				id:i
			};
			stats_stars[i]=stat[0];
			stats_forks[i]=stat[1];
		}
		//console.log(methods_data_all);
		this.setState({stats_stars:stats_stars, stats_forks:stats_forks, curNodeId:this.props.currentId, methods_data_all:methods_data_all});
	}

	/*---- these didn't help ----*/
	/*
	getGithubStatsLight2(url){
		//return new Promise((resolve) => {
	    //    fetch(url)
		//		.then(response => response.json())
		//		.then(data => { this.getGithubStatsLight(data) })
	    //});
		
	    return fetch(url)
			.then(response => response.json())
			.then(data => { this.getGithubStatsLight(data) })
	}

	callGithubStatsFetch(urls){
		console.log(urls);
		return Promise.all(urls.map(url =>
		    fetch(url)
		    	.then(response => response.json()
		    	.then(data => { this.getGithubStatsLight(data) })
				.catch(err => { console.error(err) })
		    )
		)).then(stats => {
		    console.log(stats);
		})
	}

	callGithubStatsFetch2(urls){
		return Promise.all(urls)
           .then((results) => {
               console.log("All done");
               console.log(results);
           })
           .catch((e) => {
               
           });
	}
	*/
	/*---------------------------*/


	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}


	showTooltipImg(event){
		setTimeout(function (){
			const name=event.target.childNodes[0].data;

			console.log('mouse over '+name);
			let imgEl=document.getElementById('hoverImgEl');
			//console.log(imgEl);
			imgEl.setAttribute('src','../challenge_'+name+'.png');
			//imgEl.setAttribute('style','display:block');	
		}, 150);
		
	}

	hideTooltipImg(event){
		setTimeout(function (){
			const name=event.target.childNodes[0].data;

			console.log('mouse leave '+name);
			let imgEl=document.getElementById('hoverImgEl');
			//console.log(imgEl);
			//imgEl.setAttribute('style','display:none');
			imgEl.setAttribute('src','../challenge_'+'none'+'.png');
		}, 150);
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
	    let col_keys=['name','author','year','journal','links','stars','forks','_2d','_3d','challenges'];
	    let col_names=['Name','Author','Year','Journal','Links','Github ★','Forks','2D','3D','Challenges'];
	    let col_types=['string','string','number','string','string','number','number','boolean','boolean','string'];
	    //let tableData=this.fillMethods2(this.props.data,this.state);
	    //let tableData=this.fillMethods3(this.state.methods_data_all);
	    let tableData=this.fillMethods4(this.state.methods_data_all);
	    /*
	    let tableData=this.state.methods_data_all;
		*/
		console.log(tableData);
		//let ready=this.checkTableData(tableData);
		let ready=tableData!==null;

		//console.log('2D: '+this.state.is2D+' | 3D: '+this.state.is3D);

		//if (ready) {
			return(
				<div className="detailPanelStyle">
					<p id="imageBoxHeader" className="detailHeader">{panelName}</p>
					<div className="imageBox">


						<div className="helpDiv info">
							<p className="listText">Do you think your method works on this kind of data? E-mail us at <a href="mailto:email">email@address.c</a>
								<br />
								Get help <a href="https://github.com/spreka/microscopy-tree/issues">here</a>
							</p>		
							
						</div>
						<br />

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

							<div style={{display:'flex'}}>
								<form>
									<span>2D</span>
									<label className="switch">
										<input
											name="is2D"
											type="checkbox"
											checked={this.state.is2D}
											onChange={this.handleInputChange} />
											<span className="slider round"></span>
										
									</label>
									<br />
									<span>3D</span>
									<label className="switch">
										<input
											name="is3D"
											type="checkbox"
											checked={this.state.is3D}
											onChange={this.handleInputChange} />
											<span className="slider round"></span>
										
									</label>
								</form>					
							</div>



							<p>Challenges:</p>
							<div style={{display:'flex'}}>
								<form>	
									<label className="challenge2Outer" 
										onMouseOver={this.showTooltipImg} onMouseLeave={this.hideTooltipImg}>
										
										<input
											name="isElongated"
											type="checkbox"
											checked={this.state.isElongated}
											onChange={this.handleInputChange} />
											<span className="challenge2" >
												elongated
											</span>
											
										
									</label>

									<label className="challenge2Outer" onMouseOver={this.showTooltipImg} onMouseLeave={this.hideTooltipImg}>
										<input
											name="isConcanve"
											type="checkbox"
											checked={this.state.isConcanve}
											onChange={this.handleInputChange} />
											<span className="challenge2">concave</span>
										
									</label>

									<label className="challenge2Outer" 
										onMouseOver={this.showTooltipImg} onMouseLeave={this.hideTooltipImg}>
										<input
											name="isDeviating"
											type="checkbox"
											checked={this.state.isDeviating}
											onChange={this.handleInputChange} />
											<span className="challenge2">deviating</span>
										
									</label>

									<label className="challenge2Outer" 
										onMouseOver={this.showTooltipImg} onMouseLeave={this.hideTooltipImg}>
										<input
											name="isWobbling"
											type="checkbox"
											checked={this.state.isWobbling}
											onChange={this.handleInputChange} />
											<span className="challenge2">wobbling</span>
										
									</label>
									<br />

									<label className="challenge2Outer" 
										onMouseOver={this.showTooltipImg} onMouseLeave={this.hideTooltipImg}>
										<input
											name="isMultinuc"
											type="checkbox"
											checked={this.state.isMultinuc}
											onChange={this.handleInputChange} />
											<span className="challenge2">multinuc</span>
										
									</label>

									<label className="challenge2Outer" 
										onMouseOver={this.showTooltipImg} onMouseLeave={this.hideTooltipImg}>
										<input
											name="isHeterogen"
											type="checkbox"
											checked={this.state.isHeterogen}
											onChange={this.handleInputChange} />
											<span className="challenge2">heterogen</span>
										
									</label>

									<label className="challenge2Outer" 
										onMouseOver={this.showTooltipImg} onMouseLeave={this.hideTooltipImg}>
										<input
											name="isFragmented"
											type="checkbox"
											checked={this.state.isFragmented}
											onChange={this.handleInputChange} />
											<span className="challenge2">fragmented</span>
										
									</label>
								</form>	

								<div><img id="hoverImgEl" className="hoverImg" src={this.state.hoverImg}/></div>
							</div>
							
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