{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a broker by labeling a namespace {id="serverless-creating-broker-labeling_{{ context }}"}

Brokers can be used in combination with triggers to deliver events from an event source to an event sink. You can create the `default` broker automatically by labelling a namespace that you own or have write permissions for.


:::note

Brokers created using this method are not removed if you remove the label. You must manually delete them.

:::


**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   Install the OpenShift CLI (`oc`).
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

{% if openshift_dedicated or openshift_rosa %}
*   You have cluster or dedicated administrator permissions.
{% endif %}

**Procedure**

*   Label a namespace with `eventing.knative.dev/injection=enabled`:
    ```terminal
    $ oc label namespace <namespace> eventing.knative.dev/injection=enabled
    ```

**Verification**

You can verify that the broker has been created successfully by using the `oc` CLI, or by observing it in the **Topology** view in the web console.

1.  Use the `oc` command to get the broker:
    ```terminal
    $ oc -n <namespace> get broker <broker_name>
    ```
    ```terminal title="Example command"
    $ oc -n default get broker default
    ```
    ```terminal title="Example output"
    NAME      READY     REASON    URL                                                                     AGE
    default   True                http://broker-ingress.knative-eventing.svc.cluster.local/test/default   3m56s
    ```
1.  Optional: If you are using the {{ product_title }} web console, you can navigate to the **Topology** view in the **Developer** perspective, and observe that the broker exists:
    ![View the broker in the web console Topology view](/images/odc-view-broker.png)