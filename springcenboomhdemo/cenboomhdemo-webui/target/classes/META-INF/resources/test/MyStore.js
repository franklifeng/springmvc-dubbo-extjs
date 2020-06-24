Ext.define("test.MyStore", {
    extend: "Ext.data.BufferedStore",
    model: "test.MyModel",
    alias: 'store.test.MyStore',

    requires: [
        'test.MyModel'
    ],
    sorters: 'id',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/selectAll',
        reader: {
            type: 'json',
            rootProperty: 'data',
            idProperty: 'id'
        }
    }

});
