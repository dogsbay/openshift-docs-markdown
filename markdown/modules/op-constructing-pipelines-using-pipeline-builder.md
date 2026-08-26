{%- set _mod_docs_content_type = "PROCEDURE" %}
# Constructing pipelines using the Pipeline builder {id="op-constructing-pipelines-using-pipeline-builder_{{ context }}"}

In the **Developer** perspective of the console, you can use the **+Add** → **Pipeline** → **Pipeline builder** option to: {._abstract}

*   Configure pipelines using either the **Pipeline builder** or the **YAML view**.
*   Construct a pipeline flow using existing tasks and cluster tasks. When you install the {{ pipelines_shortname }} Operator, it adds reusable pipeline cluster tasks to your cluster.


:::important

In {{ pipelines_title }} 1.10, cluster task functionality is deprecated and is planned to be removed in a future release.

:::

*   Specify the type of resources required for the pipeline run, and if required, add additional parameters to the pipeline.
*   Reference these pipeline resources in each of the tasks in the pipeline as input and output resources.
*   If required, reference any additional parameters added to the pipeline in the task. The parameters for a task are prepopulated based on the specifications of the task.
*   Use the Operator-installed, reusable snippets and samples to create detailed pipelines.
*   Search and add tasks from your configured local Tekton Hub instance.


:::important

In the developer perspective, you can create a customized pipeline using your own set of curated tasks. To search, install, and upgrade your tasks directly from the developer console, your cluster administrator needs to install and deploy a local Tekton Hub instance and link that hub to the OpenShift Container Platform cluster. For more details, see _Using Tekton Hub with {{ pipelines_shortname }}_ in the _Additional resources_ section.
If you do not deploy any local Tekton Hub instance, by default, you can only access the cluster tasks, namespace tasks and public Tekton Hub tasks.

:::


**Procedure**

1.  In the **+Add** view of the **Developer** perspective, click the **Pipeline** tile to see the **Pipeline builder** page.
1.  Configure the pipeline using either the **Pipeline builder** view or the **YAML view**.

    :::note

    The **Pipeline builder** view supports a limited number of fields whereas the **YAML view** supports all available fields. Optionally, you can also use the Operator-installed, reusable snippets and samples to create detailed pipelines.
    
    :::


    **Figure 1. YAML view**

    ![op-pipeline-yaml](/images/op-pipeline-yaml.png)
1.  Configure your pipeline by using **Pipeline builder**:
    1.  In the **Name** field, enter a unique name for the pipeline.
    1.  In the **Tasks** section:
        1.  Click **Add task**.
        1.  Search for a task using the quick search field and select the required task from the displayed list.
        1.  Click **Add** or **Install and add**. In this example, use the **s2i-nodejs** task.

            :::note

            The search list contains all the Tekton Hub tasks and tasks available in the cluster. Also, if a task is already installed it will show **Add** to add the task whereas it will show **Install and add** to install and add the task. It will show **Update and add** when you add the same task with an updated version.
            
            :::

            *   To add sequential tasks to the pipeline:
                *   Click the plus icon to the right or left of the task → click **Add task**.
                *   Search for a task using the quick search field and select the required task from the displayed list.
                *   Click **Add** or **Install and add**.

                    **Figure 2. Pipeline builder**

                    ![op-pipeline-builder](/images/op-pipeline-builder.png)
            *   To add a final task:
                *   Click the **Add finally task** → Click **Add task**.
                *   Search for a task using the quick search field and select the required task from the displayed list.
                *   Click **Add** or **Install and add**.
    1.  In the **Resources** section, click **Add Resources** to specify the name and type of resources for the pipeline run. These resources are then used by the tasks in the pipeline as inputs and outputs. For this example:
        1.  Add an input resource. In the **Name** field, enter `Source`, and then from the **Resource Type** drop-down list, select **Git**.
        1.  Add an output resource. In the **Name** field, enter `Img`, and then from the **Resource Type** drop-down list, select **Image**.

            :::note

            A red icon appears next to the task if a resource is missing.
            
            :::

    1.  Optional: The **Parameters** for a task are pre-populated based on the specifications of the task. If required, use the **Add Parameters** link in the **Parameters** section to add additional parameters.
    1.  In the **Workspaces** section, click **Add workspace** and enter a unique workspace name in the **Name** field. You can add multiple workspaces to the pipeline.
    1.  In the **Tasks** section, click the **s2i-nodejs** task to see the side panel with details for the task. In the task side panel, specify the resources and parameters for the **s2i-nodejs** task:
        1.  If required, in the **Parameters** section, add more parameters to the default ones, by using the $(params.&lt;param-name>) syntax.
        1.  In the **Image** section, enter `Img` as specified in the **Resources** section.
        1.  Select a workspace from the **source** drop-down under **Workspaces** section.
    1.  Add resources, parameters, and workspaces to the **openshift-client** task.
1.  Click **Create** to create and view the pipeline in the **Pipeline Details** page.
1.  Click the **Actions** drop-down menu then click **Start**, to see the **Start Pipeline** page.
1.  The **Workspaces** section lists the workspaces you created earlier. Use the respective drop-down to specify the volume source for your workspace. You have the following options: **Empty Directory**, **Config Map**, **Secret**, **PersistentVolumeClaim**, or **VolumeClaimTemplate**.