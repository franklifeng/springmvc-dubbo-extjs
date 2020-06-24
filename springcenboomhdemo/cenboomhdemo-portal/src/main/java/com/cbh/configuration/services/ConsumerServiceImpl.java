package com.cbh.configuration.services;

import com.cenboomh.mcc.annotation.remoting.RemotingReference;
import com.cenboomh.mcc.api.CommonResponse;
import org.springframework.stereotype.Service;

/**
 * @author frank
 * @create 2020-06-17 11:26
 */
@Service
public class ConsumerServiceImpl implements ConsumerService {

    @RemotingReference
    IExampleService exampleService;

    @Override
    public String test(String name) {
        CommonResponse<String> result = exampleService.hello(name);

        return result.getData();
    }
}
