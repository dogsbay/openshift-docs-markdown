{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ pipelines_title }} Operator in web console {id="op-installing-pipelines-operator-in-web-console_{{ context }}"}

You can install {{ pipelines_title }} using the Operator listed in the {{ product_title }} software catalog. When you install the {{ pipelines_title }} Operator, the custom resources (CRs) required for the pipelines configuration are automatically installed along with the Operator.

The default Operator custom resource definition (CRD) `config.operator.tekton.dev` is now replaced by `tektonconfigs.operator.tekton.dev`.  In addition, the Operator provides the following additional CRDs to individually manage {{ pipelines_shortname }} components:
 `tektonpipelines.operator.tekton.dev`, `tektontriggers.operator.tekton.dev` and `tektonaddons.operator.tekton.dev`.

If you have {{ pipelines_shortname }} already installed on your cluster, the existing installation is seamlessly upgraded. The Operator will replace the instance of `config.operator.tekton.dev` on your cluster with an instance of `tektonconfigs.operator.tekton.dev` and additional objects of the other CRDs as necessary.


:::warning

If you manually changed your existing installation, such as, changing the target namespace in the `config.operator.tekton.dev` CRD instance by making changes to the `resource name - cluster` field, then the upgrade path is not smooth. In such cases, the recommended workflow is to uninstall your installation and reinstall the {{ pipelines_title }} Operator.

:::


The {{ pipelines_title }} Operator now provides the option to choose the components that you want to install by specifying profiles as part of the `TektonConfig` custom resource (CR). The `TektonConfig` CR is automatically installed when the Operator is installed.
The supported profiles are:

*   Lite: This installs only Tekton Pipelines.
*   Basic: This installs Tekton Pipelines, Tekton Triggers, and Tekton Chains.
*   All: This is the default profile used when the `TektonConfig` CR is installed. This profile installs all of the Tekton components, including Tekton Pipelines, Tekton Triggers, Tekton Chains, {{ pac }}, and Tekton Addons. Tekton Addons includes the `ClusterTasks`, `ClusterTriggerBindings`, `ConsoleCLIDownload`, `ConsoleQuickStart`, and `ConsoleYAMLSample` resources.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Ecosystem** -> **Software Catalog**.
1.  Use the **Filter by keyword** box to search for `{{ pipelines_title }}` Operator in the catalog. Click the **{{ pipelines_title }}** Operator tile.
1.  Read the brief description about the Operator on the **{{ pipelines_title }}** Operator page. Click **Install**.
1.  On the **Install Operator** page:
    1.  Select **All namespaces on the cluster (default)** for the **Installation Mode**. This mode installs the Operator in the default `openshift-operators` namespace, which enables the Operator to watch and be made available to all namespaces in the cluster.
    1.  Select **Automatic** for the **Approval Strategy**. This ensures that the future upgrades to the Operator are handled automatically by the Operator Lifecycle Manager (OLM). If you select the **Manual** approval strategy, OLM creates an update request. As a cluster administrator, you must then manually approve the OLM update request to update the Operator to the new version.
    1.  Select an **Update Channel**.
        *   The `latest` channel enables installation of the most recent stable version of the {{ pipelines_title }} Operator. Currently, it is the default channel for installing the {{ pipelines_title }} Operator.
        *   To install a specific version of the {{ pipelines_title }} Operator, cluster administrators can use the corresponding `pipelines-<version>` channel. For example, to install the {{ pipelines_title }} Operator version `1.8.x`, you can use the `pipelines-1.8` channel.

            :::note

            Starting with {{ product_title }} 4.11, the `preview` and `stable` channels for installing and upgrading the {{ pipelines_title }} Operator are not available. However, in {{ product_title }} 4.10 and earlier versions, you can use the `preview` and `stable` channels for installing and upgrading the Operator.
            
            :::

1.  Click **Install**. You will see the Operator listed on the **Installed Operators** page.

    :::note

    The Operator is installed automatically into the `openshift-operators` namespace.
    
    :::

1.  Verify that the **Status** is set to **Succeeded Up to date**  to confirm successful installation of {{ pipelines_title }} Operator.

    :::warning

    The success status may show as **Succeeded Up to date** even if installation of other components is in-progress. Therefore, it is important to verify the installation manually in the terminal.
    
    :::

1.  Verify that all components of the {{ pipelines_title }} Operator were installed successfully. Login to the cluster on the terminal, and run the following command:

```terminal
$ oc get tektonconfig config
```

.Example output
```
NAME     VERSION   READY   REASON
config   1.11.0     True
```

If the **READY** condition is **True**, the Operator and its components have been installed successfully.

Additonally, check the components' versions by running the following command:

```terminal
$ oc get tektonpipeline,tektontrigger,tektonchain,tektonaddon,pac
```

.Example output
```
NAME                                          VERSION   READY   REASON
tektonpipeline.operator.tekton.dev/pipeline   v0.47.0   True

NAME                                        VERSION   READY   REASON
tektontrigger.operator.tekton.dev/trigger   v0.23.1   True

NAME                                    VERSION   READY   REASON
tektonchain.operator.tekton.dev/chain   v0.16.0   True

NAME                                    VERSION   READY   REASON
tektonaddon.operator.tekton.dev/addon   1.11.0     True

NAME                                                             VERSION   READY   REASON
openshiftpipelinesascode.operator.tekton.dev/pipelines-as-code   v0.19.0   True
```