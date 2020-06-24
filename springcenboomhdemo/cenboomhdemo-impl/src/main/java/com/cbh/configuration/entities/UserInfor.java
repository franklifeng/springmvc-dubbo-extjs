package com.cbh.configuration.entities;

import com.cenboomh.hit.framework.mybatis.mapper.annotation.Table;
import com.cenboomh.mcc.api.basic.context.translate.DictTranslatorField;

import java.io.Serializable;

/**
 * @author frank
 * @create 2020-06-16 15:07
 */
@Table
public class UserInfor implements Serializable {
    private static final long serialVersionUID = -5809782578272943999L;
    private Integer id ;               //
    private String  userName;          //用户名
    private String  name;              //姓名
    /**
     * 添加翻译功能
     * @deprecated targetFieldName对应翻译后存值的字段名称，fullQualifiedName值对应字典类型code
     */
    @DictTranslatorField(targetFieldName = "tran_customerType", fullQualifiedName = "GB2260-2007")
    private String  customerType;      //用户类型
    private String  tran_customerType; //  存储用户类型 翻译结果的字段名称


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

    public String getTran_customerType() {
        return tran_customerType;
    }

    public void setTran_customerType(String tran_customerType) {
        this.tran_customerType = tran_customerType;
    }

    @Override
    public String toString() {
        return "UserInfor{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", name='" + name + '\'' +
                ", customerType='" + customerType + '\'' +
                ", tran_customerType='" + tran_customerType + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
