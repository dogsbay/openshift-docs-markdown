{%- set _mod_docs_content_type = "PROCEDURE" -%}
{% if openshift_enterprise or openshift_webscale or openshift_origin %}
# Creating a cluster role {id="creating-cluster-role_{{ context }}"}

To define custom cluster-wide permissions, you can create a cluster role that specifies the verbs and resources users can access. {._abstract}

**Procedure**

*   To create a cluster role, run the following command:
    ```terminal
    $ oc create clusterrole <name> --verb=<verb> --resource=<resource>
    ```

    In this command, specify:
    *   `<name>`, the local role’s name
    *   `<verb>`, a comma-separated list of the verbs to apply to the role
    *   `<resource>`, the resources that the role applies to

    For example, to create a cluster role that allows a user to view pods, run the
    following command:
    ```terminal
    $ oc create clusterrole podviewonly --verb=get --resource=pod
    ```
{% endif %}