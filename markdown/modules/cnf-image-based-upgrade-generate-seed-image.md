{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating a seed image with the {{ lcao }} {id="cnf-image-based-upgrade-generate-seed-image_{{ context }}"}

Use the {{ lcao }} to generate a seed image from a managed cluster. The Operator checks for required system configurations, performs any necessary system cleanup before generating the seed image, and launches the image generation. The seed image generation includes the following tasks: {._abstract}

*   Stopping cluster Operators
*   Preparing the seed image configuration
*   Generating and pushing the seed image to the image repository specified in the `SeedGenerator` CR
*   Restoring cluster Operators
*   Expiring seed cluster certificates
*   Generating new certificates for the seed cluster
*   Restoring and updating the `SeedGenerator` CR on the seed cluster

**Prerequisites**

*   {{ rh_rhacm }} and {{ mce }} are not installed on the seed cluster.
*   You have configured a shared container directory on the seed cluster.
*   You have installed the minimum version of the {{ oadp_short }} Operator and the {{ lcao }} on the seed cluster.
*   Ensure that persistent volumes are not configured on the seed cluster.
*   Ensure that the `LocalVolume` CR does not exist on the seed cluster if the Local Storage Operator is used.
*   Ensure that the `LVMCluster` CR does not exist on the seed cluster if {{ lvms }} is used.
*   Ensure that the `DataProtectionApplication` CR does not exist on the seed cluster if {{ oadp_short }} is used.

**Procedure**

1.  Detach the managed cluster from the hub to delete any {{ rh_rhacm }}-specific resources from the seed cluster that must not be in the seed image:
    1.  Manually detach the seed cluster by running the following command:
        ```terminal
        $ oc delete managedcluster sno-worker-example
        ```
        1.  Wait until the managed cluster is removed. After the cluster is removed, create the proper `SeedGenerator` CR. The {{ lcao }} cleans up the {{ rh_rhacm }} artifacts.
    1.  If you are using {{ ztp }}, detach your cluster by removing the seed cluster’s `ClusterInstance` CR from the `kustomization.yaml`.
        1.  If you have a `kustomization.yaml` file that references multiple `ClusterInstance` CRs, remove your seed cluster’s `ClusterInstance` CR from the `kustomization.yaml`:
            ```yaml
            apiVersion: kustomize.config.k8s.io/v1beta1
            kind: Kustomization

            resources:
            #- clusterinstance-seed-sno1.yaml
            - clusterinstance-target-sno2.yaml
            - clusterinstance-target-sno3.yaml
            ```
        1.  If you have a `kustomization.yaml` that references one `ClusterInstance` CR, remove your seed cluster’s `ClusterInstance` CR from the `kustomization.yaml` and add the `resources: []` line:
            ```yaml
            apiVersion: kustomize.config.k8s.io/v1beta1
            kind: Kustomization

            resources: []
            ```
        1.  Commit the `kustomization.yaml` changes in your Git repository and push the changes to your repository.

            The ArgoCD pipeline detects the changes and removes the managed cluster.
1.  Create the `Secret` object so that you can push the seed image to your registry.
    1.  Create the authentication file by running the following commands:
        ```terminal
        $ MY_USER=myuserid
        ```
        ```terminal
        $ AUTHFILE=/tmp/my-auth.json
        ```
        ```terminal
        $ podman login --authfile ${AUTHFILE} -u ${MY_USER} quay.io/${MY_USER}
        ```
        ```terminal
        $ base64 -w 0 ${AUTHFILE} ; echo
        ```
    1.  Copy the output into the `seedAuth` field in the `Secret` YAML file named `seedgen` in the `openshift-lifecycle-agent` namespace:
        ```yaml
        apiVersion: v1
        kind: Secret
        metadata:
          name: <secret_name>
          namespace: openshift-lifecycle-agent
        type: Opaque
        data:
          seedAuth: <encoded_authfile>
        ```

        where:

        `<secret_name>`
        :   Specifies the name of the `Secret` resource. The value must be `seedgen`.

        `<encoded_authfile>`
        :   Specifies a base64-encoded authfile for write-access to the registry for pushing the generated seed images.
    1.  Apply the `Secret` by running the following command:
        ```terminal
        $ oc apply -f secretseedgenerator.yaml
        ```
1.  Create the `SeedGenerator` CR:
    ```yaml
    apiVersion: lca.openshift.io/v1
    kind: SeedGenerator
    metadata:
      name: <seedgenerator_name>
    spec:
      seedImage: <seed_container_image>
    ```

    where:

    `<seedgenerator_name>`
    :   Specifies the name of the `SeedGenerator` CR. The value must be `seedimage`.

    `<seed_container_image>`
    :   Specifies the container image URL, for example, `quay.io/example/seed-container-image:<tag>`. It is recommended to use the `<seed_cluster_name>:<ocp_version>` format.

1.  Generate the seed image by running the following command:
    ```terminal
    $ oc apply -f seedgenerator.yaml
    ```

    :::important

    The cluster reboots and loses API capabilities while the {{ lcao }} generates the seed image.
    Applying the `SeedGenerator` CR stops the `kubelet` and the CRI-O operations, then it starts the image generation.
    
    :::


**Verification**

*   After the cluster recovers and it is available, you can check the status of the `SeedGenerator` CR by running the following command:
    ```terminal
    $ oc get seedgenerator -o yaml
    ```

    The following example shows the output when the seed image generation is complete:
    ```yaml
    status:
      conditions:
      - lastTransitionTime: "2024-02-13T21:24:26Z"
        message: Seed Generation completed
        observedGeneration: 1
        reason: Completed
        status: "False"
        type: SeedGenInProgress
      - lastTransitionTime: "2024-02-13T21:24:26Z"
        message: Seed Generation completed
        observedGeneration: 1
        reason: Completed
        status: "True"
        type: SeedGenCompleted
      observedGeneration: 1
    ```

    The `SeedGenCompleted` type indicates that the seed image generation is complete.

    If you want to generate more seed images, you must provision a new seed cluster with the version that you want to generate a seed image from.