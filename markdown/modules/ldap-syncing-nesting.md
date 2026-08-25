{%- set _mod_docs_content_type = "PROCEDURE" %}
# LDAP nested membership sync example {id="ldap-syncing-nesting_{{ context }}"}

Run the nested group LDAP sync example with an allowlisted group so you can verify that members of nested Active Directory groups appear in the resulting {{ product_title }} group. {._abstract}

**Prerequisites**

*   An LDAP sync configuration file exists. This procedure uses an example file named `augmented_active_directory_config_nested.yaml`.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

*   Sync with the `augmented_active_directory_config_nested.yaml` file by running the following command:
    ```terminal
    $ oc adm groups sync \
        'cn=admins,ou=groups,dc=example,dc=com' \
        --sync-config=augmented_active_directory_config_nested.yaml \
        --confirm
    ```

    :::note

    You must explicitly allowlist the `cn=admins,ou=groups,dc=example,dc=com` group.
    
    :::


    {{ product_title }} creates the following group record as a result of the previous sync operation:
    ```yaml
    apiVersion: user.openshift.io/v1
    kind: Group
    metadata:
      annotations:
        openshift.io/ldap.sync-time: 2015-10-13T10:08:38-0400
        openshift.io/ldap.uid: cn=admins,ou=groups,dc=example,dc=com
        openshift.io/ldap.url: LDAP_SERVER_IP:389
      creationTimestamp:
      name: admins
    users:
    - jane.smith@example.com
    - jim.adams@example.com
    ```

    where:

    `metadata.annotations.openshift.io/ldap.sync-time`
    :   Specifies the last time this {{ product_title }} group was synchronized with the LDAP server, in ISO 8601 format.

    `metadata.annotations.openshift.io/ldap.uid`
    :   Specifies the unique identifier for the group on the LDAP server.

    `metadata.annotations.openshift.io/ldap.url`
    :   Specifies the IP address and host of the LDAP server where the record of the group is stored.

    `metadata.name`
    :   Specifies the name of the group as specified by the sync file.

    `users`
    :   Specifies the users that are members of the group, named as specified by the sync file.

    :::note

    Members of nested groups are included because the group membership is flattened by the Microsoft Active Directory Server.
    
    :::