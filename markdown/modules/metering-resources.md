# Metering resources {id="metering-resources_{{ context }}"}

Metering has many resources, which can be used to manage the deployment and installation of Metering, as well as the reporting functionality Metering provides.

Metering is managed using the following CustomResourceDefinitions (CRDs):

|     |     |
| --- | --- |
| **MeteringConfig** | Configures the Metering stack for deployment. Contains customizations and configuration options to control each component that makes up the Metering stack. |
| **Reports** | Controls what query to use, when, and how often the query should be run, and where to store the results. |
| **ReportQueries** | Contains the SQL queries used to perform analysis on the data contained with in ReportDataSources. |
| **ReportDataSources** | Controls the data available to ReportQueries and Reports. Allows configuring access to different databases for use within Metering. |