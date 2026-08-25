{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing your cluster to gather support data {id="installation-preparing-restricted-cluster-to-gather-support-data_{{ context }}"}

You can prepare a cluster on a restricted network to gather support data by importing the default must-gather image and configuring access to the mirror registry. {._abstract}

Clusters using a restricted network must import the default must-gather image to gather debugging data for Red Hat support. The must-gather image is not imported by default, and clusters on a restricted network do not have access to the internet to pull the latest image from a remote repository.

**Procedure**

1.  If you have not added your mirror registry’s trusted CA to your cluster’s image configuration object as part of the Cluster Samples Operator configuration, perform the following steps:
    1.  Create the cluster’s image configuration object:
        ```terminal
        $ oc create configmap registry-config --from-file=${MIRROR_ADDR_HOSTNAME}..5000=$path/ca.crt -n openshift-config
        ```
    1.  Add the required trusted CAs for the mirror in the cluster’s image
    configuration object:
        ```terminal
        $ oc patch image.config.openshift.io/cluster --patch '{"spec":{"additionalTrustedCA":{"name":"registry-config"}}}' --type=merge
        ```
1.  Import the default must-gather image from your installation payload:
    ```terminal
    $ oc import-image is/must-gather -n openshift
    ```

    When running the `oc adm must-gather` command, use the `--image` flag and point to the payload image, as in the following example:
    ```terminal
    $ oc adm must-gather --image=$(oc adm release info --image-for must-gather)
    ```