{%- set _mod_docs_content_type = "PROCEDURE" %}
# Recovering from expired control plane certificates {id="dr-scenario-3-recovering-expired-certs_{{ context }}"}

You can restore kubelet certificates by manually approving pending `node-bootstrapper` certificate signing requests (CSRs) and, on user-provisioned installations, kubelet serving CSRs. Approved CSRs return nodes to a healthy state after control plane certificates expire. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have access to the {{ oc_first }}.

**Procedure**

1.  Get the list of current CSRs by running the following command:
    ```terminal
    $ oc get csr
    ```
    ```terminal title="Example output"
    NAME        AGE    SIGNERNAME                                    REQUESTOR                                                                   CONDITION
    csr-2s94x   8m3s   kubernetes.io/kubelet-serving                 system:node:<node_name>                                                     Pending
    csr-4bd6t   8m3s   kubernetes.io/kubelet-serving                 system:node:<node_name>                                                     Pending
    csr-4hl85   13m    kubernetes.io/kube-apiserver-client-kubelet   system:serviceaccount:openshift-machine-config-operator:node-bootstrapper   Pending
    csr-zhhhp   3m8s   kubernetes.io/kube-apiserver-client-kubelet   system:serviceaccount:openshift-machine-config-operator:node-bootstrapper   Pending
    ...
    ```

    In the example output, CSRs with a `SIGNERNAME` of `kubernetes.io/kubelet-serving` are kubelet serving CSRs. You see this CSR type on user-provisioned installations. CSRs with a `SIGNERNAME` of `kubernetes.io/kube-apiserver-client-kubelet` and a `node-bootstrapper` requestor are `node-bootstrapper` CSRs that you must approve to restore kubelet certificates.
1.  Review the details of a CSR to verify that it is valid by running the following command:
    ```terminal
    $ oc describe csr <csr_name>
    ```

    `<csr_name>` is the name of a CSR from the list of current CSRs.
1.  Approve each valid `node-bootstrapper` CSR by running the following command:
    ```terminal
    $ oc adm certificate approve <csr_name>
    ```
1.  For user-provisioned installations, approve each valid kubelet serving CSR by running the following command:
    ```terminal
    $ oc adm certificate approve <csr_name>
    ```