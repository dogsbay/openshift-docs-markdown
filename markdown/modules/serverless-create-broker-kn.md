{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a broker by using the Knative CLI {id="serverless-create-broker-kn_{{ context }}"}

Brokers can be used in combination with triggers to deliver events from an event source to an event sink. Using the Knative (`kn`) CLI to create brokers provides a more streamlined and intuitive user interface over modifying YAML files directly. You can use the `kn broker create` command to create a broker.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

*   Create a broker:
    ```terminal
    $ kn broker create <broker_name>
    ```

**Verification**

1.  Use the `kn` command to list all existing brokers:
    ```terminal
    $ kn broker list
    ```
    ```terminal title="Example output"
    NAME      URL                                                                     AGE   CONDITIONS   READY   REASON
    default   http://broker-ingress.knative-eventing.svc.cluster.local/test/default   45s   5 OK / 5     True
    ```
1.  Optional: If you are using the {{ product_title }} web console, you can navigate to the **Topology** view in the **Developer** perspective, and observe that the broker exists:
    ![View the broker in the web console Topology view](/images/odc-view-broker.png)