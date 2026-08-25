{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling Knative Eventing {id="serverless-uninstalling-knative-eventing_{{ context }}"}

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated %}
*   You have access to an {{ product_title }} account with cluster administrator or dedicated administrator access.
{% endif %}
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Delete the `KnativeEventing` CR:
    ```terminal
    $ oc delete knativeeventings.operator.knative.dev knative-eventing -n knative-eventing
    ```
1.  After the command has completed and all pods have been removed from the `knative-eventing` namespace, delete the namespace:
    ```terminal
    $ oc delete namespace knative-eventing
    ```