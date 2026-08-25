{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OADP Operator {id="installing-operator-oadp_{{ context }}"}

Install the {{ oadp_short }} Operator by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You must be logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
1.  Use the **Filter by keyword** field to find the **OADP Operator**.
1.  Select the **OADP Operator** and click **Install**.
1.  Click **Install** to install the Operator in the `openshift-adp` project.
1.  Click **Ecosystem** -> **Installed Operators** to verify the installation.