package com.cbh.configuration.services;

import com.cenboomh.mcc.annotation.remoting.RemotingService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

/**
 * @author frank
 * @create 2020-06-17 11:23
 */

@RemotingService
@Path("/test")
@Produces(RemotingService.CONTENT_TYPE_JSON)
public interface ConsumerService {
    @GET
    public String test(@QueryParam("name") String name);
}
