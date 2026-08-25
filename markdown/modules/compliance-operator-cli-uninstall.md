{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the OpenShift Compliance Operator from {{ product_title }} using the CLI {id="compliance-operator-uninstall-cli_{{ context }}"}

To remove the Compliance Operator, you must first delete the objects in the namespace. After the objects are removed, you can remove the Operator and its namespace by deleting the **openshift-compliance** project. {._abstract}

**Prerequisites**

*   Access to an {{ product_title }} cluster by using an account with `cluster-admin` permissions.
*   The OpenShift Compliance Operator is installed.

**Procedure**

1.  Delete all objects in the namespace.
    1.  Delete the `ScanSettingBinding` objects:
        ```terminal
        $ oc delete ssb --all -n openshift-compliance
        ```
    1.  Delete the `ScanSetting` objects:
        ```terminal
        $ oc delete ss --all -n openshift-compliance
        ```
    1.  Delete the `ComplianceSuite` objects:
        ```terminal
        $ oc delete suite --all -n openshift-compliance
        ```
    1.  Delete the `ComplianceScan` objects:
        ```terminal
        $ oc delete scan --all -n openshift-compliance
        ```
    1.  Delete the `ProfileBundle` objects:
        ```terminal
        $ oc delete profilebundle.compliance --all -n openshift-compliance
        ```
1.  Delete the Subscription object:
    ```terminal
    $ oc delete sub --all -n openshift-compliance
    ```
1.  Delete the CSV object:
    ```terminal
    $ oc delete csv --all -n openshift-compliance
    ```
1.  Delete the project:
    ```terminal
    $ oc delete project openshift-compliance
    ```
    ```terminal title="Example output"
    project.project.openshift.io "openshift-compliance" deleted
    ```

**Verification**

1.  Confirm the namespace is deleted:
    ```terminal
    $ oc get project/openshift-compliance
    ```
    ```terminal title="Example output"
    Error from server (NotFound): namespaces "openshift-compliance" not found
    ```