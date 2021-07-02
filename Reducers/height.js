import $ from 'jquery';
import { ActionType } from './actions';

export default function(state, action) {
	if (typeof state === 'undefined') {
		return $(window).height() - 90 //75//25;//200; //25;
	} else {
		switch (action.type) {
			case ActionType.RESIZE:
				return $(window).height() - $('#header').height() -50 - $('#footer').height(); //- $('#detail-panel').height(); // -75
		}
	}

	return state;
}