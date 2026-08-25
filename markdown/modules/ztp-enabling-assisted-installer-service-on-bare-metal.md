{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the assisted service {id="enabling-assisted-installer-service-on-bare-metal_{{ context }}"}

{{ rh_rhacm_first }} uses the assisted service to deploy {{ product_title }} clusters. The assisted service is deployed automatically when you enable the MultiClusterHub Operator on {{ rh_rhacm_first }}. After that, you need to configure the `Provisioning` resource to watch all namespaces and to update the `AgentServiceConfig` custom resource (CR) with references to the ISO and RootFS images that are hosted on the mirror registry HTTP server. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have {{ rh_rhacm }} with `MultiClusterHub` enabled.

**Procedure**

1.  Enable the `Provisioning` resource to watch all namespaces and configure mirrors for disconnected environments. For more information, see [Enabling the central infrastructure management service](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.9/html/clusters/cluster_mce_overview#enable-cim).
1.  Open the `AgentServiceConfig` CR to update the `spec.osImages` field by running the following command:
    ```terminal
    $ oc edit AgentServiceConfig
    ```
1.  Update the `spec.osImages` field in the `AgentServiceConfig` CR:
    ```yaml
    apiVersion: agent-install.openshift.io/v1beta1
    kind: AgentServiceConfig
    metadata:
     name: agent
    spec:
    # ...
      osImages:
        - cpuArchitecture: x86_64
          openshiftVersion: "{{ product_version }}"
          rootFSUrl: https://<host>/<path>/rhcos-live-rootfs.x86_64.img
          url: https://<host>/<path>/rhcos-live.x86_64.iso
    ```

    where:

    `<host>` 
    :   Specifies the fully qualified domain name (FQDN) for the target mirror registry HTTP server.

    `<path>` 
    :   Specifies the path to the image on the target mirror registry.
1.  Save and quit the editor to apply the changes.