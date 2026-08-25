{%- set _mod_docs_content_type = "REFERENCE" %}
# More InferenceService CR options {id="microshift-rhoai-inferenceservice-more-options_{{ context }}"}

You can include many different options in the inference service YAML file, as described in the [Control Plane API Reference](https://kserve.github.io/website/latest/reference/api/) (KServe documentation).   {._abstract}

For example, you can include a `resources` section that is passed first to the deployment and then to the pod, so that the model server gets access to your hardware through the device plugin.

```yaml title="Example NVIDIA device resources snippet in an InferenceService CR"
apiVersion: serving.kserve.io/v1beta1
kind: InferenceService
metadata:
  name: is-name
spec:
  predictor:
    model:
      resources:
        limits:
          nvidia.com/gpu: 1
        requests:
          nvidia.com/gpu: 1
#...
```

For complete `InferenceService` specifications, see the [Control Plane API Reference](https://kserve.github.io/website/latest/reference/api/) (KServe documentation).