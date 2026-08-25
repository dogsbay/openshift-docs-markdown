{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing {{ ServerlessProductName }} Operator and API CRDs {id="serverless-deleting-crds_{{ context }}"}

Delete the Operator and API CRDs using the following procedure.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster administrator or dedicated administrator access.
{% endif %}
*   You have uninstalled Knative Serving and removed the {{ ServerlessOperatorName }}.

**Procedure**

*   To delete the remaining {{ ServerlessProductName }} CRDs, enter the following command:
    ```terminal
    $ oc get crd -oname | grep 'knative.dev' | xargs oc delete
    ```