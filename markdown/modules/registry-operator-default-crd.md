{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable the Image Registry default route by using a CRD {id="registry-operator-default-crd_{{ context }}"}

In {{ product_title }}, the `Registry` Operator controls the {{ product_registry }} feature by using the `configs.imageregistry.operator.openshift.io` CRD. Patch this CRD to automatically enable the Image Registry default route. {._abstract}

**Procedure**

*   Patch the Image Registry Operator CRD:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io/cluster --type merge -p '{"spec":{"defaultRoute":true}}'
    ```