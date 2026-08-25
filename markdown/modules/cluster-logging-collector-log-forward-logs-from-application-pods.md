{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding application logs from specific pods {id="cluster-logging-collector-log-forward-logs-from-application-pods_{{ context }}"}

As a cluster administrator, you can use Kubernetes pod labels to gather log data from specific pods and forward it to a log collector.

Suppose that you have an application composed of pods running alongside other pods in various namespaces. If those pods have labels that identify the application, you can gather and output their log data to a specific log collector.

To specify the pod labels, you use one or more `matchLabels` key-value pairs. If you specify multiple key-value pairs, the pods must match all of them to be selected.

**Procedure**

1.  Create or edit a YAML file that defines the `ClusterLogForwarder` CR object. In the file, specify the pod labels using simple equality-based selectors under `inputs[].name.application.selector.matchLabels`, as shown in the following example.
    ```yaml title="Example ClusterLogForwarder CR YAML file"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: <log_forwarder_name> (1)
      namespace: <log_forwarder_namespace> (2)
    spec:
      pipelines:
        - inputRefs: [ myAppLogData ] (3)
          outputRefs: [ default ] (4)
      inputs: (5)
        - name: myAppLogData
          application:
            selector:
              matchLabels: (6)
                environment: production
                app: nginx
            namespaces: (7)
            - app1
            - app2
      outputs: (8)
        - <output_name>
        ...
    ```
    1.  In legacy implementations, the CR name must be `instance`. In multi log forwarder implementations, you can use any name.
    1.  In legacy implementations, the CR namespace must be `openshift-logging`. In multi log forwarder implementations, you can use any namespace.
    1.  Specify one or more comma-separated values from `inputs[].name`.
    1.  Specify one or more comma-separated values from `outputs[]`.
    1.  Define a unique `inputs[].name` for each application that has a unique set of pod labels.
    1.  Specify the key-value pairs of pod labels whose log data you want to gather. You must specify both a key and value, not just a key. To be selected, the pods must match all the key-value pairs.
    1.  Optional: Specify one or more namespaces.
    1.  Specify one or more outputs to forward your log data to.
1.  Optional: To restrict the gathering of log data to specific namespaces, use `inputs[].name.application.namespaces`, as shown in the preceding example.
1.  Optional: You can send log data from additional applications that have different pod labels to the same pipeline.
    1.  For each unique combination of pod labels, create an additional `inputs[].name` section similar to the one shown.
    1.  Update the `selectors` to match the pod labels of this application.
    1.  Add the new `inputs[].name` value to `inputRefs`. For example:
        ```
        - inputRefs: [ myAppLogData, myOtherAppLogData ]
        ```
1.  Create the CR object:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```

**Additional resources**
{._additional-resources}

*   For more information on `matchLabels` in Kubernetes, see [Resources that support set-based requirements](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements).