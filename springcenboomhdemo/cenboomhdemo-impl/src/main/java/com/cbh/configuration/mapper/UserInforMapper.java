package com.cbh.configuration.mapper;

import com.cbh.configuration.entities.UserInfor;
import com.cenboomh.hit.framework.mybatis.mapper.annotation.GeneratorKeyProvider;
import com.cenboomh.hit.framework.mybatis.mapper.annotation.RegisterMapper;
import com.cenboomh.hit.framework.mybatis.mapper.common.Mapper;

/**
 * @author frank
 * @create 2020-06-17 14:28
 */
@RegisterMapper
public interface UserInforMapper extends Mapper<UserInfor> {
    public boolean addUserInfor(UserInfor userInfor);

    @GeneratorKeyProvider(entityClass = UserInfor.class)
    public UserInfor findById(Integer id);
}
