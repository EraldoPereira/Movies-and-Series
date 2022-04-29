Ext.define('MoviesAndSeries.store.series.Series', {
    extend: 'Ext.data.Store',
    alias: 'store.series-store',
    model: 'MoviesAndSeries.model.series.Series',
    autoLoad: false,
    proxy: {
        type: 'base-proxy',
        url: ''
    }
});
