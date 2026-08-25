{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing Argo CD {id="gitops-argo-cd-installation_{{ context }}"}

To manage cluster configurations or deploy applications, you can install and deploy a new Argo CD instance.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click **Ecosystem** → **Installed Operators**.
1.  Create or select the project where you want to install the Argo CD instance from the **Project** drop-down menu.
1.  Select **OpenShift GitOps Operator** from the installed operators and select the **Argo CD** tab.
1.  Click **Create** to configure the parameters:
    1.  Enter the **Name** of the instance. By default, the **Name** is set to **argocd**.
    1.  Create an external OS Route to access Argo CD server. Click **Server** → **Route** and check **Enabled**.
1.  To open the Argo CD web UI, click the route by navigating to **Networking → Routes → &lt;instance name>-server** in the project where the Argo CD instance is installed.