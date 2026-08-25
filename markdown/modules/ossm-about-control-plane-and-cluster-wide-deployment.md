{%- set _mod_docs_content_type = "CONCEPT" %}
# About control plane and cluster-wide deployments {id="ossm-about-control-plane-and-cluster-wide-deployment_{{ context }}"}

A cluster-wide deployment contains a {{ SMProductShortName }} Control Plane that monitors resources for an entire cluster. Monitoring resources for an entire cluster closely resembles Istio functionality in that the control plane uses a single query across all namespaces to monitor Istio and Kubernetes resources. As a result, cluster-wide deployments decrease the number of requests sent to the API server.

You can configure the {{ SMProductShortName }} Control Plane for cluster-wide deployments using either the {{ product_title }} web console or the CLI.