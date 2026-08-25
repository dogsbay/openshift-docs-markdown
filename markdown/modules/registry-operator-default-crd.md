{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the Image Registry default route by using a CRD {id="registry-operator-default-crd_{{ context }}"}

In {{ product_title }}, the `Registry` Operator controls the {{ product_registry }} feature and you define this Operator in the `configs.imageregistry.operator.openshift.io` Custom Resource Definition (CRD). If you need to automatically enable the Image Registry default route, patch the Image Registry Operator CRD. {._abstract}

**Procedure**

*   Patch the Image Registry Operator CRD:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io/cluster --type merge -p '{"spec":{"defaultRoute":true}}'
    ```