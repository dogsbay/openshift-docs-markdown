{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the {{ ztp }} site configuration repository {id="ztp-preparing-the-ztp-git-repository_{{ context }}"}

Before you can use the {{ ztp_first }} pipeline, you need to prepare the Git repository to host the site configuration data. {._abstract}

**Prerequisites**

*   You have configured the hub cluster GitOps applications for generating the required installation and policy custom resources (CRs).
*   You have deployed the managed clusters using {{ ztp }}.

**Procedure**

1.  Create a directory structure with separate paths for the `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` CRs.

    :::note

    Keep `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` CRs in separate directories.
    Both the `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` directories must contain a `kustomization.yaml` file that explicitly includes the files in that directory.
    
    :::

1.  Export the `argocd` directory from the `ztp-site-generate` container image using the following commands:
    ```terminal {minja}
    $ podman pull registry.redhat.io/openshift4/ztp-site-generate-rhel8:v{{ product_version }}
    ```
    ```terminal
    $ mkdir -p ./out
    ```
    ```terminal {minja}
    $ podman run --log-driver=none --rm registry.redhat.io/openshift4/ztp-site-generate-rhel8:v{{ product_version }} extract /home/ztp --tar | tar x -C ./out
    ```
1.  Check that the `out` directory contains the following subdirectories:
    *   `out/extra-manifest` contains the source CR files that you use to create extra manifest `ConfigMap` resources through the `configMapGenerator` in the `kustomization.yaml` file. The `ClusterInstance` CR references these `ConfigMap` resources using the `extraManifestsRefs` field.
    *   `out/source-crs` contains the source CR files that `PolicyGenerator` uses to generate the {{ rh_rhacm_first }} policies.
    *   `out/argocd/deployment` contains patches and YAML files to apply on the hub cluster for use in the next step of this procedure.
    *   `out/argocd/example/clusterinstance` contains the examples for `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` files that represent the recommended configuration.
1.  Copy the `out/source-crs` folder and contents to the `PolicyGenerator` or `PolicyGentemplate` directory.
1.  The out/extra-manifests directory contains the reference manifests for a RAN DU cluster.
Copy the `out/extra-manifests` directory into the `ClusterInstance` folder.
This directory should contain CRs from the `ztp-site-generate` container only.
Do not add user-provided CRs here.
If you want to work with user-provided CRs you must create another directory for that content.
For example:
    ```text
    example/
      ├── acmpolicygenerator
      │   ├── kustomization.yaml
      │   └── source-crs/
      ├── policygentemplates
      │   ├── kustomization.yaml
      │   └── source-crs/
      └── clusterinstance
            ├── extra-manifests
            └── kustomization.yaml
    ```

    :::note

    Using `PolicyGenTemplate` CRs to manage and deploy policies to manage clusters will be deprecated in a future {{ product_title }} release.
    Equivalent and improved functionality is available by using {{ rh_rhacm_first }} and `PolicyGenerator` CRs.
    
    :::

1.  Commit the directory structure and the `kustomization.yaml` files and push to your Git repository.
The initial push to Git should include the `kustomization.yaml` files.

    You can use the directory structure under `out/argocd/example` as a reference for the structure and content of your Git repository.
    That structure includes `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` reference CRs for single-node, three-node, and standard clusters.
    Remove references to cluster types that you are not using.

    For all cluster types, you must:
    *   Add the `source-crs` subdirectory to the `acmpolicygenerator` or `policygentemplates` directory.
    *   Add the `extra-manifests` directory to the `clusterinstance` directory.

        The following example describes a set of CRs for a network of single-node clusters:
        ```text
        example/
          ├── acmpolicygenerator
          │   ├── acm-common-ranGen.yaml
          │   ├── acm-example-sno-site.yaml
          │   ├── acm-group-du-sno-ranGen.yaml
          │   ├── group-du-sno-validator-ranGen.yaml
          │   ├── kustomization.yaml
          │   ├── source-crs/
          │   └── ns.yaml
          └── clusterinstance
                ├── example-sno.yaml
                ├── extra-manifests/
                ├── custom-manifests/
                ├── KlusterletAddonConfigOverride.yaml
                └── kustomization.yaml
        ```

        where:

        `extra-manifests/`
        :   Contains reference manifests from the `ztp-container`.

        `custom-manifests/`
        :   Contains custom manifests.