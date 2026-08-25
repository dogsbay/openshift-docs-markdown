{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling overcommitment for a project {id="nodes-cluster-overcommit-project-disable_{{ context }}"}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
If overcommitment is enabled on a project, you can disable overcommitment for that projects. This allows infrastructure components to be configured independently of overcommitment.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
If required by your use case, you can disable overcommitment on any project that is not managed by Red Hat. For a list of projects that cannot be modified, see "Red Hat Managed resources" in _Support_. {._abstract}
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}

**Prerequisites**

*   You are logged in to the cluster using an account with cluster administrator or cluster editor permissions.
{% endif %}

**Procedure**

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Create or edit the namespace object file.
1.  Add the following annotation:
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Edit the namespace object file:
    1.  If you are using the web console:
        1.  Click **Administration** → **Namespaces** and click the namespace for the project.
        1.  In the **Annotations** section, click the **Edit** button.
        1.  Click **Add more** and enter a new annotation that uses a **Key** of `quota.openshift.io/cluster-resource-override-enabled` and a **Value** of `false`.
        1.  Click **Save**.
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
    1.  If you are using the {{ oc_first }}:
        1.  Edit the namespace:
            ```terminal
            $ oc edit namespace/<project_name>
            ```
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}
    1.  If you are using the ROSA CLI (`rosa`):
        1.  Edit the namespace:
            ```terminal
            $ rosa edit namespace/<project_name>
            ```
{%- endif %}
        1.  Add the following annotation:
{%- endif %}
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      annotations:
        quota.openshift.io/cluster-resource-override-enabled: "false"
    # ...
    ```

    where:

    `metadata.annotations.quota.openshift.io/cluster-resource-override-enabled.false`
    :   Specifies that overcommit is disabled for this namespace.