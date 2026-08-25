{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing to download the {{ product_title }} images {id="ztp-preparing-ocp-images_{{ context }}"}

To download {{ product_title }} container images, you need to know the multicluster engine version. When you use the `--du-profile` flag, you also need to specify the {{ rh_rhacm_first }} version running in the hub cluster that is going to provision the {{ sno }}. {._abstract}

**Prerequisites**

*   You have {{ rh_rhacm }} and the {{ mce_short }} installed.
*   You partitioned the storage device.
*   You have enough space for the images on the partitioned device.
*   You connected the bare-metal server to the Internet.
*   You have a valid pull secret.

**Procedure**

1.  Check the {{ rh_rhacm }} version and the multicluster engine version by running the following commands in the hub cluster:
    ```terminal
    $ oc get csv -A | grep -i advanced-cluster-management
    ```

    The following is example output:
    ```terminal
    open-cluster-management                            advanced-cluster-management.v2.6.3           Advanced Cluster Management for Kubernetes   2.6.3                 advanced-cluster-management.v2.6.3                Succeeded
    ```
    ```terminal
    $ oc get csv -A | grep -i multicluster-engine
    ```

    The following is example output:
    ```terminal
    multicluster-engine                                cluster-group-upgrades-operator.v0.0.3       cluster-group-upgrades-operator              0.0.3                                                                   Pending
    multicluster-engine                                multicluster-engine.v2.1.4                   multicluster engine for Kubernetes           2.1.4                 multicluster-engine.v2.0.3                        Succeeded
    multicluster-engine                                openshift-gitops-operator.v1.5.7             Red Hat OpenShift GitOps                     1.5.7                 openshift-gitops-operator.v1.5.6-0.1664915551.p   Succeeded
    multicluster-engine                                openshift-pipelines-operator-rh.v1.6.4       Red Hat OpenShift Pipelines                  1.6.4                 openshift-pipelines-operator-rh.v1.6.3            Succeeded
    ```
1.  To access the container registry, copy a valid pull secret on the server to be installed:
    1.  Create the `.docker` folder:
        ```terminal
        $ mkdir /root/.docker
        ```
    1.  Copy the valid pull in the `config.json` file to the previously created `.docker/` folder:
        ```terminal
        $ cp config.json /root/.docker/config.json
        ```

        `/root/.docker/config.json` is the default path where `podman` checks for the login credentials for the registry.


        :::note

        If you use a different registry to pull the required artifacts, you need to copy the proper pull secret.
        If the local registry uses TLS, you need to include the certificates from the registry as well.
        
        :::