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
    methods:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    backup_methods:[],
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
        methods:[],
        backup_methods:[],
	    pathProps: {
	    	className: 'link'
	    },
		children: [{
			name: 'Labelled',
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
        	methods:[0,1,2,3,],
        	backup_methods:[],
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
        		methods:[0,1,2,3,4,9,31,23,24,25,28,27,],
        		backup_methods:[],
				children: []
			}, {
				name: 'Confocal',
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
        		methods:[0,1,2,3,4,],
        		backup_methods:[],
				children: []
			}, {
				name: 'Light-sheet',
				id: '25',
				parent_id: '15',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: ['nuc_g.png','nuc_g.png','nuc_g.png','nuc_g.png'],
        		mini_info: ['BBBC0xyz1','BBBC0xyz2','BBBC0xyz3','BBBC0xyz4'],
        		parent_tag: 'Culture',
        		methods:[0,1,2,3,],
        		backup_methods:[],
				children: []
			}, {
				name: 'BF',
				id: '26',
				parent_id: '15',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: ['nuc_g.png','nuc_g.png','nuc_g.png','nuc_g.png'],
        		mini_info: ['BBBC0xyz1','BBBC0xyz2','BBBC0xyz3','BBBC0xyz4'],
        		parent_tag: 'Culture',
        		methods:[0,1,2,3,],
        		backup_methods:[],
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
    		backup_methods:[],
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
        		methods:[0,1,2,3,4,],
        		backup_methods:[],
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
        			backup_methods:[],
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
        			backup_methods:[],
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
        		methods:[0,],
        		backup_methods:[],
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
        		methods:[0,4,],
        		backup_methods:[],
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
        backup_methods:[],
	    pathProps: {
	    	className: 'link'
	    },
		children: [{
			name: 'Labelled',
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
        	backup_methods:[],
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
       			methods:[9,31,23,],
       			backup_methods:[],
				children: []
			}, {
				name: 'Confocal',
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
        		backup_methods:[],
				children: []
			}, {
				name: 'Light-sheet',
				id: '27',
				parent_id: '5',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: ['nuc_g.png','nuc_g.png','nuc_g.png','nuc_g.png'],
        		mini_info: ['BBBC0xyz1','BBBC0xyz2','BBBC0xyz3','BBBC0xyz4'],
        		parent_tag: 'Tissue',
        		methods:[0,3,],
        		backup_methods:[],
				children: []
			}, {
				name: 'BF',
				id: '28',
				parent_id: '5',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: 'nuc.png'
                },
        		mini_hrefs: ['nuc_g.png','nuc_g.png','nuc_g.png','nuc_g.png'],
        		mini_info: ['BBBC0xyz1','BBBC0xyz2','BBBC0xyz3','BBBC0xyz4'],
        		parent_tag: 'Tissue',
        		methods:[0,1,2,3,28,27,],
        		backup_methods:[],
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
    		backup_methods:[],
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
        		backup_methods:[],
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
        			backup_methods:[],
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
        			backup_methods:[],
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
        		backup_methods:[],
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
        		backup_methods:[],
				children: []
			}]
		}]


	}]
};