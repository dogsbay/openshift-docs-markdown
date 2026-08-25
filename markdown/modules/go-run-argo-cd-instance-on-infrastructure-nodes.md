{%- set _mod_docs_content_type = "PROCEDURE" %}

# Running the Argo CD instance at the cluster-level {id="run-argo-cd-instance-on-cluster_{{ context }}"}

The default Argo CD instance and the accompanying controllers, installed by the {{ gitops_title }} Operator, can now run on the infrastructure nodes of the cluster by setting a simple configuration toggle.

**Procedure**

1.  Label the existing nodes:
    ```terminal
    $ oc label node <node-name> node-role.kubernetes.io/infra=""
    ```
1.  Optional: If required, you can also apply taints and isolate the workloads on infrastructure nodes and prevent other workloads from scheduling on these nodes:
    ```terminal
    $ oc adm taint nodes -l node-role.kubernetes.io/infra \
    infra=reserved:NoSchedule infra=reserved:NoExecute
    ```
1.  Add the `runOnInfra` toggle in the `GitOpsService` custom resource:
    ```yaml
    apiVersion: pipelines.openshift.io/v1alpha1
    kind: GitopsService
    metadata:
      name: cluster
    spec:
      runOnInfra: true
    ```
1.  Optional: If taints have been added to the nodes, then add `tolerations` to the `GitOpsService` custom resource, for example:
    ```yaml
      spec:
        runOnInfra: true
        tolerations:
        - effect: NoSchedule
          key: infra
          value: reserved
        - effect: NoExecute
          key: infra
          value: reserved
    ```
1.  Verify that the workloads in the `openshift-gitops` namespace are now scheduled on the infrastructure nodes by viewing **Pods** → **Pod details** for any pod in the console UI.


:::note

Any `nodeSelectors` and `tolerations` manually added to the default Argo CD custom resource are overwritten by the toggle and `tolerations` in the `GitOpsService` custom resource.

:::