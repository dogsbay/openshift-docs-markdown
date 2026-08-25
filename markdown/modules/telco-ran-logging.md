{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging {id="telco-ran-logging_{{ context }}"}

Use logging to collect logs from the far edge node for remote analysis. {._abstract}


New in this release
:   *   No reference design updates in this release

Description
:   Use logging to collect logs from the far edge node for remote analysis.
    The recommended log collector is Vector.


Engineering considerations
:   *   Handling logs beyond the infrastructure and audit logs, for example, from the application workload requires additional CPU and network bandwidth based on additional logging rate.
    *   As of {{ product_title }} 4.14, Vector is the reference log collector.
    Use of fluentd in the RAN use models is deprecated.