package com.mdb.sample.reactapp.services;

import com.mdb.sample.reactapp.functions.FunctionUtils;
import com.mdb.sample.reactapp.model.ServayResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class MetricsDataService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    Environment environment;

    public List<ServayResult> getFemaleCatogoryResults() {
        log.debug("getting female category results ..");
        return jdbcTemplate.query(environment.getProperty("application.properties.avrage-for-female-responses"),
                FunctionUtils.resultsMappingFunction::apply);
    }

    public List<ServayResult> getAllCatogoryResults() {
        log.debug("getting all category results ..");
        return jdbcTemplate.query(environment.getProperty("application.properties.avrage-for-all-responses"),
                FunctionUtils.resultsMappingFunction::apply);
    }

}
