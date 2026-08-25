{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a multi-container service {id="serverless-configuring-multi-container-service_{{ context }}"}

Multi-container support is enabled by default. You can create a multi-container pod by specifiying multiple containers in the service.

**Procedure**

1.  Modify your service to include additional containers. Only one container can handle requests, so specify `ports` for exactly one container. Here is an example configuration with two containers:
    ```yaml title="Multiple containers configuration"
    apiVersion: serving.knative.dev/v1
    kind: Service
    ...
    spec:
      template:
        spec:
          containers:
            - name: first-container (1)
              image: gcr.io/knative-samples/helloworld-go
              ports:
                - containerPort: 8080 (2)
            - name: second-container (3)
              image: gcr.io/knative-samples/helloworld-java
    ```
    1.  First container configuration.
    1.  Port specification for the first container.
    1.  Second container configuration.