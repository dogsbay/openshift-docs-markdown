{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling metrics forwarding {id="hcp-cp-metrics-enable_{{ context }}"}

Enable metrics forwarding so that you can observe hosted control plane health from the hosted cluster monitoring stack. {._abstract}

If you are a hosted cluster administrator without management cluster access, ask a platform administrator enable metrics forwarding on your `HostedCluster` resource.

**Prerequisites**

*   You have a hosted cluster that is version 4.22 or later.
*   You have the {{ mce }} version 2.17 or later.
*   You are logged in to the management cluster. Alternatively, you can use a `kubeconfig` file with access to the namespace that contains the `HostedCluster` resource. The `HostedCluster` object exists on the management cluster; annotating it from a hosted cluster `kubeconfig` file fails or targets the wrong resource.

**Procedure**

*   Add the `hypershift.openshift.io/enable-metrics-forwarding=true` annotation to the `HostedCluster` resource on the management cluster by entering the following command:
    ```terminal
    $ oc annotate hostedcluster -n <hosted_cluster_namespace> <hosted_cluster_name> \
      hypershift.openshift.io/enable-metrics-forwarding=true
    ```

    Replace `<hosted_cluster_namespace>` with the namespace of the hosted cluster and `<hosted_cluster_name>` with the name of the hosted cluster.
*   To disable metrics forwarding, remove the annotation by entering the following command:
    ```terminal
    $ oc annotate hostedcluster -n <hosted_cluster_namespace> <hosted_cluster_name> \
      hypershift.openshift.io/enable-metrics-forwarding-
    ```