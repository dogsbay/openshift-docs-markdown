{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating and verifying task run signatures without any additional authentication {id="creating-and-verifying-task-run-signatures-without-any-additional-authentication_{{ context }}"}

To verify signatures of task runs using {{ tekton_chains }} with any additional authentication, perform the following tasks: {._abstract}

*   Create an encrypted x509 key pair and save it as a Kubernetes secret.
*   Configure the {{ tekton_chains }} backend storage.
*   Create a task run, sign it, and store the signature and the payload as annotations on the task run itself.
*   Retrieve the signature and payload from the signed task run.
*   Verify the signature of the task run.

**Prerequisites**

Ensure that the following components are installed on the cluster:

*   {{ pipelines_title }} Operator
*   {{ tekton_chains }}
*   [Cosign](https://docs.sigstore.dev/cosign/installation/)

**Procedure**

1.  Create an encrypted x509 key pair and save it as a Kubernetes secret. For more information about creating a key pair and saving it as a secret, see "Signing secrets in {{ tekton_chains }}".
1.  In the {{ tekton_chains }} configuration, disable the OCI storage, and set the task run storage and format to `tekton`. In the `TektonConfig` custom resource set the following values:
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonConfig
    metadata:
      name: config
    spec:
    # ...
        chain:
          artifacts.oci.storage: ""
          artifacts.taskrun.format: tekton
          artifacts.taskrun.storage: tekton
    # ...
    ```

    For more information about configuring {{ tekton_chains }} using the `TektonConfig` custom resource, see "Configuring {{ tekton_chains }}".
1.  To restart the {{ tekton_chains }} controller to ensure that the modified configuration is applied, enter the following command:
    ```
    $ oc delete po -n openshift-pipelines -l app=tekton-chains-controller
    ```
1.  Create a task run by entering the following command:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/tektoncd/chains/main/examples/taskruns/task-output-image.yaml (1)
    ```
    1.  Replace the example URI with the URI or file path pointing to your task run.
    ```terminal title="Example output"
    taskrun.tekton.dev/build-push-run-output-image-qbjvh created
    ```
1.  Check the status of the steps by entering the following command. Wait until the process finishes.
    ```terminal
    $ tkn tr describe --last
    ```
    ```terminal title="Example output"
    [...truncated output...]
    NAME                            STATUS
    ∙ create-dir-builtimage-9467f   Completed
    ∙ git-source-sourcerepo-p2sk8   Completed
    ∙ build-and-push                Completed
    ∙ echo                          Completed
    ∙ image-digest-exporter-xlkn7   Completed
    ```
1.  To retrieve the signature from the object stored as `base64` encoded annotations, enter the following commands:
    ```terminal
    $ tkn tr describe --last -o jsonpath="{.metadata.annotations.chains\.tekton\.dev/signature-taskrun-$TASKRUN_UID}" | base64 -d > sig
    ```
    ```terminal
    $ export TASKRUN_UID=$(tkn tr describe --last -o  jsonpath='{.metadata.uid}')
    ```
1.  To verify the signature using the public key that you created, enter the following command:
```terminal
$ cosign verify-blob-attestation --insecure-ignore-tlog --key path/to/cosign.pub --signature sig --type slsaprovenance --check-claims=false /dev/null (1)
```
    1.  Replace `path/to/cosign.pub` with the path name of the public key file.
    ```terminal title="Example output"
    Verified OK
    ```