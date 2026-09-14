{%- set _mod_docs_content_type = "PROCEDURE" %}
# Approve worker node CSRs {id="nw-dpf-approving-worker-csrs_{{ context }}"}

You must approve the pending certificate signing requests (CSRs) for worker nodes that join the management cluster. {._abstract}


:::note

Worker nodes provisioned by using a `BareMetalHost` resource do not have an associated `Machine` object, so the default OpenShift machine approver does not automatically approve their certificate signing requests (CSRs).
You must manually approve the `kube-apiserver-client-kubelet` CSR from the `node-bootstrapper` service account and the `kubelet-serving` CSR from the node for each worker node.

:::


**Prerequisites**

*   You have access to the management cluster as a user with the `cluster-admin` role.
*   You have installed the `oc` CLI.
*   Worker nodes are booted and attempting to join the management cluster.

**Procedure**

1.  Watch for pending CSRs:
    ```terminal
    $ oc get csr -w
    ```
1.  Approve all pending CSRs:
    ```terminal
    $ oc get csr -o go-template='{{range .items}}{{if not .status}}{{.metadata.name}}{{"\n"}}{{end}}{{end}}' | xargs oc adm certificate approve
    ```
    ```terminal title="Example output"
    certificatesigningrequest.certificates.k8s.io/csr-27bgq approved
    certificatesigningrequest.certificates.k8s.io/csr-69g65 approved
    certificatesigningrequest.certificates.k8s.io/csr-7r862 approved
    certificatesigningrequest.certificates.k8s.io/csr-f5vk7 approved
    ```

    Repeat this step until no pending CSRs remain.
    Each node typically generates multiple CSRs.
1.  Verify that the worker nodes joined the cluster:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME               STATUS     ROLES                         AGE     VERSION
    host-worker1       NotReady   worker                        68s     v1.35.6
    host-worker2       NotReady   worker                        75s     v1.35.6
    master-0           Ready      control-plane,master,worker   4d22h   v1.35.6
    master-1           Ready      control-plane,master,worker   4d21h   v1.35.6
    master-2           Ready      control-plane,master,worker   4d22h   v1.35.6
    ```

    :::note

    The worker nodes show a status of `NotReady` until the DPU provisioning process is fully completed and all OVN-Kubernetes CNI components on the host and the DPU are running.
    Do not proceed to the next steps until all pending CSRs are approved.
    
    :::