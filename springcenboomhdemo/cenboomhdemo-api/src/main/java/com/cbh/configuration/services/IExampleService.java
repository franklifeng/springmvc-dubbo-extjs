package com.cbh.configuration.services;

import com.cenboomh.mcc.annotation.remoting.RemotingService;
import com.cenboomh.mcc.api.CommonResponse;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

/**
 * @author frank
 * @create 2020-06-17 9:03
 */
@RemotingService
@Path("/example")
@Produces(RemotingService.CONTENT_TYPE_JSON)
public interface IExampleService {
    @Path("/hello")
    @GET
    CommonResponse<String> hello(@QueryParam("name") String name);
    //    String hello(@QueryParam("name") String name);

}
