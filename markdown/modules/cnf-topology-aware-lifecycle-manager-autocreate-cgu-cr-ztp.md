{%- set _mod_docs_content_type = "PROCEDURE" %}
# About the auto-created ClusterGroupUpgrade CR for {{ ztp }} {id="talo-precache-autocreated-cgu-for-ztp_{{ context }}"}

{{ cgu_operator }} has a controller called `ManagedClusterForCGU` that monitors the `Ready` state of the `ManagedCluster` CRs on the hub cluster and creates the `ClusterGroupUpgrade` CRs for {{ ztp_first }}. {._abstract}

For any managed cluster in the `Ready` state without a `ztp-done` label applied, the `ManagedClusterForCGU` controller automatically creates a `ClusterGroupUpgrade` CR in the `ztp-install` namespace with its associated {{ rh_rhacm }} policies that are created during the {{ ztp }} process. {{ cgu_operator }} then remediates the set of configuration policies that are listed in the auto-created `ClusterGroupUpgrade` CR to push the configuration CRs to the managed cluster.

If there are no policies for the managed cluster at the time when the cluster becomes `Ready`, a `ClusterGroupUpgrade` CR with no policies is created. Upon completion of the `ClusterGroupUpgrade` the managed cluster is labeled as `ztp-done`. If there are policies that you want to apply for that managed cluster, manually create a `ClusterGroupUpgrade` as a Day 2 operation.

**Procedure**

*   View the auto-created `ClusterGroupUpgrade` CR for {{ ztp }}:

    The following example shows an auto-created `ClusterGroupUpgrade` CR for {{ ztp }}:
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      generation: 1
      name: spoke1
      namespace: ztp-install
      ownerReferences:
      - apiVersion: cluster.open-cluster-management.io/v1
        blockOwnerDeletion: true
        controller: true
        kind: ManagedCluster
        name: spoke1
        uid: 98fdb9b2-51ee-4ee7-8f57-a84f7f35b9d5
      resourceVersion: "46666836"
      uid: b8be9cd2-764f-4a62-87d6-6b767852c7da
    spec:
      actions:
        afterCompletion:
          addClusterLabels:
            ztp-done: ""
          deleteClusterLabels:
            ztp-running: ""
          deleteObjects: true
        beforeEnable:
          addClusterLabels:
            ztp-running: ""
      clusters:
      - spoke1
      enable: true
      managedPolicies:
      - common-spoke1-config-policy
      - common-spoke1-subscriptions-policy
      - group-spoke1-config-policy
      - spoke1-config-policy
      - group-spoke1-validator-du-policy
      preCaching: false
      remediationStrategy:
        maxConcurrency: 1
        timeout: 240
    ```
    *   `ztp-done: ""` is applied to the managed cluster when {{ cgu_operator }} completes the cluster configuration.
    *   `ztp-running: ""` is applied to the managed cluster when {{ cgu_operator }} starts deploying the configuration policies.