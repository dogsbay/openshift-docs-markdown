{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing and deploying {{ tekton_hub }} on a {{ product_title }} cluster {id="installing-and-deploying-tekton-hub-on-an-openshift-cluster_{{ context }}"}

{{ tekton_hub }} is an optional component; cluster administrators cannot install it using the `TektonConfig` custom resource (CR). To install and manage {{ tekton_hub }}, use the `TektonHub` CR. {._abstract}

You can install {{ tekton_hub }} on your cluster using two modes:

*   _Without_ login authorization and ratings for {{ tekton_hub }} artifacts
*   _with_ login authorization and ratings for {{ tekton_hub }} artifacts


:::note

If you are using Github Enterprise or Gitlab Enterprise, install and deploy {{ tekton_hub }} in the same network as the enterprise server. For example, if the enterprise server is running behind a VPN, deploy {{ tekton_hub }} on a cluster that is also behind the VPN.

:::