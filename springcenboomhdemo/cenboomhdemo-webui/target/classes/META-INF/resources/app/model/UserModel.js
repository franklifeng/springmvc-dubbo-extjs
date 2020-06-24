Ext.define('app.model.UserModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'userName', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'customerType', type: 'string' },
        { name: 'password', type: 'string' }

    ]
});