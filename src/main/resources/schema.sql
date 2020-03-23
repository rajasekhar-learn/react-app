DROP TABLE IF EXISTS servay_analysis_all_results;
DROP TABLE IF EXISTS servay_analysis_female_results;

CREATE TABLE servay_analysis_all_results (
  category VARCHAR(250) NOT NULL,
  questionid VARCHAR(250) NOT NULL,
  year INT NOT NULL,
  avarage DOUBLE
);
CREATE TABLE servay_analysis_female_results (
  category VARCHAR(250) NOT NULL,
  questionid VARCHAR(250) NOT NULL,
  year INT NOT NULL,
  avarage DOUBLE
);
