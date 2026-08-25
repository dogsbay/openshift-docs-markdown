{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ clo }} by using the CLI {id="cluster-logging-deploy-cli_{{ context }}"}

You can use the {{ oc_first }} to install the {{ clo }}.

**Prerequisites**

{% if openshift_origin %}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the OperatorHub custom resource (CR) as shown in **Configuring {{ product_title }} to use Red Hat Operators**.
{% endif %}

*   You have administrator permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `Namespace` object as a YAML file:
    ```yaml title="Example Namespace object"
    apiVersion: v1
    kind: Namespace
    metadata:
      name: <name> (1)
      annotations:
        openshift.io/node-selector: ""
      labels:
        openshift.io/cluster-monitoring: "true"
    ```
    1.  You must specify `openshift-logging` as the name of the namespace for logging versions 5.7 and earlier versions. For logging 5.8 and later versions, you can use any name.
1.  Apply the `Namespace` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create an `OperatorGroup` object as a YAML file:
    ```yaml title="Example OperatorGroup object"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: cluster-logging
      namespace: openshift-logging (1)
    spec:
      targetNamespaces: [ ] (2)
    ```
    1.  Ensure that the `namespace` field is set to `openshift-logging`.
    1.  For logging versions 5.7 and earlier, set `targetNamespaces` to `openshift-logging`. For logging versions 5.8 and later, the default installation mode is all namespaces on the cluster, or specify a list of namespaces separated by a comma.
1.  Apply the `OperatorGroup` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `Subscription` object to subscribe the namespace to the {{ clo }}:
    ```yaml title="Example Subscription object"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: cluster-logging
      namespace: openshift-logging (1)
    spec:
      channel: stable (2)
      name: cluster-logging
      source: redhat-operators (3)
      sourceNamespace: openshift-marketplace
    ```
    1.  You must specify the `openshift-logging` namespace for logging versions 5.7 and older. For logging 5.8 and later versions, you can use any namespace.
    1.  Specify `stable` or `stable-x.y` as the channel.
    1.  Specify `redhat-operators`. If your {{ product_title }} cluster is installed on a restricted network, also known as a disconnected cluster, specify the name of the `CatalogSource` object you created when you configured the Operator Lifecycle Manager (OLM).
1.  Apply the subscription by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    The {{ clo }} is installed to the `openshift-logging` namespace.

**Verification**

1.  Run the following command:
    ```terminal
    $ oc get csv -n <namespace>
    ```
1.  Observe the output and confirm that the {{ clo }} exists in the namespace:
    ```terminal title="Example output"
    NAMESPACE                                               NAME                                         DISPLAY                  VERSION               REPLACES   PHASE
    ...
    openshift-logging                                       clusterlogging.5.8.0-202007012112.p0         OpenShift Logging          5.8.0-202007012112.p0              Succeeded
    ...
    ```