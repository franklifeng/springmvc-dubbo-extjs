package com.cbh.configuration.services;

import com.cbh.configuration.entities.UserInfor;
import com.cbh.configuration.mapper.UserInforMapper;
import com.cenboomh.mcc.annotation.FwResource;
import com.cenboomh.mcc.api.basic.context.translate.ITranslatorService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author frank
 * @create 2020-06-17 15:00
 */
@Service
public class UserInforServiceImpl implements UserInforService{
    @FwResource
    private UserInforMapper userInforMapper;

    @FwResource
    private ITranslatorService translatorService;


    @Override
    public List<UserInfor> selectAll() {
        System.out.println("-------------------start-----------------");
        List<UserInfor> list = translatorService.translate(userInforMapper.selectAll());
        for (UserInfor userInfor : list){
            System.out.println("================== : " + userInfor.toString());
        }
        return translatorService.translate(userInforMapper.selectAll());
    }

    @Override
    public int insert(UserInfor userInfor) {
        return userInforMapper.insert(translatorService.translate(userInfor));
    }

    @Override
    public int updateByPrimaryKey(UserInfor userInfor) {
        return userInforMapper.updateByPrimaryKey(userInfor);
    }

    @Override
    public int delete(UserInfor userInfor) {
        return userInforMapper.delete(userInfor);
    }
}
