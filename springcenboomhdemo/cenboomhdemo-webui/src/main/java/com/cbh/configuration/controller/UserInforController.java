package com.cbh.configuration.controller;

import com.cbh.configuration.entities.UserInfor;
import com.cbh.configuration.services.UserInforService;
import com.cenboomh.mcc.annotation.remoting.RemotingReference;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * @author frank
 * @create 2020-06-17 14:54
 */
@RestController
public class UserInforController {
    @RemotingReference
    UserInforService userInforService;

    /**
     * 查
     * @return
     */
    @RequestMapping("/selectAll")
    public List<UserInfor> selectAll(){
/*        UserInfor userInfor = new UserInfor();
        userInfor.setId(1);
        userInfor.setUserName("zhangsan");
        userInfor.setName("snasan");
        userInfor.setCustomerType("shas");
        userInfor.setPassword("dfssdsdfs");

        UserInfor userInfor1 = new UserInfor();
        userInfor1.setId(2);
        userInfor1.setUserName("3333333333");
        userInfor1.setName("44444");
        userInfor1.setCustomerType("555555");
        userInfor1.setPassword("666666666666");
        List<UserInfor> list = new ArrayList<>();
        list.add(userInfor);
        list.add(userInfor1);
        return list;*/
        return userInforService.selectAll();
    }

    @RequestMapping("/delete")
    public int delete(UserInfor userInfor){
        System.out.println("----------delete a data------------");
        System.out.println(userInfor.toString());
//        return 1;
        return userInforService.delete(userInfor);
    }

    @RequestMapping("/insert")
    public int insert(UserInfor userInfor){
//        return 1;
        return userInforService.insert(userInfor);
    }

    @RequestMapping("/updateByPrimaryKey")
    public int updateByPrimaryKey(UserInfor userInfor){
//        return 1;
        return userInforService.updateByPrimaryKey(userInfor);
    }
}
