module.exports = env => {
	const use = env.transpile === 'true'
		? [
			{
				loader: "babel-loader",
				options: {
					"presets": [
						[
							"@babel/preset-env",
							{
								"modules": false
							}
						],
					]
				}
			}
		]
		: [];

	return {
		entry: __dirname + "/src/index.ts",
		output: {
			path: __dirname,
			filename: "./dist/snake.js",
		},
		resolve: {
			extensions: [".ts", ".js"]
		},
		module: {
			rules: [
				{
					exclude: /node_modules/,
					use: [
						...use,
						{
							loader: "ts-loader"
						},
					]
				},
			]
		}
	}
};
