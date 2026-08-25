{%- set _mod_docs_content_type = "CONCEPT" %}
# Kiali and service mesh {id="ossm-kiali-service-mesh_{{ context }}"}

Installing Kiali via the Service Mesh on {{ product_title }} differs from community Kiali installations in multiple ways. These modifications are sometimes necessary to resolve issues, provide additional features, or to handle differences when deploying on {{ product_title }}.

*   Kiali has been enabled by default.
*   Ingress has been enabled by default.
*   Updates have been made to the Kiali ConfigMap.
*   Updates have been made to the ClusterRole settings for Kiali.
*   Do not edit the ConfigMap, because your changes might be overwritten by the {{ SMProductShortName }} or Kiali Operators. Files that the Kiali Operator manages have a `kiali.io/` label or annotation. Updating the Operator files should be restricted to those users with `cluster-admin` privileges. If you use {{ product_dedicated }}, updating the Operator files should be restricted to those users with `dedicated-admin` privileges.