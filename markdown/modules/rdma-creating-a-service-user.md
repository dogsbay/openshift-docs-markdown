{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a service user {id="rdma-creating-a-service-user_{{ context }}"}

This section describes how to create a service account and user privileges for NVIDIA GPUDirect RDMA.

**Procedure**

1.  Generate a service account CRD to use in the `default` namespace:
    ```terminal
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: rdma
      namespace: default
    ```
1.  Create the account on your cluster by running the following command:
    ```terminal
    $ oc create -f default-serviceaccount.yaml 
    ```
    ```terminal title="Example output"
    serviceaccount/rdma created
    ```
1.  Add user privileges to the account by running the following command:
    ```terminal
    $ oc -n default adm policy add-scc-to-user privileged -z rdma
    ```
    ```terminal title="Example output"
    clusterrole.rbac.authorization.k8s.io/system:openshift:scc:privileged added: "rdma"
    ```