{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Windows Machine Config Operator using the CLI {id="installing-wmco-using-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to install the Windows Machine Config Operator (WMCO). {._abstract}


:::note

Dual NIC is not supported on WMCO-managed Windows instances.

:::


**Procedure**

1.  Create a namespace for the WMCO.
    1.  Create a `Namespace` object YAML file for the WMCO. For example, `wmco-namespace.yaml`:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: openshift-windows-machine-config-operator
          labels:
            openshift.io/cluster-monitoring: "true"
        ```

        where

        `metadata.name`
        :   Specifies the namespace to create the secret. You should deploy the WMCO in the `openshift-windows-machine-config-operator` namespace.

        `metadata.labels`
        :   Specifies the label required for enabling cluster monitoring for the WMCO.

    1.  Create the namespace:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```

        For example:
        ```terminal
        $ oc create -f wmco-namespace.yaml
        ```
1.  Create the Operator group for the WMCO.
    1.  Create an `OperatorGroup` object YAML file. For example, `wmco-og.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: windows-machine-config-operator
          namespace: openshift-windows-machine-config-operator
        spec:
          targetNamespaces:
          - openshift-windows-machine-config-operator
        ```
    1.  Create the Operator group:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```

        For example:
        ```terminal
        $ oc create -f wmco-og.yaml
        ```
1.  Subscribe the namespace to the WMCO.
    1.  Create a `Subscription` object YAML file. For example, `wmco-sub.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: windows-machine-config-operator
          namespace: openshift-windows-machine-config-operator
        spec:
          channel: "stable"
          installPlanApproval: "Automatic"
          name: "windows-machine-config-operator"
          source: "redhat-operators"
          sourceNamespace: "openshift-marketplace"
        ```

        where:

        `spec.channel`
        :   Specifies `stable` as the channel.

        `spec.installPlanApproval`
        :   Specifies an approval strategy. You can set `Automatic` or `Manual`.

        `spec.source`
        :   Specifies the `redhat-operators` catalog source, which contains the `windows-machine-config-operator` package manifests. If your {{ product_title }} is installed on a restricted network, also known as a disconnected cluster, specify the name of the `CatalogSource` object you created when you configured the Operator LifeCycle Manager (OLM).

        `spec.sourceNamespace`
        :   Specifies the namespace of the catalog source. Use `openshift-marketplace` for the default software catalog sources.

    1.  Create the subscription:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```

        For example:
        ```terminal
        $ oc create -f wmco-sub.yaml
        ```

        The WMCO is now installed to the `openshift-windows-machine-config-operator`.
1.  Verify the WMCO installation:
    ```terminal
    $ oc get csv -n openshift-windows-machine-config-operator
    ```
    ```terminal title="Example output"
    NAME                                    DISPLAY                           VERSION   REPLACES   PHASE
    windows-machine-config-operator.2.0.0   Windows Machine Config Operator   2.0.0                Succeeded
    ```