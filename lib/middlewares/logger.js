import {createLogger} from 'redux-logger';

const logger = createLogger({
	timestamp: false,
	predicate: (_, {type}) => {
		switch (type) {
			default:
				return true;
		}
	}
});

export default logger;
