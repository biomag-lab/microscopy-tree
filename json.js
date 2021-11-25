let imDir= './data/images/';
export default {
	name: 'Microscopy',
	id: '1',
	parent_id: null,
	nodeProps: {
		height: 50,
		width: 50,
        href: imDir+'mic.png'
    },
    mini_hrefs: [],
    mini_info: [],
    parent_tag: null,
    methods:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,],
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
            href: imDir+'culture_fluo_ex4.png'
        },
        mini_hrefs: [imDir+'culture_fluo_ex4.png'],
        mini_info: [{m_dataset:'BBBC021', m_source:'https://bbbc.broadinstitute.org/BBBC021'}],
        parent_tag: null,
        methods:[0,3,38,],
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
		        href: imDir+'culture_fluo_ex3.png'
	        },
        	mini_hrefs: [imDir+'culture_fluo_ex3.png'],
        	mini_info: [{m_dataset:'BBBC021', m_source:'https://bbbc.broadinstitute.org/BBBC021'}],
        	parent_tag: 'Culture',
        	methods:[0,1,2,3,38,],
        	backup_methods:[],
			children: [{
				name: 'Fluo-WF',
				id: '17',
				parent_id: '15',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'culture_fluo.png'
                },
        		mini_hrefs: [imDir+'culture_fluo.png',imDir+'culture_fluo_ex1.png',imDir+'culture_fluo_ex2.png',imDir+'culture_fluo_ex3.png'],
        		mini_info: [{m_dataset:'BBBC038', m_source:'https://bbbc.broadinstitute.org/BBBC038'},{m_dataset:'BBBC038', m_source:'https://bbbc.broadinstitute.org/BBBC038'},{m_dataset:'BBBC039', m_source:'https://bbbc.broadinstitute.org/BBBC039'},{m_dataset:'BBBC021', m_source:'https://bbbc.broadinstitute.org/BBBC021'}],
        		parent_tag: 'Culture',
        		methods:[0,1,2,3,4,9,31,23,24,25,28,27,38,39,40,41,],
        		backup_methods:[],
				children: []
			}, {
				name: 'Fluo-confocal',
				id: '18',
				parent_id: '15',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'culture_conf.png'
                },
        		mini_hrefs: [imDir+'culture_conf.png',imDir+'culture_conf_ex1.png'],
        		mini_info: [{m_dataset:'(Univ. Freiburg)', m_source:'http://portal.uni-freiburg.de/core-facility/microscopy/confocal'},{m_dataset:'(Univ. Queensland)', m_source:'https://imb.uq.edu.au/facilities/microscopy/hardware-software/confocal-microscopes'}],
        		parent_tag: 'Culture',
        		methods:[0,1,2,3,4,38,],
        		backup_methods:[],
				children: []
			}, {
				name: 'BF',
				id: '26',
				parent_id: '15',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'culture_labelledbf.png'
                },
        		mini_hrefs: [imDir+'culture_labelledbf.png'],
        		mini_info: [{m_dataset:'(Researchgate)', m_source:'https://www.researchgate.net/post/H_E_staining_of_cultured_cells'}],
        		parent_tag: 'Culture',
        		methods:[0,1,2,3,4,38,41,42,],
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
			        href: imDir+'culture_dic_ex1.png'
                },
    		mini_hrefs: [imDir+'culture_dic_ex1.png'],
    		mini_info: [{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'}],
    		parent_tag: 'Culture',
    		methods:[],
    		backup_methods:[0,1,2,3,4,38,41,],
			children: [{
				name: 'BF',
				id: '19',
				parent_id: '16',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'culture_bf.png'
                },
        		mini_hrefs: [imDir+'culture_bf.png',imDir+'culture_bf_ex1.png'],
        		mini_info: [{m_dataset:'(Medium)', m_source:'https://medium.com/@kerimov.nurlan/anomaly-detection-in-brightfield-microscopy-images-c92cdddafcc3'},{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'}],
        		parent_tag: 'Culture',
        		methods:[0,1,2,3,4,38,41,42,],
        		backup_methods:[],
				children: []
			}, {
				name: 'DIC',
				id: '20',
				parent_id: '16',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'culture_dic.png'
                },
        		mini_hrefs: [imDir+'culture_dic.png',imDir+'culture_dic_ex1.png'],
        		mini_info: [{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'},{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'}],
        		parent_tag: 'Culture',
        		methods:[0,38,41,],
        		backup_methods:[],
				children: []
			},	{
				name: 'PC',
				id: '21',
				parent_id: '16',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'culture_pc.png'
                },
        		mini_hrefs: [imDir+'culture_pc.png',imDir+'culture_pc_ex1.png',imDir+'culture_pc_ex2.png'],
        		mini_info: [{m_dataset:'(internet)', m_source:'https://microscope-microscope.org/microscope-info/phase-contrast-microscope/'},{m_dataset:'(HexaBiogen)', m_source:'https://www.hexabiogen.com/astrocytes-de-souris-436/mouse-astrocytes-from-cd1-ma-put-2000619.html'},{m_dataset:'Galen et al.', m_source:'https://www.jci.org/articles/view/111300'}],
        		parent_tag: 'Culture',
        		methods:[0,4,38,],
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
	        href: imDir+'tissue_bf_ex5.png'
        },
        mini_hrefs: [imDir+'tissue_bf_ex5.png'],
        mini_info: [{m_dataset:'BBBC038', m_source:'https://bbbc.broadinstitute.org/BBBC038'}],
        parent_tag: null,
        methods:[],
        backup_methods:[0,9,31,23,38,],
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
		        href: imDir+'tissue_bf_ex4.png'
	        },
        	mini_hrefs: [imDir+'tissue_bf_ex4.png'],
        	mini_info: [{m_dataset:'TCGA', m_source:'https://osf.io/rs67v/?pid=nqtys'}],
        	parent_tag: 'Tissue',
        	methods:[],
        	backup_methods:[0,1,2,3,4,28,27,38,41,],
			children: [{
				name: 'Fluo-WF',
				id: '7',
				parent_id: '5',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'tissue_fluo.png'
                },
       			mini_hrefs: [imDir+'tissue_fluo.png'],
       			mini_info: [{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'}],
       			parent_tag: 'Tissue',
       			methods:[9,31,23,38,],
       			backup_methods:[],
				children: []
			}, {
				name: 'Fluo-confocal',
				id: '8',
				parent_id: '5',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'tissue_conf.png'
                },
        		mini_hrefs: [imDir+'tissue_conf.png',imDir+'tissue_conf_ex1.png'],
        		mini_info: [{m_dataset:'(Univ. Bergen)', m_source:'https://www.uib.no/rg/mic/86218/11th-mic-confocal-microscopy-course'},{m_dataset:'(Queen Mary Univ. London)', m_source:'https://www.qmul.ac.uk/ow3-research/facilities-and-resources/amis/items/leica-sp8-confocal.html'}],
        		parent_tag: 'Tissue',
        		methods:[],
        		backup_methods:[0,1,2,3,4,38,],
				children: []
			}, {
				name: 'Light-sheet',
				id: '27',
				parent_id: '5',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'tissue_ls_ex1.png'
                },
        		mini_hrefs: [imDir+'tissue_ls_ex1.png',imDir+'tissue_ls.png',imDir+'tissue_ls_ex2.png'],
        		mini_info: [{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'},{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'},{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'}],
        		parent_tag: 'Tissue',
        		methods:[0,3,38,39,40,41,],
        		backup_methods:[],
				children: []
			}, {
				name: 'BF',
				id: '28',
				parent_id: '5',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'tissue_bf.png'
                },
        		mini_hrefs: [imDir+'tissue_bf.png',imDir+'tissue_bf_ex4.png',imDir+'tissue_bf_ex3.png',imDir+'tissue_bf_ex2.png'],
        		mini_info: [{m_dataset:'TCGA', m_source:'https://osf.io/rs67v/?pid=nqtys'},{m_dataset:'TCGA', m_source:'https://osf.io/rs67v/?pid=nqtys'},{m_dataset:'BBBC038', m_source:'https://bbbc.broadinstitute.org/BBBC038'},{m_dataset:'TCGA', m_source:'https://zenodo.org/record/1174353#.YPsGEOhLiUk'}],
        		parent_tag: 'Tissue',
        		methods:[0,1,2,3,4,28,27,33,34,35,36,37,38,41,],
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
			        href: imDir+'tissue_dic_ex1.png'
                },
    		mini_hrefs: [imDir+'tissue_dic_ex1.png'],
    		mini_info: [{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'}],
    		parent_tag: 'Tissue',
    		methods:[],
    		backup_methods:[0,],
			children: [{
				name: 'DIC',
				id: '10',
				parent_id: '6',
				nodeProps: {
                    height: 50,
					width: 50,
			        href: imDir+'tissue_dic.png'
                },
        		mini_hrefs: [imDir+'tissue_dic.png',imDir+'tissue_dic_ex1.png'],
        		mini_info: [{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'},{m_dataset:'BIOMAG', m_source:'http://group.szbk.u-szeged.hu/sysbiol/horvath-peter-lab-index.html'}],
        		parent_tag: 'Tissue',
        		methods:[0,38,41,],
        		backup_methods:[],
				children: []
			}]
		}]


	}]
};