Ext.define('MoviesAndSeries.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    layout: {
        type: 'vbox'
    },
    items: [{
        xtype: 'container',
        layout: {
            type: 'hbox',
            aling: 'stretch'
        },
        items:[{
            xtype: 'component',
            html: 'Filmes'
        }, {
            xtype: 'component',
            html: 'Series'
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
