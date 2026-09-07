{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the DPF namespace {id="nw-dpf-creating-dpf-namespace_{{ context }}"}

You must create a dedicated namespace for the DPF Operator and its components before installing the Operator. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

*   Create the `dpf-operator-system` namespace:
    ```terminal
    $ oc create namespace dpf-operator-system
    ```

**Verification**

*   Verify that the namespace was created:
    ```terminal
    $ oc get namespace dpf-operator-system
    ```