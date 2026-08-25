{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Authenticating pipelines using git secret {id="authenticating-pipelines-using-git-secret"}
{%- set context = "authenticating-pipelines-using-git-secret" %}

A Git secret consists of credentials to securely interact with a Git repository, and is often used to automate authentication. In {{ pipelines_title }}, you can use Git secrets to authenticate pipeline runs and task runs that interact with a Git repository during execution.

A pipeline run or a task run gains access to the secrets through the associated service account. {{ pipelines_shortname }} support the use of Git secrets as annotations (key-value pairs) for basic authentication and SSH-based authentication.

{% leveloffset +1 %}{% include "./modules/op-understanding-credential-selection.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-configuring-basic-authentication-for-git.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-configuring-ssh-authentication-for-git.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-using-ssh-authentication-in-git-type-tasks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-using-secrets-as-a-nonroot-user.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-limiting-secret-access-to-specific-steps.md" %}{% endleveloffset %}