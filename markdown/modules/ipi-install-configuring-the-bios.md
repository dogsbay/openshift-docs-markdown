{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the BIOS {id="configuring-the-bios_{{ context }}"}

You can configures the BIOS during the installation process. {._abstract}

**Procedure**

1.  Create the manifests.
1.  Modify the `BareMetalHost` resource file corresponding to the node:
    ```terminal
    $ vim clusterconfigs/openshift/99_openshift-cluster-api_hosts-*.yaml
    ```
1.  Add the BIOS configuration to the `spec` section of the `BareMetalHost` resource:
    ```yaml
    spec:
      firmware:
        simultaneousMultithreadingEnabled: true
        sriovEnabled: true
        virtualizationEnabled: true
    ```

    :::note

    Red Hat supports three BIOS configurations. Only servers with BMC type `irmc` are supported. Other types of servers are currently not supported.
    
    :::

1.  Create the cluster.