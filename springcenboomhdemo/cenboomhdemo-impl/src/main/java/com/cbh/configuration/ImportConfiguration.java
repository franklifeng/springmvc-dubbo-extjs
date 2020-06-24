package com.cbh.configuration;


import com.cenboomh.mcc.annotation.FrameworkEntryPoint;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;

/**
 * @author frank
 * @create 2020-06-16 15:18
 */


@FrameworkEntryPoint
public class ImportConfiguration
{
    @Bean
    public ObjectMapper objectMapper()
    {
        return new ObjectMapper();
    }
}
