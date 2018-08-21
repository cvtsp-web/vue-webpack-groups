
/**
 * 获取指定的loader
 * @param {Array} rules: 所有规则数据 
 * @param {String} loaderName: 加载器名称
 */
const getBabelLoader = function(rules, loaderName) {
    return rules.find(rule => {
        return rule.loader.indexOf(loaderName) >= 0
    });
}

const injectBabelPlugin = function(pluginName, config) {
    const loader = getBabelLoader(config.module.rules, 'babel-loader');
    if(!loader) {
        console.log('babel-loader not found');
        return config;
    }
    const options = loader.options || loader.query;
    options.plugins =  [pluginName].concat(options.plugins || []);
    return config;
}

module.exports = {
    getBabelLoader,
    injectBabelPlugin
}