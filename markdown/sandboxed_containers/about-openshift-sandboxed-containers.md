---
title: "About {{ osc }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About {{ osc }} {id="about-openshift-sandboxed-containers"}

{%- set context = "about-openshift-sandboxed-containers" %}

{{ osc }} provide security by running containerized applications in lightweight virtual machines. This architecture isolates your workloads from other workloads on the cluster and does not require significant changes to your existing workflows.

Confidential Containers extend {{ osc }} and provide an additional layer of security. They ensure that your workloads are isolated from hypervisors and cloud providers. Confidential Containers protect data in use by leveraging hardware-based Trusted Execution Environments, which are verified by the Trustee attestation service.


:::note

Because {{ osc }} releases on a different cadence from {{ product_title }}, its documentation is now available as a separate documentation set at [Red Hat {{ osc }}](https://docs.redhat.com/en/documentation/openshift_sandboxed_containers).

:::