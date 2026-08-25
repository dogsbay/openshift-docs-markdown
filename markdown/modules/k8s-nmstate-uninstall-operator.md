{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Kubernetes NMState Operator {id="k8s-nmstate-uninstall-operator_{{ context }}"}

Remove the Kubernetes NMState Operator and related resources when they are no longer needed. {._abstract}

You can use the {{ olm_first }} to uninstall the Kubernetes NMState Operator, but by design {{ olm }} does not delete any associated custom resource definitions (CRDs), custom resources (CRs), or API Services.

Before you uninstall the Kubernetes NMState Operator from the `Subcription` resource used by {{ olm }}, identify what Kubernetes NMState Operator resources to delete. This identification ensures that you can delete resources without impacting your running cluster.

If you need to reinstall the Kubernetes NMState Operator, see "Installing the Kubernetes NMState Operator by using the CLI" or "Installing the Kubernetes NMState Operator by using the web console".

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have installed the `jq` CLI tool.
*   You are logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Unsubscribe the Kubernetes NMState Operator from the `Subcription` resource by running the following command:
    ```terminal
    $ oc delete --namespace openshift-nmstate subscription kubernetes-nmstate-operator
    ```
1.  Find the `ClusterServiceVersion` (CSV) resource that associates with the Kubernetes NMState Operator:
    ```terminal
    $ oc get --namespace openshift-nmstate clusterserviceversion
    ```
    ```terminal title="Example output that lists a CSV resource"
    NAME                              	  DISPLAY                   	VERSION   REPLACES     PHASE
    kubernetes-nmstate-operator.v4.22.0   Kubernetes NMState Operator   4.22.0           	   Succeeded
    ```
1.  Delete the CSV resource. After you delete the file, {{ olm }} deletes certain resources, such as `RBAC`, that it created for the Operator.
    ```terminal
    $ oc delete --namespace openshift-nmstate clusterserviceversion kubernetes-nmstate-operator.v4.22.0
    ```
1.  Delete the `nmstate` CR and any associated `Deployment` resources by running the following commands:
    ```terminal
    $ oc -n openshift-nmstate delete nmstate nmstate
    ```
    ```terminal
    $ oc delete --all deployments --namespace=openshift-nmstate
    ```
1.  After you deleted the `nmstate` CR, remove the `nmstate-console-plugin` console plugin name from the `console.operator.openshift.io/cluster` CR.
    1.  Store the position of the `nmstate-console-plugin` entry that exists among the list of enable plugins by running the following command. The following command uses the `jq` CLI tool to store the index of the entry in an environment variable named `INDEX`:
        ```terminal
        INDEX=$(oc get console.operator.openshift.io cluster -o json | jq -r '.spec.plugins | to_entries[] | select(.value == "nmstate-console-plugin") | .key')
        ```
    1.  Remove the `nmstate-console-plugin` entry from the `console.operator.openshift.io/cluster` CR by running the following patch command:
        ```terminal
        $ oc patch console.operator.openshift.io cluster --type=json -p "[{\"op\": \"remove\", \"path\": \"/spec/plugins/$INDEX\"}]"
        ```
        *   `INDEX` is an auxiliary variable. You can specify a different name for this variable.
1.  Optional: To preserve CR instances so that you can restore them after you delete CRDs, enter the following command:
    ```terminal
    $ oc get -A nncp -o yaml > cluster-nncp.yaml
    ```

    :::important

    To reuse preserved CRs, such as NNCPs, you must uninstall the Kubernetes NMState Operator, reinstall the Kubernetes NMState Operator, and then run the following command to restore the CRs:

    ```terminal
    $ oc apply -f cluster-nncp.yaml
    ```
    
    :::

1.  Delete all the CRDs, such as `nmstates.nmstate.io`, by running the following commands:
    ```terminal
    $ oc delete crd nmstates.nmstate.io
    ```
    ```terminal
    $ oc delete crd nodenetworkconfigurationenactments.nmstate.io
    ```
    ```terminal
    $ oc delete crd nodenetworkstates.nmstate.io
    ```
    ```terminal
    $ oc delete crd nodenetworkconfigurationpolicies.nmstate.io
    ```
1.  Delete the namespace:
    ```terminal
    $ oc delete namespace openshift-nmstate
    ```