{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing a managed cluster with {{ policy_gen_cr }} CRs {id="ztp-customizing-a-managed-site-using-pgt_{{ context }}"}

Use the following procedure to customize the policies that get applied to the managed cluster that you provision using the {{ ztp_first }} pipeline. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You configured the hub cluster for generating the required installation and policy CRs.
*   You created a Git repository where you manage your custom site configuration data. The repository must be accessible from the hub cluster and be defined as a source repository for the Argo CD application.

**Procedure**

1.  Create a `{{ policy_gen_cr }}`{minja} CR for site-specific configuration CRs.
    1.  Choose the appropriate example for your CR from the `{{ argocd_folder }}`{minja} folder, for example, `{{ policy_prefix }}example-sno-site.yaml`{minja} or `{{ policy_prefix }}example-multinode-site.yaml`{minja}.
    1.  Change the `{{ binding_field }}`{minja} field in the example file to match the site-specific label included in the `ClusterInstance` CR. In the example `ClusterInstance` file, the site-specific label is `sites: example-sno`.

        :::note

        Ensure that the labels defined in your `{{ policy_gen_cr }}`{minja} `{{ binding_field }}`{minja} field correspond to the labels that are defined in the related managed clusters `ClusterInstance` CR.
        
        :::

    1.  Change the content in the example file to match the desired configuration.
1.  Optional: Create a `{{ policy_gen_cr }}`{minja} CR for any common configuration CRs that apply to the entire fleet of clusters.
    1.  Select the appropriate example for your CR from the `{{ argocd_folder }}`{minja} folder, for example, `{{ policy_prefix }}common-ranGen.yaml`{minja}.
    1.  Change the content in the example file to match the required configuration.
1.  Optional: Create a `{{ policy_gen_cr }}`{minja} CR for any group configuration CRs that apply to the certain groups of clusters in the fleet.

    Ensure that the content of the overlaid spec files matches your required end state. As a reference, the `out/source-crs` directory contains the full list of source-crs available to be included and overlaid by your {{ policy_gen_cr }} templates.

    :::note

    Depending on the specific requirements of your clusters, you might need more than a single group policy per cluster type, especially considering that the example group policies each have a single `PerformancePolicy.yaml` file that can only be shared across a set of clusters if those clusters consist of identical hardware configurations.
    
    :::

    1.  Select the appropriate example for your CR from the `{{ argocd_folder }}`{minja} folder, for example, `{{ policy_prefix }}group-du-sno-ranGen.yaml`{minja}.
    1.  Change the content in the example file to match the required configuration.
1.  Optional. Create a validator inform policy `{{ policy_gen_cr }}`{minja} CR to signal when the {{ ztp }} installation and configuration of the deployed cluster is complete. For more information, see "Creating a validator inform policy".
1.  Define all the policy namespaces in a YAML file similar to the example `{{ argocd_folder }}/ns.yaml`{minja} file.

    :::important

    Do not include the `Namespace` CR in the same file with the `{{ policy_gen_cr }}`{minja} CR.
    
    :::

1.  Add the `{{ policy_gen_cr }}`{minja} CRs and `Namespace` CR to the `kustomization.yaml` file in the generators section, similar to the example shown in `{{ argocd_folder }}kustomization.yaml`{minja}.
1.  Commit the `{{ policy_gen_cr }}`{minja} CRs, `Namespace` CR, and associated `kustomization.yaml` file in your Git repository and push the changes.

    The ArgoCD pipeline detects the changes and begins the managed cluster deployment. You can push the changes to the `ClusterInstance` CR and the `{{ policy_gen_cr }}`{minja} CR simultaneously.