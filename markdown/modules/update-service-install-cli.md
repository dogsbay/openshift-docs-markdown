{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OpenShift Update Service Operator by using the CLI {id="update-service-install-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to install the OpenShift Update Service Operator. {._abstract}

**Procedure**

1.  Create a namespace for the OpenShift Update Service Operator:
    1.  Create a `Namespace` object YAML file, for example, `update-service-namespace.yaml`, for the OpenShift Update Service Operator:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: openshift-update-service
          annotations:
            openshift.io/node-selector: ""
          labels:
            openshift.io/cluster-monitoring: "true"
        ```

        Set the `openshift.io/cluster-monitoring` label to `"true"` to enable Operator-recommended cluster monitoring on this namespace.
    1.  Create the namespace:
        ```terminal
        $ oc create -f <filename>.yaml
        ```

        For example:
        ```terminal
        $ oc create -f update-service-namespace.yaml
        ```
1.  Install the OpenShift Update Service Operator by creating the following objects:
    1.  Create an `OperatorGroup` object YAML file, for example, `update-service-operator-group.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: update-service-operator-group
          namespace: openshift-update-service
        spec:
          targetNamespaces:
          - openshift-update-service
        ```
    1.  Create an `OperatorGroup` object:
        ```terminal
        $ oc -n openshift-update-service create -f <filename>.yaml
        ```

        For example:
        ```terminal
        $ oc -n openshift-update-service create -f update-service-operator-group.yaml
        ```
    1.  Create a `Subscription` object YAML file, for example, `update-service-subscription.yaml`:
        ```yaml title="Example Subscription"
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: update-service-subscription
          namespace: openshift-update-service
        spec:
          channel: v1
          installPlanApproval: "Automatic"
          source: "redhat-operators"
          sourceNamespace: "openshift-marketplace"
          name: "cincinnati-operator"
        ```

        where:

        `spec.source`
        :   Specifies the name of the catalog source that provides the Operator. For clusters that do not use a custom Operator Lifecycle Manager (OLM), specify `redhat-operators`. If your {{ product_title }} cluster is installed in a disconnected environment, specify the name of the `CatalogSource` object created when you configured Operator Lifecycle Manager (OLM).

    1.  Create the `Subscription` object:
        ```terminal
        $ oc create -f <filename>.yaml
        ```

        For example:
        ```terminal
        $ oc -n openshift-update-service create -f update-service-subscription.yaml
        ```

        The OpenShift Update Service Operator is installed to the `openshift-update-service` namespace and targets the `openshift-update-service` namespace.
1.  Verify the Operator installation:
    ```terminal
    $ oc -n openshift-update-service get clusterserviceversions
    ```
    ```terminal title="Example output"
    NAME                             DISPLAY                    VERSION   REPLACES   PHASE
    update-service-operator.v4.6.0   OpenShift Update Service   4.6.0                Succeeded
    ...
    ```

    If the OpenShift Update Service Operator is listed, the installation was successful. The version number might be different from shown.