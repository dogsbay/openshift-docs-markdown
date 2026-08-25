{%- set _mod_docs_content_type = "REFERENCE" %}
# Kubernetes Scheduler Operator {id="cluster-kube-scheduler-operator_{{ context }}"}

The Kubernetes Scheduler Operator manages and updates the Kubernetes Scheduler deployed on top of {{ product_title }}. The Operator is based on the {{ product_title }} `library-go` framework and it is installed with the Cluster Version Operator (CVO).

The Kubernetes Scheduler Operator contains the following components:

*   Operator
*   Bootstrap manifest renderer
*   Installer based on static pods
*   Configuration observer

By default, the Operator exposes Prometheus metrics through the metrics service.

## Project {id="_project"}

[cluster-kube-scheduler-operator](https://github.com/openshift/cluster-kube-scheduler-operator)

## Configuration {id="_configuration"}

The configuration for the Kubernetes Scheduler is the result of merging:

*   a default configuration.
*   an observed configuration from the spec `schedulers.config.openshift.io`.

All of these are sparse configurations, invalidated JSON snippets which are merged to form a valid configuration at the end.