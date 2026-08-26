{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a Tang server using the NBDE Tang Server Operator {id="deploying-nbde-tang-server_{{ context }}"}

You can deploy and quickly configure one or more Tang servers using the NBDE Tang Server Operator in the web console.

**Prerequisites**

*   You must have `cluster-admin` privileges on an {{ product_title }} cluster.
*   You have installed the NBDE Tang Server Operator on your OCP cluster.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** → **Software Catalog**.
1.  Select **Project**, and click **Create Project**:
    ![Create Project in the web console](/images/nbde-tang-server-operator-07-create-project.png)
1.  On the `Create Project` page, fill in the required information, for example:
    ![Example values on the Create Project page](/images/nbde-tang-server-operator-09-project-values.png)
1.  Click **Create**.
1.  NBDE Tang Server replicas require a Persistent Volume Claim (PVC) for storing encryption keys. In the web console, navigate to **Storage** → **PersistentVolumeClaims**:
    ![PersistentVolumeClaims in the Storage menu](/images/nbde-tang-server-operator-11-pvc.png)
1.  On the following `PersistentVolumeClaims` screen, click **Create PersistentVolumeClaim**.
1.  On the `Create PersistentVolumeClaim` page, select a storage that fits your deployment scenario. Consider how often you want to rotate the encryption keys. Name your PVC and choose the claimed storage capacity, for example:
    ![Create PersistentVolumeClaims page](/images/nbde-tang-server-operator-13-create-pvc.png)
1.  Navigate to **Ecosystem** → **Installed Operators**, and click **NBDE Tang Server**.
1.  Click **Create instance**.
    ![Create NBDE Tang Server instance](/images/nbde-tang-server-operator-15-create-instance.png)
1.  On the `Create TangServer` page, choose the name of the Tang Server instance, amount of replicas, and specify the name of the previously created Persistent Volume Claim, for example:
    ![Create TangServer page](/images/nbde-tang-server-operator-17-create-tangserver.png)
1.  After you enter the required values a change settings that differ from the default values in your scenario, click **Create**.