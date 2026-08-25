{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a secondary scheduler {id="nodes-secondary-scheduler-configuring-console_{{ context }}"}

After you have installed the {{ secondary_scheduler_operator }}, you can deploy a secondary scheduler to apply custom placement logic for specific pods. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}
*   You have access to the {{ product_title }} web console.
*   The {{ secondary_scheduler_operator_full }} is installed.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Create config map to hold the configuration for the secondary scheduler.
    1.  Navigate to **Workloads** → **ConfigMaps**.
    1.  Click **Create ConfigMap**.
    1.  In the YAML editor, enter the config map definition that contains the necessary `KubeSchedulerConfiguration` configuration. For example:
        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: "secondary-scheduler-config"
          namespace: "openshift-secondary-scheduler-operator"
        data:
          "config.yaml": |
            apiVersion: kubescheduler.config.k8s.io/v1
            kind: KubeSchedulerConfiguration
            leaderElection:
              leaderElect: false
            profiles:
              - schedulerName: secondary-scheduler
                plugins:
                  score:
                    disabled:
                      - name: NodeResourcesBalancedAllocation
                      - name: NodeResourcesLeastAllocated
        ```

        where:

        `metadata.name`
        :   Specifies the name of the config map. This is used in the **Scheduler Config** field when creating the `SecondaryScheduler` CR.

        `metadata.namespace`
        :   Specifies the namespace to create the config map in. The namespace must be `openshift-secondary-scheduler-operator`.

        `data."config.yaml".kind`
        :   Specifies the `KubeSchedulerConfiguration` resource for the secondary scheduler. For more information, see [`KubeSchedulerConfiguration`](https://kubernetes.io/docs/reference/config-api/kube-scheduler-config.v1/#kubescheduler-config-k8s-io-v1-KubeSchedulerConfiguration) in the Kubernetes API documentation.

        `data."config.yaml".profiles.schedulerName`
        :   Specifies the name of the secondary scheduler. Pods that set their `spec.schedulerName` field to this value are scheduled with this secondary scheduler.

        `data."config.yaml".profiles.plugins`
        :   Specifies the plugins to enable or disable for the secondary scheduler. For a list default scheduling plugins, see [Scheduling plugins](https://kubernetes.io/docs/reference/scheduling/config/#scheduling-plugins) in the Kubernetes documentation.

    1.  Click **Create**.
1.  Create the `SecondaryScheduler` CR:
    1.  Navigate to **Ecosystem** → **Installed Operators**.
    1.  Select **{{ secondary_scheduler_operator_full }}**.
    1.  Select the **Secondary Scheduler** tab and click **Create SecondaryScheduler**.
    1.  The **Name** field defaults to `cluster`; do not change this name.
    1.  The **schedulerConfig** field defaults to `secondary-scheduler-config`. Ensure that this value matches the name of the config map created earlier in this procedure.
    1.  In the **schedulerImage** field, enter the image name for your custom scheduler.

        :::important

        Red Hat does not directly support the functionality of your custom secondary scheduler.
        
        :::

    1.  Optional: To enable high availability for the secondary scheduler, configure the following settings:
        1.  Expand the **topology** section.
        1.  In the **mode** field, select **HighlyAvailable**.
        1.  In the **maxReplicas** field, enter the maximum number of secondary scheduler replicas to deploy. If unset, the maximum number of replicas is `3`.
        1.  In the **tolerations** field, enter tolerations to allow scheduler replicas on tainted nodes. If unset, no taints are tolerated.

        :::note

        To configure node selectors, use the **YAML view** option. Add the `spec.topology.highlyAvailableTopology.nodeSelector` field and enter the necessary node labels to target a specific group of nodes for scheduler replica placement. If unset, all nodes are considered.
        
        :::

    1.  Click **Create**.