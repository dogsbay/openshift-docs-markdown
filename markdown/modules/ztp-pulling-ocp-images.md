{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pulling ISO images for the desired {{ product_title }} version {id="ztp-pulling-ocp-images_{{ context }}"}

To pull ISO images for the desired {{ product_title }} version, update the `AgentServiceConfig` custom resource (CR) with references to the desired ISO and RootFS images that are hosted on the mirror registry HTTP server. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have {{ rh_rhacm }} with `MultiClusterHub` enabled.
*   You have enabled the assisted service.

**Procedure**

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