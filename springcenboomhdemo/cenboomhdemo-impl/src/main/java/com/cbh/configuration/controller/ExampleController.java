package com.cbh.configuration.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author frank
 * @create 2020-06-17 14:23
 */
@RestController
public class ExampleController {
    @RequestMapping("/example/hello")
    public String hello(String name) {
        return "hello " + name;
    }
}
