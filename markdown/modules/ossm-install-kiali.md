{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Kiali Operator {id="ossm-install-kiali_{{ context }}"}

You must install the Kiali Operator for the {{ SMProductName }} Operator to install the {{ SMProductShortName }} control plane.


:::warning

Do not install Community versions of the Operators. Community Operators are not supported.

:::


**Prerequisites**

*   Access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** -> **Software Catalog**.
1.  Type **Kiali** into the filter box to find the Kiali Operator.
1.  Click the **Kiali Operator** provided by Red Hat to display information about the Operator.
1.  Click **Install**.
1.  On the **Operator Installation** page, select the **stable** Update Channel.
1.  Select **All namespaces on the cluster (default)**. This installs the Operator in the default `openshift-operators` project and makes the Operator available to all projects in the cluster.
1.  Select the **Automatic** Approval Strategy.

    :::note

    The Manual approval strategy requires a user with appropriate credentials to approve the Operator install and subscription process.
    
    :::

1.  Click **Install**.
1.  The **Installed Operators** page displays the Kiali Operator’s installation progress.