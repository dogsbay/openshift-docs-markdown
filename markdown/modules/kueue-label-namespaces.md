{%- set _mod_docs_content_type = "PROCEDURE" %}
# Labeling namespaces to allow {{ kueue_name }} to manage jobs {id="label-namespaces_{{ context }}"}

You must add the `kueue.openshift.io/managed=true` label to each namespace where you want {{ kueue_name }} to manage jobs, because the Operator only enforces policies on labeled namespaces. {._abstract}

**Prerequisites**

*   You have cluster administrator permissions.
*   The {{ kueue_name }} Operator is installed on your cluster, and you have created a `Kueue` custom resource (CR).
*   You have installed the {{ oc_first }}.

**Procedure**

*   Add the `kueue.openshift.io/managed=true` label to a namespace by running the following command:
    ```terminal
    $ oc label namespace <namespace> kueue.openshift.io/managed=true
    ```

    When you add this label, you instruct the {{ kueue_name }} Operator that the namespace is managed by its webhook admission controllers. As a result, any {{ kueue_name }} resources within that namespace are properly validated and mutated.