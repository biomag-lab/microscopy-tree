export default {
	"seg_methods":[
		{
			m_id: 0,
			m_name: 'U-Net',
			m_author: 'Ronneberger et al.',
			m_year: '2015',
			m_journal: 'arXiv',
			m_link: 'https://github.com/zhixuhao/unet',
			m_paper: 'https://arxiv.org/abs/1505.04597',
			m_2d: true,
			m_3d: true,
			m_challenges:{
				m_elongated:true,
				m_concave:true,
				m_deviating:false,
				m_wobbling:false,
				m_multinuc:true,
				m_heterogen:true,
				m_fragmented:true
			}
		}, {
			m_id: 1,
			m_name: 'Mask R-CNN',
			m_author: 'He et al.',
			m_year: '2017',
			m_journal: 'arXiv',
			m_link: 'https://github.com/matterport/Mask_RCNN',
			m_paper: 'https://arxiv.org/abs/1703.06870',
			m_2d: true,
			m_3d: false,
			m_challenges:{
				m_elongated:true,
				m_concave:true,
				m_deviating:false,
				m_wobbling:false,
				m_multinuc:false,
				m_heterogen:true,
				m_fragmented:false
			}
		}, {
			m_id: 2,
			m_name: 'StarDist',
			m_author: 'Schmidt et al.',
			m_year: '2018',
			m_journal: 'aRxiv',
			m_link: 'https://github.com/stardist/stardist',
			m_paper: 'https://arxiv.org/abs/1806.03535',
			m_2d: true,
			m_3d: true,
			m_challenges:{
				m_elongated:true,
				m_concave:true,
				m_deviating:false,
				m_wobbling:false,
				m_multinuc:false,
				m_heterogen:true,
				m_fragmented:false
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
			m_challenges:{
				m_elongated:true,
				m_concave:true,
				m_deviating:true,
				m_wobbling:false,
				m_multinuc:true,
				m_heterogen:true,
				m_fragmented:false
			}
		}, {
			m_id: 4,
			m_name: 'Cellpose',
			m_author: 'Stringer et al.',
			m_year: '2021',
			m_journal: 'Nature Methods',
			m_link: 'https://github.com/MouseLand/cellpose',
			m_paper: 'https://doi.org/10.1038/s41592-020-01018-x',
			m_2d: false,
			m_3d: false,
			m_challenges:{
				m_elongated:false,
				m_concave:false,
				m_deviating:false,
				m_wobbling:false,
				m_multinuc:false,
				m_heterogen:false,
				m_fragmented:false
			}
		}, {
			m_id: 5,
			m_name: 'UNet++',
			m_author: 'Zhou et al.',
			m_year: '2018',
			m_journal: 'arXiv',
			m_link: 'https://github.com/MrGiovanni/UNetPlusPlus',
			m_paper: 'https://arxiv.org/abs/1807.10165',
			m_2d: false,
			m_3d: false,
			m_challenges:{
				m_elongated:false,
				m_concave:false,
				m_deviating:false,
				m_wobbling:false,
				m_multinuc:false,
				m_heterogen:false,
				m_fragmented:false
			}
		}, {
			m_id: 6,
			m_name: 'MultiStar',
			m_author: 'Walter et al.',
			m_year: '2021',
			m_journal: 'arXiv',
			m_link: 'https://github.com/overlapping-instances/MultiStar',
			m_paper: 'https://arxiv.org/abs/2011.13228',
			m_2d: false,
			m_3d: false,
			m_challenges:{
				m_elongated:false,
				m_concave:false,
				m_deviating:false,
				m_wobbling:false,
				m_multinuc:false,
				m_heterogen:false,
				m_fragmented:false
			}
		}
		]
};
