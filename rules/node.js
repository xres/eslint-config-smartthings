module.exports = {
	'env': {
		'node': true
	},
	'rules': {
		// enforce return after a callback
		'callback-return': 0,
		// enforce require() on top-level module scope
		'global-require': 2,
		// enforces error handling in callbacks (node environment)
		'handle-callback-err': 0,
		// disallow use of the Buffer() constructor
		'no-buffer-constructor': 2,
		// disallow mixing regular variable and require declarations
		'no-mixed-requires': [0, false],
		// disallow use of new operator with the require function
		'no-new-require': 0,
		// disallow string concatenation with __dirname and __filename
		'no-path-concat': 0,
		// disallow process.exit()
		'no-process-exit': 0,
		// restrict usage of specified node modules
		'no-restricted-modules': 0,
		// disallow certain properties on certain objects
		'no-restricted-properties': 0,
		// disallow use of synchronous methods (off by default)
		'no-sync': 0
	}
};
