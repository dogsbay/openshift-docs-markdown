{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a LogFileMetricExporter resource {id="log6x-creating-logfilesmetricexporter_{{ context }}"}

To generate metrics from the logs produced by running containers, you must create a `LogFileMetricExporter` custom resource (CR).

If you do not create the `LogFileMetricExporter` CR, you might see a **No datapoints found** message in the {{ product_title }} web console dashboard for **Produced Logs**.

**Prerequisites**

*   You have administrator permissions.
*   You have installed the {{ clo }}.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `LogFileMetricExporter` CR as a YAML file:
    ```yaml title="Example LogFileMetricExporter CR"
    apiVersion: logging.openshift.io/v1alpha1
    kind: LogFileMetricExporter
    metadata:
      name: instance
      namespace: openshift-logging
    spec:
      nodeSelector: {} # (1)
      resources: # (2)
        limits:
          cpu: 500m
          memory: 256Mi
        requests:
          cpu: 200m
          memory: 128Mi
      tolerations: [] # (3)
    # ...
    ```
    1.  Optional: The `nodeSelector` stanza defines which pods are scheduled on which nodes.
    1.  The `resources` stanza defines resource requirements for the `LogFileMetricExporter` CR.
    1.  Optional: The `tolerations` stanza defines the tolerations that the pods accept.
1.  Apply the `LogFileMetricExporter` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```