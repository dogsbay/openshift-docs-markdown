{%- set _mod_docs_content_type = "PROCEDURE" %}
# Syncing groups using the Active Directory schema {id="ldap-syncing-activedir_{{ context }}"}

You can sync LDAP groups for your {{ product_title }} cluster using the Active Directory schema by running `oc adm groups sync` with an LDAP sync configuration file. In this schema, group membership is stored in attributes on user entries, such as `memberOf`. {._abstract}

In the Active Directory schema, users exist on the LDAP server as first-class entries, and group membership is stored in attributes on the user. The following snippet of `ldif` defines the users and group for this
schema:

```ldif
dn: ou=users,dc=example,dc=com
objectClass: organizationalUnit
ou: users

dn: cn=Jane,ou=users,dc=example,dc=com
objectClass: person
objectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: testPerson
cn: Jane
sn: Smith
displayName: Jane Smith
mail: jane.smith@example.com
memberOf: admins (1)

dn: cn=Jim,ou=users,dc=example,dc=com
objectClass: person
objectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: testPerson
cn: Jim
sn: Adams
displayName: Jim Adams
mail: jim.adams@example.com
memberOf: admins
```

where:


`memberOf`
:   Specifies that the group memberships of the user are listed as attributes on the user, and the group does not exist as an entry on the server. The `memberOf` attribute does not have to be a literal attribute on the user; in some LDAP servers, the attribute is created during search and returned to the client, but not committed to the database.

**Prerequisites**

*   An LDAP sync configuration file exists. This procedure uses an example file named `active_directory_config.yaml`.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

*   Sync with the `active_directory_config.yaml` file by running the following command:
    ```terminal
    $ oc adm groups sync --sync-config=active_directory_config.yaml --confirm
    ```

    {{ product_title }} creates the following group record as a result of the previous sync operation:
    ```yaml
    apiVersion: user.openshift.io/v1
    kind: Group
    metadata:
      annotations:
        openshift.io/ldap.sync-time: 2015-10-13T10:08:38-0400
        openshift.io/ldap.uid: admins
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
    :   Specifies the name of the group as listed in the LDAP server.

    `users`
    :   Specifies the users that are members of the group, named as specified by the sync file.