{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ gcp_wid_short }} authentication for applications on {{ gcp_short }} {id="nodes-pods-short-term-auth-configuring-gcp_{{ context }}"}

You can configure {{ gcp_wid_short }} authentication so that applications on a {{ gcp_short }} cluster can authenticate with Google Cloud services by using short-term credentials instead of long-lived service account keys. {._abstract}

To configure this authentication method, complete the following tasks:

*   Configure access in {{ gcp_short }}.
*   Create an {{ product_title }} service account that can use this access.
*   Deploy customer workloads that authenticate with {{ gcp_wid_short }}.