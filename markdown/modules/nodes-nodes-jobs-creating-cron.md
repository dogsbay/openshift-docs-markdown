{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating cron jobs {id="nodes-nodes-jobs-creating-cron_{{ context }}"}

Create a cron job to schedule recurring tasks using cron expressions, configuring time zone, concurrency policies, history limits, and suspension behavior. {._abstract}

You create a cron job in {{ product_title }} by creating a job object.


:::note

You can also create and launch a cron job from a single command using `oc create cronjob`. The following command creates and launches a cron job similar to the one specified in the following example:

```terminal
$ oc create cronjob pi --image=perl --schedule='*/1 * * * *' -- perl -Mbignum=bpi -wle 'print bpi(2000)'
```

With `oc create cronjob`, the `--schedule` option accepts schedules in [cron format](https://en.wikipedia.org/wiki/Cron).

:::


**Procedure**

1.  Create a YAML file similar to the following:
    {%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    ```yaml
    apiVersion: batch/v1
    kind: CronJob
    metadata:
      name: pi
    spec:
      schedule: "*/1 * * * *"
      timeZone: Etc/UTC
      concurrencyPolicy: "Replace"
      startingDeadlineSeconds: 200
      suspend: true
      successfulJobsHistoryLimit: 3
      failedJobsHistoryLimit: 1
      jobTemplate:
        spec:
          template:
            metadata:
              labels:
                parent: "cronjobpi"
            spec:
              containers:
              - name: pi
                image: perl
                command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
              restartPolicy: OnFailure
    #...
    ```

    where:

    `spec.schedule`
    :   Specifies the schedule for the job in [cron format](https://en.wikipedia.org/wiki/Cron). In this example, the job will run every minute.

    `spec.timeZone`
    :   Specifies a time zone for the schedule. See [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for valid options. If not specified, the Kubernetes controller manager interprets the schedule relative to its local time zone. This value is optional.

    `spec.concurrencyPolicy`
    :   Specifies how to treat concurrent jobs within a cron job. Only one of the following concurrent policies may be specified. If not specified, this defaults to allowing concurrent executions: `Allow` (allows cron jobs to run concurrently), `Forbid` (forbids concurrent runs, skipping the next run if the previous has not finished yet), or `Replace` (cancels the currently running job and replaces it with a new one). This value is optional.

    `spec.startingDeadlineSeconds`
    :   Specifies a deadline (in seconds) for starting the job if it misses its scheduled time for any reason. Missed jobs executions will be counted as failed ones. If not specified, there is no deadline. This value is optional.

    `spec.suspend`
    :   Specifies a flag allowing the suspension of a cron job. If set to `true`, all subsequent executions will be suspended. This value is optional.

    `spec.successfulJobsHistoryLimit`
    :   Specifies the number of successful finished jobs to retain (defaults to 3).

    `spec.failedJobsHistoryLimit`
    :   Specifies the number of failed finished jobs to retain (defaults to 1).

    `spec.jobTemplate`
    :   Specifies the job template. This is similar to the job example.

    `spec.jobTemplate.spec.template.metadata.labels`
    :   Specifies labels for jobs spawned by this cron job.

    `spec.jobTemplate.spec.template.spec.restartPolicy`
    :   Specifies the restart policy of the pod. This does not apply to the job controller.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
        ```yaml
        apiVersion: batch/v1
        kind: CronJob
        metadata:
          name: pi
        spec:
          schedule: "*/1 * * * *"
          concurrencyPolicy: "Replace"
          startingDeadlineSeconds: 200
          suspend: true
          successfulJobsHistoryLimit: 3
          failedJobsHistoryLimit: 1
          jobTemplate:
            spec:
              template:
                metadata:
                  labels:
                    parent: "cronjobpi"
                spec:
                  containers:
                  - name: pi
                    image: perl
                    command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
                  restartPolicy: OnFailure
        ```
    where:


`spec.schedule`
:   Specifies the schedule for the job in [cron format](https://en.wikipedia.org/wiki/Cron). In this example, the job will run every minute.

`spec.concurrencyPolicy`
:   Specifies how to treat concurrent jobs within a cron job. Only one of the following concurrent policies may be specified. If not specified, this defaults to allowing concurrent executions: `Allow` (allows cron jobs to run concurrently), `Forbid` (forbids concurrent runs, skipping the next run if the previous has not finished yet), or `Replace` (cancels the currently running job and replaces it with a new one). This value is optional.

`spec.startingDeadlineSeconds`
:   Specifies a deadline (in seconds) for starting the job if it misses its scheduled time for any reason. Missed jobs executions will be counted as failed ones. If not specified, there is no deadline. This value is optional.

`spec.suspend`
:   Specifies a flag allowing the suspension of a cron job. If set to `true`, all subsequent executions will be suspended. This value is optional.

`spec.successfulJobsHistoryLimit`
:   Specifies the number of successful finished jobs to retain (defaults to 3).

`spec.failedJobsHistoryLimit`
:   Specifies the number of failed finished jobs to retain (defaults to 1).

`spec.jobTemplate`
:   Specifies the job template. This is similar to the job example.

`spec.jobTemplate.spec.template.metadata.labels`
:   Specifies labels for jobs spawned by this cron job.

`spec.jobTemplate.spec.template.spec.restartPolicy`
:   Specifies the restart policy of the pod. This does not apply to the job controller.
    The `.spec.successfulJobsHistoryLimit` and `.spec.failedJobsHistoryLimit` fields are optional.
    These fields specify how many completed and failed jobs should be kept.  By default, they are
    set to `3` and `1` respectively.  Setting a limit to `0` corresponds to keeping none of the corresponding
    kind of jobs after they finish.
{% endif %}

1.  Create the cron job:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```