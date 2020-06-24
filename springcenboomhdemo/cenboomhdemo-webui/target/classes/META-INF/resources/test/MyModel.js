Ext.define('test.MyModel', {
    extend: 'Ext.data.Model',

    alias: 'store.test.MyModel',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'userName', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'customerType', type: 'string' },
        { name: 'password', type: 'string' }

    ]
});
