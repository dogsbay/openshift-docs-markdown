{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing alerting rules for user-defined projects {id="accessing-alerting-rules-for-your-project_{{ context }}"}

To list alerting rules for a user-defined project, you must have been assigned the `monitoring-rules-view` cluster role for the project.

**Prerequisites**

*   You have enabled monitoring for user-defined projects.
*   You are logged in as a user that has the `monitoring-rules-view` cluster role for your project.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  To list alerting rules in `<project>`:
    ```terminal
    $ oc -n <project> get prometheusrule
    ```
1.  To list the configuration of an alerting rule, run the following:
    ```terminal
    $ oc -n <project> get prometheusrule <rule> -o yaml
    ```