{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing pipeline logs in Kibana {id="op-viewing-pipeline-logs-in-kibana_{{ context }}"}

To view pipeline logs in the Kibana web console:

**Procedure**

1.  Log in to {{ product_title }} web console as a cluster administrator.
1.  In the top right of the menu bar, click the **grid** icon → **Observability** → **Logging**. The Kibana web console is displayed.
1.  Create an index pattern:
    1.  On the left navigation panel of the **Kibana** web console, click **Management**.
    1.  Click **Create index pattern**.
    1.  Under **Step 1 of 2: Define index pattern** → **Index pattern**, enter a **`*`** pattern and click **Next Step**.
    1.  Under **Step 2 of 2: Configure settings** → **Time filter field name**, select **@timestamp** from the drop-down menu, and click **Create index pattern**.
1.  Add a filter:
    1.  On the left navigation panel of the **Kibana** web console, click **Discover**.
    1.  Click **Add a filter +** → **Edit Query DSL**.

        :::note

        *   For each of the example filters that follows, edit the query and click **Save**.
        *   The filters are applied one after another.
        
        :::

        1.  Filter the containers related to pipelines:
            ```json title="Example query to filter pipelines containers"
            {
              "query": {
            	"match": {
              	"kubernetes.flat_labels": {
                	"query": "app_kubernetes_io/managed-by=tekton-pipelines",
                	"type": "phrase"
              	}
            	}
              }
            }
            ```
        1.  Filter all containers that are not `place-tools` container. As an illustration of using the graphical drop-down menus instead of editing the query DSL, consider the following approach:

            **Figure 1. Example of filtering using the drop-down fields**

            ![Not place-tools](/_assets/images/not-placetools.png)
        1.  Filter `pipelinerun` in labels for highlighting:
            ```json title="Example query to filter pipelinerun in labels for highlighting"
            {
              "query": {
            	"match": {
              	"kubernetes.flat_labels": {
                	"query": "tekton_dev/pipelineRun=",
                	"type": "phrase"
              	}
            	}
              }
            }
            ```
        1.  Filter `pipeline` in labels for highlighting:
            ```json title="Example query to filter pipeline in labels for highlighting"
            {
              "query": {
            	"match": {
              	"kubernetes.flat_labels": {
                	"query": "tekton_dev/pipeline=",
                	"type": "phrase"
              	}
            	}
              }
            }
            ```
    1.  From the **Available fields** list, select the following fields:
        *   `kubernetes.flat_labels`
        *   `message`

            Ensure that the selected fields are displayed under the **Selected fields** list.
    1.  The logs are displayed under the **message** field.

        **Figure 2. Filtered messages**

        ![Filtered messages](/_assets/images/filtered-messages.png)