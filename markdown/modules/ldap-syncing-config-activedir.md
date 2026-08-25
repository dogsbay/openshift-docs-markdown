{%- set _mod_docs_content_type = "CONCEPT" %}
# About the Active Directory configuration file {id="ldap-syncing-config-activedir_{{ context }}"}

Review the Active Directory LDAP sync configuration file so you can define user queries and the attributes used in {{ product_title }} group records. {._abstract}

The Active Directory schema requires you to provide an LDAP query definition for user entries, as well as the attributes to represent them with in the internal {{ product_title }} group records.

For clarity, the group you create in {{ product_title }} should use attributes other than the distinguished name whenever possible for user-facing or administrator-facing fields. For example, identify the users of an {{ product_title }} group by their e-mail, but define the name of the group by the name of the group on the LDAP server. The following configuration file creates these relationships:

```yaml
kind: LDAPSyncConfig
apiVersion: v1
url: ldap://LDAP_SERVICE_IP:389
activeDirectory:
    usersQuery:
        baseDN: "ou=users,dc=example,dc=com"
        scope: sub
        derefAliases: never
        filter: (objectclass=person)
        pageSize: 0
    userNameAttributes: [ mail ]
    groupMembershipAttributes: [ memberOf ]
```

where:


`activeDirectory.userNameAttributes`
:   Specifies the attribute to use as the name of the user in the {{ product_title }} group record.

`activeDirectory.groupMembershiptAttributes`
:   Specifies the attribute on the user that stores the membership information.