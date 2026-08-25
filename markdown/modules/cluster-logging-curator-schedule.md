# Configuring the Curator schedule {id="cluster-logging-curator-schedule_{{ context }}"}

You can specify the schedule for Curator using the `Cluster Logging` custom resource
created by the OpenShift Logging installation.

**Prerequisites**

*   OpenShift Logging and Elasticsearch must be installed.

**Procedure**

To configure the Curator schedule:

1.  Edit the `ClusterLogging` custom resource in the `openshift-logging` project:
    ```terminal
    $ oc edit clusterlogging instance
    ```
    ```yaml
    apiVersion: "logging.openshift.io/v1"
    kind: "ClusterLogging"
    metadata:
      name: "instance"

    ...

      curation:
        curator:
          schedule: 30 3 * * * (1)
        type: curator
    ```
    1.  Specify the schedule for Curator in [cron format](https://en.wikipedia.org/wiki/Cron).

    :::note

    The time zone is set based on the host node where the Curator pod runs.
    
    :::