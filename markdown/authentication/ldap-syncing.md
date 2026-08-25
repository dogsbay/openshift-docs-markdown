---
title: Syncing LDAP groups
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Syncing LDAP groups {id="ldap-syncing"}
{%- set context = "ldap-syncing-groups" %}

Sync LDAP groups with {{ product_title }} so you can manage user membership and permissions using groups stored in your LDAP directory. {._abstract}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
As an administrator,
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
As an administrator with the `dedicated-admin` role,
{%- endif %}
you can use groups to manage users, change
their permissions, and enhance collaboration. Your organization may have already
created user groups and stored them in an LDAP server. {{ product_title }} can sync
those LDAP records with internal {{ product_title }} records, enabling you to manage
your groups in one place. {{ product_title }} currently supports group sync with
LDAP servers using three common schemas for defining group membership: RFC 2307,
Active Directory, and augmented Active Directory.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
For more information on configuring LDAP, see "Configuring an LDAP identity provider".
{% endif %}

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
For more information on configuring LDAP, see "Configuring an LDAP identity provider".
{% endif %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}

:::note

You must have `cluster-admin` privileges to sync groups.

:::

{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}

:::note

You must have `dedicated-admin` privileges to sync groups.

:::

{% endif %}

{% leveloffset +1 %}{% include "./modules/ldap-syncing-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-config-rfc2307.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-config-activedir.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-config-augmented-activedir.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ldap-syncing-running.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-running-all-ldap.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-running-openshift.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-running-subset.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ldap-syncing-pruning.md" %}{% endleveloffset %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/ldap-auto-syncing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring an LDAP identity provider](/authentication/identity_providers/configuring-ldap-identity-provider#configuring-ldap-identity-provider)
*   [Creating cron jobs](/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs-creating-cron_nodes-nodes-jobs)
{%- endif %}

{% leveloffset +1 %}{% include "./modules/ldap-syncing-examples.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-rfc2307.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-rfc2307-user-defined.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-rfc2307-user-defined-error.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-activedir.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-augmented-activedir.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-nesting-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ldap-syncing-nesting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ldap-syncing-spec.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [LDAP nested membership sync](#ldap-syncing-nesting-about_{{ context }})

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Configuring an LDAP identity provider](/authentication/identity_providers/configuring-ldap-identity-provider#configuring-ldap-identity-provider)
{% endif %}

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   [Configuring an LDAP identity provider](/authentication/sd-configuring-identity-providers#config-ldap-idp_sd-configuring-identity-providers)
{% endif %}