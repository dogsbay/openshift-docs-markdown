{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the NBDE Tang Server Operator using CLI {id="installing-nbde-tang-server-operator-using-cli_{{ context }}"}

You can install the NBDE Tang Server Operator from the software catalog using the CLI.

**Prerequisites**

*   You must have `cluster-admin` privileges on an {{ product_title }} cluster.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Use the following command to list available Operators in the software catalog, and limit the output to Tang-related results:
    ```terminal
    $ oc get packagemanifests -n openshift-marketplace | grep tang
    ```
    ```terminal title="Example output"
    tang-operator           Red Hat
    ```

    In this case, the corresponding packagemanifest name is `tang-operator`.
1.  Create a `Subscription` object YAML file to subscribe a namespace to the NBDE Tang Server Operator, for example, `tang-operator.yaml`:
    ```yaml title="Example subscription YAML for tang-operator"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: tang-operator
      namespace: openshift-operators
    spec:
      channel: stable (1)
      installPlanApproval: Automatic
      name: tang-operator (2)
      source: redhat-operators (3)
      sourceNamespace: openshift-marketplace <4> 
    ```
    1.  Specify the channel name from where you want to subscribe the Operator.
    1.  Specify the name of the Operator to subscribe to.
    1.  Specify the name of the CatalogSource that provides the Operator.
    1.  The namespace of the CatalogSource. Use `openshift-marketplace` for the default software catalog sources.
1.  Apply the `Subscription` to the cluster:
    ```terminal
    $ oc apply -f tang-operator.yaml
    ```

**Verification**

*   Check that the NBDE Tang Server Operator controller runs in the `openshift-operators` namespace:
    ```terminal
    $ oc -n openshift-operators get pods
    ```
    ```terminal title="Example output"
    NAME                                                READY   STATUS    RESTARTS   AGE
    tang-operator-controller-manager-694b754bd6-4zk7x   2/2     Running   0          12s
    ```