{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure authorization for the hosted cluster {id="nw-dpf-configuring-hosted-cluster-auth_{{ context }}"}

DPF services running on DPU nodes require privileged access to host networking and devices.
You must create a `ClusterRoleBinding` on the hosted cluster that grants the `privileged` security context constraint (SCC) to all service accounts in the `dpf-operator-system` namespace. {._abstract}

**Prerequisites**

*   You have access to the hosted cluster as a user with the `cluster-admin` role.
*   You have installed the `oc` CLI.
*   The hosted cluster kubeconfig file is available.
*   DPU provisioning has reached the `DPU Cluster Config` stage.

**Procedure**

1.  Switch to the hosted cluster context:
    ```terminal
    $ export KUBECONFIG=$HOSTED_CLUSTER_NAME.kubeconfig
    ```
1.  Create a file named `dpu-cluster-scc.yaml` with the following content:
    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: dpf-system-scc-privileged
      labels:
        app.kubernetes.io/component: rbac
        app.kubernetes.io/part-of: dpu-services
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: system:openshift:scc:privileged
    subjects:
    - kind: Group
      apiGroup: rbac.authorization.k8s.io
      name: system:serviceaccounts:dpf-operator-system
    ```
1.  Apply the resource file on the hosted cluster:
    ```terminal
    $ oc apply -f dpu-cluster-scc.yaml
    ```