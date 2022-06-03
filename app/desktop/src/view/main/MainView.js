Ext.define('MoviesAndSeries.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    cls: 'mainview',
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    layout: {
        type: 'vbox'
    },
    items: [{
        xtype: 'container',
        height: 50,
        cls: 'container-header',
        layout: {
            type: 'hbox',
            aling: 'stretch'
        },
        items:[{
            xtype: 'component',
            cls: 'text-header',
            html: 'Filmes'
        }, {
            xtype: 'component',
            cls: 'text-header',
            html: 'Series',
            listeners: {
                tap: 'onSeriesTap'
            }
        }]
    }, {
        xtype: 'container',
        flex: 1,
        reference: 'centerView',
        layout: {
            type: 'card'
        },
        defaults: {
            scrollable: 'y'
        },
        items:[]
    }]
});
