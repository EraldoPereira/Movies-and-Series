Ext.define('MoviesAndSeries.model.movies.Movies', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {
            name: 'adult',
            type: 'string'
        },
        {
            name: 'backdrop_path',
            type: 'string',
            convert: function (items) {
                return `https://image.tmdb.org/t/p/original${items}`
            }
        },
        {
            name: 'id', type: 'int'
        },
        {
            name: 'original_language',
            type: 'string'
        },
        {
            name: 'original_title',
            type: 'string'
        },
        {
            name: 'overview',
            type: 'string'
        },
        {
            name: 'popularity',
            type: 'string'
        },
        {
            name: 'poster_path',
            type: 'string',
            convert: function (items) {
                return `https://image.tmdb.org/t/p/original${items}`
            }
        },
        {
            name: 'release_date',
            type: 'string',
            convert: function (item) {
                const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
                const data = new Date(item);
                return `${data.getDate()} de ${meses[(data.getMonth())]} de ${data.getFullYear()}`;

            }
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'video',
            type: 'boolean'
        },
        {
            name: 'vote_average',
            type: 'number',
            convert: function (item) {
                return item * 10;
            }
        },
        {
            name: 'vote_count',
            type: 'int'
        }
    ]
});
