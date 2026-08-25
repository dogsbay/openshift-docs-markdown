{%- set _mod_docs_content_type = "PROCEDURE" %}
# Syncing subgroups from the LDAP server with {{ product_title }} {id="ldap-syncing-running-subset_{{ context }}"}

Sync a subset of LDAP groups with {{ product_title }} so you can control which groups are synchronized using allowlist files, denylist files, or both. {._abstract}


:::note

You can use any combination of denylist files, allowlist files, or allowlist literals. Allowlist and denylist files must contain one unique group identifier per line, and you can include allowlist literals directly in the command itself.
These guidelines apply to groups found on LDAP servers as well as groups already present in {{ product_title }}.

:::


**Prerequisites**

*   An LDAP sync configuration file exists. This procedure uses an example file named `config.yaml`.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

*   To sync groups using an allowlist file, run the following command:
    ```terminal
    $ oc adm groups sync --whitelist=<allowlist_file> \
                       --sync-config=config.yaml      \
                       --confirm
    ```
*   To sync groups using a denylist file, run the following command:
    ```terminal
    $ oc adm groups sync --blacklist=<denylist_file> \
                       --sync-config=config.yaml      \
                       --confirm
    ```
*   To sync a single group by the unique identifier of the group, run the following command:
    ```terminal
    $ oc adm groups sync <group_unique_identifier>    \
                       --sync-config=config.yaml      \
                       --confirm
    ```
*   To sync a single group with both an allowlist and a denylist, run the following command:
    ```terminal
    $ oc adm groups sync <group_unique_identifier>  \
                       --whitelist=<allowlist_file> \
                       --blacklist=<denylist_file> \
                       --sync-config=config.yaml    \
                       --confirm
    ```
*   To sync existing {{ product_title }} groups using an allowlist file, run the following command:
    ```terminal
    $ oc adm groups sync --type=openshift           \
                       --whitelist=<allowlist_file> \
                       --sync-config=config.yaml    \
                       --confirm
    ```

    :::note

    By default, all group synchronization operations are dry-run, so you must set the `--confirm` flag on the `oc adm groups sync` command to make changes to {{ product_title }} group records.
    
    :::