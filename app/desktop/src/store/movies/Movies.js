Ext.define('MoviesAndSeries.store.movies.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies-store',
    model: 'MoviesAndSeries.model.movies.Movies',
    autoLoad: false,
    proxy: {
        type: 'base-proxy',
        url: ''
    }
});
