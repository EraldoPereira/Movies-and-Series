Ext.define('MoviesAndSeries.proxies.BaseProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.base-proxy',
    reader: {
        type: 'json'
    }
});