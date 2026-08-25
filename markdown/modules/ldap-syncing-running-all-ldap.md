{%- set _mod_docs_content_type = "PROCEDURE" %}
# Syncing the LDAP server with {{ product_title }} {id="ldap-syncing-running-all-ldap_{{ context }}"}

Sync all groups from your LDAP server with {{ product_title }} so you can mirror your complete LDAP group membership in the cluster. {._abstract}

**Prerequisites**

*   An LDAP sync configuration file exists. This procedure uses an example file named `config.yaml`.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure**

*   Sync all groups from the LDAP server with {{ product_title }} by running the following command:
    ```terminal
    $ oc adm groups sync --sync-config=config.yaml --confirm
    ```

    :::note

    By default, all group synchronization operations are dry-run, so you must set the `--confirm` flag on the `oc adm groups sync` command to make changes to {{ product_title }} group records.
    
    :::