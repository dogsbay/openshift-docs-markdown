{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking health information {id="health-information-resources_{{ context }}"}

The {{ gitops_title }} Operator will install the GitOps backend service in the `openshift-gitops` namespace.

**Prerequisites**

*   The {{ gitops_title }} Operator is installed from the software catalog.
*   Ensure that your applications are synchronized by Argo CD.

**Procedure**

1.  Click **Environments** under the **Developer** perspective. The **Environments** page shows the list of applications along with their **Environment status**.
1.  Hover over the icons under the **Environment status** column to see the synchronization status of all the environments.
1.  Click the application name from the list to view the details of a specific application.
1.  In the **Application environments** page, if the **Resources** section under the **Overview** tab displays icons, hover over the icons to get status details.
    *   A broken heart indicates that resource issues have degraded the application’s performance.
    *   A yellow yield sign indicates that resource issues have delayed data about the application’s health.
1.  To view the deployment history of an application, click the **Deployment History** tab. The page includes details such as the **Last deployment**, **Description** (commit message), **Environment**, **Author**, and **Revision**.