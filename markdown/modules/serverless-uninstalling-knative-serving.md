{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling Knative Serving {id="serverless-uninstalling-knative-serving_{{ context }}"}

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster administrator or dedicated administrator access.
{% endif %}
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Delete the `KnativeServing` CR:
    ```terminal
    $ oc delete knativeservings.operator.knative.dev knative-serving -n knative-serving
    ```
1.  After the command has completed and all pods have been removed from the `knative-serving` namespace, delete the namespace:
    ```terminal
    $ oc delete namespace knative-serving
    ```