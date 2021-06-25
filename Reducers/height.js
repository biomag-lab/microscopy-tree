import $ from 'jquery';
import { ActionType } from './actions';

export default function(state, action) {
	if (typeof state === 'undefined') {
		return $(window).height() - 75//25;//200; //25;
	} else {
		switch (action.type) {
			case ActionType.RESIZE:
				return $(window).height() - $('#header').height() -75; //- $('#detail-panel').height();
		}
	}

	return state;
}