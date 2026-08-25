{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring init containers {id="serverless-init-containers-apps_{{ context }}"}

[Init containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) are specialized containers that are run before application containers in a pod. They are generally used to implement initialization logic for an application, which may include running setup scripts or downloading required configurations.


:::note

Init containers may cause longer application start-up times and should be used with caution for serverless applications, which are expected to scale up and down frequently.

:::


Multiple init containers are supported in a single Knative service spec. Knative provides a default, configurable naming template if a template name is not provided. The init containers template can be set by adding an appropriate value in a Knative `Service` object spec.

**Prerequisites**

*   {{ ServerlessOperatorName }} and Knative Serving are installed on your cluster.
*   Before you can use init containers for Knative services, an administrator must add the `kubernetes.podspec-init-containers` flag to the `KnativeServing` custom resource (CR). See the {{ ServerlessProductName }} "Global configuration" documentation for more information.

**Procedure**

*   Add the `initContainers` spec to a Knative `Service` object:
    ```yaml title="Example service spec"
    apiVersion: serving.knative.dev/v1
    kind: Service
    ...
    spec:
      template:
        spec:
          initContainers:
            - imagePullPolicy: IfNotPresent (1)
              image: <image_uri> (2)
              volumeMounts: (3)
                - name: data
                  mountPath: /data
    ...
    ```
    1.  The [image pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) when the image is downloaded.
    1.  The URI for the init container image.
    1.  The location where volumes are mounted within the container file system.