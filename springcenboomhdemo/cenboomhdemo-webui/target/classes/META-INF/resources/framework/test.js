Ext.define('Company', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id' },
        { name: 'userName' },
        { name: 'name',  },
        { name: 'customerType' },
        { name: 'password', type: 'float' }
    ]
});

var dummyDataForMainGrid = [
    ['1', '3m Co', 'lili', '99', 4444444],
    ['2', 'Alcoa Inc', 'zhangsan', 'yy', 66666],
    ['3', 'Altria Group Inc', 'wanwu', 'tt', 666666],
    ['4', 'American Express Company', 'zhoushan', 'lll', 5645646]
];

var mainStore = Ext.create('Ext.data.ArrayStore', {
    model: 'Company',
    data: dummyDataForMainGrid
});

Ext.define('MainGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.MainGrid',
    store: mainStore,
    columns: [
        { text: "id", dataIndex: 'id' },
        { text: "userName", dataIndex: 'userName' },
        { text: "name", dataIndex: 'name' },
        { text: "customerType", dataIndex: 'customerType' },
        { text: "password", dataIndex: 'password' }
    ],
    //autoWidth: true,
    selModel: {
        selType: 'cellmodel'
    },
    //autoHeight: true,
    plugins: [{
        ptype: 'rowexpander'
    }],
    title: 'Expander Rows in a Collapsable Grid',

});




Ext.onReady(function () {

    var mainGrid = new Ext.create('MainGrid');

    mainGrid.render(Ext.getBody());

    mainGrid.setHeight(window.innerHeight);
    mainGrid.setWidth(window.innerWidth);

});
