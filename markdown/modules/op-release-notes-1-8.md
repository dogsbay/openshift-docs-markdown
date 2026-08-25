{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ pipelines_title }} General Availability 1.8 {id="op-release-notes-1-8_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.8 is available on {{ product_title }} 4.10, 4.11, and 4.12.

## New features {id="new-features-1-8_{{ context }}"}

In addition to the fixes and stability improvements, the following sections highlight what is new in {{ pipelines_title }} 1.8.

### Pipelines {id="pipelines-new-features-1-8_{{ context }}"}

*   With this update, you can run {{ pipelines_title }} GA 1.8 and later on an {{ product_title }} cluster that is running on ARM hardware. This includes support for `ClusterTask` resources and the `tkn` CLI tool.

{%- set FeatureName = "Running {{ pipelines_title }} on ARM hardware" %}
{% include "./snippets/technology-preview.md" %}
*   This update implements `Step` and `Sidecar` overrides for `TaskRun` resources.
*   This update adds minimal `TaskRun` and `Run` statuses within `PipelineRun` statuses.

    To enable this feature, in the `TektonConfig` custom resource definition, in the `pipeline` section, you must set the `enable-api-fields` field to `alpha`.
*   With this update, the graceful termination of pipeline runs feature is promoted from an alpha feature to a stable feature. As a result, the previously deprecated `PipelineRunCancelled` status remains deprecated and is planned to be removed in a future release.

    Because this feature is available by default, you no longer need to set the `pipeline.enable-api-fields` field to `alpha` in the `TektonConfig` custom resource definition.
*   With this update, you can specify the workspace for a pipeline task by using the name of the workspace. This change makes it easier to specify a shared workspace for a pair of `Pipeline` and `PipelineTask` resources. You can also continue to map workspaces explicitly.

    To enable this feature, in the `TektonConfig` custom resource definition, in the `pipeline` section, you must set the `enable-api-fields` field to `alpha`.
*   With this update, parameters in embedded specifications are propagated without mutations.
*   With this update, you can specify the required metadata of a `Task` resource referenced by a `PipelineRun` resource by using annotations and labels. This way, `Task` metadata that depends on the execution context is available during the pipeline run.
*   This update adds support for object or dictionary types in `params`  and `results` values. This change affects backward compatibility and sometimes breaks forward compatibility, such as using an earlier client with a later {{ pipelines_title }} version. This update changes the `ArrayOrStruct` structure, which affects projects that use the Go language API as a library.
*   This update adds a `SkippingReason` value to the `SkippedTasks` field of the `PipelineRun` status fields so that users know why a given PipelineTask was skipped.
*   This update supports an alpha feature in which you can use an `array` type for emitting results from a `Task` object. The result type is changed from `string` to `ArrayOrString`. For example, a task can specify a type to produce an array result:
    ```yaml
    kind: Task
    apiVersion: tekton.dev/v1beta1
    metadata:
      name: write-array
      annotations:
        description: |
          A simple task that writes array
    spec:
      results:
        - name: array-results
          type: array
          description: The array results
    ...
    ```

    Additionally, you can run a task script to populate the results with an array:
    ```terminal
    $ echo -n "[\"hello\",\"world\"]" | tee $(results.array-results.path)
    ```

    To enable this feature, in the `TektonConfig` custom resource definition, in the `pipeline` section, you must set the `enable-api-fields` field to `alpha`.

    This feature is in progress and is part of TEP-0076.

### Triggers {id="triggers-new-features-1-8_{{ context }}"}

*   This update transitions the `TriggerGroups` field in the `EventListener` specification from an alpha feature to a stable feature. Using this field, you can specify a set of interceptors before selecting and running a group of triggers.

    Because this feature is available by default, you no longer need to set the `pipeline.enable-api-fields` field to `alpha` in the `TektonConfig` custom resource definition.
*   With this update, the `Trigger` resource supports end-to-end secure connections by running the `ClusterInterceptor` server using HTTPS.

### CLI {id="cli-new-features-1-8_{{ context }}"}

*   With this update, you can use the `tkn taskrun export` command to export a live task run from a cluster to a YAML file, which you can use to import the task run to another cluster.
*   With this update, you can add the `-o name` flag to the `tkn pipeline start` command to print the name of the pipeline run right after it starts.
*   This update adds a list of available plugins to the output of the `tkn --help` command.
*   With this update, while deleting a pipeline run or task run, you can use both the `--keep` and `--keep-since` flags together.
*   With this update, you can use `Cancelled` as the value of the `spec.status` field rather than the deprecated `PipelineRunCancelled` value.

### Operator {id="operator-new-features-1-8_{{ context }}"}

*   With this update, as an administrator, you can configure your local {{ tekton_hub }} instance to use a custom database rather than the default database.
*   With this update, as a cluster administrator, if you enable your local {{ tekton_hub }} instance, it periodically refreshes the database so that changes in the catalog appear in the {{ tekton_hub }} web console. You can adjust the period between refreshes.

    Previously, to add the tasks and pipelines in the catalog to the database, you performed that task manually or set up a cron job to do it for you.
*   With this update, you can install and run a {{ tekton_hub }} instance with minimal configuration. This way, you can start working with your teams to decide which additional customizations they might want.
*   This update adds `GIT_SSL_CAINFO` to the `git-clone` task so you can clone secured repositories.

### Tekton Chains {id="chains-new-features-1-8_{{ context }}"}

{%- set FeatureName = "Tekton Chains" %}
{% include "./snippets/technology-preview.md" %}

*   With this update, you can log in to a vault by using OIDC rather than a static token. This change means that Spire can generate the OIDC credential so that only trusted workloads are allowed to log in to the vault. Additionally, you can pass the vault address as a configuration value rather than inject it as an environment variable.
*   The `chains-config` config map for {{ tekton_chains }} in the `openshift-pipelines` namespace is automatically reset to default after upgrading the {{ pipelines_title }} Operator because directly updating the config map is not supported when installed by using the {{ pipelines_title }} Operator. However, with this update, you can configure {{ tekton_chains }} by using the `TektonChain` custom resource. This feature enables your configuration to persist after upgrading, unlike the `chains-config` config map, which gets overwritten during upgrades.

### {{ tekton_hub }} {id="tekton-hub-new-features-1-8_{{ context }}"}

{%- set FeatureName = "{{ tekton_hub }}" %}
{% include "./snippets/technology-preview.md" %}

*   With this update, if you install a fresh instance of {{ tekton_hub }} by using the Operator, the {{ tekton_hub }} login is disabled by default. To enable the login and rating features, you must create the Hub API secret while installing {{ tekton_hub }}.

    :::note

    Because {{ tekton_hub }} login was enabled by default in {{ pipelines_title }} 1.7, if you upgrade the Operator, the login is enabled by default in {{ pipelines_title }} 1.8. To disable this login, see [Disabling Tekton Hub login after upgrading from OpenShift Pipelines 1.7.x --> 1.8.x](https://access.redhat.com/articles/6973040)
    
    :::

*   With this update, as an administrator, you can configure your local {{ tekton_hub }} instance to use a custom PostgreSQL 13 database rather than the default database. To do so, create a `Secret` resource named `tekton-hub-db`. For example:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: tekton-hub-db
      labels:
        app: tekton-hub-db
    type: Opaque
    stringData:
      POSTGRES_HOST: <hostname>
      POSTGRES_DB: <database_name>
      POSTGRES_USER: <username>
      POSTGRES_PASSWORD: <password>
      POSTGRES_PORT: <listening_port_number>
    ```
*   With this update, you no longer need to log in to the {{ tekton_hub }} web console to add resources from the catalog to the database. Now, these resources are automatically added when the {{ tekton_hub }} API starts running for the first time.
*   This update automatically refreshes the catalog every 30 minutes by calling the catalog refresh API job. This interval is user-configurable.

### {{ pac }} {id="pac-new-features-1-8_{{ context }}"}

{%- set FeatureName = "{{ pac }} (PAC)" %}
{% include "./snippets/technology-preview.md" %}

*   With this update, as a developer, you get a notification from the `tkn-pac` CLI tool if you try to add a duplicate repository to a {{ pac }} run. When you enter `tkn pac create repository`, each repository must have a unique URL. This notification also helps prevent hijacking exploits.
*   With this update, as a developer, you can use the new `tkn-pac setup cli` command to add a Git repository to {{ pac }} by using the webhook mechanism. This way, you can use {{ pac }} even when using GitHub Apps is not feasible. This capability includes support for repositories on GitHub, GitLab, and BitBucket.
*   With this update, {{ pac }} supports GitLab integration with features such as the following:
    *   ACL (Access Control List) on project or group
    *   `/ok-to-test` support from allowed users
    *   `/retest` support.
*   With this update, you can perform advanced pipeline filtering with Common Expression Language (CEL). With CEL, you can match pipeline runs with different Git provider events by using annotations in the `PipelineRun` resource. For example:
    ```yaml
      ...
      annotations:
         pipelinesascode.tekton.dev/on-cel-expression: |
          event == "pull_request" && target_branch == "main" && source_branch == "wip"
    ```
*   Previously, as a developer, you could have only one pipeline run in your `.tekton` directory for each Git event, such as a pull request. With this update, you can have multiple pipeline runs in your `.tekton` directory. The web console displays the status and reports of the runs. The pipeline runs operate in parallel and report back to the Git provider interface.
*   With this update, you can test or retest a pipeline run by commenting `/test` or `/retest` on a pull request. You can also specify the pipeline run by name. For example, you can enter `/test <pipelinerun_name>` or  `/retest <pipelinerun-name>`.
*   With this update, you can delete a repository custom resource and its associated secrets by using the new `tkn-pac delete repository` command.

## Breaking changes {id="breaking-changes-1-8_{{ context }}"}

*   This update changes the default metrics level of `TaskRun` and `PipelineRun` resources to the following values:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: config-observability
      namespace: tekton-pipelines
      labels:
        app.kubernetes.io/instance: default
        app.kubernetes.io/part-of: tekton-pipelines
    data:
      _example: |
      ...
        metrics.taskrun.level: "task"
        metrics.taskrun.duration-type: "histogram"
        metrics.pipelinerun.level: "pipeline"
        metrics.pipelinerun.duration-type: "histogram"
    ```
*   With this update, if an annotation or label is present in both `Pipeline` and `PipelineRun` resources, the value in the `Run` type takes precedence. The same is true if an annotation or label is present in `Task` and `TaskRun` resources.
*   In {{ pipelines_title }} 1.8, the previously deprecated `PipelineRun.Spec.ServiceAccountNames` field has been removed. Use the `PipelineRun.Spec.TaskRunSpecs` field instead.
*   In {{ pipelines_title }} 1.8, the previously deprecated `TaskRun.Status.ResourceResults.ResourceRef` field has been removed. Use the `TaskRun.Status.ResourceResults.ResourceName` field instead.
*   In {{ pipelines_title }} 1.8, the previously deprecated `Conditions` resource type has been removed. Remove the `Conditions` resource from `Pipeline` resource definitions that include it. Use `when` expressions in `PipelineRun` definitions instead.

*   For Tekton Chains, the `tekton-provenance` format has been removed in this release. Use the `in-toto` format by setting `"artifacts.taskrun.format": "in-toto"` in the `TektonChain` custom resource instead.

*   {{ pipelines_title }} 1.7.x shipped with {{ pac }} 0.5.x. The current update ships with {{ pac }} 0.10.x. This change creates a new route in the `openshift-pipelines` namespace for the new controller. You must update this route in GitHub Apps or webhooks that use {{ pac }}. To fetch the route, use the following command:
    ```terminal
    $ oc get route -n openshift-pipelines pipelines-as-code-controller \
      --template='https://{{ .spec.host }}'
    ```
*   With this update, {{ pac }} renames the default secret keys for the `Repository` custom resource definition (CRD). In your CRD, replace `token` with `provider.token`, and replace `secret` with `webhook.secret`.
*   With this update, {{ pac }} replaces a special template variable with one that supports multiple pipeline runs for private repositories. In your pipeline runs, replace `secret: pac-git-basic-auth-{{{ repo_owner }}}-{{{ repo_name }}}` with `secret: {{ git_auth_secret }}`.
*   With this update, {{ pac }} updates the following commands in the `tkn-pac` CLI tool:
    *   Replace `tkn pac repository create` with `tkn pac create repository`.
    *   Replace `tkn pac repository delete` with `tkn pac delete repository`.
    *   Replace `tkn pac repository list` with `tkn pac list`.

## Deprecated and removed features {id="deprecated-features-1-8_{{ context }}"}

*   Starting with {{ product_title }} 4.11, the `preview` and `stable` channels for installing and upgrading the {{ pipelines_title }} Operator are removed. To install and upgrade the Operator, use the appropriate `pipelines-<version>` channel, or the `latest` channel for the most recent stable version. For example, to install the {{ pipelines_shortname }} Operator version `1.8.x`, use the `pipelines-1.8` channel.

    :::note

    In {{ product_title }} 4.10 and earlier versions, you can use the `preview` and `stable` channels for installing and upgrading the Operator.
    
    :::

*   Support for the `tekton.dev/v1alpha1` API version, which was deprecated in {{ pipelines_title }} GA 1.6, is planned to be removed in the upcoming {{ pipelines_title }} GA 1.9 release.

    This change affects the pipeline component, which includes the `TaskRun`, `PipelineRun`, `Task`, `Pipeline`, and similar `tekton.dev/v1alpha1` resources. As an alternative, update existing resources to use `apiVersion: tekton.dev/v1beta1` as described in [Migrating From Tekton v1alpha1 to Tekton v1beta1](https://tekton.dev/docs/pipelines/migrating-v1alpha1-to-v1beta1/).

    Bug fixes and support for the `tekton.dev/v1alpha1` API version are provided only through the end of the current GA 1.8 lifecycle.

    :::important

    For the **Tekton Operator**, the `operator.tekton.dev/v1alpha1` API version is **not** deprecated. You do not need to make changes to this value.
    
    :::

*   In {{ pipelines_title }} 1.8, the `PipelineResource` custom resource (CR) is available but no longer supported. The `PipelineResource` CR was a Tech Preview feature and part of the `tekton.dev/v1alpha1` API, which had been deprecated and planned to be removed in the upcoming {{ pipelines_title }} GA 1.9 release.
*   In {{ pipelines_title }} 1.8, the `Condition` custom resource (CR) is removed. The `Condition` CR was part of the `tekton.dev/v1alpha1` API, which has been deprecated and is planned to be removed in the upcoming {{ pipelines_title }} GA 1.9 release.
*   In {{ pipelines_title }} 1.8, the `gcr.io` image for `gsutil` has been removed. This removal might break clusters with `Pipeline` resources that depend on this image. Bug fixes and support are provided only through the end of the {{ pipelines_title }} 1.7 lifecycle.

*   In {{ pipelines_title }} 1.8, the `PipelineRun.Status.TaskRuns` and `PipelineRun.Status.Runs` fields are deprecated and are planned to be removed in a future release. See [TEP-0100: Embedded TaskRuns and Runs Status in PipelineRuns](https://github.com/tektoncd/community/blob/main/teps/0100-embedded-taskruns-and-runs-status-in-pipelineruns.md).
*   In {{ pipelines_title }} 1.8, the `pipelineRunCancelled` state is deprecated and planned to be removed in a future release. Graceful termination of `PipelineRun` objects is now promoted from an alpha feature to a stable feature. (See [TEP-0058: Graceful Pipeline Run Termination](https://github.com/tektoncd/community/blob/main/teps/0058-graceful-pipeline-run-termination.md).) As an alternative, you can use the `Cancelled` state, which replaces the `pipelineRunCancelled` state.

    You do not need to make changes to your `Pipeline` and `Task` resources. If you have tools that cancel pipeline runs, you must update tools in the next release. This change also affects tools such as the CLI, IDE extensions, and so on, so that they support the new `PipelineRun` statuses.

    Because this feature is available by default, you no longer need to set the `pipeline.enable-api-fields` field to `alpha` in the `TektonConfig` custom resource definition.
*   In {{ pipelines_title }} 1.8, the `timeout` field in `PipelineRun` has been deprecated. Instead, use the `PipelineRun.Timeouts` field, which is now promoted from an alpha feature to a stable feature.

    Because this feature is available by default, you no longer need to set the `pipeline.enable-api-fields` field to `alpha` in the `TektonConfig` custom resource definition.
*   In {{ pipelines_title }} 1.8, `init` containers are omitted from the `LimitRange` object’s default request calculations.

## Known issues {id="known-issues-1-8_{{ context }}"}

*   The `s2i-nodejs` pipeline cannot use the `nodejs:14-ubi8-minimal` image stream to perform source-to-image (S2I) builds. Using that image stream produces an `error building at STEP "RUN /usr/libexec/s2i/assemble": exit status 127` message.

    Workaround: Use `nodejs:14-ubi8` rather than the `nodejs:14-ubi8-minimal` image stream.

*   When you run Maven and Jib-Maven cluster tasks, the default container image is supported only on Intel (x86) architecture. Therefore, tasks will fail on ARM, {{ ibm_power_name }} Systems (ppc64le), {{ ibm_z_name }}, and {{ ibm_linuxone_name }} (s390x) clusters.

    Workaround: Specify a custom image by setting the `MAVEN_IMAGE` parameter value to `maven:3.6.3-adoptopenjdk-11`.

    :::tip

    Before you install tasks that are based on the Tekton Catalog on ARM, {{ ibm_power_name }} Systems (ppc64le), {{ ibm_z_name }}, and {{ ibm_linuxone_name }} (s390x) using `tkn hub`, verify if the task can be executed on these platforms. To check if `ppc64le` and `s390x` are listed in the "Platforms" section of the task information, you can run the following command: `tkn hub info task <name>`
    
    :::

*   On ARM, {{ ibm_power_name }} Systems, {{ ibm_z_name }}, and {{ ibm_linuxone_name }}, the `s2i-dotnet` cluster task is unsupported.

*   Implicit parameter mapping incorrectly passes parameters from the top-level `Pipeline` or `PipelineRun` definitions to the `taskRef` tasks. Mapping should only occur from a top-level resource to tasks with in-line `taskSpec` specifications. This issue only affects clusters where this feature was enabled by setting the `enable-api-fields` field to `alpha` in the `pipeline` section of the `TektonConfig` custom resource definition.

## Fixed issues {id="fixed-issues-1-8_{{ context }}"}

*   Before this update, the metrics for pipeline runs in the Developer view of the web console were incomplete and outdated. With this update, the issue has been fixed so that the metrics are correct.
*   Before this update, if a pipeline had two parallel tasks that failed and one of them had `retries=2`, the final tasks never ran, and the pipeline timed out and failed to run. For example, the `pipelines-operator-subscription` task failed intermittently with the following error message: `Unable to connect to the server: EOF`. With this update, the issue has been fixed so that the final tasks always run.
*   Before this update, if a pipeline run stopped because a task run failed, other task runs might not complete their retries. As a result, no `finally` tasks were scheduled, which caused the pipeline to hang. This update resolves the issue. `TaskRuns` and `Run` objects can retry when a pipeline run has stopped, even by graceful stopping, so that pipeline runs can complete.
*   This update changes how resource requirements are calculated when one or more `LimitRange` objects are present in the namespace where a `TaskRun` object exists. The scheduler now considers `step` containers and excludes all other app containers, such as sidecar containers, when factoring requests from `LimitRange` objects.
*   Before this update, under specific conditions, the flag package might incorrectly parse a subcommand immediately following a double dash flag terminator, `--`. In that case, it ran the entrypoint subcommand rather than the actual command. This update fixes this flag-parsing issue so that the entrypoint runs the correct command.
*   Before this update, the controller might generate multiple panics if pulling an image failed, or its pull status was incomplete. This update fixes the issue by checking the `step.ImageID` value rather than the `status.TaskSpec` value.
*   Before this update, canceling a pipeline run that contained an unscheduled custom task produced a `PipelineRunCouldntCancel` error. This update fixes the issue. You can cancel a pipeline run that contains an unscheduled custom task without producing that error.
*   Before this update, if the `<NAME>` in `$params["<NAME>"]` or `$params['<NAME>']` contained a dot character (`.`),  any part of the name to the right of the dot was not extracted. For example, from `$params["org.ipsum.lorem"]`, only `org` was extracted.

    This update fixes the issue so that `$params` fetches the complete value. For example, `$params["org.ipsum.lorem"]` and `$params['org.ipsum.lorem']` are valid and the entire value of `<NAME>`, `org.ipsum.lorem`, is extracted.

    It also throws an error if `<NAME>` is not enclosed in single or double quotes. For example, `$params.org.ipsum.lorem` is not valid and generates a validation error.

*   With this update, `Trigger` resources support custom interceptors and ensure that the port of the custom interceptor service is the same as the port in the `ClusterInterceptor` definition file.

*   Before this update, the `tkn version` command for {{ tekton_chains }} and Operator components did not work correctly. This update fixes the issue so that the command works correctly and returns version information for those components.
*   Before this update, if you ran a `tkn pr delete --ignore-running` command and a pipeline run did not have a `status.condition` value, the `tkn` CLI tool produced a null-pointer error (NPE). This update fixes the issue so that the CLI tool now generates an error and correctly ignores pipeline runs that are still running.
*   Before this update, if you used the `tkn pr delete --keep <value>` or `tkn tr delete  --keep <value>` commands, and the number of pipeline runs or task runs was less than the value, the command did not return an error as expected. This update fixes the issue so that the command correctly returns an error under those conditions.
*   Before this update, if you used the `tkn pr delete` or `tkn tr delete` commands with the `-p` or `-t` flags together with the `--ignore-running` flag, the commands incorrectly deleted running or pending resources. This update fixes the issue so that these commands correctly ignore running or pending resources.

*   With this update, you can configure {{ tekton_chains }} by using the `TektonChain` custom resource. This feature enables your configuration to persist after upgrading, unlike the `chains-config` config map, which gets overwritten during upgrades.
*   With this update, `ClusterTask` resources no longer run as root by default, except for the `buildah` and `s2i` cluster tasks.
*   Before this update, tasks on {{ pipelines_title }} 1.7.1 failed when using `init` as a first argument followed by two or more arguments. With this update, the flags are parsed correctly, and the task runs are successful.
*   Before this update, installation of the {{ pipelines_title }} Operator on {{ product_title }} 4.9 and 4.10 failed due to an invalid role binding, with the following error message:
    ```terminal
    error updating rolebinding openshift-operators-prometheus-k8s-read-binding: RoleBinding.rbac.authorization.k8s.io
    "openshift-operators-prometheus-k8s-read-binding" is invalid:
    roleRef: Invalid value: rbac.RoleRef{APIGroup:"rbac.authorization.k8s.io", Kind:"Role", Name:"openshift-operator-read"}: cannot change roleRef
    ```

    This update fixes the issue so that the failure no longer occurs.
*   Previously, upgrading the {{ pipelines_title }} Operator caused the `pipeline` service account to be recreated, which meant that the secrets linked to the service account were lost. This update fixes the issue. During upgrades, the Operator no longer recreates the `pipeline` service account. As a result, secrets attached to the `pipeline` service account persist after upgrades, and the resources (tasks and pipelines) continue to work correctly.
*   With this update, {{ pac }} pods run on infrastructure nodes if infrastructure node settings are configured in the `TektonConfig` custom resource (CR).
*   Previously, with the resource pruner, each namespace Operator created a command that ran in a separate container. This design consumed too many resources in clusters with a high number of namespaces. For example, to run a single command, a cluster with 1000 namespaces produced 1000 containers in a pod.

    This update fixes the issue. It passes the namespace-based configuration to the job so that all the commands run in one container in a loop.
*   In {{ tekton_chains }}, you must define a secret called `signing-secrets` to hold the key used for signing tasks and images. However, before this update, updating the {{ pipelines_title }} Operator reset or overwrote this secret, and the key was lost. This update fixes the issue. Now, if the secret is configured after installing {{ tekton_chains }} through the Operator, the secret persists, and it is not overwritten by upgrades.
*   Before this update, all S2I build tasks failed with an error similar to the following message:
    ```terminal
    Error: error writing "0 0 4294967295\n" to /proc/22/uid_map: write /proc/22/uid_map: operation not permitted
    time="2022-03-04T09:47:57Z" level=error msg="error writing \"0 0 4294967295\\n\" to /proc/22/uid_map: write /proc/22/uid_map: operation not permitted"
    time="2022-03-04T09:47:57Z" level=error msg="(unable to determine exit status)"
    ```

    With this update, the `pipelines-scc` security context constraint (SCC) is compatible with the `SETFCAP` capability necessary for `Buildah` and `S2I` cluster tasks. As a result, the `Buildah` and `S2I` build tasks can run successfully.

    To successfully run the `Buildah` cluster task and `S2I` build tasks for applications written in various languages and frameworks, add the following snippet for appropriate `steps` objects such as `build` and `push`:
    ```yaml
    securityContext:
      capabilities:
        add: ["SETFCAP"]
    ```
*   Before this update, installing the {{ pipelines_title }} Operator took longer than expected. This update optimizes some settings to speed up the installation process.
*   With this update, Buildah and S2I cluster tasks have fewer steps than in previous versions. Some steps have been combined into a single step so that they work better with `ResourceQuota` and `LimitRange` objects and do not require more resources than necessary.
*   This update upgrades the Buildah, `tkn` CLI tool, and `skopeo` CLI tool versions in cluster tasks.
*   Before this update, the Operator failed when creating RBAC resources if any namespace was in a `Terminating` state. With this update, the Operator ignores namespaces in a `Terminating` state and creates the RBAC resources.
*   Before this update, pods for the prune cronjobs were not scheduled on infrastructure nodes, as expected. Instead, they were scheduled on worker nodes or not scheduled at all. With this update, these types of pods can now be scheduled on infrastructure nodes if configured in the `TektonConfig` custom resource (CR).

## Release notes for {{ pipelines_title }} General Availability 1.8.1 {id="release-notes-1-8-1_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.8.1 is available on {{ product_title }} 4.10, 4.11, and 4.12.

### Known issues {id="known-issues-1-8-1_{{ context }}"}

*   By default, the containers have restricted permissions for enhanced security. The restricted permissions apply to all controller pods in the {{ pipelines_title }} Operator, and to some cluster tasks. Due to restricted permissions, the `git-clone` cluster task fails under certain configurations.

    Workaround: None. You can track the issue [SRVKP-2634](https://issues.redhat.com/browse/SRVKP-2634).
*   When installer sets are in a failed state, the status of the `TektonConfig` custom resource is incorrectly displayed as `True` instead of `False`.
    ```terminal title="Example: Failed installer sets"
    $ oc get tektoninstallerset
    NAME                                     READY   REASON
    addon-clustertasks-nx5xz                 False   Error
    addon-communityclustertasks-cfb2p        True
    addon-consolecli-ftrb8                   True
    addon-openshift-67dj2                    True
    addon-pac-cf7pz                          True
    addon-pipelines-fvllm                    True
    addon-triggers-b2wtt                     True
    addon-versioned-clustertasks-1-8-hqhnw   False   Error
    pipeline-w75ww                           True
    postpipeline-lrs22                       True
    prepipeline-ldlhw                        True
    rhosp-rbac-4dmgb                         True
    trigger-hfg64                            True
    validating-mutating-webhoook-28rf7       True
    ```
    ```terminal title="Example: Incorrect TektonConfig status"
    $ oc get tektonconfig config
    NAME     VERSION   READY   REASON
    config   1.8.1     True
    ```

### Fixed issues {id="fixed-issues-1-8-1_{{ context }}"}

*   Before this update, the pruner deleted task runs of running pipelines and displayed the following warning: `some tasks were indicated completed without ancestors being done`. With this update, the pruner retains the task runs that are part of running pipelines.
*   Before this update, `pipeline-1.8` was the default channel for installing the {{ pipelines_title }} Operator 1.8.x. With this update, `latest` is the default channel.
*   Before this update, the {{ pac }} controller pods did not have access to certificates exposed by the user. With this update, {{ pac }} can now access routes and Git repositories guarded by a self-signed or a custom certificate.
*   Before this update, the task failed with RBAC errors after upgrading from {{ pipelines_title }} 1.7.2 to 1.8.0. With this update, the tasks run successfully without any RBAC errors.
*   Before this update, using the `tkn` CLI tool, you could not remove task runs and pipeline runs that contained a `result` object whose type was `array`. With this update, you can use the `tkn` CLI tool to remove task runs and pipeline runs that contain a `result` object whose type is `array`.
*   Before this update, if a pipeline specification contained a task with an `ENV_VARS` parameter of `array` type, the pipeline run failed with the following error: `invalid input params for task func-buildpacks: param types do not match the user-specified type: [ENV_VARS]`. With this update, pipeline runs with such pipeline and task specifications do not fail.
*   Before this update, cluster administrators could not provide a `config.json` file to the `Buildah` cluster task for accessing a container registry. With this update, cluster administrators can provide the `Buildah` cluster task with a `config.json` file by using the `dockerconfig` workspace.

## Release notes for {{ pipelines_title }} General Availability 1.8.2 {id="release-notes-1-8-2_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.8.2 is available on {{ product_title }} 4.10, 4.11, and 4.12.

### Fixed issues {id="fixed-issues-1-8-2_{{ context }}"}

*   Before this update, the `git-clone` task failed when cloning a repository using SSH keys. With this update, the role of the non-root user in the `git-init` task is removed, and the SSH program looks in the `$HOME/.ssh/` directory for the correct keys.