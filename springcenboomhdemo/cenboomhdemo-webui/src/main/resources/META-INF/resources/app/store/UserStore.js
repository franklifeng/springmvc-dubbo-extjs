Ext.define("app.store.UserStore", {
    extend: "Ext.data.Store",
    model: "app.model.UserModel",
/*    data: [
        { id: "1",userName: "Sams",name: "Sam", customerType: 1, password: "123456" },
        { id: "2",userName: "Tom",name: "Tom", customerType: 5, password: "454656" }
    ],*/

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: '/selectAll',
        reader: {
            type: 'json',
            rootProperty: 'data',

            // Do not attempt to load orders inline.
            // They are loaded through the proxy
            implicitIncludes: false
        },
        writer:{
            type:'json'
        }
    }
});