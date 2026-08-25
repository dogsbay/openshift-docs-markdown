{%- set _mod_docs_content_type = "SNIPPET" %}

Running a predefined checkup in an existing namespace involves setting up a service account for the checkup, creating the `Role` and `RoleBinding` objects for the service account, enabling permissions for the checkup, and creating the input config map and the checkup job. You can run a checkup multiple times.


:::important

You must always:

*   Verify that the checkup image is from a trustworthy source before applying it.
*   Review the checkup permissions before creating the `Role` and `RoleBinding` objects.

:::