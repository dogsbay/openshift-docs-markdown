{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating Helm releases using the Developer perspective {id="odc-creating-helm-releases-using-developer-perspective_{{ context }}"}

You can use either the **Developer** perspective in the web console or the CLI to select and create a release from the Helm charts listed in the **Developer Catalog**. You can create Helm releases by installing Helm charts and see them in the **Developer** perspective of the web console.

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have logged in to the web console and have switched to [the **Developer** perspective](/web_console/web-console-overview#about-developer-perspective_web-console-overview).
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have logged in to the web console and have switched to the **Developer** perspective.
{% endif %}

**Procedure**

To create Helm releases from the Helm charts provided in the **Developer Catalog**:

1.  In the **Developer** perspective, navigate to the **+Add** view and select a project. Then click **Helm Chart** option to see all the Helm Charts in the **Developer Catalog**.
1.  Select a chart and read the description, README, and other details about the chart.
1.  Click **Create**.

    **Figure 1. Helm charts in developer catalog**

    ![odc_helm_chart_devcatalog_new](/_assets/images/odc_helm_chart_devcatalog_new.png)
1.  In the **Create Helm Release** page:
    1.  Enter a unique name for the release in the **Release Name** field.
    1.  Select the required chart version from the **Chart Version** drop-down list.
    1.  Configure your Helm chart by using the **Form View** or the **YAML View**.

        :::note

        Where available, you can switch between the **YAML View** and **Form View**. The data is persisted when switching between the views.
        
        :::

    1.  Click **Create** to create a Helm release. The web console displays the new release in the **Topology** view.

        If a Helm chart has release notes, the web console displays them.

        If a Helm chart creates workloads, the web console displays them on the **Topology** or **Helm release details** page. The workloads are `DaemonSet`, `CronJob`, `Pod`, `Deployment`, and `DeploymentConfig`.
    1.  View the newly created Helm release in the **Helm Releases** page.

You can upgrade, rollback, or delete a Helm release by using the **Actions** button on the side panel or by right-clicking a Helm release.