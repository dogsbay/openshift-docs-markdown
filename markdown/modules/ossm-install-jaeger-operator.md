{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ JaegerOperator }} Operator {id="ossm-jaeger-operator-install_{{ context }}"}

You can install the {{ JaegerOperator }} Operator through the software catalog.

{% include "./snippets/distr-tracing-assembly-tip-for-jaeger-replacements.md" %}

By default, the Operator is installed in the `openshift-operators` project.

**Prerequisites**

*   You have access to the {{ product_title }} web console.
*   You have access to the cluster as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
*   If you require persistent storage, you must install the {{ es_op }} before installing the {{ JaegerOperator }} Operator.

**Procedure**

1.  Log in to the {{ product_title }} web console as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
1.  Navigate to **Ecosystem** → **Software Catalog**.
1.  Search for the {{ JaegerOperator }} Operator by entering **distributed tracing platform** in the search field.
1.  Select the **{{ JaegerOperator }}** Operator, which is **provided by Red Hat**, to display information about the Operator.
1.  Click **Install**.
1.  For the **Update channel** on the **Install Operator** page, select **stable** to automatically update the Operator when new versions are released.
1.  Accept the default **All namespaces on the cluster (default)**. This installs the Operator in the default `openshift-operators` project and makes the Operator available to all projects in the cluster.
1.  Accept the default **Automatic** approval strategy.

    :::note

    If you accept this default, the Operator Lifecycle Manager (OLM) automatically upgrades the running instance of this Operator when a new version of the Operator becomes available.

    If you select **Manual** updates, the OLM creates an update request when a new version of the Operator becomes available. To update the Operator to the new version, you must then manually approve the update request as a cluster administrator. The **Manual** approval strategy requires a cluster administrator to manually approve Operator installation and subscription.
    
    :::

1.  Click **Install**.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  On the **Installed Operators** page, select the `openshift-operators` project. Wait for the **Succeeded** status of the {{ JaegerOperator }} Operator before continuing.