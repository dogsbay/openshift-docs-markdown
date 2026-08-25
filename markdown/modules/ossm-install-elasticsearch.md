{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ es_op }} {id="ossm-operator-install-elasticsearch_{{ context }}"}

The default {{ JaegerName }} deployment uses in-memory storage because it is designed to be installed quickly for those evaluating {{ DTProductName }}, giving demonstrations, or using {{ JaegerName }} in a test environment. If you plan to use {{ JaegerName }} in production, you must install and configure a persistent storage option, in this case, Elasticsearch.

**Prerequisites**

*   You have access to the {{ product_title }} web console.
*   You have access to the cluster as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.


:::warning

Do not install Community versions of the Operators. Community Operators are not supported.

:::



:::note

If you have already installed the {{ es_op }} as part of OpenShift Logging, you do not need to install the {{ es_op }} again. The {{ JaegerName }} Operator creates the Elasticsearch instance using the installed {{ es_op }}.

:::


**Procedure**

1.  Log in to the {{ product_title }} web console as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
1.  Navigate to **Ecosystem** → **Software Catalog**.
1.  Type **Elasticsearch** into the filter box to locate the {{ es_op }}.
1.  Click the **{{ es_op }}** provided by Red Hat to display information about the Operator.
1.  Click **Install**.
1.  On the **Install Operator** page, select the **stable** Update Channel. This automatically updates your Operator as new versions are released.
1.  Accept the default **All namespaces on the cluster (default)**. This installs the Operator in the default `openshift-operators-redhat` project and makes the Operator available to all projects in the cluster.

    :::note

    The Elasticsearch installation requires the **openshift-operators-redhat** namespace for the {{ es_op }}. The other {{ DTProductName }} Operators are installed in the `openshift-operators` namespace.
    
    :::

1.  Accept the default **Automatic** approval strategy. By accepting the default, when a new version of this Operator is available, Operator Lifecycle Manager (OLM) automatically upgrades the running instance of your Operator without human intervention. If you select **Manual** updates, when a newer version of an Operator is available, OLM creates an update request. As a cluster administrator, you must then manually approve that update request to have the Operator updated to the new version.

    :::note

    The **Manual** approval strategy requires a user with appropriate credentials to approve the Operator install and subscription process.
    
    :::

1.  Click **Install**.
1.  On the **Installed Operators** page, select the `openshift-operators-redhat` project. Wait for the **InstallSucceeded** status of the {{ es_op }} before continuing.