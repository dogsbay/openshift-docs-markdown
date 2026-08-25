{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a broker that was created by injection {id="serverless-deleting-broker-injection_{{ context }}"}

If you create a broker by injection and later want to delete it, you must delete it manually. Brokers created by using a namespace label or trigger annotation are not deleted permanently if you remove the label or annotation.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Remove the `eventing.knative.dev/injection=enabled` label from the namespace:
    ```terminal
    $ oc label namespace <namespace> eventing.knative.dev/injection-
    ```

    Removing the annotation prevents Knative from recreating the broker after you delete it.
1.  Delete the broker from the selected namespace:
    ```terminal
    $ oc -n <namespace> delete broker <broker_name>
    ```

**Verification**

*   Use the `oc` command to get the broker:
    ```terminal
    $ oc -n <namespace> get broker <broker_name>
    ```
    ```terminal title="Example command"
    $ oc -n default get broker default
    ```
    ```terminal title="Example output"
    No resources found.
    Error from server (NotFound): brokers.eventing.knative.dev "default" not found
    ```