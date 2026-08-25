{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating node pools in a hosted cluster {id="hcp-update-node-pools_{{ context }}"}

You can update your version of {{ product_title }} by updating the node pools in your hosted cluster. The node pool version must not surpass the hosted control plane version. {._abstract}

The `.spec.release` field in the `NodePool` custom resource (CR) shows the version of a node pool.

**Procedure**

*   Change the `spec.release.image` value in the node pool by entering the following command:
    ```terminal
    $ oc patch nodepool <node_pool_name> -n <hosted_cluster_namespace> \
      --type=merge \
      -p '{"spec":{"nodeDrainTimeout":"60s","release":{"image":"<openshift_release_image>"}}}'
    ```
*   Replace `<node_pool_name>` with your node pool name and `<hosted_cluster_namespace>` with your hosted cluster namespace.
*   The `<openshift_release_image>` variable specifies the new {{ product_title }} release image that you want to upgrade to, for example, `quay.io/openshift-release-dev/ocp-release:<4.y.z>-x86_64`. Replace `<4.y.z>` with the supported {{ product_title }} version.

**Verification**

*   To verify that the new version was rolled out, check the `.status.conditions` value in the node pool by running the following command:
    ```terminal
    $ oc get -n <hosted_cluster_namespace> nodepool <node_pool_name> -o yaml
    ```
    ```terminal title="Example output"
    status:
     conditions:
     - lastTransitionTime: "2024-05-20T15:00:40Z"
           message: 'Using release image: quay.io/openshift-release-dev/ocp-release:4.20.0-x86_64'
           reason: AsExpected
           status: "True"
           type: ValidReleaseImage
    ```