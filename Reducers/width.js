import $ from 'jquery';
import { ActionType } from './actions';

export default function(state, action) {
	if (typeof state === 'undefined') {
		return $(window).width() -600; //200;
	} else {
		switch (action.type) {
			case ActionType.RESIZE:
				return $(window).width() - $('#detail-panel').width()-50;
		}
	}

	return state;
}