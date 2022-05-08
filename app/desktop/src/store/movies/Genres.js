Ext.define('MoviesAndSeries.store.movies.Genres', {
    extend: 'Ext.data.Store',
    alias: 'store.movies-genres-store',
    model: 'MoviesAndSeries.model.movies.Genres',
    autoLoad: false,
    proxy: {
        type: 'base-proxy',
        url: ''
    }
});
