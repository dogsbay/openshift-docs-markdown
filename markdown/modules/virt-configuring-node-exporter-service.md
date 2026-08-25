{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the node exporter service {id="virt-configuring-node-exporter-service_{{ context }}"}

The node-exporter agent is deployed on every virtual machine in the cluster from which you want to collect metrics. Configure the node-exporter agent as a service to expose internal metrics and processes that are associated with virtual machines. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in to the cluster as a user with `cluster-admin` privileges.
*   Create the `cluster-monitoring-config` `ConfigMap` object in the `openshift-monitoring` project.
*   Configure the `user-workload-monitoring-config` `ConfigMap` object in the `openshift-user-workload-monitoring` project by setting `enableUserWorkload` to `true`.

**Procedure**

1.  Create the `Service` YAML file. In the following example, the file is called `node-exporter-service.yaml`.
    ```yaml
    kind: Service
    apiVersion: v1
    metadata:
      name: node-exporter-service
      namespace: dynamation
      labels:
        servicetype: metrics
    spec:
      ports:
        - name: exmet
          protocol: TCP
          port: 9100
          targetPort: 9100
      type: ClusterIP
      selector:
        monitor: metrics
    ```
    *   `metadata.name` defines the node-exporter service that exposes the metrics from the virtual machines.
    *   `metadata.namespace` defines the namespace where the service is created.
    *   `metadata.labels.servicetype` defines the label for the service. The `ServiceMonitor` uses this label to match this service.
    *   `spec.ports.name` defines the name given to the port that exposes metrics on port 9100 for the `ClusterIP` service.
    *   `spec.ports.port` defines the target port used by `node-exporter-service` to listen for requests.
    *   `spec.ports.targetPort` defines the TCP port number of the virtual machine that is configured with the `monitor` label.
    *   `spec.selector.monitor` defines the label used to match the virtual machine’s pods. In this example, any virtual machine’s pod with the label `monitor` and a value of `metrics` will be matched.
1.  Create the node-exporter service:
    ```terminal
    $ oc create -f node-exporter-service.yaml
    ```