{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using ZTP manifests {id="installing-ocp-agent-ztp_{{ context }}"}

As an optional task, you can use {{ ztp_first }} manifests to configure your installation beyond the options available through the `install-config.yaml` and `agent-config.yaml` files. {._abstract}

See "Challenges of the network far edge" to learn more about {{ ztp_first }}.


:::important

Zero Touch Provisioning (ZTP) is not supported for two-node clusters with fencing (TNF). Although you can use Red Hat Advanced Cluster Management (RHACM) for installations, the additional infrastructure components required for ZTP are not validated for this topology.

:::



:::note

{{ ztp }} manifests can be generated with or without configuring the `install-config.yaml` and `agent-config.yaml` files beforehand.
If you chose to configure the `install-config.yaml` and `agent-config.yaml` files, the configurations will be imported to the ZTP cluster manifests when they are generated.

:::


**Prerequisites**

*   You have placed the `openshift-install` binary in a directory that is on your `PATH`.
*   Optional: You have created and configured the `install-config.yaml` and `agent-config.yaml` files.

**Procedure**

1.  Generate ZTP cluster manifests by running the following command:
    ```terminal
    $ openshift-install agent create cluster-manifests --dir <installation_directory>
    ```

    :::important

    If you have created the `install-config.yaml` and `agent-config.yaml` files, those files are deleted and replaced by the cluster manifests generated through this command.

    Any configurations made to the `install-config.yaml` and `agent-config.yaml` files are imported to the ZTP cluster manifests when you run the `openshift-install agent create cluster-manifests` command.
    
    :::

1.  Navigate to the `cluster-manifests` directory by running the following command:
    ```terminal
    $ cd <installation_directory>/cluster-manifests
    ```
1.  Configure the manifest files in the `cluster-manifests` directory.
For sample files, see the "Sample GitOps ZTP custom resources" section.
1.  Disconnected clusters: If you did not define mirror configuration in the `install-config.yaml` file before generating the ZTP manifests, perform the following steps:
    1.  Navigate to the `mirror` directory by running the following command:
        ```terminal
        $ cd ../mirror
        ```
    1.  Configure the manifest files in the `mirror` directory.