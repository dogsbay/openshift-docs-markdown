{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the collector to receive audit logs as an HTTP server {id="log6x-log-collector-http-server_{{ context }}"}

You can configure your log collector to listen for HTTP connections to only receive audit logs by specifying `http` as a receiver input in the `ClusterLogForwarder` custom resource (CR).

{%- set feature_name = "HTTP receiver input" %}
{% include "./snippets/logging-http-sys-input-support.md" %}

**Prerequisites**

*   You have administrator permissions.
*   You have installed the {{ oc_first }}.
*   You have installed the {{ clo }}.
*   You have created a `ClusterLogForwarder` CR.

**Procedure**

1.  Modify the `ClusterLogForwarder` CR to add configuration for the `http` receiver input:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
    # ...
    spec:
      inputs:
      - name: http-receiver (1)
        type: receiver
        receiver:
          type: http (2)
          port: 8443 (3)
          http:
            format: kubeAPIAudit (4)
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
      pipelines: (5)
        - name: http-pipeline
          inputRefs:
            - http-receiver
          outputRefs:
            - <output_name>
    # ...
    ```
    1.  Specify a name for your input receiver.
    1.  Specify the input receiver type as `http`.
    1.  Optional: Specify the port that the input receiver listens on. This must be a value between `1024` and `65535`. The default value is `8443`.
    1.  Currently, only the `kube-apiserver` webhook format is supported for `http` input receivers.
    1.  Configure a pipeline for your input receiver.
1.  Apply the changes to the `ClusterLogForwarder` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

1.  Verify that the collector is listening on the service that has a name in the  `<clusterlogforwarder_resource_name>-<input_name>` format by running the following command:
    ```terminal
    $ oc get svc
    ```
    ```terminal title="Example output"
    NAME                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)            AGE
    collector                 ClusterIP   172.30.85.239    <none>        24231/TCP          3m6s
    collector-http-receiver   ClusterIP   172.30.205.160   <none>        8443/TCP           3m6s
    ```

    In this example output, the service name is `collector-http-receiver`.
1.  Extract the certificate authority (CA) certificate file by running the following command:
    ```terminal
    $ oc extract cm/openshift-service-ca.crt -n <namespace>
    ```
1.  Use the `curl` command to send logs by running the following command:
    ```terminal
    $ curl --cacert <openshift_service_ca.crt> https://collector-http-receiver.<namespace>.svc:8443 -XPOST -d '{"<prefix>":"<msessage>"}'
    ```

    Replace `<openshift_service_ca.crt>` with the extracted CA certificate file.

    :::note

    You can only forward logs within a cluster by following the verification steps.
    
    :::