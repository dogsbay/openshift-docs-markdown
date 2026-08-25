{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing labels and annotations for {{ product_title }} routes {id="serverless-customize-labels-annotations-routes_{{ context }}"}

**Prerequisites**

*   You must have the {{ ServerlessOperatorName }} and Knative Serving installed on your {{ product_title }} cluster.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Create a Knative service that contains the label or annotation that you want to propagate to the {{ product_title }} route:
    *   To create a service by using YAML:
        ```yaml title="Example service created by using YAML"
        apiVersion: serving.knative.dev/v1
        kind: Service
        metadata:
          name: <service_name>
          labels:
            <label_name>: <label_value>
          annotations:
            <annotation_name>: <annotation_value>
        ...
        ```
    *   To create a service by using the Knative (`kn`) CLI, enter:
        ```terminal title="Example service created by using a kn command"
        $ kn service create <service_name> \
          --image=<image> \
          --annotation <annotation_name>=<annotation_value> \
          --label <label_value>=<label_value>
        ```
1.  Verify that the {{ product_title }} route has been created with the annotation or label that you added by inspecting the output from the following command:
    ```terminal title="Example command for verification"
    $ oc get routes.route.openshift.io \
         -l serving.knative.openshift.io/ingressName=<service_name> \ (1)
         -l serving.knative.openshift.io/ingressNamespace=<service_namespace> \ (2)
         -n knative-serving-ingress -o yaml \
             | grep -e "<label_name>: \"<label_value>\""  -e "<annotation_name>: <annotation_value>" (3)
    ```
    1.  Use the name of your service.
    1.  Use the namespace where your service was created.
    1.  Use your values for the label and annotation names and values.