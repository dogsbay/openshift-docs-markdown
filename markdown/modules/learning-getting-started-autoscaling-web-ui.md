{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling autoscaling for an existing machine pool using the UI {id="learning-getting-started-autoscaling-web-ui_{{ context }}"}

You can enable cluster autoscaling when creating a cluster to ensure your environment automatically adapts to workload demands. To do this, select the **Enable autoscaling** checkbox when you create machine pools. {._abstract}

**Procedure**

1.  Go to the **Machine pools** tab and click the three dots in the right..
1.  Click **Edit**, then **Enable autoscaling**.
1.  Edit the number of minimum and maximum node counts or leave the default numbers.
1.  Click **Save**.
1.  Run the following command to confirm that autoscaling was added:
    ```terminal
    $ rosa list machinepools -c <cluster-name>
    ```

    **For example**:
    ```terminal
    ID       AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONE  SUBNET                    DISK SIZE  VERSION  AUTOREPAIR  
    workers  Yes          2/2-4     m5.xlarge                          us-east-1f         subnet-<subnet_id>  300 GiB    4.14.36  Yes 
    ```