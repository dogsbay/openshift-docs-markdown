{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing for the upgrade {id="ztp-preparing-for-the-gitops-ztp-upgrade_{{ context }}"}

Use the following procedure to prepare your site for the {{ ztp_first }} upgrade. {._abstract}

**Procedure**

1.  Get the latest version of the {{ ztp }} container that has the custom resources (CRs) used to configure {{ gitops_title }} for use with {{ ztp }}.
1.  Extract the `argocd/deployment` directory by using the following commands:
    ```terminal
    $ mkdir -p ./update
    ```
    ```terminal
    $ podman run --log-driver=none --rm registry.redhat.io/openshift4/ztp-site-generate-rhel8:v{{ product_version }} extract /home/ztp --tar | tar x -C ./update
    ```

    The `/update` directory contains the following subdirectories:
    *   `update/extra-manifest`: contains the source CR files that you package into a `ConfigMap` and reference in the `ClusterInstance` CR using the `extraManifestsRefs` field.
    *   `update/source-crs`: contains the source CR files that the `PolicyGenerator` or `PolicyGentemplate` CR uses to generate the {{ rh_rhacm_first }} policies.
    *   `update/argocd/deployment`: contains patches and YAML files to apply on the hub cluster for use in the next step of this procedure.
    *   `update/argocd/example`: contains example `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` files that represent the recommended configuration.
1.  Update the `clusters-app.yaml` and `policies-app.yaml` files to reflect the name of your applications and the URL, branch, and path for your Git repository.

    If the upgrade includes changes that results in obsolete policies, the obsolete policies should be removed prior to performing the upgrade.
1.  Diff the changes between the configuration and deployment source CRs in the `/update` folder and Git repo where you manage your fleet site CRs. Apply and push the required changes to your site repository.

    :::important

    When you update {{ ztp }} to the latest version, you must apply the changes from the `update/argocd/deployment` directory to your site repository. Do not use older versions of the `argocd/deployment/` files.
    
    :::