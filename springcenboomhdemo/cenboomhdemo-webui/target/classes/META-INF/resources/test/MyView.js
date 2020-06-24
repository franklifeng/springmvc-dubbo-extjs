Ext.define('test.MyView', {
    extend: 'Ext.grid.Panel',
    controller: 'test.MyViewController',
    alias: 'store.test.MyView',

    requires: [
        'test.MyViewController',
        'test.MyStore'
    ],

    store: Ext.create("test.MyStore"),
    /*Ext.create('test.MyStore'),*/


    xtype: 'framing-buttons',

    title: 'Support for standard Panel features such as framing, buttons and toolbars',
    width: 750,
    height: 300,

    columnLines: true,
    frame: true,
    iconCls: 'framing-buttons-grid',
    viewModel: true,
    buttonAlign: 'center',

    bind: {
        selection: '{theRow}'
    },

    selModel: {
        type: 'checkboxmodel'
    },



    columns: [{
        text: "序号",
        dataIndex: 'id',

        width: 50,
        filter: 'number',
        sortable: true
    }, {
        text: "用户名",
        dataIndex: 'userName',

        width: 120,
        sortable: false
    }, {
        text: "姓名",
        dataIndex: 'name',

        width: 120,
        sortable: false
    }, {
        text: "用户类型",
        dataIndex: 'customerType',

        width: 120,
        sortable: false
    }, {
        text: "密码",
        dataIndex: 'password',

        width: 120,
        sortable: false
    }
    ],

    tbar: [{
        text: '添加',
        tooltip: 'Add a new row',
        iconCls: 'framing-buttons-add',
        listeners: {
            click: 'onAddClick'
        }

    },'-',{
        text: '修改',
        tooltip: 'update a new row',
        iconCls: 'framing-buttons-update',
        listeners: {
            click: 'onUpdateClick'
        }

    },'-',{
        text: '删除',
        tooltip: 'Remove the selected item',
        iconCls:'framing-buttons-remove',
        listeners: {
            click: 'onDeleteClick'
        },
        disabled: false,
        bind: {
            disabled: '{!theRow}'
        }

    },'-',{
        text: '查询',
        tooltip: 'query the selected item',
        iconCls:'framing-buttons-query',
        listeners: {
            click: 'onQueryClick'
        }

    }]
});

