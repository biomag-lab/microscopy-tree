export default {
	name: 'Microscopy',
	id: '1',
	parent_id: null,
	nodeProps: {
		height: 50,
		width: 50,
        href: 'nuc.png'
    },
    mini_hrefs: ['nuc_r.png','nuc_g.png','nuc_b.png'],
    mini_info: ['BBBC0xyz1','BBBC0xyz2','BBBC0xyz3'],
    parent_tag: null,
    methods:[0],
    pathProps: {
    	className: 'link'
    },

	children: [{
		name: 'Culture',
		id: '2',
		parent_id: '1',
		nodeProps: {
			height: 50,
			width: 50,
            href: 'nuc_r.png'
        },
        mini_hrefs: ['nuc_r.png','nuc_g.png'],
        mini_info: ['BBBC0xyz1','BBBC0xyz2'],
        parent_tag: null,
        methods:[0,3],
	    pathProps: {
	    	className: 'link'
	    },
		children: [{
			name: 'Stained',
			id: '15',
			parent_id: '2',
			nodeProps: {
                height: 50,
				width: 50,
		        href: 'nuc.png'
	        },
        	mini_hrefs: [],
        	mini_info: [],
        	parent_tag: 'Culture',
        	methods:[],
			children: [{
				name: 'Fluo',
				id: '17',
				parent_id: '15',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: ['nuc_g.png','nuc_b.png'],
        		mini_info: ['BBBC0xyz1','BBBC0xyz2'],
        		parent_tag: 'Culture',
        		methods:[0,1],
				children: []
			}, {
				name: 'Other',
				id: '18',
				parent_id: '15',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: ['nuc_g.png','nuc_g.png','nuc_g.png','nuc_g.png'],
        		mini_info: ['BBBC0xyz1','BBBC0xyz2','BBBC0xyz3','BBBC0xyz4'],
        		parent_tag: 'Culture',
        		methods:[0,1,2],
				children: []
			}]
		}, {
			name: 'Label-free',
			id: '16',
			parent_id: '2',
			nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
    		mini_hrefs: [],
    		mini_info: [],
    		parent_tag: 'Culture',
    		methods:[],
			children: [{
				name: 'BF',
				id: '19',
				parent_id: '16',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Culture',
        		methods:[],
				children: [{
					name: 'Transparent',
					id: '23',
					parent_id: '19',
					nodeProps: {
                        height: 50,
						width: 50,
				        href: 'nuc.png'
                	},
        			mini_hrefs: [],
        			mini_info: [],
        			parent_tag: 'Culture BF',
        			methods:[],
					children: []
				}, {
					name: 'Non-transparent',
					id: '24',
					parent_id: '19',
					nodeProps: {
                        height: 50,
						width: 50,
				        href: 'nuc.png'
                	},
        			mini_hrefs: [],
        			mini_info: [],
        			parent_tag: 'Culture BF',
        			methods:[],
					children: []
				}]
			}, {
				name: 'DIC',
				id: '20',
				parent_id: '16',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Culture',
        		methods:[],
				children: []
			},	{
				name: 'PC',
				id: '21',
				parent_id: '16',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Culture',
        		methods:[],
				children: []
			}, {
				name: 'Holo',
				id: '22',
				parent_id: '16',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Culture',
        		methods:[],
				children: []
			}]
		}]




	}, {
		name: 'Tissue',
		id: '3',
		parent_id: '1',
		nodeProps: {
            height: 50,
			width: 50,
	        href: 'nuc_g.png'
        },
        mini_hrefs: [],
        mini_info: [],
        parent_tag: null,
        methods:[],
	    pathProps: {
	    	className: 'link'
	    },
		children: [{
			name: 'Stained',
			id: '5',
			parent_id: '3',
			nodeProps: {
                height: 50,
				width: 50,
		        href: 'nuc.png'
	        },
        	mini_hrefs: [],
        	mini_info: [],
        	parent_tag: 'Tissue',
        	methods:[],
			children: [{
				name: 'Fluo',
				id: '7',
				parent_id: '5',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
       			mini_hrefs: [],
       			mini_info: [],
       			parent_tag: 'Tissue',
       			methods:[],
				children: []
			}, {
				name: 'Other',
				id: '8',
				parent_id: '5',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Tissue',
        		methods:[],
				children: []
			}]
		}, {
			name: 'Label-free',
			id: '6',
			parent_id: '3',
			nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
    		mini_hrefs: [],
    		mini_info: [],
    		parent_tag: 'Tissue',
    		methods:[],
			children: [{
				name: 'BF',
				id: '9',
				parent_id: '6',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Tissue',
        		methods:[],
				children: [{
					name: 'Transparent',
					id: '13',
					parent_id: '9',
					nodeProps: {
                        height: 50,
						width: 50,
				        href: 'nuc.png'
                	},
        			mini_hrefs: [],
        			mini_info: [],
        			parent_tag: 'Tissue BF',
        			methods:[],
					children: []
				}, {
					name: 'Non-transparent',
					id: '14',
					parent_id: '9',
					nodeProps: {
                        height: 50,
						width: 50,
				        href: 'nuc.png'
                	},
        			mini_hrefs: [],
        			mini_info: [],
        			parent_tag: 'Tissue BF',
        			methods:[],
					children: []
				}]
			}, {
				name: 'DIC',
				id: '10',
				parent_id: '6',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Tissue',
        		methods:[],
				children: []
			},	{
				name: 'PC',
				id: '11',
				parent_id: '6',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Tissue',
        		methods:[],
				children: []
			}, {
				name: 'Holo',
				id: '12',
				parent_id: '6',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Tissue',
        		methods:[],
				children: []
			}]
		}]


	}, {
		name: 'Organ',
		id: '4',
		parent_id: '1',
		nodeProps: {
            height: 50,
			width: 50,
	        href: 'nuc_b.png'
        },
        mini_hrefs: [],
        mini_info: [],
        parent_tag: null,
        methods:[],
	    pathProps: {
	    	className: 'link'
	    },
		children: [{
			name: 'Stained',
			id: '25',
			parent_id: '4',
			nodeProps: {
                height: 50,
				width: 50,
		        href: 'nuc.png'
	        },
        	mini_hrefs: [],
        	mini_info: [],
        	parent_tag: 'Organ',
        	methods:[],
			children: [{
				name: 'Fluo',
				id: '27',
				parent_id: '25',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Organ',
        		methods:[],
				children: []
			}, {
				name: 'Other',
				id: '28',
				parent_id: '25',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Organ',
        		methods:[],
				children: []
			}]
		}, {
			name: 'Label-free',
			id: '26',
			parent_id: '4',
			nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
    		mini_hrefs: [],
    		mini_info: [],
    		parent_tag: 'Organ',
    		methods:[],
			children: [{
				name: 'BF',
				id: '29',
				parent_id: '26',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Organ',
        		methods:[],
				children: [{
					name: 'Transparent',
					id: '33',
					parent_id: '29',
					nodeProps: {
                        height: 50,
						width: 50,
				        href: 'nuc.png'
                	},
        			mini_hrefs: [],
        			mini_info: [],
        			parent_tag: 'Organ BF',
        			methods:[],
					children: []
				}, {
					name: 'Non-transparent',
					id: '34',
					parent_id: '29',
					nodeProps: {
                        height: 50,
						width: 50,
				        href: 'nuc.png'
                	},
        			mini_hrefs: [],
        			mini_info: [],
        			parent_tag: 'Organ BF',
        			methods:[],
					children: []
				}]
			}, {
				name: 'DIC',
				id: '30',
				parent_id: '26',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Organ',
        		methods:[],
				children: []
			},	{
				name: 'PC',
				id: '31',
				parent_id: '26',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Organ',
        		methods:[],
				children: []
			}, {
				name: 'Holo',
				id: '32',
				parent_id: '26',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: [],
        		mini_info: [],
        		parent_tag: 'Organ',
        		methods:[],
				children: []
			}]
		}]
	}]
};