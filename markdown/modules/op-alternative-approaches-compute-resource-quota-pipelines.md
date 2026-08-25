# Alternative approaches for limiting compute resource consumption in {{ pipelines_shortname }} {id="alternative-approaches-compute-resource-quota-pipelines_{{ context }}"}

To attain some degree of control over the usage of compute resources by a pipeline, consider the following alternative approaches:

*   Set resource requests and limits for each step in a task.
    ```yaml title="Example: Set resource requests and limits for each step in a task."
    ...
    spec:
      steps:
        - name: step-with-limts
          resources:
            requests:
              memory: 1Gi
              cpu: 500m
            limits:
              memory: 2Gi
              cpu: 800m
    ...
    ```
*   Set resource limits by specifying values for the `LimitRange` object. For more information on `LimitRange`, refer to [Restrict resource consumption with limit ranges](/nodes/clusters/nodes-cluster-limit-ranges#nodes-cluster-limit-ranges).
*   [Reduce pipeline resource consumption](/cicd/pipelines/reducing-pipelines-resource-consumption#reducing-pipelines-resource-consumption).
*   Set and manage [resource quotas per project](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project).
*   Ideally, the compute resource quota for a pipeline should be same as the total amount of compute resources consumed by the concurrently running pods in a pipeline run. However, the pods running the tasks consume compute resources based on the use case. For example, a Maven build task might require different compute resources for different applications that it builds. As a result, you cannot predetermine the compute resource quotas for tasks in a generic pipeline. For greater predictability and control over usage of compute resources, use customized pipelines for different applications.