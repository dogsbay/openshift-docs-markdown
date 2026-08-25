{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using {{ pac }} {id="using-pipelines-as-code"}
{%- set context = "using-pipelines-as-code" %}

With {{ pac }}, cluster administrators and users with the required privileges can define pipeline templates as part of source code Git repositories. When triggered by a source code push or a pull request for the configured Git repository, {{ pac }} runs the pipeline and reports the status. {._abstract}

## Key features {id="pac-key-features"}
{{ pac }} supports the following features:

*   Pull request status and control on the platform hosting the Git repository.
*   GitHub Checks API to set the status of a pipeline run, including rechecks.
*   GitHub pull request and commit events.
*   Pull request actions in comments, such as `/retest`.
*   Git events filtering and a separate pipeline for each event.
*   Automatic task resolution in {{ pipelines_shortname }}, including local tasks, Tekton Hub, and remote URLs.
*   Retrieval of configurations using GitHub blobs and objects API.
*   Access Control List (ACL) over a GitHub organization, or using a Prow style `OWNER` file.
*   The `tkn pac` CLI plugin for managing bootstrapping and {{ pac }} repositories.
*   Support for GitHub App, GitHub Webhook, Bitbucket Server, and Bitbucket Cloud.

{% leveloffset +1 %}{% include "./modules/op-installing-pipelines-as-code-on-an-openshift-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-installing-pipelines-as-code-cli.md" %}{% endleveloffset %}

## Using {{ pac }} with a Git repository hosting service provider {id="using-pipelines-as-code-with-a-git-repository-hosting-service-provider"}

After installing {{ pac }}, cluster administrators can configure a Git repository hosting service provider. Currently, the following services are supported: {._abstract}

*   GitHub App
*   GitHub Webhook
*   GitLab
*   Bitbucket Server
*   Bitbucket Cloud


:::note

GitHub App is the recommended service for using with {{ pac }}.

:::


{% leveloffset +1 %}{% include "./modules/op-using-pipelines-as-code-with-a-github-app.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-creating-a-github-application-in-administrator-perspective.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-scoping-github-token.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-using-pipelines-as-code-with-github-webhook.md" %}{% endleveloffset %}

**Additional resources**

*   [GitHub Webhook documentation on GitHub](https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks)
*   [GitHub Check Runs documentation on GitHub](https://docs.github.com/en/rest/guides/getting-started-with-the-checks-api)
*   [Creating a personal access token on GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
*   [Classic tokens with pre-filled permissions](https://github.com/settings/tokens/new?description=pipelines-as-code-token&scopes=repo)

{% leveloffset +1 %}{% include "./modules/op-using-pipelines-as-code-with-gitlab.md" %}{% endleveloffset %}

**Additional resources**

*   [GitLab Webhook documentation on GitLab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)

{% leveloffset +1 %}{% include "./modules/op-using-pipelines-as-code-with-bitbucket-cloud.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating app password on Bitbucket Cloud](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/)
*   [Introducing Altassian Account ID and Nicknames](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#introducing-atlassian-account-id-and-nicknames)

{% leveloffset +1 %}{% include "./modules/op-using-pipelines-as-code-with-bitbucket-server.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating personal tokens on Bitbucket Server](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html)
*   [Creating webhooks on Bitbucket server](https://support.atlassian.com/bitbucket-cloud/docs/manage-webhooks/#Create-webhooks)

{% leveloffset +1 %}{% include "./modules/op-interfacing-pipelines-as-code-with-custom-certificates.md" %}{% endleveloffset %}

**Additional resources**

*   [Enabling the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#nw-proxy-configure-object)

{% leveloffset +1 %}{% include "./modules/op-using-repository-crd-with-pipelines-as-code.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-setting-concurrency-limits-in-repository-crd.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-changing-source-branch-in-repository-crd.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-custom-parameter-expansion.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-using-pipelines-as-code-resolver.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-using-remote-task-annotations-with-pipelines-as-code.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-using-remote-pipeline-annotations-with-pipelines-as-code.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-creating-pipeline-run-using-pipelines-as-code.md" %}{% endleveloffset %}

**Additional resources**

*   [CEL language specification](https://github.com/google/cel-spec/blob/master/doc/langdef.md)

{% leveloffset +1 %}{% include "./modules/op-running-pipeline-run-using-pipelines-as-code.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-monitoring-pipeline-run-status-using-pipelines-as-code.md" %}{% endleveloffset %}

**Additional resources**

*   [An example task to send Slack messages on success or failure](https://github.com/chmouel/tekton-slack-task-status)
*   [An example of a pipeline run with `finally` tasks triggered on push events](https://github.com/openshift-pipelines/pipelines-as-code/blob/7b41cc3f769af40a84b7ead41c6f037637e95070/.tekton/push.yaml)

{% leveloffset +1 %}{% include "./modules/op-using-private-repositories-with-pipelines-as-code.md" %}{% endleveloffset %}

**Additional resources**

*   [An example of the `git-clone` task used for cloning private repositories](https://github.com/openshift-pipelines/pipelines-as-code/blob/main/test/testdata/pipelinerun_git_clone_private.yaml)

{% leveloffset +1 %}{% include "./modules/op-cleaning-up-pipeline-run-using-pipelines-as-code.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-using-incoming-webhook-with-pipelines-as-code.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-customizing-pipelines-as-code-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-pipelines-as-code-command-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-splitting-pipelines-as-code-logs-by-namespace.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-pac" ._additional-resources}

*   [An example of the `.tekton/` directory in the Pipelines as Code repository](https://github.com/openshift-pipelines/pipelines-as-code/tree/main/.tekton)
*   [Installing {{ pipelines_shortname }}](/cicd/pipelines/installing-pipelines#installing-pipelines)
*   [Installing tkn](/cli_reference/tkn_cli/installing-tkn#installing-tkn)
*   [{{ pipelines_title }} release notes](/cicd/pipelines/op-release-notes#op-release-notes)
*   [Creating applications using the Developer perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-the-developer-perspective)