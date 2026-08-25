{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the collector to listen for connections as a syslog server {id="log-collector-syslog-server_{{ context }}"}

You can configure your log collector to collect journal format infrastructure logs by specifying `syslog` as a receiver input in the `ClusterLogForwarder` custom resource (CR).

{%- set feature_name = "Syslog receiver input" %}
{% include "./snippets/logging-http-sys-input-support.md" %}

**Prerequisites**

*   You have administrator permissions.
*   You have installed the {{ oc_first }}.
*   You have installed the {{ clo }}.
*   You have created a `ClusterLogForwarder` CR.

**Procedure**

1.  Grant the `collect-infrastructure-logs` cluster role to the service account by running the following command:
    ```terminal title="Example binding command"
    $ oc adm policy add-cluster-role-to-user collect-infrastructure-logs -z logcollector
    ```
1.  Modify the `ClusterLogForwarder` CR to add configuration for the `syslog` receiver input:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
    # ...
    spec:
      serviceAccount:
        name: <service_account_name>
      inputs:
        - name: syslog-receiver # (1)
          type: receiver
          receiver:
            type: syslog # (2)
            port: 10514 # (3)
      outputs:
      - name: default-lokistack
        lokiStack:
          authentication:
            token:
              from: serviceAccount
          target:
            name: logging-loki
            namespace: openshift-logging
        tls:
          ca:
            key: service-ca.crt
            configMapName: openshift-service-ca.crt
        type: lokiStack
    # ...      
      pipelines: # (4)
        - name: syslog-pipeline
          inputRefs:
            - syslog-receiver
          outputRefs:
            - <output_name>
    # ...
    ```
    1.  Specify a name for your input receiver.
    1.  Specify the input receiver type as `syslog`.
    1.  Optional: Specify the port that the input receiver listens on. This must be a value between `1024` and `65535`.
    1.  Configure a pipeline for your input receiver.
1.  Apply the changes to the `ClusterLogForwarder` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

*   Verify that the collector is listening on the service that has a name in the `<clusterlogforwarder_resource_name>-<input_name>` format by running the following command:
    ```terminal
    $ oc get svc
    ```
    ```terminal title="Example output"
    NAME                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)            AGE
    collector                   ClusterIP   172.30.85.239    <none>        24231/TCP          33m
    collector-syslog-receiver   ClusterIP   172.30.216.142   <none>        10514/TCP          2m20s
    ```

    In this example output, the service name is `collector-syslog-receiver`.