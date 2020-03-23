# react-app

sample react app for visualizing data from hive(prod profile) or mysql(dev profile). \
Backend implemented using springBoot web,JDBC Template(data sources : mysql (dev profile), Hive (prod profile), just to ease with faster development).

# Steps to run

steps to run: \
step1: download or clone repo. \
step2: cd react-app \
step 3: mvn clean install \
step4: if hive is running in local at localhost:10000/default \
java -jar -Dspring.profiles.active=prod react-app.jar \
if mysql running localhost:3306/metricsdb then run below \
java -jar -Dspring.profiles.active=dev react-app.jar \
see ui at http://localhost:9100 \
