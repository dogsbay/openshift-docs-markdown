{%- set _mod_docs_content_type = "PROCEDURE" %}
# Identifying available local queues {id="identifying-local-queues_{{ context }}"}

Before you can submit a job to a queue, you must find the name of the local queue. {._abstract}

**Prerequisites**

{% include "./snippets/prereqs-snippet-yaml-user.md" %}

**Procedure**

*   Run the following command to list available local queues in your namespace:
    ```terminal
    $ oc -n <namespace> get localqueues
    ```
    ```terminal title="Example output"
    NAME         CLUSTERQUEUE    PENDING WORKLOADS
    user-queue   cluster-queue   3
    ```