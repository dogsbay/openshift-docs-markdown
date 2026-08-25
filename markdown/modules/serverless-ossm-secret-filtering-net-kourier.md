{%- set _mod_docs_content_type = "PROCEDURE" %}
# Improving net-kourier memory usage by using secret filtering {id="serverless-ossm-secret-filtering-net-kourier_{{ context }}"}

By default, the [informers](https://aly.arriqaaq.com/kubernetes-informers/) implementation for the Kubernetes `client-go` library fetches all resources of a particular type. This can lead to a substantial overhead when many resources are available, which can cause the Knative `net-kourier` ingress controller to fail on large clusters due to memory leaking. However, a filtering mechanism is available for the Knative `net-kourier` ingress controller, which enables the controller to only fetch Knative related secrets. You can enable this mechanism by setting an environment variable to the `KnativeServing` custom resource (CR).


:::important

If you enable secret filtering, all of your secrets need to be labeled with  `networking.internal.knative.dev/certificate-uid: "<id>"`. Otherwise, Knative Serving does not detect them, which leads to failures. You must label both new and existing secrets.

:::


**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}
*   A project that you created or that you have roles and permissions for to create applications and other workloads in {{ product_title }}.
*   Install the {{ ServerlessOperatorName }} and Knative Serving.
*   Install the OpenShift CLI (`oc`).

**Procedure**

*   Set the `ENABLE_SECRET_INFORMER_FILTERING_BY_CERT_UID` variable to `true` for `net-kourier-controller` in the `KnativeServing` CR:
    ```yaml title="Example KnativeServing CR"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    metadata:
     name: knative-serving
     namespace: knative-serving
    spec:
     deployments:
       - env:
         - container: controller
           envVars:
           - name: ENABLE_SECRET_INFORMER_FILTERING_BY_CERT_UID
             value: 'true'
         name: net-kourier-controller
    ```