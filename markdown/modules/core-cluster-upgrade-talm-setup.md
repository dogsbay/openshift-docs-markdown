{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing {{ rh_rhacm }} policies and placement rules for cluster updates {id="core-cluster-upgrade-talm-setup_{{ context }}"}

You can organize your Git repository, configure cluster labels, and create placement rules to target clusters for policy-based updates. {._abstract}

**Prerequisites**

*   {{ rh_rhacm }} hub cluster is deployed and managing target clusters. For more information, see [Red&#160;Hat Advanced Cluster Management for Kubernetes documentation](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/).
*   {{ cgu_operator_full }} ({{ cgu_operator }}) is installed on the {{ rh_rhacm }} hub cluster. For more information, see "Installing {{ cgu_operator_full }} by using the CLI".
*   You have a Git repository for storing update policies with appropriate access controls.
*   You have cluster-admin privileges on the {{ rh_rhacm }} hub cluster.
*   The `oc` CLI tool is installed and configured.

**Procedure**

1.  Prepare your Git repository structure similar to the following example:
    ```text
    upgrade-policies/
    ├── policies/
    │   ├── zstream/
    │   │   └── upgrade-4.20.1-policy.yaml
    │   ├── ystream/
    │   │   └── upgrade-4.20-policy.yaml
    │   └── eus/
    │       └── upgrade-4.20-eus-policy.yaml
    └── cgu/
        ├── core-zstream-upgrade.yaml
        ├── core-ystream-upgrade.yaml
        └── core-eus-upgrade.yaml
    ```

    :::note

    If you are using Kustomize for policy management with Argo CD or Flux, you can add a `kustomization.yaml` file to manage policy overlays.
    This file is optional if you apply policies directly with `oc apply`.
    
    :::

1.  Create a `Placement` rule so that update policies can be bound to clusters through labels.

    :::note

    If you use PolicyGenerator with Argo CD or a ZTP pipeline, `Placement` and `PlacementBinding` resources are generated automatically from your PolicyGenerator configuration. The following manual steps are provided for environments that do not use PolicyGenerator or for reference when troubleshooting placement issues.
    
    :::


    The following example uses the label `upgrade-version-to-4-21=""` to bind a policy to a cluster:
    ```yaml
    apiVersion: cluster.open-cluster-management.io/v1beta1
    kind: Placement
    metadata:
      name: openshift-upgrade-placement
      namespace: openshift-upgrade-policies
      annotations:
        policy.open-cluster-management.io/description: |
          Placement rule for OpenShift upgrade policies. Targets clusters with
          the label "upgrade-version-to-4-21" for 4.20 to 4.21 upgrades.
    spec:
      predicates:
        - requiredClusterSelector:
            labelSelector:
              matchLabels:
                upgrade-version-to-4-21: ""
    ```
1.  Create a `PlacementBinding` resource to connect the policies to the placement rule:
    ```yaml
    apiVersion: policy.open-cluster-management.io/v1
    kind: PlacementBinding
    metadata:
      name: openshift-upgrade-placement-binding
      namespace: openshift-upgrade-policies
      annotations:
        policy.open-cluster-management.io/description: |
          Binding that connects OpenShift upgrade policies to their placement rule.
          This binding ensures that both the main upgrade policy and pre-upgrade
          health check policy are applied to the same set of target clusters.
    placementRef:
      name: openshift-upgrade-placement
      kind: Placement
      apiGroup: cluster.open-cluster-management.io
    subjects:
      - name: openshift-upgrade-4.21-policy
        kind: Policy
        apiGroup: policy.open-cluster-management.io
      - name: pre-upgrade-health-check-policy
        kind: Policy
        apiGroup: policy.open-cluster-management.io
    ```

    A single policy, placement rule, and placement binding set can be bound to multiple clusters by adding the matching label to each cluster.
1.  Add an update label to your target clusters and verify by running the following commands:
    ```terminal
    $ oc label managedcluster <cluster_name> upgrade-version-to-4-21=""
    $ oc get managedcluster <cluster_name> -o jsonpath='{.metadata.labels}'
    ```

    The following example shows the output:
    ```terminal
    {
      "app.kubernetes.io/instance": "clusters",
      "cluster.open-cluster-management.io/clusterset": "default",
      "name": "test1",
      "ocp-version": "4.20",
      "openshiftVersion": "4.20.15",
      "upgrade-version-to-4-21": "",
      "upgrade-version-to-4-22": "",
      "unpause-worker-mcp": ""
    }
    ```
1.  Optional: Label clusters by site location for topology awareness by running the following command:
    ```terminal
    $ oc label managedcluster <cluster_name> site=<site_name>
    ```
1.  Create and apply a `ManagedClusterSet` resource for update targets:
    ```yaml
    apiVersion: cluster.open-cluster-management.io/v1beta2
    kind: ManagedClusterSet
    metadata:
      name: core-bm-clusters
    spec:
      clusterSelector:
        selectorType: LabelSelector
        labelSelector:
          matchLabels:
            cluster-type: bare-metal-core
    ```

    Apply the `ManagedClusterSet` resource by running the following command:
    ```terminal
    $ oc apply -f managedclusterset.yaml
    ```

**Verification**

*   Verify that {{ cgu_operator }} is active, cluster labels are applied, and the `ManagedClusterSet` resource exists by running the following commands:
    ```terminal
    $ oc get pods -n openshift-operators | grep cluster-group-upgrades
    $ oc get managedclusters --show-labels
    $ oc get managedclusterset core-bm-clusters
    ```

    The following example shows the output:
    ```terminal
    cluster-group-upgrades-controller-manager-5d7b9c8f7d-abc12   2/2     Running   0          5m
    ```