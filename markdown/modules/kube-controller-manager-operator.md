{%- set _mod_docs_content_type = "CONCEPT" %}
# Kubernetes Controller Manager Operator {id="kube-controller-manager-operator_{{ context }}"}

The Kubernetes Controller Manager Operator manages and updates the Kubernetes Controller Manager deployed on top of {{ product_title }}. The Operator is based on {{ product_title }} `library-go` framework and it is installed via the Cluster Version Operator (CVO). {._abstract}

It contains the following components:

*   Operator
*   Bootstrap manifest renderer
*   Installer based on static pods
*   Configuration observer

By default, the Operator exposes Prometheus metrics through the `metrics` service.