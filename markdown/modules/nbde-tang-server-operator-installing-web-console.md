{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the NBDE Tang Server Operator using the web console {id="installing-nbde-tang-server-operator-using-web-console_{{ context }}"}

You can install the NBDE Tang Server Operator from the software catalog using the web console.

**Prerequisites**

*   You must have `cluster-admin` privileges on an {{ product_title }} cluster.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** → **Software Catalog**.
1.  Search for the NBDE Tang Server Operator:
    ![NBDE Tang Server Operator in the software catalog](/_assets/images/nbde-tang-server-operator-01-operatorhub.png)
1.  Click **Install**.
1.  On the **Operator Installation** screen, keep the **Update channel**, **Version**, **Installation mode**, **Installed Namespace**, and **Update approval** fields on the default values. 
1.  After you confirm the installation options by clicking **Install**, the console displays the installation confirmation.
    ![Confirmation of a NBDE Tang Server Operator installation](/_assets/images/nbde-tang-server-operator-03-confirmation.png)

**Verification**

1.  Navigate to the **Ecosystem** → **Installed Operators** page.
1.  Check that the NBDE Tang Server Operator is installed and its status is `Succeeded`.
    ![NBDE Tang Server Operator status](/_assets/images/nbde-tang-server-operator-05-succeeded.png)