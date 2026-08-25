{%- set _mod_docs_content_type = "PROCEDURE" %}
# Syncing {{ product_title }} groups with the LDAP server {id="ldap-syncing-running-openshift_{{ context }}"}

Sync existing {{ product_title }} groups with your LDAP server so you can update membership for groups that already exist in the cluster. {._abstract}

You can sync all groups already in {{ product_title }} that correspond to groups in the LDAP server specified in the configuration file.

**Prerequisites**

*   An LDAP sync configuration file exists. This procedure uses an example file named `config.yaml`.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

*   Sync {{ product_title }} groups with the LDAP server by running the following command:
    ```terminal
    $ oc adm groups sync --type=openshift --sync-config=config.yaml --confirm
    ```

    :::note

    By default, all group synchronization operations are dry-run, so you must set the `--confirm` flag on the `oc adm groups sync` command to make changes to {{ product_title }} group records.
    
    :::