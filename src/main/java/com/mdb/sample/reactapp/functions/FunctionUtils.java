package com.mdb.sample.reactapp.functions;

import com.mdb.sample.reactapp.model.ServayResult;
import lombok.extern.slf4j.Slf4j;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.function.BiFunction;

@Slf4j
public class FunctionUtils {

  public static final BiFunction<ResultSet,Integer,ServayResult> resultsMappingFunction=(rs , rowNum)->{
        ServayResult servayResult = new ServayResult();
        try {
            servayResult.setCatagory(rs.getString("category"));
            servayResult.setQuestionId(rs.getString("questionid"));
            servayResult.setYear(rs.getInt("year"));
            servayResult.setAvarage(rs.getDouble("avarage"));
        }catch (SQLException e){
            log.error("couldn't convert row results to POJO !! rowNum :: {} , errorMsg:: {}",rowNum,e.getMessage(),e);
        }
        return servayResult;
    };

}