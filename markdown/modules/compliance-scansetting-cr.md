{%- set _mod_docs_content_type = "CONCEPT" %}
# `ScanSetting` Custom Resource {id="compliance-scansetting-cr_{{ context }}"}

You can configure the scan limits attribute of the `ScanSetting` custom resource to override the default CPU and memory limits of scanner pods to meet your environment’s resource requirements. {._abstract}

The Compliance Operator uses defaults of 500Mi memory and 100m CPU for the scanner container, and 200Mi memory and 100m CPU for the `api-resource-collector` container. To set the memory limits of the Operator, modify the `Subscription` object if installed through OLM or the Operator deployment itself.


:::important

Increasing the memory limit for the Compliance Operator or the scanner pods is needed if the default limits are not sufficient and the Operator or scanner pods are ended by the Out Of Memory (OOM) process. For more information, see Increasing Compliance Operator resource limits.

:::