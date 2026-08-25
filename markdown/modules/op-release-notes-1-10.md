{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ pipelines_title }} General Availability 1.10 {id="op-release-notes-1-10_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.10 is available on {{ product_title }} 4.11, 4.12, and 4.13.

## New features {id="new-features-1-10_{{ context }}"}

In addition to fixes and stability improvements, the following sections highlight what is new in {{ pipelines_title }} 1.10.

### Pipelines {id="pipelines-new-features-1-10_{{ context }}"}

*   With this update, you can specify environment variables in a `PipelineRun` or `TaskRun` pod template to override or append the variables that are configured in a task or step. Also, you can specify environment variables in a default pod template to use those variables globally for all `PipelineRuns` and `TaskRuns`. This update also adds a new default configuration named `forbidden-envs` to filter environment variables while propagating from pod templates.
*   With this update, custom tasks in pipelines are enabled by default.

    :::note

    To disable this update, set the `enable-custom-tasks` flag to `false` in the `feature-flags` config custom resource.
    
    :::

*   This update supports the `v1beta1.CustomRun` API version for custom tasks.
*   This update adds support for the `PipelineRun` reconciler to create a custom run. For example, custom `TaskRuns` created from `PipelineRuns` can now use the `v1beta1.CustomRun` API version instead of `v1alpha1.Run`, if the `custom-task-version` feature flag is set to `v1beta1`, instead of the default value `v1alpha1`.

    :::note

    You need to update the custom task controller to listen for the `*v1beta1.CustomRun` API version instead of `*v1alpha1.Run` in order to respond to `v1beta1.CustomRun` requests.
    
    :::

*   This update adds a new `retries` field to the `v1beta1.TaskRun` and `v1.TaskRun` specifications.

### Triggers {id="triggers-new-features-1-10_{{ context }}"}

*   With this update, triggers support the creation of `Pipelines`, `Tasks`, `PipelineRuns`, and `TaskRuns` objects of the `v1` API version along with `CustomRun` objects of the `v1beta1` API version.
*   With this update, GitHub Interceptor blocks a pull request trigger from being executed unless invoked by an owner or with a configurable comment by an owner.

    :::note

    To enable or disable this update, set the value of the `githubOwners` parameter to `true` or `false` in the GitHub Interceptor configuration file.
    
    :::

*   With this update, GitHub Interceptor has the ability to add a comma delimited list of all files that have changed for the push and pull request events. The list of changed files is added to the `changed_files` property of the event payload in the top-level extensions field.
*   This update changes the `MinVersion` of TLS to `tls.VersionTLS12` so that triggers run on {{ product_title }} when the Federal Information Processing Standards (FIPS) mode is enabled.

### CLI {id="cli-new-features-1-10_{{ context }}"}

*   This update adds support to pass a Container Storage Interface (CSI) file as a workspace at the time of starting a `Task`, `ClusterTask` or `Pipeline`.
*   This update adds `v1` API support to all CLI commands associated with task, pipeline, pipeline run, and task run resources. Tekton CLI works with both `v1beta1` and `v1` APIs for these resources.
*   This update adds support for an object type parameter in the `start` and `describe` commands.

### Operator {id="operator-new-features-1-10_{{ context }}"}

*   This update adds a `default-forbidden-env` parameter in optional pipeline properties. The parameter includes forbidden environment variables that should not be propagated if provided through pod templates.
*   This update adds support for custom logos in Tekton Hub UI. To add a custom logo, set the value of the `customLogo` parameter to base64 encoded URI of logo in the Tekton Hub CR.
*   This update increments the version number of the git-clone task to 0.9.

### {{ tekton_chains }} {id="chains-new-features-1-10_{{ context }}"}

{%- set FeatureName = "{{ tekton_chains }}" %}
{% include "./snippets/technology-preview.md" %}

*   This update adds annotations and labels to the `PipelineRun` and `TaskRun` attestations.
*   This update adds a new format named `slsa/v1`, which generates the same provenance as the one generated when requesting in the `in-toto` format.
*   With this update, Sigstore features are moved out from the experimental features.
*   With this update, the `predicate.materials` function includes image URI and digest information from all steps and sidecars for a `TaskRun` object.

### {{ tekton_hub }} {id="tekton-hub-new-features-1-10_{{ context }}"}

{%- set FeatureName = "{{ tekton_hub }}" %}
{% include "./snippets/technology-preview.md" %}

*   This update supports installing, upgrading, or downgrading Tekton resources of the `v1` API version on the cluster.
*   This update supports adding a custom logo in place of the {{ tekton_hub }} logo in UI.
*   This update extends the `tkn hub install` command functionality by adding a `--type artifact` flag, which fetches resources from the Artifact Hub and installs them on your cluster.
*   This update adds support tier, catalog, and org information as labels to the resources being installed from Artifact Hub to your cluster.

### {{ pac }} {id="pac-new-features-1-10_{{ context }}"}

*   This update enhances incoming webhook support. For a GitHub application installed on the {{ product_title }} cluster, you do not need to provide the `git_provider` specification for an incoming webhook. Instead, {{ pac }} detects the secret and use it for the incoming webhook.
*   With this update, you can use the same token to fetch remote tasks from the same host on GitHub with a non-default branch.
*   With this update, {{ pac }} supports Tekton `v1` templates. You can have `v1` and `v1beta1` templates, which {{ pac }} reads for PR generation. The PR is created as `v1` on cluster.
*   Before this update, OpenShift console UI would use a hardcoded pipeline run template as a fallback template when a runtime template was not found in the OpenShift namespace. This update in the `pipelines-as-code` config map provides a new default pipeline run template named, `pipelines-as-code-template-default` for the console to use.
*   With this update, {{ pac }} supports Tekton Pipelines 0.44.0 minimal status.
*   With this update, {{ pac }} supports Tekton `v1` API, which means {{ pac }} is now compatible with Tekton v0.44 and later.
*   With this update, you can configure custom console dashboards in addition to configuring a console for OpenShift and Tekton dashboards for k8s.
*   With this update, {{ pac }} detects the installation of a GitHub application initiated using the `tkn pac create repo` command and does not require a GitHub webhook if it was installed globally.
*   Before this update, if there was an error on a `PipelineRun` execution and not on the tasks attached to `PipelineRun`, {{ pac }} would not report the failure properly. With this update, {{ pac }} reports the error properly on the GitHub checks when a `PipelineRun` could not be created.
*   With this update, {{ pac }} includes a `target_namespace` variable, which expands to the currently running namespace where the `PipelineRun` is executed.
*   With this update, {{ pac }} lets you bypass GitHub enterprise questions in the CLI bootstrap GitHub application.
*   With this update, {{ pac }} does not report errors when the repository CR was not found.
*   With this update, {{ pac }} reports an error if multiple pipeline runs with the same name were found.

## Breaking changes {id="breaking-changes-1-10_{{ context }}"}

*   With this update, the prior version of the `tkn` command is not compatible with {{ pipelines_title }} 1.10.
*   This update removes support for `Cluster` and `CloudEvent` pipeline resources from Tekton CLI. You cannot create pipeline resources by using the `tkn pipelineresource create` command. Also, pipeline resources are no longer supported in the `start` command of a task, cluster task, or pipeline.
*   This update removes `tekton` as a provenance format from Tekton Chains.

## Deprecated and removed features {id="deprecated-features-1-10_{{ context }}"}

*   In {{ pipelines_title }} 1.10, the `ClusterTask` commands are now deprecated and are planned to be removed in a future release. The `tkn task create` command is also deprecated with this update.
*   In {{ pipelines_title }} 1.10, the flags `-i` and `-o` that were used with the `tkn task start` command are now deprecated because the `v1` API does not support pipeline resources.
*   In {{ pipelines_title }} 1.10, the flag `-r` that was used with the `tkn pipeline start` command is deprecated because the `v1` API does not support pipeline resources.
*   The {{ pipelines_title }} 1.10 update sets the `openshiftDefaultEmbeddedStatus` parameter to `both` with `full` and `minimal` embedded status. The flag to change the default embedded status  is also deprecated and will be removed. In addition, the pipeline default embedded status will be changed to `minimal` in a future release.

## Known issues {id="known-issues-1-10_{{ context }}"}

*   This update includes the following backward incompatible changes:
    *   Removal of the `PipelineResources` cluster
    *   Removal of the `PipelineResources` cloud event
*   If the pipelines metrics feature does not work after a cluster upgrade, run the following command as a workaround:
    ```terminal
    $ oc get tektoninstallersets.operator.tekton.dev | awk '/pipeline-main-static/ {print $1}' | xargs oc delete tektoninstallersets
    ```
*   With this update, usage of external databases, such as the Crunchy PostgreSQL is not supported on {{ ibm_power_name }}, {{ ibm_z_name }}, and {{ ibm_linuxone_name }}. Instead, use the default {{ tekton_hub }} database.

## Fixed issues {id="fixed-issues-1-10_{{ context }}"}

*   Before this update, the `opc pac` command generated a runtime error instead of showing any help. This update fixes the `opc pac` command to show the help message.
*   Before this update, running the `tkn pac create repo` command needed the webhook details for creating a repository. With this update, the `tkn-pac create repo` command does not configure a webhook when your GitHub application is installed.
*   Before this update, {{ pac }} would not report a pipeline run creation error when Tekton Pipelines had issues creating the `PipelineRun` resource. For example, a non-existing task in a pipeline run would show no status. With this update, {{ pac }} shows the proper error message coming from Tekton Pipelines along with the task that is missing.
*   This update fixes UI page redirection after a successful authentication. Now, you are redirected to the same page where you had attempted to log in to Tekton Hub.
*   This update fixes the `list` command with these flags, `--all-namespaces` and `--output=yaml`, for a cluster task, an individual task, and a pipeline.
*   This update removes the forward slash in the end of the `repo.spec.url` URL so that it matches the URL coming from GitHub.
*   Before this update, the `marshalJSON` function would not marshal a list of objects. With this update, the `marshalJSON` function marshals the list of objects.
*   With this update, {{ pac }} lets you bypass GitHub enterprise questions in the CLI bootstrap GitHub application.
*   This update fixes the GitHub collaborator check when your repository has more than 100 users.
*   With this update, the `sign` and `verify` commands for a task or pipeline now work without a kubernetes configuration file.
*   With this update, Tekton Operator cleans leftover pruner cron jobs if pruner has been skipped on a namespace.
*   Before this update, the API `ConfigMap` object would not be updated with a user configured value for a catalog refresh interval. This update fixes the `CATALOG_REFRESH_INTERVAL` API in the Tekon Hub CR.
*   This update fixes reconciling of `PipelineRunStatus` when changing the `EmbeddedStatus` feature flag. This update resets the following parameters:
    *   The `status.runs` and `status.taskruns` parameters to `nil` with `minimal EmbeddedStatus`
    *   The `status.childReferences` parameter to `nil` with `full EmbeddedStatus`
*   This update adds a conversion configuration to the `ResolutionRequest` CRD. This update properly configures conversion from the `v1alpha1.ResolutionRequest` request to the `v1beta1.ResolutionRequest` request.
*   This update checks for duplicate workspaces associated with a pipeline task.
*   This update fixes the default value for enabling resolvers in the code.
*   This update fixes `TaskRef` and `PipelineRef` names conversion by using a resolver.

## Release notes for {{ pipelines_title }} General Availability 1.10.1 {id="release-notes-1-10-1_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.10.1 is available on {{ product_title }} 4.11, 4.12, and 4.13.

### Fixed issues for {{ pac }} {id="fixed-issues-1-10-1_{{ context }}"}

*   Before this update, if the source branch information coming from payload included `refs/heads/` but the user-configured target branch only included the branch name, `main`, in a CEL expression, the push request would fail. With this update, {{ pac }} passes the push request and triggers a pipeline if either the base branch or target branch has `refs/heads/` in the payload.
*   Before this update, when a `PipelineRun` object could not be created, the error received from the Tekton controller was not reported to the user. With this update, {{ pac }} reports the error messages to the GitHub interface so that users can troubleshoot the errors. {{ pac }} also reports the errors that occurred during pipeline execution.
*   With this update, {{ pac }} does not echo a secret to the GitHub checks interface when it failed to create the secret on the {{ product_title }} cluster because of an infrastructure issue.
*   This update removes the deprecated APIs that are no longer in use from {{ pipelines_title }}.

## Release notes for {{ pipelines_title }} General Availability 1.10.2 {id="release-notes-1-10-2_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.10.2 is available on {{ product_title }} 4.11, 4.12, and 4.13.

### Fixed issues {id="fixed-issues-1-10-2_{{ context }}"}

Before this update, an issue in the Tekton Operator prevented the user from setting the value of the `enable-api-fields` flag to `beta`. This update fixes the issue. Now, you can set the value of the `enable-api-fields` flag to `beta` in the `TektonConfig` CR.

## Release notes for {{ pipelines_title }} General Availability 1.10.3 {id="release-notes-1-10-3_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.10.3 is available on {{ product_title }} 4.11, 4.12, and 4.13.

### Fixed issues {id="fixed-issues-1-10-3_{{ context }}"}

Before this update, the Tekton Operator did not expose the performance configuration fields for any customizations. With this update, as a cluster administrator, you can customize the following performance configuration fields in the `TektonConfig` CR based on your needs:

*   `disable-ha`
*   `buckets`
*   `kube-api-qps`
*   `kube-api-burst`
*   `threads-per-controller`

## Release notes for {{ pipelines_title }} General Availability 1.10.4 {id="release-notes-1-10-4_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.10.4 is available on {{ product_title }} 4.11, 4.12, and 4.13.

### Fixed issues {id="fixed-issues-1-10-4_{{ context }}"}

*   This update fixes the bundle resolver conversion issue for the `PipelineRef` field in a pipeline run. Now, the conversion feature sets the value of the `kind` field to `Pipeline` after conversion.
*   Before this update, the `pipelinerun.timeouts` field was reset to the `timeouts.pipeline` value, ignoring the `timeouts.tasks` and `timeouts.finally` values. This update fixes the issue and sets the correct default timeout value for a `PipelineRun` resource.
*   Before this update, the controller logs contained unnecessary data. This update fixes the issue.

## Release notes for {{ pipelines_title }} General Availability 1.10.5 {id="release-notes-1-10-5_{{ context }}"}

With this update, {{ pipelines_title }} General Availability (GA) 1.10.5 is available on {{ product_title }} 4.10 in addition to 4.11, 4.12, and 4.13.


:::important

{{ pipelines_title }} 1.10.5 is only available in the `pipelines-1.10` channel on {{ product_title }} 4.10, 4.11, 4.12, and 4.13. It is not available in the `latest` channel for any {{ product_title }} version.

:::


### Fixed issues {id="fixed-issues-1-10-5_{{ context }}"}

*   Before this update, huge pipeline runs were not getting listed or deleted using the `oc` and `tkn` commands. This update mitigates this issue by compressing the huge annotations that were causing this problem. Remember that if the pipeline runs are still too huge after compression, then the same error still recurs.
*   Before this update, only the pod template specified in the `pipelineRun.spec.taskRunSpecs[].podTemplate` object would be considered for a pipeline run. With this update, the pod template specified in the `pipelineRun.spec.podTemplate` object is also considered and merged with the template specified in the `pipelineRun.spec.taskRunSpecs[].podTemplate` object.