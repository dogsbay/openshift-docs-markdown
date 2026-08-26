{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rolling back a Helm release {id="odc-rolling-back-helm-release_{{ context }}"}

If a release fails, you can rollback the Helm release to a previous version.

**Procedure**

To rollback a release using the **Helm** view:

1.  In the **Developer** perspective, navigate to the **Helm** view to see the **Helm Releases** in the namespace.
1.  Click the Options menu {{ kebab }} adjoining the listed release, and select **Rollback**.
1.  In the **Rollback Helm Release** page, select the **Revision** you want to rollback to and click **Rollback**.
1.  In the **Helm Releases** page, click on the chart to see the details and resources for that release.
1.  Go to the **Revision History** tab to see all the revisions for the chart.

    **Figure 1. Helm revision history**

    ![odc_helm_revision_history](/images/odc_helm_revision_history.png)
1.  If required, you can further use the Options menu {{ kebab }} adjoining a particular revision and select the revision to rollback to.