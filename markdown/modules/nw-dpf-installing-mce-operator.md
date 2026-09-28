{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the multicluster engine Operator {id="nw-dpf-installing-mce-operator_{{ context }}"}

If you did not install the multicluster engine Operator by using the Assisted Installer, install it from the OpenShift CLI. You do not need to install Red Hat Advanced Cluster Management or create a `MultiClusterHub` resource to use the multicluster engine Operator. If the Assisted Installer already created a `MultiClusterEngine` resource, skip this procedure. {._abstract}

**Prerequisites**

*   You have access to the management cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).
*   No `MultiClusterEngine` resource exists on the cluster.
*   If you already have an existing `MultiClusterEngine` resource with a different name, note that the following verification commands use `mce`. Substitute your resource’s name where needed.

**Procedure**

1.  Check which multicluster engine channels are available from the `redhat-operators` catalog:
    ```terminal
    $ oc get packagemanifests -n openshift-marketplace -l catalog=redhat-operators \
      -o jsonpath='{.items[?(@.metadata.name=="multicluster-engine")].status.channels[*].name}{"\n"}'
    ```

    The following example uses `stable-2.17`, which is the channel used by this deployment. If your catalog does not offer this channel, select a supported channel for your OpenShift version before continuing.
1.  Create a file named `mce-operator.yaml` with the following content:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: multicluster-engine
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: multicluster-engine
      namespace: multicluster-engine
    spec:
      targetNamespaces:
      - multicluster-engine
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: multicluster-engine
      namespace: multicluster-engine
    spec:
      channel: stable-2.17
      name: multicluster-engine
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      installPlanApproval: Automatic
    ```

    If you selected a different supported channel, replace `stable-2.17` with that channel in the file.
1.  Apply the file:
    ```terminal
    $ oc apply -f mce-operator.yaml
    ```
1.  Wait until the multicluster engine Operator CSV reports `Succeeded` and the `MultiClusterEngine` CRD is established:
    ```terminal
    $ oc get csv -n multicluster-engine
    $ oc wait crd/multiclusterengines.multicluster.openshift.io --for=create --timeout=10m
    $ oc wait crd/multiclusterengines.multicluster.openshift.io --for=condition=Established --timeout=5m
    ```

    Repeat the CSV check until its phase is `Succeeded` before creating the custom resource.
1.  Create a file named `mce.yaml` with the following content:
    ```yaml
    apiVersion: multicluster.openshift.io/v1
    kind: MultiClusterEngine
    metadata:
      name: mce
    spec:
      overrides:
        components:
        - name: hypershift
          enabled: true
    ```
1.  Apply the file:
    ```terminal
    $ oc apply -f mce.yaml
    ```

**Verification**

*   Wait for the `MultiClusterEngine` resource to become available:
    ```terminal
    $ oc wait multiclusterengine/mce --for=jsonpath='{.status.phase}'=Available --timeout=15m
    ```
*   Verify that the hosted control plane component is enabled:
    ```terminal
    $ oc get multiclusterengine mce -o jsonpath='{.spec.overrides.components[?(@.name=="hypershift")].enabled}{"\n"}'
    ```
    ```terminal title="Example output"
    true
    ```

**Additional resources**
{._additional-resources}

*   [Installing the multicluster engine Operator while connected online](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.17/html/clusters/cluster_mce_overview#installing-while-connected-online-mce)