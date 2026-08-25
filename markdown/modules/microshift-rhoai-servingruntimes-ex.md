{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ServingRuntime CR for use in {{ microshift_short }} {id="microshift-rhoai-servingruntimes-ex_{{ context }}"}

You can create a `ServingRuntime` custom resource (CR) based on installed manifests and release information.  {._abstract}

The included steps are an example of reusing the included `microshift-ai-model-serving` manifest files to re-create the {{ ovms }} ({{ ov }}) model-serving runtime in the workload namespace.


:::note

This approach does not require a live node, so it can be part of CI/CD automation.

:::


**Prerequisites**

*   Both the `microshift-ai-model-serving` and `microshift-ai-model-serving-release-info` RPMs are installed.
*   You have root user access to your machine.
*   The {{ oc_first }} is installed.

**Procedure**

1.  Extract the image reference of the `ServingRuntime` CR you want to use from the {{ microshift_short }} release information file by running the following command:
    ```terminal
    $ OVMS_IMAGE="$(jq -r '.images | with_entries(select(.key == "ovms-image")) | .[]' /usr/share/microshift/release/release-ai-model-serving-"$(uname -i)".json)"
    ```

    In this example, the image reference for the {{ ov }} model-serving runtime is extracted.
1.  Copy the original `ServingRuntime` YAML file by running the following command:
    ```terminal
    $ cp /usr/lib/microshift/manifests.d/050-microshift-ai-model-serving-runtimes/ovms-kserve.yaml ./ovms-kserve.yaml
    ```
1.  Add the actual image reference to the `image:` parameter field value of the `ServingRuntime` YAML by running the following command:
    ```terminal
    $ sed -i "s,image: ovms-image,image: ${OVMS_IMAGE}," ./ovms-kserve.yaml
    ```
1.  Create the `ServingRuntime` object in a custom namespace using the YAML file by running the following command:
    ```terminal
    $ oc create -n _<ai_demo>_ -f ./ovms-kserve.yaml
    ```

    where:

    `_<ai_demo>_`
    :   Specifies the name of your namespace.

    :::important

    If the `ServingRuntime` CR is part of a new manifest, set the namespace in the `kustomization.yaml` file, for example:

    ```yaml title="Example Kustomize manifest namespace value"
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    namespace: ai-demo
    resources:
      - ovms-kserve.yaml
    #...
    ```
    
    :::


**Next steps**

*   Create the `InferenceService` object.
*   Verify that your model is ready for inferencing.
*   Query the model.
*   Optional: Examine the model metrics.