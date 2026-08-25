{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling autoscaling for an existing machine pool using the UI {id="cloud-experts-getting-started-autoscaling-ui_{{ context }}"}

You can enable autoscaling on your machine pools in {{ cluster_manager }}. {._abstract}


:::note

Cluster autoscaling can be enabled at cluster creation by checking the **Enable autoscaling** checkbox when creating machine pools.

:::


**Procedure**

1.  Go to the **Machine pools** tab and click the three dots in the right..
1.  Click **Scale**, then **Enable autoscaling**.
1.  Run the following command to confirm that autoscaling was added:
    ```terminal
    $ rosa list machinepools -c <cluster-name>
    ```

    **Example output**
    ```terminal
    ID         AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS     TAINTS    AVAILABILITY ZONES
    Default    Yes          2-4       m5.xlarge                           us-east-1a
    ```