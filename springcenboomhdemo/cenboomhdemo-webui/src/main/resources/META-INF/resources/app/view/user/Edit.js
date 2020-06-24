Ext.define("app.view.user.Edit", {
    extend: "Ext.window.Window",
    alias: "widget.useredit",

    title: "编辑用户",
    width: 500,
    height: 400,
    layout: "fit",

    items: {
        xtype: "form",
        margin: 5,
        border: false,
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 60
        },
        items: [
            { xtype: "textfield", name: "id", fieldLabel: "序号" },
            { xtype: "textfield", name: "userName", fieldLabel: "用户名" },
            { xtype: "textfield", name: "name", fieldLabel: "姓名" },
            { xtype: "textfield", name: "customerType", fieldLabel: "用户类型" },
            { xtype: "textfield", name: "password", fieldLabel: "密码" }
        ]
    },
    buttons: [
        { text: "修改", action: "update" },
        { text: "保存", action: "save" }
    ]
});