{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a local queue for admission fair sharing (optional) {id="configuring-localqueue-for-admission-fair-sharing_{{ context }}"}

Optionally, you can configure `fairSharing` section in your `LocalQueue` object to adjust its weight in the fair sharing calculation. The higher the weight, the lower the penalty. For example, specifying a weight of `2` treats the queue as if it is used by half as many resources. {._abstract}

**Procedure**

*   Specify a `weight` value as shown in the following example:
    ```yaml
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: LocalQueue
    metadata:
      name: team-a-queue
      namespace: team-a
    spec:
      clusterQueue: shared-queue
      fairSharing:
        weight: "2"  # This queue will be treated as if it used half as many resources
    ```