package com.cbh.configuration.services;

import com.cbh.configuration.entities.UserInfor;
import com.cenboomh.mcc.annotation.remoting.RemotingService;
import com.cenboomh.mcc.api.CommonResponse;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.util.List;

/**
 * @author frank
 * @create 2020-06-17 15:00
 */
@RemotingService
@Path("/test")
@Produces(RemotingService.CONTENT_TYPE_JSON)
public interface UserInforService {


    @Path("/selectAll")
    @GET
    List<UserInfor> selectAll();

    @Path("/insert")
    @GET
    int insert(UserInfor userInfor);

    @Path("/updateByPrimaryKey")
    @GET
    int updateByPrimaryKey(UserInfor userInfor);

    int delete(UserInfor userInfor);
}

