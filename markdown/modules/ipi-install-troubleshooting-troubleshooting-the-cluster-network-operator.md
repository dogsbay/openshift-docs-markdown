{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting the Cluster Network Operator {id="troubleshooting-the-cluster-network-operator_{{ context }}"}

The Cluster Network Operator is responsible for deploying the networking components. It runs early in the installation process, after the control plane nodes have come up but before the installation program removes the bootstrap control plane. Issues with this Operator might indicate installation program issues.

**Procedure**

1.  Ensure the network configuration exists by running the following command:
    ```terminal
    $ oc get network -o yaml cluster
    ```

    If it does not exist, the installation program did not create it. To find out why, run the following command:
    ```terminal
    $ openshift-install create manifests
    ```

    Review the manifests to determine why the installation program did not create the network configuration.
1.  Ensure the network is running by entering the following command:
    ```terminal
    $ oc get po -n openshift-network-operator
    ```