Ext.define('app.controller.UserController', {
    extend: 'Ext.app.Controller',
    stores: ['UserStore'],
    models: ['UserModel'],
    views: ['user.List', 'user.Edit']

    // alias: 'controller.app.controller.UserController'
    init: function () {
        this.control({
            'userlist tbar[]': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.saveUser
            }
        });
    },
    editUser: function (grid, record) {
        var win = Ext.widget("useredit");
        win.down("form").loadRecord(record);
        win.show();
    },
    saveUser: function (btn) {
        var win = btn.up("window"),
            form = win.down("form"),
            record = form.getRecord();
        form.updateRecord();
        record.commit();
        win.close();
    }
});