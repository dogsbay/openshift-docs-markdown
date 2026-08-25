{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding logs to an external Elasticsearch instance {id="cluster-logging-collector-log-forward-es_{{ context }}"}

You can forward logs to an external Elasticsearch instance in addition to, or instead of, the internal log store. You are responsible for configuring the external log aggregator to receive log data from {{ product_title }}.

To configure log forwarding to an external Elasticsearch instance, you must create a `ClusterLogForwarder` custom resource (CR) with an output to that instance, and a pipeline that uses the output. The external Elasticsearch output can use the HTTP (insecure) or HTTPS (secure HTTP) connection.

To forward logs to both an external and the internal Elasticsearch instance, create outputs and pipelines to the external instance and a pipeline that uses the `default` output to forward logs to the internal instance.


:::note

If you only want to forward logs to an internal Elasticsearch instance, you do not need to create a `ClusterLogForwarder` CR.

:::


**Prerequisites**

*   You must have a logging server that is configured to receive the logging data using the specified protocol or format.

**Procedure**

1.  Create or edit a YAML file that defines the `ClusterLogForwarder` CR:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: <log_forwarder_name> # (1)
      namespace: <log_forwarder_namespace> # (2)
    spec:
      serviceAccountName: <service_account_name> # (3)
      outputs:
       - name: elasticsearch-example # (4)
         type: elasticsearch # (5)
         elasticsearch:
           version: 8 # (6)
         url: http://elasticsearch.example.com:9200 # (7)
         secret:
           name: es-secret # (8)
      pipelines:
       - name: application-logs # (9)
         inputRefs: # (10)
         - application
         - audit
         outputRefs:
         - elasticsearch-example # (11)
         - default # (12)
         labels:
           myLabel: "myValue" # (13)
    # ...
    ```
    1.  In legacy implementations, the CR name must be `instance`. In multi log forwarder implementations, you can use any name.
    1.  In legacy implementations, the CR namespace must be `openshift-logging`. In multi log forwarder implementations, you can use any namespace.
    1.  The name of your service account. The service account is only required in multi log forwarder implementations if the log forwarder is not deployed in the `openshift-logging` namespace.
    1.  Specify a name for the output.
    1.  Specify the `elasticsearch` type.
    1.  Specify the Elasticsearch version. This can be `6`, `7`, or `8`.
    1.  Specify the URL and port of the external Elasticsearch instance as a valid absolute URL. You can use the `http` (insecure) or `https` (secure HTTP) protocol. If the cluster-wide proxy using the CIDR annotation is enabled, the output must be a server name or FQDN, not an IP Address.
    1.  For an `https` prefix, specify the name of the secret required by the endpoint for TLS communication. The secret must contain a `ca-bundle.crt` key that points to the certificate it represents. Otherwise, for `http` and `https` prefixes, you can specify a secret that contains a username and password. In legacy implementations, the secret must exist in the `openshift-logging` project. For more information, see the following "Example: Setting a secret that contains a username and password."
    1.  Optional: Specify a name for the pipeline.
    1.  Specify which log types to forward by using the pipeline: `application,` `infrastructure`, or `audit`.
    1.  Specify the name of the output to use when forwarding logs with this pipeline.
    1.  Optional: Specify the `default` output to send the logs to the internal Elasticsearch instance.
    1.  Optional: String. One or more labels to add to the logs.
1.  Apply the `ClusterLogForwarder` CR:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Example: Setting a secret that contains a username and password**

You can use a secret that contains a username and password to authenticate a secure connection to an external Elasticsearch instance.

For example, if you cannot use mutual TLS (mTLS) keys because a third party operates the Elasticsearch instance, you can use HTTP or HTTPS and set a secret that contains the username and password.

1.  Create a `Secret` YAML file similar to the following example. Use base64-encoded values for the `username` and `password` fields. The secret type is opaque by default.
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: openshift-test-secret
    data:
      username: <username>
      password: <password>
    # ...
    ```
1.  Create the secret:
    ```terminal
    $ oc create secret -n openshift-logging openshift-test-secret.yaml
    ```
1.  Specify the name of the secret in the `ClusterLogForwarder` CR:
    ```yaml
    kind: ClusterLogForwarder
    metadata:
      name: instance
      namespace: openshift-logging
    spec:
      outputs:
       - name: elasticsearch
         type: "elasticsearch"
         url: https://elasticsearch.secure.com:9200
         secret:
            name: openshift-test-secret
    # ...
    ```

    :::note

    In the value of the `url` field, the prefix can be `http` or `https`.
    
    :::

1.  Apply the CR object:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```