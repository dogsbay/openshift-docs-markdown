{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring log retention time {id="cluster-logging-elasticsearch-retention_{{ context }}"}

You can configure a _retention policy_ that specifies how long the default Elasticsearch log store keeps indices for each of the three log sources: infrastructure logs, application logs, and audit logs.

To configure the retention policy, you set a `maxAge` parameter for each log source in the `ClusterLogging` custom resource (CR). The CR applies these values to the Elasticsearch rollover schedule, which determines when Elasticsearch deletes the rolled-over indices.

Elasticsearch rolls over an index, moving the current index and creating a new index, when an index matches any of the following conditions:

*   The index is older than the `rollover.maxAge` value in the `Elasticsearch` CR.
*   The index size is greater than 40 GB × the number of primary shards.
*   The index doc count is greater than 40960 KB × the number of primary shards.

Elasticsearch deletes the rolled-over indices based on the retention policy you configure. If you do not create a retention policy for any log sources, logs are deleted after seven days by default.

**Prerequisites**

*   The {{ clo }} and the {{ es_op }} must be installed.

**Procedure**

To configure the log retention time:

1.  Edit the `ClusterLogging` CR to add or modify the `retentionPolicy` parameter:
    ```yaml
    apiVersion: "logging.openshift.io/v1"
    kind: "ClusterLogging"
    ...
    spec:
      managementState: "Managed"
      logStore:
        type: "elasticsearch"
        retentionPolicy: (1)
          application:
            maxAge: 1d
          infra:
            maxAge: 7d
          audit:
            maxAge: 7d
        elasticsearch:
          nodeCount: 3
    ...
    ```
    1.  Specify the time that Elasticsearch should retain each log source. Enter an integer and a time designation: weeks(w), hours(h/H), minutes(m) and seconds(s). For example, `1d` for one day. Logs older than the `maxAge` are deleted. By default, logs are retained for seven days.
1.  You can verify the settings in the `Elasticsearch` custom resource (CR).

    For example, the Red Hat OpenShift Logging Operator updated the following `Elasticsearch` CR to configure a retention policy that includes settings to roll over active indices for the infrastructure logs every eight hours and the rolled-over indices are deleted seven days after rollover. {{ product_title }} checks every 15 minutes to determine if the indices need to be rolled over.
    ```yaml
    apiVersion: "logging.openshift.io/v1"
    kind: "Elasticsearch"
    metadata:
      name: "elasticsearch"
    spec:
    ...
      indexManagement:
        policies: (1)
          - name: infra-policy
            phases:
              delete:
                minAge: 7d (2)
              hot:
                actions:
                  rollover:
                    maxAge: 8h (3)
            pollInterval: 15m (4)
    ...
    ```
    1.  For each log source, the retention policy indicates when to delete and roll over logs for that source.
    1.  When {{ product_title }} deletes the rolled-over indices. This setting is the `maxAge` you set in the `ClusterLogging` CR.
    1.  The index age for {{ product_title }} to consider when rolling over the indices. This value is determined from the `maxAge` you set in the `ClusterLogging` CR.
    1.  When {{ product_title }} checks if the indices should be rolled over. This setting is the default and cannot be changed.

        :::note

        Modifying the `Elasticsearch` CR is not supported. All changes to the retention policies must be made in the `ClusterLogging` CR.
        
        :::


        The OpenShift Elasticsearch Operator deploys a cron job to roll over indices for each mapping using the defined policy, scheduled using the `pollInterval`.
        ```terminal
        $ oc get cronjob
        ```
        ```terminal title="Example output"
        NAME                     SCHEDULE       SUSPEND   ACTIVE   LAST SCHEDULE   AGE
        elasticsearch-im-app     */15 * * * *   False     0        <none>          4s
        elasticsearch-im-audit   */15 * * * *   False     0        <none>          4s
        elasticsearch-im-infra   */15 * * * *   False     0        <none>          4s
        ```