
const initState = {
	triesCounter: 0
};

export default function(state=initState, action) {
	if (action.type === 'INCREMENT_COUNTER') {
		return {
			...state,
			triesCounter: state.triesCounter + 1
		}
	}
	return state;
}
