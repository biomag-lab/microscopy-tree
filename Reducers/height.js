import $ from 'jquery';
import { ActionType } from './actions';

export default function(state, action) {
	if (typeof state === 'undefined') {
		return $(window).height() - 25;//200; //25;
	} else {
		switch (action.type) {
			case ActionType.RESIZE:
				return $(window).height() - $('#header').height(); //- $('#detail-panel').height();
		}
	}

	return state;
}