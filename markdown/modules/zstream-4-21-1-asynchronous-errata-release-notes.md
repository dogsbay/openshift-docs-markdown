{%- set _mod_docs_content_type = "CONCEPT" %}
# Asynchronous errata updates {id="zstream-4-21-1-asynchronous-errata-release-notes_{{ context }}"}

Security, bug fix, and enhancement updates for {{ product_title }} {{ product_version }} are released as asynchronous errata through the Red&#160;Hat Network. All {{ product_title }} {{ product_version }} errata is [available on the Red Hat Customer Portal](https://access.redhat.com/downloads/content/290/). See the [{{ product_title }} Life Cycle](https://access.redhat.com/support/policy/updates/openshift) for more information about asynchronous errata. {._abstract}

Red&#160;Hat Customer Portal users can enable errata notifications in the account settings for Red&#160;Hat Subscription Management (RHSM). When errata notifications are enabled, users are notified through email whenever new errata relevant to their registered systems are released.


:::note

Red&#160;Hat Customer Portal user accounts must have systems registered and consuming {{ product_title }} entitlements for {{ product_title }} errata notification emails to generate.

:::


This section will continue to be updated over time to provide notes on enhancements and bug fixes for future asynchronous errata releases of {{ product_title }} {{ product_version }}. Versioned asynchronous releases, for example with the form {{ product_title }} {{ product_version }}.z, will be detailed in subsections. In addition, releases in which the errata text cannot fit in the space provided by the advisory will be detailed in subsections that follow.


:::important

For any {{ product_title }} release, always review the instructions on [updating your cluster](/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console) properly.

:::