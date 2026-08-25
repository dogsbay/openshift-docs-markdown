{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the hosted cluster {id="hcp-openstack-accessing_{{ context }}"}

You can access hosted clusters on {{ rh_openstack_first }} by extracting the kubeconfig secret directly from resources by using the `oc` CLI. {._abstract}

The _hosted cluster (hosting)_ namespace has hosted cluster resources and the access secrets. The _hosted control plane_ namespace is where the hosted control plane runs.

The secret name formats are as follows:

*   `kubeconfig` secret: `<hosted_cluster_namespace>-<name>-admin-kubeconfig`. For example, `clusters-hypershift-demo-admin-kubeconfig`.
*   `kubeadmin` password secret: `<hosted_cluster_namespace>-<name>-kubeadmin-password`. For example, `clusters-hypershift-demo-kubeadmin-password`.

The `kubeconfig` secret has a Base64-encoded `kubeconfig` field. The `kubeadmin` password secret is also Base64-encoded; you can extract it and then use the password to log in to the API server or console of the hosted cluster.

**Prerequisites**

*   The `oc` CLI is installed.

**Procedure**

1.  Extract the `admin-kubeconfig` secret by entering the following command:
    ```terminal
    $ oc extract -n <hosted_cluster_namespace> \
      secret/<hosted_cluster_name>-admin-kubeconfig \
      --to=./hostedcluster-secrets --confirm
    ```
    ```text title="Example output"
    hostedcluster-secrets/kubeconfig
    ```
1.  View a list of nodes of the hosted cluster to verify your access by entering the following command:
    ```terminal
    $ oc --kubeconfig ./hostedcluster-secrets/kubeconfig get nodes
    ```