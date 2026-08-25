{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ pipelines_shortname }} Operator using the CLI {id="op-installing-pipelines-operator-using-the-cli_{{ context }}"}

You can install {{ pipelines_title }} Operator from the software catalog using the CLI.

**Procedure**

1.  Create a Subscription object YAML file to subscribe a namespace to the {{ pipelines_title }} Operator,
for example, `sub.yaml`:
    ```yaml title="Example Subscription"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-pipelines-operator
      namespace: openshift-operators
    spec:
      channel:  <channel name> (1)
      name: openshift-pipelines-operator-rh (2)
      source: redhat-operators (3)
      sourceNamespace: openshift-marketplace (4)
    ```
    1.  The channel name of the Operator. The `pipelines-<version>` channel is the default channel. For example, the default channel for {{ pipelines_title }} Operator version `1.7` is `pipelines-1.7`. The `latest` channel enables installation of the most recent stable version of the {{ pipelines_title }} Operator.
    1.  Name of the Operator to subscribe to.
    1.  Name of the CatalogSource that provides the Operator.
    1.  Namespace of the CatalogSource. Use `openshift-marketplace` for the default software catalog sources.
1.  Create the Subscription object:
    ```
    $ oc apply -f sub.yaml
    ```

    The {{ pipelines_title }} Operator is now installed in the default target namespace `openshift-operators`.