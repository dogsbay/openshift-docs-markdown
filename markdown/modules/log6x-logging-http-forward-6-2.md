{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding logs over HTTP {id="logging-http-forward-6-2_{{ context }}"}

To enable forwarding logs over HTTP, specify `http` as the output type in the `ClusterLogForwarder` custom resource (CR).

**Procedure**

*   Create or edit the `ClusterLogForwarder` CR using the template below:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: <log_forwarder_name>
      namespace: <log_forwarder_namespace>
    spec:
      managementState: Managed
      outputs:
      - name: <output_name>
        type: http
        http:
          headers:  (1)
              h1: v1
              h2: v2
          authentication:
            username:
              key: username
              secretName: <http_auth_secret>
            password:
              key: password
              secretName: <http_auth_secret>
          timeout: 300
          proxyURL: <proxy_url> (2)
          url: <url> (3)
        tls:
          insecureSkipVerify: (4)
          ca:
            key: <ca_certificate>
            secretName: <secret_name> (5)
      pipelines:
        - inputRefs:
            - application
          name: pipe1
          outputRefs:
            - <output_name>  (6)
      serviceAccount:
        name: <service_account_name> (7)
    ```
    1.  Additional headers to send with the log record.
    1.  Optional: URL of the HTTP/HTTPS proxy that should be used to forward logs over http or https from this output. This setting overrides any default proxy settings for the cluster or the node.
    1.  Destination address for logs.
    1.  Values are either `true` or `false`.
    1.  Secret name for destination credentials.
    1.  This value should be the same as the output name.
    1.  The name of your service account.