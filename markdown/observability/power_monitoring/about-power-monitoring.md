---
title: "About {{ PM_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About {{ PM_title }} {id="about-power-monitoring"}
{%- set context = "about-power-monitoring" %}

With {{ PM_title_c }}, you can track energy consumption across your cluster infrastructure. It provides granular power metrics for pods and namespaces to help you identify and optimize workload energy usage. {._abstract}


:::important

{{ PM_title_c }} is deprecated and will have no further releases or support.

:::


You can use {{ PM_title }} to monitor the power usage and identify power-consuming containers running in an {{ product_title }} cluster. {{ PM_shortname_c }} collects and exports energy-related system statistics from various components, such as CPU and DRAM. It provides estimates and granular power consumption data for Kubernetes pods and namespaces, and reads the power consumption of nodes.


:::note

The {{ PM_shortname }} documentation is available as a separate documentation set at [{{ PM_title_c }}](https://docs.redhat.com/en/documentation/power_monitoring_for_red_hat_openshift/latest).

:::