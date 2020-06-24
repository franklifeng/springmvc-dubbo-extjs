Ext.application({
    name: "app",
    appFolder: 'app',
    controllers: ["UserController"],
    launch: function () {
        // 页面加载完成之后执行
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
            }
        });
    }
});


