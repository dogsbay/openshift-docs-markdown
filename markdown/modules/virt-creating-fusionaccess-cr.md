{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the FusionAccess CR {id="creating-fusionaccess-cr_{{ context }}"}

After installing the {{ FusionSAN }} Operator and creating a Kubernetes pull secret, you must create the `FusionAccess` custom resource (CR). {._abstract}

Creating the `FusionAccess` CR triggers the installation of the correct version of IBM Storage Scale and detects worker nodes with shared LUNs.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You installed the {{ FusionSAN }} Operator.
*   You created a Kubernetes pull secret.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Click the {{ FusionSAN }} Operator you installed.
1.  In the **Fusion Access for SAN** page, select the **Fusion Access** tab.
1.  Click **Create FusionAccess**.
1.  On the **Create FusionAccess** page, enter the object **Name**.
1.  Optional: You can choose to add **Labels** if they are relevant.
1.  Select the **IBM Storage Scale Version** from the drop-down list.
1.  Click **Create**.

**Verification**

*   In the **Fusion Access for SAN** Operator page, in the **Fusion Access** tab, verify that the created `FusionAccess` CR is displayed with the status **Ready**.