{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a default local queue {id="configuring-localqueue-defaults_{{ context }}"}

As a cluster administrator, you can improve quota enforcement in your cluster by managing all jobs in selected namespaces without needing to explicitly label each job. You can do this by creating a default local queue.

A default local queue serves as the local queue for newly created jobs that do not have the `kueue.x-k8s.io/queue-name` label. After you create a default local queue, any new jobs created in the namespace without a `kueue.x-k8s.io/queue-name` label automatically update to have the `kueue.x-k8s.io/queue-name: default` label.


:::important

Preexisting jobs in a namespace are not affected when you create a default local queue. If jobs already exist in the namespace before you create the default local queue, you must label those jobs explicitly to assign them to a queue.

:::


**Prerequisites**

{% include "./snippets/prereqs-snippet-yaml-1.1.md" %}

*   You have created a `ClusterQueue` object.

**Procedure**

1.  Create a `LocalQueue` object named `default` as a YAML file:
    ```yaml title="Example of a default LocalQueue object"
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: LocalQueue
    metadata:
      namespace: team-namespace
      name: default
    spec:
      clusterQueue: cluster-queue
    ```
1.  Apply the `LocalQueue` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

1.  Create a job in the same namespace as the default local queue.
1.  Observe that the job updates with the `kueue.x-k8s.io/queue-name: default` label.