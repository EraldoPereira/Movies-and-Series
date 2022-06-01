Ext.define('MoviesAndSeries.view.main.nav.NavView', {
    extend: 'Ext.Container',
    xtype: 'navview',
    controller: "navviewcontroller",
    cls: 'navview',
    viewModel: {},
    items: [{
            xtype: 'menuview', 
            reference: 'menuview', 
            bind: {width: '{menuview_width}'}, 
            listeners: { 
                selectionchange: "onMenuViewSelectionChange"
            }
        }
    ]
});
