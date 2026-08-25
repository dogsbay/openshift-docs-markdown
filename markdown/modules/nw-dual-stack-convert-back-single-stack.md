{%- set _mod_docs_content_type = "PROCEDURE" %}
# Converting to a single-stack cluster network {id="nw-dual-stack-convert-back-single-stack_{{ context }}"}

To revert dual-stack networking in {{ product_title }}, you can edit the cluster network configuration and remove the IPv4 or IPv6 blocks you added during dual-stack conversion. You can convert back only to the same single-stack family you had before dual-stack (IPv4 or IPv6). {._abstract}


:::important

If you originally converted your IPv4 single-stack cluster network to a dual-stack cluster, you can convert only back to the IPv4 single-stack cluster and not an IPv6 single-stack cluster network. The same restriction applies for converting back to an IPv6 single-stack cluster network.

:::


**Prerequisites**

*   You installed the OpenShift CLI (`oc`).
*   You are logged in to the cluster with a user with `cluster-admin` privileges.
*   Your cluster uses the OVN-Kubernetes network plugin.
*   The cluster nodes have IPv6 addresses.
*   You have enabled dual-stack networking.

**Procedure**

1.  Edit the `networks.config.openshift.io` custom resource (CR) by running the following command:
    ```terminal
    $ oc edit networks.config.openshift.io
    ```
1.  Remove the IPv4 or IPv6 configuration that you added to the `cidr` and the `hostPrefix` parameters from completing the "Converting to a dual-stack cluster network " procedure steps.