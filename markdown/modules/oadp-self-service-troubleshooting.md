{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting {{ oadp_short }} Self-Service {id="oadp-self-service-troubleshooting_{{ context }}"}

**Error `pods is forbidden`**

If you are a non-admin user trying to access a namespace that you do not have access to, you get the following error:

```terminal
Error from server (Forbidden): pods is forbidden: User "nac-user" cannot list resource "pods" in API group "" in the namespace "openshift-adp"
```

The cluster administrator has not authorized the non-admin user to access the namespace.

**Solution**

The cluster administrator must authorize the non-admin user to access the namespace.