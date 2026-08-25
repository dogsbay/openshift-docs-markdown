{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging {id="telco-core-logging_{{ context }}"}

The Cluster Logging Operator enables collection and shipping of logs off the node for remote archival and analysis. {._abstract}


New in this release

:   *   There are no reference design updates in this release.

Description
:   The Cluster Logging Operator enables collection and shipping of logs off the node for remote archival and analysis.
    The reference configuration uses Kafka to ship audit and infrastructure logs to a remote archive.


Limits and requirements
:   Not applicable


Engineering considerations
:   *   The impact of cluster CPU use is based on the number or size of logs generated and the amount of log filtering configured.
    *   The reference configuration does not include shipping of application logs.
    The inclusion of application logs in the configuration requires you to evaluate the application logging rate and have sufficient additional CPU resources allocated to the reserved set.