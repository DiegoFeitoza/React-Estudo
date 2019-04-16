const webpack = require('webpack') //Instalando o webpack

module.exports = {
	entry: './app/app.jsx', //Arquivo de entrada para que o webpack prepare
	output: { // Config de saida
		path: __dirname + '/public', // Pasta para onde o arquivo ira ser enviado
		filename: './app.js' // nome do arquivo para ser enviado
	},
	devServer: { // Config do servidor
		port: 3030, // Porta que usaremos para servidor
		contentBase: './public' // pasta onde será feita a leitura dos arquivos
	},
	resolve: {
		extensions: ['','.js','.jsx']
	},
	module:{ // Modulos de exportação
		loaders: [{ // Configuração de carregamento de bibliotecas
			test: /.jsx?$/, // capturar todos os arquivos jsx para serem lidos e tratados
			loader: 'babel-loader', // Arquivo para que façamos o loader
			exclude: 'node_modules', // Pasta para ser ignorada na leitura
			query: { // Query para leituras
				presets: ['es2015','react'], // Presets para serem carregados
				plugins: ['transform-object-rest-spread'] // Adicionando o plugin de rest spread no babel
			}
		}]
	}

}