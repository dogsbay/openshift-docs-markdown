{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the hub cluster to use unauthenticated registries {id="ztp-configuring-the-hub-cluster-to-use-unauthenticated-registries_{{ context }}"}

You can configure the hub cluster to use unauthenticated registries.
Unauthenticated registries does not require authentication to access and download images. {._abstract}

**Prerequisites**

*   You have installed and configured a hub cluster and installed {{ rh_rhacm_first }} on the hub cluster.
*   You have installed the OpenShift Container Platform CLI (oc).
*   You have logged in as a user with `cluster-admin` privileges.
*   You have configured an unauthenticated registry for use with the hub cluster.

**Procedure**

1.  Update the `AgentServiceConfig` custom resource (CR) by running the following command:
    ```terminal
    $ oc edit AgentServiceConfig agent
    ```
1.  Add the `unauthenticatedRegistries` field in the CR:
    ```yaml
    apiVersion: agent-install.openshift.io/v1beta1
    kind: AgentServiceConfig
    metadata:
      name: agent
    spec:
      unauthenticatedRegistries:
      - example.registry.com
      - example.registry2.com
      ...
    ```

    Unauthenticated registries are listed under `spec.unauthenticatedRegistries` in the `AgentServiceConfig` resource.
    Any registry on this list is not required to have an entry in the pull secret used for the spoke cluster installation.
    `assisted-service` validates the pull secret by making sure it contains the authentication information for every image registry used for installation.

    :::note

    Mirror registries are automatically added to the ignore list and do not need to be added under `spec.unauthenticatedRegistries`.
    Specifying the `PUBLIC_CONTAINER_REGISTRIES` environment variable in the `ConfigMap` overrides the default values with the specified value.
    The `PUBLIC_CONTAINER_REGISTRIES` defaults are [quay.io](https://quay.io) and [registry.svc.ci.openshift.org](https://registry.svc.ci.openshift.org).
    
    :::


**Verification**

Verify that you can access the newly added registry from the hub cluster by running the following commands:

1.  Open a debug shell prompt to the hub cluster:
    ```terminal
    $ oc debug node/<node_name>
    ```
1.  Test access to the unauthenticated registry by running the following command:
    ```terminal
    sh-4.4# podman login -u kubeadmin -p $(oc whoami -t) <unauthenticated_registry>
    ```

    where:

    &lt;unauthenticated_registry>
    :   Is the new registry, for example, `unauthenticated-image-registry.openshift-image-registry.svc:5000`.
    ```terminal title="Example output"
    Login Succeeded!
    ```