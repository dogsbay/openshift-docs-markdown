{%- set _mod_docs_content_type = "PROCEDURE" %}
# Extracting reference and example CRs from the ztp-site-generate container {id="ztp-generating-install-and-config-crs-manually_{{ context }}"}

Use the `ztp-site-generate` container to extract reference custom resources (CRs) and example `ClusterInstance` CRs to prepare for cluster installation and Day 2 configuration. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You installed `podman`.

**Procedure**

1.  Create an output folder by running the following command:
    ```terminal
    $ mkdir -p ./out
    ```
1.  Log in to the Ecosystem container registry with your credentials by running the following command:
    ```terminal
    $ podman login registry.redhat.io
    ```
1.  Extract the reference and example CRs from the `ztp-site-generate` container image by running the following command:
    ```terminal {minja}
    $ podman run --log-driver=none --rm registry.redhat.io/openshift4/ztp-site-generate-rhel8:v{{ product_version }} extract /home/ztp --tar | tar x -C ./out
    ```

    The `./out` directory contains the reference `{{ policy_gen_cr }}`{minja} and `ClusterInstance` CRs in the `out/argocd/example/` folder.
    ```terminal title="Example output"
    out
     └── argocd
          └── example
               ├── acmpolicygenerator
               │     ├── {policy-prefix}common-ranGen.yaml
               │     ├── {policy-prefix}example-sno-site.yaml
               │     ├── {policy-prefix}group-du-sno-ranGen.yaml
               │     ├── ...
               │     ├── kustomization.yaml
               │     └── ns.yaml
               └── clusterinstance
                     ├── example-sno.yaml
                     ├── example-3node.yaml
                     ├── example-standard.yaml
                     └── ...
    ```
1.  Create a `ClusterInstance` CR for your cluster.

    Use the example `ClusterInstance` CRs in the `out/argocd/example/clusterinstance/` folder that you previously extracted from the `ztp-site-generate` container as a reference. The folder includes example files for single node, three-node, and standard clusters:
    *   `example-sno.yaml`
    *   `example-3node.yaml`
    *   `example-standard.yaml`

        Change the cluster and host details in the example file to match the type of cluster you want to install. For example:
        ```yaml title="Example {{ sno }} ClusterInstance CR" {minja}
        {% include "./snippets/ztp_example-sno.yaml" %}
        ```

        :::note

        Optional: To provision additional install-time manifests on the provisioned cluster, create the extra manifest CRs and apply them to the hub cluster. Then reference them in the `extraManifestsRefs` field of the `ClusterInstance` CR. For more information, see "Customizing extra installation manifests in the {{ ztp }} pipeline".
        
        :::

1.  Optional: Generate Day 2 configuration CRs from the reference `{{ policy_gen_cr }}`{minja} CRs:
    1.  Create an output folder for the configuration CRs by running the following command:
        ```terminal
        $ mkdir -p ./ref
        ```
    1.  Generate the configuration CRs by running the following command:
        ```terminal {minja}
        $ podman run -it --rm -v `pwd`/out/argocd/example/policygentemplates:/resources:Z -v `pwd`/ref:/output:Z,U registry.redhat.io/openshift4/ztp-site-generate-rhel8:v{{ product_version }} generator config -N . /output
        ```

        The command generates example group and cluster-specific configuration CRs in the `./ref` folder. You can apply these CRs to the cluster after installation is complete.