{%- set _mod_docs_content_type = "CONCEPT" %}
# Service accounts overview {id="service-accounts-overview_{{ context }}"}

You can use {{ product_title }} service accounts to allow a {{ product_title }} component to
directly access the API.  {._abstract}

Service accounts are API objects that exist within each project that provide a flexible way to control API
access without sharing a regular user’s credentials.

When you use the {{ product_title }} CLI or web console, your API token
authenticates you to the API. You can associate a component with a service account
so that they can access the API without using a regular user’s credentials.
{%- if openshift_online or openshift_origin or openshift_enterprise or openshift_webscale %}

For example, service accounts can allow:

*   Replication controllers to make API calls to create or delete pods
*   Applications inside containers to make API calls for discovery purposes
*   External applications to make API calls for monitoring or integration purposes
{% endif %}

Each service account’s user name is derived from its project and name:

```text
system:serviceaccount:<project>:<name>
```

Every service account is also a member of two groups:

| Group | Description |
| --- | --- |
| system:serviceaccounts | Includes all service accounts in the system. |
| system:serviceaccounts:&lt;project> | Includes all service accounts in the specified project. |