{%- set _mod_docs_content_type = "PROCEDURE" %}
# View security context constraints in a namespace {id="microshift-viewing-security-context_{{ context }}"}

You can view and check the security context constraints (SCC) permissions in a given namespace using the OpenShift CLI (`oc`). {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).

**Procedure**

*   To view the security context constraints in your namespace, run the following command:
    ```terminal
    $ oc get --show-labels namespace <namespace>
    ```