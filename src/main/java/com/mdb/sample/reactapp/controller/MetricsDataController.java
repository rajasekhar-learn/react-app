package com.mdb.sample.reactapp.controller;

import com.mdb.sample.reactapp.model.ServayResult;
import com.mdb.sample.reactapp.services.MetricsDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MetricsDataController {

    @Autowired
    MetricsDataService metricsDataService;

    @GetMapping("/servay-responses")
    public List<ServayResult> getServayResultsByResponsesCatagory(@RequestParam(required = false,defaultValue = "ALL") String category ){
        if("ALL".equalsIgnoreCase(category)){
            return metricsDataService.getAllCatogoryResults();
        }else {
            return metricsDataService.getFemaleCatogoryResults();
        }
    }


}
