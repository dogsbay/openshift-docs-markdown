{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ pipelines_title }} General Availability 1.6 {id="op-release-notes-1-6_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.6 is available on {{ product_title }} 4.9.

## New features {id="new-features-1-6_{{ context }}"}

In addition to the fixes and stability improvements, the following sections highlight what is new in {{ pipelines_title }} 1.6.

*   With this update, you can configure a pipeline or task `start` command to return a YAML or JSON-formatted string by using the `--output <string>`, where `<string>` is `yaml` or `json`. Otherwise, without the `--output` option, the `start` command returns a human-friendly message that is hard for other programs to parse. Returning a YAML or JSON-formatted string is useful for continuous integration (CI) environments. For example, after a resource is created, you can use `yq` or `jq` to parse the YAML or JSON-formatted message about the resource and wait until that resource is terminated without using the `showlog` option.
*   With this update, you can authenticate to a registry using the `auth.json` authentication file of Podman. For example, you can use `tkn bundle push` to push to a remote registry using Podman instead of Docker CLI.
*   With this update, if you use the `tkn [taskrun | pipelinerun] delete --all` command, you can preserve runs that are younger than a specified number of minutes by using the new `--keep-since <minutes>` option. For example, to keep runs that are less than five minutes old, you enter `tkn [taskrun | pipelinerun] delete -all --keep-since 5`.
*   With this update, when you delete task runs or pipeline runs, you can use the `--parent-resource` and `--keep-since` options together. For example, the `tkn pipelinerun delete --pipeline pipelinename --keep-since 5` command preserves pipeline runs whose parent resource is named `pipelinename` and whose age is five minutes or less. The `tkn tr delete -t <taskname> --keep-since 5` and `tkn tr delete --clustertask <taskname> --keep-since 5` commands work similarly for task runs.
*   This update adds support for the triggers resources to work with `v1beta1` resources.

*   This update adds an `ignore-running` option to the `tkn pipelinerun delete` and `tkn taskrun delete` commands.
*   This update adds a `create` subcommand to the `tkn task` and `tkn clustertask` commands.
*   With this update, when you use the `tkn pipelinerun delete --all` command, you can use the new `--label <string>` option to filter the pipeline runs by label. Optionally, you can use the `--label` option with `=` and `==` as equality operators, or `!=` as an inequality operator. For example, the `tkn pipelinerun delete --all --label asdf` and  `tkn pipelinerun delete --all --label==asdf` commands both delete all the pipeline runs that have the `asdf` label.
*   With this update, you can fetch the version of installed Tekton components from the config map or, if the config map is not present, from the deployment controller.

*   With this update, triggers support the `feature-flags` and `config-defaults` config map to configure feature flags and to set default values respectively.
*   This update adds a new metric, `eventlistener_event_count`, that you can use to count events received by the `EventListener` resource.
*   This update adds `v1beta1` Go API types. With this update, triggers now support the `v1beta1` API version.

    With the current release, the `v1alpha1` features are now deprecated and will be removed in a future release. Begin using the `v1beta1` features instead.

*   In the current release, auto-prunning of resources is enabled by default. In addition, you can configure auto-prunning of task run and pipeline run for each namespace separately, by using the following new annotations:
    *   `operator.tekton.dev/prune.schedule`: If the value of this annotation is different from the value specified at the `TektonConfig` custom resource definition, a new cron job in that namespace is created.
    *   `operator.tekton.dev/prune.skip`: When set to `true`, the namespace for which it is configured will not be prunned.
    *   `operator.tekton.dev/prune.resources`: This annotation accepts a comma-separated list of resources. To prune a single resource such as a pipeline run, set this annotation to `"pipelinerun"`. To prune multiple resources, such as task run and pipeline run, set this annotation to `"taskrun, pipelinerun"`.
    *   `operator.tekton.dev/prune.keep`: Use this annotation to retain a resource without prunning.
    *   `operator.tekton.dev/prune.keep-since`: Use this annotation to retain resources based on their age. The value for this annotation must be equal to the age of the resource in minutes. For example, to retain resources which were created not more than five days ago, set `keep-since` to `7200`.

        :::note

        The `keep` and `keep-since` annotations are mutually exclusive. For any resource, you must configure only one of them.
        
        :::

    *   `operator.tekton.dev/prune.strategy`: Set the value of this annotation to either `keep` or `keep-since`.
*   Administrators can disable the creation of the `pipeline` service account for the entire cluster, and prevent privilege escalation by misusing the associated SCC, which is very similar to `anyuid`.
*   You can now configure feature flags and components by using the `TektonConfig` custom resource (CR) and the CRs for individual components, such as `TektonPipeline` and `TektonTriggers`. This level of granularity helps customize and test alpha features such as the Tekton OCI bundle for individual components.
*   You can now configure optional `Timeouts` field for the `PipelineRun` resource. For example, you can configure timeouts separately for a pipeline run, each task run, and the `finally` tasks.
*   The pods generated by the `TaskRun` resource now sets the `activeDeadlineSeconds` field of the pods. This enables OpenShift to consider them as terminating, and allows you to use specifically scoped `ResourceQuota` object for the pods.
*   You can use configmaps to eliminate metrics tags or labels type on a task run, pipeline run, task, and pipeline. In addition, you can configure different types of metrics for measuring duration, such as a histogram, gauge, or last value.
*   You can define requests and limits on a pod coherently, as Tekton now fully supports the `LimitRange` object by considering the `Min`, `Max`, `Default`, and `DefaultRequest` fields.
*   The following alpha features are introduced:
    *   A pipeline run can now stop after running the `finally` tasks, rather than the previous behavior of stopping the execution of all task run directly. This update adds the following `spec.status` values:
        *   `StoppedRunFinally` will stop the currently running tasks after they are completed, and then run the `finally` tasks.
        *   `CancelledRunFinally` will immediately cancel the running tasks, and then run the `finally` tasks.
        *   `Cancelled` will retain the previous behavior provided by the `PipelineRunCancelled` status.

            :::note

            The `Cancelled` status replaces the deprecated `PipelineRunCancelled` status, which will be removed in the `v1` version.
            
            :::

    *   You can now use the `oc debug` command to put a task run into debug mode, which pauses the execution and allows you to inspect specific steps in a pod.
    *   When you set the `onError` field of a step to `continue`, the exit code for the step is recorded and passed on to subsequent steps. However, the task run does not fail and the execution of the rest of the steps in the task continues. To retain the existing behavior, you can set the value of the `onError` field to `stopAndFail`.
    *   Tasks can now accept more parameters than are actually used. When the alpha feature flag is enabled, the parameters can implicitly propagate to inlined specs. For example, an inlined task can access parameters of its parent pipeline run, without explicitly defining each parameter for the task.
    *   If you enable the flag for the alpha features, the conditions under `When` expressions will only apply to the task with which it is directly associated, and not the dependents of the task. To apply the `When` expressions to the associated task and its dependents, you must associate the expression with each dependent task separately. Note that, going forward, this will be the default behavior of the `When` expressions in any new API versions of Tekton. The existing default behavior will be deprecated in favor of this update.
*   The current release enables you to configure node selection by specifying the `nodeSelector` and `tolerations` values in the `TektonConfig` custom resource (CR). The Operator adds these values to all the deployments that it creates.
    *   To configure node selection for the Operator’s controller and webhook deployment, you edit the `config.nodeSelector` and `config.tolerations` fields in the specification for the `Subscription` CR, after installing the Operator.
    *   To deploy the rest of the control plane pods of {{ pipelines_shortname }} on an infrastructure node, update the `TektonConfig` CR with the `nodeSelector` and `tolerations` fields. The modifications are then applied to all the pods created by Operator.

## Deprecated features {id="deprecated-features-1-6_{{ context }}"}

*   In CLI 0.21.0, support for all `v1alpha1` resources for `clustertask`, `task`, `taskrun`, `pipeline`, and `pipelinerun` commands are deprecated. These resources are now deprecated and will be removed in a future release.

*   In Tekton Triggers v0.16.0, the redundant `status` label is removed from the metrics for the `EventListener` resource.

    :::important

    Breaking change: The `status` label has been removed from the `eventlistener_http_duration_seconds_*` metric.
    Remove queries that are based on the `status` label.
    
    :::

*   With the current release, the `v1alpha1` features are now deprecated and will be removed in a future release. With this update, you can begin using the `v1beta1` Go API types instead. Triggers now supports the `v1beta1` API version.
*   With the current release, the `EventListener` resource sends a response before the triggers finish processing.

    :::important

    Breaking change: With this change, the `EventListener` resource stops responding with a `201 Created` status code when it creates resources. Instead, it responds with a `202 Accepted` response code.
    
    :::

*   The current release removes the `podTemplate` field from the `EventListener` resource.

    :::important

    Breaking change: The `podTemplate` field, which was deprecated as part of [#1100](https://github.com/tektoncd/triggers/pull/1100), has been removed.
    
    :::

*   The current release removes the deprecated `replicas` field from the specification for the `EventListener` resource.

    :::important

    Breaking change: The deprecated `replicas` field has been removed.
    
    :::


*   In {{ pipelines_title }} 1.6, the values of `HOME="/tekton/home"` and `workingDir="/workspace"` are removed from the specification of the `Step` objects.

    Instead, {{ pipelines_title }} sets `HOME` and `workingDir` to the values defined by the containers running the `Step` objects. You can override these values in the specification of your `Step` objects.

    To use the older behavior, you can change the `disable-working-directory-overwrite` and `disable-home-env-overwrite` fields in the `TektonConfig` CR to `false`:
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
      kind: TektonConfig
      metadata:
        name: config
      spec:
        pipeline:
          disable-working-directory-overwrite: false
          disable-home-env-overwrite: false
      ...
    ```

    :::important

    The `disable-working-directory-overwrite` and `disable-home-env-overwrite` fields in the `TektonConfig` CR are now deprecated and will be removed in a future release.
    
    :::


## Known issues {id="known-issues-1-6_{{ context }}"}

*   When you run Maven and Jib-Maven cluster tasks, the default container image is supported only on Intel (x86) architecture. Therefore, tasks will fail on {{ ibm_power_name }} Systems (ppc64le), {{ ibm_z_name }}, and {{ ibm_linuxone_name }} (s390x) clusters. As a workaround, you can specify a custom image by setting the `MAVEN_IMAGE` parameter value to `maven:3.6.3-adoptopenjdk-11`.
*   On {{ ibm_power_name }} Systems, {{ ibm_z_name }}, and {{ ibm_linuxone_name }}, the `s2i-dotnet` cluster task is unsupported.
*   Before you install tasks based on the Tekton Catalog on {{ ibm_power_name }} Systems (ppc64le), {{ ibm_z_name }}, and {{ ibm_linuxone_name }} (s390x) using `tkn hub`, verify if the task can be executed on these platforms. To check if `ppc64le` and `s390x` are listed in the "Platforms" section of the task information, you can run the following command: `tkn hub info task <name>`
*   You cannot use the `nodejs:14-ubi8-minimal` image stream because doing so generates the following errors:
    ```terminal
    STEP 7: RUN /usr/libexec/s2i/assemble
    /bin/sh: /usr/libexec/s2i/assemble: No such file or directory
    subprocess exited with status 127
    subprocess exited with status 127
    error building at STEP "RUN /usr/libexec/s2i/assemble": exit status 127
    time="2021-11-04T13:05:26Z" level=error msg="exit status 127"
    ```

## Fixed issues {id="fixed-issues-1-6_{{ context }}"}

*   The `tkn hub` command is now supported on {{ ibm_power_name }}, {{ ibm_z_name }}, and LinuxONE.

*   Before this update, the terminal was not available after the user ran a `tkn` command, and the pipeline run was done, even if `retries` were specified. Specifying a timeout in the task run or pipeline run had no effect. This update fixes the issue so that the terminal is available after running the command.
*   Before this update, running `tkn pipelinerun delete --all` would delete all resources. This update prevents the resources in the running state from getting deleted.
*   Before this update, using the `tkn version --component=<component>` command did not return the component version. This update fixes the issue so that this command returns the component version.
*   Before this update, when you used the `tkn pr logs` command, it displayed the pipelines output logs in the wrong task order. This update resolves the issue so that logs of completed `PipelineRuns` are listed in the appropriate `TaskRun` execution order.

*   Before this update, editing the specification of a running pipeline might prevent the pipeline run from stopping when it was complete. This update fixes the issue by fetching the definition only once and then using the specification stored in the status for verification. This change reduces the probability of a race condition when a `PipelineRun` or a `TaskRun` refers to a `Pipeline` or `Task` that changes while it is running.
*   `When` expression values can now have array parameter references, such as: `values: [$(params.arrayParam[*])]`.

## Release notes for {{ pipelines_title }} General Availability 1.6.1 {id="release-notes-1-6-1_{{ context }}"}

### Known issues {id="known-issues-1-6-1_{{ context }}"}

*   After upgrading to {{ pipelines_title }} 1.6.1 from an older version, {{ pipelines_shortname }} might enter an inconsistent state where you are unable to perform any operations (create/delete/apply) on Tekton resources (tasks and pipelines). For example, while deleting a resource, you might encounter the following error:
    ```terminal
    Error from server (InternalError): Internal error occurred: failed calling webhook "validation.webhook.pipeline.tekton.dev": Post "https://tekton-pipelines-webhook.openshift-pipelines.svc:443/resource-validation?timeout=10s": service "tekton-pipelines-webhook" not found.
    ```

### Fixed issues {id="fixed-issues-1-6-1_{{ context }}"}

*   The `SSL_CERT_DIR` environment variable (`/tekton-custom-certs`) set by {{ pipelines_title }} will not override the following default system directories with certificate files:
    *   `/etc/pki/tls/certs`
    *   `/etc/ssl/certs`
    *   `/system/etc/security/cacerts`
*   The Horizontal Pod Autoscaler can manage the replica count of deployments controlled by the {{ pipelines_title }} Operator. From this release onward, if the count is changed by an end user or an on-cluster agent, the {{ pipelines_title }} Operator will not reset the replica count of deployments managed by it. However, the replicas will be reset when you upgrade the {{ pipelines_title }} Operator.
*   The pod serving the `tkn` CLI will now be scheduled on nodes, based on the node selector and toleration limits specified in the `TektonConfig` custom resource.

## Release notes for {{ pipelines_title }} General Availability 1.6.2 {id="release-notes-1-6-2_{{ context }}"}

### Known issues {id="known-issues-1-6-2_{{ context }}"}

*   When you create a new project, the creation of the `pipeline` service account is delayed, and removal of existing cluster tasks and pipeline templates takes more than 10 minutes.

### Fixed issues {id="fixed-issues-1-6-2_{{ context }}"}

*   Before this update, multiple instances of Tekton installer sets were created for a pipeline after upgrading to {{ pipelines_title }} 1.6.1 from an older version. With this update, the Operator ensures that only one instance of each type of `TektonInstallerSet` exists after an upgrade.
*   Before this update, all the reconcilers in the Operator used the component version to decide resource recreation during an upgrade to {{ pipelines_title }} 1.6.1 from an older version. As a result, those resources were not recreated whose component versions did not change in the upgrade. With this update, the Operator uses the Operator version instead of the component version to decide resource recreation during an upgrade.
*   Before this update, the pipelines webhook service was missing in the cluster after an upgrade. This was due to an upgrade deadlock on the config maps. With this update, a mechanism is added to disable webhook validation if the config maps are absent in the cluster. As a result, the pipelines webhook service persists in the cluster after an upgrade.
*   Before this update, cron jobs for auto-pruning got recreated after any configuration change to the namespace. With this update, cron jobs for auto-pruning get recreated only if there is a relevant annotation change in the namespace.
*   The upstream version of Tekton Pipelines is revised to `v0.28.3`, which has the following fixes:
    *   Fix `PipelineRun` or `TaskRun` objects to allow label or annotation propagation.
    *   For implicit params:
        *   Do not apply the `PipelineSpec` parameters to the `TaskRefs` object.
        *   Disable implicit param behavior for the `Pipeline` objects.

## Release notes for {{ pipelines_title }} General Availability 1.6.3 {id="release-notes-1-6-3_{{ context }}"}

### Fixed issues {id="fixed-issues-1-6-3_{{ context }}"}

*   Before this update, the {{ pipelines_title }} Operator installed pod security policies from components such as Pipelines and Triggers. However, the pod security policies shipped as part of the components were deprecated in an earlier release. With this update, the Operator stops installing pod security policies from components. As a result, the following upgrade paths are affected:
    *   Upgrading from {{ pipelines_shortname }} 1.6.1 or 1.6.2 to {{ pipelines_shortname }} 1.6.3 deletes the pod security policies, including those from the Pipelines and Triggers components.
    *   Upgrading from {{ pipelines_shortname }} 1.5.x to 1.6.3 retains the pod security policies installed from components. As a cluster administrator, you can delete them manually.

        :::note

        When you upgrade to future releases, the {{ pipelines_title }} Operator will automatically delete all obsolete pod security policies.
        
        :::

*   Before this update, only cluster administrators could access pipeline metrics in the {{ product_title }} console. With this update, users with other cluster roles also can access the pipeline metrics.
*   Before this update, role-based access control (RBAC) issues with the {{ pipelines_shortname }} Operator caused problems upgrading or installing components. This update improves the reliability and consistency of installing various {{ pipelines_title }} components.
*   Before this update, setting the `clusterTasks` and `pipelineTemplates` fields to `false` in the `TektonConfig` CR slowed the removal of cluster tasks and pipeline templates. This update improves the speed of lifecycle management of Tekton resources such as cluster tasks and pipeline templates.

## Release notes for {{ pipelines_title }} General Availability 1.6.4 {id="release-notes-1-6-4_{{ context }}"}

### Known issues {id="known-issues-1-6-4_{{ context }}"}

*   After upgrading from {{ pipelines_title }} 1.5.2 to 1.6.4, accessing the event listener routes returns a `503` error.

    Workaround: Modify the target port in the YAML file for the event listener’s route.
    1.  Extract the route name for the relevant namespace.
        ```terminal
        $ oc get route -n <namespace>
        ```
    1.  Edit the route to modify the value of the `targetPort` field.
        ```terminal
        $ oc edit route -n <namespace> <el-route_name>
        ```
        ```yaml title="Example: Existing event listener route"
        ...
        spec:
          host: el-event-listener-q8c3w5-test-upgrade1.apps.ve49aws.aws.ospqa.com
          port:
            targetPort: 8000
          to:
            kind: Service
            name: el-event-listener-q8c3w5
            weight: 100
          wildcardPolicy: None
        ...
        ```
        ```yaml title="Example: Modified event listener route"
        ...
        spec:
          host: el-event-listener-q8c3w5-test-upgrade1.apps.ve49aws.aws.ospqa.com
          port:
            targetPort: http-listener
          to:
            kind: Service
            name: el-event-listener-q8c3w5
            weight: 100
          wildcardPolicy: None
        ...
        ```

### Fixed issues {id="fixed-issues-1-6-4_{{ context }}"}

*   Before this update, the Operator failed when creating RBAC resources if any namespace was in a `Terminating` state. With this update, the Operator ignores namespaces in a `Terminating` state and creates the RBAC resources.
*   Before this update, the task runs failed or restarted due to absence of annotation specifying the release version of the associated Tekton controller. With this update, the inclusion of the appropriate annotations are automated, and the tasks run without failure or restarts.