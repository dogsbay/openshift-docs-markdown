{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a horizontal pod autoscaler by using the web console {id="nodes-pods-autoscaling-creating-web-console_{{ context }}"}

You can use the web console to create a horizontal pod autoscaler (HPA) that specifies the minimum and maximum number of pods you want to run on a `Deployment` or `DeploymentConfig` object. You can also define the amount of CPU or memory usage that your pods should target. {._abstract}


:::note

An HPA cannot be added to deployments that are part of an Operator-backed service, Knative service, or Helm chart.

:::


The following procedure creates an HPA in the web console.

**Procedure**

1.  In the **Topology** view, click the node to reveal the side pane.
1.  From the **Actions** drop-down list, select **Add HorizontalPodAutoscaler** to open the **Add HorizontalPodAutoscaler** form.

    **Figure 1. Add HorizontalPodAutoscaler**

    ![Add HorizontalPodAutoscaler form](/images/node-add-hpa-action.png)
1.  From the **Add HorizontalPodAutoscaler** form, define the name, minimum and maximum pod limits, the CPU and memory usage, and click **Save**.

    :::note

    If any of the values for CPU and memory usage are missing, a warning is displayed.
    
    :::