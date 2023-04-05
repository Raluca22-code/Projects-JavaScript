var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null,
		openNewUserPanel:false,
		newUser:{name:'',city:''}
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
		remove: function (index){
			usersService.remove(index).then(response => {
				toastr.success(response.data)
				usersService.get().then(response => (this.users = response.data));
				)};
    },
	open: function(){
		this.openNewUserPanel = true;
	},
	close: function(){
		this.openNewUserPanel = false;
	},
	save: function(){
		usersService.save(this.newUser).then(response => {
			toastr.success(response.data);
			usersService.get().then(response => { this.users = response.data;
			});
		});
		this.openNewUserPanel = false;
	}
	update: function()
	{}
	}
})	

var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
    }
})

