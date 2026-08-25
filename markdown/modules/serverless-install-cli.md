{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ ServerlessOperatorName }} from the CLI {id="serverless-install-cli_{{ context }}"}

You can install the {{ ServerlessOperatorName }} from the software catalog by using the CLI. Installing this Operator enables you to install and use Knative components.

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
*   Your cluster has the Marketplace capability enabled or the Red Hat Operator catalog source configured manually.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}

*   You have logged in to the {{ product_title }} cluster.

**Procedure**

1.  Create a YAML file containing `Namespace`, `OperatorGroup`, and `Subscription` objects to subscribe a namespace to the {{ ServerlessOperatorName }}. For example, create the file `serverless-subscription.yaml` with the following content:
    ```yaml title="Example subscription"
    ---
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-serverless
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: serverless-operators
      namespace: openshift-serverless
    spec: {}
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: serverless-operator
      namespace: openshift-serverless
    spec:
      channel: stable (1)
      name: serverless-operator (2)
      source: redhat-operators (3)
      sourceNamespace: openshift-marketplace (4)
    ```
    1.  The channel name of the Operator. The `stable` channel enables installation of the most recent stable version of the {{ ServerlessOperatorName }}.
    1.  The name of the Operator to subscribe to. For the {{ ServerlessOperatorName }}, this is always `serverless-operator`.
    1.  The name of the CatalogSource that provides the Operator. Use `redhat-operators` for the default software catalog sources.
    1.  The namespace of the CatalogSource. Use `openshift-marketplace` for the default software catalog sources.
1.  Create the `Subscription` object:
    ```
    $ oc apply -f serverless-subscription.yaml
    ```

**Verification**

Check that the cluster service version (CSV) has reached the `Succeeded` phase:

```yaml title="Example command"
$ oc get csv
```

```yaml title="Example output"
NAME                          DISPLAY                        VERSION   REPLACES                      PHASE
serverless-operator.v1.25.0   Red Hat OpenShift Serverless   1.25.0    serverless-operator.v1.24.0   Succeeded
```