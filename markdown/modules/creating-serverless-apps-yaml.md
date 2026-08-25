{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating serverless applications using YAML {id="creating-serverless-apps-yaml_{{ context }}"}

Creating Knative resources by using YAML files uses a declarative API, which enables you to describe applications declaratively and in a reproducible manner. To create a serverless application by using YAML, you must create a YAML file that defines a Knative `Service` object, then apply it by using `oc apply`.

After the service is created and the application is deployed, Knative creates an immutable revision for this version of the application. Knative also performs network programming to create a route, ingress, service, and load balancer for your application and automatically scales your pods up and down based on traffic.

**Prerequisites**

*   {{ ServerlessOperatorName }} and Knative Serving are installed on your cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Create a YAML file containing the following sample code:
    ```yaml
    apiVersion: serving.knative.dev/v1
    kind: Service
    metadata:
      name: event-delivery
      namespace: default
    spec:
      template:
        spec:
          containers:
            - image: quay.io/openshift-knative/knative-eventing-sources-event-display:latest
              env:
                - name: RESPONSE
                  value: "Hello Serverless!"
    ```
1.  Navigate to the directory where the YAML file is contained, and deploy the application by applying the YAML file:
    ```terminal
    $ oc apply -f <filename>
    ```