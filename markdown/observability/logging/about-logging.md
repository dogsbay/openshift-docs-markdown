---
title: About Logging
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# About Logging {id="about-logging"}
{%- set context = "cluster-logging" %}

As a cluster administrator, you can deploy {{ logging }} on your {{ product_title }} cluster, and use it to collect and aggregate node system audit logs, application container logs, and infrastructure logs.

You can use {{ logging }} to perform the following tasks:

*   Forward logs to your chosen log outputs, including on-cluster, Red&#160;Hat managed log storage.
*   Visualize your log data in the {{ product_title }} web console.


:::note

Because {{ logging }} releases on a different cadence from {{ product_title }}, the {{ logging }} documentation is available as a separate documentation set at [Red&#160;Hat OpenShift {{ logging_uc }}](https://docs.redhat.com/en/documentation/red_hat_openshift_logging/).

:::