Ext.define("test.MyAdd", {
    extend: "Ext.window.Window",

    title: "添加用户信息",
    width: 300,
    height: 250,
    layout: "fit",

    requires: [
        'test.MyViewController'
    ],
    controller: 'test.MyViewController',

    items: {
        xtype: "form",
        margin: 5,
        border: false,
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 60
        },
        items: [
            { xtype: "textfield", name: "id", fieldLabel: "序号",id:'user_id' },
            { xtype: "textfield", name: "userName", fieldLabel: "用户名",id:'user_userName' },
            { xtype: "textfield", name: "name", fieldLabel: "姓名" ,id:'user_name'},
            { xtype: "textfield", name: "customerType", fieldLabel: "用户类型" ,id:'user_customerType'},
            { xtype: "textfield", name: "password", fieldLabel: "密码",id:'user_password' }
        ]
    },
    buttons: [
        {
            xtype:"button",
            text: "添加",
            handler:'onOKAddClick'
        }
        // {
        //     xtype:"button",
        //     text: "Cancel",
        //     handler:'onAddCancelClick'
        // }
    ]
});