{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Velero binary in the Velero deployment in the cluster {id="velero-obtaining-by-accessing-binary_{{ context }}"}

Use a shell command to access the Velero binary in the Velero deployment in the cluster. {._abstract}

**Prerequisites**

*   Your `DataProtectionApplication` custom resource has a status of `Reconcile complete`.

**Procedure**

*   Set the needed alias by using the following command:
    ```terminal
    $ alias velero='oc -n openshift-adp exec deployment/velero -c velero -it -- ./velero'
    ```