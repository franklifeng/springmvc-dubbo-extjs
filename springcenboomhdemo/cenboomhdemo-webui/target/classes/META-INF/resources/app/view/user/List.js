Ext.define("app.view.user.List", {
    extend: "Ext.grid.Panel",
    alias: 'widget.userlist',
    store: "UserStore",
    // controller : "UserController",
    // requires: [
    //     'app.controller.UserController'
    // ],
    // controller: 'app.controller.UserController',




    columns: [{
        text: "序号",
        dataIndex: 'id',

        width: 50,
        sortable: true
    }, {
        text: "用户名",
        dataIndex: 'userName',

        width: 120,
        sortable: true,
    }, {
        text: "姓名",
        dataIndex: 'name',

        width: 120,
        sortable: true
    }, {
        text: "用户类型",
        dataIndex: 'customerType',

        width: 120,
        sortable: true
    }, {
        text: "密码",
        dataIndex: 'password',

        width: 120,
        sortable: true,
    }
    ],

    tbar: [{
        text: 'Add Something',
        tooltip: 'Add a new row',
        iconCls: 'framing-buttons-add',
        listeners: {
            click: 'onAddClick',
        }

    },'-',{
        text: 'Remove Something',
        tooltip: 'Remove the selected item',
        iconCls:'framing-buttons-remove',
        handler: 'onDelete'

    }],

    onAddClick: function () {
        var me = this;
        fw.util.ajax({
            url: fw.util.getAppPath() + 'fw/user/checkLogin',
            success: function (result) {
                me.workbenchModels = result.workbenchModels;
                me.systemDisplayName = result.systemDisplayName;
                me.getView().getController().doAfterLogin(result.appContext)
            },
            failure: function (response) {
                if (response.code === 'NEED_CHOOSE_WORKBENCH') {
                    me.getView().hide();
                    me.workbenchModels = response.data.workbenchModels;
                    // 展示工作台切换
                    if (!me.workbenchWindow) {
                        me.createWorkbench(me.workbenchModels);
                    }
                    me.workbenchWindow.show();
                }
            }
        })
    },

});