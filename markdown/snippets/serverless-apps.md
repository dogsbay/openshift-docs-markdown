{%- set _mod_docs_content_type = "SNIPPET" %}

Serverless applications are created and deployed as Kubernetes services, defined by a route and a configuration, and contained in a YAML file. To deploy a serverless application using {{ ServerlessProductName }}, you must create a Knative `Service` object.

```yaml title="Example Knative Service object YAML file"
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello (1)
  namespace: default (2)
spec:
  template:
    spec:
      containers:
        - image: docker.io/openshift/hello-openshift (3)
          env:
            - name: RESPONSE (4)
              value: "Hello Serverless!"
```
1.  The name of the application.
1.  The namespace the application uses.
1.  The image of the application.
1.  The environment variable printed out by the sample application.