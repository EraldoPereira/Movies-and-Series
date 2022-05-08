Ext.define('MoviesAndSeries.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',

	routes: { 
		':xtype': {
			action: 'mainRoute'
		},
		'movies/details/:movieId': {
			action: 'showMoviesDetails',
			before: 'beforeShowMoviesDetails'
		}
	},

	updateView: function (options) {
		const me = this;
		const centerView = me.lookup('centerview');
		centerView.removeAll();
		if ( typeof options !== 'string' ) {
			try {
				const newView = centerView.add(options.viewModel ? {
					xtype: options.viewType,
					viewModel: options.viewModel
				} : {	
					xtype: options.viewType,
				})
			} catch (ex) {
				console.error(ex);
			}
			return;
		}
	},

	initViewModel: function(vm){
		vm.getStore('menu').on({
			load: 'onMenuDataLoad',
			single: true,
			scope: this
		});
	},

	onMenuDataLoad: function(store){
		this.mainRoute(Ext.util.History.getHash());
	},

	mainRoute:function(xtype) {
		var navview = this.lookup('navview'),
			menuview = navview.lookup('menuview'),
			centerview = this.lookup('centerview'),
			exists = Ext.ClassManager.getByAlias('widget.' + xtype),
			node, vm;

		if (exists === undefined) {
			console.log(xtype + ' does not exist');
			return;
		}
		if(!menuview.getStore()) {
			console.log('Store not yet avalable from viewModel binding');
			return;
		}

		node = menuview.getStore().findNode('xtype', xtype);

		if (node == null) {
			console.log('unmatchedRoute: ' + xtype);
			return;
		}
		if (!centerview.getComponent(xtype)) {
			centerview.add({ xtype: xtype,  itemId: xtype, heading: node.get('text') });
		}

		centerview.setActiveItem(xtype);
		menuview.setSelection(node);
		vm = this.getViewModel(); 
		vm.set('heading', node.get('text'));
	},

	onMenuViewSelectionChange: function (tree, node) {
		if (node == null) { return }

		var vm = this.getViewModel();

		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}
	},

	onTopViewNavToggle: function () {
		var vm = this.getViewModel();

		vm.set('navCollapsed', !vm.get('navCollapsed'));
	},

	showMoviesDetails: function () {
		const me = this;
		const viewModel = me.getViewModel();
		me.updateView({
			viewType: 'detailsview',
			viewModel: {
				type: 'movies-detailsiewmodel',
				data: {
					record: viewModel.get('record')
				}
			}
		});
	},
	beforeShowMoviesDetails: function (movieId, action) {
		const me = this;
		/* action.resume();
		return; */

		Ext.Ajax.request({
			url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Ext.manifest.config.apiKey}&language=pt-BR`,
			method: 'get',
			scope: me,
			success: Ext.bind(me.beforeShowMoviesDetailsSuccess, me, [action, movieId], true),
			failure: Ext.bind(me.beforeShowMoviesDetailsFaliure, me, [action, movieId], true)
		})
	},
	beforeShowMoviesDetailsSuccess: function (response, options, action) {
		const me = this;
		const data = Ext.decode(response.responseText, true);
		me.getViewModel().set({
			record: data
		});
		action.resume();
	},
	beforeShowMoviesDetailsFaliure: function (response, options, action) {
		console.error(response);
		action.stop();
	}
});
