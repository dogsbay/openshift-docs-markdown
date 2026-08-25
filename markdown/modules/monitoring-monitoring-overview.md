# Monitoring overview {id="monitoring-overview_{{ context }}"}

{{ product_title }} ships with a pre-configured, pre-installed, and self-updating monitoring stack that is based on the [Prometheus](https://prometheus.io/) open source project and its wider eco-system. It provides monitoring of cluster components and ships with a set of alerts to immediately notify the cluster administrator about any occurring problems and a set of [Grafana](https://grafana.com/) dashboards.

The monitoring stack includes these components:

*   Cluster Monitoring Operator
*   Prometheus Operator
*   Prometheus
*   Prometheus Adapter
*   Alertmanager
*   kube-state-metrics
*   node-exporter
*   Grafana

The {{ product_title }} Cluster Monitoring Operator (CMO) is the central component of the stack. It watches over the deployed monitoring components and resources and ensures that they are always up to date.

The Prometheus Operator (PO) creates, configures, and manages Prometheus and Alertmanager instances. It also automatically generates monitoring target configurations based on familiar Kubernetes label queries.

The Prometheus Adapter exposes cluster resource metrics (CPU and memory utilization) API for horizontal pod autoscaling.

Node-exporter is an agent deployed on every node to collect metrics about it.

The kube-state-metrics exporter agent converts Kubernetes objects to metrics consumable by Prometheus.

All the components of the monitoring stack are monitored by the stack. Additionally, the stack monitors:

*   cluster-version-operator
*   image-registry
*   kube-apiserver
*   kube-apiserver-operator
*   kube-controller-manager
*   kube-controller-manager-operator
*   kube-scheduler
*   kubelet
*   monitor-ovn-kubernetes
*   openshift-apiserver
*   openshift-apiserver-operator
*   openshift-controller-manager
*   openshift-controller-manager-operator
*   openshift-svcat-controller-manager-operator
*   telemeter-client

All these components are automatically updated.

Other {{ product_title }} framework components might be exposing metrics as well. See their respective documentation.


:::note

To be able to deliver updates with guaranteed compatibility, configurability of the {{ product_title }} Monitoring stack is limited to the explicitly available options.

:::