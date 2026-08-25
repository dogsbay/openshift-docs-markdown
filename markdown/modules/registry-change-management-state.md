{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the image registry’s management state {id="registry-change-management-state_{{ context }}"}

To start the image registry, you must change the Image Registry Operator configuration’s `managementState` from `Removed` to `Managed`. {._abstract}

**Procedure**

*   Change `managementState` Image Registry Operator configuration from `Removed` to `Managed`. For example:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io cluster --type merge --patch '{"spec":{"managementState":"Managed"}}'
    ```