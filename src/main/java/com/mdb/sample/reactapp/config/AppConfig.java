package com.mdb.sample.reactapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = { "com.mdb.sample.reactapp.*"})
public class AppConfig {

    @Autowired
    private Environment environment;

   /* @Bean
    public org.apache.hadoop.conf.Configuration hadoopConfig(){
        String configLocation=environment.getProperty("application.properties.hadoop-config");
        org.apache.hadoop.conf.Configuration conf = new org.apache.hadoop.conf.Configuration();
        conf.addResource(new Path(configLocation+"core-site.xml"));
        conf.addResource(new Path(configLocation+"hdfs-site.xml"));
        conf.addResource(new Path(configLocation+"hive-site.xml"));
        conf.set("fs.hdfs.impl",org.apache.hadoop.hdfs.DistributedFileSystem.class.getName());
        conf.set("fs.file.impl",org.apache.hadoop.fs.LocalFileSystem.class.getName());
        return conf;
    }*/


}
