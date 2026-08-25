{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing a {{ product_title }} cluster by using a break glass credential {id="rosa-hcp-sts-accessing-a-break-glass-cred-cli_{{ context }}"}

Use the new `kubeconfig` from the break glass credential to gain temporary admin access to a {{ product_title }} cluster. {._abstract}

**Prerequisites**

*   You have access to a {{ product_title }} cluster with external authentication enabled. For more information, see _Creating a {{ product_title }} cluster that uses direct authentication with an external OIDC identity provider_.
*   You have installed the `oc` and the `kubectl` CLIs.
*   You have configured the new `kubeconfig`. For more information, see _Creating a break glass credential for a {{ product_title }} cluster_.

**Procedure**

1.  Access the details for the cluster:
    ```terminal
    $ rosa describe break-glass-credential <break_glass_credential_id> -c <cluster_name>  --kubeconfig > $KUBECONFIG
    ```
1.  List the nodes from the cluster:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                        STATUS   ROLES   AGE   VERSION
    ip-10-0-0-27.ec2.internal   Ready    worker  8m    v1.28.7+f1b5f6c
    ip-10-0-0-67.ec2.internal   Ready    worker  9m    v1.28.7+f1b5f6c
    ```
1.  Verify you have the correct credentials:
    ```terminal
    $ kubectl auth whoami
    ```
    ```terminal title="Example output"
    ATTRIBUTE    VALUE
    Username     system:customer-break-glass:test-user
    Groups       [system:masters system:authenticated]
    ```
1.  Apply the `ClusterRoleBinding` for the groups defined in the external OIDC provider. The `ClusterRoleBinding` maps the `rosa-hcp-admins` group that is created in Microsoft Entra ID to a group in the {{ product_title }} cluster.
    ```terminal
    $ oc apply -f - <<EOF
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: rosa-hcp-admins
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: cluster-admin
    subjects:
    - apiGroup: rbac.authorization.k8s.io
      kind: Group
      name: f715c264-ab90-45d5-8a29-2e91a609a895
    EOF
    ```

    The output of this command is:
    ```terminal
    clusterrolebinding.rbac.authorization.k8s.io/rosa-hcp-admins created
    ```

    :::note

    After applying the `ClusterRoleBinding`, the {{ product_title }} cluster is configured and the `rosa` CLI and {{ hybrid_console_url }} authenticate through the external OIDC provider. You can now start assigning roles and deploying applications on the cluster.
    
    :::