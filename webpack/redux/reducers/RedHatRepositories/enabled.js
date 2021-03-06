import {
  ENABLED_REPOSITORIES_REQUEST,
  ENABLED_REPOSITORIES_SUCCESS,
  ENABLED_REPOSITORIES_FAILURE,
} from '../../consts';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case ENABLED_REPOSITORIES_REQUEST:
      return Object.assign(state, { isLoading: true });

    case ENABLED_REPOSITORIES_SUCCESS:
      return Object.assign(state, {
        results: action.response.results,
        isLoading: false,
        success: true,
      });

    case ENABLED_REPOSITORIES_FAILURE:
      return Object.assign({ results: action.result, isLoading: false, success: false }, state);

    default:
      return state;
  }
};
