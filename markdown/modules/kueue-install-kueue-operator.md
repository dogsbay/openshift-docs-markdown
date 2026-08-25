{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ kueue_op }} {id="install-kueue-operator_{{ context }}"}

You can install the {{ kueue_op }} on a {{ product_title }} cluster by using the OperatorHub in the web console. {._abstract}

**Prerequisites**

*   You have administrator permissions on a {{ product_title }} cluster.
*   You have access to the {{ product_title }} web console.
*   You have installed and configured the {{ cert_manager_operator }} for your cluster.

**Procedure**

1.  In the {{ product_title }} web console, click **Operators** → **OperatorHub**.
1.  Choose **{{ kueue_op }}** from the list of available Operators, and click **Install**.
1.  Select **Enable Operator recommended cluster monitoring on this Namespace**.

    This option sets the `openshift.io/cluster-monitoring: "true"` label in the Namespace object.
    You must select this option to ensure that cluster monitoring scrapes the `openshift-kueue-operator` namespace.
1.  Click **Install**.

    :::note

    Alternatively, if you are creating the `Namespace` object by using YAML, ensure that you include the `openshift.io/cluster-monitoring: "true"` label:

    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        openshift.io/cluster-monitoring: "true"
      name: openshift-kueue-operator
    ```
    
    :::


**Verification**

*   Go to **Operators** → **Installed Operators** and confirm that the **{{ kueue_op }}** is listed with **Status** as **Succeeded**.