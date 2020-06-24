Ext.onReady(function () {
    Ext.create('Ext.button.Button', {
        text: 'ext按钮',
        renderTo: Ext.getBody()
    });
});

Ext.onReady(function () {
    Ext.create('Ext.button.Button', {
        text: 'ext按钮',
        renderTo: Ext.getBody(),
        //按钮处理事件
        handler: function () {
            Ext.MessageBox.alert('提示', '这是我的第一个ExtJS程序');
        }
    });
});


Ext.define('framework.example.extjs.MyViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myview-controller',
    onButtonClick: function () {
        Ext.MessageBox.alert('提示', '这是我的第一个ExtJS程序');
    }
});

Ext.define('framework.example.extjs.MyView', {
    extend: 'Ext.Panel',
    controller: 'myview-controller',

    items: [{
        xtype: 'button',
        text: 'ext按钮',
        handler: 'onButtonClick'
    }]
});

Ext.onReady(function () {

    Ext.create('framework.example.extjs.MyView', {
        renderTo: Ext.getBody()
    })

});


Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        html: 'My Panel',
        renderTo: Ext.getBody(),
        listeners: {
            afterrender: function () {
                Ext.Msg.alert('Success!', 'We have been rendered');
            }
        }
    });
});


Ext.onReady(function(){

    Ext.create('Ext.form.Panel',{

        title : '横向布局测试',
        height : 130,
        width : 500,
        frame : true,
        layout : 'form',
        bodyStyle:"padding-top:5px",
        renderTo : Ext.getBody(),
        items : [{

            layout : 'column',
            frame : true,
            items : [{

                xtype : 'textfield',
                fieldLabel : '用户名',
                name : 'name'
            },{

                xtype : 'textfield',
                fieldLabel : '姓名',
                name : 'name'
            }]
        },{

            layout : 'column',
            frame : true,
            items : [{

                xtype : 'textfield',
                fieldLabel : '用户类型'
            },{

                xtype : 'textfield',
                fieldLabel : '密码'
            }]
        }]
    });
});


Ext.onReady(function(){

    Ext.create('Ext.form.Panel',{

        title : '横向布局测试',
        height : 130,
        width : 600,
        frame : true,
        layout : 'form',
        bodyStyle:"padding-top:5px",
 /*       defaults:{//统一设置表单字段默认属性
            //autoFitErrors : false,//展示错误信息时是否自动调整字段组件宽度
            labelSeparator :'：',//分隔符
            labelWidth : 50,//标签宽度
            width : 150,//字段宽度
            allowBlank : false,//是否允许为空
            blankText : '不允许为空', //若设置不为空，为空时的提示
            labelAlign : 'left',//标签对齐方式
            msgTarget :'qtip'          //显示一个浮动的提示信息
            //msgTarget :'title'       //显示一个浏览器原始的浮动提示信息
            //msgTarget :'under'       //在字段下方显示一个提示信息
            //msgTarget :'side'        //在字段的右边显示一个提示信息
            //msgTarget :'none'        //不显示提示信息
            //msgTarget :'errorMsg'    //在errorMsg元素内显示提示信息
        },*/
        renderTo : Ext.getBody(),
        items : [{

            layout : 'column',
            frame : true,
            baseCls : 'my-panel-no-border',  //去掉边框

            items : [{

                xtype : 'textfield',
                fieldLabel : '用户名',
                labelAlign: "right",
                width: 280,
                labelWidth: 70,
                name : 'username'
            },{

                xtype : 'textfield',
                fieldLabel : '姓名',
                labelAlign: "right",
                width: 280,
                labelWidth: 70,
                name : 'name'
            }]
        },{

            layout : 'column',
            frame : true,
            baseCls : 'my-panel-no-border',  //去掉边框
            items : [{

                xtype : 'textfield',
                fieldLabel : '用户类型',
                labelAlign: "right",
                width: 280,
                labelWidth: 70,
                name : 'customerType'
            },{

                xtype : 'textfield',
                fieldLabel : '密码',
                labelAlign: "right",
                width: 280,
                labelWidth: 70,
                name : 'password'
            }]
        }]
    });
});

Ext.onReady(function () {
    Ext.QuickTips.init();   //放在图标上会自动提示信息

    Ext.define('ExtApp.view.StudentList' , {
        extend : 'Ext.grid.Panel' ,
        id : 'StudentListGrid' ,
        xtype : 'StudentList' ,
        store : 'StudentList' ,
        draggable:false, //设置为false则禁用拖拽改变列顺序、
        columnLines:true,//添加列的框线样式
        viewConfig: {
            stripeRows:true //True来实现隔行换颜色
        },
        tbar : [{
            xtype : 'form',
            id : 'queryFormSL' ,
            width : '100%',
            items : [{
                xtype : 'container',
                padding : 5,
                flex : 2,
                layout : {
                    type : 'hbox'
                },
                items : [{
                    labelWidth : 60,
                    labelAlign : 'right',
                    width: 200,
                    xtype : 'combo',
                    fieldLabel:'选择年级',
                    name:'gradeCode',
                    id : 'cobStudentListGradeCode',
                    store : 'Grade',
                    valueField : 'gradeCode',
                    displayField : 'gradeName',
                    editable : false,
                    emptyText : '请选年级',
                    queryMode : 'local'

                },{
                    xtype : 'textfield',
                    labelSeparator:':',
                    labelWidth : 150,
                    width: 300,
                    labelAlign : 'right',
                    id:'SListTextField',
                    name:'userNameORuserCode',
                    fieldLabel : '输入学生ID或学生姓名'
                },{
                    xtype : 'button',
                    id : 'btnStuListQuery',
                    text : '查询'
                },{
                    xtype : 'button',
                    id : 'btnStuListReset',
                    text : '重置'
                }]
            }]
        }],
        columns : [
            {   xtype:'rownumberer',text:'序号',flex:1,    align:'center'},
            {   text:'账户ID' , flex:2 , align:'center' , dataIndex:'userCode' },
            {    text:'用户姓名' , flex:1 , align:'center' , dataIndex:'userName'},
            {    text:'性别' , flex:1 , align:'center' , dataIndex:'sex'    },
            {    text:'城市' , flex:1 , align:'center' , dataIndex:'cityName'    },
            {    text:'学校' , flex:1 , align:'center' , dataIndex:'schoolName'},
            {    text:'年级号' , flex:1 , align:'center' , dataIndex:'gradeCode'},
            {    text:'联系电话' , flex:2 , align:'center' , dataIndex:'tel'},
            {    text:'邮箱' , flex:2 , align:'center' , dataIndex:'email'},
            {    text:'QQ' , flex:2 , align:'center' , dataIndex:'qq'},
            {    header:'账户注册时间',align:"center",flex:3,dataIndex:'firstAccessDate',xtype:'datecolumn',format:'Y-m-d H:i:s'},
            {    header: '详细信息' ,
                xtype: 'actioncolumn' ,
                width: 50 ,
                flex : 1 ,
                align:'center',
                items: [{
                    icon: 'images/grid.png' ,
                    tooltip: '详细信息' ,
                    handler: function(grid, rowIndex, colIndex){
                        var record = grid.getStore().getAt(rowIndex);
                        var win = Ext.create('ExtApp.view.StudentDetails').show();
                        var form = win.down('form').getForm();
                        form.loadRecord(record);
                    }
                }]
            }
        ],
        dockedItems:[{
            xtype: 'pagingtoolbar',
            store : 'StudentList' ,   // GridPanel中使用的数据
            dock: 'bottom',
            displayInfo: true
        }]
    });


});