export default {
	'seg_methods': [
		{
			m_id: 0,
			m_name: 'U-Net',
			m_author: 'Ronneberger et al.',
			m_year: '2015',
			m_journal: 'MICCAI 2015',
			m_link: 'https://github.com/zhixuhao/unet',
			m_paper: 'http://dx.doi.org/10.1007/978-3-319-24574-4_28',
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 1,
			m_name: 'Mask R-CNN',
			m_author: 'He et al.',
			m_year: '2017',
			m_journal: 'ICCV 2017',
			m_link: 'https://github.com/matterport/Mask_RCNN',
			m_paper: 'https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html',
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 2,
			m_name: 'StarDist',
			m_author: 'Schmidt et al.',
			m_year: '2018',
			m_journal: 'arXiv (WACV 2020)',
			m_link: 'https://github.com/stardist/stardist',
			m_paper: 'https://arxiv.org/abs/1806.03535',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 3,
			m_name: 'nucleAIzer',
			m_author: 'Hollandi et al.',
			m_year: '2020',
			m_journal: 'CellSyst',
			m_link: 'https://github.com/spreka/biomagdsb',
			m_paper: 'https://doi.org/10.1016/j.cels.2020.04.003',
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 4,
			m_name: 'Cellpose',
			m_author: 'Stringer et al.',
			m_year: '2021',
			m_journal: 'Nature Methods',
			m_link: 'https://github.com/MouseLand/cellpose',
			m_paper: 'https://doi.org/10.1038/s41592-020-01018-x',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 5,
			m_name: 'UNet++',
			m_author: 'Zhou et al.',
			m_year: '2018',
			m_journal: 'DLMIA 2018, ML-CDS 2018',
			m_link: 'https://github.com/MrGiovanni/UNetPlusPlus',
			m_paper: 'https://doi.org/10.1007/978-3-030-00889-5_1',
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 6,
			m_name: 'MultiStar',
			m_author: 'Walter et al.',
			m_year: '2021',
			m_journal: 'arXiv (ISBI 2021)',
			m_link: 'https://github.com/overlapping-instances/MultiStar',
			m_paper: 'https://arxiv.org/abs/2011.13228',
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 7,
			m_name: 'CPN',
			m_author: 'Upschulte et al.',
			m_year: '2021',
			m_journal: 'arXiv',
			m_link: 'https://github.com/FZJ-INM1-BDA/celldetection',
			m_paper: 'https://arxiv.org/abs/2104.03393',
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_wobbling: true
			}
		}, {
			m_id: 8,
			m_name: 'HistomicsML2',
			m_author: 'Lee et al.',
			m_year: '2021',
			m_journal: 'Cancer Research',
			m_link: 'https://github.com/PathologyDataScience/HistomicsML2',
			m_paper: 'https://doi.org/10.1158/0008-5472.CAN-20-0668',
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true
			//	m_deviating: false,
			//	m_wobbling: false,
			//	m_multinuc: false,
			//	m_heterogen: false,
			//	m_fragmented: false
			}
		}, {
			m_id: 9,
			m_name: 'STORM',
			m_author: 'Mela et al.',
			m_year: '2021',
			m_journal: 'BMC Bioinformatics',
			m_link: 'https://github.com/YangLiuLab/Super-Resolution-Nuclei-Segmentation',
			m_paper: 'https://doi.org/10.1186/s12859-021-04245-x',
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_multinuc: true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 10,
			m_name: 'Vaa3D',
			m_author: 'Peng et al.',
			m_year: '2010',
			m_journal: 'Nature Biotechnology',
			m_links: {
				m_code: 'http://vaa3d.org; https://github.com/Vaa3D',
				m_paper: 'https://www.nature.com/articles/nbt.1612'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				m_multinuc: true,
				m_heterogen: false,
				m_fragmented: false
			}
		}, {
			m_id: 11,
			m_name: 'IT3DImageJSuite',
			m_author: 'Ollion et al.',
			m_year: '2013',
			m_journal: 'Bioinformatics',
			m_links: {
				m_code: 'https://imagejdocu.tudor.lu/plugin/stacks/3d_ij_suite/start',
				m_paper: 'https://academic.oup.com/bioinformatics/article/29/14/1840/231770'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: false,
				m_multinuc: true,
				m_heterogen: false,
				m_fragmented: false
			}
		}, {
			m_id: 12,
			m_name: 'LoS',
			m_author: 'Asafi et al.',
			m_year: '2013',
			m_journal: 'Computer Graphics Forum',
			m_links: {
				m_code: 'https://www.physikalischebiologie.de/downloads',
				m_paper: 'https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.12169'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: false,
				m_deviating: false,
				m_wobbling: false,
				m_multinuc: false,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 13,
			m_name: 'OpenSegSPIM',
			m_author: 'Gole et al.',
			m_year: '2016',
			m_journal: 'BioInformatics',
			m_links: {
				m_code: 'http://opensegspim.weebly.com/',
				m_paper: 'https://academic.oup.com/bioinformatics/article/32/13/2075/1743029'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				m_multinuc: true,
				m_heterogen: false,
				m_fragmented: true
			}
		}, {
			m_id: 14,
			m_name: 'RACE',
			m_author: 'Stegmaier et al.',
			m_year: '2016',
			m_journal: 'Developmental Cell',
			m_links: {
				m_code: 'https://bitbucket.org/jstegmaier/race',
				m_paper: 'https://www.sciencedirect.com/science/article/pii/S1534580715008370'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				m_multinuc: true,
				m_heterogen: false,
				m_fragmented: false
			}
		}, {
			m_id: 16,
			m_name: 'U-Net (3D)',
			m_author: 'Cicek et al.',
			m_year: '2016',
			m_journal: 'MICCAI 2016',
			m_links: {
				m_code: 'https://lmb.informatik.uni-freiburg.de/resources/opensource/unet.en.html',
				m_paper: 'https://link.springer.com/chapter/10.1007/978-3-319-46723-8_49'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_multinuc: true,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 17,
			m_name: 'Three-Dimensional Segmentation and Reconstruction of Neuronal Nuclei in Confocal Microscopic Images',
			m_author: 'Ruszczycki et al.',
			m_year: '2019',
			m_journal: 'Frontiers in Neuroanatomy',
			m_links: {
				m_code: 'https://gitlab.com/pnmis/nuclear-segmentation',
				m_paper: 'https://www.frontiersin.org/articles/10.3389/fnana.2019.00081/full'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: false,
				m_multinuc: true,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 18,
			m_name: 'Semi supervised segmentation and graph-based tracking of 3D nuclei in time-lapse microscopy',
			m_author: 'Shailja et al.',
			m_year: '2020',
			m_journal: 'IEEE ISBI',
			m_links: {
				m_code: 'https://github.com/s-shailja/ucsb_ctc',
				m_paper: 'https://ieeexplore.ieee.org/abstract/document/9433831/'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_multinuc: true,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 19,
			m_name: 'QCANet',
			m_author: 'Tokuoka et al.',
			m_year: '2020',
			m_journal: 'Nature NPJ Systems Biology',
			m_links: {
				m_code: 'https://github.com/funalab/QCANet',
				m_paper: 'https://www.nature.com/articles/s41540-020-00152-8'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: false,
				m_deviating: false,
				m_wobbling: true,
				m_multinuc: true,
				m_heterogen: false,
				m_fragmented: false
			}
		}, {
			m_id: 20,
			m_name: '3D-Cell-Annotator',
			m_author: 'Tasnadi et al.',
			m_year: '2020',
			m_journal: 'BioInformatics',
			m_links: {
				m_code: 'https://github.com/etasnadi/3DCellAnnotator',
				m_paper: 'https://academic.oup.com/bioinformatics/article/36/9/2948/5709038?login=true'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: false,
				m_multinuc: true,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 20,
			m_name: '3DeeCellTracker',
			m_author: 'Wen et al.',
			m_year: '2021',
			m_journal: 'eLife',
			m_links: {
				m_code: 'https://github.com/WenChentao/3DeeCellTracker',
				m_paper: 'https://elifesciences.org/articles/59187'
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: false,
				m_deviating: false,
				m_wobbling: true,
				m_multinuc: true,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 21,
			m_name: 'MINS',
			m_author: 'Lou et al.',
			m_year: '2014',
			m_journal: 'Stem Cell Reports',
			m_link: 'http://katlab-tools.org/',
			m_paper: 'https://doi.org/10.1016/j.stemcr.2014.01.010',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				//	m_multinuc:false,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 22,
			m_name: 'XPIWIT',
			m_author: 'Bartschat et al.',
			m_year: '2016',
			m_journal: 'Bioinformatics',
			m_link: 'https://bitbucket.org/jstegmaier/xpiwit/downloads/',
			m_paper: 'https://doi.org/10.1093/bioinformatics/btv559',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				//	m_multinuc:false,
				m_heterogen: false,
				m_fragmented: false
			}
		}, {
			m_id: 23,
			m_name: 'ilastik',
			m_author: 'Berg et al.',
			m_year: '2018',
			m_journal: 'Nature Methods',
			m_link: 'https://github.com/ilastik/ilastik',
			m_paper: 'https://doi.org/10.1038/s41592-019-0582-9',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				//	m_multinuc:false,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 24,
			m_name: 'NuSeT',
			m_author: 'Yang et al.',
			m_year: '2020',
			m_journal: 'PLoS Computational Biology',
			m_link: 'https://github.com/yanglf1121/NuSeT',
			m_paper: 'https://doi.org/10.1371/journal.pcbi.1008193',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				//	m_multinuc:false,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 25,
			m_name: 'nnU-Net',
			m_author: 'Isensee et al.',
			m_year: '2021',
			m_journal: 'Nature Methods',
			m_link: 'https://github.com/mic-dkfz/nnunet',
			m_paper: 'https://doi.org/10.1038/s41592-020-01008-z',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				//	m_multinuc:true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 26,
			m_name: 'DeepMIB',
			m_author: 'Belevich et al.',
			m_year: '2021',
			m_journal: 'PLoS Computational Biology',
			m_link: 'https://github.com/Ajaxels/MIB2',
			m_paper: 'https://doi.org/10.1371/journal.pcbi.1008374',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				//	m_multinuc:false,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 27,
			m_name: 'InstantDL',
			m_author: 'Waibel et al.',
			m_year: '2021',
			m_journal: 'BMC Bioinformatics',
			m_link: 'https://github.com/marrlab/InstantDL',
			m_paper: 'https://doi.org/10.1186/s12859-021-04037-3',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				//	m_multinuc:true,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 28,
			m_name: 'DeepImageJ',
			m_author: 'Gómez-de-Mariscal et al.',
			m_year: '2019',
			m_journal: 'biorXiv',
			m_link: 'https://bioimage.io/',
			m_paper: 'https://doi.org/10.1101/799270',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				//	m_multinuc:false,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 29,
			m_name: 'ImJoy',
			m_author: 'Ouyang et al.',
			m_year: '2019',
			m_journal: 'Nature Methods',
			m_link: 'https://github.com/imjoy-team/ImJoy',
			m_paper: 'https://doi.org/10.1038/s41592-019-0627-0',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				//	m_multinuc:false,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 30,
			m_name: 'ZeroCostDL4Mic',
			m_author: 'von Chamier et al.',
			m_year: '2021',
			m_journal: 'Nature Communications',
			m_link: 'https://github.com/HenriquesLab/ZeroCostDL4Mic',
			m_paper: 'https://doi.org/10.1038/s41467-021-22518-0',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				//	m_multinuc:false,
				m_heterogen: true,
				m_fragmented: true
			}
		}, {
			m_id: 31,
			m_name: 'DeepCell Kiosk',
			m_author: 'Bannon et al.',
			m_year: '2021',
			m_journal: 'Nature Methods',
			m_link: 'https://github.com/vanvalenlab/kiosk-console',
			m_paper: 'https://doi.org/10.1038/s41592-020-01023-0',
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				//	m_multinuc:false,
				m_heterogen: true,
				m_fragmented: true
			}
		}
	]
};