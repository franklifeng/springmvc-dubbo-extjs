package com.cbh.configuration.entities;

import java.io.Serializable;

/**
 * @author frank
 * @create 2020-06-16 15:07
 */

public class UserInfor implements Serializable {
    private static final long serialVersionUID = -5809782578272943999L;
    private Integer id ;               //
    private String  userName;          //用户名
    private String  name;              //姓名
    private String  customerType;      //用户类型
    private String  password;          //密码

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCustomerType() {
        return customerType;
    }

    public void setCustomerType(String customerType) {
        this.customerType = customerType;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserInfor{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", name='" + name + '\'' +
                ", customerType='" + customerType + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
