{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the OVN-Kubernetes credential request and role bindings {id="nw-dpf-creating-ovnk-credentials_{{ context }}"}

Create a `DPUServiceCredentialRequest` custom resource and role bindings to enable OVN-Kubernetes DPU service authentication with the management cluster API server. {._abstract}

**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.

**Procedure**

1.  Create a file named `dpucredentialreq.yaml` with the following content:
    ```yaml
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceCredentialRequest
    metadata:
      name: ovn-dpu
      namespace: dpf-operator-system
    spec:
      serviceAccount:
        name: ovn-kubernetes-node-dpu-service
        namespace: openshift-ovn-kubernetes
      duration: 24h
      type: tokenFile
      secret:
        name: ovn-dpu
        namespace: dpf-operator-system
      metadata:
        labels:
          dpu.nvidia.com/image-pull-secret: ""
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: RoleBinding
    metadata:
      name: openshift-ovn-kubernetes-node-limited-dpu-service
      namespace: openshift-ovn-kubernetes
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: Role
      name: openshift-ovn-kubernetes-node-limited
    subjects:
    - kind: ServiceAccount
      name: ovn-kubernetes-node-dpu-service
      namespace: openshift-ovn-kubernetes
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: ovn-kubernetes-node-limited-binding
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: openshift-ovn-kubernetes-node-limited
    subjects:
    - kind: ServiceAccount
      name: ovn-kubernetes-node-dpu-service
      namespace: openshift-ovn-kubernetes
    ```
1.  Apply the resource file:
    ```terminal
    $ oc apply -f dpucredentialreq.yaml
    ```

**Verification**

*   Verify that the credential request and role bindings are created:
    ```terminal
    $ oc get dpuservicecredentialrequest -n dpf-operator-system
    ```
    ```terminal
    $ oc get clusterrolebinding ovn-kubernetes-node-limited-binding
    ```