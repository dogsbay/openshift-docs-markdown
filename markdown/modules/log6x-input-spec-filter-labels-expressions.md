{%- set _mod_docs_content_type = "PROCEDURE" %}
# Filtering application logs at input by including the label expressions or a matching label key and values {id="log6x-input-spec-filter-labels-expressions_{{ context }}"}

You can include the application logs based on the label expressions or a matching label key and its values by using the `input` selector.

**Procedure**

1.  Add a configuration for a filter to the `input` spec in the `ClusterLogForwarder` CR.

    The following example shows how to configure the `ClusterLogForwarder` CR to include logs based on label expressions or matched label key/values:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    # ...
    spec:
      serviceAccount:
        name: <service_account_name>
      inputs:
        - name: mylogs
          application:
            selector:
              matchExpressions:
              - key: env (1)
                operator: In (2)
                values: ["prod", "qa"] (3)
              - key: zone
                operator: NotIn
                values: ["east", "west"]
              matchLabels: (4)
                app: one
                name: app1
          type: application
    # ...
    ```
    1.  Specifies the label key to match.
    1.  Specifies the operator. Valid values include: `In`, `NotIn`, `Exists`, and `DoesNotExist`.
    1.  Specifies an array of string values. If the `operator` value is either `Exists` or `DoesNotExist`, the value array must be empty.
    1.  Specifies an exact key or value mapping.
1.  Apply the `ClusterLogForwarder` CR by running the following command:

    ```terminal
    $ oc apply -f <filename>.yaml
    ```