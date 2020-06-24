package com.cbh.configuration.services;

import com.cenboomh.mcc.api.CommonResponse;
import org.springframework.stereotype.Service;

/**
 * @author frank
 * @create 2020-06-16 17:26
 */
@Service
public class ExampleServiceImpl implements IExampleService {
    @Override
    public CommonResponse<String> hello(String name) {
        return CommonResponse.of("hello" + name);
    }
 /*   @Override
    public String hello(String name) {
        return "hello " + name;
    }*/
}
