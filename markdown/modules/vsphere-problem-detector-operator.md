{%- set operator_name = "vSphere Problem Detector Operator" -%}

{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ operator_name }} {id="vsphere-problem-detector-operator_{{ context }}"}

The {{ operator_name }} checks clusters that are deployed on vSphere for common installation and misconfiguration issues that are related to storage. {._abstract}


:::note

The {{ operator_name }} is only started by the Cluster Storage Operator when the Cluster Storage Operator detects that the cluster is deployed on vSphere.

:::


## Configuration {id="_configuration"}

No configuration is required.

## Notes {id="_notes"}

*   The Operator supports {{ product_title }} installations on vSphere.
*   The Operator uses the `vsphere-cloud-credentials` to communicate with vSphere.
*   The Operator performs checks that are related to storage.

{%- set operator_name = "" -%}