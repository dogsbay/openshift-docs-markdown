{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resolving denial for access to resources {id="builds-troubleshooting-access-resources_{{ context }}"}

If your request for access to resources is denied:


Issue
:   A build fails with:

```terminal
requested access to the resource is denied
```


Resolution
:   You have exceeded one of the image quotas set on your project. Check your current quota and verify the limits applied and storage in use:

```terminal
$ oc describe quota
```