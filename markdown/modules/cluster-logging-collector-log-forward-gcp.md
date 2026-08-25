{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding logs to {{ gcp_first }} {id="cluster-logging-collector-log-forward-gcp_{{ context }}"}

You can forward logs to [{{ gcp_full }} Logging](https://cloud.google.com/logging/docs/basic-concepts) in addition to, or instead of, the internal default {{ product_title }} log store.


:::note

Using this feature with Fluentd is not supported.

:::


**Prerequisites**

*   {{ clo }} 5.5.1 and later

**Procedure**

1.  Create a secret using your [Google service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).
    ```terminal
    $ oc -n openshift-logging create secret generic gcp-secret --from-file google-application-credentials.json=_<your_service_account_key_file.json>_
    ```
1.  Create a `ClusterLogForwarder` Custom Resource YAML using the template below:
    ```yaml
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: <log_forwarder_name> (1)
      namespace: <log_forwarder_namespace> (2)
    spec:
      serviceAccountName: <service_account_name> (3)
      outputs:
        - name: gcp-1
          type: googleCloudLogging
          secret:
            name: gcp-secret
          googleCloudLogging:
            projectId : "openshift-gce-devel" (4)
            logId : "app-gcp" (5)
      pipelines:
        - name: test-app
          inputRefs: (6)
            - application
          outputRefs:
            - gcp-1
    ```
    1.  In legacy implementations, the CR name must be `instance`. In multi log forwarder implementations, you can use any name.
    1.  In legacy implementations, the CR namespace must be `openshift-logging`. In multi log forwarder implementations, you can use any namespace.
    1.  The name of your service account. The service account is only required in multi log forwarder implementations if the log forwarder is not deployed in the `openshift-logging` namespace.
    1.  Set a `projectId`, `folderId`, `organizationId`, or `billingAccountId` field and its corresponding value, depending on where you want to store your logs in the [{{ gcp_short }} resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy).
    1.  Set the value to add to the `logName` field of the [Log Entry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry).
    1.  Specify which log types to forward by using the pipeline: `application`, `infrastructure`, or `audit`.

**Additional resources**
{._additional-resources}

*   [{{ gcp_full }} Billing Documentation](https://cloud.google.com/billing/docs/concepts)
*   [{{ gcp_full }} Logging Query Language Documentation](https://cloud.google.com/logging/docs/view/logging-query-language)