{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the collector to receive audit logs as an HTTP server {id="log-collector-http-server_{{ context }}"}

You can configure your log collector to listen for HTTP connections and receive audit logs as an HTTP server by specifying `http` as a receiver input in the `ClusterLogForwarder` custom resource (CR). This enables you to use a common log store for audit logs that are collected from both inside and outside of your {{ product_title }} cluster.

**Prerequisites**

*   You have administrator permissions.
*   You have installed the {{ oc_first }}.
*   You have installed the {{ clo }}.
*   You have created a `ClusterLogForwarder` CR.

**Procedure**

1.  Modify the `ClusterLogForwarder` CR to add configuration for the `http` receiver input:
    ```yaml title="Example ClusterLogForwarder CR if you are using a multi log forwarder deployment"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
    # ...
    spec:
      serviceAccountName: <service_account_name>
      inputs:
        - name: http-receiver (1)
          receiver:
            type: http (2)
            http:
              format: kubeAPIAudit (3)
              port: 8443 (4)
      pipelines: (5)
        - name: http-pipeline
          inputRefs:
            - http-receiver
    # ...
    ```
    1.  Specify a name for your input receiver.
    1.  Specify the input receiver type as `http`.
    1.  Currently, only the `kube-apiserver` webhook format is supported for `http` input receivers.
    1.  Optional: Specify the port that the input receiver listens on. This must be a value between `1024` and `65535`. The default value is `8443` if this is not specified.
    1.  Configure a pipeline for your input receiver.
    ```yaml title="Example ClusterLogForwarder CR if you are using a legacy deployment"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: instance
      namespace: openshift-logging
    spec:
      inputs:
        - name: http-receiver (1)
          receiver:
            type: http (2)
            http:
              format: kubeAPIAudit (3)
              port: 8443 (4)
      pipelines: (5)
      - inputRefs:
        - http-receiver
        name: http-pipeline
    # ...
    ```
    1.  Specify a name for your input receiver.
    1.  Specify the input receiver type as `http`.
    1.  Currently, only the `kube-apiserver` webhook format is supported for `http` input receivers.
    1.  Optional: Specify the port that the input receiver listens on. This must be a value between `1024` and `65535`. The default value is `8443` if this is not specified.
    1.  Configure a pipeline for your input receiver.
1.  Apply the changes to the `ClusterLogForwarder` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```