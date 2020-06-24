package com.cbh;

import com.cbh.configuration.entities.UserInfor;
import com.cbh.configuration.services.IExampleService;
import com.cbh.configuration.services.UserInforService;
import com.cenboomh.mcc.annotation.remoting.RemotingReference;
import com.cenboomh.mcc.api.CommonResponse;
import com.cenboomh.mcc.starter.junit.EnableFrameworkTestSupport;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

/**
 * @author frank
 * @create 2020-06-17 10:51
 */
@EnableFrameworkTestSupport
public class JUnitTest {

    @RemotingReference
    private IExampleService exampleService;

    @RemotingReference
    UserInforService userInforService;

    @Test
    public void test(){
        CommonResponse<String> result = exampleService.hello("李四");
        System.out.println(result.getData());
        Assert.assertEquals("hello李四",result.getData());
    }



    @Test
    public void testUserInforInsert(){

        UserInfor userInfor = new UserInfor();
        userInfor.setId(3);
        userInfor.setName("lisi");
        userInfor.setPassword("wewewew");
        userInfor.setUserName("rrrrr");
        userInfor.setCustomerType("3333333");
        int n = userInforService.insert(userInfor);
        Assert.assertEquals(1,n);

    }


    @Test
    public void testSelectAll(){
        List<UserInfor> list = userInforService.selectAll();
        System.out.println("-------------------------end----------------------");

//        Assert.assertEquals(3,list.size());
    }


    @Test
    public void testUpdateByPrimaryKey(){
        UserInfor userInfor = new UserInfor();
        userInfor.setId(3);
        userInfor.setName("wangwu");
        userInfor.setPassword("wosishui");
        userInfor.setUserName("dadaowangwu");
        userInfor.setCustomerType("wushi");

        int n = userInforService.updateByPrimaryKey(userInfor);
        System.out.println("-------------------   " + n);
        Assert.assertEquals(1,n);
    }

    @Test
    public void testDelete(){
        UserInfor userInfor = new UserInfor();
        userInfor.setId(2);
        int n = userInforService.delete(userInfor);
        System.out.println("3333333333333333333333   " + n);
        Assert.assertEquals(1,n);
    }
}
