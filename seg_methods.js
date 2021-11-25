export default {
	'seg_methods': [
		{
			m_id: 0,
			m_name: 'U-Net',
			m_author: 'Ronneberger et al.',
			m_year: '2015',
			m_journal: 'MICCAI 2015',
			m_links:{
				m_code: 'https://github.com/zhixuhao/unet',
				m_paper: 'http://dx.doi.org/10.1007/978-3-319-24574-4_28',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=10845403114495995712&scipsc=1&q=&btnG=',

				m_pretrained:[
					{
						m_pr_id: '21',
						m_pr_name: 'Pretrained phase-contrast model',
						m_link: 'https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/'
					},
					{
						m_pr_id: '20',
						m_pr_name: 'Pretrained model for DIC',
						m_link: 'https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/'
					},
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: 'https://github.com/carpenterlab/2019_caicedo_cytometryA.git'
					},
					{
						m_pr_id: null,
						m_pr_name: 'AnnotatorJ model (general)',
						m_link: 'https://github.com/spreka/annotatorj/releases/tag/v0.0.2-model'
					},
					{
						m_pr_id: null,
						m_pr_name: 'Pretrained U-Net by BIOMAG (general)',
						m_link: 'https://drive.google.com/open?id=1lVJtS41vzMkIsCa3-i14mSmLBbaKazsq'
					}
				]
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 1,
			m_name: 'Mask R-CNN',
			m_author: 'He et al.',
			m_year: '2017',
			m_journal: 'ICCV 2017',
			m_links:{
				m_code: 'https://github.com/matterport/Mask_RCNN',
				m_paper: 'https://doi.org/10.1109/ICCV.2017.322',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=11459229647356475672&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: null,
						m_pr_name: 'DSB 2018 model (general)',
						m_link: 'https://github.com/mirzaevinom/data_science_bowl_2018'
					},
					{
						m_pr_id: null,
						m_pr_name: 'Mask R-CNN pretrained by BIOMAG (general)',
						m_link: 'https://drive.google.com/open?id=1lVJtS41vzMkIsCa3-i14mSmLBbaKazsq'
					}
				]
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 2,
			m_name: 'StarDist',
			m_author: 'Schmidt et al.',
			m_year: '2018',
			m_journal: 'MICCAI 2018 & WACV 2020)',
			m_links:{
				m_code: 'https://github.com/stardist/stardist',
				m_paper: 'https://doi.org/10.1007/978-3-030-00934-2_30',
				m_3D_paper: 'https://dx.doi.org/10.1109/WACV45572.2020.9093435',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=6261085790694927391&scipsc=1&q=&btnG=',
				m_3D_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=2139260067181824373&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: 'https://github.com/stardist/stardist/tree/master/models/paper/2D_dsb2018'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained H&E model',
						m_link: 'https://github.com/stardist/stardist/tree/master/models/paper/2D_dsb2018'
					},
					{
						m_pr_id: '3d',
						m_pr_name: 'Pretrained 3d model',
						m_link: 'https://github.com/stardist/stardist/tree/master/models/examples/3D_demo'
					}
				]
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 3,
			m_name: 'nucleAIzer',
			m_author: 'Hollandi et al.',
			m_year: '2020',
			m_journal: 'CellSyst',
			m_links:{
				m_code: 'https://github.com/spreka/biomagdsb',
				m_paper: 'https://doi.org/10.1016/j.cels.2020.04.003',
				m_site: 'http://nucleaizer.org/',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=4183125655597734419&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: null,
						m_pr_name: 'Pretrained model (general)',
						m_link: 'https://drive.google.com/open?id=1lVJtS41vzMkIsCa3-i14mSmLBbaKazsq'
					}
				]
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 4,
			m_name: 'Cellpose',
			m_author: 'Stringer et al.',
			m_year: '2021',
			m_journal: 'Nature Methods',
			m_links:{
				m_code: 'https://github.com/MouseLand/cellpose',
				m_paper: 'https://doi.org/10.1038/s41592-020-01018-x',
				m_site: 'https://www.cellpose.org',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=2743286584966802094&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: null,
						m_pr_name: 'Nucleus model (general)',
						m_link: ['https://www.cellpose.org/models/nuclei_0',
						        'https://www.cellpose.org/models/nuclei_1',
						        'https://www.cellpose.org/models/nuclei_2',
						        'https://www.cellpose.org/models/nuclei_3',
						        'https://www.cellpose.org/models/nucleitorch_0',
						        'https://www.cellpose.org/models/nucleitorch_1',
						        'https://www.cellpose.org/models/nucleitorch_2',
						        'https://www.cellpose.org/models/nucleitorch_3']
					}
				]
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 5,
			m_name: 'UNet++',
			m_author: 'Zhou et al.',
			m_year: '2018',
			m_journal: 'DLMIA 2018, ML-CDS 2018',
			m_links:{
				m_code: 'https://github.com/MrGiovanni/UNetPlusPlus',
				m_paper: 'https://doi.org/10.1007/978-3-030-00889-5_1',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=3438577305591755991&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 6,
			m_name: 'MultiStar',
			m_author: 'Walter et al.',
			m_year: '2021',
			m_journal: 'ISBI 2021',
			m_links:{
				m_code: 'https://github.com/overlapping-instances/MultiStar',
				m_paper: 'https://doi.org/10.1109/ISBI48211.2021.9433769',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=7345388908580636549&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 7,
			m_name: 'CPN',
			m_author: 'Upschulte et al.',
			m_year: '2021',
			m_journal: 'arXiv',
			m_links:{
				m_code: 'https://github.com/FZJ-INM1-BDA/celldetection',
				m_paper: 'https://arxiv.org/abs/2104.03393',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=11779593445859050188&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_wobbling: true,
				m_overlapping: true

			}
		}, {
			m_id: 8,
			m_name: 'HistomicsML2',
			m_author: 'Lee et al.',
			m_year: '2021',
			m_journal: 'Cancer Research',
			m_links:{
				m_code: 'https://github.com/PathologyDataScience/HistomicsML2',
				m_paper: 'https://doi.org/10.1158/0008-5472.CAN-20-0668',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=98287935443345053&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true
			}
		}, {
			m_id: 9,
			m_name: 'STORM',
			m_author: 'Mela et al.',
			m_year: '2021',
			m_journal: 'BMC Bioinformatics',
			m_links:{
				m_code: 'https://github.com/YangLiuLab/Super-Resolution-Nuclei-Segmentation',
				m_paper: 'https://doi.org/10.1186/s12859-021-04245-x',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=595912511406673690&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: 'https://drive.google.com/drive/folders/1yKxyXkk4ceXoDpd647i1_-JWLjzKOY7t?usp=sharing'
					},
					{
						m_pr_id: '7',
						m_pr_name: 'Pretrained fluorescent tissue model',
						m_link: 'https://drive.google.com/drive/folders/1yKxyXkk4ceXoDpd647i1_-JWLjzKOY7t?usp=sharing'
					}
				]
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 10,
			m_name: 'Vaa3D',
			m_author: 'Peng et al.',
			m_year: '2010',
			m_journal: 'Nature Biotechnology',
			m_links: {
				m_code: 'https://github.com/Vaa3D/vaa3d_tools',
				m_paper: 'https://doi.org/10.1038/nbt.1612',
				m_site: 'http://vaa3d.org',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=3380503499651306453&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
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
				m_paper: 'https://doi.org/10.1093/bioinformatics/btt276',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=15174242674682245726&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: false,
				m_heterogen: false,
				m_fragmented: false,
				m_overlapping: false
			}
		}, {
			m_id: 12,
			m_name: 'LoS',
			m_author: 'Asafi et al.',
			m_year: '2013',
			m_journal: 'Computer Graphics Forum',
			m_links: {
				m_code: 'https://www.physikalischebiologie.de/downloads',
				m_paper: 'https://doi.org/10.1111/cgf.12169',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=14687221567883628747&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: false,
				m_deviating: false,
				m_wobbling: false,
				m_heterogen: true,
				m_fragmented: false,
				m_overlapping: true
			}
		}, {
			m_id: 13,
			m_name: 'OpenSegSPIM',
			m_author: 'Gole et al.',
			m_year: '2016',
			m_journal: 'BioInformatics',
			m_links: {
				m_code: 'http://opensegspim.weebly.com/',
				m_paper: 'https://doi.org/10.1093/bioinformatics/btw093',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=8492492200472410638&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
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
				m_paper: 'https://doi.org/10.1016/j.devcel.2015.12.028',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=5100987867408303662&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				m_heterogen: false,
				m_fragmented: false
			}
		}, {
			m_id: 15,
			m_name: 'U-Net (3D)',
			m_author: 'Cicek et al.',
			m_year: '2016',
			m_journal: 'MICCAI 2016',
			m_links: {
				m_code: 'https://lmb.informatik.uni-freiburg.de/resources/opensource/unet.en.html',
				m_paper: 'https://doi.org/10.1007/978-3-319-46723-8_49',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=9776881218649496640&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '3d',
						m_pr_name: 'Pretrained 3d model',
						m_link: 'https://lmb.informatik.uni-freiburg.de/resources/opensource/k_seg_v4_cv_1_snapshot_iter_70000.caffemodel'
					}
				]
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 16,
			m_name: 'Three-Dimensional Segmentation and Reconstruction of Neuronal Nuclei in Confocal Microscopic Images',
			m_author: 'Ruszczycki et al.',
			m_year: '2019',
			m_journal: 'Frontiers in Neuroanatomy',
			m_links: {
				m_code: 'https://gitlab.com/pnmis/nuclear-segmentation',
				m_paper: 'https://doi.org/10.3389/fnana.2019.00081',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=11591389986563403030&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: false,
				m_heterogen: true,
				m_fragmented: false,
				m_overlapping: true
			}
		}, {
			m_id: 17,
			m_name: 'Semi supervised segmentation and graph-based tracking of 3D nuclei in time-lapse microscopy',
			m_author: 'Shailja et al.',
			m_year: '2020',
			m_journal: 'IEEE ISBI',
			m_links: {
				m_code: 'https://github.com/s-shailja/ucsb_ctc',
				m_paper: 'https://doi.org/10.1109/ISBI48211.2021.9433831',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=191409641997327519&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 18,
			m_name: 'QCANet',
			m_author: 'Tokuoka et al.',
			m_year: '2020',
			m_journal: 'Nature NPJ Systems Biology',
			m_links: {
				m_code: 'https://github.com/funalab/QCANet',
				m_paper: 'https://doi.org/10.1038/s41540-020-00152-8',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=6074850203107615052&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '3d',
						m_pr_name: 'Pretreained 3d model',
						m_link: ['https://fun.bio.keio.ac.jp/software/QCANet/learned_nsn.npz',
								'https://fun.bio.keio.ac.jp/software/QCANet/learned_ndn.npz']
					}
				]
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: false,
				m_deviating: false,
				m_wobbling: true,
				m_heterogen: false,
				m_fragmented: false,
				m_overlapping: true
			}
		}, {
			m_id: 19,
			m_name: '3D-Cell-Annotator',
			m_author: 'Tasnadi et al.',
			m_year: '2020',
			m_journal: 'BioInformatics',
			m_links: {
				m_code: 'https://github.com/etasnadi/3DCellAnnotator',
				m_paper: 'https://doi.org/10.1093/bioinformatics/btaa029',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=4513869250213071894&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: false,
				m_heterogen: true,
				m_fragmented: false,
				m_overlapping: true
			}
		}, {
			m_id: 20,
			m_name: '3DeeCellTracker',
			m_author: 'Wen et al.',
			m_year: '2021',
			m_journal: 'eLife',
			m_links: {
				m_code: 'https://github.com/WenChentao/3DeeCellTracker',
				m_paper: 'https://doi.org/10.7554/eLife.59187',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=10247056894798012587&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '3d',
						m_pr_name: 'Pretrained 3d model',
						m_link: 'https://osf.io/dt76c/'
					}
				]
			},
			m_2d: false,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: false,
				m_deviating: false,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: false,
				m_overlapping: true
			}
		}, {
			m_id: 21,
			m_name: 'MINS',
			m_author: 'Lou et al.',
			m_year: '2014',
			m_journal: 'Stem Cell Reports',
			m_links:{
				m_code: 'http://katlab-tools.org/',
				m_paper: 'https://doi.org/10.1016/j.stemcr.2014.01.010',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=18301631029227809726&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				m_heterogen: true,
				m_fragmented: false
			}
		}, {
			m_id: 22,
			m_name: 'XPIWIT',
			m_author: 'Bartschat et al.',
			m_year: '2016',
			m_journal: 'Bioinformatics',
			m_links:{
				m_code: 'https://bitbucket.org/jstegmaier/xpiwit/downloads/',
				m_paper: 'https://doi.org/10.1093/bioinformatics/btv559',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=3199873719792382478&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				m_heterogen: false,
				m_fragmented: false
			}
		}, {
			m_id: 23,
			m_name: 'ilastik',
			m_author: 'Berg et al.',
			m_year: '2018',
			m_journal: 'Nature Methods',
			m_links:{
				m_code: 'https://github.com/ilastik/ilastik',
				m_paper: 'https://doi.org/10.1038/s41592-019-0582-9',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=16212079596936357318&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: 'https://bioimage.io/#/?partner=ilastik'
					},
					{
						m_pr_id: '7',
						m_pr_name: 'Pretrained fluorescent tissue model',
						m_link: 'https://bioimage.io/#/?partner=ilastik'
					}
				]
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 24,
			m_name: 'NuSeT',
			m_author: 'Yang et al.',
			m_year: '2020',
			m_journal: 'PLoS Computational Biology',
			m_links:{
				m_code: 'https://github.com/yanglf1121/NuSeT',
				m_paper: 'https://doi.org/10.1371/journal.pcbi.1008193',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=5605215401951628263&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: ['https://drive.google.com/file/d/1fcs1F2lGPX0ejzEGPZ63YNF3AmUbdBcM/view?usp=sharing',
								'https://drive.google.com/file/d/1hythQfvD6kbaUClAPY96nHcXB7RXVmBx/view?usp=sharing']
					}
				]
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: false,
				m_overlapping: true
			}
		}, {
			m_id: 25,
			m_name: 'nnU-Net',
			m_author: 'Isensee et al.',
			m_year: '2021',
			m_journal: 'Nature Methods',
			m_links:{
				m_code: 'https://github.com/mic-dkfz/nnunet',
				m_paper: 'https://doi.org/10.1038/s41592-020-01008-z',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=9470755338057003085&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: 'https://zenodo.org/record/4003545/files/Task089_Fluo-N2DH-SIM_thickborder_time.zip?download=1'
					}
				]
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 26,
			m_name: 'DeepMIB',
			m_author: 'Belevich et al.',
			m_year: '2021',
			m_journal: 'PLoS Computational Biology',
			m_links:{
				m_code: 'https://github.com/Ajaxels/MIB2',
				m_paper: 'https://doi.org/10.1371/journal.pcbi.1008374',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=9172078048369452463&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 27,
			m_name: 'InstantDL',
			m_author: 'Waibel et al.',
			m_year: '2021',
			m_journal: 'BMC Bioinformatics',
			m_links:{
				m_code: 'https://github.com/marrlab/InstantDL',
				m_paper: 'https://doi.org/10.1186/s12859-021-04037-3',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=10908939586118130609&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: 'https://hmgubox2.helmholtz-muenchen.de/index.php/s/YXRD4a7qHnCa9x5'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained H&E model',
						m_link: 'https://hmgubox2.helmholtz-muenchen.de/index.php/s/YXRD4a7qHnCa9x5'
					}
				]
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: false,
				m_wobbling: false,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 28,
			m_name: 'DeepImageJ',
			m_author: 'Gómez-de-Mariscal et al.',
			m_year: '2019',
			m_journal: 'biorXiv',
			m_links:{
				m_code: 'https://github.com/bioimage-io/bioimage.io',
				m_paper: 'https://doi.org/10.1101/799270',
				m_site: 'https://bioimage.io/',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=1635645835919023708&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: 'https://bioimage.io/#/?tags=deepimagej&id=10.5072%2Fzenodo.881940&type=model'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained H&E model',
						m_link: 'https://bioimage.io/#/?tags=deepimagej&id=10.5072%2Fzenodo.880528&type=model'
					}
				]
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 29,
			m_name: 'ImJoy',
			m_author: 'Ouyang et al.',
			m_year: '2019',
			m_journal: 'Nature Methods',
			m_links:{
				m_code: 'https://github.com/imjoy-team/ImJoy',
				m_paper: 'https://doi.org/10.1038/s41592-019-0627-0',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=8018716968403025087&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 30,
			m_name: 'ZeroCostDL4Mic',
			m_author: 'von Chamier et al.',
			m_year: '2021',
			m_journal: 'Nature Communications',
			m_links:{
				m_code: 'https://github.com/HenriquesLab/ZeroCostDL4Mic',
				m_paper: 'https://doi.org/10.1038/s41467-021-22518-0',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=3746013141384274700&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		}, {
			m_id: 31,
			m_name: 'DeepCell Kiosk',
			m_author: 'Bannon et al.',
			m_year: '2021',
			m_journal: 'Nature Methods',
			m_links:{
				m_code: 'https://github.com/vanvalenlab/kiosk-console',
				m_paper: 'https://doi.org/10.1038/s41592-020-01023-0',
				m_cites: 'https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=16399001016922599704&scipsc=1&q=&btnG=',
				m_pretrained:[
					{
						m_pr_id: '17',
						m_pr_name: 'Pretrained fluorescent model',
						m_link: 'https://deepcell-data.s3-us-west-1.amazonaws.com/saved-models/NuclearSegmentation-4.tar.gz'
					},
					{
						m_pr_id: '7',
						m_pr_name: 'Pretrained fluorescent tissue model',
						m_link: 'https://deepcell-data.s3-us-west-1.amazonaws.com/saved-models/NuclearSegmentation-4.tar.gz'
					}
				]
			},
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
		},
		{
			m_id: 32,
			m_name: 'SplineDist',
			m_author: 'Mandal et al.',
			m_year: '2021',
			m_journal: 'ISBI 2021',
			m_links:{
				m_code: 'https://github.com/uhlmanngroup/splinedist',
				m_paper: 'https://doi.org/10.1109/ISBI48211.2021.9433928',
				m_cites: 'https://scholar.google.com/scholar?hl=en&cites=14789189166887443383&as_sdt=2005&sciodt=0,5&&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: true,
				m_overlapping: true
			}
		},
		{
			m_id: 33,
			m_name: 'HoVer-Net',
			m_author: 'Graham et al.',
			m_year: '2019',
			m_journal: 'Medical Image Analysis',
			m_links:{
				m_code: 'https://github.com/vqdang/hover_net',
				m_paper: 'https://doi.org/10.1016/j.media.2019.101563',
				m_cites: 'https://scholar.google.com/scholar?hl=en&cites=4408035528910723811&as_sdt=2005&sciodt=0,5&&scipsc=1&q=&btnG=',
				m_pretrained: [
					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained on CoNSeP dataset',
						m_link: 'https://drive.google.com/file/d/1BF0GIgNGYpfyqEyU0jMsA6MqcUpVQx0b/view?usp=sharing'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Model checkpoint from Kumar et al. paper',
						m_link: 'https://drive.google.com/file/d/1NUnO4oQRGL-b0fyzlT8LKZzo6KJD0_6X/view?usp=sharing'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained on CPM17 dataset',
						m_link: 'https://drive.google.com/file/d/1lR7yJbEwnF6qP8zu4lrmRPukylw9g-Ms/view?usp=sharing'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Preatrained on MoNuSAC dataset',
						m_link: 'https://drive.google.com/file/d/13qkxDqv7CUqxN-l5CpeFVmc24mDw6CeV/view?usp=sharing'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained on PanNuke dataset (with_classification)',
						m_link: 'https://drive.google.com/file/d/1SbSArI3KOOWHxRlxnjchO7_MbWzB4lNR/view?usp=sharing'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained on CoNSeP dataset (with_classification)',
						m_link: 'https://drive.google.com/file/d/1FtoTDDnuZShZmQujjaFSLVJLD5sAh2_P/view?usp=sharing'
					}
				]
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: false,
				m_fragmented: false,
				m_overlapping: true
			}
		},
		{
			m_id: 34,
			m_name: 'Segmentation of Nuclei in Histopathology Images by Deep Regression of the Distance Map',
			m_author: 'Naylor et al.',
			m_year: '2018',
			m_journal: 'IEEE Transactions on Medical Imaging',
			m_links:{
				m_code: 'https://github.com/PeterJackNaylor/DRFNS',
				m_paper: 'https://doi.org/10.1109/TMI.2018.2865709',
				m_cites: 'https://scholar.google.com/scholar?hl=en&cites=4026960218685687243&as_sdt=2005&sciodt=0,5&&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: false,
				m_fragmented: false,
				m_overlapping: true
			}
		},
		{
			m_id: 35,
			m_name: 'Triple U-net: Hematoxylin-aware nuclei segmentation with progressive dense feature aggregation',
			m_author: 'Zhao et al.',
			m_year: '2020',
			m_journal: 'Medical Image Analysis',
			m_links:{
				m_code: 'https://github.com/Bingchao-Zhao/Triple_U-net',
				m_paper: 'https://doi.org/10.1016/j.media.2020.101786',
				m_cites: 'https://scholar.google.com/scholar?hl=en&cites=3952565871787557801&as_sdt=2005&sciodt=0,5&&scipsc=1&q=&btnG=',
				m_pretrained: [					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained Triple U-Net',
						m_link: 'https://drive.google.com/file/d/1C2Zff0Y3xQ4nVJ3AVhv5neCYKx2qeE15/view?usp=sharing'
					}
				]
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: false,
				m_fragmented: false,
				m_overlapping: true
			}
		},
		{
			m_id: 36,
			m_name: 'NucleiSegNet: Robust deep learning architecture for the nuclei segmentation of liver cancer histopathology images',
			m_author: 'Lal et al.',
			m_year: '2021',
			m_journal: 'Computers in Biology and Medicine',
			m_links:{
				m_code: 'https://github.com/shyamfec/NucleiSegNet',
				m_paper: 'https://doi.org/10.1016/j.compbiomed.2020.104075',
				m_cites: 'https://scholar.google.com/scholar?hl=en&cites=4244248300674709504&as_sdt=2005&sciodt=0,5&&scipsc=1&q=&btnG=',
				m_pretrained: [
					{
						m_pr_id: '28',
						m_pr_name: 'Pretrained NucleiSegNet',
						m_link: 'https://drive.google.com/file/d/1-6Y_cnkerKEtaLHb8L1VnPQkM8GarTiV/view?usp=sharing'
					}
				]
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: false,
				m_fragmented: false,
				m_overlapping: true
			}
		},
		{
			m_id: 37,
			m_name: 'QuPath',
			m_author: 'Bankhead et al.',
			m_year: '2017',
			m_journal: 'Scientific Reports',
			m_links:{
				m_code: 'https://github.com/qupath/qupath',
				m_paper: 'https://doi.org/10.1038/s41598-017-17204-5',
				m_cites: 'https://scholar.google.com/scholar?hl=hu&as_sdt=2005&sciodt=0%2C5&cites=3142627468332962193&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {

			}
		},
		{
			m_id: 38,
			m_name: 'SegNet',
			m_author: 'Badrinarayanan et al.',
			m_year: '2015',
			m_journal: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
			m_links:{
				m_code: 'https://github.com/alexgkendall/caffe-segnet',
				m_paper: 'https://doi.org/10.1109/TPAMI.2016.2644615',
				m_cites: 'https://scholar.google.com/scholar?hl=hu&as_sdt=2005&sciodt=0%2C5&cites=8599254436676320906&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true
			}
		},
		{
			m_id: 39,
			m_name: 'EmbedSeg',
			m_author: 'Lalit et al.',
			m_year: '2021',
			m_journal: 'arXiv preprint',
			m_links:{
				m_code: 'https://github.com/juglab/EmbedSeg',
				m_paper: 'https://arxiv.org/abs/2101.10033',
				m_cites: 'https://scholar.google.com/scholar?hl=hu&as_sdt=2005&sciodt=0%2C5&cites=17088491824780614104&scipsc=1&q=&btnG=',
				m_pretrained: [
					{
						m_pr_id: '28',
						m_pr_name: 'DSB fluo',
						m_link: 'https://github.com/juglab/EmbedSeg/tree/main/pretrained_models/dsb-2018'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Mouse-Organoid-Cells-CBG',
						m_link: 'https://github.com/juglab/EmbedSeg/tree/main/pretrained_models/Mouse-Organoid-Cells-CBG'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Mouse-Skull-Nuclei-CBG',
						m_link: 'https://github.com/juglab/EmbedSeg/tree/main/pretrained_models/Mouse-Skull-Nuclei-CBG'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Platynereis-ISH-Nuclei-CBG',
						m_link: 'https://github.com/juglab/EmbedSeg/tree/main/pretrained_models/Platynereis-ISH-Nuclei-CBG'
					},
					{
						m_pr_id: '28',
						m_pr_name: 'Platynereis-Nuclei-CBG',
						m_link: 'https://github.com/juglab/EmbedSeg/tree/main/pretrained_models/Platynereis-Nuclei-CBG'
					},
				]
			},
			m_2d: true,
			m_3d: true,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true,
				m_wobbling: true,
				m_heterogen: true,
				m_fragmented: false,
				m_overlapping: true
			}
		},
		{
			m_id: 40,
			m_name: 'MSRF-Net',
			m_author: 'Srivastava et al.',
			m_year: '2021',
			m_journal: 'arXiv preprint',
			m_links:{
				m_code: 'https://github.com/NoviceMAn-prog/MSRF-Net',
				m_paper: 'https://arxiv.org/abs/2105.07451',
				m_cites: 'https://scholar.google.com/scholar?hl=hu&as_sdt=2005&sciodt=0%2C5&cites=16866504810084656657&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true
			}
		},
		{
			m_id: 41,
			m_name: 'Multi-scale Cell Instance Segmentation with Keypoint Graph Based Bounding Boxes',
			m_author: 'Yi et al.',
			m_year: '2019',
			m_journal: 'MICCAI 2019',
			m_links:{
				m_code: 'https://github.com/yijingru/KG_Instance_Segmentation',
				m_paper: 'https://doi.org/10.1007/978-3-030-32239-7_41',
				m_cites: 'https://scholar.google.com/scholar?hl=hu&as_sdt=2005&sciodt=0%2C5&cites=5861304576848718814&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true
			}
		},
		{
			m_id: 42,
			m_name: 'Self-supervised Nuclei Segmentation in Histopathological Images Using Attention',
			m_author: 'Yi et al.',
			m_year: '2019',
			m_journal: 'MICCAI 2020',
			m_links:{
				m_code: 'https://github.com/msahasrabudhe/miccai2020_self_sup_nuclei_seg',
				m_paper: 'https://doi.org/10.1007/978-3-030-59722-1_38',
				m_cites: 'https://scholar.google.com/scholar?hl=hu&as_sdt=2005&sciodt=0%2C5&cites=5861304576848718814&scipsc=1&q=&btnG=',
				m_pretrained: []
			},
			m_2d: true,
			m_3d: false,
			m_challenges: {
				m_elongated: true,
				m_concave: true,
				m_deviating: true
			}
		},
	]
};