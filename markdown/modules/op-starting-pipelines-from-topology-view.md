{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting pipelines from Topology view {id="op-starting-pipelines-from-topology-view_{{ context }}"}

For pipelines created using the **From Git** option, you can use the **Topology** view to interact with pipelines after you start them:


:::note

To see the pipelines created using **Pipeline builder** in the **Topology** view, customize the pipeline labels to link the pipeline with the application workload.

:::


**Procedure**

1.  Click **Topology** in the left navigation panel.
1.  Click the application to display **Pipeline Runs** in the side panel.
1.  In **Pipeline Runs**, click **Start Last Run** to start a new pipeline run with the same parameters and resources as the previous one. This option is disabled if a pipeline run has not been initiated. You can also start a pipeline run when you create it.

    **Figure 1. Pipelines in Topology view**

    ![Pipelines in Topology view](/_assets/images/op_pipeline_topology1.png)

In the **Topology** page, hover to the left of the application to see the status of its pipeline run. After a pipeline is added, a bottom left icon indicates that there is an associated pipeline.