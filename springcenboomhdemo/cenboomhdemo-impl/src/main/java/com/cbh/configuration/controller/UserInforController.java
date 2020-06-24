package com.cbh.configuration.controller;

import com.cbh.configuration.entities.UserInfor;
import com.cbh.configuration.services.UserInforService;
import com.cenboomh.mcc.annotation.FwResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * @author frank
 * @create 2020-06-17 14:54
 */

@Controller
public class UserInforController {
    @FwResource
    UserInforService userInforService;

    /**
     * 查
     * @return
     */
    @RequestMapping("/selectAll")
    public List<UserInfor> selectAll(){
        return userInforService.selectAll();
    }

    @RequestMapping("/insert")
    public int insert(UserInfor userInfor){
        return userInforService.insert(userInfor);
    }

    @RequestMapping("/updateByPrimaryKey")
    public int updateByPrimaryKey(UserInfor userInfor){
        return userInforService.updateByPrimaryKey(userInfor);
    }
}
