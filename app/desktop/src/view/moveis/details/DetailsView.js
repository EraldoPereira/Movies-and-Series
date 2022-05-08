Ext.define('MoviesAndSeries.view.movies.details.DetailsView', {
    extend: 'Ext.Container',
    xtype: 'detailsview',
    cls: 'detailsview',
    controller: 'movies-detailsviewcontroller',
    viewModel: 'movies-detailsviewmodel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'image',
            cls: 'main-image',
            height: 480,
            width: 300,
            bind: {
                src: '{posterPath}'
            }
        }, {
            xtype: 'container',
            margin: '8 0 0 20',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'component',
                    cls: 'movie-title',
                    bind: {
                        html: '{record.title}'
                    }
                }, {
                    xtype: 'component',
                    margin: '0 0 0 10',
                    cls: 'movie-year',
                    bind: {
                        html: '({releaseDateYear})'
                    }
                }]
            }, {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [/* {
                    xtype: 'component',
                    padding: '2',
                    cls: 'movie-rating',
                    html: '18'
                },  */{
                        xtype: 'component',
                        margin: '0 0 0 8',
                        cls: 'movie-text',
                        bind: {
                            html: '{releaseDate} (BR)'
                        }
                    }, {
                        xtype: 'component',
                        margin: '0 0 0 8',
                        cls: 'movie-text',
                        bind: {
                            html: '{genres}'
                        }
                    }, {
                        xtype: 'component',
                        margin: '0 0 0 8',
                        cls: 'movie-text',
                        bind: {
                            html: '{runtime}'
                        }
                    }]
            }, {
                xtype: 'container',
                margin: '8 0 0 0',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'component',
                    bind: {
                        html: `
                        <div class="box">
                            <div class="box-cicle">
                                <svg>
                                    <circle cx="50" cy="50" r="50" ></circle>
                                    <circle cx="50" cy="50" r="50" style="stroke-dashoffset: calc(315 - ( ( 315 * ({record.vote_average} * 10)) / 100 ))"></circle>
                                </svg>
                            </div>
                            <div>
                                <h2>{record.vote_average * 10}%</h2>
                            </div>
                        </div>`
                    }
                }, {
                    xtype: 'component',
                    width: 80,
                    alignSelf: 'center',
                    margin: '0 0 0 10',
                    cls: 'movie-text',
                    html: 'Avaliação dos usuários'
                }]
            }, {
                xtype: 'component',
                margin: '10 0 0 0',
                cls: 'movie-text-bold',
                html: 'Sinopse'
            }, {
                xtype: 'component',
                flex: 1,
                margin: '8 0 0 4',
                cls: 'movie-text',
                maxWidth: 720,
                bind: {
                    html: '{record.overview}'
                }
            }]
        }]
    }, {

    }]
});


