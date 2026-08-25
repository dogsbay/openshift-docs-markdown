{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an InferenceService custom resource {id="microshift-rhoai-inferenceservice-ex_{{ context }}"}

You can create an `InferenceService` custom resource (CR) that instructs KServe how to create a deployment for serving your AI model. KServe uses the `ServingRuntime` based on the `modelFormat` value specified in the `InferenceService` CR. {._abstract}

**Prerequisites**

*   You configured the `ServingRuntimes` CR.
*   You have root user access to your machine.
*   The {{ oc_first }} is installed.

**Procedure**

1.  Create the `InferenceService` CR.
    ```yaml title="Example InferenceService object with an openvino_ir model format"
    apiVersion: serving.kserve.io/v1beta1
    kind: InferenceService
    metadata:
      name: ovms-resnet50
    spec:
      predictor:
        model:
          protocolVersion: v2
          modelFormat:
            name: openvino_ir
          storageUri: "oci://localhost/ovms-resnet50:test"
          args:
          - --layout=NHWC:NCHW
    ```

    where:

    `spec.predictor.model.args.layout`
    :   Specifies an additional argument to make {{ ovms }} ({{ ov }}) accept the request input data in a different layout than the model was originally exported with. Extra arguments are passed through to the {{ ov }} container.

1.  Save the `InferenceService` example to a file, then create it on the cluster by running the following command:
    ```terminal
    $ oc create -n _<ai_demo>_ -f ./FILE.yaml
    ```

    where:

    `_<ai_demo>_`
    :   Specifies your namespace name.
    ```terminal title="Example output"
    inferenceservice.serving.kserve.io/ovms-resnet50 created
    ```

    :::note

    A deployment and a pod are expected to appear in the specified namespace. Depending on the size of the image specified in the `ServingRuntime` CR and the size of the ModelCar OCI image, it might take several minutes for the pod to be ready.
    
    :::


**Next steps**

*   Verify that the model-serving runtime is ready.