{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ tekton_chains }} to sign and verify image and provenance {id="using-tekton-chains-to-sign-and-verify-image-and-provenance_{{ context }}"}

Cluster administrators can use {{ tekton_chains }} to sign and verify images and provenances, by performing the following tasks: {._abstract}

*   Create an encrypted x509 key pair and save it as a Kubernetes secret.
*   Set up authentication for the OCI registry to store images, image signatures, and signed image attestations.
*   Configure {{ tekton_chains }} to generate and sign provenance.
*   Create an image with Kaniko in a task run.
*   Verify the signed image and the signed provenance.

**Prerequisites**

Ensure that the following are installed on the cluster:

*   {{ pipelines_title }} Operator
*   {{ tekton_chains }}
*   [Cosign](https://docs.sigstore.dev/cosign/installation/)
*   [Rekor](https://docs.sigstore.dev/rekor/installation/)
*   [jq](https://stedolan.github.io/jq/)

**Procedure**

1.  Create an encrypted x509 key pair and save it as a Kubernetes secret:
    ```terminal
    $ cosign generate-key-pair k8s://openshift-pipelines/signing-secrets
    ```

    Provide a password when prompted. Cosign stores the resulting private key as part of the `signing-secrets` Kubernetes secret in the `openshift-pipelines` namespace, and writes the public key to the `cosign.pub` local file.
1.  Configure authentication for the image registry.
    1.  To configure the {{ tekton_chains }} controller for pushing signature to an OCI registry, use the credentials associated with the service account of the task run. For detailed information, see the "Authenticating to an OCI registry" section.
    1.  To configure authentication for a Kaniko task that builds and pushes image to the registry, create a Kubernetes secret of the docker `config.json` file containing the required credentials.
        ```terminal
        $ oc create secret generic <docker_config_secret_name> \ (1)
          --from-file <path_to_config.json> (2)
        ```
        1.  Substitute with the name of the docker config secret.
        1.  Substitute with the path to docker `config.json` file.
1.  Configure {{ tekton_chains }} by setting the `artifacts.taskrun.format`, `artifacts.taskrun.storage`, and `transparency.enabled` parameters in the `chains-config` object:
    ```terminal
    $ oc patch configmap chains-config -n openshift-pipelines -p='{"data":{"artifacts.taskrun.format": "in-toto"}}'
    ```
    ```terminal
    $ oc patch configmap chains-config -n openshift-pipelines -p='{"data":{"artifacts.taskrun.storage": "oci"}}'
    ```
    ```terminal
    $ oc patch configmap chains-config -n openshift-pipelines -p='{"data":{"transparency.enabled": "true"}}'
    ```
1.  Start the Kaniko task.
    1.  Apply the Kaniko task to the cluster.
        ```terminal
        $ oc apply -f examples/kaniko/kaniko.yaml (1)
        ```

        where:

        `<examples/kaniko/kaniko.yaml>`
        :   Substitute with the URI or file path to your Kaniko task.
    1.  Set the appropriate environment variables.
        ```terminal
        $ export REGISTRY=<url_of_registry>
        ```

        where:

        `<url_of_registry>`
        :   Substitute with the URL of the registry where you want to push the image.
        ```terminal
        $ export DOCKERCONFIG_SECRET_NAME=<name_of_the_secret_in_docker_config_json> (2)
        ```
        where:
        `<name_of_the_secret_in_docker_config_json>`:: Substitute with the name of the secret in the docker `config.json` file.
    1.  Start the Kaniko task.
        ```terminal
        $ tkn task start --param IMAGE=$REGISTRY/kaniko-chains --use-param-defaults --workspace name=source,emptyDir="" --workspace name=dockerconfig,secret=$DOCKERCONFIG_SECRET_NAME kaniko-chains
        ```

        Observe the logs of this task until all steps are complete. On successful authentication, the final image will be pushed to `$REGISTRY/kaniko-chains`.
1.  Wait for a minute to allow {{ tekton_chains }} to generate the provenance and sign it, and then check the availability of the `chains.tekton.dev/signed=true` annotation on the task run.
    ```terminal
    $ oc get tr <task_run_name> \ (1)
    -o json | jq -r .metadata.annotations

    {
      "chains.tekton.dev/signed": "true",
      ...
    }
    ```
    1.  Substitute with the name of the task run.
1.  Verify the image and the attestation.
    ```terminal
    $ cosign verify --key cosign.pub $REGISTRY/kaniko-chains
    ```
    ```terminal
    $ cosign verify-attestation --key cosign.pub $REGISTRY/kaniko-chains
    ```
1.  Find the provenance for the image in Rekor.
    1.  Get the digest of the $REGISTRY/kaniko-chains image. You can search for it ing the task run, or pull the image to extract the digest.
    1.  Search Rekor to find all entries that match the `sha256` digest of the image.
        ```terminal
        $ rekor-cli search --sha <image_digest>
        ```
        *   `<image_digest>`: Substitute with the `sha256` digest of the image.
            ```terminal
            <uuid_1> (2)
            <uuid_2> (3)
            ...
            ```
        *   `<uuid_1>`: The first matching universally unique identifier (UUID).
        *   `<uuid_2>`: The second matching UUID.

            The search result displays UUIDs of the matching entries. One of those UUIDs holds the attestation.
    1.  Check the attestation.
        ```terminal
        $ rekor-cli get --uuid <uuid> --format json | jq -r .Attestation | base64 --decode | jq
        ```