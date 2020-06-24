Ext.define('test.MyViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.test.MyViewController',

    onAddClick: function () {
        // Ext.Msg.alert('Add', 'The Add button was clicked');
        var wind = Ext.create('test.MyAdd');
        wind.show();
    },

    onUpdateClick: function () {
        console.debug("111111111111111111111111");
        var my_view = this.getView();
        var recordlist = my_view.getSelectionModel().getSelection();

        if (recordlist.length === 0) {
            Ext.Msg.alert("请选择一条数据修改");
        }

        if (recordlist.length > 1) {
            Ext.Msg.alert("只能修改一条记录");
        }
        var id = recordlist[0].get("id"),
            userName = recordlist[0].get("userName"),
            name = recordlist[0].get("name"),
            customerType = recordlist[0].get("customerType"),
            password = recordlist[0].get("password");
        if (!id) {
            Ext.Msg.alert('警告', '用户id不能为空！');
            return;
        }

        var wind = Ext.create('test.MyEdit');
        /*       console.debug("344444444444 : " + wind.getItemId());
               console.debug("344444444444 : " + wind.getConfig());
               console.debug("555555555555 : " + Ext.getCmp("user_id"));*/
        Ext.getCmp("user_id").setValue(id);
        Ext.getCmp("user_userName").setValue(userName);
        Ext.getCmp("user_name").setValue(name);
        Ext.getCmp("user_customerType").setValue(customerType);
        Ext.getCmp("user_password").setValue(password);
        wind.show();
    },


    onOKAddClick: function () {
        // Ext.Msg.alert('Add', 'The save button was clicked');

        console.debug("111111111111111111111111");
        var id = Ext.getCmp("user_id"),
            userName = Ext.getCmp("user_userName"),
            name = Ext.getCmp("user_name"),
            customerType = Ext.getCmp("user_customerType"),
            password = Ext.getCmp("user_password");

        if (!id || !id.getValue()) {
            Ext.Msg.alert('警告', '用户id不能为空！');
            return;
        }

        //校验是否有相同id



        var vm = this;
        var config = {
            id: id ? id.getValue() : "",
            userName: userName ? userName.getValue() : "",
            name: name ? name.getValue().toString() : "",
            customerType: customerType ? customerType.getValue().toString() : "",
            password: password ? password.getValue().toString() : ""
        };
        console.debug("ajax   ----------- start");
        FW.Remote.ajax({
            url: FW.App.getAppPath() + 'insert',
            method: 'GET',
            params: config,
            success: function (response, opt) {

                console.debug(response);
                console.debug(opt);
                Ext.Msg.alert('添加', '添加成功');
                vm.getView().hide();
                // vm.onQueryClick();
            },
            failure: function (response, opt) {
                Ext.Msg.alert('添加', '添加失败,请确认id是否已经存在');
                console.debug(response);
                console.debug(opt);
                // console.debug(opt.getObject().getParam("id"));
                vm.getView().hide();
            }
        })
    },



    onEditClick: function () {
        // Ext.Msg.alert('Add', 'The update button was clicked');

        console.debug("111111111111111111111111");
        var id = Ext.getCmp("user_id"),
            userName = Ext.getCmp("user_userName"),
            name = Ext.getCmp("user_name"),
            customerType = Ext.getCmp("user_customerType"),
            password = Ext.getCmp("user_password");


        if (!id || !id.getValue()) {
            Ext.Msg.alert('警告', '用户id不能为空！');
            return;
        }
        console.debug("2222222222222222222222222222");
        var config = {
            id: id ? id.getValue() : "",
            userName: userName ? userName.getValue() : "",
            name: name ? name.getValue().toString() : "",
            customerType: customerType ? customerType.getValue().toString() : "",
            password: password ? password.getValue().toString() : ""
        };
        var vm = this;
        console.debug("ajax   ----------- start");
        FW.Remote.ajax({
            url: FW.App.getAppPath() + 'updateByPrimaryKey',
            method: 'GET',
            params: config,
            success: function (response, opt) {

                console.debug(response);
                console.debug(opt);
                Ext.Msg.alert('修改', '修改成功');
                // vm.onQueryClick();
                vm.getView().hide();
            },
            failure: function (response, opt) {
                Ext.Msg.alert('修改', '修改失败');
                console.debug(response);
                console.debug(opt);
                vm.getView().hide();
            }
        })
    },

    onDeleteClick: function () {
        // Ext.Msg.alert('Add', 'The update button was clicked');
        console.debug("111111111111111111111111");

        var my_view = this.getView();
        console.debug("---2222222222222---:" + my_view.getEl());
        console.debug("---2222222222222---:" + my_view);

        var recordlist = my_view.getSelectionModel().getSelection();

        console.debug("---222ffffffffffffffffff2222222222---:" + recordlist.length);
        if (recordlist.length === 0) {
            Ext.Msg.alert("请选择一条数据 删 除");
        }

        if (recordlist.length > 1) {
            Ext.Msg.alert("只能删除一条记录");
        }

        var id = recordlist[0].get("id"),
            userName = recordlist[0].get("userName"),
            name = recordlist[0].get("name"),
            customerType = recordlist[0].get("customerType"),
            password = recordlist[0].get("password");

        /*  var array = '';
          for (var i = 0; i < recordlist.length; i++) {
              array = recordlist[i].get("id");
          }*/
        if (!id) {
            Ext.Msg.alert('警告', '用户id不能为空！');
            return;
        }
        var config = {
            id: id ? id : "",
            userName: userName ? userName : "",
            name: name ? name : "",
            customerType: customerType ? customerType : "",
            password: password ? password : ""
        };
        console.debug("ajax   ----------- start");

        var vm = this;
        FW.Remote.ajax({
            url: FW.App.getAppPath() + 'delete',
            method: 'GET',
            params: config,
            success: function (response, opt) {

                console.debug(response);
                console.debug(opt);
                Ext.Msg.alert('删除', '删除成功');
                vm.onQueryClick();
            },
            failure: function (response, opt) {
                Ext.Msg.alert('删除', '删除失败');
                console.debug(response);
                console.debug(opt);
            }
        })

    },

    onQueryClick: function () {
        console.debug("111111111111111111111111");
        var queryField = this.getView();

        queryField.store.reload();
        Ext.getBody().unmask();

    }


});
