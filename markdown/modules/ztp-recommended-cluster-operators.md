{%- set _mod_docs_content_type = "REFERENCE" %}
# Recommended cluster Operators {id="ztp-recommended-cluster-operators_{{ context }}"}

The following Operators are required for clusters running virtualized distributed unit (vDU) applications and are a part of the baseline reference configuration: {._abstract}

*   Node Tuning Operator (NTO). NTO packages functionality that was previously delivered with the Performance Addon Operator, which is now a part of NTO.
*   PTP Operator
*   SR-IOV Network Operator
*   Red Hat OpenShift Logging Operator
*   Local Storage Operator