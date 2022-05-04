Ext.define('MoviesAndSeries.view.movies.list.MoviesView', {
    extend: 'Ext.container.Container',
    xtype: 'moviesview',
    cls: 'moviesview',
    controller: 'movies-viewcontroller',
    viewModel: 'movies-viewmodel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'container',
        cls: 'header-container',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'textfield',
            margin: '0 -20 0 20',
            flex: 1,
            cls: 'header-label',
            placeholder: 'Search for a movie',
            bind: {
                value: '{searchText}'
            },
            listeners: {
                blur: 'onChangeLabelSearch'
            }

        }, {
            xtype: 'component',
            cls: 'btn-search',
            width: 120,
            html: 'Search',
            listeners: {
                click: {
                    element: 'element',
                    fn: 'onSearchMovie'
                }
            }
        }]
    }, {
        xtype: 'component',
        margin: '15 0 15 15',
        cls: 'title',
        html: 'Os Mais Populares'
    }, {
        xtype: 'container',
        flex: 1,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'dataview',
            reference: 'dataview',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'start',
                wrap: true
            },
            bind: {
                store: '{items}'
            },
            itemTpl: `
                <div class="container-dataview">
                    <div class="conatiner-photo" >
                        <img class="poster" src="{poster_path}"></img>
                    </div>
                    <div class="box">
                        <div class="box-cicle">
                            <svg>
                                <circle cx="20" cy="20" r="20" ></circle>
                                <circle cx="20" cy="20" r="20" style="stroke-dashoffset: calc(126 - ( ( 126 * {vote_average}) / 100 ))"></circle>
                            </svg>
                        </div>
                        <div>
                            <h2>{vote_average}%</h2>
                        </div>
                    </div>
                    <div class="conatiner-text">
                        <div class="title-movie">{original_title}</div>
                        <div class="date-movie">{release_date}</div>
                    </div>
                </div>    
            `,
            listeners: {
                childtap: 'onDataviewTap'
            }
        }]
    }]
});


